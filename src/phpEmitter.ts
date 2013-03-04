///<reference path='pratphall.ts' />

module Pratphall {

    export class PhpEmitOptions {
        //When true (default), this will always use single quotes unless there is an escape character.
        //When false, this will use what was used in JS unless there is an escape character.
        alwaysPreferSingleQuotes = true;

        //String per indent (default is 4 spaces)
        indent = '    ';

        //Preserve comments?
        comments = true;

        //When true, type hints are emitted
        typeHint = true;

        //When true, elseif is used instead of "else if"
        useElseif = true;

        //When require references is true, this emits a require_once
        requireReferences = false;

        //When true, control structures are considered blocks
        forceBlockOnControlStructures = false;

        //When true, type braces are on next line
        openingTypeBraceOnNextLine = false;

        //When true, function braces are on next line
        openingFunctionBraceNextLine = false;
    }

    export interface AstMatcher {
        nodeType: TypeScript.NodeType[];
        priority: number;
        propertyMatches?: {};
    }

    export interface EmitterExtension {
        name: string;
        description: string;
        matcher: AstMatcher;
        emit(ast: TypeScript.AST, emitter: PhpEmitter): bool;
    }

    export class EmitterError {
        constructor(public message: string, public line: number, public col: number) { }
    }

    export class UseDecl {
        alias: string;
        phpName: string;
    }

    export class Declaration {
        static order = 0;
        priority: number;
        uses: UseDecl[] = [];
        code = '';
        indent = 0;

        constructor(public name: string) {
            this.priority = ++Declaration.order;
        }
    }

    export class Namespace extends Declaration {
        children: Namespace[] = [];
        types: TypeDecl[] = [];

        constructor(name: string) { super(name); }

        getPhpName() { return this.name.replace(/\./g, '\\'); }
    }

    export class TypeDecl extends Declaration {

        constructor(public isInterface: bool, name: string) {
            super(name);
        }
    }

    export class PhpEmitter {

        static superGlobals = ['GLOBALS', '_SERVER', '_GET', '_POST',
            '_FILES', '_COOKIE', '_SESSION', '_REQUEST', '_ENV'];

        static reservedCalls = ['__halt_compiler', 'array', 'die', 'echo', 'empty', 'eval', 'exit',
            'isset', 'list', 'include', 'include_once', 'print', 'require', 'require_once', 'unset'];

        static reservedWords = ['abstract', 'and', 'as', 'break', 'callable', 'case', 'catch', 'class',
            'clone', 'const', 'continue', 'declare', 'default', 'do', 'else', 'elseif', 'enddeclare',
            'endfor', 'endforeach', 'endif', 'endswitch', 'endwhile', 'extends', 'final', 'for', 'foreach',
            'function', 'global', 'goto', 'if', 'implements', 'instanceof', 'insteadof', 'interface',
            'namespace', 'new', 'or', 'private', 'protected', 'public', 'return', 'static', 'switch',
            'throw', 'trait', 'try', 'use', 'var', 'while', 'xor'];

        static extensionsByNodeType: EmitterExtension[][] = [];

        static registerExtension(extension: EmitterExtension) {
            var arr: EmitterExtension[];
            extension.matcher.nodeType.forEach((value: TypeScript.NodeType) => {
                if (typeof extensionsByNodeType[value] === 'undefined') {
                    arr = extensionsByNodeType[value] = [];
                } else {
                    arr = extensionsByNodeType[value];
                }
                arr.push(extension);
                //re-sort
                arr.sort((a: EmitterExtension, b: EmitterExtension) => {
                    if (a.matcher.priority > b.matcher.priority) return -1;
                    else if (a.matcher.priority == b.matcher.priority) return 0;
                    else return 1;
                });
            });
        }

        topNamespace: Namespace;
        private allNamespaces: Namespace[] = [];
        private declStack: Declaration[] = [];
        private stack: TypeScript.AST[] = [];
        skipNextSemicolon = false;
        errors: EmitterError[] = [];
        warnings: EmitterError[] = [];
        scriptsEmittingTopNamespaceCode: TypeScript.Script[] = [];
        private tempVarCounter = 0;
        private nextConstructorInitializers: TypeScript.VarDecl[];
        private transactionStack: { declStackLength: number; codeLength: number; }[] = [];
        private justCallParentConstructor = false;
        currentScript: TypeScript.Script;

        constructor(private checker: TypeScript.TypeChecker,
                public options?: PhpEmitOptions = new PhpEmitOptions()) {
            this.reset();
        }

        reset() {
            this.topNamespace = new Namespace('');
            this.allNamespaces.push(this.topNamespace);
            this.declStack.push(this.topNamespace);
            this.tempVarCounter = 0;
        }

        clearErrors() {
            var errors = this.errors;
            this.errors = [];
            return errors;
        }

        clearWarnings() {
            var warnings = this.warnings;
            this.warnings = [];
            return warnings;
        }

        write(val: string) {
            this.declStack[this.declStack.length - 1].code += val;
            return this;
        }

        semicolon(lastAst: TypeScript.AST) {
            if (this.skipNextSemicolon) this.skipNextSemicolon = false;
            else if (lastAst == null || this.hasSemicolonAfterStatement(lastAst)) this.write(';');
            return this;
        }

        increaseIndent() {
            this.declStack[this.declStack.length - 1].indent++;
            return this;
        }

        decreaseIndent() {
            this.declStack[this.declStack.length - 1].indent--;
            return this;
        }

        newline(indent = true) {
            this.write('\n');
            if (indent) this.write(Array(this.declStack[this.declStack.length - 1].indent + 1).join(this.options.indent));
            return this;
        }

        beginTransaction() {
            this.transactionStack.push({
                declStackLength: this.declStack.length,
                codeLength: this.declStack[this.declStack.length - 1].code.length
            });
        }

        commitTransaction() {
            this.transactionStack.pop();
        }

        rollbackTransaction() {
            var entry = this.transactionStack.pop();
            if (this.declStack.length > entry.declStackLength) {
                this.declStack.splice(entry.declStackLength - 1, this.declStack.length - entry.declStackLength);
            }
            var top = this.declStack[this.declStack.length - 1];
            if (top.code.length > entry.codeLength) {
                top.code = top.code.substr(0, entry.codeLength);
            }
        }

        currentNamespace() {
            for (var i = this.declStack.length - 1; i >= 0; i--) {
                if (this.declStack[i] instanceof Namespace) return <Namespace>this.declStack[i];
            }
            return null;
        }

        findOrCreateNamespace(nsName: string) {
            //find it
            var newNs = null;
            this.allNamespaces.forEach((value: Namespace) => {
                if (value.name == nsName) newNs = value;
            });
            if (newNs != null) return newNs;
            //find/create my parent if I have one
            var lastIndex = nsName.lastIndexOf('.');
            var parent: Namespace;
            if (lastIndex != -1) parent = this.findOrCreateNamespace(nsName.substr(0, lastIndex));
            else parent = this.topNamespace;
            //create and add to parent and all
            newNs = new Namespace(nsName);
            parent.children.push(newNs);
            this.allNamespaces.push(newNs);
            return newNs;
        }

        pushNamespace(nsName: string) {
            var currNs = this.currentNamespace();
            if (currNs.name != '') nsName = currNs.name + '.' + nsName;
            //find/create it
            var newNs = this.findOrCreateNamespace(nsName);
            this.declStack.push(newNs);
        }

        pushTypeDecl(decl: TypeDecl) {
            var ns = this.currentNamespace();
            ns.types.push(decl);
            this.declStack.push(decl);
        }

        popDecl() {
            this.declStack.pop();
        }

        emit(ast: TypeScript.AST) {
            this.stack.push(ast);
            //check extension first
            if (this.extensionHandled(ast)) { /*no-op*/ }
            else {
                //parens?
                if (ast.isParenthesized && !this.removeParentheses(ast)) this.write('(');
                if (ast instanceof TypeScript.ArgDecl) this.emitArgDecl(<TypeScript.ArgDecl>ast);
                else if (ast instanceof TypeScript.BinaryExpression) this.emitBinaryExpression(<TypeScript.BinaryExpression>ast);
                else if (ast instanceof TypeScript.Block) this.emitBlock(<TypeScript.Block>ast);
                else if (ast instanceof TypeScript.CallExpression) this.emitCallExpression(<TypeScript.CallExpression>ast);
                else if (ast instanceof TypeScript.CaseStatement) this.emitCaseStatement(<TypeScript.CaseStatement>ast);
                else if (ast instanceof TypeScript.Catch) this.emitCatch(<TypeScript.Catch>ast);
                else if (ast instanceof TypeScript.ClassDeclaration) this.emitClassDeclaration(<TypeScript.ClassDeclaration>ast);
                else if (ast instanceof TypeScript.Comment) this.emitComment(<TypeScript.Comment>ast);
                else if (ast instanceof TypeScript.ConditionalExpression) this.emitConditionalExpression(<TypeScript.ConditionalExpression>ast);
                else if (ast instanceof TypeScript.DoWhileStatement) this.emitDoWhileStatement(<TypeScript.DoWhileStatement>ast);
                else if (ast instanceof TypeScript.EndCode) { /*no-op*/ }
                else if (ast instanceof TypeScript.Finally) this.emitFinally(<TypeScript.Finally>ast);
                else if (ast instanceof TypeScript.ForInStatement) this.emitForInStatement(<TypeScript.ForInStatement>ast);
                else if (ast instanceof TypeScript.ForStatement) this.emitForStatement(<TypeScript.ForStatement>ast);
                else if (ast instanceof TypeScript.Script) this.emitScript(<TypeScript.Script>ast);
                else if (ast instanceof TypeScript.FuncDecl) this.emitFuncDecl(<TypeScript.FuncDecl>ast);
                else if (ast instanceof TypeScript.Identifier) this.emitIdentifier(<TypeScript.Identifier>ast);
                else if (ast instanceof TypeScript.IfStatement) this.emitIfStatement(<TypeScript.IfStatement>ast);
                else if (ast instanceof TypeScript.ImportDeclaration) this.emitImportDeclaration(<TypeScript.ImportDeclaration>ast);
                else if (ast instanceof TypeScript.InterfaceDeclaration) this.emitInterfaceDeclaration(<TypeScript.InterfaceDeclaration>ast);
                else if (ast instanceof TypeScript.Jump) this.emitJump(<TypeScript.Jump>ast);
                else if (ast instanceof TypeScript.Label) this.emitLabel(<TypeScript.Label>ast);
                else if (ast instanceof TypeScript.LabeledStatement) this.emitLabeledStatement(<TypeScript.LabeledStatement>ast);
                else if (ast instanceof TypeScript.ModuleDeclaration) this.emitModuleDeclaration(<TypeScript.ModuleDeclaration>ast);
                else if (ast instanceof TypeScript.NumberLiteral) this.emitNumberLiteral(<TypeScript.NumberLiteral>ast);
                else if (ast instanceof TypeScript.RegexLiteral) this.emitRegexLiteral(<TypeScript.RegexLiteral>ast);
                else if (ast instanceof TypeScript.ReturnStatement) this.emitReturnStatement(<TypeScript.ReturnStatement>ast);
                else if (ast instanceof TypeScript.StringLiteral) this.emitStringLiteral(<TypeScript.StringLiteral>ast);
                else if (ast instanceof TypeScript.SwitchStatement) this.emitSwitchStatement(<TypeScript.SwitchStatement>ast);
                else if (ast instanceof TypeScript.Try) this.emitTry(<TypeScript.Try>ast);
                else if (ast instanceof TypeScript.TryCatch) this.emitTryCatch(<TypeScript.TryCatch>ast);
                else if (ast instanceof TypeScript.TryFinally) this.emitTryFinally(<TypeScript.TryFinally>ast);
                else if (ast instanceof TypeScript.UnaryExpression) this.emitUnaryExpression(<TypeScript.UnaryExpression>ast);
                else if (ast instanceof TypeScript.VarDecl) this.emitVarDecl(<TypeScript.VarDecl>ast);
                else if (ast instanceof TypeScript.WhileStatement) this.emitWhileStatement(<TypeScript.WhileStatement>ast);
                else switch (ast.nodeType) {
                    case TypeScript.NodeType.Empty: break;
                    case TypeScript.NodeType.EmptyExpr: break;
                    case TypeScript.NodeType.Error: break;
                    case TypeScript.NodeType.False:
                        this.write('false');
                        break;
                    case TypeScript.NodeType.Null:
                        this.write('null');
                        break;
                    case TypeScript.NodeType.This:
                        this.write('$this');
                        break;
                    case TypeScript.NodeType.True:
                        this.write('true');
                        break;
                    case TypeScript.NodeType.Super:
                        this.write('parent');
                        break;
                    case TypeScript.NodeType.Void:
                        this.write('null');
                        break;
                    default: throw new Error('Unrecognized ast - ' + ast.printLabel());
                }
                if (ast.isParenthesized && !this.removeParentheses(ast)) this.write(')');
            }
            this.stack.pop();
            return this;
        }

        extensionHandled(ast: TypeScript.AST): bool {
            if (typeof PhpEmitter.extensionsByNodeType[ast.nodeType] !== 'undefined') {
                return PhpEmitter.extensionsByNodeType[ast.nodeType].some((value: EmitterExtension) => {
                    if (this.matches(ast, value.matcher) && value.emit(ast, this)) return true;
                });
            } else return false;
        }

        matches(ast: TypeScript.AST, matcher: AstMatcher): bool {
            if (matcher.nodeType.indexOf(ast.nodeType) == -1) return false;
            if (typeof matcher.propertyMatches !== 'undefined') {
                for (var prop in matcher.propertyMatches) {
                    if (!(prop in ast)) return false;
                    var astProp = ast[prop];
                    var matcherProp = matcher.propertyMatches[prop];
                    if (typeof matcherProp === 'function') {
                        if (!matcherProp(astProp)) return false;
                    }
                }
            }
            return true;
        }

        emitCommaSeparated(ast: TypeScript.ASTList) {
            if (ast != null) {
                this.stack.push(ast);
                ast.members.forEach((member: TypeScript.AST, index: number) => {
                    if (index > 0) this.write(', ');
                    this.emit(member);
                });
                this.stack.pop();
            }
            return this;
        }

        //specific emitters

        emitArgDecl(ast: TypeScript.ArgDecl) {
            //do we have a type hint?
            if (this.options.typeHint && ast.type != null) {
                //TODO: change the string Array check when TS-331 is solved
                if (ast.type.isArray()) this.write('array ');
                else if (ast.type.getTypeName() == 'Array') this.write('array ');
                else if (ast.type.getTypeName() == 'PhpAssocArray') this.write('array ');
                else if (ast.type.symbol.declAST != null &&
                        ast.type.symbol.declAST.nodeType == TypeScript.NodeType.FuncDecl &&
                        !(<TypeScript.FuncDecl>ast.type.symbol.declAST).isConstructor) {
                    this.write('callable ');
                } else if ((ast.type.symbol.declAST instanceof TypeScript.TypeDeclaration &&
                        !('compileTimeOnly' in ast.type.symbol.declAST)) ||
                        (ast.type.symbol.declAST instanceof TypeScript.FuncDecl &&
                        (<TypeScript.FuncDecl>ast.type.symbol.declAST).isConstructor &&
                        !('compileTimeOnly' in (<TypeScript.FuncDecl>ast.type.symbol.declAST).classDecl)))  {
                    //must be type reference it appears
                    if (ast.typeExpr instanceof TypeScript.TypeReference) {
                        this.emit((<TypeScript.TypeReference>ast.typeExpr).term).write(' ');
                    }
                }
            }
            //if the ID starts with a dollar sign, it's a reference
            if (ast.id.actualText.charAt(0) == '$') this.write('&');
            //write id
            this.emit(ast.id);
            //optional?
            if (ast.isOptionalArg()) {
                this.write(' = ');
                //scalar?
                if (this.isScalar(ast.init)) this.emit(ast.init);
                else this.write('null');
            }
        }

        emitBinaryExpression(ast: TypeScript.BinaryExpression) {
            //"in" becomes array_key_exists
            if (ast.nodeType == TypeScript.NodeType.In) {
                this.emit(new TypeScript.CallExpression(TypeScript.NodeType.Call,
                    new TypeScript.Identifier('array_key_exists'),
                    (new TypeScript.ASTList()).append(ast.operand1).append(ast.operand2)));
            } else {
                var tokenInfo = this.getTokenInfo(ast);
                if (tokenInfo != null) {
                    this.emit(ast.operand1);
                    //string concat is different in PHP
                    var isAdd = tokenInfo.binopNodeType == TypeScript.NodeType.Add ||
                        tokenInfo.binopNodeType == TypeScript.NodeType.AsgAdd;
                    var isStringConcat = isAdd && (
                        (ast.operand1.type != null && ast.operand1.type.isString()) ||
                        (ast.operand2.type != null && ast.operand2.type.isString()));
                    if (isStringConcat) {
                        if (tokenInfo.binopNodeType == TypeScript.NodeType.Add) this.write(' . ');
                        else this.write(' .= ');
                    } else {
                        //warning, unknown type means we might have missed a string concat
                        if (isAdd && (ast.operand1.type == null || ast.operand1.type.getTypeName() == 'any')) {
                            this.addWarning(ast.operand1, 'Unknown type for addition, assuming arithmetic');
                        } else if (isAdd && (ast.operand2.type == null || ast.operand2.type.getTypeName() == 'any')) {
                            this.addWarning(ast.operand2, 'Unknown type for addition, assuming arithmetic');
                        }
                        this.write(' ' + tokenInfo.text + ' ');
                    }
                    this.emit(ast.operand2);
                } else switch (ast.nodeType) {
                    case TypeScript.NodeType.Dot:
                        //is this a reference to an object function? if so, we need to pull it out
                        if (ast.type != null && ast.type.symbol != null &&
                                ast.type.symbol.declAST instanceof TypeScript.FuncDecl &&
                                !(<TypeScript.FuncDecl>ast.type.symbol.declAST).isConstructor &&
                                ast.operand2 instanceof TypeScript.Identifier) {
                            //ignore the __invoke reference
                            if (this.getIdentifierText(<TypeScript.Identifier>ast.operand2) == '__invoke') {
                                this.emit(ast.operand1);
                                return;
                            } else if ((<TypeScript.FuncDecl>ast.type.symbol.declAST).isMethod()) {
                                //can't be a call...we only know if it's a call if we have a call above us but we're not in the param list
                                if (!this.stack.some((value: TypeScript.AST, index: number) => {
                                    return value instanceof TypeScript.CallExpression &&
                                        !(this.stack[index + 1] instanceof TypeScript.ASTList);
                                })) {
                                    this.write("(new \\ReflectionMethod('" + this.getQualifiedTypeName(ast.operand1) + "', '" +
                                            this.getIdentifierText(<TypeScript.Identifier>ast.operand2) +
                                            "'))->getClosure(");
                                    //static is null
                                    if ((<TypeScript.FuncDecl>ast.type.symbol.declAST).isStatic()) {
                                        this.write('null)');
                                    } else {
                                        //otherwise, it's the first operand
                                        this.emit(ast.operand1).write(')');
                                    }
                                    return;
                                }
                            }
                        }
                        //is dots all the way up to import/mod?
                        var curr = ast.operand1;
                        while (curr instanceof TypeScript.BinaryExpression &&
                                curr.nodeType == TypeScript.NodeType.Dot) {
                            curr = (<TypeScript.BinaryExpression>curr).operand1;
                        }
                        //is it possibly a slashable decl?
                        var isPropertyOrMethod = ast.operand2 instanceof TypeScript.Identifier && (<TypeScript.Identifier>ast.operand2).sym != null;
                        if (isPropertyOrMethod && (<TypeScript.Identifier>ast.operand2).sym.declAST instanceof TypeScript.FuncDecl &&
                            !(<TypeScript.FuncDecl>(<TypeScript.Identifier>ast.operand2).sym.declAST).isConstructor) {
                            isPropertyOrMethod = true;
                        } else if (isPropertyOrMethod && (<TypeScript.Identifier>ast.operand2).sym.declAST instanceof TypeScript.VarDecl) {
                            isPropertyOrMethod = true;
                        } else {
                            isPropertyOrMethod = false;
                        }
                        if (curr instanceof TypeScript.Identifier && !isPropertyOrMethod &&
                                (<TypeScript.Identifier>curr).sym != null &&
                                (<TypeScript.Identifier>curr).sym.isType() &&
                                ((<TypeScript.Identifier>curr).sym.declAST instanceof TypeScript.ModuleDeclaration ||
                                (<TypeScript.Identifier>curr).sym.declAST instanceof TypeScript.ImportDeclaration)) {
                            //emit
                            this.emit(ast.operand1).write('\\').emit(ast.operand2);
                            //try a use statement as needed
                            var ident = <TypeScript.Identifier>curr;
                            if (ast.operand2 instanceof TypeScript.Identifier) {
                                if (ident.sym.declAST instanceof TypeScript.ModuleDeclaration) {
                                    this.addModuleReference(<TypeScript.ModuleDeclaration>ident.sym.declAST);
                                } else {
                                    this.addImportReference(ident, <TypeScript.ImportDeclaration>ident.sym.declAST);
                                }
                            }
                        } else if (ast.operand2 instanceof TypeScript.Identifier &&
                                (<TypeScript.Identifier>ast.operand2).sym != null &&
                                (<TypeScript.Identifier>ast.operand2).sym.declAST != null &&
                                (<any>(<TypeScript.Identifier>ast.operand2).sym.declAST).isStatic &&
                                (<any>(<TypeScript.Identifier>ast.operand2).sym.declAST).isStatic()) {
                            //must be a static ref
                            this.emit(ast.operand1).write('::').emit(ast.operand2);
                        } else {
                            this.emit(ast.operand1).write('->').emit(ast.operand2);
                        }
                        break;
                    case TypeScript.NodeType.Member:
                        if (ast.operand1 instanceof TypeScript.Identifier) {
                            //must be a string literal in PHP
                            this.emit(new TypeScript.StringLiteral('"' +
                                this.getIdentifierText(<TypeScript.Identifier>ast.operand1) + '"'));
                        } else this.emit(ast.operand1);
                        this.write(' => ').emit(ast.operand2);
                        break;
                    case TypeScript.NodeType.Index:
                        var isIndex = ast.operand1.type.isArray() ||
                            this.typeHasNonObjectIndexFuncDecl(ast.operand1.type);
                        if (isIndex) {
                            this.emit(ast.operand1).write('[').emit(ast.operand2).write(']');
                        } else {
                            this.emit(ast.operand1).write('->{').emit(ast.operand2).write('}');
                        }
                        break;
                    default:
                        throw new Error('Unrecognized binary expression - ' + ast.printLabel());
                }
            }
        }

        emitBlock(ast: TypeScript.Block) {
            //need transaction because statements may become ambient after the extension is applied
            this.beginTransaction();
            var newlines = !this.isAllOnOneLine(ast);
            this.write('{');
            if (newlines) this.increaseIndent();
            if (!this.emitBlockStatements(ast.statements, newlines)) {
                //rollback
                this.rollbackTransaction();
            } else {
                this.commitTransaction();
                if (newlines) this.decreaseIndent().newline();
                else this.write(' ');
                this.write('}');
            }
        }

        emitBlockStatements(statements: TypeScript.ASTList, newlines: bool): bool {
            var atLeastOneSuccessOrEmpty = statements == null || statements.members.length == 0;
            statements.members.forEach((statement: TypeScript.AST, index: number) => {
                //begin txn because some things can be ambient after emit
                this.beginTransaction();
                //pre comments (but not on mods, classes, or interfaces)
                if (!(statement instanceof TypeScript.NamedDeclaration)) {
                    this.emitCommentSet(statement.preComments, true, false);
                }
                //ignore empty
                if (!this.isEmpty(statement)) {
                    if (newlines) this.newline();
                    else this.write(' ');
                    this.emit(statement);
                    //rollback on ambient
                    var isRollback = statement instanceof TypeScript.TypeDeclaration &&
                            (<TypeScript.TypeDeclaration>statement).isAmbient();
                    //also on empty var decl
                    isRollback = isRollback || (statement instanceof TypeScript.VarDecl &&
                        (<TypeScript.VarDecl>statement).init == null);
                    //also on ambient func decl
                    isRollback = isRollback || (statement instanceof TypeScript.FuncDecl &&
                        ((<TypeScript.FuncDecl>statement).isOverload ||
                        (<TypeScript.FuncDecl>statement).isAmbient()));
                    if (isRollback) {
                        this.rollbackTransaction();
                        return;
                    }
                    atLeastOneSuccessOrEmpty = true;
                    this.semicolon(statement);
                    //extra newlines for decls
                    var hasExtraNewline = statement instanceof TypeScript.FuncDecl ||
                        statement instanceof TypeScript.NamedDeclaration;
                    if (newlines && hasExtraNewline) this.newline(false);
                }
                this.commitTransaction();
                //post comments (but not on mods, classes, or interfaces)
                if (!(statement instanceof TypeScript.NamedDeclaration)) {
                    this.emitCommentSet(statement.postComments, false, false);
                }
            });
            return atLeastOneSuccessOrEmpty;
        }

        emitCallExpression(ast: TypeScript.CallExpression) {
            if (ast.nodeType == TypeScript.NodeType.New) {
                if (ast.target.nodeType == TypeScript.NodeType.TypeRef) {
                    this.write('[]');
                } else {
                    this.write('new ').emit(ast.target).write('(').emitCommaSeparated(ast.arguments).write(')');
                }
            } else {
                //is the target a property reference of an object?
                if (ast.target.nodeType == TypeScript.NodeType.Dot &&
                        (<TypeScript.BinaryExpression>ast.target).operand2 instanceof TypeScript.Identifier) {
                    //any or unknown?
                    if (ast.target.type != null &&
                            TypeScript.hasFlag(ast.target.type.primitiveTypeClass, TypeScript.Primitive.Any)) {
                        //warn
                        this.addWarning(ast.target,
                            'Unknown type of call, cannot determine if closure or method, assuming method');
                        this.emit(ast.target).write('(').emitCommaSeparated(ast.arguments).write(')');
                    } else {
                        var binex = <TypeScript.BinaryExpression>ast.target;
                        var classDecl: TypeScript.NamedDeclaration = null;
                        if (binex.operand1.type != null &&
                                binex.operand1.type.symbol.declAST instanceof TypeScript.NamedDeclaration) {
                            classDecl = <TypeScript.NamedDeclaration>binex.operand1.type.symbol.declAST;
                        }
                        var isClosureProperty = ast.target.type != null &&
                            ast.target.type.symbol != null && ast.target.type.symbol.declAST != null &&
                            ast.target.type.symbol.declAST instanceof TypeScript.FuncDecl &&
                            !(<TypeScript.FuncDecl>ast.target.type.symbol.declAST).isMethod();
                        //is class non-property or static?
                        if ((classDecl != null || binex.operand1.type.isClassInstance()) && !isClosureProperty) {
                            //is compile time only?
                            if (classDecl != null && 'compileTimeOnly' in classDecl) {
                                //unknown which, try either
                                //(method_exists($val, 'bar') ? $val->bar() : $val->bar->__invoke());
                                this.write('(method_exists(').emit((<TypeScript.BinaryExpression>ast.target).operand1).
                                    write(", '" + this.getIdentifierText(<TypeScript.Identifier>(<TypeScript.BinaryExpression>ast.
                                        target).operand2) + "') ? ").emit(ast.target).
                                        write('(').emitCommaSeparated(ast.arguments).write(') : ').
                                        emit(ast.target).write('->__invoke(').emitCommaSeparated(ast.arguments).
                                        write('))');
                            } else {
                                //normal
                                this.emit(ast.target).write('(').emitCommaSeparated(ast.arguments).write(')');
                            }
                        } else {
                            //closure
                            this.emit(ast.target).write('->__invoke(').emitCommaSeparated(ast.arguments).write(')');
                        }
                    }
                } else {
                    this.emit(ast.target);
                    //is the target a parent constructor call?
                    if (ast.target.nodeType == TypeScript.NodeType.Super) this.write('::__construct');
                    this.write('(').emitCommaSeparated(ast.arguments).write(')');
                }
            }
        }

        emitCatch(ast: TypeScript.Catch) {
            this.write(' catch (Exception $' + this.getIdentifierText(ast.param.id) + ') ').emit(ast.body);
        }

        emitCaseStatement(ast: TypeScript.CaseStatement) {
            if (ast.expr == null) this.write('default:');
            else this.write('case ').emit(ast.expr).write(':');
            if (ast.body != null && ast.body.members.length > 0) {
                //newlines?
                if (this.isAllOnOneLine(ast) && ast.body.members.length == 1) {
                    this.write(' ').emit(ast.body.members[0]).semicolon(ast.body.members[0]);
                } else {
                    this.increaseIndent().emitBlockStatements(ast.body, true);
                    this.decreaseIndent();
                }
            }
        }

        emitClassDeclaration(ast: TypeScript.ClassDeclaration) {
            if (ast.isAmbient()) return;
            //push a fresh decl
            this.pushTypeDecl(new TypeDecl(false, this.getIdentifierText(ast.name)));
            //pre comments
            this.emitCommentSet(ast.preComments, false, true);
            this.write('class ').emit(ast.name);
            //can only have one extends
            if (ast.extendsList != null && ast.extendsList.members.length > 1) throw new Error('Multiple extends');
            if (ast.extendsList != null && ast.extendsList.members.length > 0) {
                //don't handle compile time only extends
                if (ast.extendsList.members[0].type == null ||
                        !('compileTimeOnly' in ast.extendsList.members[0].type.symbol.declAST)) {
                    this.write(' extends ').emit(ast.extendsList.members[0]);
                }
            }
            if (ast.implementsList != null && ast.implementsList.members.length > 0) {
                //don't handle compile time only implements
                var first = true;
                ast.implementsList.members.forEach((value: TypeScript.AST) => {
                    if (value.type == null || !('compileTimeOnly' in value.type.symbol.declAST)) {
                        if (!first) this.write(', ');
                        else {
                            first = false;
                            this.write(' implements ');
                        }
                        this.emit(value);
                    }
                });
            }
            if (this.options.openingTypeBraceOnNextLine) this.newline();
            else this.write(' ');
            this.write('{').increaseIndent();
            var staticExtraInitVars: TypeScript.VarDecl[] = [];
            //members
            if (ast.members != null) {
                //vars w/ complex inits end up in constructor or at end
                this.nextConstructorInitializers = [];
                //find extra inits first and handle constructor properties
                ast.members.members.forEach((member: TypeScript.AST) => {
                    //is a var decl w/ non-standard init?
                    if (member instanceof TypeScript.VarDecl && (<TypeScript.VarDecl>member).init != null &&
                            !this.isScalar((<TypeScript.VarDecl>member).init)) {
                        if ((<TypeScript.VarDecl>member).isStatic()) {
                            staticExtraInitVars.push(<TypeScript.VarDecl>member);
                        } else this.nextConstructorInitializers.push(<TypeScript.VarDecl>member);
                    } else if (member instanceof TypeScript.FuncDecl && (<TypeScript.FuncDecl>member).isConstructor) {
                        //gotta make new properties from pub/priv constructor args
                        (<TypeScript.FuncDecl>member).arguments.members.forEach((value: TypeScript.ArgDecl) => {
                            if (value.isProperty()) {
                                this.newline();
                                if (value.isPublic()) this.write('public ');
                                else this.write('private ');
                                this.emit(value.id).write(';').newline();
                            }
                        });
                    }
                });
                //now the actual members
                var hasConstructor = false;
                ast.members.members.forEach((member: TypeScript.AST) => {
                    this.newline().emit(member).newline();
                    if (member instanceof TypeScript.FuncDecl && (<TypeScript.FuncDecl>member).isConstructor) {
                        hasConstructor = true;
                    }
                });
                //if we have initializers but no constructor, we have to make one
                if (this.nextConstructorInitializers.length > 0 && !hasConstructor) {
                    //find the closest parent's constructor
                    var hasParent = false;
                    var parent = ast;
                    do {
                        if (parent.extendsList != null && parent.extendsList.members.length > 0) {
                            hasParent = true;
                            parent = <TypeScript.ClassDeclaration>(<TypeScript.FuncDecl>parent.extendsList.
                                members[0].type.symbol.declAST).classDecl;
                            if (parent.isAmbient()) parent = null;
                        } else parent = null;
                    } while (parent != null && parent.constructorDecl == null);
                    if (parent != null) {
                        //tell the func decl to skip the property stuff
                        this.justCallParentConstructor = true;
                        this.newline().emit(parent.constructorDecl).newline();
                        this.justCallParentConstructor = false;
                    } else {
                        //we'll just make one
                        this.newline().write('public function __construct() {').increaseIndent();
                        if (hasParent) this.newline().write('parent::__construct();');
                        this.nextConstructorInitializers.forEach((value: TypeScript.VarDecl) => {
                            this.newline().write('$this->' + this.getIdentifierText(value.id) +
                                ' = ').emit(value.init).write(';');
                        });
                        this.decreaseIndent().newline().write('}');
                    }
                }
                //unset constructor init
                this.nextConstructorInitializers = [];
            }
            this.decreaseIndent().newline().write('}');
            //static extra init vars?
            staticExtraInitVars.forEach((value: TypeScript.VarDecl) => {
                if (value.isPrivate()) {
                    var tmpName = this.newTempVarName();
                    this.newline().write('$' + tmpName + " = (new \\ReflectionClass('" +
                        this.getIdentifierText(ast.name) + "'))->getProperty('" +
                        this.getIdentifierText(value.id) + "');").newline().
                        write('$' + tmpName + '->setAccessible(true);').newline().
                        write('$' + tmpName + '->setValue(').emit(value.init).write(');');
                } else {
                    this.newline().write(this.getIdentifierText(ast.name) + '::$' +
                        this.getIdentifierText(value.id) + ' = ').emit(value.init).write(';');
                }
            });
            //pop decl
            this.popDecl();
        }

        emitComment(ast: TypeScript.Comment) {
            ast.content.split('\n').forEach((value: string, index: number) => {
                if (index > 0) this.newline();
                //take off only multiples of indent and/or tabs
                while (true) {
                    if (value.indexOf('\t') == 0) value = value.substr(1);
                    else if (value.indexOf(this.options.indent) == 0) value = value.substr(this.options.indent.length);
                    else break;
                }
                //add space if last wasn't newline/space/tab and first of value isn't
                var currCode = this.declStack[this.declStack.length - 1].code;
                if (value.length > 0 && currCode.length > 0) {
                    var lastChar = currCode.charAt(currCode.length - 1);
                    var firstChar = value.charAt(value.length - 1);
                    if (lastChar != '\n' && lastChar != ' ' && lastChar != '\t' &&
                        firstChar != '\n' && firstChar != ' ' && firstChar != '\t') this.write(' ');
                }
                this.write(value);
            });
        }

        emitCommentSet(comments: TypeScript.Comment[], newlineBefore: bool, newlineAfter: bool) {
            if (this.options.comments && comments != null && comments.length > 0) {
                comments.forEach((value: TypeScript.Comment) => {
                    //ignore refs
                    if (value.content.indexOf('///<reference') == -1) {
                        if (newlineBefore) this.newline();
                        this.emit(value);
                        if (newlineAfter) this.newline();
                    }
                });
            }
        }

        emitConditionalExpression(ast: TypeScript.ConditionalExpression) {
            this.emit(ast.operand1).write(' ? ').emit(ast.operand2).write(' : ').emit(ast.operand3);
        }

        emitDoWhileStatement(ast: TypeScript.DoWhileStatement) {
            this.write('do ').emit(ast.body).semicolon(ast.body).write(' while (').emit(ast.cond).write(')');
        }

        emitFinally(ast: TypeScript.Finally) {
            this.write(' finally ').emit(ast.body);
        }

        emitForInStatement(ast: TypeScript.ForInStatement) {
            this.write('foreach (array_keys(').emit(ast.obj).write(') as ');
            if (ast.lval instanceof TypeScript.VarDecl) this.emit((<TypeScript.VarDecl>ast.lval).id);
            else this.emit(ast.lval);
            this.write(') ');
            var body = ast.body;
            if (this.options.forceBlockOnControlStructures) {
                body = this.forceBlockWrap(body);
            }
            this.emit(body).semicolon(body);
        }

        emitForStatement(ast: TypeScript.ForStatement) {
            this.write('for (');
            if (ast.init != null) this.emit(ast.init);
            this.write('; ');
            if (ast.cond != null) this.emit(ast.cond);
            this.write('; ');
            if (ast.incr != null) this.emit(ast.incr);
            this.write(') ');
            var body = ast.body;
            if (this.options.forceBlockOnControlStructures) {
                body = this.forceBlockWrap(body);
            }
            this.emit(body).semicolon(body);
        }

        emitFuncDecl(ast: TypeScript.FuncDecl) {
            //ignore overloads and ambients
            if (ast.isOverload || ast.isAmbient()) return;
            //accessors disallowed
            if (ast.isAccessor()) throw new Error('Accessors not allowed');
            //actually a closure since it's nested?
            if (ast.enclosingFnc != null && !ast.isAnonymousFn()) {
                //it's an error if we have any variable of the same name
                if (ast.enclosingFnc.vars != null && ast.enclosingFnc.vars.members.some((value: TypeScript.AST) => {
                    return value instanceof TypeScript.VarDecl &&
                        this.getIdentifierText(<TypeScript.Identifier>(<TypeScript.VarDecl>value).id) ==
                        this.getIdentifierText(ast.name);
                })) {
                    this.addError(ast.name, 'Cannot have variable and nested function with the same name in function');
                    return;
                }
                this.write('$' + this.getIdentifierText(ast.name) + ' = ');
            }
            //visibility
            if (ast.isMethod() || ast.isConstructor) {
                if (!ast.isPrivate()) this.write('public ');
                else this.write('private ');
            }
            //static?
            if (ast.isStatic()) this.write('static ');
            this.write('function ');
            //we don't do newlines if they didn't
            var closure = ast.isAnonymousFn() || ast.enclosingFnc != null;
            var newlines = !this.isAllOnOneLine(ast) || (this.options.openingFunctionBraceNextLine && !closure);
            //closure?
            if (closure) this.write('(');
            else if (ast.isConstructor) this.write('__construct(');
            else if (ast.isMethod() && this.getIdentifierText(ast.name) == 'toString') this.write('__toString(');
            else {
                //if it starts with dollar sign, it's actually a reference
                if (ast.name.actualText.charAt(0) == '$') this.write('&');
                this.emit(ast.name).write('(');
            }
            //must make sure we ignore rest params
            var first = true;
            ast.arguments.members.forEach((value: TypeScript.ArgDecl, index: number) => {
                //write?
                if (!ast.variableArgList || index != ast.arguments.members.length - 1) {
                    if (first) first = false;
                    else this.write(', ');
                    this.emit(value);
                }
            });
            this.write(')');
            //sig?
            if (ast.isSignature()) this.write(';');
            else {
                if (this.options.openingFunctionBraceNextLine && !closure) {
                    this.newline();
                } else this.write(' ');
                if (!closure) this.write('{');
                if (newlines) this.increaseIndent();
                //any globals?
                var globCount = 0;
                ast.freeVariables.forEach((value: TypeScript.Symbol, index: number) => {
                    //is global but not super global? (can't be all caps, or that's a const)
                    var isNestedFunc = value.declAST != null && value.declAST instanceof TypeScript.FuncDecl &&
                        (<TypeScript.FuncDecl>value.declAST).enclosingFnc != null;
                    if (value.declModule == null && value.declAST != null && (value.isVariable() || isNestedFunc) &&
                            PhpEmitter.superGlobals.indexOf(value.name) == -1 && value.name != value.name.toUpperCase()) {
                        if (ast.isMethod() || ast.isConstructor) {
                            this.addWarning(ast, "Use of global variable '" + value.name + "' in class method");
                        }
                        globCount++;
                        if (globCount == 1) {
                            if (newlines && !closure) this.newline();
                            else this.write('use (');
                            if (!closure) this.write('global ');
                        } else this.write(', ');
                        //if it's dollar-signed or self-referencing, gotta be a reference
                        var variableAssignedToThisFunction = value.declAST instanceof TypeScript.VarDecl &&
                            (<TypeScript.VarDecl>value.declAST).init == ast;
                        if (value.name.charAt(0) == '$' || value.declAST == ast || variableAssignedToThisFunction) {
                            this.write('&');
                        }
                        if (value.name.charAt(0) != '$') this.write('$');
                        this.write(value.name);
                    }
                });
                if (globCount > 0) {
                    if (closure) this.write(') ');
                    else this.write(';');
                }
                if (closure) this.write('{');
                //optional inits?
                ast.arguments.members.forEach((value: TypeScript.ArgDecl, index: number) => {
                    //write?
                    if (value.isOptionalArg() && (!ast.variableArgList || index != ast.arguments.members.length - 1) &&
                            value.init != null && !this.isScalar(value.init)) {
                        if (newlines) this.newline();
                        else this.write(' ');
                        this.write('if (').emit(value.id).write(' === null) ').
                            emit(value.id).write(' = ').emit(value.init).write(';');
                    }
                });
                //need to assign arguments?
                ast.freeVariables.some((value: TypeScript.Symbol) => {
                    if (value.name == 'arguments' && value.declAST == null) {
                        if (newlines) this.newline();
                        else this.write(' ');
                        this.write('$arguments = func_get_args();');
                        return true;
                    }
                    return false;
                });
                //variadic?
                if (ast.variableArgList) {
                    //grab last arg
                    var lastArg = ast.arguments.members[ast.arguments.members.length - 1];
                    if (newlines) this.newline();
                    else this.write(' ');
                    //set just to func_get_args if only arg
                    if (ast.arguments.members.length == 1) {
                        this.emit((<TypeScript.ArgDecl>lastArg).id).write(' = func_get_args();');
                    } else {
                        //slice
                        this.emit((<TypeScript.ArgDecl>lastArg).id).write(' = array_slice(func_get_args(), ' +
                            (ast.arguments.members.length - 1) + ');');
                    }
                }
                //is constructor?
                if (ast.isConstructor) {
                    //either defer to parent or set pub/priv properties
                    if (this.justCallParentConstructor) {
                        //we're just deferring to the parent here
                        if (newlines) this.newline();
                        else this.write(' ');
                        this.write('parent::__construct(');
                        if (ast.arguments != null) {
                            ast.arguments.members.forEach((value: TypeScript.ArgDecl, index: number) => {
                                if (index > 0) this.write(', ');
                                this.emit(value.id);
                            });
                        }
                        this.write(');');
                    } else if (ast.arguments != null) {
                        //pub/priv properties
                        ast.arguments.members.forEach((value: TypeScript.ArgDecl) => {
                            if (value.isProperty()) {
                                if (newlines) this.newline();
                                else this.write(' ');
                                this.write('$this->' + this.getIdentifierText(value.id) + ' = $' +
                                    this.getIdentifierText(value.id) + ';');
                            }
                        });
                    }
                    //has extra init vals?
                    this.nextConstructorInitializers.forEach((value: TypeScript.VarDecl) => {
                        if (newlines) this.newline();
                        else this.write(' ');
                        this.write('$this->' + this.getIdentifierText(value.id) + ' = ').emit(value.init).write(';');
                    });
                }
                //emit contents
                if (!ast.isConstructor || !this.justCallParentConstructor) {
                    this.emitBlockStatements(ast.bod, newlines);
                }
                if (newlines) this.decreaseIndent().newline();
                else this.write(' ');
                this.write('}');
            }
        }

        emitIdentifier(ast: TypeScript.Identifier) {
            //undefined is null, no more processing...
            if (ast.actualText == 'undefined') {
                this.write('null');
                return;
            }
            //if it's a reference to a top-level function, we have to make it a closure
            if (ast.sym != null && !ast.sym.isVariable() && ast.type != null && ast.type.symbol != null &&
                    ast.type.symbol.declAST instanceof TypeScript.FuncDecl &&
                    this.stack.length > 1) {
                //cannot have a parent that is a call w/ this type as the target (HACK)
                var hasCallWithMeAsType = false;
                for (var i = this.stack.length - 2; i >= 0; i--) {
                    if (this.stack[i] instanceof TypeScript.CallExpression) {
                        hasCallWithMeAsType = (<TypeScript.CallExpression>this.stack[i]).target.type != null &&
                            (<TypeScript.CallExpression>this.stack[i]).target.type.typeID == ast.type.typeID;
                        break;
                    }
                }
                //func ref...but not class name?
                if (!hasCallWithMeAsType && ast.sym.declAST instanceof TypeScript.FuncDecl &&
                        !(<TypeScript.FuncDecl>ast.sym.declAST).isConstructor) {
                    //(new ReflectionFunction('a'))->getClosure()
                    this.write("(new \\ReflectionFunction('" + this.getIdentifierText(ast) + "'))->getClosure()");
                    return;
                }
            }
            //must be variable for $
            var hasDollar = ast.sym != null && ast.sym.isVariable() && (!ast.sym.isInstanceProperty() ||
                TypeScript.hasFlag(ast.sym.flags, TypeScript.SymbolFlags.Static)) &&
                !TypeScript.hasFlag(ast.sym.flags, TypeScript.SymbolFlags.Constant);
            //get the text
            var text = this.getIdentifierText(ast);
            //all caps means const
            if (hasDollar && text == text.toUpperCase() && PhpEmitter.superGlobals.indexOf(text) == -1) {
                hasDollar = false;
            }
            //nested functions which we make anon are ok to have dollar signs
            if (!hasDollar && ast.type != null && ast.type.symbol.declAST != null &&
                    ast.type.symbol.declAST instanceof TypeScript.FuncDecl &&
                    (<TypeScript.FuncDecl>ast.type.symbol.declAST).enclosingFnc != null) {
                hasDollar = true;
            }
            //has dollar if it's a property
            if (!hasDollar && ast.sym != null && ast.sym.isMember() &&
                    ast.sym.declAST instanceof TypeScript.BoundDecl &&
                    (<TypeScript.BoundDecl>ast.sym.declAST).isProperty() &&
                    (<TypeScript.BoundDecl>ast.sym.declAST).id === ast) {
                hasDollar = true;
            }
            //if it's not a dollar, it can't be reserved word regardless of case (unless it's a property)
            if (!hasDollar && (ast.sym == null || !ast.sym.isMember() || !ast.sym.isVariable())) {
                var lowerCase = text.toLowerCase();
                if (PhpEmitter.reservedWords.indexOf(lowerCase) != -1) {
                    this.addError(ast, "'" + text + "' is reserved and cannot be used as an identifier");
                } else {
                    //also cannot be a reserved function unless it's a call
                    var isCall = this.stack.length > 1 &&
                        this.stack[this.stack.length - 2] instanceof TypeScript.CallExpression;
                    if (!isCall && PhpEmitter.reservedCalls.indexOf(lowerCase) != -1) {
                        this.addError(ast, "'" + text + "' is reserved and cannot be used as an identifier");
                    }
                }
            }
            //write dollar
            if (hasDollar) this.write('$');
            var shouldWrite = true;
            //check namespaces and what not
            if (ast.actualText == 'Traversable') {
                //console.log(this.stack[this.stack.length - 2]);
                //console.log(ast);
            }
            if (ast.sym != null && (ast.sym.declAST instanceof TypeScript.NamedDeclaration ||
                    (ast.sym.declAST instanceof TypeScript.FuncDecl &&
                    (<TypeScript.FuncDecl>ast.sym.declAST).isConstructor))) {
                //do we need to prefix with a slash?
                if (ast.sym.container.name == '__GLO') {
                    //if it's a top level module, we prefix with slash no matter what
                    //otherwise if it's a top level type, we only prefix if we are not in the top level namespace
                    if (ast.sym.declAST instanceof TypeScript.ModuleDeclaration) this.write('\\');
                    else if (this.currentNamespace().name != '') this.write('\\');
                } else if (ast.sym.declAST instanceof TypeScript.TypeDeclaration ||
                        (ast.sym.declAST instanceof TypeScript.FuncDecl &&
                        (<TypeScript.FuncDecl>ast.sym.declAST).isConstructor)) {
                    //if the current namespace is a child of what's referenced,
                    //  we have to fully qualify the reference
                    //can't have a binary expression above me, because those are handled w/ imports
                    if (this.stack.length == 1 ||
                           !(this.stack[this.stack.length - 2] instanceof TypeScript.BinaryExpression)) {
                        var qualified = this.getQualifiedTypeName(ast.sym.declAST);
                        if (qualified.indexOf('\\' + this.currentNamespace().getPhpName()) != 0) {
                            this.write(qualified);
                            shouldWrite = false;
                        }
                    }
                }
            }
            //write
            if (shouldWrite) this.write(text);
        }

        emitIfStatement(ast: TypeScript.IfStatement) {
            this.write('if (').emit(ast.cond).write(') ');
            var thenBod = ast.thenBod;
            if (this.options.forceBlockOnControlStructures) {
                thenBod = this.forceBlockWrap(thenBod);
            }
            this.emit(thenBod).semicolon(thenBod);
            //else
            if (ast.elseBod != null) {
                //do we need a newline?
                if (!this.options.forceBlockOnControlStructures &&
                        (this.hasSemicolonAfterStatement(thenBod) || this.isAllOnOneLine(thenBod))) {
                    this.newline();
                } else this.write(' ');
                this.write('else');
                if (!(ast.elseBod instanceof TypeScript.IfStatement) || !this.options.useElseif) {
                    this.write(' ');
                }
                var elseBod = ast.elseBod;
                if (this.options.forceBlockOnControlStructures && !(ast.elseBod instanceof TypeScript.IfStatement)) {
                    elseBod = this.forceBlockWrap(elseBod);
                }
                this.emit(elseBod).semicolon(elseBod);
            }
        }

        emitImportDeclaration(ast: TypeScript.ImportDeclaration) {
            //TODO: should I leave them alone?
        }

        emitInterfaceDeclaration(ast: TypeScript.InterfaceDeclaration) {
            //ignore ambient
            if (ast.isAmbient()) return;
            //push decl
            this.pushTypeDecl(new TypeDecl(true, this.getIdentifierText(ast.name)));
            //pre comments
            this.emitCommentSet(ast.preComments, false, true);
            this.write('interface ').emit(ast.name);
            if (ast.extendsList != null && ast.extendsList.members.length > 0) {
                //don't handle compile time only extends
                var first = true;
                ast.extendsList.members.forEach((value: TypeScript.AST) => {
                    if (value.type == null || !('compileTimeOnly' in value.type.symbol.declAST)) {
                        if (!first) this.write(', ');
                        else {
                            first = false;
                            this.write(' extends ');
                        }
                        this.emit(value);
                    }
                });
            }
            if (this.options.openingTypeBraceOnNextLine) this.newline();
            else this.write(' ');
            this.write('{').increaseIndent();
            //members
            if (ast.members != null) {
                ast.members.members.forEach((member: TypeScript.AST) => {
                    //no properties or optional ones
                    if (member instanceof TypeScript.FuncDecl && member.type != null &&
                            member.type.symbol != null && !TypeScript.hasFlag(
                            member.type.symbol.flags, TypeScript.SymbolFlags.Optional)) {
                        this.newline().emit(member).newline();
                    }
                });
            }
            this.decreaseIndent().newline().write('}');
            //pop
            this.popDecl();
        }

        emitJump(ast: TypeScript.Jump) {
            //becomes goto
            if (ast.hasExplicitTarget()) this.write('goto ' + ast.target);
            else if (ast.nodeType == TypeScript.NodeType.Break) this.write('break');
            else this.write('continue');
        }

        emitLabel(ast: TypeScript.Label) {
            this.emit(ast.id).write(':');
        }

        emitLabeledStatement(ast: TypeScript.LabeledStatement) {
            if (ast.labels != null) {
                ast.labels.members.forEach((label: TypeScript.AST)  => {
                    this.emit(label).newline();
                });
            }
            this.emit(ast.stmt);
        }

        emitModuleDeclaration(ast: TypeScript.ModuleDeclaration) {
            //push decl
            this.pushNamespace(this.getIdentifierText(ast.name));
            this.emitBlockStatements(ast.members, true);
            //pop
            this.popDecl();
        }

        emitNumberLiteral(ast: TypeScript.NumberLiteral) {
            this.write(ast.value.toString());
            if (ast.hasEmptyFraction) this.write('.0');
        }

        emitRegexLiteral(ast: TypeScript.RegexLiteral) {
            this.addError(ast, 'Regex is unsupported');
        }

        emitReturnStatement(ast: TypeScript.ReturnStatement) {
            if (ast.returnExpression == null) this.write('return');
            else this.write('return ').emit(ast.returnExpression);
        }

        emitScript(ast: TypeScript.Script) {
            this.currentScript = ast;
            //grab length of top ns code
            var topNsCodeLength = this.topNamespace.code.length;
            //include refs?
            if (this.options.requireReferences) {
                var first = false;
                ast.referencedFiles.forEach((value: TypeScript.IFileReference) => {
                    //ignore decl files
                    if ((value.path.length <= 5 || value.path.substr(-5) != '.d.ts') &&
                            value.path.substr(-3) == '.ts') {
                        if (first) first = false;
                        else this.newline();
                        this.write("require_once('" + value.path.slice(0, -3) + ".php');");
                    }
                });
            }
            this.emitBlockStatements(ast.bod, true);
            //did we emit top ns code?
            if (this.topNamespace.code.length > topNsCodeLength &&
                    this.topNamespace.code.substr(topNsCodeLength).trim().length > 0) {
                this.scriptsEmittingTopNamespaceCode.push(ast);
            }
            this.currentScript = null;
        }

        emitStringLiteral(ast: TypeScript.StringLiteral) {
            //sometimes it's just a number
            if (ast.text.charAt(0) != '"' && ast.text.charAt(0) != "'") this.write(ast.text);
            else {
                //is there a slash?
                var isSlash = ast.text.indexOf('\\') != -1;
                var isSingleQuote = !isSlash && (this.options.alwaysPreferSingleQuotes || ast.text.charAt(0) == "'");
                if (isSingleQuote) {
                    this.write("'").write(ast.text.substr(1, ast.text.length - 2)).write("'");
                } else {
                    //must escape $ (which becomes \$ so {\$ is also handled)
                    this.write('"').write(ast.text.substr(1, ast.text.length - 2).replace(/\$/g, '\\$')).write('"');
                }
            }
        }

        emitSwitchStatement(ast: TypeScript.SwitchStatement) {
            this.write('switch (').emit(ast.val).write(') {').increaseIndent();
            ast.caseList.members.forEach((member: TypeScript.AST) => {
                this.newline().emit(member);
            });
            this.decreaseIndent().newline().write('}');
        }

        emitTry(ast: TypeScript.Try) {
            this.write('try ').emit(ast.body);
        }

        emitTryCatch(ast: TypeScript.TryCatch) {
            this.emit(ast.tryNode).emit(ast.catchNode);
        }

        emitTryFinally(ast: TypeScript.TryFinally) {
            this.emit(ast.tryNode).emit(ast.finallyNode);
        }

        emitUnaryExpression(ast: TypeScript.UnaryExpression, ignorePossibleObjectCast = false) {
            switch (ast.nodeType) {
                case TypeScript.NodeType.IncPost:
                    this.emit(ast.operand).write('++');
                    break;
                case TypeScript.NodeType.LogNot:
                    this.write('!').emit(ast.operand);
                    break;
                case TypeScript.NodeType.DecPost:
                    this.emit(ast.operand).write('--');
                    break;
                case TypeScript.NodeType.ObjectLit:
                case TypeScript.NodeType.ArrayLit:
                    //we newline-style if they did
                    var newlineStyle = !this.isAllOnOneLine(ast);
                    if (ast.nodeType == TypeScript.NodeType.ObjectLit && !ignorePossibleObjectCast) this.write('(object)');
                    this.write('[');
                    if (newlineStyle) this.increaseIndent().newline();
                    var first = true;
                    if (ast.operand != null) {
                        (<TypeScript.ASTList>ast.operand).members.forEach((value: TypeScript.AST) => {
                            if (first) first = false;
                            else {
                                this.write(',');
                                if (newlineStyle) this.newline();
                                else this.write(' ');
                            }
                            this.emit(value);
                        });
                    }
                    if (newlineStyle) this.decreaseIndent().newline();
                    this.write(']');
                    break;
                case TypeScript.NodeType.Not:
                    this.write('~').emit(ast.operand);
                    break;
                case TypeScript.NodeType.Neg:
                    this.write('-').emit(ast.operand);
                    break;
                case TypeScript.NodeType.Pos:
                    this.write('+').emit(ast.operand);
                    break;
                case TypeScript.NodeType.IncPre:
                    this.write('++').emit(ast.operand);
                    break;
                case TypeScript.NodeType.DecPre:
                    this.write('--').emit(ast.operand);
                    break;
                case TypeScript.NodeType.Throw:
                    this.write('throw ').emit(ast.operand);
                    break;
                case TypeScript.NodeType.Typeof:
                    this.write('gettype(').emit(ast.operand).write(')');
                    break;
                case TypeScript.NodeType.Delete:
                    this.write('unset(').emit(ast.operand).write(')');
                    break;
                case TypeScript.NodeType.TypeAssertion:
                    this.emit(ast.operand);
                    break;
                case TypeScript.NodeType.Void:
                    throw new Error('Void unsupported');
                default:
                    throw new Error('Unrecognized type - ' + ast.printLabel());
            }
        }

        emitVarDecl(ast: TypeScript.VarDecl) {
            //ignore ambient
            if (ast.isAmbient()) return;
            var isConst = this.getIdentifierText(ast.id).toUpperCase() == this.getIdentifierText(ast.id);
            //the init better be a literal
            if (isConst) {
                if (ast.init == null) {
                    this.addError(ast, 'Constant declaration does not have initializer');
                } else if (ast.init.nodeType != TypeScript.NodeType.True &&
                        ast.init.nodeType != TypeScript.NodeType.False &&
                        ast.init.nodeType != TypeScript.NodeType.NumberLit &&
                        ast.init.nodeType != TypeScript.NodeType.QString) {
                    this.addError(ast.init, 'Constant declaration has non-scalar initial value');
                } else {
                    this.write('const ').emit(ast.id).write(' = ').emit(ast.init);
                }
            } else if (ast.isProperty()) {
                //prop...
                if (!ast.isPrivate()) this.write('public ');
                else this.write('private ');
                if (ast.isStatic()) this.write('static ');
                this.emit(ast.id);
                //init that's scalar?
                if (ast.init != null && this.isScalar(ast.init)) {
                    this.write(' = ').emit(ast.init);
                }
                this.write(';');
            } else if (ast.init != null) {
                //otherwise...no init, no emit
                this.emit(ast.id).write(' = ').emit(ast.init);
            }
        }

        emitWhileStatement(ast: TypeScript.WhileStatement) {
            this.write('while (').emit(ast.cond).write(') ');
            var body = ast.body;
            if (this.options.forceBlockOnControlStructures) {
                body = this.forceBlockWrap(body);
            }
            this.emit(body).semicolon(body);
        }

        isAllOnOneLine(ast: TypeScript.AST) {
            return ast.minChar >= 0 && this.getStartLine(ast).line == this.getEndLine(ast).line;
        }

        getStartLine(ast: TypeScript.AST) {
            var lineCol = { line: -1, col: -1 };
            TypeScript.getSourceLineColFromMap(lineCol, ast.minChar, this.currentScript.locationInfo.lineMap);
            return lineCol;
        }

        getEndLine(ast: TypeScript.AST) {
            var lineCol = { line: -1, col: -1 };
            TypeScript.getSourceLineColFromMap(lineCol, ast.limChar, this.currentScript.locationInfo.lineMap);
            return lineCol;
        }

        getTokenInfo(ast: TypeScript.AST) {
            var num = TypeScript.nodeTypeToTokTable[ast.nodeType];
            if (num == undefined) return null;
            return TypeScript.tokenTable[num];
        }

        getParent() {
            if (this.stack.length <= 2) return null;
            return this.stack[this.stack.length - 2];
        }

        getIdentifierText(ast: TypeScript.Identifier) {
            var actualText = ast.actualText;
            //ends w/ underscore but doesn't start w/ it means we remove it
            if (actualText.length > 1 && actualText.charAt(actualText.length - 1) == '_' &&
                    actualText.charAt(0) != '_') {
                actualText = actualText.substr(0, actualText.length - 1);
            }
            //can't start w/ dollar sign
            if (actualText.charAt(0) == '$') actualText = actualText.substr(1);
            return actualText;
        }

        isEmpty(ast: TypeScript.AST) {
            return ast.nodeType == TypeScript.NodeType.Empty ||
                ast.nodeType == TypeScript.NodeType.EmptyExpr ||
                ast.nodeType == TypeScript.NodeType.EndCode;
        }

        isScalar(ast: TypeScript.AST) {
            if (ast == null) return false;
            if (ast.nodeType == TypeScript.NodeType.NumberLit ||
                ast.nodeType == TypeScript.NodeType.QString ||
                ast.nodeType == TypeScript.NodeType.True ||
                ast.nodeType == TypeScript.NodeType.False) return true;
            if (ast.nodeType != TypeScript.NodeType.ArrayLit) return false;
            var expr = <TypeScript.UnaryExpression>ast;
            return expr.operand == null ||
                (<TypeScript.ASTList>expr.operand).members.every(this.isScalar, this);
        }

        addError(ast: TypeScript.AST, message: string) {
            var start = this.getStartLine(ast);
            this.errors.push(new EmitterError(message, start.line, start.col));
        }

        addWarning(ast: TypeScript.AST, message: string) {
            var start = this.getStartLine(ast);
            this.warnings.push(new EmitterError(message, start.line, start.col));
        }

        newTempVarName() {
            return '_tmp' + (++this.tempVarCounter);
        }

        hasSemicolonAfterStatement(ast: TypeScript.AST) {
            //these handle their own semi colons
            return !(ast instanceof TypeScript.Block) &&
                !(ast instanceof TypeScript.ForStatement) &&
                !(ast instanceof TypeScript.ForInStatement) &&
                (!(ast instanceof TypeScript.FuncDecl) ||
                    (<TypeScript.FuncDecl>ast).enclosingFnc != null ||
                    (<TypeScript.FuncDecl>ast).isAnonymousFn()) &&
                !(ast instanceof TypeScript.IfStatement) &&
                !(ast instanceof TypeScript.ImportDeclaration) &&
                (!(ast instanceof TypeScript.LabeledStatement) ||
                    this.hasSemicolonAfterStatement((<TypeScript.LabeledStatement>ast).stmt)) &&
                !(ast instanceof TypeScript.NamedDeclaration) &&
                !(ast instanceof TypeScript.SwitchStatement) &&
                !(ast instanceof TypeScript.Try) &&
                !(ast instanceof TypeScript.TryCatch) &&
                !(ast instanceof TypeScript.TryFinally) &&
                !(ast instanceof TypeScript.WhileStatement);
        }

        typeHasNonObjectIndexFuncDecl(type: TypeScript.Type, checkedIds: number[] = []) {
            if (checkedIds.indexOf(type.typeID) > -1) return false;
            if (type.getTypeName() == 'Object') return false;
            checkedIds.push(type.typeID);
            //check my members
            if (type.symbol.declAST instanceof TypeScript.TypeDeclaration &&
                    (<TypeScript.TypeDeclaration>type.symbol.declAST).members != null) {
                if ((<TypeScript.TypeDeclaration>type.symbol.declAST).members.members.some((value: TypeScript.AST) => {
                    return value instanceof TypeScript.FuncDecl &&
                        TypeScript.hasFlag((<TypeScript.FuncDecl>value).fncFlags, TypeScript.FncFlags.IndexerMember);
                })) return true;
            }
            //check extends and implements
            if (type.implementsList != null) {
                if (type.implementsList.some((value: TypeScript.Type) => {
                    return this.typeHasNonObjectIndexFuncDecl(value, checkedIds);
                })) return true;
            }
            if (type.extendsList != null) {
                if (type.extendsList.some((value: TypeScript.Type) => {
                    return this.typeHasNonObjectIndexFuncDecl(value, checkedIds);
                })) return true;
            }
            return false;
        }

        removeParentheses(ast: TypeScript.AST) {
            //(<type>anything) doesn't need parentheses
            return ast.nodeType == TypeScript.NodeType.TypeAssertion;
        }

        forceBlockWrap(ast: TypeScript.AST) {
            if (ast instanceof TypeScript.Block) return ast;
            return new TypeScript.Block((new TypeScript.ASTList()).append(ast), true);
        }

        addModuleReference(ast: TypeScript.ModuleDeclaration, alias?: string) {
            var curr = (<TypeScript.SymbolAggregateScope>ast.mod.containedScope).container;
            if (curr.container.name == '__GLO') return;
            //no alias if it's the same name
            var origName = curr.name;
            if (curr.name == alias) alias = null;
            var useDecl = new UseDecl();
            useDecl.alias = alias;
            do {
                if (useDecl.phpName == null) useDecl.phpName = curr.name;
                else useDecl.phpName = curr.name + '\\' + useDecl.phpName;
                curr = curr.container;
            } while (curr.name != '__GLO');
            //wait, if this is just off the current namespace, it doesn't need to be there
            if (this.currentNamespace().getPhpName() + '\\' + origName == useDecl.phpName) return;
            //add only if there aren't any other references
            var currDecl = this.declStack[this.declStack.length - 1];
            var alreadyThere = currDecl.uses.some((value: UseDecl) => {
                return useDecl.alias == value.alias && useDecl.phpName == value.phpName;
            });
            if (!alreadyThere) currDecl.uses.push(useDecl);
        }

        addImportReference(ast: TypeScript.Identifier, mport: TypeScript.ImportDeclaration) {
            if (mport.alias.type.symbol.declAST instanceof TypeScript.ModuleDeclaration) {
                this.addModuleReference(<TypeScript.ModuleDeclaration>mport.alias.type.
                    symbol.declAST, this.getIdentifierText(ast));
            }
        }

        getQualifiedTypeName(ast: TypeScript.AST) {
            var curr = (<TypeScript.SymbolAggregateScope>ast.type.containedScope).container;
            var name = '';
            while (curr.name != '__GLO') {
                if (name == '') name = curr.name;
                else name = curr.name + '\\' + name;
                curr = curr.container;
            }
            return '\\' + name;
        }
    }
}
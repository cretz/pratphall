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
    }

    export interface AstMatcher {
        nodeType: TypeScript.NodeType[];
        priority: number;
        typePropertyMatches?: {};
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

    export class PhpEmitter {

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
                    if (a.matcher.priority < b.matcher.priority) return -1;
                    else if (a.matcher.priority == b.matcher.priority) return 0;
                    else return 1;
                });
            });
        }

        private indent = 0;
        private currStr = '';
        private stack: TypeScript.AST[] = [];
        skipNextSemicolon = false;
        errors: EmitterError[] = [];
        warnings: EmitterError[] = [];
        private tempVarCounter = 0;

        constructor(private checker: TypeScript.TypeChecker, 
            public options?: PhpEmitOptions = new PhpEmitOptions()) {
        }

        getContents() { return this.currStr; }

        write(val: string) {
            //this.out.Write(val);
            this.currStr += val;
            return this;
        }

        increaseIndent() {
            this.indent++;
            return this;
        }

        decreaseIndent() {
            this.indent--;
            return this;
        }

        newline(indent = true) {
            this.write('\n');
            if (indent) this.write(Array(this.indent + 1).join(this.options.indent));
            return this;
        }

        emit(ast: TypeScript.AST) {
            this.stack.push(ast);
            //check extension first
            if (this.extensionHandled(ast)) { /*no-op*/ }
            else if (ast instanceof TypeScript.ArgDecl) this.emitArgDecl(<TypeScript.ArgDecl>ast);
            else if (ast instanceof TypeScript.BinaryExpression) this.emitBinaryExpression(<TypeScript.BinaryExpression>ast);
            else if (ast instanceof TypeScript.Block) this.emitBlock(<TypeScript.Block>ast);
            else if (ast instanceof TypeScript.CallExpression) this.emitCallExpression(<TypeScript.CallExpression>ast);
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
            ast.members.forEach((member: TypeScript.AST, index: number) => {
                if (index > 0) this.write(', ');
                this.emit(member);
            });
            return this;
        }

        //specific emitters

        emitArgDecl(ast: TypeScript.ArgDecl) {
            this.emit(ast.id);
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
                    var isAdd = tokenInfo.binopNodeType == TypeScript.NodeType.Add;
                    var isStringConcat = isAdd && (
                        (ast.operand1.type != null && ast.operand1.type.isString()) ||
                        (ast.operand2.type != null && ast.operand2.type.isString()));
                    if (isStringConcat) this.write(' . ');
                    else {
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
                        this.emit(ast.operand1).write('->').emit(ast.operand2);
                        break;
                    case TypeScript.NodeType.Member:
                        if (ast.operand1 instanceof TypeScript.Identifier) {
                            //must be a string literal in PHP
                            this.emit(new TypeScript.StringLiteral('"' + (<TypeScript.Identifier>ast.operand1).actualText + '"'));
                        } else {
                            this.emit(ast.operand1);
                        }
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
            var newlines = !this.isAllOnOneLine(ast);
            this.write(' {');
            if (newlines) this.increaseIndent();
            this.emitBlockStatements(ast.statements, newlines);
            if (newlines) this.decreaseIndent().newline();
            else this.write(' ');
            this.write('}');
        }

        emitBlockStatements(statements: TypeScript.ASTList, newlines: bool) {
            statements.members.forEach((statement: TypeScript.AST, index: number) => {
                var prevLength = this.currStr.length;
                //pre comments
                if (this.options.comments && statement.preComments != null && statement.preComments.length > 0) {
                    statement.preComments.forEach((value: TypeScript.Comment) => {
                        this.newline();
                        this.emit(value);
                    });
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
                        this.currStr = this.currStr.substr(0, prevLength);
                        return;
                    }
                    //extra newlines for decls
                    var hasExtraNewline = statement instanceof TypeScript.FuncDecl ||
                        statement instanceof TypeScript.NamedDeclaration;
                    //no semicolons for decls or if the statement asked not to
                    var hasSemicolon = !hasExtraNewline && !this.skipNextSemicolon;
                    this.skipNextSemicolon = false;
                    if (hasSemicolon) this.write(';');
                    if (newlines && hasExtraNewline) this.newline(false);
                }
                //post comments
                if (this.options.comments && statement.postComments != null && statement.postComments.length > 0) {
                    statement.postComments.forEach((value: TypeScript.Comment) => {
                        this.emit(value);
                    });
                }
            });
        }

        emitCallExpression(ast: TypeScript.CallExpression) {
            if (ast.nodeType == TypeScript.NodeType.New) {
                if (ast.target.nodeType == TypeScript.NodeType.TypeRef) {
                    this.write('[]');
                } else {
                    this.write('new ').emit(ast.target).write('(').emitCommaSeparated(ast.arguments).write(')');
                }
            } else {
                this.emit(ast.target).write('(').emitCommaSeparated(ast.arguments).write(')');
            }
        }

        emitCatch(ast: TypeScript.Catch) {
            this.write(' catch (').emit(ast.param).write(') ').emit(ast.body);
        }

        emitClassDeclaration(ast: TypeScript.ClassDeclaration) {
            if (TypeScript.hasFlag(ast.varFlags, TypeScript.VarFlags.Ambient)) return;
            this.write('class ').emit(ast.name);
            //can only have one extends
            if (ast.extendsList != null && ast.extendsList.members.length > 1) throw new Error('Multiple extends');
            if (ast.extendsList != null && ast.extendsList.members.length > 0) {
                this.write(' extends ').emit(ast.extendsList.members[0]);
            }
            if (ast.implementsList != null && ast.implementsList.members.length > 0) {
                this.write(' implements ').emitCommaSeparated(ast.implementsList);
            }
            this.write(' {').increaseIndent();
            //construct
            if (ast.constructorDecl != null) this.newline().emit(ast.constructorDecl).newline();
            //members
            if (ast.members != null) {
                ast.members.members.forEach((member: TypeScript.AST) => {
                    this.newline().emit(member).newline();
                });
            }
            this.decreaseIndent().newline().write('}');
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
                if (value.length > 0 && this.currStr.length > 0) {
                    var lastChar = this.currStr.charAt(this.currStr.length - 1);
                    var firstChar = value.charAt(value.length - 1);
                    if (lastChar != '\n' && lastChar != ' ' && lastChar != '\t' &&
                        firstChar != '\n' && firstChar != ' ' && firstChar != '\t') this.write(' ');
                }
                this.write(value);
            });
        }

        emitConditionalExpression(ast: TypeScript.ConditionalExpression) {
            this.emit(ast.operand1).write(' ? ').emit(ast.operand2).write(' : ').emit(ast.operand3);
        }

        emitDoWhileStatement(ast: TypeScript.DoWhileStatement) {
            this.write('do ').emit(ast.body).write(' while(').emit(ast.cond).write(')');
        }

        emitFinally(ast: TypeScript.Finally) {
            this.write('finally ').emit(ast.body);
        }

        emitForInStatement(ast: TypeScript.ForInStatement) {
            throw new Error('For..in not supported');
        }

        emitForStatement(ast: TypeScript.ForStatement) {
            this.write('for (').emit(ast.init).write('; ').emit(ast.cond).write('; ').emit(ast.incr).write(') ').emit(ast.body);
        }

        emitFuncDecl(ast: TypeScript.FuncDecl) {
            //ignore overloads and ambients
            if (ast.isOverload || ast.isAmbient()) return;
            //accessors disallowed
            if (ast.isAccessor()) throw new Error('Accessors not allowed');
            //visibility
            if (ast.isPublic()) this.write('public ');
            else if (ast.isPrivate()) this.write('private ');
            //static?
            if (ast.isStatic()) this.write('static ');
            this.write('function ');
            //we don't do newlines if they didn't
            var newlines = !this.isAllOnOneLine(ast);
            //closure?
            if (ast.isAnonymousFn()) this.write('(');
            else if (ast.isConstructor) this.write('__construct(');
            else this.emit(ast.name).write('(');
            this.emitCommaSeparated(ast.arguments).write(')');
            if (ast.isSignature()) this.write(';');
            else {
                this.write(' {');
                if (newlines) this.increaseIndent();
                this.emitBlockStatements(ast.bod, newlines);
                if (newlines) this.decreaseIndent().newline();
                else this.write(' ');
                this.write('}');
            }
        }

        emitIdentifier(ast: TypeScript.Identifier) {
            //must be variable for $
            if (ast.sym != null && ast.sym.isVariable()) {
                //can't be on right side of binary expression
                //var parent = this.getParent();
                //var isTap = parent instanceof TypeScript.BinaryExpression && this.getTokenInfo(parent) == null && 
                //    parent.nodeType == TypeScript.NodeType.Dot && (<TypeScript.BinaryExpression>parent).operand2.minChar == ast.minChar;
                //must have container
                if (ast.sym.container != null) this.write('$');
            }
            this.write(ast.actualText);
        }

        emitIfStatement(ast: TypeScript.IfStatement) {
            this.write('if (').emit(ast.cond).write(') ').emit(ast.thenBod);
            if (ast.elseBod != null) {
                this.write(' else ').emit(ast.elseBod);
            }
        }

        emitImportDeclaration(ast: TypeScript.ImportDeclaration) {
            //TODO
        }

        emitInterfaceDeclaration(ast: TypeScript.InterfaceDeclaration) {
            //ignore declared
            if (ast.isAmbient()) return;
            this.write('interface ').emit(ast.name);
            if (ast.extendsList != null && ast.extendsList.members.length > 0) {
                this.write(' extends ').emitCommaSeparated(ast.extendsList);
            }
            this.write(' {').increaseIndent();
            //members
            if (ast.members != null) {
                ast.members.members.forEach((member: TypeScript.AST) => {
                    this.newline().emit(member).newline();
                });
            }
            this.decreaseIndent().newline().write('}');
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
            this.write('namespace ' + ast.name.actualText.replace(/\./g, '\\'));
            this.write(' {').newline().increaseIndent();
            this.emitBlockStatements(ast.members, true);
            this.decreaseIndent().newline().write('}');
        }

        emitNumberLiteral(ast: TypeScript.NumberLiteral) {
            this.write(ast.value.toString());
            if (ast.hasEmptyFraction) this.write('.0');
        }

        emitRegexLiteral(ast: TypeScript.RegexLiteral) {
            this.write(ast.regex.toString());
        }

        emitReturnStatement(ast: TypeScript.ReturnStatement) {
            if (ast.returnExpression == null) this.write('return');
            else this.write('return ').emit(ast.returnExpression);
        }

        emitScript(ast: TypeScript.Script) {
            this.emitBlockStatements(ast.bod, true);
        }

        emitStringLiteral(ast: TypeScript.StringLiteral) {
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

        emitSwitchStatement(ast: TypeScript.SwitchStatement) {
            this.write('switch (').emit(ast.val).write(') {').increaseIndent();
            ast.caseList.members.forEach((member: TypeScript.AST) => {
                this.emit(member).newline();
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
                    (<TypeScript.ASTList>ast.operand).members.forEach((value: TypeScript.AST) => {
                        if (first) first = false;
                        else {
                            this.write(',');
                            if (newlineStyle) this.newline();
                            else this.write(' ');
                        }
                        this.emit(value);
                    });
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
            //no init, no emit
            if (ast.init != null) {
                this.emit(ast.id);
                if (ast.init != null) {
                    this.write(' = ').emit(ast.init);
                }
            }
        }

        private isAllOnOneLine(ast: TypeScript.AST) {
            return this.getStartLine(ast).line == this.getEndLine(ast).line;
        }

        private getStartLine(ast: TypeScript.AST) {
            var lineCol = { line: -1, col: -1 };
            TypeScript.getSourceLineColFromMap(lineCol, ast.minChar, this.checker.locationInfo.lineMap);
            return lineCol;
        }

        private getEndLine(ast: TypeScript.AST) {
            var lineCol = { line: -1, col: -1 };
            TypeScript.getSourceLineColFromMap(lineCol, ast.limChar, this.checker.locationInfo.lineMap);
            return lineCol;
        }

        private getTokenInfo(ast: TypeScript.AST) {
            var num = TypeScript.nodeTypeToTokTable[ast.nodeType];
            if (num == undefined) return null;
            return TypeScript.tokenTable[num];
        }

        private getParent() {
            if (this.stack.length <= 2) return null;
            return this.stack[this.stack.length - 2];
        }

        private isEmpty(ast: TypeScript.AST) {
            return ast.nodeType == TypeScript.NodeType.Empty ||
                ast.nodeType == TypeScript.NodeType.EmptyExpr ||
                ast.nodeType == TypeScript.NodeType.EndCode;
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
    }
}
///<reference path='pratphall.ts' />

module Pratphall {

    //extend the error reporter
    export function extendErrorReporter(compiler: TypeScript.TypeScriptCompiler) {
        var oldUnresolvedSymbol = compiler.errorReporter.unresolvedSymbol;
        compiler.errorReporter.unresolvedSymbol = (ast: TypeScript.AST, name: string) => {
            //sometimes an interface is rhs of an instanceof, and we need to allow it
            if (ast instanceof TypeScript.Identifier && compiler.typeChecker != null &&
                    compiler.typeChecker.typeFlow != null && compiler.typeChecker.typeFlow.scope != null) {
                var scope = compiler.typeChecker.typeFlow.scope;
                var text = (<TypeScript.Identifier>ast).actualText;
                var filter = new TypeScript.ScopeSearchFilter(
                    (a: TypeScript.Symbol, b: TypeScript.Symbol) => {
                        if (a != null && a.name == text) return a;
                        else return b;
                    }, (s: TypeScript.Symbol) => {
                        return s.declAST != null && s.declAST instanceof TypeScript.InterfaceDeclaration;
                    });
                if (scope.search(filter, text, false, true) == null) {
                    oldUnresolvedSymbol.call(compiler.errorReporter, ast, name);
                }
            }
        }

        var oldSimpleError = compiler.errorReporter.simpleError;
        compiler.errorReporter.simpleError = (ast: TypeScript.AST, msg: string) => {
            var swallowed = false;
            //http://typescript.codeplex.com/workitem/331 :-(
            if (msg == 'Supplied parameters do not match any signature of call target' &&
                    ((<TypeScript.Identifier>ast).sym.declAST instanceof TypeScript.FuncDecl)) {
                //well, we don't have enough info to see the params of the call because
                //  the identifier is sent, not the call...I guess I could find the adjacent
                //  ast or walk the tree, but I don't want to since this should be fixed 
                //  by MS soon    
                var func = <TypeScript.FuncDecl>(<TypeScript.Identifier>ast).sym.declAST;
                swallowed = func.arguments != null &&  func.arguments.members.some((value: TypeScript.ArgDecl) => {
                    return value.type.getTypeName() == 'Array';
                });
            }
            //http://typescript.codeplex.com/workitem/245 :-(
            if (msg.indexOf('is not visible at this point') != -1) {
                swallowed = true;
            }
            if (!swallowed) oldSimpleError.call(compiler.errorReporter, ast, msg);
        }
    }
}
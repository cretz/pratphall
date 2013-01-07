///<reference path='pratphall.ts' />

module Pratphall {

    //extend the error reporter
    export function extendErrorReporter(compiler: TypeScript.TypeScriptCompiler) {
        var oldUnresolvedSymbol = compiler.errorReporter.unresolvedSymbol;
        compiler.errorReporter.unresolvedSymbol = (ast: TypeScript.AST, name: string) => {
            //sometimes an interface is rhs of an instanceof, and we need to allow it
            if (ast instanceof TypeScript.Identifier && compiler.typeChecker.typeFlow.scope != null) {
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
    }
}
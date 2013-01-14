///<reference path='../pratphall.ts' />
///<reference path='helpers.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Pct.OldStyleNamespace interface',
        description: 'Make this emit an old style namespace',
        matcher: {
            nodeType: [TS.NodeType.Dot],
            priority: 1,
            propertyMatches: {
                operand2: (value: TS.AST): bool => {
                    if (value instanceof TS.Identifier && (<TS.Identifier>value).sym != null &&
                            (<TS.Identifier>value).sym.declAST instanceof TS.TypeDeclaration) {
                        //find old style namespace
                        var typeDecl = <TS.TypeDeclaration>(<TS.Identifier>value).sym.declAST;
                        var hasOldStyle = typeDecl.extendsList != null &&
                            typeDecl.extendsList.members.some((value: TypeScript.AST) => {
                                return isDottedBinEx(value, 'Pct', 'OldStyleNamespace');
                            });
                        hasOldStyle = !hasOldStyle && typeDecl.implementsList != null &&
                            typeDecl.implementsList.members.some((value: TypeScript.AST) => {
                                return isDottedBinEx(value, 'Pct', 'OldStyleNamespace');
                            });
                        return hasOldStyle;
                    }
                    return false;
                }
            }
        },
        emit: (ast: TS.BinaryExpression, emitter: PhpEmitter): bool => {
            emitter.write((<TS.Identifier>ast.operand2).sym.pathToRoot().reduce((prev: string, curr: TS.Symbol) => {
                if (prev != '') prev = '_' + prev;
                return curr.name + prev;
            }, ''));
            return true;
        }
    });
}
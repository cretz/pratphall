///<reference path='../pratphall.ts' />
///<reference path='helpers.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Pct.Ambient interface',
        description: 'Make this set the ambient flag',
        matcher: {
            nodeType: [TS.NodeType.InterfaceDeclaration],
            priority: 1,
            propertyMatches: {
                extendsList: (value: TS.ASTList): bool => { 
                    return value != null && value.members.some((val: TS.AST) => {
                        return isDottedBinEx(val, 'Pct', 'Ambient');
                    });
                }
            }
        },
        emit: (ast: TS.InterfaceDeclaration, emitter: PhpEmitter): bool => {
            //set flag and say false
            ast.varFlags |= TS.VarFlags.Ambient
            return false;
        }
    });

    PhpEmitter.registerExtension({
        name: 'Pct.Ambient interface on class',
        description: 'Make this set the ambient flag from class',
        matcher: {
            nodeType: [TS.NodeType.ClassDeclaration],
            priority: 1,
            propertyMatches: {
                implementsList: (value: TS.ASTList): bool => { 
                    return value != null && value.members.some((val: TS.AST) => {
                        return isDottedBinEx(val, 'Pct', 'Ambient');
                    });
                }
            }
        },
        emit: (ast: TS.ClassDeclaration, emitter: PhpEmitter): bool => {
            //set flag and say false
            ast.varFlags |= TS.VarFlags.Ambient
            return false;
        }
    });
}
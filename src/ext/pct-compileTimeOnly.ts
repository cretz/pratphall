///<reference path='../pratphall.ts' />
///<reference path='helpers.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Pct.CompileTypeOnly interface',
        description: 'Make this set the compile time only flag',
        matcher: {
            nodeType: [TS.NodeType.InterfaceDeclaration],
            priority: 1,
            propertyMatches: {
                extendsList: (value: TS.ASTList): bool => { 
                    return value != null && value.members.some((val: TS.AST) => {
                        return isDottedBinEx(val, 'Pct', 'CompileTimeOnly');
                    });
                }
            }
        },
        emit: (ast: TS.InterfaceDeclaration, emitter: PhpEmitter): bool => {
            //set flag
            ast.varFlags |= TS.VarFlags.Ambient
            ast['compileTimeOnly'] = true;
            return false;
        }
    });

    PhpEmitter.registerExtension({
        name: 'Pct.CompileTimeOnly interface on class',
        description: 'Make this set the compile time only flag from class',
        matcher: {
            nodeType: [TS.NodeType.ClassDeclaration],
            priority: 1,
            propertyMatches: {
                implementsList: (value: TS.ASTList): bool => { 
                    return value != null && value.members.some((val: TS.AST) => {
                        return isDottedBinEx(val, 'Pct', 'CompileTimeOnly');
                    });
                }
            }
        },
        emit: (ast: TS.ClassDeclaration, emitter: PhpEmitter): bool => {
            //set flag
            ast.varFlags |= TS.VarFlags.Ambient
            ast['compileTimeOnly'] = true;
            return false;
        }
    });
}
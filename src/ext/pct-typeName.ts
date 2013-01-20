///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Pct.typeName emitter',
        description: 'Get the string name of a type',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => { return isDottedBinEx(value, 'Pct', 'typeName'); }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            //just stringify it
            emitter.write("'" + emitter.getQualifiedTypeName(ast.arguments.members[0]) + "'");
            return true;
        }
    });
}
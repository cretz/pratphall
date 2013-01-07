///<reference path='../pratphall.ts' />
///<reference path='helpers.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Pct.isInstance',
        description: 'Instance of checks w/ dynamic vars',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => { return isDottedBinEx(value, 'Pct', 'isInstance'); }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            emitter.emit(ast.arguments.members[0]).write(' instanceof ').emit(ast.arguments.members[1]);
            return true;
        }
    });
}
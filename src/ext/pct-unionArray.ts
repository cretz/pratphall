///<reference path='../pratphall.ts' />
///<reference path='helpers.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Pct.unionArray',
        description: 'Union multiple arrays',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => { return isDottedBinEx(value, 'Pct', 'unionArray'); }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            ast.arguments.members.forEach((value: TS.AST, index: number) => {
                if (index > 0) emitter.write(' + ');
                emitter.emit(value);
            });
            return true;
        }
    });
}
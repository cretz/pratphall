///<reference path='../pratphall.ts' />
///<reference path='helpers.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'JSON.parse',
        description: 'Make JSON.parse to json_decode',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return isDottedBinEx(value, 'JSON', 'parse');
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            if (ast.arguments.members.length > 1) {
                emitter.addError(ast.arguments.members[1], 'Only one param supported on parse');
            } else emitter.write('json_decode(').emit(ast.arguments.members[0]).write(')');
            return true;
        }
    });
}
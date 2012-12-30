///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'String.localeCompare emitter',
        description: 'Make a localeCompare a strcmp',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return value instanceof TS.BinaryExpression &&
                        value.nodeType == TS.NodeType.Dot &&
                        (<TS.BinaryExpression>value).operand1.type.isString() &&
                        (<TS.BinaryExpression>value).operand2 instanceof TS.Identifier &&
                        (<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == 'localeCompare';
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            emitter.write('strcmp(').emit(ast.target).write(', ').emit(ast.arguments.members[0]).write(')');
            return true;
        }
    });
}
///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'String.length emitter',
        description: 'Make a string length an strlen',
        matcher: {
            nodeType: [TS.NodeType.Dot],
            priority: 1,
            propertyMatches: {
                operand1: (value: TS.AST): bool => {
                    return value.type != null && value.type.isString();
                },
                operand2: (value: TS.AST): bool => {
                    return value instanceof TS.Identifier && (<TS.Identifier>value).actualText == 'length';
                }
            }
        },
        emit: (ast: TS.BinaryExpression, emitter: PhpEmitter): bool => {
            emitter.write('strlen(').emit(ast.operand1).write(')');
            return true;
        }
    });
}
///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Array.shift emitter',
        description: 'Make a shift an array_shift',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return value instanceof TS.BinaryExpression &&
                        value.nodeType == TS.NodeType.Dot &&
                        (<TS.BinaryExpression>value).operand1.type.isArray() &&
                        (<TS.BinaryExpression>value).operand2 instanceof TS.Identifier &&
                        (<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == 'shift';
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            emitter.write('array_shift(').emit((<TS.BinaryExpression>ast.target).operand1).write(')');
            return true;
        }
    });
}
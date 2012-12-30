///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'String.toLowerCase and String.toUpperCase emitter',
        description: 'Change to strtolower and strtoupper',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return value instanceof TS.BinaryExpression &&
                        value.nodeType == TS.NodeType.Dot &&
                        (<TS.BinaryExpression>value).operand1.type.isString() &&
                        (<TS.BinaryExpression>value).operand2 instanceof TS.Identifier &&
                        ((<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == 'toLowerCase' || 
                        (<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == 'toUpperCase');
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            if ((<TS.Identifier>(<TS.BinaryExpression>ast.target).operand2).text == 'toLowerCase') {
                emitter.write('strtolower(');
            } else emitter.write('strtoupper(');
            emitter.emit((<TS.BinaryExpression>ast.target).operand1).write(')');
            return true;
        }
    });
}
///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'String.substr emitter',
        description: 'Emit substr',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return value instanceof TS.BinaryExpression &&
                        value.nodeType == TS.NodeType.Dot &&
                        (<TS.BinaryExpression>value).operand1.type.isString() &&
                        (<TS.BinaryExpression>value).operand2 instanceof TS.Identifier &&
                        (<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == 'substr';
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            emitter.write('substr(').emit((<TS.BinaryExpression>ast.target).operand1).write(', ').
                emit(ast.arguments.members[0]);
            if (ast.arguments.members.length > 1) emitter.write(', ').emit(ast.arguments.members[1]);
            emitter.write(')');
            return true;
        }
    });
}
///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'String.charAt emitter',
        description: 'Make a charAt an index',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return value instanceof TS.BinaryExpression &&
                        value.nodeType == TS.NodeType.Dot &&
                        (<TS.BinaryExpression>value).operand1.type.isString() &&
                        (<TS.BinaryExpression>value).operand2 instanceof TS.Identifier &&
                        (<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == 'charAt';
                },
                arguments: (value: TS.ASTList): bool => {
                    return value.members.length == 1;
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            emitter.emit((<TS.BinaryExpression>ast.target).operand1).write('[').
                emit(ast.arguments.members[0]).write(']');
            return true;
        }
    });
}
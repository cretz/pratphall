///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'String.charCodeAt emitter',
        description: 'Make a charCodeAt an ord call',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return value instanceof TS.BinaryExpression &&
                        value.nodeType == TS.NodeType.Dot &&
                        (<TS.BinaryExpression>value).operand1.type.isString() &&
                        (<TS.BinaryExpression>value).operand2 instanceof TS.Identifier &&
                        (<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == 'charCodeAt';
                },
                arguments: (value: TS.ASTList): bool => {
                    return value.members.length == 1;
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            emitter.write('ord(').emit((<TS.BinaryExpression>ast.target).operand1).write('[').
                emit(ast.arguments.members[0]).write('])');
            return true;
        }
    });
}
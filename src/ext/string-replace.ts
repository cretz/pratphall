///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'String.replace emitter',
        description: 'Make replace a str_replace',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return value instanceof TS.BinaryExpression &&
                        value.nodeType == TS.NodeType.Dot &&
                        (<TS.BinaryExpression>value).operand1.type.isString() &&
                        (<TS.BinaryExpression>value).operand2 instanceof TS.Identifier &&
                        (<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == 'replace';
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            if (ast.arguments.members[0].type == null || !ast.arguments.members[0].type.isString()) {
                emitter.addError(ast.arguments.members[0], 'Only strings permitted in replace');
            } else if (ast.arguments.members[1].type == null || !ast.arguments.members[1].type.isString()) {
                emitter.addError(ast.arguments.members[1], 'Only strings permitted in replace');
            } else {
                emitter.write('str_replace(').emit(ast.arguments.members[0]).write(', ').
                    emit(ast.arguments.members[1]).write(', ').emit((<TS.BinaryExpression>ast.target).operand1).write(')');
            }
            return true;
        }
    });
}
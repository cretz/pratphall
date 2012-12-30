///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'String.split emitter',
        description: 'Make a split use explode',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return value instanceof TS.BinaryExpression &&
                        value.nodeType == TS.NodeType.Dot &&
                        (<TS.BinaryExpression>value).operand1.type.isString() &&
                        (<TS.BinaryExpression>value).operand2 instanceof TS.Identifier &&
                        (<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == 'split';
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            if (ast.arguments.members[0].type == null || !ast.arguments.members[0].type.isString()) {
                emitter.addError(ast.arguments.members[0], 'Only strings supported in split');
            } else {
                emitter.write('explode(').emit(ast.arguments.members[0]).write(', ').
                    emit((<TS.BinaryExpression>ast.target).operand1);
                if (ast.arguments.members.length > 1) emitter.write(', ').emit(ast.arguments.members[1]);
                emitter.write(')');
            }
            return true;
        }
    });
}
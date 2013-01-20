///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Array.push emitter',
        description: 'Make a push an array_push',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return value instanceof TS.BinaryExpression &&
                        value.nodeType == TS.NodeType.Dot &&
                        typeIsArray((<TS.BinaryExpression>value).operand1) &&
                        (<TS.BinaryExpression>value).operand2 instanceof TS.Identifier &&
                        (<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == 'push';
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            //if it has a statement flag and is only a single parameter, we do []=
            if (ast.arguments.members.length == 1 && TS.hasFlag(ast.flags, TS.ASTFlags.IsStatement)) {
                emitter.emit((<TS.BinaryExpression>ast.target).operand1).write('[] = ').
                    emit(ast.arguments.members[0]);
            } else {
                emitter.write('array_push(').emit((<TS.BinaryExpression>ast.target).operand1).write(', ').
                    emitCommaSeparated(ast.arguments).write(')');
            }
            return true;
        }
    });
}
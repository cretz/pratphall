///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Array.join emitter',
        description: 'Make a join an implode',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return value instanceof TS.BinaryExpression &&
                        value.nodeType == TS.NodeType.Dot &&
                        typeIsArray((<TS.BinaryExpression>value).operand1) &&
                        (<TS.BinaryExpression>value).operand2 instanceof TS.Identifier &&
                        (<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == 'join';
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            emitter.write('implode(');
            //if param isn't present, comma is assumed
            if (ast.arguments == null || ast.arguments.members.length == 0) emitter.write("',', ");
            else emitter.emit(ast.arguments.members[0]).write(', ');
            emitter.emit((<TS.BinaryExpression>ast.target).operand1).write(')');
            return true;
        }
    });
}
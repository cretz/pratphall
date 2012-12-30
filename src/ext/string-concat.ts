///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'String.concat emitter',
        description: 'Make a concat an implode call',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return value instanceof TS.BinaryExpression &&
                        value.nodeType == TS.NodeType.Dot &&
                        (<TS.BinaryExpression>value).operand1.type.isString() &&
                        (<TS.BinaryExpression>value).operand2 instanceof TS.Identifier &&
                        (<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == 'concat';
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            if (ast.arguments.members.length == 0) emitter.emit(ast.target);
            else emitter.write('implode([').emit(ast.target).write(', ').
                    emitCommaSeparated(ast.arguments).write('])');
            return true;
        }
    });
}
///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Array.filter emitter',
        description: 'Change filter to array_filter',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return value instanceof TS.BinaryExpression &&
                        value.nodeType == TS.NodeType.Dot &&
                        typeIsArray((<TS.BinaryExpression>value).operand1) &&
                        (<TS.BinaryExpression>value).operand2 instanceof TS.Identifier &&
                        (<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == 'filter';
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            //if second param there, better be "this"
            if (ast.arguments.members.length == 2 && ast.arguments.members[1].nodeType != TS.NodeType.This) {
                emitter.addError(ast.arguments.members[1], 'Only second param allowed to filter is "this"');
                return true;
            }
            emitter.write('array_filter(').emit((<TS.BinaryExpression>ast.target).operand1).write(', ').
                emit(ast.arguments.members[0]).write(')');
            return true;
        }
    });
}
///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Array.map emitter',
        description: 'Change map to array_map',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return value instanceof TS.BinaryExpression &&
                        value.nodeType == TS.NodeType.Dot &&
                        (<TS.BinaryExpression>value).operand1.type.isArray() &&
                        (<TS.BinaryExpression>value).operand2 instanceof TS.Identifier &&
                        (<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == 'map';
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            //if second param there, better be "this"
            if (ast.arguments.members.length == 2 && ast.arguments.members[1].nodeType != TS.NodeType.This) {
                emitter.addError(ast.arguments.members[1], 'Only second param allowed to map is "this"');
                return true;
            }
            emitter.write('array_map(').emit(ast.arguments.members[0]).write(', ').
                emit((<TS.BinaryExpression>ast.target).operand1).write(')');
            return true;
        }
    });
}
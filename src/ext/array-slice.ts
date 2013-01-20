///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Array.slice emitter',
        description: 'Make a slice an array_slice',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return value instanceof TS.BinaryExpression &&
                        value.nodeType == TS.NodeType.Dot &&
                        typeIsArray((<TS.BinaryExpression>value).operand1) &&
                        (<TS.BinaryExpression>value).operand2 instanceof TS.Identifier &&
                        (<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == 'slice';
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            //second param unsupported
            if (ast.arguments.members.length > 1) {
                emitter.addError(ast.arguments.members[1], 'Second parameter of slice is unsupported');
                return true;
            }
            emitter.write('array_slice(').emit((<TS.BinaryExpression>ast.target).operand1).
                write(', ').emit(ast.arguments.members[0]).write(')');
            return true;
        }
    });
}
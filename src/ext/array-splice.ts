///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Array.splice emitter',
        description: 'Make a splice an array_splice',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return value instanceof TS.BinaryExpression &&
                        value.nodeType == TS.NodeType.Dot &&
                        (<TS.BinaryExpression>value).operand1.type.isArray() &&
                        (<TS.BinaryExpression>value).operand2 instanceof TS.Identifier &&
                        (<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == 'splice';
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            emitter.write('array_splice(').emit((<TS.BinaryExpression>ast.target).operand1).
                write(', ').emit(ast.arguments.members[0]);
            if (ast.arguments.members.length > 1) {
                emitter.write(', ').emit(ast.arguments.members[1]);
                if (ast.arguments.members.length > 2) {
                    emitter.write(', [');
                    ast.arguments.members.slice(2).forEach((value: TS.AST, index: number) => {
                        if (index > 0) emitter.write(', ');
                        emitter.emit(value);
                    });
                    emitter.write(']');
                }
            }
            emitter.write(')');
            return true;
        }
    });
}
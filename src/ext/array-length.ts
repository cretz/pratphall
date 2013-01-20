///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Array.length emitter',
        description: 'Make a array length a count',
        matcher: {
            nodeType: [TS.NodeType.Dot],
            priority: 1,
            propertyMatches: {
                operand1: (value: TS.AST): bool => { return typeIsArray(value); },
                operand2: (value: TS.AST): bool => {
                    return value instanceof TS.Identifier && (<TS.Identifier>value).actualText == 'length';
                }
            }
        },
        emit: (ast: TS.BinaryExpression, emitter: PhpEmitter): bool => {
            emitter.write('count(').emit(ast.operand1).write(')');
            return true;
        }
    });
}
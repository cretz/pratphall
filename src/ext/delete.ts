///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'delete emitter',
        description: 'Make delete be unset',
        matcher: {
            nodeType: [TS.NodeType.Delete],
            priority: 1
        },
        emit: (ast: TS.UnaryExpression, emitter: PhpEmitter): bool => {
            emitter.write('unset(').emit(ast.operand).write(')');
            return true;
        }
    });
}
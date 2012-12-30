///<reference path='../pratphall.ts' />
///<reference path='helpers.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Pct.isFalse checks',
        description: 'Emit === false',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => { 
                    return isDottedBinEx(value, 'Pct', 'isFalse') || isDottedBinEx(value, 'Pct', 'isNotFalse');
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            emitter.emit(ast.arguments.members[0]);
            if ((<TS.Identifier>(<TS.BinaryExpression>ast.target).operand2).actualText == 'isNotFalse') {
                emitter.write(' !== false');
            } else emitter.write(' === false');
            return true;
        }
    });
}
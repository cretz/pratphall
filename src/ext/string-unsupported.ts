///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'String function disabler',
        description: 'Disable String functions',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    var isString = value instanceof TS.BinaryExpression &&
                        value.nodeType == TS.NodeType.Dot &&
                        (<TS.BinaryExpression>value).operand1.type.isString() &&
                        (<TS.BinaryExpression>value).operand2 instanceof TS.Identifier;
                    if (isString) {
                        return ['slice', 'match', 'search', 'substring', 'toLocaleLowerCase', 
                                'toLocaleUpperCase'].some((val: string) => {
                            if ((<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == val) return true;
                        });
                    }
                    return false;
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            emitter.addError(ast, 'String.' + (<TS.Identifier>(<TS.BinaryExpression>ast.target).operand2).text + 
                'is unsupported');
            return true;
        }
    });
}
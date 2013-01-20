///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Array function disabler',
        description: 'Disable Array functions',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    var isArray = value instanceof TS.BinaryExpression &&
                        value.nodeType == TS.NodeType.Dot &&
                        typeIsArray((<TS.BinaryExpression>value).operand1) &&
                        (<TS.BinaryExpression>value).operand2 instanceof TS.Identifier;
                    if (isArray) {
                        return ['every', 'indexOf', 'lastIndexOf', 'reduceRight', 
                                'reverse', 'some'].some((val: string) => {
                            if ((<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == val) return true;
                        });
                    }
                    return false;
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            emitter.addError(ast, 'Array.' + (<TS.Identifier>(<TS.BinaryExpression>ast.target).operand2).text + 
                'is unsupported');
            return true;
        }
    });
}
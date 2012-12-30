///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'typeof something.something equals undefined emitter',
        description: 'Make typeof undefined an array_key_exists',
        matcher: {
            nodeType: [TS.NodeType.Eq, TS.NodeType.Eqv, TS.NodeType.Ne, TS.NodeType.NEqv],
            priority: 1,
            propertyMatches: {
                operand1: (value: TS.AST): bool => {
                    return value instanceof TS.UnaryExpression &&
                        value.nodeType == TS.NodeType.Typeof &&
                        (<TS.UnaryExpression>value).operand instanceof TS.BinaryExpression &&
                        (<TS.UnaryExpression>value).operand.nodeType == TS.NodeType.Dot &&
                        (<TS.BinaryExpression>(<TS.UnaryExpression>value).operand).operand2 instanceof TS.Identifier;
                },
                operand2: (value: TS.AST): bool => {
                    return value instanceof TS.StringLiteral &&
                        ((<TS.StringLiteral>value).text == '"undefined"' ||
                        (<TS.StringLiteral>value).text == "'undefined'");
                }
            }
        },
        emit: (ast: TS.BinaryExpression, emitter: PhpEmitter): bool => {
            if (ast.nodeType == TS.NodeType.Eq || ast.nodeType == TS.NodeType.Eqv) emitter.write('!');
            var lastProp = (<TS.Identifier>(<TS.BinaryExpression>(<TS.UnaryExpression>ast.operand1).
                operand).operand2).text;
            emitter.write("array_key_exists('" + lastProp + "', ").emit(
                (<TS.BinaryExpression>(<TS.UnaryExpression>ast.operand1).operand).operand1).write(')');
            return true;
        }
    });
}
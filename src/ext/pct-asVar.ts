///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Pct.asVar emitter',
        description: 'Force dollar sign on last identifier',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => { return isDottedBinEx(value, 'Pct', 'asVar'); }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            if (ast.arguments.members[0] instanceof TS.StringLiteral) {
                emitter.write('$' + (<TS.StringLiteral>ast.arguments.members[0]).text.slice(1, -1));
            } else if (ast.arguments.members[0] instanceof TS.BinaryExpression) {
                if ((<TS.BinaryExpression>ast.arguments.members[0]).operand2 instanceof TS.Identifier) {
                    (<TS.BinaryExpression>ast.arguments.members[0]).operand2['forcedVar'] = true;
                    emitter.emit(ast.arguments.members[0]);
                } else {
                    emitter.addError(ast.arguments.members[0], 'Last expression must be identifier');
                }
            } else if (ast.arguments.members[0] instanceof TS.Identifier) {
                emitter.write('$' + emitter.getIdentifierText(<TS.Identifier>ast.arguments.members[0]));
            } else {
                emitter.addError(ast.arguments.members[0], 'Must be string literal or ending with identifier');
            }
            return true;
        }
    });

    PhpEmitter.registerExtension({
        name: 'Pct.asVar-ident',
        description: 'Handle var identifier',
        matcher: {
            nodeType: [TS.NodeType.Name],
            priority: 1,
            propertyMatches: {
                forcedVar: (value: bool) => { return value; }
            }
        },
        emit: (ast: TS.Identifier, emitter: PhpEmitter): bool => {
            emitter.write('$' + emitter.getIdentifierText(ast));
            return true;
        }
    });
}
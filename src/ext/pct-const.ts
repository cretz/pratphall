///<reference path='../pratphall.ts' />
///<reference path='helpers.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Pct.const',
        description: 'Handle constant references',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => { return isDottedBinEx(value, 'Pct', 'const'); }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            if (ast.arguments.members[0] instanceof TS.StringLiteral) {
                emitter.write((<TS.StringLiteral>ast.arguments.members[0]).text.slice(0, -1));
            } else if (ast.arguments.members[0] instanceof TS.Identifier) {
                emitter.write((<TS.Identifier>ast.arguments.members[0]).actualText);
            } else {
                emitter.addError(ast.arguments.members[0], 'Must be string literal or identifier');
            }
            return true;
        }
    });
    
    PhpEmitter.registerExtension({
        name: 'Predefined constants',
        description: 'Handle predefined references',
        matcher: {
            nodeType: [TS.NodeType.Dot],
            priority: 1,
            propertyMatches: {
                operand1: (value: TS.AST): bool => {
                    return value instanceof TS.Identifier && (<TS.Identifier>value).actualText == 'Pct';
                },
                operand2: (value: TS.AST): bool => {
                    return value instanceof TS.Identifier && (<TS.Identifier>value).actualText.substr(0, 2) == '__';
                }
            }
        },
        emit: (ast: TS.BinaryExpression, emitter: PhpEmitter): bool => {
            emitter.write((<TS.Identifier>ast.operand2).actualText);
            return true;
        }
    });
}
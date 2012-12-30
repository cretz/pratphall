///<reference path='../pratphall.ts' />
///<reference path='helpers.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Cast PhpAssocArray emitter',
        description: 'Make an associative array from an object literal',
        matcher: {
            nodeType: [TS.NodeType.TypeAssertion],
            priority: 1,
            propertyMatches: {
                castTerm: (value: TS.TypeReference): bool => {
                    return value instanceof TS.TypeReference &&
                        isDottedBinEx(value.term, 'Pct', 'PhpAssocArray');
                },
                operand: (value: TS.AST): bool => {
                    return value.nodeType == TS.NodeType.ObjectLit;
                }
            }
        },
        emit: (ast: TS.UnaryExpression, emitter: PhpEmitter): bool => {
            //just ignore the cast and make sure the object lit doesn't become stdClass 
            emitter.emitUnaryExpression(<TS.UnaryExpression>ast.operand, true);
            return true;
        }
    });

    PhpEmitter.registerExtension({
        name: 'Pct.newAssocArray emitter',
        description: 'Make an associative array from an object literal',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return isDottedBinEx(value, 'Pct', 'newAssocArray');
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            //better be a single object lit
            if (ast.arguments.members.length != 1 || ast.arguments.members[0].nodeType != TS.NodeType.ObjectLit) {
                emitter.addError(ast.arguments, 'Pct.newAssocArray must have a single object literal argument');
                return false;
            }
            //ignore call
            emitter.emitUnaryExpression(<TS.UnaryExpression>ast.arguments.members[0], true);
            return true;
        }
    });

    PhpEmitter.registerExtension({
        name: 'Pct.toArray or Pct.toAssocArray emitter',
        description: 'Do nothing',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return isDottedBinEx(value, 'Pct', 'toArray') || isDottedBinEx(value, 'Pct', 'toAssocArray');
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            emitter.emit(ast.arguments.members[0]);
            return true;
        }
    });
}
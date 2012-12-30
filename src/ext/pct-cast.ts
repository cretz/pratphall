///<reference path='../pratphall.ts' />
///<reference path='helpers.ts' />

module Pratphall {
    import TS = TypeScript;

    function registerCast(func: string, type: string) {
        PhpEmitter.registerExtension({
            name: 'Explicit ' + type + ' cast',
            description: 'Handle (' + type + ')',
            matcher: {
                nodeType: [TS.NodeType.Call],
                priority: 1,
                propertyMatches: {
                    target: (value: TS.AST): bool => { return isDottedBinEx(value, 'Pct', func); }
                }
            },
            emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
                emitter.write('(' + type + ') ').emit(ast.arguments.members[0]);
                return true;
            }
        });
    }

    registerCast('castInt', 'int');
    registerCast('castBool', 'bool');
    registerCast('castFloat', 'float');
    registerCast('castString', 'string');
    registerCast('castArray', 'array');
    registerCast('castAssocArray', 'array');
    registerCast('castObject', 'object');
    registerCast('castUnset', 'unset');
    registerCast('castBinary', 'binary');
}
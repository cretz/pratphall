///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'String() emitter',
        description: 'Make a string call an strval',
        matcher: {
            nodeType: [TS.NodeType.New, TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return value instanceof TS.Identifier && (<TS.Identifier>value).actualText == 'String';
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            //empty arguments is just ''
            if (ast.arguments.members.length == 0) emitter.write("''");
            else {
                //only first argument matters
                emitter.write('strval(').emit(ast.arguments.members[0]).write(')');
            }
            return true;
        }
    });
}
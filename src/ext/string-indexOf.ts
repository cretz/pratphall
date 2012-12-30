///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;
    
    PhpEmitter.registerExtension({
        name: 'String.indexOf and String.lastIndexOf emitter',
        description: 'Make a indexOf/lastIndexOf an strpos type',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return value instanceof TS.BinaryExpression &&
                        value.nodeType == TS.NodeType.Dot &&
                        (<TS.BinaryExpression>value).operand1.type.isString() &&
                        (<TS.BinaryExpression>value).operand2 instanceof TS.Identifier &&
                        ((<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == 'indexOf' ||
                        (<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == 'lastIndexOf');
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            var temp = emitter.newTempVarName();
            emitter.write('(($' + temp + ' = ');
            if ((<TS.Identifier>(<TS.BinaryExpression>ast.target).operand2).text == 'indexOf') {
                emitter.write('strpos(');
            } else emitter.write('strrpos(');
            emitter.emit((<TS.BinaryExpression>ast.target).operand1).write(', ').emit(ast.arguments.members[0]);
            if (ast.arguments.members.length > 1) emitter.write(', ').emit(ast.arguments.members[1]);
            emitter.write(')) === false ? -1 : $' + temp + ')');
            return true;
        }
    });
}
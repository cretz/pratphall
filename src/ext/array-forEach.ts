///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    //array forEach
    PhpEmitter.registerExtension({
        name: 'Array.forEach emitter',
        description: 'Make a foreach from a normal array',
        matcher: {
            nodeType: TS.NodeType.Call,
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return value instanceof TS.BinaryExpression &&
                        value.nodeType == TS.NodeType.Dot &&
                        (<TS.BinaryExpression>value).operand1.type.isArray() &&
                        (<TS.BinaryExpression>value).operand2 instanceof TS.Identifier &&
                        (<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == 'forEach';
                },
                arguments: (value: TS.ASTList): bool => {
                    return value.members.length == 1 && value.members[0] instanceof TS.FuncDecl;
                }
            }
        },
        emit: (ast: TS.AST, emitter: PhpEmitter): bool => {
            var call = <TS.CallExpression>ast;
            emitter.write('foreach (').emit((<TS.BinaryExpression>call.target).operand1).write(' as ');
            var func = <TS.FuncDecl>(<TS.ASTList>call.arguments).members[0];
            if (func.arguments.members.length > 1) {
                //we have an index
                emitter.emit((<TS.ArgDecl>func.arguments.members[1]).id).write(' => ');
            }
            emitter.emit((<TS.ArgDecl>func.arguments.members[0]).id).write(') {');
            //newlines only when they have em
            var newlines = !emitter.isAllOnOneLine(func);
            if (newlines) emitter.increaseIndent();
            emitter.emitBlockStatements(func.bod, newlines);
            if (newlines) emitter.decreaseIndent().newline();
            else emitter.write(' ');
            emitter.write('}');
            return true;
        }
    });
}
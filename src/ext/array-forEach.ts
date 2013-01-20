///<reference path='../pratphall.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Array.forEach emitter',
        description: 'Make a foreach from a normal array',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => {
                    return value instanceof TS.BinaryExpression &&
                        value.nodeType == TS.NodeType.Dot &&
                        typeIsArray((<TS.BinaryExpression>value).operand1) &&
                        (<TS.BinaryExpression>value).operand2 instanceof TS.Identifier &&
                        (<TS.Identifier>(<TS.BinaryExpression>value).operand2).text == 'forEach';
                }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            //if second param there, better be "this"
            if (ast.arguments.members.length == 2 && ast.arguments.members[1].nodeType != TS.NodeType.This) {
                emitter.addError(ast.arguments.members[1], 'Only second param allowed to filter is "this"');
                return true;
            }
            //if not a func decl first, we call array_walk
            if (ast.arguments.members[0].nodeType != TS.NodeType.FuncDecl) {
                emitter.write('array_walk(').emit((<TS.BinaryExpression>ast.target).operand1).
                    write(', ').emit(ast.arguments.members[1]).write(')');
            } else {
                emitter.write('foreach (').emit((<TS.BinaryExpression>ast.target).operand1).write(' as ');
                var func = <TS.FuncDecl>(<TS.ASTList>ast.arguments).members[0];
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
                emitter.skipNextSemicolon = true;
            }
            return true;
        }
    });
}
///<reference path='../pratphall.ts' />
///<reference path='helpers.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Pct.declare',
        description: 'Handle declare call',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => { return isDottedBinEx(value, 'Pct', 'declare'); }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            //first param must be string literal
            if (ast.arguments.members[0].nodeType != TS.NodeType.QString) {
                emitter.addError(ast.arguments.members[0], 'First param must be string literal');
            } else if (ast.arguments.members.length > 2 && ast.arguments.members[2].nodeType != TS.NodeType.FuncDecl) {
                emitter.addError(ast.arguments.members[0], 'Third param must be anonymous function');
            } else {
                emitter.write('declare(' + (<TS.StringLiteral>ast.arguments.members[0]).text.slice(1, -1) + ' = ').
                    emit(ast.arguments.members[1]).write(')');
                //third param becomes block
                if (ast.arguments.members.length > 2) {
                    emitter.write(' {').increaseIndent().
                        emitBlockStatements((<TS.FuncDecl>ast.arguments.members[2]).bod, true);
                    emitter.decreaseIndent().newline().write('}').skipNextSemicolon = true;
                }
            }
            return true;
        }
    });
}
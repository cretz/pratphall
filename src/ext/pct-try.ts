///<reference path='../pratphall.ts' />
///<reference path='helpers.ts' />

module Pratphall {
    import TS = TypeScript;

    PhpEmitter.registerExtension({
        name: 'Pct.try',
        description: 'Handle try call',
        matcher: {
            nodeType: [TS.NodeType.Call],
            priority: 1,
            propertyMatches: {
                target: (value: TS.AST): bool => { return isDottedBinEx(value, 'Pct', 'try'); }
            }
        },
        emit: (ast: TS.CallExpression, emitter: PhpEmitter): bool => {
            if (ast.arguments == null || ast.arguments.members.length != 1 ||
                    ast.arguments.members[0].nodeType != TS.NodeType.ObjectLit) {
                emitter.addError(ast, 'Try call must have singular object literal expression as argument');
                return true;
            }
            //expect try, catch (array or not), and finally
            var lit = <TS.UnaryExpression>ast.arguments.members[0];
            var stage = 0;
            if ((<TS.ASTList>lit.operand).members.some((value: TS.BinaryExpression) => {
                if (!(value instanceof TS.BinaryExpression)) {
                    emitter.addError(value, 'Unrecognized member');
                    return true;
                }
                if ((<TS.Identifier>value.operand1).actualText == 'try') {
                    if (stage != 0) {
                        emitter.addError(value.operand1, 'Try must be first');
                        return true;
                    }
                    if (!(value.operand2 instanceof TS.FuncDecl)) {
                        emitter.addError(value.operand2, 'Try must be anonymous function');
                        return true;
                    }
                    stage = 1;
                    emitter.write('try {').increaseIndent();
                    emitter.emitBlockStatements((<TS.FuncDecl>value.operand2).bod, true);
                    emitter.decreaseIndent().newline().write('}');
                } else if ((<TS.Identifier>value.operand1).actualText == 'catch') {
                    //array lit or func decl?
                    if (stage != 1) {
                        emitter.addError(value.operand1, 'Catch must come after try');
                        return true;
                    }
                    var catches: TS.AST[];
                    if (value.operand2 instanceof TS.FuncDecl) {
                        catches = [value.operand2];
                    } else if (value.operand2.nodeType == TS.NodeType.ArrayLit) {
                        catches = (<TS.ASTList>(<TS.UnaryExpression>value.operand2).operand).members;
                    } else {
                        emitter.addError(value.operand2, 'Catch must be func or array');
                        return true;
                    }
                    stage = 2;
                    return catches.some((value: TS.FuncDecl) => {
                        if (!(value instanceof TS.FuncDecl)) {
                            emitter.addError(value, 'Catch must be an anonymous function');
                            return true;
                        } else if (value.arguments.members.length != 1) {
                            emitter.addError(value, 'Catch must have exactly one parameter');
                            return true;
                        }
                        emitter.write(' catch (').emit(value.arguments.members[0]).write(') {');
                        if (value.bod != null && value.bod.members.length > 0) {
                            emitter.increaseIndent();
                            emitter.emitBlockStatements(value.bod, true);
                            emitter.decreaseIndent().newline().write('}');
                        } else emitter.write(' }');
                        return false;
                    });
                } else if ((<TS.Identifier>value.operand1).actualText == 'finally') {
                    if (stage != 1 && stage != 2) {
                        emitter.addError(value.operand1, 'Finally must be last and try must exist');
                        return true;
                    }
                    if (!(value.operand2 instanceof TS.FuncDecl)) {
                        emitter.addError(value.operand2, 'Finally must be anonymous function');
                        return true;
                    }
                    stage = 3;
                    emitter.write(' finally {').increaseIndent();
                    emitter.emitBlockStatements((<TS.FuncDecl>value.operand2).bod, true);
                    emitter.decreaseIndent().newline().write('}');
                }
                return false;
            })) return true;
            //only try means blank catch
            if (stage == 0) emitter.addError(ast, 'At least try must be present');
            else if (stage == 1) emitter.write(' catch (Exception $' + emitter.newTempVarName() + ') { }');
            emitter.skipNextSemicolon = true;
            return true;
        }
    });
}
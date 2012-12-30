///<reference path='../pratphall.ts' />

import TS = TypeScript;

module Pratphall {

    export function isDottedBinEx(expr: TS.AST, left: string, right: string): bool {
        return expr instanceof TS.BinaryExpression &&
            expr.nodeType == TS.NodeType.Dot &&
            (<TS.BinaryExpression>expr).operand1 instanceof TS.Identifier &&
            (<TS.Identifier>(<TS.BinaryExpression>expr).operand1).actualText == left &&
            (<TS.BinaryExpression>expr).operand2 instanceof TS.Identifier &&
            (<TS.Identifier>(<TS.BinaryExpression>expr).operand2).actualText == right;
    }
}
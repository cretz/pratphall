///<reference path='all.d.ts' />

var JSON_ERROR_CTRL_CHAR: number;
var JSON_ERROR_DEPTH: number;
var JSON_ERROR_NONE: number;
var JSON_ERROR_STATE_MISMATCH: number;
var JSON_ERROR_SYNTAX: number;
var JSON_ERROR_UTF8: number;

var JSON_BIGINT_AS_STRING: number;
var JSON_FORCE_OBJECT: number;
var JSON_HEX_AMP: number;
var JSON_HEX_APOS: number;
var JSON_HEX_QUOT: number;
var JSON_HEX_TAG: number;
var JSON_NUMERIC_CHECK: number;
var JSON_PRETTY_PRINT: number;
var JSON_UNESCAPED_SLASHES: number;
var JSON_UNESCAPED_UNICODE: number;

interface JsonSerializable {
    jsonSerialize(): any;
}

function json_decode(json: string, assoc?: bool, depth?: number, options?: number): any;
function json_encode(value: any, options?: number): string;
function json_last_error(): number;
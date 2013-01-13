///<reference path='all.d.ts' />

declare var JSON_ERROR_CTRL_CHAR: number;
declare var JSON_ERROR_DEPTH: number;
declare var JSON_ERROR_NONE: number;
declare var JSON_ERROR_STATE_MISMATCH: number;
declare var JSON_ERROR_SYNTAX: number;
declare var JSON_ERROR_UTF8: number;

declare var JSON_BIGINT_AS_STRING: number;
declare var JSON_FORCE_OBJECT: number;
declare var JSON_HEX_AMP: number;
declare var JSON_HEX_APOS: number;
declare var JSON_HEX_QUOT: number;
declare var JSON_HEX_TAG: number;
declare var JSON_NUMERIC_CHECK: number;
declare var JSON_PRETTY_PRINT: number;
declare var JSON_UNESCAPED_SLASHES: number;
declare var JSON_UNESCAPED_UNICODE: number;

declare interface JsonSerializable {
    jsonSerialize(): any;
}

declare function json_decode(json: string, assoc?: bool, depth?: number, options?: number): any;
declare function json_encode(value: any, options?: number): string;
declare function json_last_error(): number;
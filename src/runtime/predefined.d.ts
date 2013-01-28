///<reference path='all.d.ts' />

var __LINE__: number;
var __FILE__: string;
var __DIR__: string;
var __FUNCTION__: string;
var __CLASS__: string;
var __TRAIT__: string;
var __METHOD__: string;
var __NAMESPACE__: string;

declare var GLOBALS: Pct.PhpAssocArray;
declare var _SERVER: Pct.PhpAssocArray;
declare var _GET: Pct.PhpAssocArray;
declare var _POST: Pct.PhpAssocArray;
declare var _FILES: Pct.PhpAssocArray;
declare var _REQUEST: Pct.PhpAssocArray;
declare var _SESSION: Pct.PhpAssocArray;
declare var _ENV: Pct.PhpAssocArray;
declare var _COOKIE: Pct.PhpAssocArray;
declare var php_errormsg: string;
declare var http_response_header: string[];
declare var argc: number;
declare var argv: string[];

function include(path: string): any;
function include_once(path: string): any;
function require(path: string): any;
function require_once(path: string): any;

declare interface Traversable {
    forEach?(callbackfn: (value: any, index: any) => void);
}

declare interface Iterator extends Traversable {
    current(): any;
    key(): any;
    next();
    rewind();
    valid(): bool;
}

declare interface IteratorAggregate extends Traversable {
    getIterator(): Traversable;
}

declare interface ArrayAccess extends Pct.Indexable {
    offsetExists(offset: any): bool;
    offsetGet(offset: any): any;
    offsetSet(offset: any, value: any);
    offsetUnset(offset: any);
}

declare interface Serializable {
    serialize(): string;
    unserialize(serialized: string);
}

declare interface Closure {
    constructor();
    bindTo(newthis: any, newscope?: any): Closure;
}

declare var Closure: {
    bindTo: (closure: Closure, newthis: any, newscope?: any) => Closure;
    prototype: Closure;
}

declare class stdClass {
}

declare class Exception implements Error {
    name: string; //only here for compat
    message: string;
    code: number;
    file: string;
    line: number;

    constructor(message?: string, code?: number, previous?: Exception);
    getMessage(): string;
    getPrevious(): Exception;
    getCode(): number;
    getFile(): string;
    getLine(): number;
    getTrace(): Pct.PhpAssocArray[];
    getTraceAsString(): string;
}

declare class ErrorException extends Exception {
    severity: number;

    constructor(message?: string, code?: number, severity?: number, filename?: string, lineno?: number, previous?: Exception);
}
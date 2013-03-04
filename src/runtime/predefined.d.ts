///<reference path='all.d.ts' />

var __LINE__: number;
var __FILE__: string;
var __DIR__: string;
var __FUNCTION__: string;
var __CLASS__: string;
var __TRAIT__: string;
var __METHOD__: string;
var __NAMESPACE__: string;

var GLOBALS: Pct.PhpAssocArray;
var _SERVER: Pct.PhpAssocArray;
var _GET: Pct.PhpAssocArray;
var _POST: Pct.PhpAssocArray;
var _FILES: Pct.PhpAssocArray;
var _REQUEST: Pct.PhpAssocArray;
var _SESSION: Pct.PhpAssocArray;
var _ENV: Pct.PhpAssocArray;
var _COOKIE: Pct.PhpAssocArray;
var php_errormsg: string;
var http_response_header: string[];
var argc: number;
var argv: string[];

function include(path: string): any;
function include_once(path: string): any;
function require(path: string): any;
function require_once(path: string): any;

interface Traversable {
    forEach?(callbackfn: (value: any, index: any) => void);
}

interface Iterator extends Traversable {
    current(): any;
    key(): any;
    next();
    rewind();
    valid(): bool;
}

interface IteratorAggregate extends Traversable {
    getIterator(): Traversable;
}

interface ArrayAccess extends Pct.Indexable {
    offsetExists(offset: any): bool;
    offsetGet(offset: any): any;
    offsetSet(offset: any, value: any);
    offsetUnset(offset: any);
}

interface Serializable {
    serialize(): string;
    unserialize(serialized: string);
}

class Closure {
    static bind(closure: Closure, newthis: any, newscope?: any): Closure;

    constructor();
    bindTo(newthis: any, newscope?: any): Closure;
}

class stdClass {
}

class Exception implements Error {
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

class ErrorException extends Exception {
    severity: number;

    constructor(message?: string, code?: number, severity?: number, filename?: string, lineno?: number, previous?: Exception);
}
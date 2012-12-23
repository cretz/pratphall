
declare interface Traversable {
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

declare interface ArrayAccess {
    [offset: string]: any;
    //[offset: number]: any; TODO: Why? Ref: http://typescript.codeplex.com/discussions/412174
    offsetExists(offset: any): bool;
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
    getTrace(): PhpAssocArray[];
    getTraceAsString(): string;
}

declare class ErrorException extends Exception {
    severity: number;

    constructor(message?: string, code?: number, severity?: number, filename?: string, lineno?: number, previous?: Exception);
}
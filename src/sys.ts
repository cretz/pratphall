///<reference path='pratphall.ts' />
///<reference path='node-impl/sys.ts' />

module Pratphall {
    export interface Io {
        basename(path: string): string;
        dirPath(path: string): string;
        exists(path: string): bool;
        getArgs(): string[];
        getExecutingFilePath(): string;
        isDir(path: string): bool;
        isFile(path: string): bool;
        joinPaths(...paths: string[]): string;
        readDir(path: string): string[];
        readFile(path: string): string;
        relativePath(from: string, to: string): string;
        resolvePath(from: string, to: string): string;
        writeErr(str: string);
        writeFile(path: string, contents: string);
        writeLine(str: string);
    }
    
    declare function loadIo(): Io;
    
    export interface Assert {
        fail(actual: any, expected: any, message: string, operator: string): void;
        assert(value: any, message: string): void;
        ok(value: any, message?: string): void;
        equal(actual: any, expected: any, message?: string): void;
        notEqual(actual: any, expected: any, message?: string): void;
        deepEqual(actual: any, expected: any, message?: string): void;
        notDeepEqual(acutal: any, expected: any, message?: string): void;
        strictEqual(actual: any, expected: any, message?: string): void;
        notStrictEqual(actual: any, expected: any, message?: string): void;
        throws(block: any, error?: any, messsage?: string): void;
        doesNotThrow(block: any, error?: any, messsage?: string): void;
        ifError(value: any): void;
    }

    declare function loadAssert(): Assert;
}
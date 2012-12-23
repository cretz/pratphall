///<reference path='pratphall.ts' />
///<reference path='node-impl/io.ts' />
///<referenceAlternate originalPath='node-impl/io.ts' conditional='php' path='php-impl/io.ts' />

module Pratphall {
    export interface Io {
        readDir(path: string): string[];
        readFile(path: string): string;
        writeLine(str: string);
    }

    declare function loadIo(): Io;
}
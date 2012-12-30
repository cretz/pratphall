///<reference path='../pratphall.ts' />
///<reference path='node.d.ts' />

module Pratphall {

    export import fs = module('fs');

    export function loadIo(): Io {
        return {
            getExecutingFilePath: () => { return __dirname + '/'; },
            readDir: fs.readdirSync,
            readFile: (path: string) => { return fs.readFileSync(path).toString(); },
            writeLine: console.log
        };
    }
}
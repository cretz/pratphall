///<reference path='../pratphall.ts' />
///<reference path='node.d.ts' />

module Pratphall {
    
    export import assert = module('assert');
    export import fs = module('fs');
    export import path = module('path');

    export function loadIo(): Io {
        return {
            basename: path.basename,
            dirPath: path.dirname,
            exists: fs.existsSync,
            getArgs: () => { return process.argv.slice(2); },
            getExecutingFilePath: () => { return __dirname + '/'; },
            isDir: (path: string) => {
                var stats = fs.statSync(path);
                return stats != null && stats.isDirectory();
            },
            isFile: (path: string) => {
                var stats = fs.statSync(path);
                return stats != null && stats.isFile();
            },
            joinPaths: path.join,
            readDir: fs.readdirSync,
            readFile: (path: string) => { return fs.readFileSync(path).toString(); },
            relativePath: path.relative,
            resolvePath: path.resolve,
            writeErr: process.stderr.write,
            writeFile: fs.writeFileSync,
            writeLine: console.log
        };
    }

    export function loadAssert(): Assert {
        return assert;
    }
}
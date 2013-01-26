///<reference path='../pratphall.ts' />
///<reference path='node.d.ts' />

module Pratphall {

    /*
    damn: https://typescript.codeplex.com/discussions/430782
    import assert = module('assert');
    import fs = module('fs');
    import vm = module('vm');
    import path = module('path');
    */
    export var assert = require('assert');
    export var fs = require('fs');
    export var vm = require('vm');
    export var path = require('path');

    export function loadIo(): Io {
        return {
            basename: path.basename,
            cwd: () => { return <string><any>process.cwd(); },
            dirPath: path.dirname,
            evalGlobal: (js: string, filename?: string) => {
                //vm.runInThisContext(js, filename);
                eval(js);
            },
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
            mkdirs: (dir: string) => {
                //taken mostly from https://github.com/substack/node-mkdirp/blob/master/index.js
                var mkdirp = (p: string, mode: number, made) => {
                    if (mode === undefined) {
                        mode = 0777 & (~process.umask());
                    }
                    if (!made) made = null;

                    //if (typeof mode === 'string') mode = parseInt(mode, 8);
                    p = path.resolve(p);
                    try {
                        fs.mkdirSync(p, mode);
                        made = made || p;
                    } catch (err0) {
                        if (err0.code == 'ENOENT') {
                            made = mkdirp(path.dirname(p), mode, made);
                            mkdirp(p, mode, made);
                        } else {
                            // In the case of any other error, just see if there's a dir
                            // there already. If so, then hooray! If not, then something
                            // is borked.
                            var stat;
                            try {
                                stat = fs.statSync(p);
                            }
                            catch (err1) {
                                throw err0;
                            }
                            if (!stat.isDirectory()) throw err0;
                        }
                    }

                    return made;
                };
                mkdirp(dir);
            },
            readDir: fs.readdirSync,
            readFile: (path: string) => {
                //stolen from TypeScript's io.ts
                var buffer = fs.readFileSync(path);
                switch (buffer[0]) {
                    case 0xFE:
                        if (buffer[1] == 0xFF) {
                            // utf16-be. Reading the buffer as big endian is not supported, so convert it to
                            // Little Endian first
                            var i = 0;
                            while ((i + 1) < buffer.length) {
                                var temp = buffer[i]
                                buffer[i] = buffer[i + 1];
                                buffer[i + 1] = temp;
                                i += 2;
                            }
                            return buffer.toString("ucs2", 2);
                        }
                        break;
                    case 0xFF:
                        if (buffer[1] == 0xFE) {
                            // utf16-le
                            return buffer.toString("ucs2", 2);
                        }
                        break;
                    case 0xEF:
                        if (buffer[1] == 0xBB) {
                            // utf-8
                            return buffer.toString("utf8", 3);
                        }
                }
                // Default behaviour
                return buffer.toString();
            },
            relativePath: path.relative,
            resolvePath: path.resolve,
            writeErr: (str: string) => { process.stderr.write(str); },
            writeFile: fs.writeFileSync,
            writeLine: console.log
        };
    }

    export function loadAssert(): Assert {
        return assert;
    }
}
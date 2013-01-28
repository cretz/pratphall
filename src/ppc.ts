///<reference path="pratphall.ts" />

module Pratphall {
    interface Option {
        names: string[];
        title?: string;
        needsValue?: bool;
        desc: string;
        set: (value?: string) => void;
    }

    export class CommandLineRunner {

        run(args: string[]) {
            var options = new CompilerOptions();
            var showHelp = false;
            var argOpts: Option[] = [
                {
                    names: ['-c', '--config'],
                    title: '-c, --config FILE',
                    needsValue: true,
                    desc: 'Configuration JSON file',
                    set: (value: string) => {
                        var io = loadIo();
                        //better be a file
                        if (!io.isFile(value)) throw new Error('File not found: ' + value);
                        var conf = JSON.parse(io.readFile(value));
                        for (var prop in conf) {
                            options[prop] = conf[prop];
                        }
                    }
                },
                {
                    names: ['--exclude-outside'],
                    desc: 'Do not emit source above given path',
                    set: () => { options.excludeOutside = true; }
                },
                {
                    names: ['--ext'],
                    title: '--ext FILE',
                    needsValue: true,
                    desc: 'Add extension in either JS or TypeScript',
                    set: (value: string) => { options.extensions.push(value); }
                },
                {
                    names: ['--force-block'],
                    desc: 'Force control structures to have a braced blocks',
                    set: () => { options.forceBlock = true; }
                },
                {
                    names: ['--function-brace-newline'],
                    desc: 'All functions have braces put on next line',
                    set: () => { options.functionBraceNewline = true; }
                },
                {
                    names: ['-h', '--help'],
                    desc: 'Display help',
                    set: () => { showHelp = true; }
                },
                {
                    names: ['--indent-spaces'],
                    title: '--indent-spaces COUNT',
                    needsValue: true,
                    desc: 'Indent using the given number of spaces',
                    set: (value: string) => {
                        options.indentSpaces = true;
                        options.indentCount = parseInt(value);
                    }
                },
                {
                    names: ['--indent-tabs'],
                    desc: 'Indent using a single tab',
                    set: (value: string) => {
                        options.indentSpaces = false;
                        options.indentCount = 1;
                    }
                },
                {
                    names: ['--lint'],
                    desc: 'Do not output files, just parse/compile',
                    set: () => { options.lint = true; }
                },
                {
                    names: ['--no-comments'],
                    desc: 'Do not emit comments',
                    set: () => { options.comments = false; }
                },
                {
                    names: ['--no-js-lib'],
                    desc: 'Do not auto-reference the lib.d.ts JS lib',
                    set: () => { options.jsLib = false; }
                },
                {
                    names: ['--no-organize'],
                    desc: 'Do not follow PSR-0 autoloading style',
                    set: () => { options.organize = false; }
                },
                {
                    names: ['--no-php-lib'],
                    desc: 'Do not auto-reference the runtime PHP libs',
                    set: () => { options.phpLib = false; }
                },
                {
                    names: ['--no-type-hint'],
                    desc: 'Do not output any type hints',
                    set: () => { options.typeHint = false; }
                },
                {
                    names: ['-o', '--out'],
                    title: '-o, --out PATH',
                    needsValue: true,
                    desc: 'Directory or file to output to',
                    set: (value: string) => { options.out = value; }
                },
                {
                    names: ['--prefer-single-quotes'],
                    desc: 'Prefer single quoted strings on output',
                    set: () => { options.preferSingleQuotes = true; }
                },
                {
                    names: ['--require-references'],
                    desc: 'Use require_once on references',
                    set: () => { options.requireReferences = true; }
                },
                {
                    names: ['--single'],
                    desc: 'Output to a single file',
                    set: () => { options.single = true; }
                },
                {
                    names: ['--type-brace-newline'],
                    desc: 'All classes/interfaces have braces put on next line',
                    set: () => { options.typeBraceNewline = true; }
                },
                {
                    names: ['--use-else-if'],
                    desc: 'Use else if instead of single elseif on output',
                    set: () => { options.useElseif = true; }
                },
                {
                    names: ['--verbose'],
                    desc: 'Output lots of info',
                    set: () => { options.verbose = true; }
                },
                {
                    names: ['-w', '--watch'],
                    desc: 'Watch and re-compile on any file change',
                    set: (value: string) => { options.watch = true; }
                },
                {
                    names: ['--watch-debounce-ms'],
                    title: '---watch-debounce-ms MS',
                    needsValue: true,
                    desc: 'Number of milliseconds before recompile',
                    set: (value: string) => { options.watchDebounceMs = parseInt(value); }
                },
            ];
            //let's parse
            var files: string[] = [];
            var index = 0;
            for (; index < args.length; index++) {
                var arg = args[index];
                //find the arg
                var handled = argOpts.some((value: Option) => {
                    if (value.names.indexOf(arg) != -1) {
                        //needs value?
                        if (value.needsValue) {
                            if (index == args.length) throw new Error('Option ' + arg + ' requires value');
                            value.set(args[++index]);
                        } else value.set();
                        return true;
                    }
                    return false;
                });
                if (!handled) {
                    if (arg.charAt(0) == '-') throw new Error('Unrecognized argument ' + arg);
                    else files.push(arg);
                }
            }
            //show help?
            if (showHelp || index == 0) {
                var lines = [
                    '',
                    'Syntax:    ppc [options] FILE...',
                    '',
                    'Options:'
                ];
                lines = lines.concat(argOpts.map((value: Option) => {
                    var begin = value.title != null ? value.title : value.names.join(', ');
                    return '  ' + begin + Array(27 - begin.length).join(' ') + value.desc;
                }));
                loadIo().writeLine(lines.join('\n'));
                return;
            }
            //create compiler
            var compiler = new Compiler(options);
            //run normal or watched
            if (!options.watch) compiler.run(files);
            else if (options.watch) compiler.runAndWatch(files);
        }
    }

    new CommandLineRunner().run(Pratphall.loadIo().getArgs());
}
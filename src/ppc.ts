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
                    names: ['--all-caps-const'],
                    desc: 'Assume all capitalized vars are consts',
                    set: () => { options.allCapsConst = true; }
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
                    names: ['-h', '--help'],
                    desc: 'Display help',
                    set: () => { showHelp = true; }
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
                    names: ['--no-composer'],
                    desc: 'Do not emit the composer autoloader',
                    set: () => { options.composer = false; }
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
                    names: ['--use-elseif'],
                    desc: 'Use single elseif word on output',
                    set: () => { options.useElseif = true; }
                },
                {
                    names: ['--verbose'],
                    desc: 'Output lots of info',
                    set: () => { options.verbose = true; }
                }
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
                    return '  ' + begin + Array(25 - begin.length).join(' ') + value.desc;
                }));
                loadIo().writeLine(lines.join('\n'));
                return;
            }
            //run
            new Compiler(options).run(files);
        }
    }
}

new Pratphall.CommandLineRunner().run(Pratphall.loadIo().getArgs());
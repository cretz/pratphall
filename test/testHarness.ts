///<reference path='pratphall.ts' />
///<reference path='node.d.ts' />

module Pratphall {
    import fs = module('fs');
    import assert = module('assert');
    import util = module('util');
    import TS = TypeScript;

    class StringWriter implements ITextWriter {
        contents: string = '';
        Write(s: string) { this.contents += s; }
        WriteLine(s: string) { this.Write(s + '\n'); }
        Close() { }
    }

    export class TestHarness {

        run() {
            fs.readdirSync('test').forEach(this.runTest);
        }

        runTest = (name: string) => {
            var contents = fs.readFileSync('test/' + name);
            var pieces = contents.toString().replace(/\r/g, '').split('-----');
            assert.equal(pieces.length, 3);
            var description = pieces[0].trim();
            var typescript = pieces[1].trim();
            var php = pieces[2].trim();
            //compile TS
            var settings = new TS.CompilationSettings();
            var err = new StringWriter();
            var compiler = new TS.TypeScriptCompiler(err, new TS.NullLogger(), settings);
            compiler.addUnit(typescript, name);
            compiler.typeCheck();
            assert.equal(compiler.scripts.members.length, 1);
            assert.equal(err.contents, '');
            //emit PHP
            var str = new StringWriter();
            var emitter = new PhpEmitter(compiler.typeChecker, str);
            emitter.emit(compiler.scripts.members[0]);
            if (str.contents.trim() != php) {
                console.log('*****\n' + name + ' failed\n**EXPECTED**\n' + php + 
                    '\n**ACTUAL**\n' + str.contents.trim() + '\n*****');
            }
        }
    }
}
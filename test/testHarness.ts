///<reference path='../src/pratphall.ts' />

module Pratphall {

    class StringWriter implements ITextWriter {
        contents: string = '';
        Write(s: string) { this.contents += s; }
        WriteLine(s: string) { this.Write(s + '\n'); }
        Close() { }
    }

    export class TestHarness {

        constructor(public io: Io = loadIo(), public assert: Assert = loadAssert()) { }

        run() {
            this.io.readDir('cases').forEach(this.runTest, this);
        }

        runTest(name: string) {
            var contents = this.io.readFile('cases/' + name);
            var pieces = contents.toString().replace(/\r/g, '').split('-----');
            this.assert.equal(pieces.length, 3);
            var description = pieces[0].trim();
            var typescript = pieces[1].trim();
            var php = pieces[2].trim();
            //compile TS
            var settings = new TypeScript.CompilationSettings();
            var err = new StringWriter();
            var compiler = new TypeScript.TypeScriptCompiler(err, new TypeScript.NullLogger(), settings);
            compiler.addUnit(typescript, name);
            compiler.typeCheck();
            this.assert.equal(compiler.scripts.members.length, 1);
            this.assert.equal(err.contents, '');
            //emit PHP
            var str = new StringWriter();
            var emitter = new PhpEmitter(compiler.typeChecker, str);
            emitter.emit(compiler.scripts.members[0]);
            if (str.contents.trim() != php) {
                this.io.writeLine('*****\n' + name + ' failed\n**EXPECTED**\n' + php + 
                    '\n**ACTUAL**\n' + str.contents.trim() + '\n*****');
            }
        }
    }
}
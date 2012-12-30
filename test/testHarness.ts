///<reference path='../src/pratphall.ts' />
///<reference path='../src/ext/all.ts' />

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
            this.io.writeLine('Running ' + name);
            var contents = this.io.readFile('cases/' + name);
            var pieces = contents.toString().replace(/\r/g, '').split('-----');
            this.assert.equal(pieces.length, 3);
            //expects?
            var description = pieces[0].trim();
            var descPieces = description.split('\n');
            var expectedWarnings: string[] = [];
            if (descPieces.length > 1) {
                description = descPieces[0].trim();
                for (var i = 1; i < descPieces.length; i++) {
                    if (descPieces[i].indexOf('EXPECT-WARN:') == 0) {
                        expectedWarnings.push(descPieces[i].substring(12));
                    }
                }
            }
            //code
            var typescript = pieces[1].trim();
            var php = pieces[2].trim();
            //compile TS
            var settings = new TypeScript.CompilationSettings();
            var err = new StringWriter();
            var compiler = new TypeScript.TypeScriptCompiler(err, new TypeScript.NullLogger(), settings);
            //add lib.d.ts
            compiler.addUnit(this.io.readFile('../src/typescript/bin/lib.d.ts'), 'lib.d.ts');
            //add pct.d.ts
            compiler.addUnit(this.io.readFile('../src/runtime/pct.d.ts'), 'pct.d.ts');
            //add text
            compiler.addUnit(typescript, name);
            compiler.typeCheck();
            this.assert.equal(compiler.scripts.members.length, 3);
            this.assert.ifError(err.contents);
            //emit PHP
            var emitter = new PhpEmitter(compiler.typeChecker);
            emitter.emit(compiler.scripts.members[2]);
            var str = emitter.getContents().trim();
            if (str != php) {
                var reduce = (prev: string, curr: string) {
                    if (prev.length > 0) prev += '\n';
                    return prev + '"' + curr + '"';
                };
                var phpStr = php.split('\n').reduce(reduce, '');
                var actualStr = str.split('\n').reduce(reduce, '');
                this.io.writeLine('*****\n' + name + ' failed\n**EXPECTED**\n' + phpStr +
                    '\n**ACTUAL**\n' + actualStr + '\n*****');
            } else {
                //check expected pieces
                this.assert.equal(emitter.warnings.length, expectedWarnings.length);
                emitter.warnings.forEach((value: EmitterError, index: number) => {
                    this.assert.equal(value.message, expectedWarnings[index]);
                });
            }
        }
    }
}
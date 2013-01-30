///<reference path='../src/pratphall.ts' />

module Pratphall {

    export class TestHarness {

        constructor(public io: Io = loadIo(), public assert: Assert = loadAssert()) { }

        run() {
            this.io.readDir(this.io.getExecutingFilePath() + 'cases').forEach(this.runTest, this);
        }

        runTest(name: string) {
            this.io.writeLine('Running ' + name);
            var contents = this.io.readFile(this.io.getExecutingFilePath() + 'cases/' + name);
            var pieces = contents.toString().replace(/\r/g, '').split('-----');
            this.assert.equal(pieces.length, 3);
            //expects?
            var description = pieces[0].trim();
            var descPieces = description.split('\n');
            var expectedWarnings: string[] = [];
            var expectedErrors: string[] = [];
            var emitOptions = new PhpEmitOptions();
            if (descPieces.length > 1) {
                description = descPieces[0].trim();
                for (var i = 1; i < descPieces.length; i++) {
                    if (descPieces[i].indexOf('EXPECT-ERROR:') == 0) {
                        expectedErrors.push(descPieces[i].substring(13));
                    } else if (descPieces[i].indexOf('EXPECT-WARN:') == 0) {
                        expectedWarnings.push(descPieces[i].substring(12));
                    } else if (descPieces[i].indexOf('SET-OPTION-TRUE:') == 0) {
                        emitOptions[descPieces[i].substring(16)] = true;
                    } else if (descPieces[i].indexOf('SET-OPTION-FALSE:') == 0) {
                        emitOptions[descPieces[i].substring(17)] = false;
                    }
                }
            }
            //code
            var typescript = pieces[1].trim();
            var php = pieces[2].trim();
            //compile TS
            var settings = new TypeScript.CompilationSettings();
            settings.resolve = true;
            var err = new StringWriter();
            var compiler = new TypeScript.TypeScriptCompiler(err, new TypeScript.NullLogger(), settings);
            //change error reporter
            extendErrorReporter(compiler);
            //add lib.d.ts
            compiler.addUnit(this.io.readFile(this.io.getExecutingFilePath() +
                '../src/typescript/bin/lib.d.ts'), 'lib.d.ts');
            //add everything in runtime
            this.io.readDir(this.io.getExecutingFilePath() + '../src/runtime').forEach((value: string) => {
                if (value.slice(-3) == '.ts') {
                    compiler.addUnit(this.io.readFile(this.io.getExecutingFilePath() +
                        '../src/runtime/' + value), value);
                }
            });
            //get referenced files
            var source = new TypeScript.StringSourceText(typescript);
            var referencedFiles = TypeScript.getReferencedFiles(source);
            //add text
            compiler.addSourceUnit(source, name, false, referencedFiles);
            compiler.typeCheck();
            //make sure no errors
            this.assert.ifError(err.contents);
            //emit PHP
            var emitter = new PhpEmitter(compiler.typeChecker, emitOptions);
            emitter.emit(compiler.scripts.members[compiler.scripts.members.length - 1]);
            //options
            var options = new CompilerOptions();
            var phpComp = new Compiler(options);
            var file = phpComp.emitSingleScript(name, emitter, false);
            var str = file.contents.trim();
            if (str != php) {
                var expPieces = php.split('\n');
                var actPieces = str.split('\n');
                var reduce = (prev: string, curr: string) => {
                    if (prev.length > 0) prev += '\n';
                    return prev + '"' + curr + '"';
                };
                var expStr = expPieces.reduce(reduce, '');
                var actStr = actPieces.reduce(reduce, '');
                if (actPieces.length != expPieces.length) {
                    this.io.writeLine('*****\n' + name + ' failed with different line counts\n**EXPECTED**\n' +
                        expStr + '\n**ACTUAL**\n' + actStr + '\n*****');
                } else {
                    for (var i = 0; i < expPieces.length; i++) {
                        if (actPieces[i] != expPieces[i]) {
                            this.io.writeLine('*****\n' + name + ' failed on line ' + (i + 1) +
                                '\n**EXPECTED**\n' + expStr + '\n**ACTUAL**\n' + actStr + '\n*****');
                            break;
                        }
                    }
                }
            } else {
                //check expected pieces
                this.assert.equal(emitter.errors.length, expectedErrors.length,
                    emitter.errors.length == 0 ? 'No errors' : 'First error: ' +
                    emitter.errors[0].message);
                emitter.errors.forEach((value: EmitterError, index: number) => {
                    this.assert.equal(value.message, expectedErrors[index]);
                });
                this.assert.equal(emitter.warnings.length, expectedWarnings.length,
                    emitter.warnings.length == 0 ? 'No warnings' : 'First warning: ' +
                    emitter.warnings[0].message);
                emitter.warnings.forEach((value: EmitterError, index: number) => {
                    this.assert.equal(value.message, expectedWarnings[index]);
                });
            }
        }
    }
}
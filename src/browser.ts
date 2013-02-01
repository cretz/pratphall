///<reference path="pratphall.ts" />

module Pratphall {

    export function loadIo(): Io {
        return null;
    }

    declare class $ {
        static ajax(arg: any);
    }

    export class BrowserCompiler {

        private loadedDefinition: string;
        private tsCompiler: TypeScript.TypeScriptCompiler;
        private err = new StringWriter();

        compile(options: PhpEmitOptions, source: string, complete: (compiled: string, errors: string[], warnings: string[]) => any) {
            //make sure definition is loaded
            this.getLoadedDefinition((definition: string) => {
                var errors: string[] = [];
                var warnings: string[] = [];
                var compiled = '';
                try {
                    //clear errors
                    this.err.contents = '';
                    //create TypeScript compiler
                    if (this.tsCompiler == null) {
                        var settings = new TypeScript.CompilationSettings();
                        this.tsCompiler = new TypeScript.TypeScriptCompiler(this.err, new TypeScript.NullLogger(), settings);
                        //change error report
                        extendErrorReporter(this.tsCompiler);
                        //add entire definition
                        this.tsCompiler.addUnit(definition, 'all.d.ts', true);
                    } else {
                    }
                    //is file there?
                    if (this.tsCompiler.scripts.members.length > 1) {
                        //update my unit
                        this.tsCompiler.updateUnit(source, 'playground.ts', true);
                    } else {
                        //add my unit
                        this.tsCompiler.addUnit(source, 'playground.ts');
                    }
                    //type check
                    this.tsCompiler.reTypeCheck();
                    //any errors? let's dump them...
                    if (this.err.contents != null && this.err.contents.length > 0) {
                        errors = this.err.contents.split('\n');
                    }
                    //emit PHP
                    var emitter = new PhpEmitter(this.tsCompiler.typeChecker, options);
                    emitter.emit(this.tsCompiler.scripts.members[this.tsCompiler.scripts.members.length - 1]);
                    //build errors and warnings output
                    emitter.warnings.forEach((value: EmitterError, index: number) => {
                        warnings.push('WARN(' + value.line + ',' + value.col + '): - ' + value.message);
                    });
                    emitter.errors.forEach((value: EmitterError, index: number) => {
                        errors.push('ERROR(' + value.line + ',' + value.col + '): - ' + value.message);
                    });
                    //emit single output
                    var phpCompiler = new Compiler(new CompilerOptions());
                    var compiledFile = phpCompiler.emitSingleScript('playground.ts', emitter, false);
                    compiled = compiledFile.contents;
                } catch (err) {
                    console.log('Unexpected error', err);
                    errors.push('INTERNAL ERROR: ' + err);;
                }
                //call callback
                complete(compiled, errors, warnings);
            });
        }

        private getLoadedDefinition(complete: (data: string) => void) {
            if (this.loadedDefinition != null) complete(this.loadedDefinition);
            else $.ajax({
                url: 'all.d.ts',
                dataType: 'text',
                success: (data) => {
                    this.loadedDefinition = data;
                    complete(data);
                }
            });
        }
    }
}
///<reference path='../typescript/src/compiler/typescript.ts' />

import TS = TypeScript;

class ConsoleWriter implements ITextWriter {
    Write(s: string) { console.log(s);  }
    WriteLine(s: string) { this.Write(s + '\n'); }
    Close() { }
}

class ConsoleLogger implements TS.ILogger {
    information() { return true; }
    debug() { return true; }
    warning() { return true; }
    error() { return true; }
    fatal() { return true; }
    log(s: string) { console.log(s); }
}

var contents = [
    'const a = 12;',
    'a = 13;'
].join('\n');
//compile TS
var settings = new TS.CompilationSettings();
var err = new ConsoleWriter();
var compiler = new TS.TypeScriptCompiler(err, new ConsoleLogger(), settings);
compiler.addUnit(contents, 'tester.ts');
compiler.typeCheck();
//compiler.scripts.members[0]
//console.log(compiler.typeChecker.globals.getAllKeys());
//console.log(compiler.typeChecker.globals.lookup('a'));
(new TS.AstLogger(new ConsoleLogger())).logScript(<TS.Script>compiler.scripts.members[0]);

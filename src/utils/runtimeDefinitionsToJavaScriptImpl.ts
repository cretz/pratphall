//this is written in TypeScript, not Pratphall
///<reference path="../pratphall.ts" />
///<reference path="../node-impl/sys.ts" />

var io = Pratphall.loadIo();
var assert = Pratphall.loadAssert();

var definitionContents = '';
definitionContents += io.readFile('src/typescript/bin/lib.d.ts').toString().trim();
io.readDir('src/runtime').forEach(function (value) {
    if (value != 'all.ts' && value.slice(-3) == '.ts') {
        definitionContents += '\n' + io.readFile('src/runtime/' + value).toString().
            replace("///<reference path='all.d.ts' />", '').trim();
    }
});
//now create compiler
var settings = new TypeScript.CompilationSettings();
var err = new Pratphall.StringWriter();
var tsCompiler = new TypeScript.TypeScriptCompiler(err, new TypeScript.NullLogger(), settings);
assert.ifError(err.contents);
//run and dump
var script = tsCompiler.addUnit(definitionContents, 'all.d.ts', true);
io.writeFile(process.argv[2], Pratphall.toJavaScriptSource(script));

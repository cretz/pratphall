///<reference path='../pratphall.ts' />

import TS = TypeScript;

module Pratphall {

    export function isDottedBinEx(expr: TS.AST, left: string, right: string): bool {
        return expr instanceof TS.BinaryExpression &&
            expr.nodeType == TS.NodeType.Dot &&
            (<TS.BinaryExpression>expr).operand1 instanceof TS.Identifier &&
            (<TS.Identifier>(<TS.BinaryExpression>expr).operand1).actualText == left &&
            (<TS.BinaryExpression>expr).operand2 instanceof TS.Identifier &&
            (<TS.Identifier>(<TS.BinaryExpression>expr).operand2).actualText == right;
    }

    export function objectToAst(object: any): TypeScript.Script {
        return parseSingleTypeScript(toJavaScriptSource(object));
    }

    //no resolution right now
    export function parseSingleTypeScript(str: string, needsPratphall = false, 
            ignoreErrors = false): TypeScript.Script {
        var err = new StringWriter();
        var compiler = parseToCompiler([{ contents: str, filename: '__singleScript.ts' }],
            err, new TypeScript.NullLogger(), needsPratphall, ignoreErrors);
        if (compiler == null) {
            throw new Error(err.contents);
        }
        return <TypeScript.Script>compiler.scripts.members[compiler.scripts.members.length - 1];
    }

    export function parseMultipleTypeScripts(strs: string[], needsPratphall = false, 
            ignoreErrors = false): TypeScript.Script[] {
        var err = new StringWriter();
        var scripts: { contents: string; filename: string; }[] = [];
        strs.forEach((value: string, index: number) => {
            scripts.push({
                contents: value,
                filename: '__multiScript' + index + '.ts',
            });
        });
        var compiler = parseToCompiler(scripts, err, new TypeScript.NullLogger(), needsPratphall, ignoreErrors);
        if (compiler == null) {
            throw new Error(err.contents);
        }
        return <TypeScript.Script[]>compiler.scripts.members.slice(compiler.scripts.members.length - strs.length);
    }
    
    //no resolution right now
    export function parseToCompiler(
            scripts: { filename: string; contents: string; }[],
            err: StringWriter,
            logger: TypeScript.ILogger = new TypeScript.NullLogger(),
            needsPratphall = false,
            ignoreErrors = false): TypeScript.TypeScriptCompiler {
        var io = loadIo();
        //resolve units
        var units: TypeScript.SourceUnit[] = [];
        var knownFullPaths: string[] = [];
        var addUnitAndReferences = (path: string, baseDir = '.') => {
            var fullPath = io.resolvePath(baseDir, path);
            if (knownFullPaths.indexOf(fullPath) != -1) return;
            if (!io.isFile(fullPath)) throw new Error('Resolved file not found: ' + path);
            var unit = new TypeScript.SourceUnit(fullPath, io.readFile(fullPath));
            unit.referencedFiles = TypeScript.getReferencedFiles(unit);
            units.push(unit);
            knownFullPaths.push(fullPath);
            //loop through references
            unit.referencedFiles.forEach((value: TypeScript.IFileReference) => {
                addUnitAndReferences(value.path, io.dirPath(fullPath));
            });
        }
        //add lib.d.ts and all of pratphall
        addUnitAndReferences('lib.d.ts', io.getExecutingFilePath());
        if (needsPratphall) {
            //very heavy!
            addUnitAndReferences('pratphall.ts', io.getExecutingFilePath() + '../src');
        }
        //build the compiler
        var settings = new TypeScript.CompilationSettings();
        var compiler = new TypeScript.TypeScriptCompiler(err, logger, settings);
        //add units to the compiler
        units.forEach((value: TypeScript.SourceUnit) => {
            compiler.addSourceUnit(value, value.path, true, value.referencedFiles);
        });
        //now add the actual scripts
        scripts.forEach((value: { filename: string; contents: string; }) => {
            compiler.addUnit(value.contents, value.filename);
        });
        //errors means null
        if (!ignoreErrors && err.contents.length > 0) return null;
        //now that we're compiled, type check
        compiler.typeCheck();
        //errors means null
        if (!ignoreErrors && err.contents.length > 0) return null;
        //return
        return compiler;
    }

    export function toJavaScriptSource(object: any, filter?: (obj: any) => any, 
            indent = '    ', startingIndent = ''): string {
        //hacked from https://github.com/marcello3d/node-tosource/blob/master/tosource.js
        var seen = []
        
        //legal key?
        var KEYWORD_REGEXP = /^(abstract|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|undefined|var|void|volatile|while|with)$/
        function legalKey(string) {
            return /^[a-z_$][0-9a-z_$]*$/gi.test(string) && !KEYWORD_REGEXP.test(string)
        }

        //walk function
        function walk(object: any, filter: (obj: any) => any, indent: string, currentIndent: string) {
            var nextIndent = currentIndent + indent
            object = filter ? filter(object) : object
            switch (typeof object) {
                case 'string':
                    return JSON.stringify(object)
                case 'boolean':
                case 'number':
                case 'function':
                case 'undefined':
                    return ''+object
            }

            if (object === null) return 'null'
            if (object instanceof RegExp) return object.toString()
            if (object instanceof Date) return 'new Date('+object.getTime()+')'

            if (seen.indexOf(object) >= 0) return '{$circularReference:1}'
            seen.push(object)

            function join(elements) {
                return indent.slice(1) + elements.join(','+(indent&&'\n')+nextIndent) + (indent ? ' ' : '');
            }

            if (Array.isArray(object)) {
                return '[' + join(object.map(function(element){
                    return walk(element, filter, indent, nextIndent)
                })) + ']'
            }
            var keys = Object.keys(object)
            return keys.length ? '{' + join(keys.map(function (key) {
                return (legalKey(key) ? key : JSON.stringify(key)) + ':' + walk(object[key], filter, indent, nextIndent)
            })) + '}' : '{}'
        }
        
        //call
        return walk(object, filter, indent === undefined ? ' ' : (indent || ''), startingIndent || '')
    }

    export function typeScriptToString(compiler: TypeScript.TypeScriptCompiler, 
            ast: TypeScript.AST, path: string) {
        var str = '';
        //build emitter
        var outFile = {
            Write: (s: string) => { str += s; },
            WriteLine: (s: string) => { str += s + '\n'; },
            Close: () => { },
        };
        var options = {
            minWhitespace: false,
            propagateConstants: false,
            emitComments: false,
            path: path,
            createFile: (path: string, useUTF8?: bool) => { return outFile },
            outputMany: false
        };
        var emitter = new TypeScript.Emitter(compiler.typeChecker, outFile, options);
        emitter.emitJavascript(ast, TypeScript.TokenID.Comma, false);
        return str;
    }

    export function typeScriptToJavaScript(scripts: { filename: string; contents: string; }[],
            err: StringWriter,
            logger: TypeScript.ILogger = new TypeScript.NullLogger(),
            needsPratphall = false): string[] {
        var compiler = parseToCompiler(scripts, err, logger, needsPratphall);
        if (compiler == null) return null;
        var ret: string[] = [];
        scripts.forEach((value: { filename: string; contents: string; }, index: number) => {
            ret.push(typeScriptToString(compiler, compiler.scripts.members[
                compiler.scripts.members.length - scripts.length + index], value.filename));
        });
        return ret;
    }
}
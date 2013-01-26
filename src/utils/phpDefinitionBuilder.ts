//this is written in TypeScript, not Pratphall
///<reference path="../node-impl/sys.ts" />
///<reference path="../typescript/src/compiler/typescript.ts" />

interface Documented {
    name: string;
    description: string;
}

interface Book extends Documented {
    title: string;
    constants: Variable[];
    functions: Method[];
    classes: PhpClass[];
}

interface VisibilityDocumented extends Documented {
    public_: bool;
    protected: bool;
    private_: bool;
    static_: bool;
    readonly: bool;
    abstract: bool;
    const_: bool;
    final: bool;
}

interface Variable extends VisibilityDocumented {
    type: string;
    value: string;
    optional: bool;
}

interface Method extends VisibilityDocumented {
    parameters: Variable[];
    returnType: string;
    returnDescription: string;
}

interface PhpClass extends Documented {
    properties: Variable[];
    methods: Method[];
}

interface Books {
    [index: string]: Book;
}

class StringWriter implements ITextWriter {
    contents: string = '';
    Write(s: string) { this.contents += s; }
    WriteLine(s: string) { this.Write(s + '\n'); }
    Close() { }
}

function injectScriptComments(script: TypeScript.Script, asts: TypeScript.AST[], vars: Variable[],
        methods: Method[], classes: PhpClass[], contents: string) {
    //gotta loop backwards to make sure line numbers are still good
    for (var i = asts.length - 1; i >= 0; i--) {
        var ast = asts[i];
        if (ast instanceof TypeScript.VarDecl) {
            contents = injectVarComments(script, <TypeScript.VarDecl>ast, vars, contents);
        } else if (ast instanceof TypeScript.FuncDecl) {
            contents = injectFuncComments(script, <TypeScript.FuncDecl>ast, methods, contents);
        } else if (ast instanceof TypeScript.TypeDeclaration) {
            contents = injectTypeComments(script, <TypeScript.TypeDeclaration>ast, classes, contents);
        }
    }
    return contents;
}

function injectVarComments(script: TypeScript.Script, ast: TypeScript.VarDecl, vars: Variable[], contents: string) {
    if (!vars) return contents;
    //find the var
    var varDoc: Variable;
    vars.some((value: Variable) => {
        if (ast.id.actualText == value.name) {
            varDoc = value;
            return true;
        } else return false;
    });
    if (varDoc == null || varDoc.description == null || varDoc.description.trim().length == 0) return contents;
    //build the doc
    var doc = '/**\n * ' + getDocText(varDoc.description) + '\n */';
    return injectComments(script, ast, doc, contents);
}

function injectFuncComments(script: TypeScript.Script, ast: TypeScript.FuncDecl,
        methods: Method[], contents: string) {
    if (!methods) return contents;
    //find the method
    var methodDoc: Method;
    var methodName = ast.name.actualText;
    //could be constructor
    if (ast.isConstructor) methodName = '__construct';
    methods.some((value: Method) => {
        if (methodName == value.name) {
            methodDoc = value;
            return true;
        } else return false;
    });
    if (methodDoc == null) return contents;
    //build the doc
    var doc = '/**\n * ' + getDocText(methodDoc.description) + '\n';
    //now for each param
    if (ast.arguments != null && ast.arguments.members.length > 0) {
        ast.arguments.members.forEach((value: TypeScript.ArgDecl, index: number) => {
            if (index == 0) doc += ' *\n';
            doc += getParamText(value, methodDoc.parameters,
                index == ast.arguments.members.length - 1) + '\n';
        });
    }
    //has return, document it
    if (methodDoc.returnDescription) {
        doc += ' * @return ' + getDocText(methodDoc.returnDescription, 9) + '\n';
    }
    doc += ' */';
    return injectComments(script, ast, doc, contents);
}

function getParamText(ast: TypeScript.ArgDecl, params: Variable[], lastParam: bool) {
    var paramName = ast.id.actualText;
    //take off ending underscore
    if (paramName.charAt(paramName.length - 1) == '_') {
        paramName = paramName.slice(0, -1);
    }
    //take off beginning dollar sign
    if (paramName.charAt(0) == '$') paramName = paramName.substr(1);
    var doc = ' * @param ' + ast.id.actualText;
    //find param
    var findParam = (name) => {
        if (params == null) return null;
        var doc: Variable;
        params.some((value: Variable) => {
            if (name == value.name) {
                doc = value;
                return true;
            } else return false;
        });
        return doc;
    };
    //find normal
    var paramDoc = findParam(paramName);
    //if not there and vararg, find ...
    if (paramDoc == null && lastParam) paramDoc = findParam('...');
    //write
    if (paramDoc != null) doc += ' ' + getDocText(paramDoc.description, 9 + ast.id.actualText.length);
    return doc;
}

function injectTypeComments(script: TypeScript.Script, ast: TypeScript.TypeDeclaration,
        classes: PhpClass[], contents: string) {
    if (!classes) return contents;
    //find the class
    var classDoc: PhpClass;
    classes.some((value: PhpClass) => {
        if (ast.name.actualText == value.name) {
            classDoc = value;
            return true;
        } else return false;
    });
    if (classDoc == null) return contents;
    //first the members
    if (ast.members != null && ast.members.members.length > 0) {
        contents = injectScriptComments(script, ast.members.members, classDoc.properties,
            classDoc.methods, null, contents);
    }
    //now the actual doc
    if (classDoc.description) {
        var doc = '/**\n * ' + getDocText(classDoc.description) + '\n */';
        return injectComments(script, ast, doc, contents);
    } else return contents;
}

function getDocText(doc: string, indentLength = 0) {
    if (!doc) return '';
    //first, split on newline because those are different paragraphs
    var paragraphs = doc.split('\n');
    var ret = '';
    //newline str
    var newline = '\n * ';
    var wrapLength = 80;
    if (indentLength > 0) {
        newline += Array(indentLength).join(' ');
        wrapLength -= indentLength;
    }
    //now loop through paragraphs
    var first = true;
    paragraphs.forEach((value: string, index: number) => {
        value = value.trim();
        if (value.length == 0) return;
        if (first) first = false;
        else ret += newline + newline;
        while (value.length > wrapLength) {
            //find first space before wrap length
            var charIndex = value.lastIndexOf(' ', wrapLength);
            //nope, first space after
            if (charIndex == -1) charIndex = value.indexOf(' ', wrapLength);
            //nope, oh well
            if (charIndex == -1) break;
            //add piece
            ret += value.substr(0, charIndex) + newline;
            //trim value
            value = value.substr(charIndex + 1).trim() + ' ';
        }
        ret += value.trim();
    });
    return ret;
}

function injectComments(script: TypeScript.Script, ast: TypeScript.AST, doc: string, contents: string) {
    //grab line/col just for col
    var lineCol = { line: -1, col: -1 };
    TypeScript.getSourceLineColFromMap(lineCol, ast.minChar, script.locationInfo.lineMap);
    //if the col is > 0, we have to indent the doc
    var indent = '';
    if (lineCol.col > 0) {
        indent = Array(lineCol.col + 1).join(' ');
        doc = doc.split('\n').reduce((prev: string, curr: string) => {
            if (prev != '') prev += '\n';
            return prev + indent + curr;
        }, '');
    }
    //inject at minChar
    return contents.substr(0, ast.minChar) + '\n' + doc + '\n' + indent + contents.substr(ast.minChar);
}

var io = Pratphall.loadIo();
var assert = Pratphall.loadAssert();
//load books
var books = <Books>require('./phpdoc.json');
//loop through every .d.ts file
var combined = '';
var err = new StringWriter();
var compiler = new TypeScript.TypeScriptCompiler(err);
io.readDir(io.resolvePath('src/runtime')).forEach((value: string) => {
    if (value.indexOf('.d.ts') == -1 || value == 'all.d.ts') return;
    var bookName = value.slice(0, -5);
    //read file
    var filename = io.resolvePath('src/runtime/', value);
    console.log('Writing ' + bookName);
    var contents = io.readFile(filename);
    //remove references to all
    contents = contents.replace("///<reference path='all.d.ts' />", '');
    //fix windows newlines
    contents = contents.trim().replace('\r\n', '\n');
    //parse (no need to type check)
    var script = compiler.addUnit(contents, filename);
    //is there a book on it?
    var book = books[bookName];
    if (book && script.bod != null && script.bod.members.length > 0) {
        contents = injectScriptComments(script, script.bod.members, book.constants,
            book.functions, book.classes, contents);
        contents = '\n/*\n * ' + getDocText(book.description) + '\n */\n' + contents;
    }
    combined += '\n//--------------------------------------------------------------------------------\n' +
        '// ' + bookName + '\n' +
        '//--------------------------------------------------------------------------------\n' + contents + '\n';
});
io.writeFile(process.argv[2], combined);











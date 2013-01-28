//this is written in Pratphall, not TypeScript
///<reference path="../php.d.ts" />

module Pratphall.PhpDocExtract {

    export class PhpDocExtractException extends Exception { }

    export class Documented {

        name: string;
        description: string;

        stripXml(elements: SimpleXMLElement[], separator = ' ') {
            if (empty(elements)) return null;
            //combine
            var str = '';
            elements.forEach((value: SimpleXMLElement, index: number) => {
                //null separator means only the first one
                if (separator != null || index == 0) {
                    if (index > 0) str += separator;
                    //strip and trim (remove newlines and whitespace within too)
                    str += strip_tags(preg_replace('/ *\\\n */', ' ', value.asXML())).trim();
                }
            });
            return str;
        }

        getAttribute(attributes: SimpleXMLElement[], name: string) {
            if (empty(attributes)) return null;
            return Pct.castString(attributes[0][name]);
        }
    }

    export class Book extends Documented {
        title: string;
        constants: Variable[] = [];
        functions: Method[] = [];
        classes: PhpClass[] = [];

        fromXml(xml: SimpleXMLElement) {
            //get top level book
            var books = xml.xpath('/book');
            if (empty(books)) throw new PhpDocExtractException('Unable to find book element');
            var book = books[0];
            //grab name
            this.name = this.getAttribute(book.xpath('@xml:id'), 'id');
            if (empty(this.name)) throw new PhpDocExtractException('Unable to find book id');
            if (strpos(this.name, 'book.') !== 0) {
                throw new PhpDocExtractException('Illegal book ID: ' + this.name);
            }
            this.name = this.name.substr(5);
            //title
            this.title = this.stripXml(book.xpath('title'));
            //desc
            this.description = this.stripXml(book.xpath('preface/para'), '\n');
        }
    }

    export class VisibilityDocumented extends Documented {
        public_: bool;
        protected: bool;
        private_: bool;
        static_: bool;
        readonly: bool;
        abstract: bool;
        const_: bool;
        final: bool;

        fromXmlModifiers(modifiers: SimpleXMLElement[]) {
            modifiers.forEach((value: SimpleXMLElement) => {
                var str = this.stripXml([value]);
                switch (str) {
                    case 'public':
                        this.public_ = true;
                        break;
                    case 'protected':
                        this.protected = true;
                        break;
                    case 'private':
                        this.private_ = true;
                        break;
                    case 'static':
                        this.static_ = true;
                        break;
                    case 'readonly':
                        this.readonly = true;
                        break;
                    case 'abstract':
                        this.abstract = true;
                        break;
                    case 'const':
                        this.const_ = true;
                        break;
                    case 'final':
                        this.final = true;
                        break;
                    default:
                        throw new PhpDocExtractException('Unknown modifier: ' + str);
                }
            });
        }
    }

    export class Variable extends VisibilityDocumented {
        type: string;
        value: string;
        optional: bool;

        fromConstantXml(xml: SimpleXMLElement) {
            this.name = this.stripXml([xml]);
            //try to find a type one part higher
            this.type = this.stripXml(xml.xpath('../type'));
            //no type, no go
            if (this.type == null) return false;
            //simpara up two levels for now as desc
            this.description = this.stripXml(xml.xpath('../..//simpara'));
            return true;
        }
    }

    export class Method extends VisibilityDocumented {
        parameters: Variable[] = [];
        returnType: string;
        returnDescription: string;

        fromXml(xml: SimpleXMLElement) {
            //name
            this.name = this.stripXml(xml.xpath('//refname'), null);
            if (Pct.isNotFalse(strpos(this.name, '::'))) {
                this.name = this.name.substr(strpos(this.name, '::') + 2);
            }
            //desc
            var summary = this.stripXml(xml.xpath('//refpurpose'));
            this.description = this.stripXml(xml.xpath("//refsect1[@role='description']//para"), '\n');
            if (!empty(summary)) {
                if (empty(this.description)) this.description = summary;
                else this.description = summary + '\n' + this.description;
            }
            //all modifiers
            this.fromXmlModifiers(xml.xpath('//methodsynopsis/modifier'));
            //return type
            this.returnType = this.stripXml(xml.xpath('//methodsynopsis/type'));
            //return desc
            this.returnDescription = this.stripXml(xml.xpath("//refsect1[@role='returnvalues']//para"), '\n');
            //all params
            xml.xpath('//methodsynopsis/methodparam').forEach((value: SimpleXMLElement) => {
                var param = new Variable();
                //optional?
                if (value['choice'] == 'opt') param.optional = true;
                param.type = this.stripXml(value.xpath('type'));
                param.name = this.stripXml(value.xpath('parameter'));
                param.description = this.stripXml(xml.xpath(
                    "//refsect1[@role='parameters']//varlistentry[term/parameter='" + param.name +
                    "']//para"), '\n');
                param.value = this.stripXml(value.xpath('initializer'));
                this.parameters.push(param);
            });
        }
    }

    export class PhpClass extends Documented {
        properties: Variable[] = [];
        methods: Method[] = [];

        fromXml(xml: SimpleXMLElement) {
            //name
            this.name = this.stripXml(xml.xpath('//titleabbrev'));
            //desc (need the id)
            var id = this.getAttribute(xml.xpath('@xml:id'), 'id');
            if (strpos(id, 'class.') !== 0) {
                throw new PhpDocExtractException('Invalid id: ' + id);
            }
            this.description = this.stripXml(xml.xpath("//section[@xml:id='" + id.substr(6) +
                ".intro']//para"), '\n');
            //properties
            xml.xpath('//fieldsynopsis').forEach((value: SimpleXMLElement) => {
                var prop = new Variable();
                prop.name = this.stripXml(value.xpath('varname'));
                if (Pct.isNotFalse(strpos(prop.name, '::'))) {
                    prop.name = prop.name.substr(strpos(prop.name, '::') + 2);
                }
                prop.fromXmlModifiers(value.xpath('modifier'));
                prop.type = this.stripXml(value.xpath('type'));
                var descBegin = "//varlistentry[@xml:id='" + this.getAttribute(
                    value.xpath('varname/@linkend'), 'linkend') + "']";
                prop.description = this.stripXml(xml.xpath(descBegin + '//para | ' +
                    descBegin + '//simpara'), '\n');
                this.properties.push(prop);
            });
            //methods handled elsewhere
        }
    }

    export class BookBuilder {

        private static ignoredFiles = [
            'book.xml', 'constants.xml', 'setup.xml', 'versions.xml', 'reference.xml'
        ];

        buildBook(dir: string) {
            //check dir
            if (!is_dir(dir)) throw new PhpDocExtractException(dir + ' is not a directory');
            //grab book xml
            var xml = this.readXml(dir + '/book.xml')
            if (xml == null) throw new PhpDocExtractException('Unable to find book.xml');
            //create book
            var book = new Book();
            book.fromXml(xml);
            //constants xml
            xml = this.readXml(dir + '/constants.xml');
            if (xml != null) {
                xml.xpath('//constant').forEach((value: SimpleXMLElement) => {
                    var constant = new Variable();
                    if (constant.fromConstantXml(value)) book.constants.push(constant);
                });
            }
            //functions
            this.buildMethods(dir + '/functions', book.functions);
            //classes
            scandir(dir).forEach((value: string) => {
                if (Pct.isNotFalse(strpos(value, '.xml')) && !in_array(value, BookBuilder.ignoredFiles)) {
                    xml = this.readXml(dir + '/' + value);
                    if (xml.getName() == 'classref') {
                        var class_ = new PhpClass();
                        class_.fromXml(xml);
                        book.classes.push(class_);
                        //class methods
                        this.buildMethods(dir + '/' + value.substr(0, -4), class_.methods);
                    }
                }
            });
            //unset nulls
            this.unsetNullsAndEmptyArrays(book);
            //return
            return book;
        }

        private readXml(filename: string) {
            filename = realpath(filename);
            if (!is_file(filename)) return null;
            var contents = file_get_contents(filename);
            //change true/false entities
            contents = str_ireplace(['&true;', '&false;'], ['true', 'false'], contents);
            //remove all other entities
            contents = preg_replace('/&([a-zA-Z0-9\\.\\-_]*);/', '', contents);
            //get rid of the default namespace to make xpath easier
            contents = str_replace('xmlns="http://docbook.org/ns/docbook"', '', contents);
            var xml = simplexml_load_string(contents);
            if (Pct.isFalse(xml)) {
                var lastError = libxml_get_last_error();
                if (Pct.isFalse(lastError)) throw new PhpDocExtractException('Unknown error parsing: ' + filename);
                else throw new PhpDocExtractException('Error parsing ' + filename + ':\n' + print_r(lastError, true));
            }
            xml.registerXPathNamespace('db', 'http://docbook.org/ns/docbook');
            return xml;
        }

        private buildMethods(dir: string, $methods: Method[]) {
            dir = realpath(dir);
            if (is_dir(dir)) {
                scandir(dir).forEach((value: string) => {
                    if (Pct.isNotFalse(strpos(value, '.xml'))) {
                        var xml = this.readXml(dir + '/' + value);
                        var method = new Method();
                        method.fromXml(xml);
                        $methods.push(method);
                    }
                });
            }
        }

        private unsetNullsAndEmptyArrays(object: any) {
            get_object_vars(object).forEach((value: any, index: string) => {
                if (value === null) unset(object[index]);
                else if (is_object(value)) this.unsetNullsAndEmptyArrays(value);
                else if (is_array(value)) {
                    if (empty(value)) unset(object[index]);
                    else {
                        (<Pct.PhpAssocArray>value).forEach((item: any, index: number) => {
                            if (item === null) unset((<Pct.PhpAssocArray>value)[index]);
                            else if (is_object(item)) this.unsetNullsAndEmptyArrays(item);
                        });
                    }
                }
            });
        }
    }
}

//arg 1 - the base directory of phpdoc
//arg 2 - the output file

var builder = new Pratphall.PhpDocExtract.BookBuilder();
var books = Pct.newAssocArray();
//run through all d.ts files
scandir(realpath(__DIR__ + '/../src/runtime')).forEach((value: string) => {
    if (Pct.isNotFalse(strpos(value, '.d.ts'))) {
        var dir = realpath(argv[1] + '/reference/' + value.substr(0, -5));
        if (is_dir(dir)) {
            echo('Running for directory: ' + dir + '\n');
            var book = builder.buildBook(dir);
            books[book.name] = book;
        }
    }
});
file_put_contents(argv[2], json_encode(books, JSON_PRETTY_PRINT));
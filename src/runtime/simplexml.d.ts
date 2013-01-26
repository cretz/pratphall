///<reference path='all.d.ts' />

class SimpleXMLElement implements Traversable, Pct.Indexable {
    constructor(data: string, options?: number, data_is_url?: bool, ns?: string, is_prefix?: bool);
    addAttribute(name: string, value?: string, namespace?: string);
    addChild(name: string, value?: string, namespace?: string): SimpleXMLElement;
    asXML(): string;
    asXML(filename: string): bool;
    attributes(ns?: string, is_prefix?: bool): SimpleXMLElement;
    children(ns?: string, is_prefix?: bool): SimpleXMLElement;
    count(): number;
    getDocNamespaces(recursive?: bool): Pct.PhpAssocArray;
    getName(): string;
    getNamespaces(recursive?: bool): Pct.PhpAssocArray;
    registerXPathNamespace(prefix: string, ns: string): bool;
    xpath(path: string): SimpleXMLElement[];
}

class SimpleXMLIterator extends SimpleXMLElement implements RecursiveIterator, Countable {

    //overrides
    current(): SimpleXMLIterator;
    key(): string;
    next();
    rewind();
    valid(): bool;
    getChildren(): SimpleXMLIterator;
    hasChildren(): bool;
}

function simplexml_import_dom(node: DOMNode, class_name?: string): SimpleXMLElement;
function simplexml_load_file(filename: string, class_name?: string, options?: number, ns?: string, is_prefix?: bool): SimpleXMLElement;
function simplexml_load_string(data: string, class_name?: string, options?: number, ns?: string, is_prefix?: bool): SimpleXMLElement;
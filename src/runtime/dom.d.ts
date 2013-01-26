///<reference path='all.d.ts' />

var DOM_PHP_ERR: number;
var DOM_INDEX_SIZE_ERR: number;
var DOMSTRING_SIZE_ERR: number;
var DOM_HIERARCHY_REQUEST_ERR: number;
var DOM_WRONG_DOCUMENT_ERR: number;
var DOM_INVALID_CHARACTER_ERR: number;
var DOM_NO_DATA_ALLOWED_ERR: number;
var DOM_NO_MODIFICATION_ALLOWED_ERR: number;
var DOM_NOT_FOUND_ERR: number;
var DOM_NOT_SUPPORTED_ERR: number;
var DOM_INUSE_ATTRIBUTE_ERR: number;
var DOM_INVALID_STATE_ERR: number;
var DOM_SYNTAX_ERR: number;
var DOM_INVALID_MODIFICATION_ERR: number;
var DOM_NAMESPACE_ERR: number;
var DOM_INVALID_ACCESS_ERR: number;
var DOM_VALIDATION_ERR: number;

var XML_ELEMENT_NODE: number;
var XML_ATTRIBUTE_NODE: number;
var XML_TEXT_NODE: number;
var XML_CDATA_SECTION_NODE: number;
var XML_ENTITY_REF_NODE: number;
var XML_ENTITY_NODE: number;
var XML_PI_NODE: number;
var XML_COMMENT_NODE: number;
var XML_DOCUMENT_NODE: number;
var XML_DOCUMENT_TYPE_NODE: number;
var XML_DOCUMENT_FRAG_NODE: number;
var XML_NOTATION_NODE: number;
var XML_HTML_DOCUMENT_NODE: number;
var XML_DTD_NODE: number;
var XML_ELEMENT_DECL_NODE: number;
var XML_ATTRIBUTE_DECL_NODE: number;
var XML_ENTITY_DECL_NODE: number;
var XML_NAMESPACE_DECL_NODE: number;
var XML_ATTRIBUTE_CDATA: number;
var XML_ATTRIBUTE_ID: number;
var XML_ATTRIBUTE_IDREF: number;
var XML_ATTRIBUTE_IDREFS: number;
var XML_ATTRIBUTE_ENTITY: number;
var XML_ATTRIBUTE_NMTOKEN: number;
var XML_ATTRIBUTE_NMTOKENS: number;
var XML_ATTRIBUTE_ENUMERATION: number;
var XML_ATTRIBUTE_NOTATION: number;

class DOMNode {
    nodeName: string;
    nodeValue: string;
    nodeType: number;
    parentNode: DOMNode;
    childNodes: DOMNodeList;
    firstChild: DOMNode;
    lastChild: DOMNode;
    previousSibling: DOMNode;
    nextSibling: DOMNode;
    attributes: DOMNamedNodeMap;
    ownerDocument: DOMDocument;
    namespaceURI: string;
    prefix: string;
    localName: string;
    baseURI: string;
    textContext: string;

    appendChild(newnode: DOMNode): DOMNode;
    C14N(exclusive?: bool, with_comments?: bool, xpath?: string[], ns_prefixes?: string[]): number;
    C14NFile(uri: string, exclusive?: bool, with_comments?: bool, xpath?: string[], ns_prefixes?: string[]): string;
    cloneNode(deep?: bool): DOMNode;
    getLineNo(): number;
    getNodePath(): string;
    hasAttributes(): bool;
    hasChildNodes(): bool;
    insertBefore(newnode: DOMNode, refnode?: DOMNode): DOMNode;
    isDefaultNamespace(namespaceURI: string): bool;
    isSameNode(node: DOMNode): bool;
    isSupported(feature: string, version: string): bool;
    lookupNamespaceURI(prefix: string): string;
    lookupPrefix(namespaceURI: string): string;
    normalize();
    removeChild(oldnode: DOMNode): DOMNode;
    replaceChild(newnode: DOMNode, oldnode: DOMNode): DOMNode;
}

class DOMAttr extends DOMNode {
    ownerElement: DOMElement;
    schemaTypeInfo: bool;
    specified: bool;
    value: string;

    constructor(name: string, value?: string);
    isId(): bool;
}

class DOMCharacterData extends DOMNode {
    data: string;
    length: number;

    appendData(data: string);
    deleteData(offset: number, count: number);
    insertData(offset: number, data: string);
    replaceData(offset: number, count: number, data: string);
    substringData(offset: number, count: number): string;
}

class DOMText extends DOMCharacterData {
    wholeText: string;

    constructor(value?: string);
    isWhitespaceInElementContent(): bool;
    splitText(offset: number): DOMText;
}

class DOMCdataSection extends DOMText {
    constructor(value: string);
}

class DOMComment extends DOMCharacterData {

}

class DOMDocument extends DOMNode {

    static load(filename: string, options?: number): DOMDocument;
    static loadHTML(source: string): DOMDocument;
    static loadHTMLFile(filename: string): DOMDocument;
    static loadXML(source: string, options?: number): DOMDocument;

    actualEncoding: string;
    doctype: DOMDocumentType;
    documentElement: DOMElement;
    documentURI: string;
    encoding: string;
    formatOutput: bool;
    implementation: DOMImplementation;
    preserveWhiteSpace: bool;
    recover: bool;
    resolveExternals: bool;
    standalone: bool;
    strictErrorChecking: bool;
    substituteEntities: bool;
    validateOnParse: bool;
    version: string;
    xmlEncoding: string;
    xmlStandalone: bool;
    xmlVersion: string;

    constructor(version?: string, encoding?: string);
    createAttribute(name: string): DOMAttr;
    createAttributeNS(namespaceURI: string, qualifiedName: string): DOMAttr;
    createCDATASection(data: string): DOMCdataSection;
    createComment(data: string);
    createDocumentFragment(): DOMDocumentFragment;
    createElement(name: string, value?: string): DOMElement;
    createElementNS(namepsaceURI: string, qualifiedName: string, value?: string): DOMElement;
    createEntityReference(name: string): DOMEntityReference;
    createProcessingInstruction(target: string, data?: string): DOMProcessingInstruction;
    createTextNode(context: string): DOMText;
    getElementById(elementId: string): DOMElement;
    getElementsByTagName(name: string): DOMNodeList;
    getElementsByTagName(namespaceURI: string, localName: string): DOMNodeList;
    importNode(importedNode: DOMNode, deep?: bool): DOMNode;
    load(filename: string, options?: number): bool;
    loadHTML(source: string): bool;
    loadHTMLFile(filename: string): bool;
    loadXML(source: string, options?: number): bool;
    normalizeDocument();
    registerNodeClass(baseclass: string, extendedclass): bool;
    relaxNGValidate(filename: string): bool;
    relaxNGValidateSource(source: string): bool;
    save(filename: string, options?: number): number;
    saveHTML(node?: DOMNode): string;
    saveHTMLFile(filename: string): number;
    saveXML(node?: DOMNode, options?: number): string;
    schemaValidate(filename: string): bool;
    schemaValidateSource(source: string): bool;
    validate(): bool;
    xinclude(options?: number): number;
}

class DOMDocumentFragment extends DOMNode {
    appendXML(data: string): bool;
}

class DOMDocumentType extends DOMNode {
    publicId: string;
    systemId: string;
    name: string;
    entities: DOMNamedNodeMap;
    notations: DOMNamedNodeMap;
    internalSubset: string;
}

class DOMElement extends DOMNode {
    schemaTypeInfo: bool;
    tagName: string;

    constructor(name: string, value?: string, namespaceURI?: string);
    getAttribute(name: string): string;
    getAttributeNode(name: string): DOMAttr;
    getAttributeNodeNS(namespaceURI: string, localName: string): DOMAttr;
    getAttributeNS(namespaceURI: string, localName: string): string;
    getElementsByTagName(name: string): DOMNodeList;
    getElementsByTagNameNS(namespaceURI: string, localName: string): DOMNodeList;
    hasAttribute(name: string): bool;
    hasAttributeNS(namespaceURI: string, localName: string): bool;
    removeAttribute(name: string): bool;
    removeAttributeNode(oldnode: DOMAttr): bool;
    removeAttributeNS(namespaceURI: string, localName: string): bool;
    setAttribute(name: string, value: string): DOMAttr;
    setAttributeNode(attr: DOMAttr): DOMAttr;
    setAttributeNodeNS(attr: DOMAttr): DOMAttr;
    setAttributeNS(namespaceURI: string, qualifiedName: string, value: string);
    setIdAttribute(name: string, isId: bool);
    setIdAttributeNode(attr: DOMAttr, isId: bool);
    setIdAttributeNS(namespaceURI: string, localName: string, isId: bool);
}

class DOMEntity extends DOMNode {
    publicId: string;
    systemId: string;
    notationName: string;
    actualEncoding: string;
    encoding: string;
    version: string;
}

class DOMEntityReference extends DOMNode {
    constructor(name: string);
}

class DOMException extends Exception {
    code: number;
}

class DOMImplementation {
    createDocument(namespaceURI?: string, qualfiiedName?: string, doctype?: DOMDocumentType): DOMDocument;
    createDocumentType(qualifiedName?: string, publicId?: string, systemId?: string): DOMDocumentType;
    hasFeature(feature: string, version: string): bool;
}

class DOMNamedNodeMap implements Traversable {
    length: number;

    getNamedItem(name: string): DOMNode;
    getNamedItemNS(namespaceURI: string, localName: string): DOMNode;
    item(index: number): DOMNode;
}

class DOMNodeList implements Traversable {
    length: number;

    item(index: number): DOMNode;
}

class DOMNotation extends DOMNode {
    publicId: string;
    systemId: string;
}

class DOMProcessingInstruction extends DOMNode {
    target: string;
    data: string;

    constructor(name: string, value?: string);
}

class DOMXPath {
    document: DOMDocument;

    constructor(doc: DOMDocument);
    evaluate(expression: string, contextnode?: DOMNode, registerNodeNS?: bool): any;
    query(expression: string, contextnode?: DOMNode, registerNodeNS?: bool): DOMNodeList;
    registerNamespace(prefix: string, namespaceURI: string): bool;
    registerPhpFunctions(restrict?: string);
    registerPhpFunctions(restrict: string[]);
}

function dom_import_simplexml(node: SimpleXMLElement): DOMElement;
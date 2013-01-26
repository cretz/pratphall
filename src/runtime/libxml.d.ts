///<reference path='all.d.ts' />

var LIBXML_COMPACT: number;
var LIBXML_DOTTED_VERSION: number;
var LIBXML_DTDATTR: number;
var LIBXML_DTDLOAD: number;
var LIBXML_DTDVALID: number;
var LIBXML_ERR_ERROR: number;
var LIBXML_ERR_FATAL: number;
var LIBXML_ERR_NONE: number;
var LIBXML_ERR_WARNING: number;
var LIBXML_NOBLANKS: number;
var LIBXML_NOCDATA: number;
var LIBXML_NOEMPTYTAG: number;
var LIBXML_NOENT: number;
var LIBXML_NOERROR: number;
var LIBXML_NONET: number;
var LIBXML_NOWARNING: number;
var LIBXML_NOXMLDECL: number;
var LIBXML_NSCLEAN: number;
var LIBXML_PARSEHUGE: number;
var LIBXML_VERSION: number;
var LIBXML_XINCLUDE: number;

class LibXMLError {
    level: number;
    code: number;
    column: number;
    message: string;
    file: string;
    line: number;
}

function libxml_clear_errors();
function libxml_disable_entity_loader(disable?: bool): bool;
function libxml_get_errors(): LibXMLError[];
function libxml_get_last_error(): LibXMLError;
function libxml_set_external_entity_loader(resolver_function: (publicId: string, systemId: string, context: Pct.PhpAssocArray) => any);
function libxml_set_streams_context(streams_context: Pct.PhpResource);
function libxml_use_internal_errors(use_errors?: bool): bool;
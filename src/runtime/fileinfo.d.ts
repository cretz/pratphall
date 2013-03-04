///<reference path='all.d.ts' />

var FILEINFO_COMPRESS: number;
var FILEINFO_CONTINUE: number;
var FILEINFO_DEVICES: number;
var FILEINFO_MIME: number;
var FILEINFO_MIME_ENCODING: number;
var FILEINFO_MIME_TYPE: number;
var FILEINFO_NONE: number;
var FILEINFO_PRESERVE_ATIME: number;
var FILEINFO_RAW: number;
var FILEINFO_SYMLINK: number;

class finfo {
    constructor(options?: number, magic_file?: string);
    buffer(string_?: string, options?: number, context?: Pct.PhpResource): string;
    file(file_name?: string, options?: number, context?: Pct.PhpResource): string;
    set_flags(options: number): bool;
}

function finfo_buffer(finfo: Pct.PhpResource, string_?: string, options?: number, context?: Pct.PhpResource): string;
function finfo_close(finfo: Pct.PhpResource): bool;
function finfo_file(finfo: Pct.PhpResource, file_name?: string, options?: number, context?: Pct.PhpResource): string;
function finfo_open(options?: number, magic_file?: string): Pct.PhpResource;
function finfo_set_flags(finfo: Pct.PhpResource, options: number): bool;
function mime_content_type(filename: string): string;
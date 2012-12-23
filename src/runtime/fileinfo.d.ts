///<reference path="pct.d.ts" />

declare var FILEINFO_COMPRESS: number;
declare var FILEINFO_CONTINUE: number;
declare var FILEINFO_DEVICES: number;
declare var FILEINFO_MIME: number;
declare var FILEINFO_MIME_ENCODING: number;
declare var FILEINFO_MIME_TYPE: number;
declare var FILEINFO_NONE: number;
declare var FILEINFO_PRESERVE_ATIME: number;
declare var FILEINFO_RAW: number;
declare var FILEINFO_SYMLINK: number;

declare class finfo {
    constructor(options?: number, magic_file?: string);
    buffer(string_?: string, options?: number, context?: Pct.PhpResource): string;
    file(file_name?: string, options?: number, context?: Pct.PhpResource): string;
    set_flags(options: number): bool;
}

declare function finfo_buffer(finfo: Pct.PhpResource, string_?: string, options?: number, context?: Pct.PhpResource): string;
declare function finfo_close(finfo: Pct.PhpResource): bool;
declare function finfo_file(finfo: Pct.PhpResource, file_name?: string, options?: number, context?: Pct.PhpResource): string;
declare function finfo_open(options?: number, magic_file?: string): Pct.PhpResource;
declare function finfo_set_flags(finfo: Pct.PhpResource, options: number): bool;
declare function mime_content_type(filename: string): string;
///<reference path='all.d.ts' />

var DIRECTORY_SEPARATOR: string;
var PATH_SEPARATOR: string;

var SCANDIR_SORT_ASCENDING: number;
var SCANDIR_SORT_DESCENDING: number;
var SCANDIR_SORT_NONE: number;

class Directory {
    path: string;
    handle: Pct.PhpResource;

    close(dir_handle?: Pct.PhpResource);
    read(dir_handle?: Pct.PhpResource): string;
    rewind(dir_handle?: Pct.PhpResource);
}

function chdir(directory: string): bool;
function chroot(directory: string): bool;
function closedir(dir_handle?: Pct.PhpResource);
function dir(directory: string, context?: Pct.PhpResource): Directory;
function getcwd(): string;
function opendir(path: string, context?: Pct.PhpResource): Pct.PhpResource;
function readdir(dir_handle?: Pct.PhpResource): string;
function rewinddir(dir_handle?: Pct.PhpResource);
function scandir(directory?: string, sorting_order?: number, context?: Pct.PhpResource): string[];
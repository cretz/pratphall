///<reference path="pct.d.ts" />

declare var DIRECTORY_SEPARATOR: string;
declare var PATH_SEPARATOR: string;

declare var SCANDIR_SORT_ASCENDING: number;
declare var SCANDIR_SORT_DESCENDING: number;
declare var SCANDIR_SORT_NONE: number;

declare class Directory {
    path: string;
    handle: Pct.PhpResource;

    close(dir_handle?: Pct.PhpResource);
    read(dir_handle?: Pct.PhpResource): string;
    rewind(dir_handle?: Pct.PhpResource);
}

declare function chdir(directory: string): bool;
declare function chroot(directory: string): bool;
declare function closedir(dir_handle?: Pct.PhpResource);
declare function dir(directory: string, context?: Pct.PhpResource): Directory;
declare function getcwd(): string;
declare function opendir(path: string, context?: Pct.PhpResource): Pct.PhpResource;
declare function readdir(dir_handle?: Pct.PhpResource): string;
declare function rewinddir(dir_handle?: Pct.PhpResource);
declare function scandir(directory?: string, sorting_order?: number, context?: Pct.PhpResource): string[];
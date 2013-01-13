///<reference path='all.d.ts' />

declare function escapeshellarg(arg: string): string;
declare function escapeshellcmd(command: string): string;
declare function exec(command: string, $output?: string[], $return_var?: number): string;
declare function passthru(command: string, $return_var?: number);
declare function proc_close(process: Pct.PhpResource): number;
declare function proc_get_status(process: Pct.PhpResource): Pct.PhpAssocArray;
declare function proc_nice(increment: number): bool;
declare function proc_open(cmd: string, descriptorspec: Array, $pipes: number[], cwd?: string, env?: Pct.PhpAssocArray, other_options?: Pct.PhpAssocArray): Pct.PhpResource;
declare function proc_terminate(process: Pct.PhpResource, signal?: number): bool;
declare function shell_exec(cmd: string): string;
declare function system(command: string, $return_var?: number): string;

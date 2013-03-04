///<reference path='all.d.ts' />

function escapeshellarg(arg: string): string;
function escapeshellcmd(command: string): string;
function exec(command: string, $output?: string[], $return_var?: number): string;
function passthru(command: string, $return_var?: number);
function proc_close(process: Pct.PhpResource): number;
function proc_get_status(process: Pct.PhpResource): Pct.PhpAssocArray;
function proc_nice(increment: number): bool;
function proc_open(cmd: string, descriptorspec: Array, $pipes: number[], cwd?: string, env?: Pct.PhpAssocArray, other_options?: Pct.PhpAssocArray): Pct.PhpResource;
function proc_terminate(process: Pct.PhpResource, signal?: number): bool;
function shell_exec(cmd: string): string;
function system(command: string, $return_var?: number): string;

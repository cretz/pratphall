///<reference path='all.d.ts' />

declare var __COMPILER_HALT_OFFSET__: number;

declare var CONNECTION_ABORTED: number;
declare var CONNECTION_NORMAL: number;
declare var CONNECTION_TIMEOUT: number;

declare function connection_aborted(): number;
declare function connection_status(): number;
declare function connection_timeout(): number;
declare function constant(name: string): any;
declare function define(name: string, value: any, case_insensitive?: bool): bool; //TODO: explain how you also have to use declare in Pratphall
declare function defined(name: string): bool;
//NOTE: eval is already part of JS...but I'm gonna gripe in the compiler when I see it just out of principal (just a warning)
//NOTE: I don't like die, so I ain't putting it in...
declare function exit(status?: string);
declare function exit(status: number);
declare function get_browser(user_agent?: string, return_array?: bool): Pct.PhpAssocArray;
declare function __halt_compiler(); //TODO: explain how I am going to handle this when loading files in Pratphall
declare function highlight_file(filename: string): bool;
declare function highlight_file(filename: string, return_: bool): any;
declare function highlight_string(str: string): bool;
declare function highlight_string(str: string, return_: bool): any;
declare function ignore_user_abort(value?: string): number;
declare function pack(format: string, ...args: any[]): string;
declare function php_check_syntax(filename: string, $error_message?: string): bool;
declare function php_strip_whitespace(filename: string): string;
declare function sleep(seconds: number): number;
declare function sys_getloadavg(): number[];
declare function time_nanosleep(seconds: number, nanoseconds: number): any;
declare function time_sleep_until(timestamp: number): bool;
declare function uniqid(prefix?: string, more_entropy?: bool): string;
declare function unpack(format: string, data: string): Pct.PhpAssocArray;
declare function unsleep(micro_seconds: number);
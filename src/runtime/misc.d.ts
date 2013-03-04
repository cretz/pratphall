///<reference path='all.d.ts' />

var __COMPILER_HALT_OFFSET__: number;

var CONNECTION_ABORTED: number;
var CONNECTION_NORMAL: number;
var CONNECTION_TIMEOUT: number;

function connection_aborted(): number;
function connection_status(): number;
function connection_timeout(): number;
function constant(name: string): any;
function define(name: string, value: any, case_insensitive?: bool): bool; //TODO: explain how you also have to use in Pratphall
function defined(name: string): bool;
//NOTE: eval is already part of JS...but I'm gonna gripe in the compiler when I see it just out of principal (just a warning)
//NOTE: I don't like die, so I ain't putting it in...
function exit(status?: string);
function exit(status: number);
function get_browser(user_agent?: string, return_array?: bool): Pct.PhpAssocArray;
function __halt_compiler(); //TODO: explain how I am going to handle this when loading files in Pratphall
function highlight_file(filename: string): bool;
function highlight_file(filename: string, return_: bool): any;
function highlight_string(str: string): bool;
function highlight_string(str: string, return_: bool): any;
function ignore_user_abort(value?: string): number;
function pack(format: string, ...args: any[]): string;
function php_check_syntax(filename: string, $error_message?: string): bool;
function php_strip_whitespace(filename: string): string;
function sleep(seconds: number): number;
function sys_getloadavg(): number[];
function time_nanosleep(seconds: number, nanoseconds: number): any;
function time_sleep_until(timestamp: number): bool;
function uniqid(prefix?: string, more_entropy?: bool): string;
function unpack(format: string, data: string): Pct.PhpAssocArray;
function usleep(micro_seconds: number);
///<reference path='all.d.ts' />

function call_user_func(callback: string, ...parameter: any[]): any;
function call_user_func(callback: Function, ...parameter: any[]): any;
function call_user_func_array(callback: string, param_arr: any[]): any;
function call_user_func_array(callback: Function, param_arr: any[]): any;
function create_function(args: string, code: string): string;
function forward_static_call(callback: string, ...parameter: any[]): any;
function forward_static_call(callback: Function, ...parameter: any[]): any;
function forward_static_call_array(callback: string, parameters: any[]): any;
function forward_static_call_array(callback: Function, parameters: any[]): any;
function func_get_arg(arg_num: number): any;
function func_get_args(): any[];
function func_num_args(): number;
function function_exists(function_name: string): bool;
function get_defined_functions(): Pct.PhpAssocArray;
function register_shutdown_function(callback: string, ...parameter: any[]);
function register_shutdown_function(callback: Function, ...parameter: any[]);
function register_tick_function(callback: string, ...arg: any[]): bool;
function register_tick_function(callback: Function, ...arg: any[]): bool;
function unregister_tick_function(function_name: string);
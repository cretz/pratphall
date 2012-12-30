///<reference path='all.ts' />

declare function call_user_func(callback: string, ...parameter: any[]): any;
declare function call_user_func(callback: Function, ...parameter: any[]): any;
declare function call_user_func_array(callback: string, param_arr: any[]): any;
declare function call_user_func_array(callback: Function, param_arr: any[]): any;
declare function create_function(args: string, code: string): string;
declare function forward_static_call(callback: string, ...parameter: any[]): any;
declare function forward_static_call(callback: Function, ...parameter: any[]): any;
declare function forward_static_call_array(callback: string, parameters: any[]): any;
declare function forward_static_call_array(callback: Function, parameters: any[]): any;
declare function func_get_arg(arg_num: number): any;
declare function func_get_args(): any[];
declare function func_num_args(): number;
declare function function_exists(function_name: string): bool;
declare function get_defined_functions(): Pct.PhpAssocArray;
declare function register_shutdown_function(callback: string, ...parameter: any[]);
declare function register_shutdown_function(callback: Function, ...parameter: any[]);
declare function register_tick_function(callback: string, ...arg: any[]): bool;
declare function register_tick_function(callback: Function, ...arg: any[]): bool;
declare function unregister_tick_function(function_name: string);
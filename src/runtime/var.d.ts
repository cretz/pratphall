///<reference path='all.ts' />

declare function boolval(var_: any): bool;
declare function debug_zval_dump(variable: any);
declare function empty(var_: any): bool;
declare function floatval(var_: any): number;
declare function get_defined_vars(): Pct.PhpAssocArray;
declare function get_resource_type(handle: Pct.PhpResource): string;
declare function gettype(var_: any): string;
//declare function import_request_variables(); nope
declare function intval(var_: any, base?: number): number;
declare function is_array(var_: any): bool;
declare function is_bool(var_: any): bool;
declare function is_callable(name: any, syntax_only?: bool, $callable_name?: string): bool;
declare function is_float(var_: any): bool;
declare function is_int(var_: any): bool;
declare function is_null(var_: any): bool;
declare function is_numeric(var_: any): bool;
declare function is_object(var_: any): bool;
declare function is_resource(var_: any): bool;
declare function is_scalar(var_: any): bool;
declare function is_string(var_: any): bool;
declare function isset(...var_: any[]): bool;
declare function print_r(expression: any);
declare function print_r(expression: any, return_: bool): string;
declare function serialize(value: any): string;
declare function settype($var_: any, type: string): bool;
declare function strval(var_: any): string;
declare function unserialize(str: string): any;
declare function unset(...var_: any[]);
declare function var_dump(...var_: any[]);
declare function var_export(expression: any);
declare function var_export(expression: any, return_: bool): string;

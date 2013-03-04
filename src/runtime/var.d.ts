///<reference path='all.d.ts' />

function boolval(var_: any): bool;
function debug_zval_dump(variable: any);
function empty(var_: any): bool;
function floatval(var_: any): number;
function get_defined_vars(): Pct.PhpAssocArray;
function get_resource_type(handle: Pct.PhpResource): string;
function gettype(var_: any): string;
//function import_request_variables(); nope
function intval(var_: any, base?: number): number;
function is_array(var_: any): bool;
function is_bool(var_: any): bool;
function is_callable(name: any, syntax_only?: bool, $callable_name?: string): bool;
function is_float(var_: any): bool;
function is_int(var_: any): bool;
function is_null(var_: any): bool;
function is_numeric(var_: any): bool;
function is_object(var_: any): bool;
function is_resource(var_: any): bool;
function is_scalar(var_: any): bool;
function is_string(var_: any): bool;
function isset(...var_: any[]): bool;
function print_r(expression: any);
function print_r(expression: any, return_: bool): string;
function serialize(value: any): string;
function settype($var_: any, type: string): bool;
function strval(var_: any): string;
function unserialize(str: string): any;
function unset(...var_: any[]);
function var_dump(...var_: any[]);
function var_export(expression: any);
function var_export(expression: any, return_: bool): string;

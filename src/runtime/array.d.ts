///<reference path='all.d.ts' />
var CASE_LOWER: number;
var CASE_UPPER: number;

var SORT_ASC: number;
var SORT_DESC: number;
var SORT_REGULAR: number;
var SORT_NUMERIC: number;
var SORT_STRING: number;
var SORT_LOCALE_STRING: number;
var SORT_NATURAL: number;
var SORT_FLAG_CASE: number;

var COUNT_NORMAL: number;
var COUNT_RECURSIVE: number;

function array(contents: any[]): Array;
function array(contents: Pct.PhpAssocArray): Array;
function array_change_key_case(input: Array, case_?: number): Array;
function array_chunk(input: Array, size: number, preserve_keys?: bool): Array;
function array_combine(keys: Array, values: Array): Array;
function array_count_values(input: Array): Array;
function array_diff(array1: Array, array2: Array, ...arrays: Array[]): Array;
function array_diff_assoc(array1: Array, array2: Array, ...arrays: Array[]): Array;
function array_diff_key(array1: Array, array2: Array, ...arrays: Array[]): Array;
function array_diff_uassoc(array1: Array, array2: Array, key_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle
function array_diff_ukey(array1: Array, array2: Array, key_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle
function array_fill(start_index: number, num: number, value: any): Array;
function array_fill_keys(keys: Array, value: any): Array;
function array_filter(input: Array, callback?: (value: any) => bool): Array;
function array_flip(trans: Array): Array;
function array_intersect(array1: Array, array2: Array, ...array: Array[]): Array;
function array_intersect_assoc(array1: Array, array2: Array, ...array: Array[]): Array;
function array_intersect_key(array1: Array, array2: Array, ...array: Array[]): Array;
function array_intersect_uassoc(array1: Array, array2: Array, key_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle
function array_intersect_ukey(array1: Array, array2: Array, key_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle
function array_key_exists(key: number, search: Array): bool;
function array_key_exists(key: string, search: Array): bool;
function array_keys(input: Array, search_value?: any, strict?: bool): any[];
function array_map(callback: (value: any) => any, ...array: Array[]): Array;
function array_map(callback: Function, ...array: Array[]): Array;
function array_merge(array1: Array, ...arrays: Array[]): Array;
function array_merge_recursive(array1: Array, ...arrays: Array[]): Array;
function array_multisort($arr: Array, arg?: number, ...args: number[]): bool;
function array_pad(input: Array, pad_size: number, value: any): Array;
function array_pop($array: Array): any;
function array_product(array: Array): number;
function array_push($array: Array, ...var_: any[]): number;
function array_rand(input: Array, num_req?: number): any;
function array_reduce(input: Array, callback: ($result: any, item: any) => any, initial?: any): any;
function array_replace(array: Array, array1: Array, ...arrays: Array[]): Array;
function array_replace_recursive(array: Array, array1: Array, ...arrays: Array[]): Array;
function array_reverse(array: Array, preserve_keys?: bool): Array;
function array_search(needle: any, haystack: Array, strict?: bool): any;
function array_shift($array: Array): any;
function array_slice(array: Array, offset: number, length?: number, preserve_keys?: bool): Array;
function array_splice($input: Array, offset: number, length?: number, replacement?: any): Array;
function array_sum(array: Array): number;
function array_udiff(array1: Array, array2: Array, data_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle
function array_udiff_assoc(array1: Array, array2: Array, data_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle
function array_udiff_uassoc(array1: Array, array2: Array, data_compare_func: (a: any, b: any) => number, key_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle
function array_uintersect(array1: Array, array2: Array, data_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle
function array_uintersect_assoc(array1: Array, array2: Array, data_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle
function array_uintersect_uassoc(array1: Array, array2: Array, data_compare_func: (a: any, b: any) => number, key_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle
function array_unique(array: Array, sort_flags?: number): Array;
function array_unshift($array: Array, ...var_: any[]): number;
function array_values(input: Array): any[];
function array_walk($array: Array, funcname: ($value: any, key: any) => any, userdata?: any): bool;
function array_walk_recursive($array: Array, funcname: ($value: any, key: any) => any, userdata?: any): bool;
function arsort($array: Array, sort_flags?: number): bool;
function asort($array: Array, sort_flags?: number): bool;
function compact(...varname: any[]): Array;
function count(var_: Array, mode?: number): number;
function count(var_: Countable, mode?: number): number;
function current($array: Array): any;
function each($array: Array): Array;
function end($array: Array): any;
//extract() TODO: extract no worky on purpose (and don't think I want it)
function in_array(needle: any, haystack: Array, strict?: bool): bool;
function key($array: Array): any;
function krsort($array: Array, sort_flags?: number): bool;
function ksort($array: Array, sort_flags?: number): bool;
//list() TODO: list not working...fine by me
function natcasesort($array: Array): bool;
function natsort($array: Array): bool;
function next($array: Array): any;
function prev($array: Array): any;
function range(start: any, end: any, step?: number): Array;
function reset($array: Array): any;
function rsort($array: Array, sort_flags?: number): bool;
function shuffle($array: Array): bool;
function sort($array: Array, sort_flags?: number): bool;
function uasort($array: Array, cmp_function: (a: any, b: any) => number): bool;
function uksort($array: Array, cmp_function: (a: any, b: any) => number): bool;
function usort($array: Array, cmp_function: (a: any, b: any) => number): bool;
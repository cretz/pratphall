///<reference path='all.d.ts' />
declare var CASE_LOWER: number;
declare var CASE_UPPER: number;

declare var SORT_ASC: number;
declare var SORT_DESC: number;
declare var SORT_REGULAR: number;
declare var SORT_NUMERIC: number;
declare var SORT_STRING: number;
declare var SORT_LOCALE_STRING: number;
declare var SORT_NATURAL: number;
declare var SORT_FLAG_CASE: number;

declare var COUNT_NORMAL: number;
declare var COUNT_RECURSIVE: number;

declare function array(contents: any[]): Array;
declare function array(contents: Pct.PhpAssocArray): Array;
declare function array_change_key_case(input: Array, case_?: number): Array;
declare function array_chunk(input: Array, size: number, preserve_keys?: bool): Array;
declare function array_combine(keys: Array, values: Array): Array;
declare function array_count_values(input: Array): Array;
declare function array_diff(array1: Array, array2: Array, ...arrays: Array[]): Array;
declare function array_diff_assoc(array1: Array, array2: Array, ...arrays: Array[]): Array;
declare function array_diff_key(array1: Array, array2: Array, ...arrays: Array[]): Array;
declare function array_diff_uassoc(array1: Array, array2: Array, key_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle
declare function array_diff_ukey(array1: Array, array2: Array, key_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle
declare function array_fill(start_index: number, num: number, value: any): Array;
declare function array_fill_keys(keys: Array, value: any): Array;
declare function array_filter(input: Array, callback?: (value: any) => bool): Array;
declare function array_flip(trans: Array): Array;
declare function array_intersect(array1: Array, array2: Array, ...array: Array[]): Array;
declare function array_intersect_assoc(array1: Array, array2: Array, ...array: Array[]): Array;
declare function array_intersect_key(array1: Array, array2: Array, ...array: Array[]): Array;
declare function array_intersect_uassoc(array1: Array, array2: Array, key_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle
declare function array_intersect_ukey(array1: Array, array2: Array, key_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle
declare function array_key_exists(key: number, search: Array): bool;
declare function array_key_exists(key: string, search: Array): bool;
declare function array_keys(input: Array, search_value?: any, strict?: bool): any[];
declare function array_map(callback: (value: any) => any, ...array: Array[]): Array;
declare function array_map(callback: Function, ...array: Array[]): Array;
declare function array_merge(array1: Array, ...arrays: Array[]): Array;
declare function array_merge_recursive(array1: Array, ...arrays: Array[]): Array;
declare function array_multisort($arr: Array, arg?: number, ...args: number[]): bool;
declare function array_pad(input: Array, pad_size: number, value: any): Array;
declare function array_pop($array: Array): any;
declare function array_product(array: Array): number;
declare function array_push($array: Array, ...var_: any[]): number;
declare function array_rand(input: Array, num_req?: number): any;
declare function array_reduce(input: Array, callback: ($result: any, item: any) => any, initial?: any): any;
declare function array_replace(array: Array, array1: Array, ...arrays: Array[]): Array;
declare function array_replace_recursive(array: Array, array1: Array, ...arrays: Array[]): Array;
declare function array_reverse(array: Array, preserve_keys?: bool): Array;
declare function array_search(needle: any, haystack: Array, strict?: bool): any;
declare function array_shift($array: Array): any;
declare function array_slice(array: Array, offset: number, length?: number, preserve_keys?: bool): Array;
declare function array_splice($input: Array, offset: number, length?: number, replacement?: any): Array;
declare function array_sum(array: Array): number;
declare function array_udiff(array1: Array, array2: Array, data_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle
declare function array_udiff_assoc(array1: Array, array2: Array, data_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle
declare function array_udiff_uassoc(array1: Array, array2: Array, data_compare_func: (a: any, b: any) => number, key_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle
declare function array_uintersect(array1: Array, array2: Array, data_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle
declare function array_uintersect_assoc(array1: Array, array2: Array, data_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle
declare function array_uintersect_uassoc(array1: Array, array2: Array, data_compare_func: (a: any, b: any) => number, key_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle
declare function array_unique(array: Array, sort_flags?: number): Array;
declare function array_unshift($array: Array, ...var_: any[]): number;
declare function array_values(input: Array): any[];
declare function array_walk($array: Array, funcname: ($value: any, key: any) => any, userdata?: any): bool;
declare function array_walk_recursive($array: Array, funcname: ($value: any, key: any) => any, userdata?: any): bool;
declare function arsort($array: Array, sort_flags?: number): bool;
declare function asort($array: Array, sort_flags?: number): bool;
declare function compact(...varname: any[]): Array;
declare function count(var_: Array, mode?: number): number;
declare function count(var_: Countable, mode?: number): number;
declare function current($array: Array): any;
declare function each($array: Array): Array;
declare function end($array: Array): any;
//extract() TODO: extract no worky on purpose (and don't think I want it)
declare function in_array(needle: any, haystack: Array, strict?: bool): bool;
declare function key($array: Array): any;
declare function krsort($array: Array, sort_flags?: number): bool;
declare function ksort($array: Array, sort_flags?: number): bool;
//list() TODO: list not working...fine by me
declare function natcasesort($array: Array): bool;
declare function natsort($array: Array): bool;
declare function next($array: Array): any;
declare function prev($array: Array): any;
declare function range(start: any, end: any, step?: number): Array;
declare function reset($array: Array): any;
declare function rsort($array: Array, sort_flags?: number): bool;
declare function shuffle($array: Array): bool;
declare function sort($array: Array, sort_flags?: number): bool;
declare function uasort($array: Array, cmp_function: (a: any, b: any) => number): bool;
declare function uksort($array: Array, cmp_function: (a: any, b: any) => number): bool;
declare function usort($array: Array, cmp_function: (a: any, b: any) => number): bool;
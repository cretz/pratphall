
//--------------------------------------------------------------------------------
// array
//--------------------------------------------------------------------------------

/*
 * These functions allow you to interact with and manipulate arrays in various
 * ways. Arrays are essential for storing, managing, and operating on sets of
 * variables.
 * 
 * Simple and multi-dimensional arrays are supported, and may be either user
 * created or created by another function. There are specific database handling
 * functions for populating arrays from database queries, and several functions
 * return arrays.
 * 
 * Please see the Arrays section of the manual for a detailed explanation of how
 * arrays are implemented and used in PHP. See also Array operators for other ways
 * how to manipulate the arrays.
 */

/**
 * CASE_LOWER is used with array_change_key_case and is used to convert array keys
 * to lower case. This is also the default case for array_change_key_case.
 */
declare var CASE_LOWER: number;

/**
 * CASE_UPPER is used with array_change_key_case and is used to convert array keys
 * to upper case.
 */
declare var CASE_UPPER: number;


/**
 * SORT_ASC is used with array_multisort to sort in ascending order.
 */
declare var SORT_ASC: number;

/**
 * SORT_DESC is used with array_multisort to sort in descending order.
 */
declare var SORT_DESC: number;

/**
 * SORT_REGULAR is used to compare items normally.
 */
declare var SORT_REGULAR: number;

/**
 * SORT_NUMERIC is used to compare items numerically.
 */
declare var SORT_NUMERIC: number;

/**
 * SORT_STRING is used to compare items as strings.
 */
declare var SORT_STRING: number;

/**
 * SORT_LOCALE_STRING is used to compare items as strings, based on the current
 * locale. Added in PHP 4.4.0 and 5.0.2.
 */
declare var SORT_LOCALE_STRING: number;

/**
 * SORT_NATURAL is used to compare items as strings using "natural ordering" like
 * natsort. Added in PHP 5.4.0.
 */
declare var SORT_NATURAL: number;

/**
 * SORT_FLAG_CASE can be combined (bitwise OR) with SORT_STRING or SORT_NATURAL to
 * sort strings case-insensitively. Added in PHP 5.4.0.
 */
declare var SORT_FLAG_CASE: number;

declare var COUNT_NORMAL: number;
declare var COUNT_RECURSIVE: number;


/**
 * Create an array
 * 
 * Creates an array. Read the section on the array type for more information on
 * what an array is.
 *
 * @param contents Syntax "index = values", separated by commas, define index and
 *                 values. index may be of type string or integer. When index is
 *                 omitted, an integer index is automatically generated, starting
 *                 at 0. If index is an integer, next generated index will be the
 *                 biggest integer index + 1. Note that when two identical index
 *                 are defined, the last overwrite the first.
 *                 
 *                 Having a trailing comma after the last defined array entry,
 *                 while unusual, is a valid syntax.
 * @return Returns an array of the parameters.  The parameters can be given an
 *         index with the = operator.  Read the section on the array type for more
 *         information on what an array is.
 */
declare function array(contents: any[]): Array;

/**
 * Create an array
 * 
 * Creates an array. Read the section on the array type for more information on
 * what an array is.
 *
 * @param contents Syntax "index = values", separated by commas, define index and
 *                 values. index may be of type string or integer. When index is
 *                 omitted, an integer index is automatically generated, starting
 *                 at 0. If index is an integer, next generated index will be the
 *                 biggest integer index + 1. Note that when two identical index
 *                 are defined, the last overwrite the first.
 *                 
 *                 Having a trailing comma after the last defined array entry,
 *                 while unusual, is a valid syntax.
 * @return Returns an array of the parameters.  The parameters can be given an
 *         index with the = operator.  Read the section on the array type for more
 *         information on what an array is.
 */
declare function array(contents: Pct.PhpAssocArray): Array;

/**
 * Changes all keys in an array
 * 
 * Returns an array with all keys from input lowercased or uppercased. Numbered
 * indices are left as is.
 *
 * @param input The array to work on
 * @param case_ Either CASE_UPPER or CASE_LOWER (default)
 * @return Returns an array with its keys lower or uppercased, or false if input
 *         is not an array.
 */
declare function array_change_key_case(input: Array, case_?: number): Array;

/**
 * Split an array into chunks
 * 
 * Chunks an array into size large chunks. The last chunk may contain less than
 * size elements.
 *
 * @param input The array to work on
 * @param size The size of each chunk
 * @param preserve_keys When set to true keys will be preserved. Default is false
 *                      which will reindex the chunk numerically
 * @return Returns a multidimensional numerically indexed array, starting with
 *         zero, with each dimension containing size elements.
 */
declare function array_chunk(input: Array, size: number, preserve_keys?: bool): Array;

/**
 * Creates an array by using one array for keys and another for its values
 * 
 * Creates an array by using the values from the keys array as keys and the values
 * from the values array as the corresponding values.
 *
 * @param keys Array of keys to be used. Illegal values for key will be converted
 *             to string.
 * @param values Array of values to be used
 * @return Returns the combined array, false if the number of elements for each
 *         array isn't equal.
 */
declare function array_combine(keys: Array, values: Array): Array;

/**
 * Counts all the values of an array
 * 
 * array_count_values returns an array using the values of the input array as keys
 * and their frequency in input as values.
 *
 * @param input The array of values to count
 * @return Returns an associative array of values from input as keys and their
 *         count as value.
 */
declare function array_count_values(input: Array): Array;

/**
 * Computes the difference of arrays
 * 
 * Compares array1 against array2 and returns the difference.
 *
 * @param array1 The array to compare from
 * @param array2 An array to compare against
 * @param arrays More arrays to compare against
 * @return Returns an array containing all the entries from array1 that are not
 *         present in any of the other arrays.
 */
declare function array_diff(array1: Array, array2: Array, ...arrays: Array[]): Array;

/**
 * Computes the difference of arrays with additional index check
 * 
 * Compares array1 against array2 and returns the difference. Unlike array_diff the
 * array keys are also used in the comparison.
 *
 * @param array1 The array to compare from
 * @param array2 An array to compare against
 * @param arrays More arrays to compare against
 * @return Returns an array containing all the values from array1 that are not
 *         present in any of the other arrays.
 */
declare function array_diff_assoc(array1: Array, array2: Array, ...arrays: Array[]): Array;

/**
 * Computes the difference of arrays using keys for comparison
 * 
 * Compares the keys from array1 against the keys from array2 and returns the
 * difference. This function is like array_diff except the comparison is done on
 * the keys instead of the values.
 *
 * @param array1 The array to compare from
 * @param array2 An array to compare against
 * @param arrays More arrays to compare against
 * @return Returns an array containing all the entries from array1 whose keys are
 *         not present in any of the other arrays.
 */
declare function array_diff_key(array1: Array, array2: Array, ...arrays: Array[]): Array;

/**
 * Computes the difference of arrays with additional index check which is performed
 * by a user supplied callback function
 * 
 * Compares array1 against array2 and returns the difference. Unlike array_diff the
 * array keys are used in the comparison.
 * 
 * Unlike array_diff_assoc an user supplied callback function is used for the
 * indices comparison, not internal function.
 *
 * @param array1 The array to compare from
 * @param array2 An array to compare against
 * @param key_compare_func 
 * @return Returns an array containing all the entries from array1 that are not
 *         present in any of the other arrays.
 */
declare function array_diff_uassoc(array1: Array, array2: Array, key_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle

/**
 * Computes the difference of arrays using a callback function on the keys for
 * comparison
 * 
 * Compares the keys from array1 against the keys from array2 and returns the
 * difference. This function is like array_diff except the comparison is done on
 * the keys instead of the values.
 * 
 * Unlike array_diff_key a user supplied callback function is used for the indices
 * comparison, not internal function.
 *
 * @param array1 The array to compare from
 * @param array2 An array to compare against
 * @param key_compare_func 
 * @return Returns an array containing all the entries from array1 that are not
 *         present in any of the other arrays.
 */
declare function array_diff_ukey(array1: Array, array2: Array, key_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle

/**
 * Fill an array with values
 * 
 * Fills an array with num entries of the value of the value parameter, keys
 * starting at the start_index parameter.
 *
 * @param start_index The first index of the returned array.
 *                    
 *                    If start_index is negative, the first index of the returned
 *                    array will be start_index and the following indices will
 *                    start from zero (see example).
 * @param num Number of elements to insert. Must be greater than zero.
 * @param value Value to use for filling
 * @return Returns the filled array
 */
declare function array_fill(start_index: number, num: number, value: any): Array;

/**
 * Fill an array with values, specifying keys
 * 
 * Fills an array with the value of the value parameter, using the values of the
 * keys array as keys.
 *
 * @param keys Array of values that will be used as keys. Illegal values for key
 *             will be converted to string.
 * @param value Value to use for filling
 * @return Returns the filled array
 */
declare function array_fill_keys(keys: Array, value: any): Array;

/**
 * Filters elements of an array using a callback function
 * 
 * Iterates over each value in the input array passing them to the callback
 * function. If the  callback function returns true, the current value from input
 * is returned into the result array. Array keys are preserved.
 *
 * @param input The array to iterate over
 * @param callback The callback function to use
 *                 
 *                 If no callback is supplied, all entries of input equal to false
 *                 (see converting to boolean) will be removed.
 * @return Returns the filtered array.
 */
declare function array_filter(input: Array, callback?: (value: any) => bool): Array;

/**
 * Exchanges all keys with their associated values in an array
 * 
 * array_flip returns an array in flip order, i.e. keys from trans become values
 * and values from trans become keys.
 * 
 * Note that the values of trans need to be valid keys, i.e. they need to be either
 * integer or string. A warning will be emitted if a value has the wrong type, and
 * the key/value pair in question will not be included in the result.
 * 
 * If a value has several occurrences, the latest key will be used as its value,
 * and all others will be lost.
 *
 * @param trans An array of key/value pairs to be flipped.
 * @return Returns the flipped array on success and  on failure.
 */
declare function array_flip(trans: Array): Array;

/**
 * Computes the intersection of arrays
 * 
 * array_intersect returns an array containing all the values of array1 that are
 * present in all the arguments. Note that keys are preserved.
 *
 * @param array1 The array with master values to check.
 * @param array2 An array to compare values against.
 * @param array 
 * @return Returns an array containing all of the values in array1 whose values
 *         exist in all of the parameters.
 */
declare function array_intersect(array1: Array, array2: Array, ...array: Array[]): Array;

/**
 * Computes the intersection of arrays with additional index check
 *
 * @param array1 The array with master values to check.
 * @param array2 An array to compare values against.
 * @param array 
 * @return Returns an associative array containing all the values in array1 that
 *         are present in all of the arguments.
 */
declare function array_intersect_assoc(array1: Array, array2: Array, ...array: Array[]): Array;

/**
 * Computes the intersection of arrays using keys for comparison
 * 
 * array_intersect_key returns an array containing all the entries of array1 which
 * have keys that are present in all the arguments.
 *
 * @param array1 The array with master keys to check.
 * @param array2 An array to compare keys against.
 * @param array 
 * @return Returns an associative array containing all the entries of array1 which
 *         have keys that are present in all arguments.
 */
declare function array_intersect_key(array1: Array, array2: Array, ...array: Array[]): Array;

/**
 * Computes the intersection of arrays with additional index check, compares
 * indexes by a callback function
 * 
 * array_intersect_uassoc returns an array containing all the values of array1 that
 * are present in all the arguments. Note that the keys are used in the comparison
 * unlike in array_intersect.
 *
 * @param array1 Initial array for comparison of the arrays.
 * @param array2 First array to compare keys against.
 * @param key_compare_func 
 * @return Returns the values of array1 whose values exist in all of the
 *         arguments.
 */
declare function array_intersect_uassoc(array1: Array, array2: Array, key_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle

/**
 * Computes the intersection of arrays using a callback function on the keys for
 * comparison
 * 
 * array_intersect_ukey returns an array containing all the values of array1 which
 * have matching keys that are present in all the arguments.
 *
 * @param array1 Initial array for comparison of the arrays.
 * @param array2 First array to compare keys against.
 * @param key_compare_func 
 * @return Returns the values of array1 whose keys exist in all the arguments.
 */
declare function array_intersect_ukey(array1: Array, array2: Array, key_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle

/**
 * Checks if the given key or index exists in the array
 * 
 * array_key_exists returns true if the given key is set in the array. key can be
 * any value possible for an array index.
 *
 * @param key Value to check.
 * @param search An array with keys to check.
 */
declare function array_key_exists(key: number, search: Array): bool;

/**
 * Checks if the given key or index exists in the array
 * 
 * array_key_exists returns true if the given key is set in the array. key can be
 * any value possible for an array index.
 *
 * @param key Value to check.
 * @param search An array with keys to check.
 */
declare function array_key_exists(key: string, search: Array): bool;

/**
 * Return all the keys or a subset of the keys of an array
 * 
 * array_keys returns the keys, numeric and string, from the input array.
 * 
 * If the optional search_value is specified, then only the keys for that value are
 * returned. Otherwise, all the keys from the input are returned.
 *
 * @param input An array containing keys to return.
 * @param search_value If specified, then only keys containing these values are
 *                     returned.
 * @param strict Determines if strict comparison (===) should be used during the
 *               search.
 * @return Returns an array of all the keys in input.
 */
declare function array_keys(input: Array, search_value?: any, strict?: bool): any[];

/**
 * Applies the callback to the elements of the given arrays
 * 
 * array_map returns an array containing all the elements of arr1 after applying
 * the callback function to each one. The number of parameters that the callback
 * function accepts should match the number of arrays passed to the array_map
 *
 * @param callback Callback function to run for each element in each array.
 * @param array 
 * @return Returns an array containing all the elements of arr1 after applying the
 *         callback function to each one.
 */
declare function array_map(callback: (value: any) => any, ...array: Array[]): Array;

/**
 * Applies the callback to the elements of the given arrays
 * 
 * array_map returns an array containing all the elements of arr1 after applying
 * the callback function to each one. The number of parameters that the callback
 * function accepts should match the number of arrays passed to the array_map
 *
 * @param callback Callback function to run for each element in each array.
 * @param array 
 * @return Returns an array containing all the elements of arr1 after applying the
 *         callback function to each one.
 */
declare function array_map(callback: Function, ...array: Array[]): Array;

/**
 * Merge one or more arrays
 * 
 * Merges the elements of one or more arrays together so that the values of one are
 * appended to the end of the previous one. It returns the resulting array.
 * 
 * If the input arrays have the same string keys, then the later value for that key
 * will overwrite the previous one.  If, however, the arrays contain numeric keys,
 * the later value will not overwrite the original value, but will be appended.
 * 
 * Values in the input array with numeric keys will be renumbered with incrementing
 * keys starting from zero in the result array.
 *
 * @param array1 Initial array to merge.
 * @param arrays Variable list of arrays to merge.
 * @return Returns the resulting array.
 */
declare function array_merge(array1: Array, ...arrays: Array[]): Array;

/**
 * Merge two or more arrays recursively
 * 
 * array_merge_recursive merges the elements of one or more arrays together so that
 * the values of one are appended to the end of the previous one.  It returns the
 * resulting array.
 * 
 * If the input arrays have the same string keys, then the values for these keys
 * are merged together into an array, and this is done recursively, so that if one
 * of the values is an array itself, the function will merge it with a
 * corresponding entry in another array too. If, however, the arrays have the same
 * numeric key, the later value will not overwrite the original value, but will be
 * appended.
 *
 * @param array1 Initial array to merge.
 * @param arrays Variable list of arrays to recursively merge.
 * @return An array of values resulted from merging the arguments together.
 */
declare function array_merge_recursive(array1: Array, ...arrays: Array[]): Array;

/**
 * Sort multiple or multi-dimensional arrays
 * 
 * array_multisort can be used to sort several arrays at once, or a
 * multi-dimensional array by one or more dimensions.
 * 
 * Associative (string) keys will be maintained, but numeric keys will be
 * re-indexed.
 *
 * @param $arr An array being sorted.
 * @param arg Optionally another array, or sort options for the previous array
 *            argument: SORT_ASC, SORT_DESC, SORT_REGULAR, SORT_NUMERIC,
 *            SORT_STRING.
 * @param args Additional arg's.
 */
declare function array_multisort($arr: Array, arg?: number, ...args: number[]): bool;

/**
 * Pad array to the specified length with a value
 * 
 * array_pad returns a copy of the input padded to size specified by pad_size with
 * value pad_value. If pad_size is positive then the array is padded on the right,
 * if it's negative then on the left. If the absolute value of pad_size is less
 * than or equal to the length of the input then no padding takes place. It is
 * possible to add at most 1048576 elements at a time.
 *
 * @param input Initial array of values to pad.
 * @param pad_size New size of the array.
 * @param value
 * @return Returns a copy of the input padded to size specified by pad_size with
 *         value pad_value. If pad_size is positive then the array is padded on
 *         the right, if it's negative then on the left. If the absolute value of
 *         pad_size is less than or equal to the length of the input then no
 *         padding takes place.
 */
declare function array_pad(input: Array, pad_size: number, value: any): Array;

/**
 * Pop the element off the end of array
 * 
 * array_pop pops and returns the last value of the array, shortening the array by
 * one element. If array is empty (or is not an array), will be returned. Will
 * additionally produce a Warning when called on a non-array.
 *
 * @param $array The array to get the value from.
 * @return Returns the last value of array. If array is empty (or is not an
 *         array), will be returned.
 */
declare function array_pop($array: Array): any;

/**
 * Calculate the product of values in an array
 * 
 * array_product returns the product of values in an array.
 *
 * @param array The array.
 * @return Returns the product as an integer or float.
 */
declare function array_product(array: Array): number;

/**
 * Push one or more elements onto the end of array
 * 
 * array_push treats array as a stack, and pushes the passed variables onto the end
 * of array. The length of array increases by the number of variables pushed. Has
 * the same effect as:   ]]>  repeated for each var.
 *
 * @param $array The input array.
 * @param var_ The pushed value.
 * @return Returns the new number of elements in the array.
 */
declare function array_push($array: Array, ...var_: any[]): number;

/**
 * Pick one or more random entries out of an array
 * 
 * Picks one or more random entries out of an array, and returns the key (or keys)
 * of the random entries.
 *
 * @param input The input array.
 * @param num_req Specifies how many entries you want to pick. Trying to pick more
 *                elements than there are in the array will result in an E_WARNING
 *                level error.
 * @return If you are picking only one entry, array_rand returns the key for a
 *         random entry. Otherwise, it returns an array of keys for the random
 *         entries. This is done so that you can pick random keys as well as
 *         values out of the array.
 */
declare function array_rand(input: Array, num_req?: number): any;

/**
 * Iteratively reduce the array to a single value using a callback function
 * 
 * array_reduce applies iteratively the function function to the elements of the
 * array input, so as to reduce the array to a single value.
 *
 * @param input The input array.
 * @param callback
 * @param initial If the optional initial is available, it will be used at the
 *                beginning of the process, or as a final result in case the array
 *                is empty.
 * @return Returns the resulting value.
 *         
 *         If the array is empty and initial is not passed, array_reduce returns .
 */
declare function array_reduce(input: Array, callback: ($result: any, item: any) => any, initial?: any): any;

/**
 * Replaces elements from passed arrays into the first array
 * 
 * array_replace replaces the values of the first array with the same values from
 * all the following arrays. If a key from the first array exists in the second
 * array, its value will be replaced by the value from the second array. If the key
 * exists in the second array, and not the first, it will be created in the first
 * array. If a key only exists in the first array, it will be left as is. If
 * several arrays are passed for replacement, they will be processed in order, the
 * later arrays overwriting the previous values.
 * 
 * array_replace is not recursive : it will replace values in the first array by
 * whatever type is in the second array.
 *
 * @param array The array in which elements are replaced.
 * @param array1 The array from which elements will be extracted.
 * @param arrays More arrays from which elements will be extracted. Values from
 *               later arrays overwrite the previous values.
 * @return Returns an array, or  if an error occurs.
 */
declare function array_replace(array: Array, array1: Array, ...arrays: Array[]): Array;

/**
 * Replaces elements from passed arrays into the first array recursively
 * 
 * array_replace_recursive replaces the values of the first array with the same
 * values from all the following arrays. If a key from the first array exists in
 * the second array, its value will be replaced by the value from the second array.
 * If the key exists in the second array, and not the first, it will be created in
 * the first array. If a key only exists in the first array, it will be left as is.
 * If several arrays are passed for replacement, they will be processed in order,
 * the later array overwriting the previous values.
 * 
 * array_replace_recursive is recursive : it will recurse into arrays and apply the
 * same process to the inner value.
 * 
 * When the value in array is scalar, it will be replaced by the value in array1,
 * may it be scalar or array. When the value in array and array1 are both arrays,
 * array_replace_recursive will replace their respective value recursively.
 *
 * @param array The array in which elements are replaced.
 * @param array1 The array from which elements will be extracted.
 * @param arrays Optional. More arrays from which elements will be extracted.
 * @return Returns an array, or  if an error occurs.
 */
declare function array_replace_recursive(array: Array, array1: Array, ...arrays: Array[]): Array;

/**
 * Return an array with elements in reverse order
 * 
 * Takes an input array and returns a new array with the order of the elements
 * reversed.
 *
 * @param array The input array.
 * @param preserve_keys If set to true numeric keys are preserved. Non-numeric
 *                      keys are not affected by this setting and will always be
 *                      preserved.
 * @return Returns the reversed array.
 */
declare function array_reverse(array: Array, preserve_keys?: bool): Array;

/**
 * Searches the array for a given value and returns the corresponding key if
 * successful
 * 
 * Searches haystack for needle.
 *
 * @param needle The searched value.
 *               
 *               If needle is a string, the comparison is done in a case-sensitive
 *               manner.
 * @param haystack The array.
 * @param strict If the third parameter strict is set to true then the
 *               array_search function will search for identical elements in the
 *               haystack. This means it will also check the types of the needle
 *               in the haystack, and objects must be the same instance.
 * @return Returns the key for needle if it is found in the array, false
 *         otherwise.
 *         
 *         If needle is found in haystack more than once, the first matching key
 *         is returned. To return the keys for all matching values, use array_keys
 *         with the optional search_value parameter instead.
 */
declare function array_search(needle: any, haystack: Array, strict?: bool): any;

/**
 * Shift an element off the beginning of array
 * 
 * array_shift shifts the first value of the array off and returns it, shortening
 * the array by one element and moving everything down. All numerical array keys
 * will be modified to start counting from zero while literal keys won't be
 * touched.
 *
 * @param $array The input array.
 * @return Returns the shifted value, or  if array is empty or is not an array.
 */
declare function array_shift($array: Array): any;

/**
 * Extract a slice of the array
 * 
 * array_slice returns the sequence of elements from the array array as specified
 * by the offset and length parameters.
 *
 * @param array The input array.
 * @param offset If offset is non-negative, the sequence will start at that offset
 *               in the array.  If offset is negative, the sequence will start
 *               that far from the end of the array.
 * @param length If length is given and is positive, then the sequence will have
 *               up to that many elements in it. If the array is shorter than the
 *               length, then only the available array elements will be present.
 *               If length is given and is negative then the sequence will stop
 *               that many elements from the end of the array. If it is omitted,
 *               then the sequence will have everything from offset up until the
 *               end of the array.
 * @param preserve_keys Note that array_slice will reorder and reset the numeric
 *                      array indices by default. You can change this behaviour by
 *                      setting preserve_keys to true.
 * @return Returns the slice.
 */
declare function array_slice(array: Array, offset: number, length?: number, preserve_keys?: bool): Array;

/**
 * Remove a portion of the array and replace it with something else
 * 
 * Removes the elements designated by offset and length from the input array, and
 * replaces them with the elements of the replacement array, if supplied.
 * 
 * Note that numeric keys in input are not preserved.
 *
 * @param $input The input array.
 * @param offset If offset is positive then the start of removed portion is at
 *               that offset from the beginning of the input array.  If offset is
 *               negative then it starts that far from the end of the input array.
 *               
 * @param length If length is omitted, removes everything from offset to the end
 *               of the array.  If length is specified and is positive, then that
 *               many elements will be removed. If length is specified and is
 *               negative then the end of the removed portion will be that many
 *               elements from the end of the array.  Tip: to remove everything
 *               from offset to the end of the array when replacement is also
 *               specified, use count($input) for length.
 * @param replacement If replacement array is specified, then the removed elements
 *                    are replaced with elements from this array.
 *                    
 *                    If offset and length are such that nothing is removed, then
 *                    the elements from the replacement array are inserted in the
 *                    place specified by the offset. Note that keys in replacement
 *                    array are not preserved.
 *                    
 *                    If replacement is just one element it is not necessary to
 *                    put array() around it, unless the element is an array
 *                    itself, an object or .
 * @return Returns the array consisting of the extracted elements.
 */
declare function array_splice($input: Array, offset: number, length?: number, replacement?: any): Array;

/**
 * Calculate the sum of values in an array
 * 
 * array_sum returns the sum of values in an array.
 *
 * @param array The input array.
 * @return Returns the sum of values as an integer or float.
 */
declare function array_sum(array: Array): number;

/**
 * Computes the difference of arrays by using a callback function for data
 * comparison
 * 
 * Computes the difference of arrays by using a callback function for data
 * comparison. This is unlike array_diff which uses an internal function for
 * comparing the data.
 *
 * @param array1 The first array.
 * @param array2 The second array.
 * @param data_compare_func The callback comparison function.
 * @return Returns an array containing all the values of array1 that are not
 *         present in any of the other arguments.
 */
declare function array_udiff(array1: Array, array2: Array, data_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle

/**
 * Computes the difference of arrays with additional index check, compares data by
 * a callback function
 * 
 * Computes the difference of arrays with additional index check, compares data by
 * a callback function.
 *
 * @param array1 The first array.
 * @param array2 The second array.
 * @param data_compare_func 
 * @return array_udiff_assoc returns an array containing all the values from
 *         array1 that are not present in any of the other arguments. Note that
 *         the keys are used in the comparison unlike array_diff and array_udiff.
 *         The comparison of arrays' data is performed by using an user-supplied
 *         callback. In this aspect the behaviour is opposite to the behaviour of
 *         array_diff_assoc which uses internal function for comparison.
 */
declare function array_udiff_assoc(array1: Array, array2: Array, data_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle

/**
 * Computes the difference of arrays with additional index check, compares data and
 * indexes by a callback function
 * 
 * Computes the difference of arrays with additional index check, compares data and
 * indexes by a callback function.
 * 
 * Note that the keys are used in the comparison unlike array_diff and array_udiff.
 *
 * @param array1 The first array.
 * @param array2 The second array.
 * @param data_compare_func 
 * @param key_compare_func The comparison of keys (indices) is done also by the
 *                         callback function key_compare_func. This behaviour is
 *                         unlike what array_udiff_assoc does, since the latter
 *                         compares the indices by using an internal function.
 * @return Returns an array containing all the values from array1 that are not
 *         present in any of the other arguments.
 */
declare function array_udiff_uassoc(array1: Array, array2: Array, data_compare_func: (a: any, b: any) => number, key_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle

/**
 * Computes the intersection of arrays, compares data by a callback function
 * 
 * Computes the intersection of arrays, compares data by a callback function.
 *
 * @param array1 The first array.
 * @param array2 The second array.
 * @param data_compare_func 
 * @return Returns an array containing all the values of array1 that are present
 *         in all the arguments.
 */
declare function array_uintersect(array1: Array, array2: Array, data_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle

/**
 * Computes the intersection of arrays with additional index check, compares data
 * by a callback function
 * 
 * Computes the intersection of arrays with additional index check, compares data
 * by a callback function.
 * 
 * Note that the keys are used in the comparison unlike in array_uintersect. The
 * data is compared by using a callback function.
 *
 * @param array1 The first array.
 * @param array2 The second array.
 * @param data_compare_func 
 * @return Returns an array containing all the values of array1 that are present
 *         in all the arguments.
 */
declare function array_uintersect_assoc(array1: Array, array2: Array, data_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle

/**
 * Computes the intersection of arrays with additional index check, compares data
 * and indexes by a callback functions
 * 
 * Computes the intersection of arrays with additional index check, compares data
 * and indexes by a callback functions Note that the keys are used in the
 * comparison unlike in array_uintersect. Both the data and the indexes are
 * compared by using separate callback functions.
 *
 * @param array1 The first array.
 * @param array2 The second array.
 * @param data_compare_func 
 * @param key_compare_func Key comparison callback function.
 * @return Returns an array containing all the values of array1 that are present
 *         in all the arguments.
 */
declare function array_uintersect_uassoc(array1: Array, array2: Array, data_compare_func: (a: any, b: any) => number, key_compare_func: (a: any, b: any) => number): Array; //TODO: rest in middle

/**
 * Removes duplicate values from an array
 * 
 * Takes an input array and returns a new array without duplicate values.
 * 
 * Note that keys are preserved. array_unique sorts the values treated as string at
 * first, then will keep the first key encountered for every value, and ignore all
 * following keys. It does not mean that the key of the first related value from
 * the unsorted array will be kept.
 *
 * @param array The input array.
 * @param sort_flags The optional second parameter sort_flags may be used to
 *                   modify the sorting behavior using these values:
 *                   
 *                   Sorting type flags:   SORT_REGULAR - compare items normally
 *                   (don't change types)   SORT_NUMERIC - compare items
 *                   numerically   SORT_STRING - compare items as strings  
 *                   SORT_LOCALE_STRING - compare items as strings, based on the
 *                   current locale.
 * @return Returns the filtered array.
 */
declare function array_unique(array: Array, sort_flags?: number): Array;

/**
 * Prepend one or more elements to the beginning of an array
 * 
 * array_unshift prepends passed elements to the front of the array. Note that the
 * list of elements is prepended as a whole, so that the prepended elements stay in
 * the same order.  All numerical array keys will be modified to start counting
 * from zero while literal keys won't be touched.
 *
 * @param $array The input array.
 * @param var_ The prepended variable.
 * @return Returns the new number of elements in the array.
 */
declare function array_unshift($array: Array, ...var_: any[]): number;

/**
 * Return all the values of an array
 * 
 * array_values returns all the values from the input array and indexes the array
 * numerically.
 *
 * @param input The array.
 * @return Returns an indexed array of values.
 */
declare function array_values(input: Array): any[];

/**
 * Apply a user function to every member of an array
 * 
 * array_walk is not affected by the internal array pointer of array.  array_walk
 * will walk through the entire array regardless of pointer position.
 *
 * @param $array The input array.
 * @param funcname Typically, funcname takes on two parameters. The array
 *                 parameter's value being the first, and the key/index second.
 *                 
 *                 If funcname needs to be working with the actual values of the
 *                 array, specify the first parameter of funcname as a reference.
 *                 Then, any changes made to those elements will be made in the
 *                 original array itself.
 *                 
 *                 Many internal functions (for example strtolower) will throw a
 *                 warning if more than the expected number of argument are passed
 *                 in and are not usable directly as funcname.
 *                 
 *                 Only the values of the array may potentially be changed; its
 *                 structure cannot be altered, i.e., the programmer cannot add,
 *                 unset or reorder elements. If the callback does not respect
 *                 this requirement, the behavior of this function is undefined,
 *                 and unpredictable.
 * @param userdata If the optional userdata parameter is supplied, it will be
 *                 passed as the third parameter to the callback funcname.
 */
declare function array_walk($array: Array, funcname: ($value: any, key: any) => any, userdata?: any): bool;

/**
 * Apply a user function recursively to every member of an array
 * 
 * Applies the user-defined function funcname to each element of the input array.
 * This function will recurse into deeper arrays.
 *
 * @param $array
 * @param funcname Typically, funcname takes on two parameters. The input
 *                 parameter's value being the first, and the key/index second.
 *                 
 *                 If funcname needs to be working with the actual values of the
 *                 array, specify the first parameter of funcname as a reference.
 *                 Then, any changes made to those elements will be made in the
 *                 original array itself.
 * @param userdata If the optional userdata parameter is supplied, it will be
 *                 passed as the third parameter to the callback funcname.
 */
declare function array_walk_recursive($array: Array, funcname: ($value: any, key: any) => any, userdata?: any): bool;

/**
 * Sort an array in reverse order and maintain index association
 * 
 * This function sorts an array such that array indices maintain their correlation
 * with the array elements they are associated with.
 * 
 * This is used mainly when sorting associative arrays where the actual element
 * order is significant.
 *
 * @param $array The input array.
 * @param sort_flags You may modify the behavior of the sort using the optional
 *                   parameter sort_flags, for details see sort.
 */
declare function arsort($array: Array, sort_flags?: number): bool;

/**
 * Sort an array and maintain index association
 * 
 * This function sorts an array such that array indices maintain their correlation
 * with the array elements they are associated with.  This is used mainly when
 * sorting associative arrays where the actual element order is significant.
 *
 * @param $array The input array.
 * @param sort_flags You may modify the behavior of the sort using the optional
 *                   parameter sort_flags, for details see sort.
 */
declare function asort($array: Array, sort_flags?: number): bool;

/**
 * Create array containing variables and their values
 * 
 * Creates an array containing variables and their values.
 * 
 * For each of these, compact looks for a variable with that name in the current
 * symbol table and adds it to the output array such that the variable name becomes
 * the key and the contents of the variable become the value for that key. In
 * short, it does the opposite of extract.
 * 
 * Any strings that are not set will simply be skipped.
 *
 * @param varname compact takes a variable number of parameters. Each parameter
 *                can be either a string containing the name of the variable, or
 *                an array of variable names.  The array can contain other arrays
 *                of variable names inside it; compact handles it recursively.
 * @return Returns the output array with all the variables added to it.
 */
declare function compact(...varname: any[]): Array;

/**
 * Count all elements in an array, or something in an object
 * 
 * Counts all elements in an array, or something in an object.
 * 
 * For objects, if you have SPL installed, you can hook into count by implementing
 * interface Countable. The interface has exactly one method, Countable::count,
 * which returns the return value for the count function.
 * 
 * Please see the Array section of the manual for a detailed explanation of how
 * arrays are implemented and used in PHP.
 *
 * @param var_ The array or the object.
 * @param mode If the optional mode parameter is set to COUNT_RECURSIVE (or 1),
 *             count will recursively count the array.  This is particularly
 *             useful for counting all the elements of a multidimensional array.
 *             
 *             count can detect recursion to avoid an infinite loop, but will emit
 *             an E_WARNING every time it does (in case the array contains itself
 *             more than once) and return a count higher than may be expected.
 * @return Returns the number of elements in var. If var is not an array or an
 *         object with implemented Countable interface, 1 will be returned. There
 *         is one exception, if var is , 0 will be returned.
 *         
 *         count may return 0 for a variable that isn't set, but it may also
 *         return 0 for a variable that has been initialized with an empty array.
 *         Use isset to test if a variable is set.
 */
declare function count(var_: Array, mode?: number): number;

/**
 * Count all elements in an array, or something in an object
 * 
 * Counts all elements in an array, or something in an object.
 * 
 * For objects, if you have SPL installed, you can hook into count by implementing
 * interface Countable. The interface has exactly one method, Countable::count,
 * which returns the return value for the count function.
 * 
 * Please see the Array section of the manual for a detailed explanation of how
 * arrays are implemented and used in PHP.
 *
 * @param var_ The array or the object.
 * @param mode If the optional mode parameter is set to COUNT_RECURSIVE (or 1),
 *             count will recursively count the array.  This is particularly
 *             useful for counting all the elements of a multidimensional array.
 *             
 *             count can detect recursion to avoid an infinite loop, but will emit
 *             an E_WARNING every time it does (in case the array contains itself
 *             more than once) and return a count higher than may be expected.
 * @return Returns the number of elements in var. If var is not an array or an
 *         object with implemented Countable interface, 1 will be returned. There
 *         is one exception, if var is , 0 will be returned.
 *         
 *         count may return 0 for a variable that isn't set, but it may also
 *         return 0 for a variable that has been initialized with an empty array.
 *         Use isset to test if a variable is set.
 */
declare function count(var_: Countable, mode?: number): number;

/**
 * Return the current element in an array
 * 
 * Every array has an internal pointer to its "current" element, which is
 * initialized to the first element inserted into the array.
 *
 * @param $array The array.
 * @return The current function simply returns the value of the array element
 *         that's currently being pointed to by the internal pointer.  It does not
 *         move the pointer in any way.  If the internal pointer points beyond the
 *         end of the elements list or the array is empty, current returns false.
 */
declare function current($array: Array): any;

/**
 * Return the current key and value pair from an array and advance the array cursor
 * 
 * Return the current key and value pair from an array and advance the array
 * cursor.
 * 
 * After each has executed, the array cursor will be left on the next element of
 * the array, or past the last element if it hits the end of the array. You have to
 * use reset if you want to traverse the array again using each.
 *
 * @param $array The input array.
 * @return Returns the current key and value pair from the array array. This pair
 *         is returned in a four-element array, with the keys 0, 1, key, and
 *         value. Elements 0 and key contain the key name of the array element,
 *         and 1 and value contain the data.
 *         
 *         If the internal pointer for the array points past the end of the array
 *         contents, each returns false.
 */
declare function each($array: Array): Array;

/**
 * Set the internal pointer of an array to its last element
 * 
 * end advances array's internal pointer to the last element, and returns its
 * value.
 *
 * @param $array The array.  This array is passed by reference because it is
 *               modified by the function.  This means you must pass it a real
 *               variable and not a function returning an array because only
 *               actual variables may be passed by reference.
 * @return Returns the value of the last element or false for empty array.
 */
declare function end($array: Array): any;
//extract() TODO: extract no worky on purpose (and don't think I want it)

/**
 * Checks if a value exists in an array
 * 
 * Searches haystack for needle using loose comparison unless strict is set.
 *
 * @param needle The searched value.
 *               
 *               If needle is a string, the comparison is done in a case-sensitive
 *               manner.
 * @param haystack The array.
 * @param strict If the third parameter strict is set to true then the in_array
 *               function will also check the types of the needle in the haystack.
 *               
 * @return Returns true if needle is found in the array, false otherwise.
 */
declare function in_array(needle: any, haystack: Array, strict?: bool): bool;

/**
 * Fetch a key from an array
 * 
 * key returns the index element of the current array position.
 *
 * @param $array The array.
 * @return The key function simply returns the key of the array element that's
 *         currently being pointed to by the internal pointer.  It does not move
 *         the pointer in any way.  If the internal pointer points beyond the end
 *         of the elements list or the array is empty, key returns .
 */
declare function key($array: Array): any;

/**
 * Sort an array by key in reverse order
 * 
 * Sorts an array by key in reverse order, maintaining key to data correlations.
 * This is useful mainly for associative arrays.
 *
 * @param $array The input array.
 * @param sort_flags You may modify the behavior of the sort using the optional
 *                   parameter sort_flags, for details see sort.
 */
declare function krsort($array: Array, sort_flags?: number): bool;

/**
 * Sort an array by key
 * 
 * Sorts an array by key, maintaining key to data correlations. This is useful
 * mainly for associative arrays.
 *
 * @param $array The input array.
 * @param sort_flags You may modify the behavior of the sort using the optional
 *                   parameter sort_flags, for details see sort.
 */
declare function ksort($array: Array, sort_flags?: number): bool;
//list() TODO: list not working...fine by me

/**
 * Sort an array using a case insensitive "natural order" algorithm
 * 
 * natcasesort is a case insensitive version of natsort.
 * 
 * This function implements a sort algorithm that orders alphanumeric strings in
 * the way a human being would while maintaining key/value associations.  This is
 * described as a "natural ordering".
 *
 * @param $array The input array.
 */
declare function natcasesort($array: Array): bool;

/**
 * Sort an array using a "natural order" algorithm
 * 
 * This function implements a sort algorithm that orders alphanumeric strings in
 * the way a human being would while maintaining key/value associations. This is
 * described as a "natural ordering".  An example of the difference between this
 * algorithm and the regular computer string sorting algorithms (used in sort) can
 * be seen in the example below.
 *
 * @param $array The input array.
 */
declare function natsort($array: Array): bool;

/**
 * Advance the internal array pointer of an array
 * 
 * next behaves like current, with one difference.  It advances the internal array
 * pointer one place forward before returning the element value.  That means it
 * returns the next array value and advances the internal array pointer by one.
 *
 * @param $array The array being affected.
 * @return Returns the array value in the next place that's pointed to by the
 *         internal array pointer, or false if there are no more elements.
 */
declare function next($array: Array): any;

/**
 * Rewind the internal array pointer
 * 
 * Rewind the internal array pointer.
 * 
 * prev behaves just like next, except it rewinds the internal array pointer one
 * place instead of advancing it.
 *
 * @param $array The input array.
 * @return Returns the array value in the previous place that's pointed to by the
 *         internal array pointer, or false if there are no more elements.
 */
declare function prev($array: Array): any;

/**
 * Create an array containing a range of elements
 * 
 * Create an array containing a range of elements.
 *
 * @param start First value of the sequence.
 * @param end The sequence is ended upon reaching the end value.
 * @param step If a step value is given, it will be used as the increment between
 *             elements in the sequence.  step should be given as a positive
 *             number.  If not specified, step will default to 1.
 * @return Returns an array of elements from start to end, inclusive.
 */
declare function range(start: any, end: any, step?: number): Array;

/**
 * Set the internal pointer of an array to its first element
 * 
 * reset rewinds array's internal pointer to the first element and returns the
 * value of the first array element.
 *
 * @param $array The input array.
 * @return Returns the value of the first array element, or false if the array is
 *         empty.
 */
declare function reset($array: Array): any;

/**
 * Sort an array in reverse order
 * 
 * This function sorts an array in reverse order (highest to lowest).
 *
 * @param $array The input array.
 * @param sort_flags You may modify the behavior of the sort using the optional
 *                   parameter sort_flags, for details see sort.
 */
declare function rsort($array: Array, sort_flags?: number): bool;

/**
 * Shuffle an array
 * 
 * This function shuffles (randomizes the order of the elements in) an array.
 *
 * @param $array The array.
 */
declare function shuffle($array: Array): bool;

/**
 * Sort an array
 * 
 * This function sorts an array.  Elements will be arranged from lowest to highest
 * when this function has completed.
 *
 * @param $array The input array.
 * @param sort_flags The optional second parameter sort_flags may be used to
 *                   modify the sorting behavior using these values:
 *                   
 *                   Sorting type flags:   SORT_REGULAR - compare items normally
 *                   (don't change types)   SORT_NUMERIC - compare items
 *                   numerically   SORT_STRING - compare items as strings   
 *                   SORT_LOCALE_STRING - compare items as strings, based on the
 *                   current locale. It uses the locale, which can be changed
 *                   using setlocale      SORT_NATURAL - compare items as strings
 *                   using "natural ordering" like natsort     SORT_FLAG_CASE -
 *                   can be combined (bitwise OR) with SORT_STRING or SORT_NATURAL
 *                   to sort strings case-insensitively
 */
declare function sort($array: Array, sort_flags?: number): bool;

/**
 * Sort an array with a user-defined comparison function and maintain index
 * association
 * 
 * This function sorts an array such that array indices maintain their correlation
 * with the array elements they are associated with, using a user-defined
 * comparison function.
 * 
 * This is used mainly when sorting associative arrays where the actual element
 * order is significant.
 *
 * @param $array The input array.
 * @param cmp_function See usort and uksort for examples of user-defined
 *                     comparison functions.
 */
declare function uasort($array: Array, cmp_function: (a: any, b: any) => number): bool;

/**
 * Sort an array by keys using a user-defined comparison function
 * 
 * uksort will sort the keys of an array using a user-supplied comparison function.
 * If the array you wish to sort needs to be sorted by some non-trivial criteria,
 * you should use this function.
 *
 * @param $array The input array.
 * @param cmp_function 
 */
declare function uksort($array: Array, cmp_function: (a: any, b: any) => number): bool;

/**
 * Sort an array by values using a user-defined comparison function
 * 
 * This function will sort an array by its values using a user-supplied comparison
 * function.  If the array you wish to sort needs to be sorted by some non-trivial
 * criteria, you should use this function.
 * 
 * If two members compare as equal, their relative order in the sorted array is
 * undefined.
 *
 * @param $array The input array.
 * @param cmp_function Returning non-integer values from the comparison function,
 *                     such as float, will result in an internal cast to integer
 *                     of the callback's return value. So values such as 0.99 and
 *                     0.1 will both be cast to an integer value of 0, which will
 *                     compare such values as equal.
 */
declare function usort($array: Array, cmp_function: (a: any, b: any) => number): bool;

//--------------------------------------------------------------------------------
// calendar
//--------------------------------------------------------------------------------

/*
 * The calendar extension presents a series of functions to simplify converting
 * between different calendar formats.  The intermediary or standard it is based on
 * is the Julian Day Count.  The Julian Day Count is a count of days starting from
 * January 1st, 4713 B.C.  To convert between calendar systems, you must first
 * convert to Julian Day Count, then to the calendar system of your choice.  Julian
 * Day Count is very different from the Julian Calendar! For more information on
 * Julian Day Count, visit . For more information on calendar systems visit . 
 * Excerpts from this page are included in these instructions, and are in quotes.
 */
declare var CAL_GREGORIAN: number;
declare var CAL_JULIAN: number;
declare var CAL_JEWISH: number;
declare var CAL_FRENCH: number;

declare var CAL_DOW_DAYNO: number;
declare var CAL_DOW_SHORT: number;
declare var CAL_DOW_LONG: number;

declare var CAL_MONTH_GREGORIAN_SHORT: number;
declare var CAL_MONTH_GREGORIAN_LONG: number;
declare var CAL_MONTH_JULIAN_SHORT: number;
declare var CAL_MONTH_JULIAN_LONG: number;
declare var CAL_MONTH_JEWISH: number;
declare var CAL_MONTH_FRENCH: number;

declare var CAL_EASTER_DEFAULT: number;
declare var CAL_EASTER_ROMAN: number;
declare var CAL_EASTER_ALWAYS_GREGORIAN: number;
declare var CAL_EASTER_ALWAYS_JULIAN: number;


/**
 * Return the number of days in a month for a given year and calendar
 * 
 * This function will return the number of days in the month of year for the
 * specified calendar.
 *
 * @param calendar Calendar to use for calculation
 * @param month Month in the selected calendar
 * @param year Year in the selected calendar
 * @return The length in days of the selected month in the given calendar
 */
declare function cal_days_in_month(calendar: number, month: number, year: number): number;

/**
 * Converts from Julian Day Count to a supported calendar
 * 
 * cal_from_jd converts the Julian day given in jd into a date of the specified
 * calendar. Supported calendar values are CAL_GREGORIAN, CAL_JULIAN, CAL_JEWISH
 * and CAL_FRENCH.
 *
 * @param jd Julian day as integer
 * @param calendar Calendar to convert to
 * @return Returns an array containing calendar information like month, day, year,
 *         day of week, abbreviated and full names of weekday and month and the
 *         date in string form "month/day/year".
 */
declare function cal_from_jd(jd: number, calendar: number): Pct.PhpAssocArray;

/**
 * Returns information about a particular calendar
 * 
 * cal_info returns information on the specified calendar.
 * 
 * Calendar information is returned as an array containing the elements calname,
 * calsymbol, month, abbrevmonth and maxdaysinmonth. The names of the different
 * calendars which can be used as calendar are as follows:    0 or CAL_GREGORIAN -
 * Gregorian Calendar     1 or CAL_JULIAN - Julian Calendar     2 or CAL_JEWISH -
 * Jewish Calendar     3 or CAL_FRENCH - French Revolutionary Calendar
 * 
 * If no calendar is specified information on all supported calendars is returned
 * as an array.
 *
 * @param calendar Calendar to return information for. If no calendar is specified
 *                 information about all calendars is returned.
 */
declare function cal_info(calendar?: number): Pct.PhpAssocArray;

/**
 * Converts from a supported calendar to Julian Day Count
 * 
 * cal_to_jd calculates the Julian day count for a date in the specified calendar.
 * Supported calendars are CAL_GREGORIAN, CAL_JULIAN, CAL_JEWISH and CAL_FRENCH.
 *
 * @param calendar Calendar to convert from, one of CAL_GREGORIAN, CAL_JULIAN,
 *                 CAL_JEWISH or CAL_FRENCH.
 * @param month The month as a number, the valid range depends on the calendar
 * @param day The day as a number, the valid range depends on the calendar
 * @param year The year as a number, the valid range depends on the calendar
 * @return A Julian Day number.
 */
declare function cal_to_jd(calendar: number, month: number, day: number, year: number): number;

/**
 * Get Unix timestamp for midnight on Easter of a given year
 * 
 * Returns the Unix timestamp corresponding to midnight on Easter of the given
 * year.
 * 
 * This function will generate a warning if the year is outside of the range for
 * Unix timestamps (i.e. before 1970 or after 2037).
 * 
 * The date of Easter Day was defined by the Council of Nicaea in AD325 as the
 * Sunday after the first full moon which falls on or after the Spring Equinox. 
 * The Equinox is assumed to always fall on 21st March, so the calculation reduces
 * to determining the date of the full moon and the date of the following Sunday. 
 * The algorithm used here was introduced around the year 532 by Dionysius Exiguus.
 * Under the Julian Calendar (for years before 1753) a simple 19-year cycle is used
 * to track the phases of the Moon.  Under the Gregorian Calendar (for years after
 * 1753 - devised by Clavius and Lilius, and introduced by Pope Gregory XIII in
 * October 1582, and into Britain and its then colonies in September 1752) two
 * correction factors are added to make the cycle more accurate.
 *
 * @param year The year as a number between 1970 an 2037
 * @return The easter date as a unix timestamp.
 */
declare function easter_date(year?: number): number;

/**
 * Get number of days after March 21 on which Easter falls for a given year
 * 
 * Returns the number of days after March 21 on which Easter falls for a given
 * year. If no year is specified, the current year is assumed.
 * 
 * This function can be used instead of easter_date to calculate Easter for years
 * which fall outside the range of Unix timestamps (i.e. before 1970 or after
 * 2037).
 * 
 * The date of Easter Day was defined by the Council of Nicaea in AD325 as the
 * Sunday after the first full moon which falls on or after the Spring Equinox. 
 * The Equinox is assumed to always fall on 21st March, so the calculation reduces
 * to determining the date of the full moon and the date of the following Sunday. 
 * The algorithm used here was introduced around the year 532 by Dionysius Exiguus.
 * Under the Julian Calendar (for years before 1753) a simple 19-year cycle is used
 * to track the phases of the Moon.  Under the Gregorian Calendar (for years after
 * 1753 - devised by Clavius and Lilius, and introduced by Pope Gregory XIII in
 * October 1582, and into Britain and its then colonies in September 1752) two
 * correction factors are added to make the cycle more accurate.
 *
 * @param year The year as a positive number
 * @param method Allows to calculate easter dates based on the Gregorian calendar
 *               during the years 1582 - 1752 when set to CAL_EASTER_ROMAN. See
 *               the calendar constants for more valid constants.
 * @return The number of days after March 21st that the Easter Sunday is in the
 *         given year.
 */
declare function easter_days(year?: number, method?: number): number;
declare function frenchtojd(month: number, day: number, year: number): number;
declare function gregoriantojd(month: number, day: number, year: number): number;
declare function jddayofweek(julianday: number, mode?: number): any;
declare function jdmonthname(julianday: number, mode: number): string;
declare function jdtofrench(juliandaycount: number): string;

//--------------------------------------------------------------------------------
// classobj
//--------------------------------------------------------------------------------

/*
 * These functions allow you to obtain information about classes and instance
 * objects. You can obtain the name of the class to which an object belongs, as
 * well as its member properties and methods. Using these functions, you can find
 * out not only the class membership of an object, but also its parentage (i.e.
 * what class is the object class extending).
 * 
 * Please see the Objects section of the manual for a detailed explanation of how
 * classes and objects are implemented and used in PHP.
 */

/**
 * Creates an alias for a class
 * 
 * Creates an alias named alias based on the defined class original. The aliased
 * class is exactly the same as the original class.
 *
 * @param original The original class.
 * @param alias The alias name for the class.
 * @param autoload Whether do autoload if the original class is not found.
 */
declare function class_alias(original: string, alias: string, autoload?: bool): bool; //TODO: inform users they have to declare the new one

/**
 * Checks if the class has been defined
 * 
 * This function checks whether or not the given class has been defined.
 *
 * @param class_name The class name. The name is matched in a case-insensitive
 *                   manner.
 * @param autoload Whether or not to call  by default.
 * @return Returns true if class_name is a defined class, false otherwise.
 */
declare function class_exists(class_name: string, autoload?: bool): bool;

/**
 * the "Late Static Binding" class name
 * 
 * Gets the name of the class the static method is called in.
 * @return Returns the class name.  Returns false if called from outside a class.
 */
declare function get_called_class(): string;

/**
 * Returns the name of the class of an object
 * 
 * Gets the name of the class of the given object.
 *
 * @param object The tested object. This parameter may be omitted when inside a
 *               class.
 * @return Returns the name of the class of which object is an instance. Returns
 *         false if object is not an object.
 *         
 *         If object is omitted when inside a class, the name of that class is
 *         returned.
 */
declare function get_class(object?: any): string;

/**
 * Gets the class methods' names
 * 
 * Gets the class methods names.
 *
 * @param class_name The class name or an object instance
 * @return Returns an array of method names defined for the class specified by
 *         class_name. In case of an error, it returns .
 */
declare function get_class_methods(class_name: any): string[];

/**
 * Get the default properties of the class
 * 
 * Get the default properties of the given class.
 *
 * @param class_name The class name
 * @return Returns an associative array of declared properties visible from the
 *         current scope, with their default value. The resulting array elements
 *         are in the form of varname =&gt; value. In case of an error, it returns
 *         false.
 */
declare function get_class_vars(class_name: string): Pct.PhpAssocArray[];

/**
 * Returns an array with the name of the defined classes
 * 
 * Gets the declared classes.
 * @return Returns an array of the names of the declared classes in the current
 *         script.
 *         
 *         Note that depending on what extensions you have compiled or loaded into
 *         PHP, additional classes could be present. This means that you will not
 *         be able to define your own classes using these names. There is a list
 *         of predefined classes in the Predefined Classes section of the
 *         appendices.
 */
declare function get_declared_classes(): string[];

/**
 * Returns an array of all declared interfaces
 * 
 * Gets the declared interfaces.
 * @return Returns an array of the names of the declared interfaces in the current
 *         script.
 */
declare function get_declared_interfaces(): string[];

/**
 * Returns an array of all declared traits
 * @return Returns an array with names of all declared traits in values. Returns 
 *         in case of a failure.
 */
declare function get_declared_traits(): string[];

/**
 * Gets the properties of the given object
 * 
 * Gets the accessible non-static properties of the given object according to
 * scope.
 *
 * @param object An object instance.
 * @return Returns an associative array of defined object accessible non-static
 *         properties for the specified object in scope. If a property has not
 *         been assigned a value, it will be returned with a  value.
 */
declare function get_object_vars(object: any): Pct.PhpAssocArray;

/**
 * Retrieves the parent class name for object or class
 * 
 * Retrieves the parent class name for object or class.
 *
 * @param object The tested object or class name
 * @return Returns the name of the parent class of the class of which object is an
 *         instance or the name.
 *         
 *         If the object does not have a parent or the class given does not exist
 *         false will be returned.
 *         
 *         If called without parameter outside object, this function returns
 *         false.
 */
declare function get_parent_class(object?: any): string;

/**
 * Checks if the interface has been defined
 * 
 * Checks if the given interface has been defined.
 *
 * @param interface_name The interface name
 * @param autoload Whether to call  or not by default.
 * @return Returns true if the interface given by interface_name has been defined,
 *         false otherwise.
 */
declare function interface_exists(interface_name: string, autoload?: bool): bool;

/**
 * Checks if the object is of this class or has this class as one of its parents
 * 
 * Checks if the given object is of this class or has this class as one of its
 * parents.
 *
 * @param object The tested object
 * @param class_name The class name
 * @param allow_string If this parameter set to false, string class name as object
 *                     is not allowed. This also prevents from calling autoloader
 *                     if the class doesn't exist.
 * @return Returns true if the object is of this class or has this class as one of
 *         its parents, false otherwise.
 */
declare function is_a(object: any, class_name: string, allow_string?: bool): bool;

/**
 * Checks if the object has this class as one of its parents
 * 
 * Checks if the given object has the class class_name as one of its parents.
 *
 * @param object A class name or an object instance
 * @param class_name The class name
 * @param allow_string If this parameter set to false, string class name as object
 *                     is not allowed. This also prevents from calling autoloader
 *                     if the class doesn't exist.
 * @return This function returns true if the object object, belongs to a class
 *         which is a subclass of class_name, false otherwise.
 */
declare function is_subclass_of(object: any, class_name: string, allow_string?: bool): bool;

/**
 * Checks if the class method exists
 * 
 * Checks if the class method exists in the given object.
 *
 * @param object An object instance or a class name
 * @param method_name The method name
 * @return Returns true if the method given by method_name has been defined for
 *         the given object, false otherwise.
 */
declare function method_exists(object: any, method_name: string): bool;

/**
 * Checks if the object or class has a property
 * 
 * This function checks if the given property exists in the specified class.
 * 
 * As opposed with isset, property_exists returns true even if the property has the
 * value .
 *
 * @param object
 * @param property The name of the property
 * @return Returns true if the property exists, false if it doesn't exist or in
 *         case of an error.
 */
declare function property_exists(object: any, property: string): bool;

/**
 * Checks if the trait exists
 *
 * @param traitname Name of the trait to check
 * @param autoload Whether to autoload if not already loaded.
 * @return Returns true if trait exists, false if not,  in case of an error.
 */
declare function trait_exists(traitname: string, autoload?: bool): bool;

//--------------------------------------------------------------------------------
// ctype
//--------------------------------------------------------------------------------

/*
 * The functions provided by this extension check whether a character or string
 * falls into a certain character class according to the current locale (see also
 * setlocale).
 * 
 * When called with an integer argument these functions behave exactly like their C
 * counterparts from ctype.h. It means that if you pass an integer smaller than 256
 * it will use the ASCII value of it to see if it fits in the specified range
 * (digits are in 0x30-0x39). If the number is between -128 and -1 inclusive then
 * 256 will be added and the check will be done on that.
 * 
 * When called with a string argument they will check every character in the string
 * and will only return true if every character in the string matches the requested
 * criteria. When called with an empty string the result will always be true in PHP
 * 5.1 and false since 5.1.
 * 
 * Passing anything else but a string or integer will return false immediately.
 * 
 * It should be noted that ctype functions are always preferred over regular
 * expressions, and even to some equivalent "str_*" and "is_*" functions. This is
 * because of the fact that ctype uses a native C library and thus processes
 * significantly faster.
 */

/**
 * Check for alphanumeric character(s)
 * 
 * Checks if all of the characters in the provided string, text, are alphanumeric.
 *
 * @param text The tested string.
 * @return Returns true if every character in text is either a letter or a digit,
 *         false otherwise.
 */
declare function ctype_alnum(text: string): bool;

/**
 * Check for alphabetic character(s)
 * 
 * Checks if all of the characters in the provided string, text, are alphabetic. In
 * the standard C locale letters are just [A-Za-z] and ctype_alpha is equivalent to
 * (ctype_upper($text) || ctype_lower($text)) if $text is just a single character,
 * but other languages have letters that are considered neither upper nor lower
 * case.
 *
 * @param text The tested string.
 * @return Returns true if every character in text is a letter from the current
 *         locale, false otherwise.
 */
declare function ctype_alpha(text: string): bool;

/**
 * Check for control character(s)
 * 
 * Checks if all of the characters in the provided string, text, are control
 * characters. Control characters are e.g. line feed, tab, escape.
 *
 * @param text The tested string.
 * @return Returns true if every character in text is a control character from the
 *         current locale, false otherwise.
 */
declare function ctype_cntrl(text: string): bool;

/**
 * Check for numeric character(s)
 * 
 * Checks if all of the characters in the provided string, text, are numerical.
 *
 * @param text The tested string.
 * @return Returns true if every character in the string text is a decimal digit,
 *         false otherwise.
 */
declare function ctype_digit(text: string): bool;

/**
 * Check for any printable character(s) except space
 * 
 * Checks if all of the characters in the provided string, text, creates visible
 * output.
 *
 * @param text The tested string.
 * @return Returns true if every character in text is printable and actually
 *         creates visible output (no white space), false otherwise.
 */
declare function ctype_graph(text: string): bool;

/**
 * Check for lowercase character(s)
 * 
 * Checks if all of the characters in the provided string, text, are lowercase
 * letters.
 *
 * @param text The tested string.
 * @return Returns true if every character in text is a lowercase letter in the
 *         current locale.
 */
declare function ctype_lower(text: string): bool;

/**
 * Check for printable character(s)
 * 
 * Checks if all of the characters in the provided string, text, are printable.
 *
 * @param text The tested string.
 * @return Returns true if every character in text will actually create output
 *         (including blanks). Returns false if text contains control characters
 *         or characters that do not have any output or control function at all.
 */
declare function ctype_print(text: string): bool;

/**
 * Check for any printable character which is not whitespace or an alphanumeric
 * character
 * 
 * Checks if all of the characters in the provided string, text, are punctuation
 * character.
 *
 * @param text The tested string.
 * @return Returns true if every character in text is printable, but neither
 *         letter, digit or blank, false otherwise.
 */
declare function ctype_punct(text: string): bool;

/**
 * Check for whitespace character(s)
 * 
 * Checks if all of the characters in the provided string, text, creates
 * whitespace.
 *
 * @param text The tested string.
 * @return Returns true if every character in text creates some sort of white
 *         space, false otherwise. Besides the blank character this also includes
 *         tab, vertical tab, line feed, carriage return and form feed characters.
 *         
 */
declare function ctype_space(text: string): bool;

/**
 * Check for uppercase character(s)
 * 
 * Checks if all of the characters in the provided string, text, are uppercase
 * characters.
 *
 * @param text The tested string.
 * @return Returns true if every character in text is an uppercase letter in the
 *         current locale.
 */
declare function ctype_upper(text: string): bool;

/**
 * Check for character(s) representing a hexadecimal digit
 * 
 * Checks if all of the characters in the provided string, text, are hexadecimal
 * 'digits'.
 *
 * @param text The tested string.
 * @return Returns true if every character in text is a hexadecimal 'digit', that
 *         is a decimal digit or a character from [A-Fa-f] , false otherwise.
 */
declare function ctype_xdigit(text: string): bool;

//--------------------------------------------------------------------------------
// datetime
//--------------------------------------------------------------------------------

/*
 * These functions allow you to get the date and time from the server where your
 * PHP scripts are running. You can use these functions to format the date and time
 * in many different ways.
 * 
 * The date and time information is internally stored as a 64-bit number so all
 * conceivably useful dates (including negative years) are supported. The range is
 * from about 292 billion years in the past to the same in the future.
 */

/**
 * Timestamp
 */
declare var SUNFUNCS_RET_TIMESTAMP: number;

/**
 * Hours:minutes (example: 08:02)
 */
declare var SUNFUNCS_RET_STRING: number;

/**
 * Hours as floating point number (example 8.75)
 */
declare var SUNFUNCS_RET_DOUBLE: number;


/**
 * Representation of date and time.
 */
declare class DateTime {
    
    /**
     * Atom (example: 2005-08-15T15:52:01+00:00)
     */
    static ATOM: string;
    
    /**
     * HTTP Cookies (example: Monday, 15-Aug-05 15:52:01 UTC)
     */
    static COOKIE: string;
    
    /**
     * ISO-8601 (example: 2005-08-15T15:52:01+0000)
     */
    static ISO8601: string;
    
    /**
     * RFC 822 (example: Mon, 15 Aug 05 15:52:01 +0000)
     */
    static RFC822: string;
    
    /**
     * RFC 850 (example: Monday, 15-Aug-05 15:52:01 UTC)
     */
    static RFC850: string;
    
    /**
     * RFC 1036 (example: Mon, 15 Aug 05 15:52:01 +0000)
     */
    static RFC1036: string;
    
    /**
     * RFC 1123 (example: Mon, 15 Aug 2005 15:52:01 +0000)
     */
    static RFC1123: string;
    
    /**
     * RFC 2822 (Mon, 15 Aug 2005 15:52:01 +0000)
     */
    static RFC2822: string;
    
    /**
     * Same as DATE_ATOM (since PHP 5.1.3)
     */
    static RFC3339: string;
    
    /**
     * RSS (Mon, 15 Aug 2005 15:52:01 +0000)
     */
    static RSS: string;
    
    /**
     * World Wide Web Consortium (example: 2005-08-15T15:52:01+00:00)
     */
    static W3C: string;

    
    /**
     * Returns new DateTime object
     * 
     * Returns new DateTime object.
     *
     * @param time Enter  here to obtain the current time when using the $timezone
     *             parameter.
     * @param timezone A DateTimeZone object representing the timezone of $time.
     *                 
     *                 If $timezone is omitted, the current timezone will be used.
     *                 
     *                 The $timezone parameter and the current timezone are ignored
     *                 when the $time parameter either is a UNIX timestamp (e.g.
     *                 @946684800) or specifies a timezone (e.g.
     *                 2010-01-28T15:00:00+02:00).
     * @return Returns a new DateTime instance.
     */
    constructor(time?: string, timezone?: DateTimeZone);
    
    /**
     * Adds an amount of days, months, years, hours, minutes and seconds to a DateTime
     * object
     * 
     * Adds the specified DateInterval object to the specified DateTime object.
     *
     * @param interval A DateInterval object
     */
    add(interval: DateInterval): DateTime;
    
    /**
     * Returns new DateTime object formatted according to the specified format
     * 
     * Returns new DateTime object formatted according to the specified format.
     *
     * @param format The format that the passed in string should be in. See the
     *               formatting options below. In most cases, the same letters as for
     *               the date can be used.
     *               
     *               The following characters are recognized in the format parameter
     *               string    format character Description Example parsable values   
     *               Day --- ---   d and j Day of the month, 2 digits with or without
     *               leading zeros  01 to 31 or 1 to 31    D and l A textual
     *               representation of a day  Mon through Sun or Sunday through
     *               Saturday    S English ordinal suffix for the day of the month, 2
     *               characters. It's ignored while processing.  st, nd, rd or th.   
     *               z The day of the year (starting from 0) 0 through 365   Month ---
     *               ---   F and M A textual representation of a month, such as
     *               January or Sept  January through December or Jan through Dec    m
     *               and n Numeric representation of a month, with or without leading
     *               zeros  01 through 12 or 1 through 12    Year --- ---   Y A full
     *               numeric representation of a year, 4 digits Examples: 1999 or 2003
     *               y A two digit representation of a year Examples: 99 or 03   Time
     *               --- ---   a and A Ante meridiem and Post meridiem am or pm   g
     *               and h 12-hour format of an hour with or without leading zero  1
     *               through 12 or 01 through 12    G and H 24-hour format of an hour
     *               with or without leading zeros  0 through 23 or 00 through 23    i
     *               Minutes with leading zeros 00 to 59   s Seconds, with leading
     *               zeros 00 through 59   u Microseconds (up to six digits) Example:
     *               45, 654321   Timezone --- ---    e, O, P and T  Timezone
     *               identifier, or difference to UTC in hours, or difference to UTC
     *               with colon between hours and minutes, or timezone abbreviation
     *               Examples: UTC, GMT, Atlantic/Azores or +0200 or +02:00 or EST,
     *               MDT    Full Date/Time --- ---   U Seconds since the Unix Epoch
     *               (January 1 1970 00:00:00 GMT) Example: 1292177455   Whitespace
     *               and Separators --- ---     (space) One space or one tab Example: 
     *               #  One of the following separation symbol: ;, :, /, ., ,, -, ( or
     *               )  Example: /    ;, :, /, ., ,, -, ( or )  The specified
     *               character. Example: -   ? A random byte Example: ^ (Be aware that
     *               for UTF-8 characracters you might need more than one ?. In this
     *               case, using * is probably what you want instead)   * Random bytes
     *               until the next separator or digit Example: * in Y-*-d with the
     *               string 2009-aWord-08 will match aWord   ! Resets all fields
     *               (year, month, day, hour, minute, second, fraction and timzone
     *               information) to the Unix Epoch Without !, all fields will be set
     *               to the current date and time.   | Resets all fields (year, month,
     *               day, hour, minute, second, fraction and timzone information) to
     *               the Unix Epoch if they have not been parsed yet Y-m-d| will set
     *               the year, month and day to the information found in the string to
     *               parse, and sets the hour, minute and second to 0.   + If this
     *               format specifier is present, trailing data in the string will not
     *               cause an error, but a warning instead Use DateTime::getLastErrors
     *               to find out whether trailing data was present.
     *               
     *               Unrecognized characters in the format string will cause the
     *               parsing to fail and an error message is appended to the returned
     *               structure. You can query error messages with
     *               DateTime::getLastErrors.
     *               
     *               If format does not contain the character ! then portions of the
     *               generated time which are not specified in format will be set to
     *               the current system time.
     *               
     *               If format contains the character !, then portions of the
     *               generated time not provided in format, as well as values to the
     *               left-hand side of the !, will be set to corresponding values from
     *               the Unix epoch.
     *               
     *               The Unix epoch is 1970-01-01 00:00:00 UTC.
     * @param time String representing the time.
     * @param timezone A DateTimeZone object representing the desired time zone.
     *                 
     *                 If timezone is omitted and time contains no timezone, the
     *                 current timezone will be used.
     *                 
     *                 The timezone parameter and the current timezone are ignored
     *                 when the time parameter either contains a UNIX timestamp (e.g.
     *                 946684800) or specifies a timezone (e.g.
     *                 2010-01-28T15:00:00+02:00).
     * @return Returns a new DateTime instance.
     */
    static createFromFormat(format: string, time: string, timezone?: DateTimeZone): DateTime;
    
    /**
     * Returns the difference between two DateTime objects
     * 
     * Returns the difference between two DateTime objects.
     *
     * @param datetime2 
     * @param absolute Should the interval be forced to be positive?
     * @return The DateInterval object representing the difference between the two
     *         dates.
     */
    diff(datetime2: DateTime, absolute?: bool): DateInterval;
    
    /**
     * Returns date formatted according to given format
     * 
     * Returns date formatted according to given format.
     *
     * @param format Format accepted by date.
     * @return Returns the formatted date string on success.
     */
    format(format: string): string;
    
    /**
     * Returns the warnings and errors
     * 
     * Returns an array of warnings and errors found while parsing a date/time string.
     * @return Returns array containing info about warnings and errors.
     */
    static getLastErrors(): Pct.PhpAssocArray;
    
    /**
     * Returns the timezone offset
     * 
     * Returns the timezone offset.
     * @return Returns the timezone offset in seconds from UTC on success .
     */
    getOffset(): number;
    
    /**
     * Gets the Unix timestamp
     * 
     * Gets the Unix timestamp.
     * @return Returns the Unix timestamp representing the date.
     */
    getTimestamp(): number;
    
    /**
     * Return time zone relative to given DateTime
     * 
     * Return time zone relative to given DateTime.
     * @return Returns a DateTimeZone object on success .
     */
    getTimezone(): DateTimeZone;
    
    /**
     * Alters the timestamp
     * 
     * Alter the timestamp of a DateTime object by incrementing or decrementing in a
     * format accepted by strtotime.
     *
     * @param modify 
     */
    modify(modify: string): DateTime;
    
    /**
     * Sets the date
     * 
     * Resets the current date of the DateTime object to a different date.
     *
     * @param year Year of the date.
     * @param month Month of the date.
     * @param day Day of the date.
     */
    setDate(year: number, month: number, day: number): DateTime;
    
    /**
     * Sets the ISO date
     * 
     * Set a date according to the ISO 8601 standard - using weeks and day offsets
     * rather than specific dates.
     *
     * @param year Year of the date.
     * @param week Week of the date.
     * @param day Offset from the first day of the week.
     */
    setISODate(year: number, week: number, day?: number): DateTime;
    
    /**
     * Sets the time
     * 
     * Resets the current time of the DateTime object to a different time.
     *
     * @param hour Hour of the time.
     * @param minute Minute of the time.
     * @param second Second of the time.
     */
    setTime(hour: number, minute: number, second?: number): DateTime;
    
    /**
     * Sets the date and time based on an Unix timestamp
     * 
     * Sets the date and time based on an Unix timestamp.
     *
     * @param unixtimestamp Unix timestamp representing the date.
     */
    setTimestamp(unixtimestamp: number): DateTime;
    
    /**
     * Sets the time zone for the DateTime object
     *
     * @param timezone A DateTimeZone object representing the desired time zone.
     */
    setTimezone(timezone: DateTimeZone): DateTime;
    
    /**
     * Subtracts an amount of days, months, years, hours, minutes and seconds from a
     * DateTime object
     * 
     * Subtracts the specified DateInterval object from the specified DateTime object.
     *
     * @param interval A DateInterval object
     */
    sub(interval: DateInterval): DateTime;
}


/**
 * Representation of time zone.
 */
declare class DateTimeZone {
    
    /**
     * Africa time zones.
     */
    static AFRICA: number;
    
    /**
     * America time zones.
     */
    static AMERICA: number;
    static ANTARTICA: number;
    
    /**
     * Arctic time zones.
     */
    static ARCTIC: number;
    
    /**
     * Asia time zones.
     */
    static ASIA: number;
    
    /**
     * Atlantic time zones.
     */
    static ATLANTIC: number;
    
    /**
     * Australia time zones.
     */
    static AUSTRALIA: number;
    
    /**
     * Europe time zones.
     */
    static EUROPE: number;
    
    /**
     * Indian time zones.
     */
    static INDIAN: number;
    
    /**
     * Pacific time zones.
     */
    static PACIFIC: number;
    
    /**
     * UTC time zones.
     */
    static UTC: number;
    
    /**
     * All time zones.
     */
    static ALL: number;
    
    /**
     * All time zones including backwards compatible.
     */
    static ALL_WITH_BC: number;
    
    /**
     * Time zones per country.
     */
    static PER_COUNTRY: number;

    
    /**
     * Creates new DateTimeZone object
     * 
     * Creates new DateTimeZone object.
     *
     * @param timezone One of timezones.
     * @return Returns DateTimeZone on success.
     */
    constructor(timezone: string);
    
    /**
     * Returns location information for a timezone
     * 
     * Returns location information for a timezone, including country code,
     * latitude/longitude and comments.
     * @return Array containing location information about timezone.
     */
    getLocation(): Pct.PhpAssocArray;
    
    /**
     * Returns the name of the timezone
     * 
     * Returns the name of the timezone.
     * @return One of the timezone names in the list of timezones.
     */
    getName(): string;
    
    /**
     * Returns the timezone offset from GMT
     * 
     * This function returns the offset to GMT for the date/time specified in the
     * datetime parameter. The GMT offset is calculated with the timezone information
     * contained in the DateTimeZone object being used.
     *
     * @param datetime DateTime that contains the date/time to compute the offset
     *                 from.
     * @return Returns time zone offset in seconds on success.
     */
    getOffset(datetime: DateTime): number;
    
    /**
     * Returns all transitions for the timezone
     *
     * @param timestamp_begin Begin timestamp.
     * @param timestamp_end End timestamp.
     * @return Returns numerically indexed array containing associative array with all
     *         transitions on success.
     */
    getTransitions(timestamp_begin?: number, timestamp_end?: number): Pct.PhpAssocArray[];
    
    /**
     * Returns associative array containing dst, offset and the timezone name
     * @return Returns array on success.
     */
    static listAbbreviations(): Pct.PhpAssocArray[];
    
    /**
     * Returns numerically index array with all timezone identifiers
     *
     * @param what One of DateTimeZone class constants.
     * @param country A two-letter ISO 3166-1 compatible country code.
     * @return Returns array on success.
     */
    static listIdentifiers(what?: number, country?: string): string[];
}


/**
 * Represents a date interval.
 * 
 * A date interval stores either a fixed amount of time (in years, months, days,
 * hours etc) or a relative time string in the format that DateTime's constructor
 * supports.
 */
declare class DateInterval {
    
    /**
     * Number of years.
     */
    y: number;
    
    /**
     * Number of months.
     */
    m: number;
    
    /**
     * Number of days.
     */
    d: number;
    
    /**
     * Number of hours.
     */
    h: number;
    
    /**
     * Number of minutes.
     */
    i: number;
    
    /**
     * Number of seconds.
     */
    s: number;
    
    /**
     * Is 1 if the interval represents a negative time period and 0 otherwise. See
     * DateInterval::format.
     */
    invert: number;
    
    /**
     * If the DateInterval object was created by DateTime::diff, then this is the total
     * number of days between the start and end dates. Otherwise, days will be false.
     */
    days: number;

    
    /**
     * Creates a new DateInterval object
     * 
     * Creates a new DateInterval object.
     *
     * @param interval_spec
     */
    constructor(interval_spec: string);
    
    /**
     * Sets up a DateInterval from the relative parts of the string
     * 
     * Uses the normal date parsers and sets up a DateInterval from the relative parts
     * of the parsed string.
     *
     * @param time A date with relative parts. Specifically, the relative formats
     *             supported by the parser used for strtotime and DateTime will be
     *             used to construct the DateInterval.
     * @return Returns a new DateInterval instance.
     */
    static createFromDateString(time: string): DateInterval;
    
    /**
     * Formats the interval
     * 
     * Formats the interval.
     *
     * @param format The following characters are recognized in the format parameter
     *               string. Each format character must be prefixed by a percent sign
     *               (%).     format character Description Example values     %
     *               Literal % %   Y Years, numeric, at least 2 digits with leading 0
     *               01, 03   y Years, numeric 1, 3   M Months, numeric, at least 2
     *               digits with leading 0 01, 03, 12   m Months, numeric 1, 3, 12   D
     *               Days, numeric, at least 2 digits with leading 0 01, 03, 31   d
     *               Days, numeric 1, 3, 31   a Total number of days as a result of a
     *               DateTime::diff or (unknown) otherwise 4, 18, 8123   H Hours,
     *               numeric, at least 2 digits with leading 0 01, 03, 23   h Hours,
     *               numeric 1, 3, 23   I Minutes, numeric, at least 2 digits with
     *               leading 0 01, 03, 59   i Minutes, numeric 1, 3, 59   S Seconds,
     *               numeric, at least 2 digits with leading 0 01, 03, 57   s Seconds,
     *               numeric 1, 3, 57   R Sign "-" when negative, "+" when positive -,
     *               +   r Sign "-" when negative, empty when positive -,
     * @return Returns the formatted interval.
     */
    format(format: string): string;
}


/**
 * Represents a date period.
 * 
 * A date period allows iteration over a set of dates and times, recurring at
 * regular intervals, over a given period.
 */
declare class DatePeriod implements Traversable {
    
    /**
     * Exclude start date, used in DatePeriod::__construct.
     */
    static EXCLUDE_START_DATE: number;

    
    /**
     * Creates a new DatePeriod object
     * 
     * Creates a new DatePeriod object.
     *
     * @param start
     * @param interval
     * @param recurrences
     * @param options
     */
    constructor(start: DateTime, interval: DateInterval, recurrences: number, options?: number);
    
    /**
     * Creates a new DatePeriod object
     * 
     * Creates a new DatePeriod object.
     *
     * @param start
     * @param interval
     * @param end
     * @param options
     */
    constructor(start: DateTime, interval: DateInterval, end: DateTime, options?: number);
    
    /**
     * Creates a new DatePeriod object
     * 
     * Creates a new DatePeriod object.
     *
     * @param isostr
     * @param options
     */
    constructor(isostr: string, options?: number);
}


/**
 * Validate a Gregorian date
 * 
 * Checks the validity of the date formed by the arguments. A date is considered
 * valid if each parameter is properly defined.
 *
 * @param month The month is between 1 and 12 inclusive.
 * @param day The day is within the allowed number of days for the given month. 
 *            Leap years are taken into consideration.
 * @param year The year is between 1 and 32767 inclusive.
 * @return Returns true if the date given is valid; otherwise returns false.
 */
declare function checkdate(month: number, day: number, year: number): bool;

/**
 * Gets the default timezone used by all date/time functions in a script
 * 
 * In order of preference, this function returns the default timezone by:   
 * Reading the timezone set using the date_default_timezone_set function (if any)  
 * Prior to PHP 5.4.0 only: Reading the TZ environment variable (if non empty)    
 * Reading the value of the date.timezone ini option (if set)     Prior to PHP
 * 5.4.0 only: Querying the host operating system (if supported and allowed by the
 * OS). This uses an algorithm that has to guess the timezone. This is by no means
 * going to work correctly for every situation. A warning is shown when this stage
 * is reached. Do not rely on it to be guessed correctly, and set date.timezone to
 * the correct timezone instead.
 * 
 * Reading the timezone set using the date_default_timezone_set function (if any)
 * 
 * Prior to PHP 5.4.0 only: Reading the TZ environment variable (if non empty)
 * 
 * Reading the value of the date.timezone ini option (if set)
 * 
 * Prior to PHP 5.4.0 only: Querying the host operating system (if supported and
 * allowed by the OS). This uses an algorithm that has to guess the timezone. This
 * is by no means going to work correctly for every situation. A warning is shown
 * when this stage is reached. Do not rely on it to be guessed correctly, and set
 * date.timezone to the correct timezone instead.
 * 
 * If none of the above succeed, date_default_timezone_get will return a default
 * timezone of UTC.
 * @return Returns a string.
 */
declare function date_default_timezone_get(): string;

/**
 * Sets the default timezone used by all date/time functions in a script
 * 
 * date_default_timezone_set sets the default timezone used by all date/time
 * functions.
 * 
 * Since PHP 5.1.0 (when the date/time functions were rewritten), every call to a
 * date/time function will generate a E_NOTICE if the timezone isn't valid, and/or
 * a E_WARNING message if using the system settings or the TZ environment variable.
 * 
 * 
 * Instead of using this function to set the default timezone in your script, you
 * can also use the INI setting date.timezone to set the default timezone.
 *
 * @param timezone_identifier The timezone identifier, like UTC or Europe/Lisbon.
 *                            The list of valid identifiers is available in the .
 * @return This function returns false if the timezone_identifier isn't valid, or
 *         true otherwise.
 */
declare function date_default_timezone_set(timezone_identifier: string): bool;

/**
 * Format a local time/date
 * 
 * Returns a string formatted according to the given format string using the given
 * integer timestamp or the current time if no timestamp is given.  In other words,
 * timestamp is optional and defaults to the value of time.
 *
 * @param format The format of the outputted date string. See the formatting
 *               options below. There are also several predefined date constants
 *               that may be used instead, so for example DATE_RSS contains the
 *               format string 'D, d M Y H:i:s'.
 *               
 *               The following characters are recognized in the format parameter
 *               string    format character Description Example returned values   
 *               Day --- ---   d Day of the month, 2 digits with leading zeros 01
 *               to 31   D A textual representation of a day, three letters Mon
 *               through Sun   j Day of the month without leading zeros 1 to 31  
 *               l (lowercase 'L') A full textual representation of the day of the
 *               week Sunday through Saturday   N ISO-8601 numeric representation
 *               of the day of the week (added in PHP 5.1.0) 1 (for Monday)
 *               through 7 (for Sunday)   S English ordinal suffix for the day of
 *               the month, 2 characters  st, nd, rd or th.  Works well with j   
 *               w Numeric representation of the day of the week 0 (for Sunday)
 *               through 6 (for Saturday)   z The day of the year (starting from
 *               0) 0 through 365   Week --- ---   W ISO-8601 week number of year,
 *               weeks starting on Monday (added in PHP 4.1.0) Example: 42 (the
 *               42nd week in the year)   Month --- ---   F A full textual
 *               representation of a month, such as January or March January
 *               through December   m Numeric representation of a month, with
 *               leading zeros 01 through 12   M A short textual representation of
 *               a month, three letters Jan through Dec   n Numeric representation
 *               of a month, without leading zeros 1 through 12   t Number of days
 *               in the given month 28 through 31   Year --- ---   L Whether it's
 *               a leap year 1 if it is a leap year, 0 otherwise.   o ISO-8601
 *               year number. This has the same value as Y, except that if the ISO
 *               week number (W) belongs to the previous or next year, that year
 *               is used instead. (added in PHP 5.1.0) Examples: 1999 or 2003   Y
 *               A full numeric representation of a year, 4 digits Examples: 1999
 *               or 2003   y A two digit representation of a year Examples: 99 or
 *               03   Time --- ---   a Lowercase Ante meridiem and Post meridiem
 *               am or pm   A Uppercase Ante meridiem and Post meridiem AM or PM  
 *               B Swatch Internet time 000 through 999   g 12-hour format of an
 *               hour without leading zeros 1 through 12   G 24-hour format of an
 *               hour without leading zeros 0 through 23   h 12-hour format of an
 *               hour with leading zeros 01 through 12   H 24-hour format of an
 *               hour with leading zeros 00 through 23   i Minutes with leading
 *               zeros 00 to 59   s Seconds, with leading zeros 00 through 59   u 
 *               Microseconds (added in PHP 5.2.2). Note that date will always
 *               generate 000000 since it takes an integer parameter, whereas
 *               DateTime::format does support microseconds.  Example: 654321  
 *               Timezone --- ---   e Timezone identifier (added in PHP 5.1.0)
 *               Examples: UTC, GMT, Atlantic/Azores   I (capital i) Whether or
 *               not the date is in daylight saving time 1 if Daylight Saving
 *               Time, 0 otherwise.   O Difference to Greenwich time (GMT) in
 *               hours Example: +0200   P Difference to Greenwich time (GMT) with
 *               colon between hours and minutes (added in PHP 5.1.3) Example:
 *               +02:00   T Timezone abbreviation Examples: EST, MDT ...   Z
 *               Timezone offset in seconds. The offset for timezones west of UTC
 *               is always negative, and for those east of UTC is always positive.
 *               -43200 through 50400   Full Date/Time --- ---   c ISO 8601 date
 *               (added in PHP 5) 2004-02-12T15:19:21+00:00   r RFC 2822 formatted
 *               date Example: Thu, 21 Dec 2000 16:01:07 +0200   U Seconds since
 *               the Unix Epoch (January 1 1970 00:00:00 GMT) See also time
 *               
 *               Unrecognized characters in the format string will be printed
 *               as-is.  The Z format will always return 0 when using gmdate.
 *               
 *               Since this function only accepts integer timestamps the u format
 *               character is only useful when using the date_format function with
 *               user based timestamps created with date_create.
 * @param timestamp 
 * @return Returns a formatted date string. If a non-numeric value is used for
 *         timestamp, false is returned and an E_WARNING level error is emitted.
 */
declare function date(format: string, timestamp?: number): string;

/**
 * Get info about given date formatted according to the specified format
 * 
 * Returns associative array with detailed info about given date.
 *
 * @param format Format accepted by DateTime::createFromFormat.
 * @param date String representing the date.
 * @return Returns associative array with detailed info about given date.
 */
declare function date_parse_from_format(format: string, date: string): Pct.PhpAssocArray;

/**
 * Returns associative array with detailed info about given date
 *
 * @param date Date in format accepted by strtotime.
 * @return Returns array with information about the parsed date on success.
 */
declare function date_parse(date: string): Pct.PhpAssocArray;

/**
 * Returns an array with information about sunset/sunrise and twilight begin/end
 *
 * @param time Timestamp.
 * @param latitude Latitude in degrees.
 * @param longitude Longitude in degrees.
 * @return Returns array on success.
 */
declare function date_sun_info(time: number, latitude: number, longitude: number): Pct.PhpAssocArray;

/**
 * Returns time of sunrise for a given day and location
 * 
 * date_sunrise returns the sunrise time for a given day (specified as a timestamp)
 * and location.
 *
 * @param timestamp The timestamp of the day from which the sunrise time is taken.
 * @param format format constants    constant description example    
 *               SUNFUNCS_RET_STRING returns the result as string 16:46  
 *               SUNFUNCS_RET_DOUBLE returns the result as float 16.78243132  
 *               SUNFUNCS_RET_TIMESTAMP returns the result as integer (timestamp)
 *               1095034606
 * @param latitude Defaults to North, pass in a negative value for South. See
 *                 also: date.default_latitude
 * @param longitude Defaults to East, pass in a negative value for West. See also:
 *                  date.default_longitude
 * @param zenith Default: date.sunrise_zenith
 * @param gmt_offset 
 * @return Returns the sunrise time in a specified format on success.
 */
declare function date_sunrise(timestamp: number, format?: number, latitude?: number, longitude?: number, zenith?: number, gmt_offset?: number): any;

/**
 * Returns time of sunset for a given day and location
 * 
 * date_sunset returns the sunset time for a given day (specified as a timestamp)
 * and location.
 *
 * @param timestamp The timestamp of the day from which the sunset time is taken.
 * @param format format constants    constant description example    
 *               SUNFUNCS_RET_STRING returns the result as string 16:46  
 *               SUNFUNCS_RET_DOUBLE returns the result as float 16.78243132  
 *               SUNFUNCS_RET_TIMESTAMP returns the result as integer (timestamp)
 *               1095034606
 * @param latitude Defaults to North, pass in a negative value for South. See
 *                 also: date.default_latitude
 * @param longitude Defaults to East, pass in a negative value for West. See also:
 *                  date.default_longitude
 * @param zenith Default: date.sunset_zenith
 * @param gmt_offset 
 * @return Returns the sunset time in a specified format on success.
 */
declare function date_sunset(timestamp: number, format?: number, latitude?: number, longitude?: number, zenith?: number, gmt_offset?: number): any;

/**
 * Get date/time information
 * 
 * Returns an associative array containing the date information of the timestamp,
 * or the current local time if no timestamp is given.
 *
 * @param timestamp 
 * @return Returns an associative array of information related to the timestamp.
 *         Elements from the returned associative array are as follows:
 *         
 *         Key elements of the returned associative array    Key Description
 *         Example returned values     "seconds" Numeric representation of seconds
 *         0 to 59   "minutes" Numeric representation of minutes 0 to 59   "hours"
 *         Numeric representation of hours 0 to 23   "mday" Numeric representation
 *         of the day of the month 1 to 31   "wday" Numeric representation of the
 *         day of the week 0 (for Sunday) through 6 (for Saturday)   "mon" Numeric
 *         representation of a month 1 through 12   "year" A full numeric
 *         representation of a year, 4 digits Examples: 1999 or 2003   "yday"
 *         Numeric representation of the day of the year 0 through 365   "weekday"
 *         A full textual representation of the day of the week Sunday through
 *         Saturday   "month" A full textual representation of a month, such as
 *         January or March January through December   0  Seconds since the Unix
 *         Epoch, similar to the values returned by time and used by date.  
 *         System Dependent, typically -2147483648 through 2147483647.
 */
declare function getdate(timestamp?: number): Pct.PhpAssocArray;

/**
 * Get current time
 * 
 * This is an interface to gettimeofday(2). It returns an associative array
 * containing the data returned from the system call.
 * @return By default an array is returned. If return_float is set, then a float
 *         is returned.
 *         
 *         Array keys:    "sec" - seconds since the Unix Epoch     "usec" -
 *         microseconds     "minuteswest" - minutes west of Greenwich    
 *         "dsttime" - type of dst correction
 */
declare function gettimeofday(): Pct.PhpAssocArray;

/**
 * Get current time
 * 
 * This is an interface to gettimeofday(2). It returns an associative array
 * containing the data returned from the system call.
 *
 * @param return_float When set to true, a float instead of an array is returned.
 * @return By default an array is returned. If return_float is set, then a float
 *         is returned.
 *         
 *         Array keys:    "sec" - seconds since the Unix Epoch     "usec" -
 *         microseconds     "minuteswest" - minutes west of Greenwich    
 *         "dsttime" - type of dst correction
 */
declare function gettimeofday(return_float?: bool): any;

/**
 * Format a GMT/UTC date/time
 * 
 * Identical to the date function except that the time returned is Greenwich Mean
 * Time (GMT).
 *
 * @param format The format of the outputted date string. See the formatting
 *               options for the date function.
 * @param timestamp 
 * @return Returns a formatted date string. If a non-numeric value is used for
 *         timestamp, false is returned and an E_WARNING level error is emitted.
 */
declare function gmdate(format: string, timestamp?: number): string;

/**
 * Get Unix timestamp for a GMT date
 * 
 * Identical to mktime except the passed parameters represents a GMT date. gmmktime
 * internally uses mktime so only times valid in derived local time can be used.
 * 
 * Like mktime, arguments may be left out in order from right to left, with any
 * omitted arguments being set to the current corresponding GMT value.
 *
 * @param hour The number of the hour relative to the start of the day determined
 *             by month, day and year. Negative values reference the hour before
 *             midnight of the day in question. Values greater than 23 reference
 *             the appropriate hour in the following day(s).
 * @param minute The number of the minute relative to the start of the hour.
 *               Negative values reference the minute in the previous hour. Values
 *               greater than 59 reference the appropriate minute in the following
 *               hour(s).
 * @param second The number of seconds relative to the start of the minute.
 *               Negative values reference the second in the previous minute.
 *               Values greater than 59 reference the appropriate second in the
 *               following minute(s).
 * @param month The number of the month relative to the end of the previous year.
 *              Values 1 to 12 reference the normal calendar months of the year in
 *              question. Values less than 1 (including negative values) reference
 *              the months in the previous year in reverse order, so 0 is
 *              December, -1 is November, etc. Values greater than 12 reference
 *              the appropriate month in the following year(s).
 * @param day The number of the day relative to the end of the previous month.
 *            Values 1 to 28, 29, 30 or 31 (depending upon the month) reference
 *            the normal days in the relevant month. Values less than 1 (including
 *            negative values) reference the days in the previous month, so 0 is
 *            the last day of the previous month, -1 is the day before that, etc.
 *            Values greater than the number of days in the relevant month
 *            reference the appropriate day in the following month(s).
 * @param year The year
 * @param is_dst Parameters always represent a GMT date so is_dst doesn't
 *               influence the result.
 * @return Returns a integer Unix timestamp.
 */
declare function gmmktime(hour?: number, minute?: number, second?: number, month?: number, day?: number, year?: number, is_dst?: number): number;

/**
 * Format a GMT/UTC time/date according to locale settings
 * 
 * Behaves the same as strftime except that the time returned is Greenwich Mean
 * Time (GMT). For example, when run in Eastern Standard Time (GMT -0500), the
 * first line below prints "Dec 31 1998 20:00:00", while the second prints "Jan 01
 * 1999 01:00:00".
 *
 * @param format See description in strftime.
 * @param timestamp 
 * @return Returns a string formatted according to the given format string using
 *         the given timestamp or the current local time if no timestamp is given.
 *         Month and weekday names and other language dependent strings respect
 *         the current locale set with setlocale.
 */
declare function gmstrftime(format: string, timestamp?: number): string;

/**
 * Format a local time/date as integer
 * 
 * Returns a number formatted according to the given format string using the given
 * integer timestamp or the current local time if no timestamp is given. In other
 * words, timestamp is optional and defaults to the value of time.
 * 
 * Unlike the function date, idate accepts just one char in the format parameter.
 *
 * @param format The following characters are recognized in the format parameter
 *               string    format character Description     B Swatch Beat/Internet
 *               Time   d Day of the month   h Hour (12 hour format)   H Hour (24
 *               hour format)   i Minutes   I (uppercase i) returns 1 if DST is
 *               activated, 0 otherwise   L (uppercase l) returns 1 for leap year,
 *               0 otherwise   m Month number   s Seconds   t Days in current
 *               month   U Seconds since the Unix Epoch - January 1 1970 00:00:00
 *               UTC - this is the same as time   w Day of the week (0 on Sunday) 
 *               W ISO-8601 week number of year, weeks starting on Monday   y Year
 *               (1 or 2 digits - check note below)   Y Year (4 digits)   z Day of
 *               the year   Z Timezone offset in seconds
 * @param timestamp 
 * @return Returns an integer.
 *         
 *         As idate always returns an integer and as they can't start with a "0",
 *         idate may return fewer digits than you would expect. See the example
 *         below.
 */
declare function idate(format: string, timestamp?: number): number;

/**
 * Get the local time
 * 
 * The localtime function returns an array identical to that of the structure
 * returned by the C function call.
 *
 * @param timestamp 
 */
declare function localtime(timestamp?: number): number[];

/**
 * Get the local time
 * 
 * The localtime function returns an array identical to that of the structure
 * returned by the C function call.
 *
 * @param timestamp 
 * @param is_associative If set to false or not supplied then the array is
 *                       returned as a regular, numerically indexed array.  If the
 *                       argument is set to true then localtime returns an
 *                       associative array containing all the different elements
 *                       of the structure returned by the C function call to
 *                       localtime.  The names of the different keys of the
 *                       associative array are as follows:
 *                       
 *                       "tm_sec" - seconds, 0 to 59     "tm_min" - minutes, 0 to
 *                       59     "tm_hour" - hours, 0 to 23     "tm_mday" - day of
 *                       the month, 1 to 31     "tm_mon" - month of the year, 0
 *                       (Jan) to 11 (Dec)     "tm_year" - years since 1900    
 *                       "tm_wday" - day of the week, 0 (Sun) to 6 (Sat)    
 *                       "tm_yday" - day of the year, 0 to 365     "tm_isdst" - is
 *                       daylight savings time in effect?   Positive if yes, 0 if
 *                       not, negative if unknown.
 */
declare function localtime(timestamp?: number, is_associative?: bool): Array;

/**
 * Return current Unix timestamp with microseconds
 * 
 * microtime returns the current Unix timestamp with microseconds. This function is
 * only available on operating systems that support the gettimeofday() system call.
 * 
 * @return By default, microtime returns a string in the form "msec sec", where
 *         sec is the current time measured in the number of seconds since the
 *         Unix epoch (0:00:00 January 1, 1970 GMT), and msec is the number of
 *         microseconds that have elapsed since sec expressed in seconds.
 *         
 *         If get_as_float is set to true, then microtime returns a float, which
 *         represents the current time in seconds since the Unix epoch accurate to
 *         the nearest microsecond.
 */
declare function microtime(): string;

/**
 * Return current Unix timestamp with microseconds
 * 
 * microtime returns the current Unix timestamp with microseconds. This function is
 * only available on operating systems that support the gettimeofday() system call.
 * 
 *
 * @param get_as_float If used and set to true, microtime will return a float
 *                     instead of a string, as described in the return values
 *                     section below.
 * @return By default, microtime returns a string in the form "msec sec", where
 *         sec is the current time measured in the number of seconds since the
 *         Unix epoch (0:00:00 January 1, 1970 GMT), and msec is the number of
 *         microseconds that have elapsed since sec expressed in seconds.
 *         
 *         If get_as_float is set to true, then microtime returns a float, which
 *         represents the current time in seconds since the Unix epoch accurate to
 *         the nearest microsecond.
 */
declare function microtime(get_as_float: bool): any;

/**
 * Get Unix timestamp for a date
 * 
 * Returns the Unix timestamp corresponding to the arguments given. This timestamp
 * is a long integer containing the number of seconds between the Unix Epoch
 * (January 1 1970 00:00:00 GMT) and the time specified.
 * 
 * Arguments may be left out in order from right to left; any arguments thus
 * omitted will be set to the current value according to the local date and time.
 *
 * @param hour The number of the hour relative to the start of the day determined
 *             by month, day and year. Negative values reference the hour before
 *             midnight of the day in question. Values greater than 23 reference
 *             the appropriate hour in the following day(s).
 * @param minute The number of the minute relative to the start of the hour.
 *               Negative values reference the minute in the previous hour. Values
 *               greater than 59 reference the appropriate minute in the following
 *               hour(s).
 * @param second The number of seconds relative to the start of the minute.
 *               Negative values reference the second in the previous minute.
 *               Values greater than 59 reference the appropriate second in the
 *               following minute(s).
 * @param month The number of the month relative to the end of the previous year.
 *              Values 1 to 12 reference the normal calendar months of the year in
 *              question. Values less than 1 (including negative values) reference
 *              the months in the previous year in reverse order, so 0 is
 *              December, -1 is November, etc. Values greater than 12 reference
 *              the appropriate month in the following year(s).
 * @param day The number of the day relative to the end of the previous month.
 *            Values 1 to 28, 29, 30 or 31 (depending upon the month) reference
 *            the normal days in the relevant month. Values less than 1 (including
 *            negative values) reference the days in the previous month, so 0 is
 *            the last day of the previous month, -1 is the day before that, etc.
 *            Values greater than the number of days in the relevant month
 *            reference the appropriate day in the following month(s).
 * @param year The number of the year, may be a two or four digit value, with
 *             values between 0-69 mapping to 2000-2069 and 70-100 to 1970-2000.
 *             On systems where time_t is a 32bit signed integer, as most common
 *             today, the valid range for year is somewhere between 1901 and 2038.
 *             However, before PHP 5.1.0 this range was limited from 1970 to 2038
 *             on some systems (e.g. Windows).
 * @param is_dst This parameter can be set to 1 if the time is during daylight
 *               savings time (DST), 0 if it is not, or -1 (the default) if it is
 *               unknown whether the time is within daylight savings time or not.
 *               If it's unknown, PHP tries to figure it out itself. This can
 *               cause unexpected (but not incorrect) results. Some times are
 *               invalid if DST is enabled on the system PHP is running on or
 *               is_dst is set to 1. If DST is enabled in e.g. 2:00, all times
 *               between 2:00 and 3:00 are invalid and mktime returns an undefined
 *               (usually negative) value. Some systems (e.g. Solaris 8) enable
 *               DST at midnight so time 0:30 of the day when DST is enabled is
 *               evaluated as 23:30 of the previous day.
 *               
 *               As of PHP 5.1.0, this parameter became deprecated. As a result,
 *               the new timezone handling features should be used instead.
 * @return mktime returns the Unix timestamp of the arguments given. If the
 *         arguments are invalid, the function returns false (before PHP 5.1 it
 *         returned -1).
 */
declare function mktime(hour?: number, minute?: number, second?: number, month?: number, day?: number, year?: number, is_dst?: number): number;

/**
 * Format a local time/date according to locale settings
 * 
 * Format the time and/or date according to locale settings. Month and weekday
 * names and other language-dependent strings respect the current locale set with
 * setlocale.
 * 
 * Not all conversion specifiers may be supported by your C library, in which case
 * they will not be supported by PHP's strftime. Additionally, not all platforms
 * support negative timestamps, so your date range may be limited to no earlier
 * than the Unix epoch. This means that %e, %T, %R and, %D (and possibly others) -
 * as well as dates prior to Jan 1, 1970 - will not work on Windows, some Linux
 * distributions, and a few other operating systems. For Windows systems, a
 * complete overview of supported conversion specifiers can be found at MSDN.
 *
 * @param format The following characters are recognized in the format parameter
 *               string    format Description Example returned values     Day ---
 *               ---   %a An abbreviated textual representation of the day Sun
 *               through Sat   %A A full textual representation of the day Sunday
 *               through Saturday   %d Two-digit day of the month (with leading
 *               zeros) 01 to 31   %e  Day of the month, with a space preceding
 *               single digits. Not implemented as described on Windows. See below
 *               for more information.   1 to 31   %j Day of the year, 3 digits
 *               with leading zeros 001 to 366   %u ISO-8601 numeric
 *               representation of the day of the week 1 (for Monday) though 7
 *               (for Sunday)   %w Numeric representation of the day of the week 0
 *               (for Sunday) through 6 (for Saturday)   Week --- ---   %U Week
 *               number of the given year, starting with the first Sunday as the
 *               first week 13 (for the 13th full week of the year)   %V
 *               ISO-8601:1988 week number of the given year, starting with the
 *               first week of the year with at least 4 weekdays, with Monday
 *               being the start of the week 01 through 53 (where 53 accounts for
 *               an overlapping week)   %W A numeric representation of the week of
 *               the year, starting with the first Monday as the first week 46
 *               (for the 46th week of the year beginning with a Monday)   Month
 *               --- ---   %b Abbreviated month name, based on the locale Jan
 *               through Dec   %B Full month name, based on the locale January
 *               through December   %h Abbreviated month name, based on the locale
 *               (an alias of %b) Jan through Dec   %m Two digit representation of
 *               the month 01 (for January) through 12 (for December)   Year ---
 *               ---   %C Two digit representation of the century (year divided by
 *               100, truncated to an integer) 19 for the 20th Century   %g Two
 *               digit representation of the year going by ISO-8601:1988 standards
 *               (see %V) Example: 09 for the week of January 6, 2009   %G The
 *               full four-digit version of %g Example: 2008 for the week of
 *               January 3, 2009   %y Two digit representation of the year
 *               Example: 09 for 2009, 79 for 1979   %Y Four digit representation
 *               for the year Example: 2038   Time --- ---   %H Two digit
 *               representation of the hour in 24-hour format 00 through 23   %k
 *               Two digit representation of the hour in 24-hour format, with a
 *               space preceding single digits  0 through 23   %I Two digit
 *               representation of the hour in 12-hour format 01 through 12   %l
 *               (lower-case 'L') Hour in 12-hour format, with a space preceding
 *               single digits  1 through 12   %M Two digit representation of the
 *               minute 00 through 59   %p UPPER-CASE 'AM' or 'PM' based on the
 *               given time Example: AM for 00:31, PM for 22:23   %P lower-case
 *               'am' or 'pm' based on the given time Example: am for 00:31, pm
 *               for 22:23   %r Same as "%I:%M:%S %p" Example: 09:34:17 PM for
 *               21:34:17   %R Same as "%H:%M" Example: 00:35 for 12:35 AM, 16:44
 *               for 4:44 PM   %S Two digit representation of the second 00
 *               through 59   %T Same as "%H:%M:%S" Example: 21:34:17 for 09:34:17
 *               PM   %X Preferred time representation based on locale, without
 *               the date Example: 03:59:16 or 15:59:16   %z The time zone offset.
 *               Not implemented as described on Windows. See below for more
 *               information. Example: -0500 for US Eastern Time   %Z The time
 *               zone abbreviation. Not implemented as described on Windows. See
 *               below for more information. Example: EST for Eastern Time   Time
 *               and Date Stamps --- ---   %c Preferred date and time stamp based
 *               on locale Example: Tue Feb  5 00:45:10 2009 for February 5, 2009
 *               at 12:45:10 AM   %D Same as "%m/%d/%y" Example: 02/05/09 for
 *               February 5, 2009   %F Same as "%Y-%m-%d" (commonly used in
 *               database datestamps) Example: 2009-02-05 for February 5, 2009  
 *               %s Unix Epoch Time timestamp (same as the time function) Example:
 *               305815200 for September 10, 1979 08:40:00 AM   %x Preferred date
 *               representation based on locale, without the time Example:
 *               02/05/09 for February 5, 2009   Miscellaneous --- ---   %n A
 *               newline character ("\n") ---   %t A Tab character ("\t") ---   %%
 *               A literal percentage character ("%") ---
 *               
 *               Maximum length of this parameter is 1023 characters.
 *               
 *               Windows only:
 *               
 *               The %e modifier is not supported in the Windows implementation of
 *               this function. To achieve this value, the %#d modifier can be
 *               used instead. The example below illustrates how to write a cross
 *               platform compatible function.
 *               
 *               The %z and %Z modifiers both return the time zone name instead of
 *               the offset or abbreviation.
 * @param timestamp 
 * @return Returns a string formatted according format using the given timestamp
 *         or the current local time if no timestamp is given.  Month and weekday
 *         names and other language-dependent strings respect the current locale
 *         set with setlocale.
 */
declare function strftime(format: string, timestamp?: number): string;

/**
 * Parse a time/date generated with strftime
 * 
 * strptime returns an array with the date parsed, or false on error.
 * 
 * Month and weekday names and other language dependent strings respect the current
 * locale set with setlocale (LC_TIME).
 *
 * @param date The string to parse (e.g. returned from strftime).
 * @param format The format used in date (e.g. the same as used in strftime). Note
 *               that some of the format options available to strftime may not
 *               have any effect within strptime; the exact subset that are
 *               supported will vary based on the operating system and C library
 *               in use.
 *               
 *               For more information about the format options, read the strftime
 *               page.
 * @return Returns an array.
 *         
 *         The following parameters are returned in the array    parameters
 *         Description     "tm_sec" Seconds after the minute (0-61)   "tm_min"
 *         Minutes after the hour (0-59)   "tm_hour" Hour since midnight (0-23)  
 *         "tm_mday" Day of the month (1-31)   "tm_mon" Months since January
 *         (0-11)   "tm_year" Years since 1900   "tm_wday" Days since Sunday (0-6)
 *         "tm_yday" Days since January 1 (0-365)   "unparsed" the date part which
 *         was not recognized using the specified format
 */
declare function strptime(date: string, format: string): Pct.PhpAssocArray;

/**
 * Parse about any English textual datetime description into a Unix timestamp
 * 
 * Each parameter of this function uses the default time zone unless a time zone is
 * specified in that parameter.  Be careful not to use different time zones in each
 * parameter unless that is intended. See date_default_timezone_get on the various
 * ways to define the default time zone.
 *
 * @param time 
 * @param now The timestamp which is used as a base for the calculation of
 *            relative dates.
 * @return Returns a timestamp on success, false otherwise. Previous to PHP 5.1.0,
 *         this function would return -1 on failure.
 */
declare function strtotime(time: string, now?: number): number;

/**
 * Return current Unix timestamp
 * 
 * Returns the current time measured in the number of seconds since the Unix Epoch
 * (January 1 1970 00:00:00 GMT).
 */
declare function time(): number;

/**
 * Returns the timezone name from abbreviation
 *
 * @param abbr Time zone abbreviation.
 * @param gmtOffset Offset from GMT in seconds. Defaults to -1 which means that
 *                  first found time zone corresponding to abbr is returned.
 *                  Otherwise exact offset is searched and only if not found then
 *                  the first time zone with any offset is returned.
 * @param isdst Daylight saving time indicator. Defaults to -1, which means that
 *              whether the time zone has daylight saving or not is not taken into
 *              consideration when searching. If this is set to 1, then the
 *              gmtOffset is assumed to be an offset with daylight saving in
 *              effect; if 0, then gmtOffset is assumed to be an offset without
 *              daylight saving in effect. If abbr doesn't exist then the time
 *              zone is searched solely by the gmtOffset and isdst.
 * @return Returns time zone name on success.
 */
declare function timezone_name_from_abbr(abbr: string, gmtOffset?: number, isdst?: number): string;

/**
 * Gets the version of the timezonedb
 * 
 * Returns the current version of the timezonedb.
 * @return Returns a string.
 */
declare function timezone_version_get(): string;

//--------------------------------------------------------------------------------
// dir
//--------------------------------------------------------------------------------

/*
 * 
 */
declare var DIRECTORY_SEPARATOR: string;

/**
 * Available since PHP 4.3.0. Semicolon on Windows, colon otherwise.
 */
declare var PATH_SEPARATOR: string;


/**
 * Available since PHP 5.4.0.
 */
declare var SCANDIR_SORT_ASCENDING: number;

/**
 * Available since PHP 5.4.0.
 */
declare var SCANDIR_SORT_DESCENDING: number;

/**
 * Available since PHP 5.4.0.
 */
declare var SCANDIR_SORT_NONE: number;


/**
 * Instances of Directory are created by calling the dir function, not by the new
 * operator.
 */
declare class Directory {
    
    /**
     * The directory that was opened.
     */
    path: string;
    
    /**
     * Can be used with other directory functions such as readdir, rewinddir and
     * closedir.
     */
    handle: Pct.PhpResource;

    
    /**
     * Close directory handle
     * 
     * Same as closedir, only  dir_handle defaults to $this.
     *
     * @param dir_handle 
     */
    close(dir_handle?: Pct.PhpResource);
    
    /**
     * Read entry from directory handle
     * 
     * Same as readdir, only  dir_handle defaults to $this.
     *
     * @param dir_handle 
     */
    read(dir_handle?: Pct.PhpResource): string;
    
    /**
     * Rewind directory handle
     * 
     * Same as rewinddir, only  dir_handle defaults to $this.
     *
     * @param dir_handle 
     */
    rewind(dir_handle?: Pct.PhpResource);
}


/**
 * Change directory
 * 
 * Changes PHP's current directory to directory.
 *
 * @param directory The new current directory
 */
declare function chdir(directory: string): bool;

/**
 * Change the root directory
 * 
 * Changes the root directory of the current process to directory, and changes the
 * current working directory to "/".
 * 
 * This function is only available to GNU and BSD systems, and only when using the
 * CLI, CGI or Embed SAPI. Also, this function requires root privileges.
 *
 * @param directory The path to change the root directory to.
 */
declare function chroot(directory: string): bool;

/**
 * Close directory handle
 * 
 * Closes the directory stream indicated by dir_handle. The stream must have
 * previously been opened by opendir.
 *
 * @param dir_handle The directory handle resource previously opened with opendir.
 *                   If the directory handle is not specified, the last link
 *                   opened by opendir is assumed.
 */
declare function closedir(dir_handle?: Pct.PhpResource);

/**
 * Return an instance of the Directory class
 * 
 * A pseudo-object oriented mechanism for reading a directory.  The given directory
 * is opened.
 *
 * @param directory Directory to open
 * @param context 
 * @return Returns an instance of Directory, or  with wrong parameters, or false
 *         in case of another error.
 */
declare function dir(directory: string, context?: Pct.PhpResource): Directory;

/**
 * Gets the current working directory
 * 
 * Gets the current working directory.
 * @return Returns the current working directory on success, or false on failure.
 *         
 *         On some Unix variants, getcwd will return false if any one of the
 *         parent directories does not have the readable or search mode set, even
 *         if the current directory does. See chmod for more information on modes
 *         and permissions.
 */
declare function getcwd(): string;

/**
 * Open directory handle
 * 
 * Opens up a directory handle to be used in subsequent closedir, readdir, and
 * rewinddir calls.
 *
 * @param path The directory path that is to be opened
 * @param context For a description of the context parameter, refer to the streams
 *                section of the manual.
 * @return Returns a directory handle resource on success, or false on failure.
 *         
 *         If path is not a valid directory or the directory can not be opened due
 *         to permission restrictions or filesystem errors, opendir returns false
 *         and generates a PHP error of level  E_WARNING.  You can suppress the
 *         error output of opendir by prepending '@' to the front of the function
 *         name.
 */
declare function opendir(path: string, context?: Pct.PhpResource): Pct.PhpResource;

/**
 * Read entry from directory handle
 * 
 * Returns the name of the next entry in the directory. The entries are returned in
 * the order in which they are stored by the filesystem.
 *
 * @param dir_handle The directory handle resource previously opened with opendir.
 *                   If the directory handle is not specified, the last link
 *                   opened by opendir is assumed.
 * @return Returns the entry name on success.
 */
declare function readdir(dir_handle?: Pct.PhpResource): string;

/**
 * Rewind directory handle
 * 
 * Resets the directory stream indicated by dir_handle to the beginning of the
 * directory.
 *
 * @param dir_handle The directory handle resource previously opened with opendir.
 *                   If the directory handle is not specified, the last link
 *                   opened by opendir is assumed.
 */
declare function rewinddir(dir_handle?: Pct.PhpResource);

/**
 * List files and directories inside the specified path
 * 
 * Returns an array of files and directories from the directory.
 *
 * @param directory The directory that will be scanned.
 * @param sorting_order By default, the sorted order is alphabetical in ascending
 *                      order.  If the optional sorting_order is set to
 *                      SCANDIR_SORT_DESCENDING, then the sort order is
 *                      alphabetical in descending order. If it is set to
 *                      SCANDIR_SORT_NONE then the result is unsorted.
 * @param context For a description of the context parameter, refer to the streams
 *                section of the manual.
 * @return Returns an array of filenames on success, or false on failure. If
 *         directory is not a directory, then boolean false is returned, and an
 *         error of level E_WARNING is generated.
 */
declare function scandir(directory?: string, sorting_order?: number, context?: Pct.PhpResource): string[];

//--------------------------------------------------------------------------------
// dom
//--------------------------------------------------------------------------------

/*
 * The DOM extension allows you to operate on XML documents through the DOM API
 * with PHP 5.
 * 
 * Note: PHP 4 offers an older domxml extension.
 */
var DOM_PHP_ERR: number;
var DOM_INDEX_SIZE_ERR: number;
var DOMSTRING_SIZE_ERR: number;
var DOM_HIERARCHY_REQUEST_ERR: number;
var DOM_WRONG_DOCUMENT_ERR: number;
var DOM_INVALID_CHARACTER_ERR: number;
var DOM_NO_DATA_ALLOWED_ERR: number;
var DOM_NO_MODIFICATION_ALLOWED_ERR: number;
var DOM_NOT_FOUND_ERR: number;
var DOM_NOT_SUPPORTED_ERR: number;
var DOM_INUSE_ATTRIBUTE_ERR: number;
var DOM_INVALID_STATE_ERR: number;
var DOM_SYNTAX_ERR: number;
var DOM_INVALID_MODIFICATION_ERR: number;
var DOM_NAMESPACE_ERR: number;
var DOM_INVALID_ACCESS_ERR: number;
var DOM_VALIDATION_ERR: number;

var XML_ELEMENT_NODE: number;
var XML_ATTRIBUTE_NODE: number;
var XML_TEXT_NODE: number;
var XML_CDATA_SECTION_NODE: number;
var XML_ENTITY_REF_NODE: number;
var XML_ENTITY_NODE: number;
var XML_PI_NODE: number;
var XML_COMMENT_NODE: number;
var XML_DOCUMENT_NODE: number;
var XML_DOCUMENT_TYPE_NODE: number;
var XML_DOCUMENT_FRAG_NODE: number;
var XML_NOTATION_NODE: number;
var XML_HTML_DOCUMENT_NODE: number;
var XML_DTD_NODE: number;
var XML_ELEMENT_DECL_NODE: number;
var XML_ATTRIBUTE_DECL_NODE: number;
var XML_ENTITY_DECL_NODE: number;
var XML_NAMESPACE_DECL_NODE: number;
var XML_ATTRIBUTE_CDATA: number;
var XML_ATTRIBUTE_ID: number;
var XML_ATTRIBUTE_IDREF: number;
var XML_ATTRIBUTE_IDREFS: number;
var XML_ATTRIBUTE_ENTITY: number;
var XML_ATTRIBUTE_NMTOKEN: number;
var XML_ATTRIBUTE_NMTOKENS: number;
var XML_ATTRIBUTE_ENUMERATION: number;
var XML_ATTRIBUTE_NOTATION: number;

class DOMNode {
    
    /**
     * Returns the most accurate name for the current node type
     */
    nodeName: string;
    
    /**
     * The value of this node, depending on its type
     */
    nodeValue: string;
    
    /**
     * Gets the type of the node. One of the predefined XML_xxx_NODE constants
     */
    nodeType: number;
    
    /**
     * The parent of this node
     */
    parentNode: DOMNode;
    
    /**
     * A DOMNodeList that contains all children of this node. If there are no children,
     * this is an empty DOMNodeList.
     */
    childNodes: DOMNodeList;
    
    /**
     * The first child of this node. If there is no such node, this returns .
     */
    firstChild: DOMNode;
    
    /**
     * The last child of this node. If there is no such node, this returns .
     */
    lastChild: DOMNode;
    
    /**
     * The node immediately preceding this node. If there is no such node, this returns
     * .
     */
    previousSibling: DOMNode;
    
    /**
     * The node immediately following this node. If there is no such node, this returns
     * .
     */
    nextSibling: DOMNode;
    
    /**
     * A DOMNamedNodeMap containing the attributes of this node (if it is a DOMElement)
     * or  otherwise.
     */
    attributes: DOMNamedNodeMap;
    
    /**
     * The DOMDocument object associated with this node.
     */
    ownerDocument: DOMDocument;
    
    /**
     * The namespace URI of this node, or  if it is unspecified.
     */
    namespaceURI: string;
    
    /**
     * The namespace prefix of this node, or  if it is unspecified.
     */
    prefix: string;
    
    /**
     * Returns the local part of the qualified name of this node.
     */
    localName: string;
    
    /**
     * The absolute base URI of this node or  if the implementation wasn't able to
     * obtain an absolute URI.
     */
    baseURI: string;
    textContext: string;

    
    /**
     * Adds new child at the end of the children
     * 
     * This function appends a child to an existing list of children or creates a new
     * list of children. The child can be created with e.g. DOMDocument::createElement,
     * DOMDocument::createTextNode etc. or simply by using any other node.
     *
     * @param newnode The appended child.
     * @return The node added.
     */
    appendChild(newnode: DOMNode): DOMNode;
    
    /**
     * Canonicalize nodes to a string
     * 
     * Canonicalize nodes to a string
     *
     * @param exclusive Enable exclusive parsing of only the nodes matched by the
     *                  provided xpath or namespace prefixes.
     * @param with_comments Retain comments in output.
     * @param xpath An array of xpaths to filter the nodes by.
     * @param ns_prefixes An array of namespace prefixes to filter the nodes by.
     * @return Returns canonicalized nodes as a string
     */
    C14N(exclusive?: bool, with_comments?: bool, xpath?: string[], ns_prefixes?: string[]): number;
    
    /**
     * Canonicalize nodes to a file
     * 
     * Canonicalize nodes to a file.
     *
     * @param uri Path to write the output to.
     * @param exclusive Enable exclusive parsing of only the nodes matched by the
     *                  provided xpath or namespace prefixes.
     * @param with_comments Retain comments in output.
     * @param xpath An array of xpaths to filter the nodes by.
     * @param ns_prefixes An array of namespace prefixes to filter the nodes by.
     * @return Number of bytes written
     */
    C14NFile(uri: string, exclusive?: bool, with_comments?: bool, xpath?: string[], ns_prefixes?: string[]): string;
    
    /**
     * Clones a node
     * 
     * Creates a copy of the node.
     *
     * @param deep Indicates whether to copy all descendant nodes. This parameter is
     *             defaulted to false.
     * @return The cloned node.
     */
    cloneNode(deep?: bool): DOMNode;
    
    /**
     * Get line number for a node
     * 
     * Gets line number for where the node is defined.
     * @return Always returns the line number where the node was defined in.
     */
    getLineNo(): number;
    
    /**
     * Get an XPath for a node
     * 
     * Gets an XPath location path for the node.
     * @return Returns a string containing the XPath, or  in case of an error.
     */
    getNodePath(): string;
    
    /**
     * Checks if node has attributes
     * 
     * This method checks if the node has attributes. The tested node has to be an
     * XML_ELEMENT_NODE.
     */
    hasAttributes(): bool;
    
    /**
     * Checks if node has children
     * 
     * This function checks if the node has children.
     */
    hasChildNodes(): bool;
    
    /**
     * Adds a new child before a reference node
     * 
     * This function inserts a new node right before the reference node. If you plan to
     * do further modifications on the appended child you must use the returned node.
     *
     * @param newnode The new node.
     * @param refnode The reference node. If not supplied, newnode is appended to the
     *                children.
     * @return The inserted node.
     */
    insertBefore(newnode: DOMNode, refnode?: DOMNode): DOMNode;
    
    /**
     * Checks if the specified namespaceURI is the default namespace or not
     * 
     * Tells whether namespaceURI is the default namespace.
     *
     * @param namespaceURI The namespace URI to look for.
     * @return Return true if namespaceURI is the default namespace, false otherwise.
     */
    isDefaultNamespace(namespaceURI: string): bool;
    
    /**
     * Indicates if two nodes are the same node
     * 
     * This function indicates if two nodes are the same node. The comparison is not
     * based on content
     *
     * @param node The compared node.
     */
    isSameNode(node: DOMNode): bool;
    
    /**
     * Checks if feature is supported for specified version
     * 
     * Checks if the asked feature is supported for the specified version.
     *
     * @param feature The feature to test. See the example of
     *                DOMImplementation::hasFeature for a list of features.
     * @param version The version number of the feature to test.
     */
    isSupported(feature: string, version: string): bool;
    
    /**
     * Gets the namespace URI of the node based on the prefix
     * 
     * Gets the namespace URI of the node based on the prefix.
     *
     * @param prefix The prefix of the namespace.
     * @return The namespace URI of the node.
     */
    lookupNamespaceURI(prefix: string): string;
    
    /**
     * Gets the namespace prefix of the node based on the namespace URI
     * 
     * Gets the namespace prefix of the node based on the namespace URI.
     *
     * @param namespaceURI The namespace URI.
     * @return The prefix of the namespace.
     */
    lookupPrefix(namespaceURI: string): string;
    
    /**
     * Normalizes the node
     * 
     * Normalizes the node.
     */
    normalize();
    
    /**
     * Removes child from list of children
     * 
     * This functions removes a child from a list of children.
     *
     * @param oldnode The removed child.
     * @return If the child could be removed the function returns the old child.
     */
    removeChild(oldnode: DOMNode): DOMNode;
    
    /**
     * Replaces a child
     * 
     * This function replaces the child oldnode with the passed new node. If the new
     * node is already a child it will not be added a second time. If the replacement
     * succeeds the old node is returned.
     *
     * @param newnode The new node. It must be a member of the target document, i.e.
     *                created by one of the DOMDocument-&gt;createXXX() methods or
     *                imported in the document by .
     * @param oldnode The old node.
     * @return The old node or false if an error occur.
     */
    replaceChild(newnode: DOMNode, oldnode: DOMNode): DOMNode;
}


/**
 * DOMAttr represents an attribute in the DOMElement object.
 */
class DOMAttr extends DOMNode {
    
    /**
     * The element which contains the attribute
     */
    ownerElement: DOMElement;
    
    /**
     * Not implemented yet, always is
     */
    schemaTypeInfo: bool;
    
    /**
     * Not implemented yet, always is
     */
    specified: bool;
    
    /**
     * The value of the attribute
     */
    value: string;

    
    /**
     * Creates a new DOMAttr object
     * 
     * Creates a new DOMAttr object. This object is read only. It may be appended to a
     * document, but additional nodes may not be appended to this node until the node
     * is associated with a document. To create a writable node, use .
     *
     * @param name The tag name of the attribute.
     * @param value The value of the attribute.
     */
    constructor(name: string, value?: string);
    
    /**
     * Checks if attribute is a defined ID
     * 
     * This function checks if the attribute is a defined ID.
     * 
     * According to the DOM standard this requires a DTD which defines the attribute ID
     * to be of type ID. You need to validate your document with  or
     * DOMDocument::validateOnParse before using this function.
     */
    isId(): bool;
}


/**
 * Represents nodes with character data. No nodes directly correspond to this
 * class, but other nodes do inherit from it.
 */
class DOMCharacterData extends DOMNode {
    
    /**
     * The contents of the node.
     */
    data: string;
    
    /**
     * The length of the contents.
     */
    length: number;

    
    /**
     * Append the string to the end of the character data of the node
     * 
     * Append the string data to the end of the character data of the node.
     *
     * @param data The string to append.
     */
    appendData(data: string);
    
    /**
     * Remove a range of characters from the node
     * 
     * Deletes count characters starting from position offset.
     *
     * @param offset The offset from which to start removing.
     * @param count The number of characters to delete. If the sum of offset and count
     *              exceeds the length, then all characters to the end of the data are
     *              deleted.
     */
    deleteData(offset: number, count: number);
    
    /**
     * Insert a string at the specified 16-bit unit offset
     * 
     * Inserts string data at position offset.
     *
     * @param offset The character offset at which to insert.
     * @param data The string to insert.
     */
    insertData(offset: number, data: string);
    
    /**
     * Replace a substring within the DOMCharacterData node
     * 
     * Replace count characters starting from position offset with data.
     *
     * @param offset The offset from which to start replacing.
     * @param count The number of characters to replace. If the sum of offset and
     *              count exceeds the length, then all characters to the end of the
     *              data are replaced.
     * @param data The string with which the range must be replaced.
     */
    replaceData(offset: number, count: number, data: string);
    
    /**
     * Extracts a range of data from the node
     * 
     * Returns the specified substring.
     *
     * @param offset Start offset of substring to extract.
     * @param count The number of characters to extract.
     * @return The specified substring. If the sum of offset and count exceeds the
     *         length, then all 16-bit units to the end of the data are returned.
     */
    substringData(offset: number, count: number): string;
}


/**
 * The DOMText class inherits from DOMCharacterData and represents the textual
 * content of a DOMElement or DOMAttr.
 */
class DOMText extends DOMCharacterData {
    
    /**
     * Holds all the text of logically-adjacent (not separated by Element, Comment or
     * Processing Instruction) Text nodes.
     */
    wholeText: string;

    
    /**
     * Creates a new DOMText object
     * 
     * Creates a new DOMText object.
     *
     * @param value
     */
    constructor(value?: string);
    
    /**
     * Indicates whether this text node contains whitespace
     * 
     * Indicates whether this text node contains whitespace. The text node is
     * determined to contain whitespace in element content during the load of the
     * document.
     */
    isWhitespaceInElementContent(): bool;
    
    /**
     * Breaks this node into two nodes at the specified offset
     * 
     * Breaks this node into two nodes at the specified offset, keeping both in the
     * tree as siblings.
     * 
     * After being split, this node will contain all the content up to the offset. If
     * the original node had a parent node, the new node is inserted as the next
     * sibling of the original node. When the offset is equal to the length of this
     * node, the new node has no data.
     *
     * @param offset The offset at which to split, starting from 0.
     * @return The new node of the same type, which contains all the content at and
     *         after the offset.
     */
    splitText(offset: number): DOMText;
}


/**
 * The DOMCdataSection inherits from DOMText for textural representation of CData
 * constructs.
 */
class DOMCdataSection extends DOMText {
    
    /**
     * Constructs a new DOMCdataSection object
     * 
     * Constructs a new CDATA node. This works like the DOMText class.
     *
     * @param value
     */
    constructor(value: string);
}


/**
 * Represents comment nodes, characters delimited by !-- and --.
 */
class DOMComment extends DOMCharacterData {

}


/**
 * Represents an entire HTML or XML document; serves as the root of the document
 * tree.
 */
class DOMDocument extends DOMNode {

    
    /**
     * Load XML from a file
     * 
     * Loads an XML document from a file.
     *
     * @param filename The path to the XML document.
     * @param options Bitwise OR of the libxml option constants.
     * @return If called statically, returns a DOMDocument.
     */
    static load(filename: string, options?: number): DOMDocument;
    
    /**
     * Load HTML from a string
     * 
     * The function parses the HTML contained in the string source. Unlike loading XML,
     * HTML does not have to be well-formed to load. This function may also be called
     * statically to load and create a DOMDocument object. The static invocation may be
     * used when no DOMDocument properties need to be set prior to loading.
     *
     * @param source The HTML string.
     * @return If called statically, returns a DOMDocument.
     */
    static loadHTML(source: string): DOMDocument;
    
    /**
     * Load HTML from a file
     * 
     * The function parses the HTML document in the file named filename. Unlike loading
     * XML, HTML does not have to be  well-formed to load.
     *
     * @param filename The path to the HTML file.
     * @return If called statically, returns a DOMDocument.
     */
    static loadHTMLFile(filename: string): DOMDocument;
    
    /**
     * Load XML from a string
     * 
     * Loads an XML document from a string.
     *
     * @param source The string containing the XML.
     * @param options Bitwise OR of the libxml option constants.
     * @return If called statically, returns a DOMDocument.
     */
    static loadXML(source: string, options?: number): DOMDocument;

    
    /**
     * Deprecated. Actual encoding of the document, is a readonly equivalent to
     * encoding.
     */
    actualEncoding: string;
    
    /**
     * The Document Type Declaration associated with this document.
     */
    doctype: DOMDocumentType;
    
    /**
     * This is a convenience attribute that allows direct access to the child node that
     * is the document element of the document.
     */
    documentElement: DOMElement;
    
    /**
     * The location of the document or  if undefined.
     */
    documentURI: string;
    
    /**
     * Encoding of the document, as specified by the XML declaration. This attribute is
     * not present in the final DOM Level 3 specification, but is the only way of
     * manipulating XML document encoding in this implementation.
     */
    encoding: string;
    
    /**
     * Nicely formats output with indentation and extra space.
     */
    formatOutput: bool;
    
    /**
     * The DOMImplementation object that handles this document.
     */
    implementation: DOMImplementation;
    
    /**
     * Do not remove redundant white space. Default to true.
     */
    preserveWhiteSpace: bool;
    
    /**
     * Proprietary. Enables recovery mode, i.e. trying to parse non-well formed
     * documents. This attribute is not part of the DOM specification and is specific
     * to libxml.
     */
    recover: bool;
    
    /**
     * Set it to true to load external entities from a doctype declaration. This is
     * useful for including character entities in your XML document.
     */
    resolveExternals: bool;
    
    /**
     * Deprecated. Whether or not the document is standalone, as specified by the XML
     * declaration, corresponds to xmlStandalone.
     */
    standalone: bool;
    
    /**
     * Throws DOMException on errors. Default to true.
     */
    strictErrorChecking: bool;
    
    /**
     * Proprietary. Whether or not to substitute entities. This attribute is not part
     * of the DOM specification and is specific to libxml.
     */
    substituteEntities: bool;
    
    /**
     * Loads and validates against the DTD. Default to false.
     */
    validateOnParse: bool;
    
    /**
     * Deprecated. Version of XML, corresponds to xmlVersion.
     */
    version: string;
    
    /**
     * An attribute specifying, as part of the XML declaration, the encoding of this
     * document. This is  when unspecified or when it is not known, such as when the
     * Document was created in memory.
     */
    xmlEncoding: string;
    
    /**
     * An attribute specifying, as part of the XML declaration, whether this document
     * is standalone. This is false when unspecified.
     */
    xmlStandalone: bool;
    
    /**
     * An attribute specifying, as part of the XML declaration, the version number of
     * this document. If there is no declaration and if this document supports the
     * "XML" feature, the value is "1.0".
     */
    xmlVersion: string;

    
    /**
     * Creates a new DOMDocument object
     * 
     * Creates a new DOMDocument object.
     *
     * @param version The version number of the document as part of the XML
     *                declaration.
     * @param encoding The encoding of the document as part of the XML declaration.
     */
    constructor(version?: string, encoding?: string);
    
    /**
     * Create new attribute
     * 
     * This function creates a new instance of class DOMAttr.
     *
     * @param name The name of the attribute.
     * @return The new DOMAttr or false if an error occured.
     */
    createAttribute(name: string): DOMAttr;
    
    /**
     * Create new attribute node with an associated namespace
     * 
     * This function creates a new instance of class DOMAttr.
     *
     * @param namespaceURI The URI of the namespace.
     * @param qualifiedName The tag name and prefix of the attribute, as
     *                      prefix:tagname.
     * @return The new DOMAttr or false if an error occured.
     */
    createAttributeNS(namespaceURI: string, qualifiedName: string): DOMAttr;
    
    /**
     * Create new cdata node
     * 
     * This function creates a new instance of class DOMCDATASection.
     *
     * @param data The content of the cdata.
     * @return The new DOMCDATASection or false if an error occured.
     */
    createCDATASection(data: string): DOMCdataSection;
    
    /**
     * Create new comment node
     * 
     * This function creates a new instance of class DOMComment.
     *
     * @param data The content of the comment.
     * @return The new DOMComment or false if an error occured.
     */
    createComment(data: string);
    
    /**
     * Create new document fragment
     * 
     * This function creates a new instance of class DOMDocumentFragment.
     * @return The new DOMDocumentFragment or false if an error occured.
     */
    createDocumentFragment(): DOMDocumentFragment;
    
    /**
     * Create new element node
     * 
     * This function creates a new instance of class DOMElement.
     *
     * @param name The tag name of the element.
     * @param value The value of the element. By default, an empty element will be
     *              created. The value can also be set later with
     *              DOMElement::$nodeValue.
     * @return Returns a new instance of class DOMElement or false if an error
     *         occured.
     */
    createElement(name: string, value?: string): DOMElement;
    
    /**
     * Create new element node with an associated namespace
     * 
     * This function creates a new element node with an associated namespace.
     *
     * @param namepsaceURI
     * @param qualifiedName The qualified name of the element, as prefix:tagname.
     * @param value The value of the element. By default, an empty element will be
     *              created. You can also set the value later with
     *              DOMElement::$nodeValue.
     * @return The new DOMElement or false if an error occured.
     */
    createElementNS(namepsaceURI: string, qualifiedName: string, value?: string): DOMElement;
    
    /**
     * Create new entity reference node
     * 
     * This function creates a new instance of class DOMEntityReference.
     *
     * @param name The content of the entity reference, e.g. the entity reference
     *             minus the leading  and the trailing ; characters.
     * @return The new DOMEntityReference or false if an error occured.
     */
    createEntityReference(name: string): DOMEntityReference;
    
    /**
     * Creates new PI node
     * 
     * This function creates a new instance of class DOMProcessingInstruction.
     *
     * @param target The target of the processing instruction.
     * @param data The content of the processing instruction.
     * @return The new DOMProcessingInstruction or false if an error occured.
     */
    createProcessingInstruction(target: string, data?: string): DOMProcessingInstruction;
    
    /**
     * Create new text node
     * 
     * This function creates a new instance of class DOMText.
     *
     * @param context
     * @return The new DOMText or false if an error occured.
     */
    createTextNode(context: string): DOMText;
    
    /**
     * Searches for an element with a certain id
     * 
     * This function is similar to  but searches for an element with a given id.
     * 
     * For this function to work, you will need either to set some ID attributes with 
     * or a DTD which defines an attribute to be of type ID. In the later case, you
     * will need to validate your document with  or DOMDocument::$validateOnParse
     * before using this function.
     *
     * @param elementId The unique id value for an element.
     * @return Returns the DOMElement or  if the element is not found.
     */
    getElementById(elementId: string): DOMElement;
    
    /**
     * Searches for all elements with given local tag name
     * 
     * This function returns a new instance of class DOMNodeList containing all the
     * elements with a given local tag name.
     *
     * @param name The local name (without namespace) of the tag to match on. The
     *             special value * matches all tags.
     * @return A new DOMNodeList object containing all the matched elements.
     */
    getElementsByTagName(name: string): DOMNodeList;
    
    /**
     * Searches for all elements with given local tag name
     * 
     * This function returns a new instance of class DOMNodeList containing all the
     * elements with a given local tag name.
     *
     * @param namespaceURI
     * @param localName
     * @return A new DOMNodeList object containing all the matched elements.
     */
    getElementsByTagName(namespaceURI: string, localName: string): DOMNodeList;
    
    /**
     * Import node into current document
     * 
     * This function returns a copy of the node to import and associates it with the
     * current document.
     *
     * @param importedNode The node to import.
     * @param deep If set to true, this method will recursively import the subtree
     *             under the importedNode.
     *             
     *             To copy the nodes attributes deep needs to be set to true
     * @return The copied node or false, if it cannot be copied.
     */
    importNode(importedNode: DOMNode, deep?: bool): DOMNode;
    
    /**
     * Load XML from a file
     * 
     * Loads an XML document from a file.
     *
     * @param filename The path to the XML document.
     * @param options Bitwise OR of the libxml option constants.
     * @return If called statically, returns a DOMDocument.
     */
    load(filename: string, options?: number): bool;
    
    /**
     * Load HTML from a string
     * 
     * The function parses the HTML contained in the string source. Unlike loading XML,
     * HTML does not have to be well-formed to load. This function may also be called
     * statically to load and create a DOMDocument object. The static invocation may be
     * used when no DOMDocument properties need to be set prior to loading.
     *
     * @param source The HTML string.
     * @return If called statically, returns a DOMDocument.
     */
    loadHTML(source: string): bool;
    
    /**
     * Load HTML from a file
     * 
     * The function parses the HTML document in the file named filename. Unlike loading
     * XML, HTML does not have to be  well-formed to load.
     *
     * @param filename The path to the HTML file.
     * @return If called statically, returns a DOMDocument.
     */
    loadHTMLFile(filename: string): bool;
    
    /**
     * Load XML from a string
     * 
     * Loads an XML document from a string.
     *
     * @param source The string containing the XML.
     * @param options Bitwise OR of the libxml option constants.
     * @return If called statically, returns a DOMDocument.
     */
    loadXML(source: string, options?: number): bool;
    
    /**
     * Normalizes the document
     * 
     * This method acts as if you saved and then loaded the document, putting the
     * document in a "normal" form.
     */
    normalizeDocument();
    
    /**
     * Register extended class used to create base node type
     * 
     * This method allows you to register your own extended DOM class to be used
     * afterward by the PHP DOM extension.
     * 
     * This method is not part of the DOM standard.
     *
     * @param baseclass The DOM class that you want to extend. You can find a list of
     *                  these classes in the chapter introduction.
     * @param extendedclass Your extended class name. If  is provided, any previously
     *                      registered class extending baseclass will be removed.
     */
    registerNodeClass(baseclass: string, extendedclass): bool;
    
    /**
     * Performs relaxNG validation on the document
     * 
     * Performs relaxNG validation on the document based on the given RNG schema.
     *
     * @param filename The RNG file.
     */
    relaxNGValidate(filename: string): bool;
    
    /**
     * Performs relaxNG validation on the document
     * 
     * Performs relaxNG validation on the document based on the given RNG source.
     *
     * @param source A string containing the RNG schema.
     */
    relaxNGValidateSource(source: string): bool;
    
    /**
     * Dumps the internal XML tree back into a file
     * 
     * Creates an XML document from the DOM representation. This function is usually
     * called after building a new dom document from scratch as in the example below.
     *
     * @param filename The path to the saved XML document.
     * @param options Additional Options. Currently only LIBXML_NOEMPTYTAG is
     *                supported.
     * @return Returns the number of bytes written or false if an error occurred.
     */
    save(filename: string, options?: number): number;
    
    /**
     * Dumps the internal document into a string using HTML formatting
     * 
     * Creates an HTML document from the DOM representation. This function is usually
     * called after building a new dom document from scratch as in the example below.
     *
     * @param node Optional parameter to output a subset of the document.
     * @return Returns the HTML, or false if an error occurred.
     */
    saveHTML(node?: DOMNode): string;
    
    /**
     * Dumps the internal document into a file using HTML formatting
     * 
     * Creates an HTML document from the DOM representation. This function is usually
     * called after building a new dom document from scratch as in the example below.
     *
     * @param filename The path to the saved HTML document.
     * @return Returns the number of bytes written or false if an error occurred.
     */
    saveHTMLFile(filename: string): number;
    
    /**
     * Dumps the internal XML tree back into a string
     * 
     * Creates an XML document from the DOM representation. This function is usually
     * called after building a new dom document from scratch as in the example below.
     *
     * @param node Use this parameter to output only a specific node without XML
     *             declaration rather than the entire document.
     * @param options Additional Options. Currently only LIBXML_NOEMPTYTAG is
     *                supported.
     * @return Returns the XML, or false if an error occurred.
     */
    saveXML(node?: DOMNode, options?: number): string;
    
    /**
     * Validates a document based on a schema
     * 
     * Validates a document based on the given schema file.
     *
     * @param filename The path to the schema.
     */
    schemaValidate(filename: string): bool;
    
    /**
     * Validates a document based on a schema
     * 
     * Validates a document based on a schema defined in the given string.
     *
     * @param source A string containing the schema.
     */
    schemaValidateSource(source: string): bool;
    
    /**
     * Validates the document based on its DTD
     * 
     * Validates the document based on its DTD.
     * 
     * You can also use the validateOnParse property of DOMDocument to make a DTD
     * validation.
     * @return If the document have no DTD attached, this method will return false.
     */
    validate(): bool;
    
    /**
     * Substitutes XIncludes in a DOMDocument Object
     * 
     * This method substitutes XIncludes in a DOMDocument object.
     * 
     * Due to libxml2 automatically resolving entities, this method will produce
     * unexpected results if the included XML file have an attached DTD.
     *
     * @param options libxml parameters. Available since PHP 5.1.0 and Libxml 2.6.7.
     * @return Returns the number of XIncludes in the document, -1 if some processing
     *         failed, or false if there were no substitutions.
     */
    xinclude(options?: number): number;
}

class DOMDocumentFragment extends DOMNode {
    
    /**
     * Append raw XML data
     * 
     * Appends raw XML data to a DOMDocumentFragment.
     * 
     * This method is not part of the DOM standard. It was created as a simpler
     * approach for appending an XML DocumentFragment in a DOMDocument.
     * 
     * If you want to stick to the standards, you will have to create a temporary
     * DOMDocument with a dummy root and then loop through the child nodes of the root
     * of your XML data to append them.
     *
     * @param data XML to append.
     */
    appendXML(data: string): bool;
}


/**
 * Each DOMDocument has a doctype attribute whose value is either  or a
 * DOMDocumentType object.
 */
class DOMDocumentType extends DOMNode {
    
    /**
     * The public identifier of the external subset.
     */
    publicId: string;
    
    /**
     * The system identifier of the external subset. This may be an absolute URI or
     * not.
     */
    systemId: string;
    
    /**
     * The name of DTD; i.e., the name immediately following the DOCTYPE keyword.
     */
    name: string;
    
    /**
     * A DOMNamedNodeMap containing the general entities, both external and internal,
     * declared in the DTD.
     */
    entities: DOMNamedNodeMap;
    
    /**
     * A DOMNamedNodeMap containing the notations declared in the DTD.
     */
    notations: DOMNamedNodeMap;
    
    /**
     * The internal subset as a string, or null if there is none. This is does not
     * contain the delimiting square brackets.
     */
    internalSubset: string;
}

class DOMElement extends DOMNode {
    
    /**
     * Not implemented yet, always return
     */
    schemaTypeInfo: bool;
    
    /**
     * The element name
     */
    tagName: string;

    
    /**
     * Creates a new DOMElement object
     * 
     * Creates a new DOMElement object. This object is read only. It may be appended to
     * a document, but additional nodes may not be appended to this node until the node
     * is associated with a document. To create a writeable node, use  or .
     *
     * @param name The tag name of the element. When also passing in namespaceURI, the
     *             element name may take a prefix to be associated with the URI.
     * @param value The value of the element.
     * @param namespaceURI A namespace URI to create the element within a specific
     *                     namespace.
     */
    constructor(name: string, value?: string, namespaceURI?: string);
    
    /**
     * Returns value of attribute
     * 
     * Gets the value of the attribute with name name for the current node.
     *
     * @param name The name of the attribute.
     * @return The value of the attribute, or an empty string if no attribute with the
     *         given name is found.
     */
    getAttribute(name: string): string;
    
    /**
     * Returns attribute node
     * 
     * Returns the attribute node with name name for the current element.
     *
     * @param name The name of the attribute.
     * @return The attribute node.
     */
    getAttributeNode(name: string): DOMAttr;
    
    /**
     * Returns attribute node
     * 
     * Returns the attribute node in namespace namespaceURI with local name localName
     * for the current node.
     *
     * @param namespaceURI The namespace URI.
     * @param localName The local name.
     * @return The attribute node.
     */
    getAttributeNodeNS(namespaceURI: string, localName: string): DOMAttr;
    
    /**
     * Returns value of attribute
     * 
     * Gets the value of the attribute in namespace namespaceURI with local name
     * localName for the current node.
     *
     * @param namespaceURI The namespace URI.
     * @param localName The local name.
     * @return The value of the attribute, or an empty string if no attribute with the
     *         given localName and namespaceURI is found.
     */
    getAttributeNS(namespaceURI: string, localName: string): string;
    
    /**
     * Gets elements by tagname
     * 
     * This function returns a new instance of the class DOMNodeList of all descendant
     * elements with a given tag name, in the order in which they are encountered in a
     * preorder traversal of this element tree.
     *
     * @param name The tag name. Use * to return all elements within the element tree.
     * @return This function returns a new instance of the class DOMNodeList of all
     *         matched elements.
     */
    getElementsByTagName(name: string): DOMNodeList;
    
    /**
     * Get elements by namespaceURI and localName
     * 
     * This function fetch all the descendant elements with a given localName and
     * namespaceURI.
     *
     * @param namespaceURI The namespace URI.
     * @param localName The local name. Use * to return all elements within the
     *                  element tree.
     * @return This function returns a new instance of the class DOMNodeList of all
     *         matched elements in the order in which they are encountered in a
     *         preorder traversal of this element tree.
     */
    getElementsByTagNameNS(namespaceURI: string, localName: string): DOMNodeList;
    
    /**
     * Checks to see if attribute exists
     * 
     * Indicates whether attribute named name exists as a member of the element.
     *
     * @param name The attribute name.
     */
    hasAttribute(name: string): bool;
    
    /**
     * Checks to see if attribute exists
     * 
     * Indicates whether attribute in namespace namespaceURI named localName exists as
     * a member of the element.
     *
     * @param namespaceURI The namespace URI.
     * @param localName The local name.
     */
    hasAttributeNS(namespaceURI: string, localName: string): bool;
    
    /**
     * Removes attribute
     * 
     * Removes attribute named name from the element.
     *
     * @param name The name of the attribute.
     */
    removeAttribute(name: string): bool;
    
    /**
     * Removes attribute
     * 
     * Removes attribute oldnode from the element.
     *
     * @param oldnode The attribute node.
     */
    removeAttributeNode(oldnode: DOMAttr): bool;
    
    /**
     * Removes attribute
     * 
     * Removes attribute is namespace namespaceURI named localName from the element.
     *
     * @param namespaceURI The namespace URI.
     * @param localName The local name.
     */
    removeAttributeNS(namespaceURI: string, localName: string): bool;
    
    /**
     * Adds new attribute
     * 
     * Sets an attribute with name name to the given value. If the attribute does not
     * exist, it will be created.
     *
     * @param name The name of the attribute.
     * @param value The value of the attribute.
     * @return The new DOMAttr or false if an error occured.
     */
    setAttribute(name: string, value: string): DOMAttr;
    
    /**
     * Adds new attribute node to element
     * 
     * Adds new attribute node attr to element.
     *
     * @param attr The attribute node.
     * @return Returns old node if the attribute has been replaced or .
     */
    setAttributeNode(attr: DOMAttr): DOMAttr;
    
    /**
     * Adds new attribute node to element
     * 
     * Adds new attribute node attr to element.
     *
     * @param attr The attribute node.
     * @return Returns the old node if the attribute has been replaced.
     */
    setAttributeNodeNS(attr: DOMAttr): DOMAttr;
    
    /**
     * Adds new attribute
     * 
     * Sets an attribute with namespace namespaceURI and name name to the given value.
     * If the attribute does not exist, it will be created.
     *
     * @param namespaceURI The namespace URI.
     * @param qualifiedName The qualified name of the attribute, as prefix:tagname.
     * @param value The value of the attribute.
     */
    setAttributeNS(namespaceURI: string, qualifiedName: string, value: string);
    
    /**
     * Declares the attribute specified by name to be of type ID
     * 
     * Declares the attribute name to be of type ID.
     *
     * @param name The name of the attribute.
     * @param isId Set it to true if you want name to be of type ID, false otherwise.
     */
    setIdAttribute(name: string, isId: bool);
    
    /**
     * Declares the attribute specified by node to be of type ID
     * 
     * Declares the attribute specified by attr to be of type ID.
     *
     * @param attr The attribute node.
     * @param isId Set it to true if you want name to be of type ID, false otherwise.
     */
    setIdAttributeNode(attr: DOMAttr, isId: bool);
    
    /**
     * Declares the attribute specified by local name and namespace URI to be of type
     * ID
     * 
     * Declares the attribute specified by localName and namespaceURI to be of type ID.
     *
     * @param namespaceURI The namespace URI of the attribute.
     * @param localName The local name of the attribute, as prefix:tagname.
     * @param isId Set it to true if you want name to be of type ID, false otherwise.
     */
    setIdAttributeNS(namespaceURI: string, localName: string, isId: bool);
}


/**
 * This interface represents a known entity, either parsed or unparsed, in an XML
 * document.
 */
class DOMEntity extends DOMNode {
    
    /**
     * The public identifier associated with the entity if specified, and otherwise.
     */
    publicId: string;
    
    /**
     * The system identifier associated with the entity if specified, and otherwise.
     * This may be an absolute URI or not.
     */
    systemId: string;
    
    /**
     * For unparsed entities, the name of the notation for the entity. For parsed
     * entities, this is .
     */
    notationName: string;
    
    /**
     * An attribute specifying the encoding used for this entity at the time of
     * parsing, when it is an external parsed entity. This is if it an entity from the
     * internal subset or if it is not known.
     */
    actualEncoding: string;
    
    /**
     * An attribute specifying, as part of the text declaration, the encoding of this
     * entity, when it is an external parsed entity. This is  otherwise.
     */
    encoding: string;
    
    /**
     * An attribute specifying, as part of the text declaration, the version number of
     * this entity, when it is an external parsed entity. This is  otherwise.
     */
    version: string;
}

class DOMEntityReference extends DOMNode {
    
    /**
     * Creates a new DOMEntityReference object
     * 
     * Creates a new DOMEntityReference object.
     *
     * @param name The name of the entity reference.
     */
    constructor(name: string);
}

class DOMException extends Exception {
    code: number;
}


/**
 * The DOMImplementation interface provides a number of methods for performing
 * operations that are independent of any particular instance of the document
 * object model.
 */
class DOMImplementation {
    
    /**
     * Creates a DOMDocument object of the specified type with its document element
     * 
     * Creates a DOMDocument object of the specified type with its document element.
     *
     * @param namespaceURI The namespace URI of the document element to create.
     * @param qualfiiedName
     * @param doctype The type of document to create or .
     * @return A new DOMDocument object. If namespaceURI, qualifiedName, and doctype
     *         are null, the returned DOMDocument is empty with no document element
     */
    createDocument(namespaceURI?: string, qualfiiedName?: string, doctype?: DOMDocumentType): DOMDocument;
    
    /**
     * Creates an empty DOMDocumentType object
     * 
     * Creates an empty DOMDocumentType object. Entity declarations and notations are
     * not made available. Entity reference expansions and default attribute additions
     * do not occur.
     *
     * @param qualifiedName The qualified name of the document type to create.
     * @param publicId The external subset public identifier.
     * @param systemId The external subset system identifier.
     * @return A new DOMDocumentType node with its ownerDocument set to .
     */
    createDocumentType(qualifiedName?: string, publicId?: string, systemId?: string): DOMDocumentType;
    
    /**
     * Test if the DOM implementation implements a specific feature
     * 
     * Test if the DOM implementation implements a specific feature.
     * 
     * You can find a list of all features in the Conformance section of the DOM
     * specification.
     *
     * @param feature The feature to test.
     * @param version The version number of the feature to test. In level 2, this can
     *                be either 2.0 or 1.0.
     */
    hasFeature(feature: string, version: string): bool;
}

class DOMNamedNodeMap implements Traversable {
    
    /**
     * The number of nodes in the map. The range of valid child node indices is 0 to
     * length - 1 inclusive.
     */
    length: number;

    
    /**
     * Retrieves a node specified by name
     * 
     * Retrieves a node specified by its nodeName.
     *
     * @param name The nodeName of the node to retrieve.
     * @return A node (of any type) with the specified nodeName, or if no node is
     *         found.
     */
    getNamedItem(name: string): DOMNode;
    
    /**
     * Retrieves a node specified by local name and namespace URI
     * 
     * Retrieves a node specified by localName and namespaceURI.
     *
     * @param namespaceURI The namespace URI of the node to retrieve.
     * @param localName The local name of the node to retrieve.
     * @return A node (of any type) with the specified local name and namespace URI,
     *         or if no node is found.
     */
    getNamedItemNS(namespaceURI: string, localName: string): DOMNode;
    
    /**
     * Retrieves a node specified by index
     * 
     * Retrieves a node specified by index within the DOMNamedNodeMap object.
     *
     * @param index Index into this map.
     * @return The node at the indexth position in the map, or if that is not a valid
     *         index (greater than or equal to the number of nodes in this map).
     */
    item(index: number): DOMNode;
}

class DOMNodeList implements Traversable {
    
    /**
     * The number of nodes in the list. The range of valid child node indices is 0 to
     * length - 1 inclusive.
     */
    length: number;

    
    /**
     * Retrieves a node specified by index
     * 
     * Retrieves a node specified by index within the DOMNodeList object.
     * 
     * If you need to know the number of nodes in the collection, use the length
     * property of the DOMNodeList object.
     *
     * @param index Index of the node into the collection.
     * @return The node at the indexth position in the DOMNodeList, or  if that is not
     *         a valid index.
     */
    item(index: number): DOMNode;
}

class DOMNotation extends DOMNode {
    
    /**
     * Prop description
     */
    publicId: string;
    
    /**
     * Prop description
     */
    systemId: string;
}

class DOMProcessingInstruction extends DOMNode {
    
    /**
     * Prop description
     */
    target: string;
    
    /**
     * Prop description
     */
    data: string;

    
    /**
     * Creates a new DOMProcessingInstruction object
     * 
     * Creates a new DOMProcessingInstruction object. This object is read only. It may
     * be appended to a document, but additional nodes may not be appended to this node
     * until the node is associated with a document. To create a writeable node, use .
     *
     * @param name The tag name of the processing instruction.
     * @param value The value of the processing instruction.
     */
    constructor(name: string, value?: string);
}


/**
 * Supports XPath 1.0
 */
class DOMXPath {
    
    /**
     * Prop description
     */
    document: DOMDocument;

    
    /**
     * Creates a new DOMXPath object
     * 
     * Creates a new DOMXPath object.
     *
     * @param doc The DOMDocument associated with the DOMXPath.
     */
    constructor(doc: DOMDocument);
    
    /**
     * Evaluates the given XPath expression and returns a typed result if possible
     * 
     * Executes the given XPath expression and returns a typed result if possible.
     *
     * @param expression The XPath expression to execute.
     * @param contextnode The optional contextnode can be specified for doing relative
     *                    XPath queries. By default, the queries are relative to the
     *                    root element.
     * @param registerNodeNS The optional registerNodeNS can be specified to disable
     *                       automatic registration of the context node.
     * @return Returns a typed result if possible or a DOMNodeList containing all
     *         nodes matching the given XPath expression.
     *         
     *         If the expression is malformed or the contextnode is invalid,
     *         DOMXPath::evaluate returns false.
     */
    evaluate(expression: string, contextnode?: DOMNode, registerNodeNS?: bool): any;
    
    /**
     * Evaluates the given XPath expression
     * 
     * Executes the given XPath expression.
     *
     * @param expression The XPath expression to execute.
     * @param contextnode The optional contextnode can be specified for doing relative
     *                    XPath queries. By default, the queries are relative to the
     *                    root element.
     * @param registerNodeNS The optional registerNodeNS can be specified to disable
     *                       automatic registration of the context node.
     * @return Returns a DOMNodeList containing all nodes matching the given XPath
     *         expression. Any expression which does not return nodes will return an
     *         empty DOMNodeList.
     *         
     *         If the expression is malformed or the contextnode is invalid,
     *         DOMXPath::query returns false.
     */
    query(expression: string, contextnode?: DOMNode, registerNodeNS?: bool): DOMNodeList;
    
    /**
     * Registers the namespace with the DOMXPath object
     * 
     * Registers the namespaceURI and prefix with the DOMXPath object.
     *
     * @param prefix The prefix.
     * @param namespaceURI The URI of the namespace.
     */
    registerNamespace(prefix: string, namespaceURI: string): bool;
    
    /**
     * Register PHP functions as XPath functions
     * 
     * This method enables the ability to use PHP functions within XPath expressions.
     *
     * @param restrict Use this parameter to only allow certain functions to be called
     *                 from XPath.
     *                 
     *                 This parameter can be either a string (a function name) or an
     *                 array of function names.
     */
    registerPhpFunctions(restrict?: string);
    
    /**
     * Register PHP functions as XPath functions
     * 
     * This method enables the ability to use PHP functions within XPath expressions.
     *
     * @param restrict Use this parameter to only allow certain functions to be called
     *                 from XPath.
     *                 
     *                 This parameter can be either a string (a function name) or an
     *                 array of function names.
     */
    registerPhpFunctions(restrict: string[]);
}


/**
 * Gets a DOMElement object from a SimpleXMLElement object
 * 
 * This function takes the node node of class SimpleXML and makes it into a
 * DOMElement node. This new object can then be used as a native DOMElement node.
 *
 * @param node The SimpleXMLElement node.
 * @return The DOMElement node added or false if any errors occur.
 */
function dom_import_simplexml(node: SimpleXMLElement): DOMElement;

//--------------------------------------------------------------------------------
// errorfunc
//--------------------------------------------------------------------------------

/*
 * These are functions dealing with error handling and logging. They allow you to
 * define your own error handling rules, as well as modify the way the errors can
 * be logged. This allows you to change and enhance error reporting to suit your
 * needs.
 * 
 * With the logging functions, you can send messages directly to other machines, to
 * an email (or email to pager gateway!), to system logs, etc., so you can
 * selectively log and monitor the most important parts of your applications and
 * websites.
 * 
 * The error reporting functions allow you to customize what level and kind of
 * error feedback is given, ranging from simple notices to customized functions
 * returned during errors.
 */
var E_ERROR: number;
var E_WARNING: number;
var E_PARSE: number;
var E_NOTICE: number;
var E_CORE_ERROR: number;
var E_CORE_WARNING: number;
var E_COMPILE_ERROR: number;
var E_COMPILE_WARNING: number;
var E_USER_ERROR: number;
var E_USER_WARNING: number;
var E_USER_NOTICE: number;
var E_STRICT: number;
var E_RECOVERABLE_ERROR: number;
var E_DEPRECATED: number;
var E_USER_DEPRECATED: number;
var E_ALL: number;
var DEBUG_BACKTRACE_PROVIDE_OBJECT: number;
var DEBUG_BACKTRACE_IGNORE_ARGS: number;


/**
 * Generates a backtrace
 * 
 * debug_backtrace generates a PHP backtrace.
 *
 * @param options As of 5.3.6, this parameter is a bitmask for the following
 *                options:  debug_backtrace options   
 *                DEBUG_BACKTRACE_PROVIDE_OBJECT  Whether or not to populate the
 *                "object" index.    DEBUG_BACKTRACE_IGNORE_ARGS  Whether or not
 *                to omit the "args" index, and thus all the function/method
 *                arguments, to save memory.      Before 5.3.6, the only values
 *                recognized are true or false, which are the same as setting or
 *                not setting the DEBUG_BACKTRACE_PROVIDE_OBJECT option
 *                respectively.
 * @param limit As of 5.4.0, this parameter can be used to limit the number of
 *              stack frames returned. By default (limit=0) it returns all stack
 *              frames.
 * @return Returns an array of associative arrays. The possible returned elements
 *         are as follows:
 *         
 *         Possible returned elements from debug_backtrace           function
 *         string  The current function name.  See also __FUNCTION__.    line
 *         integer  The current line number.  See also __LINE__.    file string 
 *         The current file name.  See also __FILE__.    class string  The current
 *         class name.  See also __CLASS__    object object  The current object.  
 *         type string  The current call type. If a method call, "-&gt;" is
 *         returned. If a static method call, "::" is returned. If a function
 *         call, nothing is returned.    args array  If inside a function, this
 *         lists the functions arguments.  If inside an included file, this lists
 *         the included file name(s).
 */
function debug_backtrace(options?: number, limit?: number): Pct.PhpAssocArray;

/**
 * Prints a backtrace
 * 
 * debug_print_backtrace prints a PHP backtrace. It prints the function calls,
 * included/required files and evaled stuff.
 *
 * @param options As of 5.3.6, this parameter is a bitmask for the following
 *                options:  debug_print_backtrace options   
 *                DEBUG_BACKTRACE_IGNORE_ARGS  Whether or not to omit the "args"
 *                index, and thus all the function/method arguments, to save
 *                memory.
 * @param limit As of 5.4.0, this parameter can be used to limit the number of
 *              stack frames printed. By default (limit=0) it prints all stack
 *              frames.
 */
function debug_print_backtrace(options?: number, limit?: number);

/**
 * Get the last occurred error
 * 
 * Gets information about the last error that occurred.
 * @return Returns an associative array describing the last error with keys
 *         "type", "message", "file" and "line". If the error has been caused by a
 *         PHP internal function then the "message" begins with its name. Returns 
 *         if there hasn't been an error yet.
 */
function error_get_last(): Pct.PhpAssocArray;

/**
 * Send an error message somewhere
 * 
 * Sends an error message to the web server's error log or to a file.
 *
 * @param message The error message that should be logged.
 * @param message_type Says where the error should go. The possible message types
 *                     are as follows:
 *                     
 *                     error_log log types    0  message is sent to PHP's system
 *                     logger, using the Operating System's system logging
 *                     mechanism or a file, depending on what the error_log
 *                     configuration directive is set to.  This is the default
 *                     option.    1  message is sent by email to the address in
 *                     the destination parameter.  This is the only message type
 *                     where the fourth parameter, extra_headers is used.    2  No
 *                     longer an option.    3  message is appended to the file
 *                     destination. A newline is not automatically added to the
 *                     end of the message string.    4  message is sent directly
 *                     to the SAPI logging handler.
 * @param destination The destination. Its meaning depends on the message_type
 *                    parameter as described above.
 * @param extra_headers The extra headers. It's used when the message_type
 *                      parameter is set to 1. This message type uses the same
 *                      internal function as mail does.
 */
function error_log(message: string, message_type?: number, destination?: string, extra_headers?: string): bool;

/**
 * Sets which PHP errors are reported
 * 
 * The error_reporting function sets the error_reporting directive at runtime.  PHP
 * has many levels of errors, using this function sets that level for the duration
 * (runtime) of your script. If the optional level is not set, error_reporting will
 * just return the current error reporting level.
 *
 * @param level The new error_reporting level. It takes on either a bitmask, or
 *              named constants. Using named constants is strongly encouraged to
 *              ensure compatibility for future versions. As error levels are
 *              added, the range of integers increases, so older integer-based
 *              error levels will not always behave as expected.
 *              
 *              The available error level constants and the actual meanings of
 *              these error levels are described in the predefined constants.
 * @return Returns the old error_reporting level or the current level if no level
 *         parameter is given.
 */
function error_reporting(level?: number): number;

/**
 * Restores the previous error handler function
 * 
 * Used after changing the error handler function using set_error_handler, to
 * revert to the previous error handler (which could be the built-in or a user
 * defined function).
 * @return This function always returns true.
 */
function restore_error_handler(): bool;

/**
 * Restores the previously defined exception handler function
 * 
 * Used after changing the exception handler function using set_exception_handler,
 * to revert to the previous exception handler (which could be the built-in or a
 * user defined function).
 * @return This function always returns true.
 */
function restore_exception_handler(): bool;

/**
 * Sets a user-defined error handler function
 * 
 * Sets a user function (error_handler) to handle errors in a script.
 * 
 * This function can be used for defining your own way of handling errors during
 * runtime, for example in applications in which you need to do cleanup of
 * data/files when a critical error happens, or when you need to trigger an error
 * under certain conditions (using trigger_error).
 * 
 * It is important to remember that the standard PHP error handler is completely
 * bypassed for the error types specified by error_types unless the callback
 * function returns false. error_reporting settings will have no effect and your
 * error handler will be called regardless - however you are still able to read the
 * current value of error_reporting and act appropriately. Of particular note is
 * that this value will be 0 if the statement that caused the error was prepended
 * by the @ error-control operator.
 * 
 * Also note that it is your responsibility to die if necessary. If the
 * error-handler function returns, script execution will continue with the next
 * statement after the one that caused an error.
 * 
 * The following error types cannot be handled with a user defined function:
 * E_ERROR, E_PARSE, E_CORE_ERROR, E_CORE_WARNING, E_COMPILE_ERROR,
 * E_COMPILE_WARNING, and most of E_STRICT raised in the file where
 * set_error_handler is called.
 * 
 * If errors occur before the script is executed (e.g. on file uploads) the custom
 * error handler cannot be called since it is not registered at that time.
 *
 * @param error_handler The user function needs to accept two parameters: the
 *                      error code, and a string describing the error. Then there
 *                      are three optional parameters that may be supplied: the
 *                      filename in which the error occurred, the line number in
 *                      which the error occurred, and the context in which the
 *                      error occurred (an array that points to the active symbol
 *                      table at the point the error occurred).  The function can
 *                      be shown as:
 *                      
 *                      handler interrno stringerrstr stringerrfile interrline
 *                      arrayerrcontext    errno   The first parameter, errno,
 *                      contains the level of the error raised, as an integer.    
 *                      errstr   The second parameter, errstr, contains the error
 *                      message, as a string.     errfile   The third parameter is
 *                      optional, errfile, which contains the filename that the
 *                      error was raised in, as a string.     errline   The fourth
 *                      parameter is optional, errline, which contains the line
 *                      number the error was raised at, as an integer.    
 *                      errcontext   The fifth parameter is optional, errcontext,
 *                      which is an array that points to the active symbol table
 *                      at the point the error occurred.  In other words,
 *                      errcontext will contain an array of every variable that
 *                      existed in the scope the error was triggered in. User
 *                      error handler must not modify error context.
 *                      
 *                      If the function returns false then the normal error
 *                      handler continues.
 * @param error_types Can be used to mask the triggering of the error_handler
 *                    function just like the error_reporting ini setting controls
 *                    which errors are shown. Without this mask set the
 *                    error_handler will be called for every error regardless to
 *                    the setting of the error_reporting setting.
 * @return Returns a string containing the previously defined error handler (if
 *         any). If the built-in error handler is used  is returned.  is also
 *         returned in case of an error such as an invalid callback. If the
 *         previous error handler was a class method, this function will return an
 *         indexed array with the class and the method name.
 */
function set_error_handler(error_handler: (errno: number, errstr: string, errfile?: string, errline?: number, errcontext?: Array) => bool, error_types?: number): any;

/**
 * Sets a user-defined exception handler function
 * 
 * Sets the default exception handler if an exception is not caught within a
 * try/catch block. Execution will stop after the exception_handler is called.
 *
 * @param exception_handler Name of the function to be called when an uncaught
 *                          exception occurs. This function must be defined before
 *                          calling set_exception_handler. This handler function
 *                          needs to accept one parameter, which will be the
 *                          exception object that was thrown.
 *                          
 *                          may be passed instead, to reset this handler to its
 *                          default state.
 * @return Returns the name of the previously defined exception handler, or  on
 *         error. If no previous handler was defined,  is also returned. If  is
 *         passed, resetting the handler to its default state, true is returned.
 */
function set_exception_handler(exception_handler: (exception: Exception) => void): any;

/**
 * Generates a user-level error/warning/notice message
 * 
 * Used to trigger a user error condition, it can be used by in conjunction with
 * the built-in error handler, or with a user defined function that has been set as
 * the new error handler (set_error_handler).
 * 
 * This function is useful when you need to generate a particular response to an
 * exception at runtime.
 *
 * @param error_msg The designated error message for this error. It's limited to
 *                  1024 characters in length. Any additional characters beyond
 *                  1024 will be truncated.
 * @param error_type The designated error type for this error. It only works with
 *                   the E_USER family of constants, and will default to
 *                   E_USER_NOTICE.
 * @return This function returns false if wrong error_type is specified, true
 *         otherwise.
 */
function trigger_error(error_msg: string, error_type?: number): bool;

//--------------------------------------------------------------------------------
// exec
//--------------------------------------------------------------------------------

/*
 * Those functions provide means to execute commands on the system itself, and
 * means to secure such commands.
 */

/**
 * Escape a string to be used as a shell argument
 * 
 * escapeshellarg adds single quotes around a string and quotes/escapes any
 * existing single quotes allowing you to pass a string directly to a shell
 * function and having it be treated as a single safe argument.  This function
 * should be used to escape individual arguments to shell functions coming from
 * user input.  The shell functions include exec, system and the backtick operator.
 * 
 *
 * @param arg The argument that will be escaped.
 * @return The escaped string.
 */
declare function escapeshellarg(arg: string): string;

/**
 * Escape shell metacharacters
 * 
 * escapeshellcmd escapes any characters in a string that might be used to trick a
 * shell command into executing arbitrary commands.  This function should be used
 * to make sure that any data coming from user input is escaped before this data is
 * passed to the exec or system functions, or to the backtick operator.
 * 
 * Following characters are preceded by a backslash: #;`|*?~^()[]{}$\, \x0A and
 * \xFF. ' and " are escaped only if they are not paired. In Windows, all these
 * characters plus % are replaced by a space instead.
 *
 * @param command The command that will be escaped.
 * @return The escaped string.
 */
declare function escapeshellcmd(command: string): string;

/**
 * Execute an external program
 * 
 * exec executes the given command.
 *
 * @param command The command that will be executed.
 * @param $output If the output argument is present, then the specified array will
 *                be filled with every line of output from the command.  Trailing
 *                whitespace, such as \n, is not included in this array.  Note
 *                that if the array already contains some elements, exec will
 *                append to the end of the array. If you do not want the function
 *                to append elements, call unset on the array before passing it to
 *                exec.
 * @param $return_var If the return_var argument is present along with the output
 *                    argument, then the return status of the executed command
 *                    will be written to this variable.
 * @return The last line from the result of the command.  If you need to execute a
 *         command and have all the data from the command passed directly back
 *         without any interference, use the passthru function.
 *         
 *         To get the output of the executed command, be sure to set and use the
 *         output parameter.
 */
declare function exec(command: string, $output?: string[], $return_var?: number): string;

/**
 * Execute an external program and display raw output
 * 
 * The passthru function is similar to the exec function in that it executes a
 * command. This function should be used in place of exec or system when the output
 * from the Unix command is binary data which needs to be passed directly back to
 * the browser.  A common use for this is to execute something like the pbmplus
 * utilities that can output an image stream directly.  By setting the Content-type
 * to image/gif and then calling a pbmplus program to output a gif, you can create
 * PHP scripts that output images directly.
 *
 * @param command The command that will be executed.
 * @param $return_var If the return_var argument is present, the return status of
 *                    the Unix command will be placed here.
 */
declare function passthru(command: string, $return_var?: number);

/**
 * Close a process opened by proc_open and return the exit code of that process
 * 
 * proc_close is similar to pclose except that it only works on processes opened by
 * proc_open. proc_close waits for the process to terminate, and returns its exit
 * code.  If you have open pipes to that process, you should fclose them prior to
 * calling this function in order to avoid a deadlock - the child process may not
 * be able to exit while the pipes are open.
 *
 * @param process The proc_open resource that will be closed.
 * @return Returns the termination status of the process that was run. In case of
 *         an error then -1 is returned.
 */
declare function proc_close(process: Pct.PhpResource): number;

/**
 * Get information about a process opened by proc_open
 * 
 * proc_get_status fetches data about a process opened using proc_open.
 *
 * @param process The proc_open resource that will be evaluated.
 * @return An array of collected information on success, and false on failure. The
 *         returned array contains the following elements:
 *         
 *         elementtypedescription    command string  The command string that was
 *         passed to proc_open.    pid int process id   running bool  true if the
 *         process is still running, false if it has terminated.    signaled bool 
 *         true if the child process has been terminated by an uncaught signal.
 *         Always set to false on Windows.    stopped bool  true if the child
 *         process has been stopped by a signal. Always set to false on Windows.  
 *         exitcode int  The exit code returned by the process (which is only
 *         meaningful if running is false). Only first call of this function
 *         return real value, next calls return -1.    termsig int  The number of
 *         the signal that caused the child process to terminate its execution
 *         (only meaningful if signaled is true).    stopsig int  The number of
 *         the signal that caused the child process to stop its execution (only
 *         meaningful if stopped is true).
 */
declare function proc_get_status(process: Pct.PhpResource): Pct.PhpAssocArray;

/**
 * Change the priority of the current process
 * 
 * proc_nice changes the priority of the current process by the amount specified in
 * increment. A positive increment will lower the priority of the current process,
 * whereas a negative increment will raise the priority.
 * 
 * proc_nice is not related to proc_open and its associated functions in any way.
 *
 * @param increment The increment value of the priority change.
 * @return If an error occurs, like the user lacks permission to change the
 *         priority, an error of level E_WARNING is also generated.
 */
declare function proc_nice(increment: number): bool;

/**
 * Execute a command and open file pointers for input/output
 * 
 * proc_open is similar to popen but provides a much greater degree of control over
 * the program execution.
 *
 * @param cmd The command to execute
 * @param descriptorspec An indexed array where the key represents the descriptor
 *                       number and the value represents how PHP will pass that
 *                       descriptor to the child process. 0 is stdin, 1 is stdout,
 *                       while 2 is stderr.
 *                       
 *                       Each element can be:  An array describing the pipe to
 *                       pass to the process. The first element is the descriptor
 *                       type and the second element is an option for the given
 *                       type. Valid types are pipe (the second element is either
 *                       r to pass the read end of the pipe to the process, or w
 *                       to pass the write end) and file (the second element is a
 *                       filename).   A stream resource representing a real file
 *                       descriptor (e.g. opened file, a socket, STDIN).
 *                       
 *                       The file descriptor numbers are not limited to 0, 1 and 2
 *                       - you may specify any valid file descriptor number and it
 *                       will be passed to the child process. This allows your
 *                       script to interoperate with other scripts that run as
 *                       "co-processes". In particular, this is useful for passing
 *                       passphrases to programs like PGP, GPG and openssl in a
 *                       more secure manner. It is also useful for reading status
 *                       information provided by those programs on auxiliary file
 *                       descriptors.
 * @param $pipes Will be set to an indexed array of file pointers that correspond
 *               to PHP's end of any pipes that are created.
 * @param cwd The initial working dir for the command. This must be an absolute
 *            directory path, or if you want to use the default value (the working
 *            dir of the current PHP process)
 * @param env An array with the environment variables for the command that will be
 *            run, or  to use the same environment as the current PHP process
 * @param other_options Allows you to specify additional options. Currently
 *                      supported options include:   suppress_errors (windows
 *                      only): suppresses errors generated by this function when
 *                      it's set to true   bypass_shell (windows only): bypass
 *                      cmd.exe shell when set to true
 * @return Returns a resource representing the process, which should be freed
 *         using proc_close when you are finished with it. On failure returns
 *         false.
 */
declare function proc_open(cmd: string, descriptorspec: Array, $pipes: number[], cwd?: string, env?: Pct.PhpAssocArray, other_options?: Pct.PhpAssocArray): Pct.PhpResource;

/**
 * Kills a process opened by proc_open
 * 
 * Signals a process (created using proc_open) that it should terminate.
 * proc_terminate returns immediately and does not wait for the process to
 * terminate.
 * 
 * proc_terminate allows you terminate the process and continue with other tasks. 
 * You may poll the process (to see if it has stopped yet) by using the
 * proc_get_status function.
 *
 * @param process The proc_open resource that will be closed.
 * @param signal This optional parameter is only useful on POSIX operating
 *               systems; you may specify a signal to send to the process using
 *               the kill(2) system call.  The default is SIGTERM.
 * @return Returns the termination status of the process that was run.
 */
declare function proc_terminate(process: Pct.PhpResource, signal?: number): bool;

/**
 * Execute command via shell and return the complete output as a string
 * 
 * This function is identical to the backtick operator.
 *
 * @param cmd The command that will be executed.
 * @return The output from the executed command or  if an error occurred.
 */
declare function shell_exec(cmd: string): string;

/**
 * Execute an external program and display the output
 * 
 * system is just like the C version of the function in that it executes the given
 * command and outputs the result.
 * 
 * The system call also tries to automatically flush the web server's output buffer
 * after each line of output if PHP is running as a server module.
 * 
 * If you need to execute a command and have all the data from the command passed
 * directly back without any interference, use the passthru function.
 *
 * @param command The command that will be executed.
 * @param $return_var If the return_var argument is present, then the return
 *                    status of the executed command will be written to this
 *                    variable.
 * @return Returns the last line of the command output on success, and false on
 *         failure.
 */
declare function system(command: string, $return_var?: number): string;

//--------------------------------------------------------------------------------
// fileinfo
//--------------------------------------------------------------------------------

/*
 * The functions in this module try to guess the content type and encoding of a
 * file by looking for certain magic byte sequences at specific positions within
 * the file. While this is not a bullet proof approach the heuristics used do a
 * very good job.
 */

/**
 * Decompress compressed files. Disabled since PHP 5.3.0 due to thread safety
 * issues.
 */
declare var FILEINFO_COMPRESS: number;

/**
 * Return all matches, not just the first.
 */
declare var FILEINFO_CONTINUE: number;

/**
 * Look at the contents of blocks or character special devices.
 */
declare var FILEINFO_DEVICES: number;

/**
 * Return the mime type and mime encoding as defined by RFC 2045.
 */
declare var FILEINFO_MIME: number;

/**
 * Return the mime encoding of the file. Available since PHP 5.3.0.
 */
declare var FILEINFO_MIME_ENCODING: number;

/**
 * Return the mime type. Available since PHP 5.3.0.
 */
declare var FILEINFO_MIME_TYPE: number;

/**
 * No special handling.
 */
declare var FILEINFO_NONE: number;

/**
 * If possible preserve the original access time.
 */
declare var FILEINFO_PRESERVE_ATIME: number;

/**
 * Don't translate unprintable characters to a \ooo octal representation.
 */
declare var FILEINFO_RAW: number;

/**
 * Follow symlinks.
 */
declare var FILEINFO_SYMLINK: number;

declare class finfo {
    constructor(options?: number, magic_file?: string);
    buffer(string_?: string, options?: number, context?: Pct.PhpResource): string;
    file(file_name?: string, options?: number, context?: Pct.PhpResource): string;
    set_flags(options: number): bool;
}


/**
 * Return information about a string buffer
 * 
 * This function is used to get information about binary data in a string.
 *
 * @param finfo Fileinfo resource returned by finfo_open.
 * @param string_ Content of a file to be checked.
 * @param options One or disjunction of more Fileinfo constants.
 * @param context 
 * @return Returns a textual description of the string argument, or false if an
 *         error occurred.
 */
declare function finfo_buffer(finfo: Pct.PhpResource, string_?: string, options?: number, context?: Pct.PhpResource): string;

/**
 * Close fileinfo resource
 * 
 * This function closes the resource opened by finfo_open.
 *
 * @param finfo Fileinfo resource returned by finfo_open.
 */
declare function finfo_close(finfo: Pct.PhpResource): bool;

/**
 * Return information about a file
 * 
 * This function is used to get information about a file.
 *
 * @param finfo Fileinfo resource returned by finfo_open.
 * @param file_name Name of a file to be checked.
 * @param options One or disjunction of more Fileinfo constants.
 * @param context For a description of contexts, refer to .
 * @return Returns a textual description of the contents of the filename argument,
 *         or false if an error occurred.
 */
declare function finfo_file(finfo: Pct.PhpResource, file_name?: string, options?: number, context?: Pct.PhpResource): string;

/**
 * Create a new fileinfo resource
 * 
 * (constructor):
 * 
 * This function opens a magic database and returns its resource.
 *
 * @param options One or disjunction of more Fileinfo constants.
 * @param magic_file Name of a magic database file, usually something like
 *                   /path/to/magic.mime. If not specified, the MAGIC environment
 *                   variable is used. If this variable is not set either,
 *                   /usr/share/misc/magic is used by default. A .mime and/or .mgc
 *                   suffix is added if needed.
 *                   
 *                   Passing NULL or an empty string will be equivalent to the
 *                   default value.
 * @return (Procedural style only) Returns a magic database resource on success.
 */
declare function finfo_open(options?: number, magic_file?: string): Pct.PhpResource;

/**
 * Set libmagic configuration options
 * 
 * This function sets various Fileinfo options. Options can be set also directly in
 * finfo_open or other Fileinfo functions.
 *
 * @param finfo Fileinfo resource returned by finfo_open.
 * @param options One or disjunction of more Fileinfo constants.
 */
declare function finfo_set_flags(finfo: Pct.PhpResource, options: number): bool;

/**
 * Detect MIME Content-type for a file (deprecated)
 * 
 * Returns the MIME content type for a file as determined by using information from
 * the magic.mime file.
 *
 * @param filename Path to the tested file.
 * @return Returns the content type in MIME format, like text/plain or
 *         application/octet-stream.
 */
declare function mime_content_type(filename: string): string;

//--------------------------------------------------------------------------------
// filesystem
//--------------------------------------------------------------------------------

/*
 * No external libraries are needed to build this extension, but if you want PHP to
 * support LFS (large files) on Linux, then you need to have a recent glibc and you
 * need compile PHP with the following compiler flags: -D_LARGEFILE_SOURCE
 * -D_FILE_OFFSET_BITS=64.
 */

/**
 * Append content to existing file.
 */
declare var FILE_APPEND: number;
declare var FILE_BINARY: number;

/**
 * Strip EOL characters (since PHP 5).
 */
declare var FILE_IGNORE_NEW_LINES: number;
declare var FILE_NO_DEFAULT_CONTEXT: number;

/**
 * Skip empty lines (since PHP 5).
 */
declare var FILE_SKIP_EMPTY_LINES: number;

/**
 * Search for filename in include_path (since PHP 5).
 */
declare var FILE_USE_INCLUDE_PATH: number;

declare var GLOB_AVAILABLE_FLAGS: number;
declare var GLOB_BRACE: number;
declare var GLOB_MARK: number;
declare var GLOB_NOCHECK: number;
declare var GLOB_NOESCAPE: number;
declare var GLOB_NOSORT: number;
declare var GLOB_ONLYDIR: number;

declare var LOCK_EX: number;
declare var LOCK_NB: number;
declare var LOCK_SH: number;
declare var LOCK_UN: number;

declare var PATHINFO_BASENAME: number;
declare var PATHINFO_DIRNAME: number;
declare var PATHINFO_EXTENSION: number;

/**
 * Since PHP 5.2.0.
 */
declare var PATHINFO_FILENAME: number;

declare var SEEK_CUR: number;
declare var SEEK_END: number;
declare var SEEK_SET: number;


/**
 * Returns trailing name component of path
 * 
 * Given a string containing the path to a file or directory, this function will
 * return the trailing name component.
 *
 * @param path A path.
 *             
 *             On Windows, both slash (/) and backslash (\) are used as directory
 *             separator character. In other environments, it is the forward slash
 *             (/).
 * @param suffix If the name component ends in suffix this will also be cut off.
 * @return Returns the base name of the given path.
 */
declare function basename(path: string, suffix?: string): string;

/**
 * Changes file group
 * 
 * Attempts to change the group of the file filename to group.
 * 
 * Only the superuser may change the group of a file arbitrarily; other users may
 * change the group of a file to any group of which that user is a member.
 *
 * @param filename Path to the file.
 * @param group A group name or number.
 */
declare function chgrp(filename: string, group: string): bool;

/**
 * Changes file group
 * 
 * Attempts to change the group of the file filename to group.
 * 
 * Only the superuser may change the group of a file arbitrarily; other users may
 * change the group of a file to any group of which that user is a member.
 *
 * @param filename Path to the file.
 * @param group A group name or number.
 */
declare function chgrp(filename: string, group: number): bool;

/**
 * Changes file mode
 * 
 * Attempts to change the mode of the specified file to that given in mode.
 *
 * @param filename Path to the file.
 * @param mode Note that mode is not automatically assumed to be an octal value,
 *             so strings (such as "g+w") will not work properly. To ensure the
 *             expected operation, you need to prefix mode with a zero (0):
 *             
 *             ]]>
 *             
 *             The mode parameter consists of three octal number components
 *             specifying access restrictions for the owner, the user group in
 *             which the owner is in, and to everybody else in this order. One
 *             component can be computed by adding up the needed permissions for
 *             that target user base. Number 1 means that you grant execute
 *             rights, number 2 means that you make the file writeable, number 4
 *             means that you make the file readable. Add up these numbers to
 *             specify needed rights. You can also read more about modes on Unix
 *             systems with 'man 1 chmod' and 'man 2 chmod'.
 */
declare function chmod(filename: string, mode: number): bool;

/**
 * Changes file owner
 * 
 * Attempts to change the owner of the file filename to user user. Only the
 * superuser may change the owner of a file.
 *
 * @param filename Path to the file.
 * @param user A user name or number.
 */
declare function chown(filename: string, user: string): bool;

/**
 * Changes file owner
 * 
 * Attempts to change the owner of the file filename to user user. Only the
 * superuser may change the owner of a file.
 *
 * @param filename Path to the file.
 * @param user A user name or number.
 */
declare function chown(filename: string, user: number): bool;

/**
 * Clears file status cache
 * 
 * When you use stat, lstat, or any of the other functions listed in the affected
 * functions list (below), PHP caches the information those functions return in
 * order to provide faster performance. However, in certain cases, you may want to
 * clear the cached information. For instance, if the same file is being checked
 * multiple times within a single script, and that file is in danger of being
 * removed or changed during that script's operation, you may elect to clear the
 * status cache.  In these cases, you can use the clearstatcache function to clear
 * the information that PHP caches about a file.
 * 
 * You should also note that PHP doesn't cache information about non-existent
 * files. So, if you call file_exists on a file that doesn't exist, it will return
 * false until you create the file. If you create the file, it will return true
 * even if you then delete the file. However unlink clears the cache automatically.
 * 
 * 
 * This function caches information about specific filenames, so you only need to
 * call clearstatcache if you are performing multiple operations on the same
 * filename and require the information about that particular file to not be
 * cached.
 * 
 * Affected functions include stat, lstat, file_exists, is_writable, is_readable,
 * is_executable, is_file, is_dir, is_link, filectime, fileatime, filemtime,
 * fileinode, filegroup, fileowner, filesize, filetype, and fileperms.
 *
 * @param clear_realpath_cache Whether to clear the realpath cache or not.
 * @param filename Clear the realpath and the stat cache for a specific filename
 *                 only; only used if clear_realpath_cache is true.
 */
declare function clearstatcache(clear_realpath_cache?: bool, filename?: string);

/**
 * Copies file
 * 
 * Makes a copy of the file source to dest.
 * 
 * If you wish to move a file, use the rename function.
 *
 * @param source Path to the source file.
 * @param dest The destination path. If dest is a URL, the copy operation may fail
 *             if the wrapper does not support overwriting of existing files.
 *             
 *             If the destination file already exists, it will be overwritten.
 * @param context A valid context resource created with stream_context_create.
 */
declare function copy(source: string, dest: string, context?: Pct.PhpResource): bool;

/**
 * Returns parent directory's path
 * 
 * Given a string containing the path of a file or directory, this function will
 * return the parent directory's path.
 *
 * @param path A path.
 *             
 *             On Windows, both slash (/) and backslash (\) are used as directory
 *             separator character. In other environments, it is the forward slash
 *             (/).
 * @return Returns the path of the parent directory. If there are no slashes in
 *         path, a dot ('.') is returned, indicating the current directory.
 *         Otherwise, the returned string is path with any trailing /component
 *         removed.
 */
declare function dirname(path: string): string;

/**
 * Returns available space on filesystem or disk partition
 * 
 * Given a string containing a directory, this function will return the number of
 * bytes available on the corresponding filesystem or disk partition.
 *
 * @param directory A directory of the filesystem or disk partition.
 *                  
 *                  Given a file name instead of a directory, the behaviour of the
 *                  function is unspecified and may differ between operating
 *                  systems and PHP versions.
 * @return Returns the number of available bytes as a float .
 */
declare function disk_free_space(directory: string): number;

/**
 * Returns the total size of a filesystem or disk partition
 * 
 * Given a string containing a directory, this function will return the total
 * number of bytes on the corresponding filesystem or disk partition.
 *
 * @param directory A directory of the filesystem or disk partition.
 * @return Returns the total number of bytes as a float .
 */
declare function disk_total_space(directory: string): number;

/**
 * Closes an open file pointer
 * 
 * The file pointed to by handle is closed.
 *
 * @param handle The file pointer must be valid, and must point to a file
 *               successfully opened by fopen or fsockopen.
 */
declare function fclose(handle: Pct.PhpResource): bool;

/**
 * Tests for end-of-file on a file pointer
 * 
 * Tests for end-of-file on a file pointer.
 *
 * @param handle 
 * @return Returns true if the file pointer is at EOF or an error occurs
 *         (including socket timeout); otherwise returns false.
 */
declare function feof(handle: Pct.PhpResource): bool;

/**
 * Flushes the output to a file
 * 
 * This function forces a write of all buffered output to the resource pointed to
 * by the file handle.
 *
 * @param handle 
 */
declare function fflush(handle: Pct.PhpResource): bool;

/**
 * Gets character from file pointer
 * 
 * Gets a character from the given file pointer.
 *
 * @param handle 
 * @return Returns a string containing a single character read from the file
 *         pointed to by handle. Returns false on EOF.
 */
declare function fgetc(handle: Pct.PhpResource): string;

/**
 * Gets line from file pointer and parse for CSV fields
 * 
 * Similar to fgets except that fgetcsv parses the line it reads for fields in CSV
 * format and returns an array containing the fields read.
 *
 * @param handle A valid file pointer to a file successfully opened by fopen,
 *               popen, or fsockopen.
 * @param length Must be greater than the longest line (in characters) to be found
 *               in the CSV file (allowing for trailing line-end characters). It
 *               became optional in PHP 5. Omitting this parameter (or setting it
 *               to 0 in PHP 5.0.4 and later) the maximum line length is not
 *               limited, which is slightly slower.
 * @param delimter
 * @param enclosure Set the field enclosure character (one character only).
 * @param escape Set the escape character (one character only). Defaults as a
 *               backslash.
 * @return Returns an indexed array containing the fields read.
 *         
 *         A blank line in a CSV file will be returned as an array comprising a
 *         single null field, and will not be treated as an error.
 *         
 *         fgetcsv returns  if an invalid handle is supplied or false on other
 *         errors, including end of file.
 */
declare function fgetcsv(handle: Pct.PhpResource, length?: number, delimter?: string, enclosure?: string, escape?: string): any[];

/**
 * Gets line from file pointer
 * 
 * Gets a line from file pointer.
 *
 * @param handle 
 * @param length Reading ends when length - 1 bytes have been read, or a newline
 *               (which is included in the return value), or an EOF (whichever
 *               comes first). If no length is specified, it will keep reading
 *               from the stream until it reaches the end of the line.
 *               
 *               Until PHP 4.3.0, omitting it would assume 1024 as the line
 *               length. If the majority of the lines in the file are all larger
 *               than 8KB, it is more resource efficient for your script to
 *               specify the maximum line length.
 * @return Returns a string of up to length - 1 bytes read from the file pointed
 *         to by handle. If there is no more data to read in the file pointer,
 *         then false is returned.
 *         
 *         If an error occurs, false is returned.
 */
declare function fgets(handle: Pct.PhpResource, length?: number): string;

/**
 * Gets line from file pointer and strip HTML tags
 * 
 * Identical to fgets, except that fgetss attempts to strip any NUL bytes, HTML and
 * PHP tags from the text it reads.
 *
 * @param handle 
 * @param length Length of the data to be retrieved.
 * @param allowable_tags You can use the optional third parameter to specify tags
 *                       which should not be stripped.
 * @return Returns a string of up to length - 1 bytes read from the file pointed
 *         to by handle, with all HTML and PHP code stripped.
 *         
 *         If an error occurs, returns false.
 */
declare function fgetss(handle: Pct.PhpResource, length?: number, allowable_tags?: string): string;

/**
 * Reads entire file into an array
 * 
 * Reads an entire file into an array.
 * 
 * You can use file_get_contents to return the contents of a file as a string.
 *
 * @param filename Path to the file.
 * @param flags The optional parameter flags can be one, or more, of the following
 *              constants:    FILE_USE_INCLUDE_PATH    Search for the file in the
 *              include_path.      FILE_IGNORE_NEW_LINES    Do not add newline at
 *              the end of each array element      FILE_SKIP_EMPTY_LINES    Skip
 *              empty lines
 * @param context A context resource created with the stream_context_create
 *                function.
 * @return Returns the file in an array. Each element of the array corresponds to
 *         a line in the file, with the newline still attached. Upon failure, file
 *         returns false.
 *         
 *         Each line in the resulting array will include the line ending, unless
 *         FILE_IGNORE_NEW_LINES is used, so you still need to use rtrim if you do
 *         not want the line ending present.
 */
declare function file(filename: string, flags?: number, context?: Pct.PhpResource): string[];

/**
 * Checks whether a file or directory exists
 * 
 * Checks whether a file or directory exists.
 *
 * @param filename Path to the file or directory.
 *                 
 *                 On windows, use //computername/share/filename or
 *                 \\computername\share\filename to check files on network shares.
 *                 
 * @return Returns true if the file or directory specified by filename exists;
 *         false otherwise.
 *         
 *         This function will return false for symlinks pointing to non-existing
 *         files.
 *         
 *         This function returns false for files inaccessible due to safe mode
 *         restrictions. However these files still can be included if they are
 *         located in safe_mode_include_dir.
 *         
 *         The check is done using the real UID/GID instead of the effective one.
 */
declare function file_exists(filename: string): bool;

/**
 * Reads entire file into a string
 * 
 * This function is similar to file, except that file_get_contents returns the file
 * in a string, starting at the specified offset up to maxlen bytes. On failure,
 * file_get_contents will return false.
 * 
 * file_get_contents is the preferred way to read the contents of a file into a
 * string.  It will use memory mapping techniques if supported by your OS to
 * enhance performance.
 * 
 * If you're opening a URI with special characters, such as spaces, you need to
 * encode the URI with urlencode.
 *
 * @param filename Name of the file to read.
 * @param use_include_path As of PHP 5 the FILE_USE_INCLUDE_PATH can be used to
 *                         trigger include path search.
 * @param context A valid context resource created with stream_context_create. If
 *                you don't need to use a custom context, you can skip this
 *                parameter by .
 * @param offset The offset where the reading starts on the original stream.
 *               
 *               Seeking (offset) is not supported with remote files. Attempting
 *               to seek on non-local files may work with small offsets, but this
 *               is unpredictable because it works on the buffered stream.
 * @param maxlen Maximum length of data read. The default is to read until end of
 *               file is reached. Note that this parameter is applied to the
 *               stream processed by the filters.
 * @return The function returns the read data.
 */
declare function file_get_contents(filename: string, use_include_path?: bool, context?: Pct.PhpResource, offset?: number, maxlen?: number): string;

/**
 * Write a string to a file
 * 
 * This function is identical to calling fopen, fwrite and fclose successively to
 * write data to a file.
 * 
 * If filename does not exist, the file is created. Otherwise, the existing file is
 * overwritten, unless the FILE_APPEND flag is set.
 *
 * @param filename Path to the file where to write the data.
 * @param data The data to write. Can be either a string, an array or a stream
 *             resource.
 *             
 *             If data is a stream resource, the remaining buffer of that stream
 *             will be copied to the specified file. This is similar with using
 *             stream_copy_to_stream.
 *             
 *             You can also specify the data parameter as a single dimension
 *             array. This is equivalent to file_put_contents($filename,
 *             implode('', $array)).
 * @param flags The value of flags can be any combination of the following flags,
 *              joined with the binary OR (|) operator.
 *              
 *              Available flags    Flag Description      FILE_USE_INCLUDE_PATH  
 *              Search for filename in the include directory. See include_path for
 *              more information.     FILE_APPEND   If file filename already
 *              exists, append the data to the file instead of overwriting it.    
 *              LOCK_EX   Acquire an exclusive lock on the file while proceeding
 *              to the writing.
 * @param context A valid context resource created with stream_context_create.
 * @return This function returns the number of bytes that were written to the
 *         file, or false on failure.
 */
declare function file_put_contents(filename: string, data: string, flags?: number, context?: Pct.PhpResource): number;

/**
 * Write a string to a file
 * 
 * This function is identical to calling fopen, fwrite and fclose successively to
 * write data to a file.
 * 
 * If filename does not exist, the file is created. Otherwise, the existing file is
 * overwritten, unless the FILE_APPEND flag is set.
 *
 * @param filename Path to the file where to write the data.
 * @param data The data to write. Can be either a string, an array or a stream
 *             resource.
 *             
 *             If data is a stream resource, the remaining buffer of that stream
 *             will be copied to the specified file. This is similar with using
 *             stream_copy_to_stream.
 *             
 *             You can also specify the data parameter as a single dimension
 *             array. This is equivalent to file_put_contents($filename,
 *             implode('', $array)).
 * @param flags The value of flags can be any combination of the following flags,
 *              joined with the binary OR (|) operator.
 *              
 *              Available flags    Flag Description      FILE_USE_INCLUDE_PATH  
 *              Search for filename in the include directory. See include_path for
 *              more information.     FILE_APPEND   If file filename already
 *              exists, append the data to the file instead of overwriting it.    
 *              LOCK_EX   Acquire an exclusive lock on the file while proceeding
 *              to the writing.
 * @param context A valid context resource created with stream_context_create.
 * @return This function returns the number of bytes that were written to the
 *         file, or false on failure.
 */
declare function file_put_contents(filename: string, data: any[], flags?: number, context?: Pct.PhpResource): number;

/**
 * Write a string to a file
 * 
 * This function is identical to calling fopen, fwrite and fclose successively to
 * write data to a file.
 * 
 * If filename does not exist, the file is created. Otherwise, the existing file is
 * overwritten, unless the FILE_APPEND flag is set.
 *
 * @param filename Path to the file where to write the data.
 * @param data The data to write. Can be either a string, an array or a stream
 *             resource.
 *             
 *             If data is a stream resource, the remaining buffer of that stream
 *             will be copied to the specified file. This is similar with using
 *             stream_copy_to_stream.
 *             
 *             You can also specify the data parameter as a single dimension
 *             array. This is equivalent to file_put_contents($filename,
 *             implode('', $array)).
 * @param flags The value of flags can be any combination of the following flags,
 *              joined with the binary OR (|) operator.
 *              
 *              Available flags    Flag Description      FILE_USE_INCLUDE_PATH  
 *              Search for filename in the include directory. See include_path for
 *              more information.     FILE_APPEND   If file filename already
 *              exists, append the data to the file instead of overwriting it.    
 *              LOCK_EX   Acquire an exclusive lock on the file while proceeding
 *              to the writing.
 * @param context A valid context resource created with stream_context_create.
 * @return This function returns the number of bytes that were written to the
 *         file, or false on failure.
 */
declare function file_put_contents(filename: string, data: Pct.PhpResource, flags?: number, context?: Pct.PhpResource): number;

/**
 * Gets last access time of file
 *
 * @param filename Path to the file.
 * @return Returns the time the file was last accessed, . The time is returned as
 *         a Unix timestamp.
 */
declare function fileatime(filename: string): number;

/**
 * Gets inode change time of file
 * 
 * Gets the inode change time of a file.
 *
 * @param filename Path to the file.
 * @return Returns the time the file was last changed, . The time is returned as a
 *         Unix timestamp.
 */
declare function filectime(filename: string): number;

/**
 * Gets file group
 * 
 * Gets the file group. The group ID is returned in numerical format, use
 * posix_getgrgid to resolve it to a group name.
 *
 * @param filename Path to the file.
 * @return Returns the group ID of the file, or false if an error occurs. The
 *         group ID is returned in numerical format, use posix_getgrgid to resolve
 *         it to a group name. Upon failure, false is returned.
 */
declare function filegroup(filename: string): number;

/**
 * Gets file inode
 * 
 * Gets the file inode.
 *
 * @param filename Path to the file.
 * @return Returns the inode number of the file, .
 */
declare function fileinode(filename: string): number;

/**
 * Gets file modification time
 * 
 * This function returns the time when the data blocks of a file were being written
 * to, that is, the time when the content of the file was changed.
 *
 * @param filename Path to the file.
 * @return Returns the time the file was last modified, . The time is returned as
 *         a Unix timestamp, which is suitable for the date function.
 */
declare function filemtime(filename: string): number;

/**
 * Gets file owner
 * 
 * Gets the file owner.
 *
 * @param filename Path to the file.
 * @return Returns the user ID of the owner of the file, . The user ID is returned
 *         in numerical format, use posix_getpwuid to resolve it to a username.
 */
declare function fileowner(filename: string): number;

/**
 * Gets file permissions
 * 
 * Gets permissions for the given file.
 *
 * @param filename Path to the file.
 * @return Returns the file's permissions as a numeric mode. Lower bits of this
 *         mode are the same as the permissions expected by chmod, however on most
 *         platforms the return value will also include information on the type of
 *         file given as filename. The examples below demonstrate how to test the
 *         return value for specific permissions and file types on POSIX systems,
 *         including Linux and Mac OS X.
 *         
 *         For local files, the specific return value is that of the st_mode
 *         member of the structure returned by the C library's stat function.
 *         Exactly which bits are set can vary from platform to platform, and
 *         looking up your specific platform's documentation is recommended if
 *         parsing the non-permission bits of the return value is required.
 */
declare function fileperms(filename: string): number;

/**
 * Gets file size
 * 
 * Gets the size for the given file.
 *
 * @param filename Path to the file.
 * @return Returns the size of the file in bytes, or false (and generates an error
 *         of level E_WARNING) in case of an error.
 */
declare function filesize(filename: string): number;

/**
 * Gets file type
 * 
 * Returns the type of the given file.
 *
 * @param filename Path to the file.
 * @return Returns the type of the file. Possible values are fifo, char, dir,
 *         block, link, file, socket and unknown.
 *         
 *         Returns false if an error occurs. filetype will also produce an
 *         E_NOTICE message if the stat call fails or if the file type is unknown.
 *         
 */
declare function filetype(filename: string): string;

/**
 * Portable advisory file locking
 * 
 * flock allows you to perform a simple reader/writer model which can be used on
 * virtually every platform (including most Unix derivatives and even Windows).
 * 
 * On versions of PHP before 5.3.2, the lock is released also by fclose (which is
 * also called automatically when script finished).
 * 
 * PHP supports a portable way of locking complete files in an advisory way (which
 * means all accessing programs have to use the same way of locking or it will not
 * work). By default, this function will block until the requested lock is
 * acquired; this may be controlled (on non-Windows platforms) with the LOCK_NB
 * option documented below.
 *
 * @param handle 
 * @param operation operation is one of the following:    LOCK_SH to acquire a
 *                  shared lock (reader).     LOCK_EX to acquire an exclusive lock
 *                  (writer).     LOCK_UN to release a lock (shared or exclusive).
 *                  
 *                  
 *                  It is also possible to add LOCK_NB as a bitmask to one of the
 *                  above operations if you don't want flock to block while
 *                  locking. (not supported on Windows)
 * @param $wouldblock The optional third argument is set to true if the lock would
 *                    block (EWOULDBLOCK errno condition). (not supported on
 *                    Windows)
 */
declare function flock(handle: Pct.PhpResource, operation: number, $wouldblock?: number): bool;

/**
 * Match filename against a pattern
 * 
 * fnmatch checks if the passed string would match the given shell wildcard
 * pattern.
 *
 * @param pattern The shell wildcard pattern.
 * @param string_ The tested string. This function is especially useful for
 *                filenames, but may also be used on regular strings.
 *                
 *                The average user may be used to shell patterns or at least in
 *                their simplest form to '?' and '*' wildcards so using fnmatch
 *                instead of preg_match for frontend search expression input may
 *                be way more convenient for non-programming users.
 * @param flags The value of flags can be any combination of the following flags,
 *              joined with the binary OR (|) operator.   A list of possible flags
 *              for fnmatch     Flag Description     FNM_NOESCAPE  Disable
 *              backslash escaping.    FNM_PATHNAME  Slash in string only matches
 *              slash in the given pattern.    FNM_PERIOD  Leading period in
 *              string must be exactly matched by period in the given pattern.   
 *              FNM_CASEFOLD  Caseless match. Part of the GNU extension.
 * @return Returns true if there is a match, false otherwise.
 */
declare function fnmatch(pattern: string, string_: string, flags?: number): bool;

/**
 * Opens file or URL
 * 
 * fopen binds a named resource, specified by filename, to a stream.
 *
 * @param filename If filename is of the form "scheme://...", it is assumed to be
 *                 a URL and PHP will search for a protocol handler (also known as
 *                 a wrapper) for that scheme. If no wrappers for that protocol
 *                 are registered, PHP will emit a notice to help you track
 *                 potential problems in your script and then continue as though
 *                 filename specifies a regular file.
 *                 
 *                 If PHP has decided that filename specifies a local file, then
 *                 it will try to open a stream on that file. The file must be
 *                 accessible to PHP, so you need to ensure that the file access
 *                 permissions allow this access. If you have enabled , or
 *                 open_basedir further restrictions may apply.
 *                 
 *                 If PHP has decided that filename specifies a registered
 *                 protocol, and that protocol is registered as a network URL, PHP
 *                 will check to make sure that allow_url_fopen is enabled. If it
 *                 is switched off, PHP will emit a warning and the fopen call
 *                 will fail.
 *                 
 *                 The list of supported protocols can be found in . Some
 *                 protocols (also referred to as wrappers) support context and/or
 *                 options. Refer to the specific page for the protocol in use for
 *                 a list of options which can be set. (e.g. value user_agent used
 *                 by the http wrapper).
 *                 
 *                 On the Windows platform, be careful to escape any backslashes
 *                 used in the path to the file, or use forward slashes.    ]]>
 * @param mode The mode parameter specifies the type of access you require to the
 *             stream.  It may be any of the following:   A list of possible modes
 *             for fopen using mode     mode Description     'r'  Open for reading
 *             only; place the file pointer at the beginning of the file.    'r+' 
 *             Open for reading and writing; place the file pointer at the
 *             beginning of the file.    'w'  Open for writing only; place the
 *             file pointer at the beginning of the file and truncate the file to
 *             zero length. If the file does not exist, attempt to create it.   
 *             'w+'  Open for reading and writing; place the file pointer at the
 *             beginning of the file and truncate the file to zero length.  If the
 *             file does not exist, attempt to create it.    'a'  Open for writing
 *             only; place the file pointer at the end of the file. If the file
 *             does not exist, attempt to create it.    'a+'  Open for reading and
 *             writing; place the file pointer at the end of the file. If the file
 *             does not exist, attempt to create it.    'x'  Create and open for
 *             writing only; place the file pointer at the beginning of the file. 
 *             If the file already exists, the fopen call will fail by returning
 *             false and generating an error of level E_WARNING.  If the file does
 *             not exist, attempt to create it.  This is equivalent to specifying
 *             O_EXCL|O_CREAT flags for the underlying open(2) system call.   
 *             'x+'  Create and open for reading and writing; otherwise it has the
 *             same behavior as 'x'.    'c'  Open the file for writing only. If
 *             the file does not exist, it is created. If it exists, it is neither
 *             truncated (as opposed to 'w'), nor the call to this function fails
 *             (as is the case with 'x'). The file pointer is positioned on the
 *             beginning of the file. This may be useful if it's desired to get an
 *             advisory lock (see flock) before attempting to modify the file, as
 *             using 'w' could truncate the file before the lock was obtained (if
 *             truncation is desired, ftruncate can be used after the lock is
 *             requested).    'c+'  Open the file for reading and writing;
 *             otherwise it has the same behavior as 'c'.
 *             
 *             Different operating system families have different line-ending
 *             conventions.  When you write a text file and want to insert a line
 *             break, you need to use the correct line-ending character(s) for
 *             your operating system.  Unix based systems use \n as the line
 *             ending character, Windows based systems use \r\n as the line ending
 *             characters and Macintosh based systems use \r as the line ending
 *             character.
 *             
 *             If you use the wrong line ending characters when writing your
 *             files, you might find that other applications that open those files
 *             will "look funny".
 *             
 *             Windows offers a text-mode translation flag ('t') which will
 *             transparently translate \n to \r\n when working with the file.  In
 *             contrast, you can also use 'b' to force binary mode, which will not
 *             translate your data.  To use these flags, specify either 'b' or 't'
 *             as the last character of the mode parameter.
 *             
 *             The default translation mode depends on the SAPI and version of PHP
 *             that you are using, so you are encouraged to always specify the
 *             appropriate flag for portability reasons.  You should use the 't'
 *             mode if you are working with plain-text files and you use \n to
 *             delimit your line endings in your script, but expect your files to
 *             be readable with applications such as notepad.  You should use the
 *             'b' in all other cases.
 *             
 *             If you do not specify the 'b' flag when working with binary files,
 *             you may experience strange problems with your data, including
 *             broken image files and strange problems with \r\n characters.
 *             
 *             For portability, it is strongly recommended that you always use the
 *             'b' flag when opening files with fopen.
 *             
 *             Again, for portability, it is also strongly recommended that you
 *             re-write code that uses or relies upon the 't' mode so that it uses
 *             the correct line endings and 'b' mode instead.
 * @param use_include_path The optional third use_include_path parameter can be
 *                         set to '1' or true if you want to search for the file
 *                         in the include_path, too.
 * @param context 
 * @return Returns a file pointer resource on success, or false on error.
 */
declare function fopen(filename: string, mode: string, use_include_path?: bool, context?: Pct.PhpResource): Pct.PhpResource;

/**
 * Output all remaining data on a file pointer
 * 
 * Reads to EOF on the given file pointer from the current position and writes the
 * results to the output buffer.
 * 
 * You may need to call rewind to reset the file pointer to the beginning of the
 * file if you have already written data to the file.
 * 
 * If you just want to dump the contents of a file to the output buffer, without
 * first modifying it or seeking to a particular offset, you may want to use the
 * readfile, which saves you the fopen call.
 *
 * @param handle 
 * @return If an error occurs, fpassthru returns false.  Otherwise, fpassthru
 *         returns the number of characters read from handle and passed through to
 *         the output.
 */
declare function fpassthru(handle: Pct.PhpResource): number;

/**
 * Format line as CSV and write to file pointer
 * 
 * fputcsv formats a line (passed as a fields array) as CSV and write it
 * (terminated by a newline) to the specified file handle.
 *
 * @param handle 
 * @param fields An array of values.
 * @param delimiter The optional delimiter parameter sets the field delimiter (one
 *                  character only).
 * @param enclosure The optional enclosure parameter sets the field enclosure (one
 *                  character only).
 * @return Returns the length of the written string.
 */
declare function fputcsv(handle: Pct.PhpResource, fields: any[], delimiter?: string, enclosure?: string): number;

/**
 * Binary-safe file read
 * 
 * fread reads up to length bytes from the file pointer referenced by handle.
 * Reading stops as soon as one of the following conditions is met:    length bytes
 * have been read     EOF (end of file) is reached     a packet becomes available
 * or the  socket timeout occurs (for network streams)     if the stream is read
 * buffered and it does not represent a plain file, at most one read of up to a
 * number of bytes equal to the chunk size (usually 8192) is made; depending on the
 * previously buffered data, the size of the returned data may be larger than the
 * chunk size.
 *
 * @param handle 
 * @param length Up to length number of bytes read.
 * @return Returns the read string .
 */
declare function fread(handle: Pct.PhpResource, length: number): string;

/**
 * Parses input from a file according to a format
 * 
 * The function fscanf is similar to sscanf, but it takes its input from a file
 * associated with handle and interprets the input according to the specified
 * format, which is described in the documentation for sprintf.
 * 
 * Any whitespace in the format string matches any whitespace in the input stream.
 * This means that even a tab \t in the format string can match a single space
 * character in the input stream.
 * 
 * Each call to fscanf reads one line from the file.
 *
 * @param handle 
 * @param format The specified format as described in the sprintf documentation.
 * @return If only two parameters were passed to this function, the values parsed
 *         will be returned as an array. Otherwise, if optional parameters are
 *         passed, the function will return the number of assigned values. The
 *         optional parameters must be passed by reference.
 */
declare function fscanf(handle: Pct.PhpResource, format: string): any[]; //NOTE: auto-assignment not available

/**
 * Seeks on a file pointer
 * 
 * Sets the file position indicator for the file referenced by handle. The new
 * position, measured in bytes from the beginning of the file, is obtained by
 * adding offset to the position specified by whence.
 * 
 * In general, it is allowed to seek past the end-of-file; if data is then written,
 * reads in any unwritten region between the end-of-file and the sought position
 * will yield bytes with value 0. However, certain streams may not support this
 * behavior, especially when they have an underlying fixed size storage.
 *
 * @param handle 
 * @param offset The offset.
 *               
 *               To move to a position before the end-of-file, you need to pass a
 *               negative value in offset and set whence to SEEK_END.
 * @param whence whence values are:  SEEK_SET - Set position equal to offset
 *               bytes. SEEK_CUR - Set position to current location plus offset.
 *               SEEK_END - Set position to end-of-file plus offset.
 * @return Upon success, returns 0; otherwise, returns -1.
 */
declare function fseek(handle: Pct.PhpResource, offset: number, whence?: number): number;

/**
 * Gets information about a file using an open file pointer
 * 
 * Gathers the statistics of the file opened by the file pointer handle. This
 * function is similar to the stat function except that it operates on an open file
 * pointer instead of a filename.
 *
 * @param handle 
 * @return Returns an array with the statistics of the file; the format of the
 *         array is described in detail on the stat manual page.
 */
declare function fstat(handle: Pct.PhpResource): Pct.PhpAssocArray;

/**
 * Returns the current position of the file read/write pointer
 * 
 * Returns the position of the file pointer referenced by handle.
 *
 * @param handle The file pointer must be valid, and must point to a file
 *               successfully opened by fopen or popen. ftell gives undefined
 *               results for append-only streams (opened with "a" flag).
 * @return Returns the position of the file pointer referenced by handle as an
 *         integer; i.e., its offset into the file stream.
 *         
 *         If an error occurs, returns false.
 */
declare function ftell(handle: Pct.PhpResource): number;

/**
 * Truncates a file to a given length
 * 
 * Takes the filepointer, handle, and truncates the file to length, size.
 *
 * @param handle The file pointer.
 *               
 *               The handle must be open for writing.
 * @param size The size to truncate to.
 *             
 *             If size is larger than the file then the file is extended with null
 *             bytes.
 *             
 *             If size is smaller than the file then the file is truncated to that
 *             size.
 */
declare function ftruncate(handle: Pct.PhpResource, size: number): bool;

/**
 * Binary-safe file write
 *
 * @param handle 
 * @param string_ The string that is to be written.
 * @param length If the length argument is given, writing will stop after length
 *               bytes have been written or the end of string is reached,
 *               whichever comes first.
 *               
 *               Note that if the length argument is given, then the
 *               magic_quotes_runtime configuration option will be ignored and no
 *               slashes will be stripped from string.
 */
declare function fwrite(handle: Pct.PhpResource, string_: string, length?: number): number;

/**
 * Find pathnames matching a pattern
 * 
 * The glob function searches for all the pathnames matching pattern according to
 * the rules used by the libc glob() function, which is similar to the rules used
 * by common shells.
 *
 * @param pattern The pattern. No tilde expansion or parameter substitution is
 *                done.
 * @param flags Valid flags:    GLOB_MARK - Adds a slash to each directory
 *              returned     GLOB_NOSORT - Return files as they appear in the
 *              directory (no sorting)     GLOB_NOCHECK - Return the search
 *              pattern if no files matching it were found     GLOB_NOESCAPE -
 *              Backslashes do not quote metacharacters     GLOB_BRACE - Expands
 *              {a,b,c} to match 'a', 'b', or 'c'     GLOB_ONLYDIR - Return only
 *              directory entries which match the pattern     GLOB_ERR - Stop on
 *              read errors (like unreadable directories), by default errors are
 *              ignored.
 * @return Returns an array containing the matched files/directories, an empty
 *         array if no file matched or false on error.
 *         
 *         On some systems it is impossible to distinguish between empty match and
 *         an error.
 */
declare function glob(pattern: string, flags?: number): string[];

/**
 * Tells whether the filename is a directory
 * 
 * Tells whether the given filename is a directory.
 *
 * @param filename Path to the file. If filename is a relative filename, it will
 *                 be checked relative to the current working directory. If
 *                 filename is a symbolic or hard link then the link will be
 *                 resolved and checked. If you have enabled , or open_basedir
 *                 further restrictions may apply.
 * @return Returns true if the filename exists and is a directory, false
 *         otherwise.
 */
declare function is_dir(filename: string): bool;

/**
 * Tells whether the filename is executable
 * 
 * Tells whether the filename is executable.
 *
 * @param filename Path to the file.
 * @return Returns true if the filename exists and is executable, or false on
 *         error.
 */
declare function is_executable(filename: string): bool;

/**
 * Tells whether the filename is a regular file
 * 
 * Tells whether the given file is a regular file.
 *
 * @param filename Path to the file.
 * @return Returns true if the filename exists and is a regular file, false
 *         otherwise.
 */
declare function is_file(filename: string): bool;

/**
 * Tells whether the filename is a symbolic link
 * 
 * Tells whether the given file is a symbolic link.
 *
 * @param filename Path to the file.
 * @return Returns true if the filename exists and is a symbolic link, false
 *         otherwise.
 */
declare function is_link(filename: string): bool;

/**
 * Tells whether a file exists and is readable
 * 
 * Tells whether a file exists and is readable.
 *
 * @param filename Path to the file.
 * @return Returns true if the file or directory specified by filename exists and
 *         is readable, false otherwise.
 */
declare function is_readable(filename: string): bool;

/**
 * Tells whether the file was uploaded via HTTP POST
 * 
 * Returns true if the file named by filename was uploaded via HTTP POST. This is
 * useful to help ensure that a malicious user hasn't tried to trick the script
 * into working on files upon which it should not be working--for instance,
 * /etc/passwd.
 * 
 * This sort of check is especially important if there is any chance that anything
 * done with uploaded files could reveal their contents to the user, or even to
 * other users on the same system.
 * 
 * For proper working, the function is_uploaded_file needs an argument like
 * $_FILES['userfile']['tmp_name'], - the name of the uploaded file on the client's
 * machine $_FILES['userfile']['name'] does not work.
 *
 * @param filename The filename being checked.
 */
declare function is_uploaded_file(filename: string): bool;

/**
 * Tells whether the filename is writable
 * 
 * Returns true if the filename exists and is writable.  The filename argument may
 * be a directory name allowing you to check if a directory is writable.
 * 
 * Keep in mind that PHP may be accessing the file as the user id that the web
 * server runs as (often 'nobody'). Safe mode limitations are not taken into
 * account.
 *
 * @param filename The filename being checked.
 * @return Returns true if the filename exists and is writable.
 */
declare function is_writable(filename: string): bool;

/**
 * Changes group ownership of symlink
 * 
 * Attempts to change the group of the symlink filename to group.
 * 
 * Only the superuser may change the group of a symlink arbitrarily; other users
 * may change the group of a symlink to any group of which that user is a member.
 *
 * @param filename Path to the symlink.
 * @param group The group specified by name or number.
 */
declare function lchgrp(filename: string, group: string): bool;

/**
 * Changes group ownership of symlink
 * 
 * Attempts to change the group of the symlink filename to group.
 * 
 * Only the superuser may change the group of a symlink arbitrarily; other users
 * may change the group of a symlink to any group of which that user is a member.
 *
 * @param filename Path to the symlink.
 * @param group The group specified by name or number.
 */
declare function lchgrp(filename: string, group: number): bool;

/**
 * Changes user ownership of symlink
 * 
 * Attempts to change the owner of the symlink filename to user user.
 * 
 * Only the superuser may change the owner of a symlink.
 *
 * @param filename Path to the file.
 * @param user User name or number.
 */
declare function lchown(filename: string, user: string): bool;

/**
 * Changes user ownership of symlink
 * 
 * Attempts to change the owner of the symlink filename to user user.
 * 
 * Only the superuser may change the owner of a symlink.
 *
 * @param filename Path to the file.
 * @param user User name or number.
 */
declare function lchown(filename: string, user: number): bool;

/**
 * Create a hard link
 * 
 * link creates a hard link.
 *
 * @param target Target of the link.
 * @param link The link name.
 */
declare function link(target: string, link: string): bool;

/**
 * Gets information about a link
 * 
 * Gets information about a link.
 * 
 * This function is used to verify if a link (pointed to by path) really exists
 * (using the same method as the S_ISLNK macro defined in stat.h).
 *
 * @param path Path to the link.
 * @return linkinfo returns the st_dev field of the Unix C stat structure returned
 *         by the lstat system call. Returns 0 or false in case of error.
 */
declare function linkinfo(path: string): number;

/**
 * Gives information about a file or symbolic link
 * 
 * Gathers the statistics of the file or symbolic link named by filename.
 *
 * @param filename Path to a file or a symbolic link.
 * @return See the manual page for stat for information on the structure of the
 *         array that lstat returns. This function is identical to the stat
 *         function except that if the filename parameter is a symbolic link, the
 *         status of the symbolic link is returned, not the status of the file
 *         pointed to by the symbolic link.
 */
declare function lstat(filename: string): Pct.PhpAssocArray;

/**
 * Makes directory
 * 
 * Attempts to create the directory specified by pathname.
 *
 * @param pathname The directory path.
 * @param mode The mode is 0777 by default, which means the widest possible
 *             access. For more information on modes, read the details on the
 *             chmod page.
 *             
 *             mode is ignored on Windows.
 *             
 *             Note that you probably want to specify the mode as an octal number,
 *             which means it should have a leading zero. The mode is also
 *             modified by the current umask, which you can change using umask.
 * @param recursive Allows the creation of nested directories specified in the
 *                  pathname.
 * @param context 
 */
declare function mkdir(pathname: string, mode?: number, recursive?: bool, context?: Pct.PhpResource): bool;

/**
 * Moves an uploaded file to a new location
 * 
 * This function checks to ensure that the file designated by filename is a valid
 * upload file (meaning that it was uploaded via PHP's HTTP POST upload mechanism).
 * If the file is valid, it will be moved to the filename given by destination.
 * 
 * This sort of check is especially important if there is any chance that anything
 * done with uploaded files could reveal their contents to the user, or even to
 * other users on the same system.
 *
 * @param filename The filename of the uploaded file.
 * @param destination The destination of the moved file.
 * @return Returns true on success.
 *         
 *         If filename is not a valid upload file, then no action will occur, and
 *         move_uploaded_file will return false.
 *         
 *         If filename is a valid upload file, but cannot be moved for some
 *         reason, no action will occur, and move_uploaded_file will return false.
 *         Additionally, a warning will be issued.
 */
declare function move_uploaded_file(filename: string, destination: string): bool;

/**
 * Parse a configuration file
 * 
 * parse_ini_file loads in the ini file specified in filename, and returns the
 * settings in it in an associative array.
 * 
 * The structure of the ini file is the same as the 's.
 *
 * @param filename The filename of the ini file being parsed.
 * @param process_sections By setting the process_sections parameter to true, you
 *                         get a multidimensional array, with the section names
 *                         and settings included. The default for process_sections
 *                         is false
 * @param scanner_mode Can either be INI_SCANNER_NORMAL (default) or
 *                     INI_SCANNER_RAW. If INI_SCANNER_RAW is supplied, then
 *                     option values will not be parsed.
 * @return The settings are returned as an associative array on success, and false
 *         on failure.
 */
declare function parse_ini_file(filename: string, process_sections?: bool, scanner_mode?: number): Pct.PhpAssocArray;

/**
 * Parse a configuration string
 * 
 * parse_ini_string returns the settings in string ini in an associative array.
 * 
 * The structure of the ini string is the same as the 's.
 *
 * @param ini The contents of the ini file being parsed.
 * @param process_sections By setting the process_sections parameter to true, you
 *                         get a multidimensional array, with the section names
 *                         and settings included. The default for process_sections
 *                         is false
 * @param scanner_mode Can either be INI_SCANNER_NORMAL (default) or
 *                     INI_SCANNER_RAW. If INI_SCANNER_RAW is supplied, then
 *                     option values will not be parsed.
 * @return The settings are returned as an associative array on success, and false
 *         on failure.
 */
declare function parse_ini_string(ini: string, process_sections?: bool, scanner_mode?: number): Pct.PhpAssocArray;

/**
 * Returns information about a file path
 * 
 * pathinfo returns information about path: either an associative array or a
 * string, depending on options.
 *
 * @param path The path to be parsed.
 * @return If the options parameter is not passed, an associative array containing
 *         the following elements is returned: dirname, basename, extension (if
 *         any), and filename.
 *         
 *         If the path does not have an extension, no extension element will be
 *         returned (see second example below).
 *         
 *         If options is present, returns a string containing the requested
 *         element.
 */
declare function pathinfo(path: string): Pct.PhpAssocArray;

/**
 * Returns information about a file path
 * 
 * pathinfo returns information about path: either an associative array or a
 * string, depending on options.
 *
 * @param path The path to be parsed.
 * @param options If present, specifies a specific element to be returned; one of
 *                PATHINFO_DIRNAME, PATHINFO_BASENAME, PATHINFO_EXTENSION or
 *                PATHINFO_FILENAME.
 *                
 *                If options is not specified, returns all available elements.
 * @return If the options parameter is not passed, an associative array containing
 *         the following elements is returned: dirname, basename, extension (if
 *         any), and filename.
 *         
 *         If the path does not have an extension, no extension element will be
 *         returned (see second example below).
 *         
 *         If options is present, returns a string containing the requested
 *         element.
 */
declare function pathinfo(path: string, options: number): any;

/**
 * Closes process file pointer
 * 
 * Closes a file pointer to a pipe opened by popen.
 *
 * @param handle The file pointer must be valid, and must have been returned by a
 *               successful call to popen.
 * @return Returns the termination status of the process that was run. In case of
 *         an error then -1 is returned.
 */
declare function pclose(handle: Pct.PhpResource): number;

/**
 * Opens process file pointer
 * 
 * Opens a pipe to a process executed by forking the command given by command.
 *
 * @param command The command
 * @param mode The mode
 * @return Returns a file pointer identical to that returned by fopen, except that
 *         it is unidirectional (may only be used for reading or writing) and must
 *         be closed with pclose. This pointer may be used with fgets, fgetss, and
 *         fwrite. When the mode is 'r', the returned file pointer equals to the
 *         STDOUT of the command, when the mode is 'w', the returned file pointer
 *         equals to the STDIN of the command.
 *         
 *         If an error occurs, returns false.
 */
declare function popen(command: string, mode: string): Pct.PhpResource;

/**
 * Outputs a file
 * 
 * Reads a file and writes it to the output buffer.
 *
 * @param filename The filename being read.
 * @param use_include_path You can use the optional second parameter and set it to
 *                         true, if you want to search for the file in the
 *                         include_path, too.
 * @param context A context stream resource.
 * @return Returns the number of bytes read from the file. If an error occurs,
 *         false is returned and unless the function was called as @readfile, an
 *         error message is printed.
 */
declare function readfile(filename: string, use_include_path?: bool, context?: Pct.PhpResource): number;

/**
 * Returns the target of a symbolic link
 * 
 * readlink does the same as the readlink C function.
 *
 * @param path The symbolic link path.
 * @return Returns the contents of the symbolic link path or false on error.
 */
declare function readlink(path: string): string;

/**
 * Returns canonicalized absolute pathname
 * 
 * realpath expands all symbolic links and resolves references to '/./', '/../' and
 * extra '/' characters in the input path and return the canonicalized absolute
 * pathname.
 *
 * @param path The path being checked.   Whilst a path must be supplied, the value
 *             can be blank or In these cases, the value is interpreted as the
 *             current directory.
 *             
 *             Whilst a path must be supplied, the value can be blank or In these
 *             cases, the value is interpreted as the current directory.
 * @return Returns the canonicalized absolute pathname on success. The resulting
 *         path will have no symbolic link, '/./' or '/../' components.
 *         
 *         realpath returns false on failure, e.g. if the file does not exist.
 *         
 *         The running script must have executable permissions on all directories
 *         in the hierarchy, otherwise realpath will return false.
 */
declare function realpath(path: string): string;

/**
 * Get realpath cache entries
 * 
 * Get the contents of the realpath cache.
 * @return Returns an array of realpath cache entries. The keys are original path
 *         entries, and the values are arrays of data items, containing the
 *         resolved path, expiration date, and other options kept in the cache.
 */
declare function realpath_cache_get(): Pct.PhpAssocArray;

/**
 * Get realpath cache size
 * 
 * Get the amount of memory used by the realpath cache.
 * @return Returns how much memory realpath cache is using.
 */
declare function realpath_cache_size(): number;

/**
 * Renames a file or directory
 * 
 * Attempts to rename oldname to newname, moving it between directories if
 * necessary. If newname exists, it will be overwritten.
 *
 * @param oldname The old name. The wrapper used in oldname must match the wrapper
 *                used in newname.
 * @param newname The new name.
 * @param context 
 */
declare function rename(oldname: string, newname: string, context?: Pct.PhpResource): bool;

/**
 * Rewind the position of a file pointer
 * 
 * Sets the file position indicator for handle to the beginning of the file stream.
 * 
 * If you have opened the file in append ("a" or "a+") mode, any data you write to
 * the file will always be appended, regardless of the file position.
 *
 * @param handle The file pointer must be valid, and must point to a file
 *               successfully opened by fopen.
 */
declare function rewind(handle: Pct.PhpResource): bool;

/**
 * Removes directory
 * 
 * Attempts to remove the directory named by dirname. The directory must be empty,
 * and the relevant permissions must permit this. A E_WARNING level error will be
 * generated on failure.
 *
 * @param dirname Path to the directory.
 * @param context 
 */
declare function rmdir(dirname: string, context?: Pct.PhpResource): bool;

/**
 * Gives information about a file
 * 
 * Gathers the statistics of the file named by filename.  If filename is a symbolic
 * link, statistics are from the file itself, not the symlink.
 * 
 * lstat is identical to stat except it would instead be based off the symlinks
 * status.
 *
 * @param filename Path to the file.
 * @return stat and fstat result format    Numeric Associative (since PHP 4.0.6)
 *         Description     0 dev device number   1 ino inode number *   2 mode
 *         inode protection mode   3 nlink number of links   4 uid userid of owner
 *         *   5 gid groupid of owner *   6 rdev device type, if inode device   7
 *         size size in bytes   8 atime time of last access (Unix timestamp)   9
 *         mtime time of last modification (Unix timestamp)   10 ctime time of
 *         last inode change (Unix timestamp)   11 blksize blocksize of filesystem
 *         IO **   12 blocks number of 512-byte blocks allocated **     * On
 *         Windows this will always be 0.
 *         
 *         ** Only valid on systems supporting the st_blksize type - other systems
 *         (e.g. Windows) return -1.
 *         
 *         In case of error, stat returns false.
 */
declare function stat(filename: string): Pct.PhpAssocArray;

/**
 * Creates a symbolic link
 * 
 * symlink creates a symbolic link to the existing target with the specified name
 * link.
 *
 * @param target Target of the link.
 * @param link The link name.
 */
declare function symlink(target: string, link: string): bool;

/**
 * Create file with unique file name
 * 
 * Creates a file with a unique filename, with access permission set to 0600, in
 * the specified directory. If the directory does not exist, tempnam may generate a
 * file in the system's temporary directory, and return the name of that.
 *
 * @param dir The directory where the temporary filename will be created.
 * @param prefix The prefix of the generated temporary filename.
 * @return Returns the new temporary filename, or false on failure.
 */
declare function tempnam(dir: string, prefix: string): string;

/**
 * Creates a temporary file
 * 
 * Creates a temporary file with a unique name in read-write (w+) mode and returns
 * a file handle .
 * 
 * The file is automatically removed when closed (using fclose), or when the script
 * ends.
 * 
 * For details, consult your system documentation on the tmpfile(3) function, as
 * well as the stdio.h header file.
 * @return Returns a file handle, similar to the one returned by fopen, for the
 *         new file.
 */
declare function tmpfile(): Pct.PhpResource;

/**
 * Sets access and modification time of file
 * 
 * Attempts to set the access and modification times of the file named in the
 * filename parameter to the value given in time. Note that the access time is
 * always modified, regardless of the number of parameters.
 * 
 * If the file does not exist, it will be created.
 *
 * @param filename The name of the file being touched.
 * @param time The touch time. If time is not supplied, the current system time is
 *             used.
 * @param atime If present, the access time of the given filename is set to the
 *              value of atime. Otherwise, it is set to the value passed to the
 *              time parameter. If neither are present, the current system time is
 *              used.
 */
declare function touch(filename: string, time?: number, atime?: number): bool;

/**
 * Changes the current umask
 * 
 * umask sets PHP's umask to mask  0777 and returns the old umask. When PHP is
 * being used as a server module, the umask is restored when each request is
 * finished.
 *
 * @param umask
 * @return umask without arguments simply returns the current umask otherwise the
 *         old umask is returned.
 */
declare function umask(umask?: number): number;

/**
 * Deletes a file
 * 
 * Deletes filename.  Similar to the Unix C unlink() function. A E_WARNING level
 * error will be generated on failure.
 *
 * @param filename Path to the file.
 * @param context 
 */
declare function unlink(filename: string, context?: Pct.PhpResource): bool;

//--------------------------------------------------------------------------------
// filter
//--------------------------------------------------------------------------------

/*
 * This extension filters data by either validating or sanitizing it. This is
 * especially useful when the data source contains unknown (or foreign) data, like
 * user supplied input. For example, this data may come from an HTML form.
 * 
 * There are two main types of filtering: validation and sanitization.
 * 
 * Validation is used to validate or check if the data meets certain
 * qualifications. For example, passing in FILTER_VALIDATE_EMAIL will determine if
 * the data is a valid email address, but will not change the data itself.
 * 
 * Sanitization will sanitize the data, so it may alter it by removing undesired
 * characters. For example, passing in FILTER_SANITIZE_EMAIL will remove characters
 * that are inappropriate for an email address to contain. That said, it does not
 * validate the data.
 * 
 * Flags are optionally used with both validation and sanitization to tweak
 * behaviour according to need. For example, passing in FILTER_FLAG_PATH_REQUIRED
 * while filtering an URL will require a path (like /foo in http://example.org/foo)
 * to be present.
 */

/**
 * ID of "callback" filter.
 */
declare var FILTER_CALLBACK: number;


/**
 * ID of default ("string") filter.
 */
declare var FILTER_DEFAULT: number;


/**
 * Allow fractional part in "number_float" filter.
 */
declare var FILTER_FLAG_ALLOW_FRACTION: number;

/**
 * Allow hex notation (0x[0-9a-fA-F]+) in "int" filter.
 */
declare var FILTER_FLAG_ALLOW_HEX: number;

/**
 * Allow octal notation (0[0-7]+) in "int" filter.
 */
declare var FILTER_FLAG_ALLOW_OCTAL: number;

/**
 * Allow scientific notation (e, E) in "number_float" filter.
 */
declare var FILTER_FLAG_ALLOW_SCIENTIFIC: number;

/**
 * Allow thousand separator (,) in "number_float" filter.
 */
declare var FILTER_FLAG_ALLOW_THOUSAND: number;

/**
 * (No use for now.)
 */
declare var FILTER_FLAG_EMPTY_STRING_NULL: number;

/**
 * Encode .
 */
declare var FILTER_FLAG_ENCODE_AMP: number;

/**
 * Encode characters with ASCII value greater than 127.
 */
declare var FILTER_FLAG_ENCODE_HIGH: number;

/**
 * Encode characters with ASCII value less than 32.
 */
declare var FILTER_FLAG_ENCODE_LOW: number;

/**
 * Allow only IPv4 address in "validate_ip" filter.
 */
declare var FILTER_FLAG_IPV4: number;

/**
 * Allow only IPv6 address in "validate_ip" filter.
 */
declare var FILTER_FLAG_IPV6: number;

/**
 * Don't encode ' and ".
 */
declare var FILTER_FLAG_NO_ENCODE_QUOTES: number;

/**
 * Deny private addresses in "validate_ip" filter.
 */
declare var FILTER_FLAG_NO_PRIV_RANGE: number;

/**
 * Deny reserved addresses in "validate_ip" filter.
 */
declare var FILTER_FLAG_NO_RES_RANGE: number;

/**
 * No flags.
 */
declare var FILTER_FLAG_NONE: number;

/**
 * Require path in "validate_url" filter.
 */
declare var FILTER_FLAG_PATH_REQUIRED: number;

/**
 * Require query in "validate_url" filter.
 */
declare var FILTER_FLAG_QUERY_REQUIRED: number;

/**
 * Strip characters with ASCII value greater than 127.
 */
declare var FILTER_FLAG_STRIP_HIGH: number;

/**
 * Strip characters with ASCII value less than 32.
 */
declare var FILTER_FLAG_STRIP_LOW: number;


/**
 * Always returns an array.
 */
declare var FILTER_FORCE_ARRAY: number;


/**
 * Use NULL instead of FALSE on failure.
 */
declare var FILTER_NULL_ON_FAILURE: number;


/**
 * Require an array as input.
 */
declare var FILTER_REQUIRE_ARRAY: number;

/**
 * Flag used to require scalar as input
 */
declare var FILTER_REQUIRE_SCALAR: number;


/**
 * ID of "email" filter.
 */
declare var FILTER_SANITIZE_EMAIL: number;

/**
 * ID of "encoded" filter.
 */
declare var FILTER_SANITIZE_ENCODED: number;

/**
 * ID of "magic_quotes" filter.
 */
declare var FILTER_SANITIZE_MAGIC_QUOTES: number;

/**
 * ID of "number_float" filter.
 */
declare var FILTER_SANITIZE_NUMBER_FLOAT: number;

/**
 * ID of "number_int" filter.
 */
declare var FILTER_SANITIZE_NUMBER_INT: number;

/**
 * ID of "special_chars" filter.
 */
declare var FILTER_SANITIZE_SPECIAL_CHARS: number;

/**
 * ID of "string" filter.
 */
declare var FILTER_SANITIZE_STRING: number;

/**
 * ID of "stripped" filter.
 */
declare var FILTER_SANITIZE_STRIPPED: number;

/**
 * ID of "url" filter.
 */
declare var FILTER_SANITIZE_URL: number;


/**
 * ID of "unsafe_raw" filter.
 */
declare var FILTER_UNSAFE_RAW: number;


/**
 * ID of "boolean" filter.
 */
declare var FILTER_VALIDATE_BOOLEAN: number;

/**
 * ID of "validate_email" filter.
 */
declare var FILTER_VALIDATE_EMAIL: number;

/**
 * ID of "float" filter.
 */
declare var FILTER_VALIDATE_FLOAT: number;

/**
 * ID of "int" filter.
 */
declare var FILTER_VALIDATE_INT: number;

/**
 * ID of "validate_ip" filter.
 */
declare var FILTER_VALIDATE_IP: number;

/**
 * ID of "validate_regexp" filter.
 */
declare var FILTER_VALIDATE_REGEXP: number;

/**
 * ID of "validate_url" filter.
 */
declare var FILTER_VALIDATE_URL: number;


/**
 * COOKIE variables.
 */
declare var INPUT_COOKIE: number;

/**
 * ENV variables.
 */
declare var INPUT_ENV: number;

/**
 * GET variables.
 */
declare var INPUT_GET: number;

/**
 * POST variables.
 */
declare var INPUT_POST: number;

/**
 * REQUEST variables. (not implemented yet)
 */
declare var INPUT_REQUEST: number;

/**
 * SERVER variables.
 */
declare var INPUT_SERVER: number;

/**
 * SESSION variables. (not implemented yet)
 */
declare var INPUT_SESSION: number;


/**
 * Checks if variable of specified type exists
 *
 * @param type One of INPUT_GET, INPUT_POST, INPUT_COOKIE, INPUT_SERVER, or
 *             INPUT_ENV.
 * @param variable_name Name of a variable to check.
 */
declare function filter_has_var(type: number, variable_name: string): bool;

/**
 * Returns the filter ID belonging to a named filter
 *
 * @param filtername Name of a filter to get.
 * @return ID of a filter on success or false if filter doesn't exist.
 */
declare function filter_id(filtername: string): number;

/**
 * Gets a specific external variable by name and optionally filters it
 *
 * @param type One of INPUT_GET, INPUT_POST, INPUT_COOKIE, INPUT_SERVER, or
 *             INPUT_ENV.
 * @param variable_name Name of a variable to get.
 * @param filter The ID of the filter to apply. The  manual page lists the
 *               available filters.
 * @param options Associative array of options or bitwise disjunction of flags. If
 *                filter accepts options, flags can be provided in "flags" field
 *                of array.
 * @return Value of the requested variable on success, false if the filter fails,
 *         or  if the variable_name variable is not set. If the flag
 *         FILTER_NULL_ON_FAILURE is used, it returns false if the variable is not
 *         set and  if the filter fails.
 */
declare function filter_input(type: number, variable_name: string, filter?: number, options?: any): any;

/**
 * Gets external variables and optionally filters them
 * 
 * This function is useful for retrieving many values without repetitively calling
 * filter_input.
 *
 * @param type One of INPUT_GET, INPUT_POST, INPUT_COOKIE, INPUT_SERVER, or
 *             INPUT_ENV.
 * @param definition An array defining the arguments. A valid key is a string
 *                   containing a variable name and a valid value is either a
 *                   filter type, or an array optionally specifying the filter,
 *                   flags and options. If the value is an array, valid keys are
 *                   filter which specifies the filter type, flags which specifies
 *                   any flags that apply to the filter, and options which
 *                   specifies any options that apply to the filter. See the
 *                   example below for a better understanding.
 *                   
 *                   This parameter can be also an integer holding a filter
 *                   constant. Then all values in the input array are filtered by
 *                   this filter.
 * @return An array containing the values of the requested variables on success,
 *         or false on failure. An array value will be false if the filter fails,
 *         or  if the variable is not set. Or if the flag FILTER_NULL_ON_FAILURE
 *         is used, it returns false if the variable is not set and  if the filter
 *         fails.
 */
declare function filter_input_array(type: number, definition?: any): any;

/**
 * Returns a list of all supported filters
 * @return Returns an array of names of all supported filters, empty array if
 *         there are no such filters. Indexes of this array are not filter IDs,
 *         they can be obtained with filter_id from a name instead.
 */
declare function filter_list(): string[];

/**
 * Filters a variable with a specified filter
 *
 * @param variable Value to filter.
 * @param filter The ID of the filter to apply. The  manual page lists the
 *               available filters.
 * @param options Associative array of options or bitwise disjunction of flags. If
 *                filter accepts options, flags can be provided in "flags" field
 *                of array. For the "callback" filter, callable type should be
 *                passed.  The callback must accept one argument, the value to be
 *                filtered, and return the value after filtering/sanitizing it.
 *                
 *                array( 'default' => 3, // value to return if the filter fails //
 *                other options here 'min_range' => 0 ), 'flags' =>
 *                FILTER_FLAG_ALLOW_OCTAL, ); $var = filter_var('0755',
 *                FILTER_VALIDATE_INT, $options);  // for filter that only accept
 *                flags, you can pass them directly $var = filter_var('oops',
 *                FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);  // for filter
 *                that only accept flags, you can also pass as an array $var =
 *                filter_var('oops', FILTER_VALIDATE_BOOLEAN, array('flags' =>
 *                FILTER_NULL_ON_FAILURE));  // callback validate filter function
 *                foo($value) { // Expected format: Surname, GivenNames if
 *                (strpos($value, ", ") === false) return false; list($surname,
 *                $givennames) = explode(", ", $value, 2); $empty =
 *                (empty($surname) || empty($givennames)); $notstrings =
 *                (!is_string($surname) || !is_string($givennames)); if ($empty ||
 *                $notstrings) { return false; } else { return $value; } } $var =
 *                filter_var('Doe, Jane Sue', FILTER_CALLBACK, array('options' =>
 *                'foo')); ?> ]]>
 * @return Returns the filtered data, or false if the filter fails.
 */
declare function filter_var(variable: any, filter?: number, options?: any): any;

/**
 * Gets multiple variables and optionally filters them
 * 
 * This function is useful for retrieving many values without repetitively calling
 * filter_var.
 *
 * @param data An array with string keys containing the data to filter.
 * @param definition An array defining the arguments. A valid key is a string
 *                   containing a variable name and a valid value is either a
 *                   filter type, or an array optionally specifying the filter,
 *                   flags and options. If the value is an array, valid keys are
 *                   filter which specifies the filter type, flags which specifies
 *                   any flags that apply to the filter, and options which
 *                   specifies any options that apply to the filter. See the
 *                   example below for a better understanding.
 *                   
 *                   This parameter can be also an integer holding a filter
 *                   constant. Then all values in the input array are filtered by
 *                   this filter.
 * @return An array containing the values of the requested variables on success,
 *         or false on failure. An array value will be false if the filter fails,
 *         or  if the variable is not set.
 */
declare function filter_var_array(data: Pct.PhpAssocArray, definition?: any): any;

//--------------------------------------------------------------------------------
// funchand
//--------------------------------------------------------------------------------

/*
 * These functions all handle various operations involved in working with
 * functions.
 */

/**
 * Call the callback given by the first parameter
 * 
 * Calls the callback given by the first parameter and passes the remaining
 * parameters as arguments.
 *
 * @param callback The callable to be called.
 * @param parameter Zero or more parameters to be passed to the callback.
 *                  
 *                  Note that the parameters for call_user_func are not passed by
 *                  reference.  call_user_func example and references   ]]>
 * @return Returns the return value of the callback, or false on error.
 */
declare function call_user_func(callback: string, ...parameter: any[]): any;

/**
 * Call the callback given by the first parameter
 * 
 * Calls the callback given by the first parameter and passes the remaining
 * parameters as arguments.
 *
 * @param callback The callable to be called.
 * @param parameter Zero or more parameters to be passed to the callback.
 *                  
 *                  Note that the parameters for call_user_func are not passed by
 *                  reference.  call_user_func example and references   ]]>
 * @return Returns the return value of the callback, or false on error.
 */
declare function call_user_func(callback: Function, ...parameter: any[]): any;

/**
 * Call a callback with an array of parameters
 * 
 * Calls the callback given by the first parameter with the parameters in
 * param_arr.
 *
 * @param callback The callable to be called.
 * @param param_arr The parameters to be passed to the callback, as an indexed
 *                  array.
 * @return Returns the return value of the callback, or false on error.
 */
declare function call_user_func_array(callback: string, param_arr: any[]): any;

/**
 * Call a callback with an array of parameters
 * 
 * Calls the callback given by the first parameter with the parameters in
 * param_arr.
 *
 * @param callback The callable to be called.
 * @param param_arr The parameters to be passed to the callback, as an indexed
 *                  array.
 * @return Returns the return value of the callback, or false on error.
 */
declare function call_user_func_array(callback: Function, param_arr: any[]): any;

/**
 * Create an anonymous (lambda-style) function
 * 
 * Creates an anonymous function from the parameters passed, and returns a unique
 * name for it.
 *
 * @param args The function arguments.
 * @param code The function code.
 * @return Returns a unique function name as a string, or false on error.
 */
declare function create_function(args: string, code: string): string;

/**
 * Call a static method
 * 
 * Calls a user defined function or method given by the function parameter, with
 * the following arguments. This function must be called within a method context,
 * it can't be used outside a class. It uses the late static binding.
 *
 * @param callback
 * @param parameter Zero or more parameters to be passed to the function.
 * @return Returns the function result, or false on error.
 */
declare function forward_static_call(callback: string, ...parameter: any[]): any;

/**
 * Call a static method
 * 
 * Calls a user defined function or method given by the function parameter, with
 * the following arguments. This function must be called within a method context,
 * it can't be used outside a class. It uses the late static binding.
 *
 * @param callback
 * @param parameter Zero or more parameters to be passed to the function.
 * @return Returns the function result, or false on error.
 */
declare function forward_static_call(callback: Function, ...parameter: any[]): any;

/**
 * Call a static method and pass the arguments as array
 * 
 * Calls a user defined function or method given by the function parameter. This
 * function must be called within a method context, it can't be used outside a
 * class. It uses the late static binding. All arguments of the forwarded method
 * are passed as values, and as an array, similarly to call_user_func_array.
 *
 * @param callback
 * @param parameters 
 * @return Returns the function result, or false on error.
 */
declare function forward_static_call_array(callback: string, parameters: any[]): any;

/**
 * Call a static method and pass the arguments as array
 * 
 * Calls a user defined function or method given by the function parameter. This
 * function must be called within a method context, it can't be used outside a
 * class. It uses the late static binding. All arguments of the forwarded method
 * are passed as values, and as an array, similarly to call_user_func_array.
 *
 * @param callback
 * @param parameters 
 * @return Returns the function result, or false on error.
 */
declare function forward_static_call_array(callback: Function, parameters: any[]): any;

/**
 * Return an item from the argument list
 * 
 * Gets the specified argument from a user-defined function's argument list.
 * 
 * This function may be used in conjunction with func_get_args and func_num_args to
 * allow user-defined functions to accept variable-length argument lists.
 *
 * @param arg_num The argument offset. Function arguments are counted starting
 *                from zero.
 * @return Returns the specified argument, or false on error.
 */
declare function func_get_arg(arg_num: number): any;

/**
 * Returns an array comprising a function's argument list
 * 
 * Gets an array of the function's argument list.
 * 
 * This function may be used in conjunction with func_get_arg and func_num_args to
 * allow user-defined functions to accept variable-length argument lists.
 * @return Returns an array in which each element is a copy of the corresponding
 *         member of the current user-defined function's argument list.
 */
declare function func_get_args(): any[];

/**
 * Returns the number of arguments passed to the function
 * 
 * Gets the number of arguments passed to the function.
 * 
 * This function may be used in conjunction with func_get_arg and func_get_args to
 * allow user-defined functions to accept variable-length argument lists.
 * @return Returns the number of arguments passed into the current user-defined
 *         function.
 */
declare function func_num_args(): number;

/**
 * Return true if the given function has been defined
 * 
 * Checks the list of defined functions, both built-in (internal) and user-defined,
 * for function_name.
 *
 * @param function_name The function name, as a string.
 * @return Returns true if function_name exists and is a function, false
 *         otherwise.
 *         
 *         This function will return false for constructs, such as include_once
 *         and echo.
 */
declare function function_exists(function_name: string): bool;

/**
 * Returns an array of all defined functions
 * 
 * Gets an array of all defined functions.
 * @return Returns a multidimensional array containing a list of all defined
 *         functions, both built-in (internal) and user-defined. The internal
 *         functions will be accessible via $arr["internal"], and the user defined
 *         ones using $arr["user"] (see example below).
 */
declare function get_defined_functions(): Pct.PhpAssocArray;

/**
 * Register a function for execution on shutdown
 * 
 * Registers a callback to be executed after script execution finishes or exit is
 * called.
 * 
 * Multiple calls to register_shutdown_function can be made, and each will be
 * called in the same order as they were registered. If you call exit within one
 * registered shutdown function, processing will stop completely and no other
 * registered shutdown functions will be called.
 *
 * @param callback The shutdown callback to register.
 *                 
 *                 The shutdown callbacks are executed as the part of the request,
 *                 so it's possible to send output from them and access output
 *                 buffers.
 * @param parameter It is possible to pass parameters to the shutdown function by
 *                  passing additional parameters.
 */
declare function register_shutdown_function(callback: string, ...parameter: any[]);

/**
 * Register a function for execution on shutdown
 * 
 * Registers a callback to be executed after script execution finishes or exit is
 * called.
 * 
 * Multiple calls to register_shutdown_function can be made, and each will be
 * called in the same order as they were registered. If you call exit within one
 * registered shutdown function, processing will stop completely and no other
 * registered shutdown functions will be called.
 *
 * @param callback The shutdown callback to register.
 *                 
 *                 The shutdown callbacks are executed as the part of the request,
 *                 so it's possible to send output from them and access output
 *                 buffers.
 * @param parameter It is possible to pass parameters to the shutdown function by
 *                  passing additional parameters.
 */
declare function register_shutdown_function(callback: Function, ...parameter: any[]);

/**
 * Register a function for execution on each tick
 *
 * @param callback
 * @param arg 
 */
declare function register_tick_function(callback: string, ...arg: any[]): bool;

/**
 * Register a function for execution on each tick
 *
 * @param callback
 * @param arg 
 */
declare function register_tick_function(callback: Function, ...arg: any[]): bool;

/**
 * De-register a function for execution on each tick
 *
 * @param function_name The function name, as a string.
 */
declare function unregister_tick_function(function_name: string);

//--------------------------------------------------------------------------------
// info
//--------------------------------------------------------------------------------

/*
 * This functions enable you to get a lot of information about PHP itself, e.g.
 * runtime configuration, loaded extensions, version and much more. You'll also
 * find functions to set options for your running PHP. The probably best known
 * function of PHP - phpinfo - can be found here.
 */
declare var ASSERT_ACTIVE: number;
declare var ASSERT_WARNING: number;
declare var ASSERT_BAIL: number;
declare var ASSERT_QUIET_EVAL: number;
declare var ASSERT_CALLBACK: number;

declare var CREDITS_ALL: number;
declare var CREDITS_DOC: number;
declare var CREDITS_FULLPAGE: number;
declare var CREDITS_GENERAL: number;
declare var CREDITS_GROUP: number;
declare var CREDITS_MODULES: number;
declare var CREDITS_SAPI: number;

declare var INFO_GENERAL: number;
declare var INFO_CREDITS: number;
declare var INFO_CONFIGURATION: number;
declare var INFO_MODULES: number;
declare var INFO_ENVIRONMENT: number;
declare var INFO_VARIABLES: number;
declare var INFO_LICENSE: number;
declare var INFO_ALL: number;


/**
 * Set/get the various assert flags
 * 
 * Set the various assert control options or just query their current settings.
 *
 * @param what Assert Options    Option INI Setting Default value Description    
 *             ASSERT_ACTIVE assert.active 1 enable assert evaluation  
 *             ASSERT_WARNING assert.warning 1 issue a PHP warning for each failed
 *             assertion   ASSERT_BAIL assert.bail 0 terminate execution on failed
 *             assertions   ASSERT_QUIET_EVAL assert.quiet_eval 0  disable
 *             error_reporting during assertion expression evaluation   
 *             ASSERT_CALLBACK assert.callback () Callback to call on failed
 *             assertions
 * @param value An optional new value for the option.
 * @return Returns the original setting of any option or false on errors.
 */
declare function assert_options(what: number, value?: any): any;

/**
 * Checks if assertion is false
 * 
 * assert will check the given assertion and take appropriate action if its result
 * is false.
 * 
 * If the assertion is given as a string it will be evaluated as PHP code by
 * assert. The advantages of a string assertion are less overhead when assertion
 * checking is off and messages containing the assertion expression when an
 * assertion fails. This means that if you pass a boolean condition as assertion
 * this condition will not show up as parameter to the assertion function which you
 * may have defined with the assert_options function, the condition is converted to
 * a string before calling that handler function, and the boolean false is
 * converted as the empty string.
 * 
 * Assertions should be used as a debugging feature only. You may use them for
 * sanity-checks that test for conditions that should always be true and that
 * indicate some programming errors if not or to check for the presence of certain
 * features like extension functions or certain system limits and features.
 * 
 * Assertions should not be used for normal runtime operations like input parameter
 * checks. As a rule of thumb your code should always be able to work correctly if
 * assertion checking is not activated.
 * 
 * The behavior of assert may be configured by assert_options or by .ini-settings
 * described in that functions manual page.
 * 
 * The assert_options function and/or ASSERT_CALLBACK configuration directive allow
 * a callback function to be set to handle failed assertions.
 * 
 * assert callbacks are particularly useful for building automated test suites
 * because they allow you to easily capture the code passed to the assertion, along
 * with information on where the assertion was made. While this information can be
 * captured via other methods, using assertions makes it much faster and easier!
 * 
 * The callback function should accept three arguments. The first argument will
 * contain the file the assertion failed in. The second argument will contain the
 * line the assertion failed on and the third argument will contain the expression
 * that failed (if any — literal values such as 1 or "two" will not be passed via
 * this argument). Users of PHP 5.4.8 and later may also provide a fourth optional
 * argument, which will contain the description given to assert, if it was set.
 *
 * @param assertion The assertion.
 * @param description An optional description that will be included in the failure
 *                    message if the assertion fails.
 * @return false if the assertion is false, true otherwise.
 */
declare function assert(assertion: bool, description?: string): bool;

/**
 * Checks if assertion is false
 * 
 * assert will check the given assertion and take appropriate action if its result
 * is false.
 * 
 * If the assertion is given as a string it will be evaluated as PHP code by
 * assert. The advantages of a string assertion are less overhead when assertion
 * checking is off and messages containing the assertion expression when an
 * assertion fails. This means that if you pass a boolean condition as assertion
 * this condition will not show up as parameter to the assertion function which you
 * may have defined with the assert_options function, the condition is converted to
 * a string before calling that handler function, and the boolean false is
 * converted as the empty string.
 * 
 * Assertions should be used as a debugging feature only. You may use them for
 * sanity-checks that test for conditions that should always be true and that
 * indicate some programming errors if not or to check for the presence of certain
 * features like extension functions or certain system limits and features.
 * 
 * Assertions should not be used for normal runtime operations like input parameter
 * checks. As a rule of thumb your code should always be able to work correctly if
 * assertion checking is not activated.
 * 
 * The behavior of assert may be configured by assert_options or by .ini-settings
 * described in that functions manual page.
 * 
 * The assert_options function and/or ASSERT_CALLBACK configuration directive allow
 * a callback function to be set to handle failed assertions.
 * 
 * assert callbacks are particularly useful for building automated test suites
 * because they allow you to easily capture the code passed to the assertion, along
 * with information on where the assertion was made. While this information can be
 * captured via other methods, using assertions makes it much faster and easier!
 * 
 * The callback function should accept three arguments. The first argument will
 * contain the file the assertion failed in. The second argument will contain the
 * line the assertion failed on and the third argument will contain the expression
 * that failed (if any — literal values such as 1 or "two" will not be passed via
 * this argument). Users of PHP 5.4.8 and later may also provide a fourth optional
 * argument, which will contain the description given to assert, if it was set.
 *
 * @param assertion The assertion.
 * @param description An optional description that will be included in the failure
 *                    message if the assertion fails.
 * @return false if the assertion is false, true otherwise.
 */
declare function assert(assertion: string, description?: string): bool;

/**
 * Loads a PHP extension at runtime
 * 
 * Loads the PHP extension given by the parameter library.
 * 
 * Use extension_loaded to test whether a given extension is already available or
 * not. This works on both built-in extensions and dynamically loaded ones (either
 * through  or dl).
 *
 * @param library This parameter is only the filename of the extension to load
 *                which also depends on your platform. For example, the sockets
 *                extension (if compiled as a shared module, not the default!)
 *                would be called sockets.so on Unix platforms whereas it is
 *                called php_sockets.dll on the Windows platform.
 *                
 *                The directory where the extension is loaded from depends on your
 *                platform:
 *                
 *                Windows - If not explicitly set in the , the extension is loaded
 *                from C:\php4\extensions\ (PHP 4) or C:\php5\ (PHP 5) by default.
 *                
 *                
 *                Unix - If not explicitly set in the , the default extension
 *                directory depends on    whether PHP has been built with
 *                --enable-debug or not     whether PHP has been built with
 *                (experimental) ZTS (Zend Thread Safety) support or not     the
 *                current internal ZEND_MODULE_API_NO (Zend internal module API
 *                number, which is basically the date on which a major module API
 *                change happened, e.g. 20010901)    Taking into account the
 *                above, the directory then defaults to
 *                install-dir/lib/php/extensions/
 *                debug-or-not-zts-or-not-ZEND_MODULE_API_NO, e.g.
 *                /usr/local/php/lib/php/extensions/debug-non-zts-20010901 or
 *                /usr/local/php/lib/php/extensions/no-debug-zts-20010901.
 * @return If the functionality of loading modules is not available or has been
 *         disabled (either by setting enable_dl off or by enabling in ) an
 *         E_ERROR is emitted and execution is stopped. If dl fails because the
 *         specified library couldn't be loaded, in addition to false an E_WARNING
 *         message is emitted.
 */
declare function dl(library: string): bool;

/**
 * Find out whether an extension is loaded
 * 
 * Finds out whether the extension is loaded.
 *
 * @param name The extension name.
 *             
 *             You can see the names of various extensions by using phpinfo or if
 *             you're using the CGI or CLI version of PHP you can use the -m
 *             switch to list all available extensions:
 * @return Returns true if the extension identified by name is loaded, false
 *         otherwise.
 */
declare function extension_loaded(name: string): bool;

/**
 * Forces collection of any existing garbage cycles
 * 
 * Forces collection of any existing garbage cycles.
 * @return Returns number of collected cycles.
 */
declare function gc_collect_cycles(): number;

/**
 * Deactivates the circular reference collector
 * 
 * Deactivates the circular reference collector, setting zend.enable_gc to 0.
 */
declare function gc_disable();

/**
 * Activates the circular reference collector
 * 
 * Activates the circular reference collector, setting zend.enable_gc to 1.
 */
declare function gc_enable();

/**
 * Returns status of the circular reference collector
 * 
 * Returns status of the circular reference collector.
 * @return Returns true if the garbage collector is enabled, false otherwise.
 */
declare function gc_enabled(): bool;

/**
 * Gets the value of a PHP configuration option
 * 
 * Gets the value of a PHP configuration option.
 * 
 * This function will not return configuration information set when the PHP was
 * compiled, or read from an Apache configuration file.
 * 
 * To check whether the system is using a configuration file, try retrieving the
 * value of the cfg_file_path configuration setting. If this is available, a
 * configuration file is being used.
 *
 * @param option The configuration option name.
 * @return Returns the current value of the PHP configuration variable specified
 *         by option, or false if an error occurs.
 */
declare function get_cfg_var(option: string): string;

/**
 * Gets the name of the owner of the current PHP script
 * @return Returns the username as a string.
 */
declare function get_current_user(): string;

/**
 * Returns an associative array with the names of all the constants and their
 * values
 * 
 * Returns the names and values of all the constants currently defined. This
 * includes those created by extensions as well as those created with the define
 * function.
 *
 * @param categorize Causing this function to return a multi-dimensional array
 *                   with categories in the keys of the first dimension and
 *                   constants and their values in the second dimension.    ]]>   
 *                   Array ( [E_ERROR] => 1 [E_WARNING] => 2 [E_PARSE] => 4
 *                   [E_NOTICE] => 8 [E_CORE_ERROR] => 16 [E_CORE_WARNING] => 32
 *                   [E_COMPILE_ERROR] => 64 [E_COMPILE_WARNING] => 128
 *                   [E_USER_ERROR] => 256 [E_USER_WARNING] => 512 [E_USER_NOTICE]
 *                   => 1024 [E_ALL] => 2047 [TRUE] => 1 )  [pcre] => Array (
 *                   [PREG_PATTERN_ORDER] => 1 [PREG_SET_ORDER] => 2
 *                   [PREG_OFFSET_CAPTURE] => 256 [PREG_SPLIT_NO_EMPTY] => 1
 *                   [PREG_SPLIT_DELIM_CAPTURE] => 2 [PREG_SPLIT_OFFSET_CAPTURE]
 *                   => 4 [PREG_GREP_INVERT] => 1 )  [user] => Array (
 *                   [MY_CONSTANT] => 1 )  ) ]]>
 */
declare function get_defined_constants(categorize?: bool): Pct.PhpAssocArray;

/**
 * Returns an array with the names of the functions of a module
 * 
 * This function returns the names of all the functions defined in the module
 * indicated by module_name.
 *
 * @param module_name The module name.
 *                    
 *                    This parameter must be in lowercase.
 * @return Returns an array with all the functions, or false if module_name is not
 *         a valid extension.
 */
declare function get_extension_funcs(module_name: string): string[];

/**
 * Gets the current include_path configuration option
 * @return Returns the path, as a string.
 */
declare function get_include_path(): string;

/**
 * Returns an array with the names of included or required files
 * 
 * Gets the names of all files that have been included using include, include_once,
 * require or require_once.
 * @return Returns an array of the names of all files.
 *         
 *         The script originally called is considered an "included file," so it
 *         will be listed together with the files referenced by include and
 *         family.
 *         
 *         Files that are included or required multiple times only show up once in
 *         the returned array.
 */
declare function get_included_files(): string[];

/**
 * Returns an array with the names of all modules compiled and loaded
 * 
 * This function returns the names of all the modules compiled and loaded in the
 * PHP interpreter.
 *
 * @param zend_extensions Only return Zend extensions, if not then regular
 *                        extensions, like mysqli are listed. Defaults to false
 *                        (return regular extensions).
 * @return Returns an indexed array of all the modules names.
 */
declare function get_loaded_extensions(zend_extensions?: bool): string[];

/**
 * Gets the value of an environment variable
 * 
 * Gets the value of an environment variable.
 * 
 * You can see a list of all the environmental variables by using phpinfo. Many of
 * these variables are listed within RFC 3875, specifically section 4.1, "Request
 * Meta-Variables".
 *
 * @param varname The variable name.
 * @return Returns the value of the environment variable varname, or false if the
 *         environment variable varname does not exist.
 */
declare function getenv(varname: string): string;

/**
 * Gets time of last page modification
 * 
 * Gets the time of the last modification of the current page.
 * 
 * If you're interested in getting the last modification time of a different file,
 * consider using filemtime.
 * @return Returns the time of the last modification of the current page. The
 *         value returned is a Unix timestamp, suitable for feeding to date.
 *         Returns false on error.
 */
declare function getlastmod(): number;

/**
 * Get PHP script owner's GID
 * @return Returns the group ID of the current script, or false on error.
 */
declare function getmygid(): number;

/**
 * Gets the inode of the current script
 * 
 * Gets the inode of the current script.
 * @return Returns the current script's inode as an integer, or false on error.
 */
declare function getmyinode(): number;

/**
 * Gets PHP's process ID
 * 
 * Gets the current PHP process ID.
 * @return Returns the current PHP process ID, or false on error.
 */
declare function getmypid(): number;

/**
 * Gets PHP script owner's UID
 * @return Returns the user ID of the current script, or false on error.
 */
declare function getmyuid(): number;

/**
 * Gets options from the command line argument list
 * 
 * Parses options passed to the script.
 *
 * @param options 
 * @param longopts 
 * @return This function will return an array of option / argument pairs or false
 *         on failure.
 *         
 *         The parsing of options will end at the first non-option found, anything
 *         that follows is discarded.
 */
declare function getopt(options: string, longopts?: Array): Pct.PhpAssocArray;

/**
 * Gets the current resource usages
 * 
 * This is an interface to getrusage(2). It gets data returned from the system
 * call.
 *
 * @param who If who is 1, getrusage will be called with RUSAGE_CHILDREN.
 * @return Returns an associative array containing the data returned from the
 *         system call. All entries are accessible by using their documented field
 *         names.
 */
declare function getrusage(who?: number): Pct.PhpAssocArray;

/**
 * Gets the value of a configuration option
 * 
 * Returns the value of the configuration option on success.
 *
 * @param varname The configuration option name.
 * @return Returns the value of the configuration option as a string on success,
 *         or an empty string for null values. Returns false if the configuration
 *         option doesn't exist.
 */
declare function ini_get(varname: string): string;

/**
 * Gets all configuration options
 * 
 * Returns all the registered configuration options.
 *
 * @param extension An optional extension name. If set, the function return only
 *                  options specific for that extension.
 * @param details Retrieve details settings or only the current value for each
 *                setting. Default is true (retrieve details).
 * @return Returns an associative array with directive name as the array key.
 *         
 *         When details is true (default) the array will contain global_value (set
 *         in ), local_value (perhaps set with ini_set or ), and access (the
 *         access level).
 *         
 *         When details is false the value will be the current value of the
 *         option.
 *         
 *         See the manual section for information on what access levels mean.
 *         
 *         It's possible for a directive to have multiple access levels, which is
 *         why access shows the appropriate bitmask values.
 */
declare function ini_get_all(extension?: string, details?: bool): Pct.PhpAssocArray;

/**
 * Restores the value of a configuration option
 * 
 * Restores a given configuration option to its original value.
 *
 * @param varname The configuration option name.
 */
declare function ini_restore(varname: string);

/**
 * Sets the value of a configuration option
 * 
 * Sets the value of the given configuration option.  The configuration option will
 * keep this new value during the script's execution, and will be restored at the
 * script's ending.
 *
 * @param varname Not all the available options can be changed using ini_set.
 *                There is a list of all available options in the appendix.
 * @param newvalue The new value for the option.
 * @return Returns the old value on success, false on failure.
 */
declare function ini_set(varname: string, newvalue: string): string;

/**
 * Returns the peak of memory allocated by PHP
 * 
 * Returns the peak of memory, in bytes, that's been allocated to your PHP script.
 *
 * @param real_usage Set this to true to get the real size of memory allocated
 *                   from system. If not set or false only the memory used by
 *                   emalloc() is reported.
 * @return Returns the memory peak in bytes.
 */
declare function memory_get_peak_usage(real_usage?: bool): number;

/**
 * Returns the amount of memory allocated to PHP
 * 
 * Returns the amount of memory, in bytes, that's currently being allocated to your
 * PHP script.
 *
 * @param real_usage Set this to true to get the real size of memory allocated
 *                   from system. If not set or false only the memory used by
 *                   emalloc() is reported.
 * @return Returns the memory amount in bytes.
 */
declare function memory_get_usage(real_usage?: bool): number;

/**
 * Retrieve a path to the loaded php.ini file
 * 
 * Check if a  file is loaded, and retrieve its path.
 * @return The loaded  path, or false if one is not loaded.
 */
declare function php_ini_loaded_file(): string;

/**
 * Return a list of .ini files parsed from the additional ini dir
 * 
 * php_ini_scanned_files returns a comma-separated list of configuration files
 * parsed after .  These files are found in a directory defined by the
 * --with-config-file-scan-dir option which is set during compilation.
 * 
 * The returned configuration files also include the path as declared in the
 * --with-config-file-scan-dir option.
 * @return Returns a comma-separated string of .ini files on success. Each comma
 *         is followed by a newline. If the directive --with-config-file-scan-dir
 *         wasn't set, false is returned.  If it was set and the directory was
 *         empty, an empty string is returned.  If a file is unrecognizable, the
 *         file will still make it into the returned string but a PHP error will
 *         also result. This PHP error will be seen both at compile time and while
 *         using php_ini_scanned_files.
 */
declare function php_ini_scanned_files(): string;

/**
 * Gets the logo guid
 * 
 * This function returns the ID which can be used to display the PHP logo using the
 * built-in image. Logo is displayed only if expose_php is On.
 * @return Returns PHPE9568F34-D428-11d2-A769-00AA001ACF42.
 */
declare function php_logo_guid(): string;

/**
 * Returns the type of interface between web server and PHP
 * @return Returns the interface type, as a lowercase string.
 *         
 *         Although not exhaustive, the possible return values include aolserver,
 *         apache, apache2filter, apache2handler, caudium, cgi (until PHP 5.3),
 *         cgi-fcgi, cli, continuity, embed, isapi, litespeed, milter, nsapi,
 *         phttpd, pi3web, roxen, thttpd, tux, and webjames.
 */
declare function php_sapi_name(): string;

/**
 * Returns information about the operating system PHP is running on
 * 
 * php_uname returns a description of the operating system PHP is running on.  This
 * is the same string you see at the very top of the phpinfo output.  For the name
 * of just the operating system, consider using the PHP_OS constant, but keep in
 * mind this constant will contain the operating system PHP was built on.
 * 
 * On some older UNIX platforms, it may not be able to determine the current OS
 * information in which case it will revert to displaying the OS PHP was built on. 
 * This will only happen if your uname() library call either doesn't exist or
 * doesn't work.
 *
 * @param mode mode is a single character that defines what information is
 *             returned:    'a': This is the default. Contains all modes in the
 *             sequence "s n r v m".     's': Operating system name. eg. FreeBSD. 
 *             'n': Host name. eg. localhost.example.com.     'r': Release name.
 *             eg. 5.1.2-RELEASE.     'v': Version information. Varies a lot
 *             between operating systems.     'm': Machine type. eg. i386.
 * @return Returns the description, as a string.
 */
declare function php_uname(mode?: string): string;

/**
 * Prints out the credits for PHP
 * 
 * This function prints out the credits listing the PHP developers, modules, etc.
 * It generates the appropriate HTML codes to insert the information in a page.
 *
 * @param flag To generate a custom credits page, you may want to use the flag
 *             parameter.
 *             
 *             Pre-defined phpcredits flags    name description     CREDITS_ALL 
 *             All the credits, equivalent to using: CREDITS_DOCS +
 *             CREDITS_GENERAL + CREDITS_GROUP + CREDITS_MODULES +
 *             CREDITS_FULLPAGE. It generates a complete stand-alone HTML page
 *             with the appropriate tags.    CREDITS_DOCS The credits for the
 *             documentation team   CREDITS_FULLPAGE  Usually used in combination
 *             with the other flags.  Indicates that a complete stand-alone HTML
 *             page needs to be printed including the information indicated by the
 *             other flags.    CREDITS_GENERAL  General credits: Language design
 *             and concept, PHP authors and SAPI module.    CREDITS_GROUP A list
 *             of the core developers   CREDITS_MODULES  A list of the extension
 *             modules for PHP, and their authors    CREDITS_SAPI  A list of the
 *             server API modules for PHP, and their authors
 */
declare function phpcredits(flag?: number): bool;

/**
 * Outputs information about PHP's configuration
 * 
 * Outputs a large amount of information about the current state of  PHP. This
 * includes information about PHP compilation options and extensions, the PHP
 * version, server information and environment (if compiled as a module), the PHP
 * environment, OS version information, paths, master and local values of
 * configuration options, HTTP headers, and the PHP License.
 * 
 * Because every system is setup differently, phpinfo is commonly used to check
 * configuration settings and for available predefined variables on a given system.
 * 
 * 
 * phpinfo is also a valuable debugging tool as it contains all EGPCS (Environment,
 * GET, POST, Cookie, Server) data.
 *
 * @param what The output may be customized by passing one or more of the
 *             following constants bitwise values summed together in the optional
 *             what parameter. One can also combine the respective constants or
 *             bitwise values together with the or operator.
 *             
 *             phpinfo options    Name (constant) Value Description    
 *             INFO_GENERAL 1  The configuration line,  location, build date, Web
 *             Server, System and more.    INFO_CREDITS 2  PHP Credits.  See also
 *             phpcredits.    INFO_CONFIGURATION 4  Current Local and Master
 *             values for PHP directives.  See also ini_get.    INFO_MODULES 8 
 *             Loaded modules and their respective settings.  See also
 *             get_loaded_extensions.    INFO_ENVIRONMENT 16  Environment Variable
 *             information that's also available in $_ENV.    INFO_VARIABLES 32 
 *             Shows all  predefined variables from EGPCS (Environment, GET, POST,
 *             Cookie, Server).    INFO_LICENSE 64  PHP License information.  See
 *             also the license FAQ.    INFO_ALL -1  Shows all of the above.
 */
declare function phpinfo(what?: number): bool;

/**
 * Gets the current PHP version
 * 
 * Returns a string containing the version of the currently running PHP parser or
 * extension.
 *
 * @param extension An optional extension name.
 * @return If the optional extension parameter is specified, phpversion returns
 *         the version of that extension, or false if there is no version
 *         information associated or the extension isn't enabled.
 */
declare function phpversion(extension?: string): string;

/**
 * Sets the value of an environment variable
 * 
 * Adds setting to the server environment.  The environment variable will only
 * exist for the duration of the current request. At the end of the request the
 * environment is restored to its original state.
 * 
 * Setting certain environment variables may be a potential security breach. The
 * safe_mode_allowed_env_vars directive contains a comma-delimited list of
 * prefixes. In Safe Mode, the user may only alter environment variables whose
 * names begin with the prefixes supplied by this directive. By default, users will
 * only be able to set environment variables that begin with PHP_ (e.g.
 * PHP_FOO=BAR). Note: if this directive is empty, PHP will let the user modify ANY
 * environment variable!
 * 
 * The safe_mode_protected_env_vars directive contains a comma-delimited list of
 * environment variables, that the end user won't be able to change using putenv. 
 * These variables will be protected even if safe_mode_allowed_env_vars is set to
 * allow to change them.
 *
 * @param setting The setting, like "FOO=BAR"
 */
declare function putenv(setting: string): bool;

/**
 * Restores the value of the include_path configuration option
 */
declare function restore_include_path();

/**
 * Sets the include_path configuration option
 * 
 * Sets the include_path configuration option for the duration of the script.
 *
 * @param new_include_path The new value for the include_path
 * @return Returns the old include_path on success.
 */
declare function set_include_path(new_include_path: string): string;

/**
 * Limits the maximum execution time
 * 
 * Set the number of seconds a script is allowed to run. If this is reached, the
 * script returns a fatal error. The default limit is 30 seconds or, if it exists,
 * the max_execution_time value defined in the .
 * 
 * When called, set_time_limit restarts the timeout counter from zero. In other
 * words, if the timeout is the default 30 seconds, and 25 seconds into script
 * execution a call such as set_time_limit(20) is made, the script will run for a
 * total of 45 seconds before timing out.
 *
 * @param seconds The maximum execution time, in seconds. If set to zero, no time
 *                limit is imposed.
 */
declare function set_time_limit(seconds: number);

/**
 * Returns directory path used for temporary files
 * 
 * Returns the path of the directory PHP stores temporary files in by default.
 * @return Returns the path of the temporary directory.
 */
declare function sys_get_temp_dir(): string;

/**
 * Compares two "PHP-standardized" version number strings
 * 
 * version_compare compares two "PHP-standardized" version number strings. This is
 * useful if you would like to write programs working only on some versions of PHP.
 * 
 * 
 * The function first replaces _, - and + with a dot . in the version strings and
 * also inserts dots . before and after any non number so that for example
 * '4.3.2RC1' becomes '4.3.2.RC.1'. Then it splits the results like if you were
 * using explode('.', $ver). Then it compares the parts starting from left to
 * right. If a part contains special version strings these are handled in the
 * following order: any string not found in this list dev  alpha = a  beta = b  RC
 * = rc  # pl = p. This way not only versions with different levels like '4.1' and
 * '4.1.2' can be compared but also any PHP specific version containing development
 * state.
 *
 * @param version1 First version number.
 * @param version2 Second version number.
 * @return By default, version_compare returns -1 if the first version is lower
 *         than the second, 0 if they are equal, and 1 if the second is lower.
 *         
 *         When using the optional operator argument, the function will return
 *         true if the relationship is the one specified by the operator, false
 *         otherwise.
 */
declare function version_compare(version1: string, version2: string): number;

/**
 * Compares two "PHP-standardized" version number strings
 * 
 * version_compare compares two "PHP-standardized" version number strings. This is
 * useful if you would like to write programs working only on some versions of PHP.
 * 
 * 
 * The function first replaces _, - and + with a dot . in the version strings and
 * also inserts dots . before and after any non number so that for example
 * '4.3.2RC1' becomes '4.3.2.RC.1'. Then it splits the results like if you were
 * using explode('.', $ver). Then it compares the parts starting from left to
 * right. If a part contains special version strings these are handled in the
 * following order: any string not found in this list dev  alpha = a  beta = b  RC
 * = rc  # pl = p. This way not only versions with different levels like '4.1' and
 * '4.1.2' can be compared but also any PHP specific version containing development
 * state.
 *
 * @param version1 First version number.
 * @param version2 Second version number.
 * @param operator If you specify the third optional operator argument, you can
 *                 test for a particular relationship. The possible operators are:
 *                 , lt, =, le, , gt, =, ge, ==, =, eq, !=, , ne respectively.
 *                 
 *                 This parameter is case-sensitive, so values should be
 *                 lowercase.
 * @return By default, version_compare returns -1 if the first version is lower
 *         than the second, 0 if they are equal, and 1 if the second is lower.
 *         
 *         When using the optional operator argument, the function will return
 *         true if the relationship is the one specified by the operator, false
 *         otherwise.
 */
declare function version_compare(version1: string, version2: string, operator: string): bool;

/**
 * Gets the Zend guid
 * 
 * This function returns the ID which can be used to display the Zend logo using
 * the built-in image.
 * @return Returns PHPE9568F35-D428-11d2-A769-00AA001ACF42.
 */
declare function zend_logo_guid(): string;

/**
 * Returns a unique identifier for the current thread
 * 
 * This function returns a unique identifier for the current thread.
 * @return Returns the thread id as an integer.
 */
declare function zend_thread_id(): number;

/**
 * Gets the version of the current Zend engine
 * 
 * Returns a string containing the version of the currently running Zend Engine.
 * @return Returns the Zend Engine version number, as a string.
 */
declare function zend_version(): string;

//--------------------------------------------------------------------------------
// json
//--------------------------------------------------------------------------------

/*
 * This extension implements the JavaScript Object Notation (JSON) data-interchange
 * format. The decoding is handled by a parser based on the JSON_checker by Douglas
 * Crockford.
 */

/**
 * Control character error, possibly incorrectly encoded. Available since PHP
 * 5.3.0.
 */
declare var JSON_ERROR_CTRL_CHAR: number;

/**
 * The maximum stack depth has been exceeded. Available since PHP 5.3.0.
 */
declare var JSON_ERROR_DEPTH: number;

/**
 * No error has occurred. Available since PHP 5.3.0.
 */
declare var JSON_ERROR_NONE: number;

/**
 * Occurs with underflow or with the modes mismatch. Available since PHP 5.3.0.
 */
declare var JSON_ERROR_STATE_MISMATCH: number;

/**
 * Syntax error. Available since PHP 5.3.0.
 */
declare var JSON_ERROR_SYNTAX: number;

/**
 * Malformed UTF-8 characters, possibly incorrectly encoded. This constant is
 * available as of PHP 5.3.3.
 */
declare var JSON_ERROR_UTF8: number;


/**
 * Encodes large integers as their original string value. Available since PHP
 * 5.4.0.
 */
declare var JSON_BIGINT_AS_STRING: number;

/**
 * Outputs an object rather than an array when a non-associative array is used.
 * Especially useful when the recipient of the output is expecting an object and
 * the array is empty. Available since PHP 5.3.0.
 */
declare var JSON_FORCE_OBJECT: number;

/**
 * All s are converted to \u0026. Available since PHP 5.3.0.
 */
declare var JSON_HEX_AMP: number;

/**
 * All ' are converted to \u0027. Available since PHP 5.3.0.
 */
declare var JSON_HEX_APOS: number;

/**
 * All " are converted to \u0022. Available since PHP 5.3.0.
 */
declare var JSON_HEX_QUOT: number;

/**
 * All  and  are converted to \u003C and \u003E. Available since PHP 5.3.0.
 */
declare var JSON_HEX_TAG: number;

/**
 * Encodes numeric strings as numbers. Available since PHP 5.3.3.
 */
declare var JSON_NUMERIC_CHECK: number;

/**
 * Use whitespace in returned data to format it. Available since PHP 5.4.0.
 */
declare var JSON_PRETTY_PRINT: number;

/**
 * Don't escape /. Available since PHP 5.4.0.
 */
declare var JSON_UNESCAPED_SLASHES: number;

/**
 * Encode multibyte Unicode characters literally (default is to escape as \uXXXX).
 * Available since PHP 5.4.0.
 */
declare var JSON_UNESCAPED_UNICODE: number;


/**
 * Objects implementing JsonSerializable can customize their JSON representation
 * when encoded with json_encode.
 */
declare interface JsonSerializable {
    
    /**
     * Specify data which should be serialized to JSON
     * 
     * Serializes the object to a value that can be serialized natively by json_encode.
     * @return Returns data which can be serialized by json_encode, which is a value
     *         of any type other than a resource.
     */
    jsonSerialize(): any;
}


/**
 * Decodes a JSON string
 * 
 * Takes a JSON encoded string and converts it into a PHP variable.
 *
 * @param json The json string being decoded.
 *             
 *             This function only works with UTF-8 encoded data.
 * @param assoc When true, returned objects will be converted into associative
 *              arrays.
 * @param depth User specified recursion depth.
 * @param options Bitmask of JSON decode options.  Currently only
 *                JSON_BIGINT_AS_STRING is supported (default is to cast large
 *                integers as floats)
 * @return Returns the value encoded in json in appropriate PHP type. Values true,
 *         false and null (case-insensitive) are returned as true, false and 
 *         respectively.  is returned if the json cannot be decoded or if the
 *         encoded data is deeper than the recursion limit.
 */
declare function json_decode(json: string, assoc?: bool, depth?: number, options?: number): any;

/**
 * Returns the JSON representation of a value
 * 
 * Returns a string containing the JSON representation of value.
 *
 * @param value The value being encoded. Can be any type except a resource.
 *              
 *              This function only works with UTF-8 encoded data.
 * @param options Bitmask consisting of JSON_HEX_QUOT, JSON_HEX_TAG, JSON_HEX_AMP,
 *                JSON_HEX_APOS, JSON_NUMERIC_CHECK, JSON_PRETTY_PRINT,
 *                JSON_UNESCAPED_SLASHES, JSON_FORCE_OBJECT,
 *                JSON_UNESCAPED_UNICODE. The behaviour of these constants is
 *                described on the JSON constants page.
 * @return Returns a JSON encoded string on success .
 */
declare function json_encode(value: any, options?: number): string;

/**
 * Returns the last error occurred
 * 
 * Returns the last error (if any) occurred during the last JSON encoding/decoding.
 * @return Returns an integer, the value can be one of the following constants:
 */
declare function json_last_error(): number;

//--------------------------------------------------------------------------------
// libxml
//--------------------------------------------------------------------------------

/*
 * These functions/constants are available as of PHP 5.1.0, and the following core
 * extensions rely on this libxml extension: DOM, libxml, SimpleXML, SOAP, WDDX,
 * XSL, XSLT, XML, XMLReader, XMLRPC XMLWriter.
 */

/**
 * Activate small nodes allocation optimization. This may speed up your application
 * without needing to change the code.
 */
var LIBXML_COMPACT: number;

/**
 * libxml version like 2.6.5 or 2.6.17
 */
var LIBXML_DOTTED_VERSION: number;

/**
 * Default DTD attributes
 */
var LIBXML_DTDATTR: number;

/**
 * Load the external subset
 */
var LIBXML_DTDLOAD: number;

/**
 * Validate with the DTD
 */
var LIBXML_DTDVALID: number;

/**
 * A recoverable error
 */
var LIBXML_ERR_ERROR: number;

/**
 * A fatal error
 */
var LIBXML_ERR_FATAL: number;

/**
 * No errors
 */
var LIBXML_ERR_NONE: number;

/**
 * A simple warning
 */
var LIBXML_ERR_WARNING: number;

/**
 * Remove blank nodes
 */
var LIBXML_NOBLANKS: number;

/**
 * Merge CDATA as text nodes
 */
var LIBXML_NOCDATA: number;

/**
 * Expand empty tags (e.g. br/ to br/br)
 */
var LIBXML_NOEMPTYTAG: number;

/**
 * Substitute entities
 */
var LIBXML_NOENT: number;

/**
 * Suppress error reports
 */
var LIBXML_NOERROR: number;

/**
 * Disable network access when loading documents
 */
var LIBXML_NONET: number;

/**
 * Suppress warning reports
 */
var LIBXML_NOWARNING: number;

/**
 * Drop the XML declaration when saving a document
 */
var LIBXML_NOXMLDECL: number;

/**
 * Remove redundant namespaces declarations
 */
var LIBXML_NSCLEAN: number;

/**
 * Sets XML_PARSE_HUGE flag, which relaxes any hardcoded limit from the parser.
 * This affects limits like maximum depth of a document or the entity recursion, as
 * well as limits of the size of text nodes.
 */
var LIBXML_PARSEHUGE: number;

/**
 * libxml version like 20605 or 20617
 */
var LIBXML_VERSION: number;

/**
 * Implement XInclude substitution
 */
var LIBXML_XINCLUDE: number;

class LibXMLError {
    level: number;
    code: number;
    column: number;
    message: string;
    file: string;
    line: number;
}


/**
 * Clear libxml error buffer
 * 
 * libxml_clear_errors clears the libxml error buffer.
 */
function libxml_clear_errors();

/**
 * Disable the ability to load external entities
 * 
 * Disable/enable the ability to load external entities.
 *
 * @param disable Disable (true) or enable (false) libxml extensions (such as , 
 *                and ) to load external entities.
 * @return Returns the previous value.
 */
function libxml_disable_entity_loader(disable?: bool): bool;

/**
 * Retrieve array of errors
 * 
 * Retrieve array of errors.
 * @return Returns an array with LibXMLError objects if there are any errors in
 *         the buffer, or an empty array otherwise.
 */
function libxml_get_errors(): LibXMLError[];

/**
 * Retrieve last error from libxml
 * 
 * Retrieve last error from libxml.
 * @return Returns a LibXMLError object if there is any error in the buffer, false
 *         otherwise.
 */
function libxml_get_last_error(): LibXMLError;

/**
 * Changes the default external entity loader
 * 
 * Changes the default external entity loader.
 *
 * @param resolver_function A callable that takes three arguments. Two strings, a
 *                          public id and system id, and a context (an array with
 *                          four keys) as the third argument. This callback should
 *                          return a resource, a string from which a resource can
 *                          be opened, or .
 */
function libxml_set_external_entity_loader(resolver_function: (publicId: string, systemId: string, context: Pct.PhpAssocArray) => any);

/**
 * Set the streams context for the next libxml document load or write
 * 
 * Sets the streams context for the next libxml document load or write.
 *
 * @param streams_context The stream context resource (created with
 *                        stream_context_create)
 */
function libxml_set_streams_context(streams_context: Pct.PhpResource);

/**
 * Disable libxml errors and allow user to fetch error information as needed
 * 
 * libxml_use_internal_errors allows you to disable standard libxml errors and
 * enable user error handling.
 *
 * @param use_errors Enable (true) user error handling or disable (false) user
 *                   error handling. Disabling will also clear any existing libxml
 *                   errors.
 * @return This function returns the previous value of use_errors.
 */
function libxml_use_internal_errors(use_errors?: bool): bool;

//--------------------------------------------------------------------------------
// mail
//--------------------------------------------------------------------------------

/*
 * The mail function allows you to send mail.
 */

/**
 * Calculate the hash value needed by EZMLM
 *
 * @param addr The email address that's being hashed.
 * @return The hash value of addr.
 */
declare function ezmlm_hash(addr: string): number;

/**
 * Send mail
 * 
 * Sends an email.
 *
 * @param to Receiver, or receivers of the mail.
 *           
 *           The formatting of this string must comply with RFC 2822. Some
 *           examples are:  user@example.com user@example.com,
 *           anotheruser@example.com User user@example.com User user@example.com,
 *           Another User anotheruser@example.com
 * @param subject Subject of the email to be sent.
 *                
 *                Subject must satisfy RFC 2047.
 * @param message Message to be sent.
 *                
 *                Each line should be separated with a LF (\n). Lines should not
 *                be larger than 70 characters.
 *                
 *                (Windows only) When PHP is talking to a SMTP server directly, if
 *                a full stop is found on the start of a line, it is removed. To
 *                counter-act this, replace these occurrences with a double dot.  
 *                ]]>
 * @param additional_headers String to be inserted at the end of the email header.
 *                           
 *                           This is typically used to add extra headers (From,
 *                           Cc, and Bcc). Multiple extra headers should be
 *                           separated with a CRLF (\r\n).
 *                           
 *                           When sending mail, the mail must contain a From
 *                           header. This can be set with the additional_headers
 *                           parameter, or a default can be set in .
 *                           
 *                           Failing to do this will result in an error message
 *                           similar to Warning: mail(): "sendmail_from" not set
 *                           in php.ini or custom "From:" header missing. The From
 *                           header sets also Return-Path under Windows.
 *                           
 *                           If messages are not received, try using a LF (\n)
 *                           only. Some Unix mail transfer agents (most notably
 *                           qmail) replace LF by CRLF automatically (which leads
 *                           to doubling CR if CRLF is used). This should be a
 *                           last resort, as it does not comply with RFC 2822.
 * @param additional_parameters The additional_parameters parameter can be used to
 *                              pass additional flags as command line options to
 *                              the program configured to be used when sending
 *                              mail, as defined by the sendmail_path
 *                              configuration setting. For example, this can be
 *                              used to set the envelope sender address when using
 *                              sendmail with the -f sendmail option.
 *                              
 *                              The user that the webserver runs as should be
 *                              added as a trusted user to the sendmail
 *                              configuration to prevent a 'X-Warning' header from
 *                              being added to the message when the envelope
 *                              sender (-f) is set using this method. For sendmail
 *                              users, this file is /etc/mail/trusted-users.
 * @return Returns true if the mail was successfully accepted for delivery, false
 *         otherwise.
 *         
 *         It is important to note that just because the mail was accepted for
 *         delivery, it does NOT mean the mail will actually reach the intended
 *         destination.
 */
declare function mail(to: string, subject: string, message: string, additional_headers?: string, additional_parameters?: string): bool;

//--------------------------------------------------------------------------------
// math
//--------------------------------------------------------------------------------

/*
 * These math functions will only handle values within the range of the integer and
 * float types on your computer (this corresponds currently to the C types long
 * resp. double). If you need to handle bigger numbers, take a look at the
 * arbitrary precision math functions.
 */
declare var INF: number;
declare var NAN: number;

declare var M_1_PI: number;
declare var M_2_PI: number;
declare var M_2_SQRTPI: number;
declare var M_E: number;
declare var M_EULER: number;
declare var M_LN10: number;
declare var M_LN2: number;
declare var M_LNPI: number;
declare var M_LOG10E: number;
declare var M_LOG2E: number;
declare var M_PI: number;
declare var M_PI_2: number;
declare var M_PI_4: number;
declare var M_SQRT1_2: number;
declare var M_SQRT2: number;
declare var M_SQRT3: number;
declare var M_SQRTPI: number;

declare var PHP_ROUND_HALF_DOWN: number;
declare var PHP_ROUND_HALF_EVEN: number;
declare var PHP_ROUND_HALF_ODD: number;
declare var PHP_ROUND_HALF_UP: number;


/**
 * Absolute value
 * 
 * Returns the absolute value of number.
 *
 * @param number_ The numeric value to process
 * @return The absolute value of number. If the argument number is of type float,
 *         the return type is also float, otherwise it is integer (as float
 *         usually has a bigger value range than integer).
 */
declare function abs(number_: number): number;

/**
 * Arc cosine
 * 
 * Returns the arc cosine of arg in radians. acos is the complementary function of
 * cos, which means that a==cos(acos(a)) for every value of a that is within acos'
 * range.
 *
 * @param arg The argument to process
 * @return The arc cosine of arg in radians.
 */
declare function acos(arg: number): number;

/**
 * Inverse hyperbolic cosine
 * 
 * Returns the inverse hyperbolic cosine of arg, i.e. the value whose hyperbolic
 * cosine is arg.
 *
 * @param arg The value to process
 * @return The inverse hyperbolic cosine of arg
 */
declare function acosh(arg: number): number;

/**
 * Arc sine
 * 
 * Returns the arc sine of arg in radians. asin is the complementary function of
 * sin, which means that a==sin(asin(a)) for every value of a that is within asin's
 * range.
 *
 * @param arg The argument to process
 * @return The arc sine of arg in radians
 */
declare function asin(arg: number): number;

/**
 * Inverse hyperbolic sine
 * 
 * Returns the inverse hyperbolic sine of arg, i.e. the value whose hyperbolic sine
 * is arg.
 *
 * @param arg The argument to process
 * @return The inverse hyperbolic sine of arg
 */
declare function asinh(arg: number): number;

/**
 * Arc tangent
 * 
 * Returns the arc tangent of arg in radians. atan is the complementary function of
 * tan, which means that a==tan(atan(a)) for every value of a that is within atan's
 * range.
 *
 * @param arg The argument to process
 * @return The arc tangent of arg in radians.
 */
declare function atan(arg: number): number;

/**
 * Arc tangent of two variables
 *
 * @param y Dividend parameter
 * @param x Divisor parameter
 * @return The arc tangent of y/x in radians.
 */
declare function atan2(y: number, x: number): number;

/**
 * Inverse hyperbolic tangent
 * 
 * Returns the inverse hyperbolic tangent of arg, i.e. the value whose hyperbolic
 * tangent is arg.
 *
 * @param arg The argument to process
 * @return Inverse hyperbolic tangent of arg
 */
declare function atanh(arg: number): number;

/**
 * Convert a number between arbitrary bases
 * 
 * Returns a string containing number represented in base tobase.  The base in
 * which number is given is specified in frombase.  Both frombase and tobase have
 * to be between 2 and 36, inclusive.  Digits in numbers with a base higher than 10
 * will be represented with the letters a-z, with a meaning 10, b meaning 11 and z
 * meaning 35.
 *
 * @param number The number to convert
 * @param frombase The base number is in
 * @param tobase The base to convert number to
 * @return number converted to base tobase
 */
declare function base_convert(number: string, frombase: number, tobase: number): string;

/**
 * Binary to decimal
 * 
 * Returns the decimal equivalent of the binary number represented by the
 * binary_string argument.
 * 
 * bindec converts a binary number to an integer or, if needed for size reasons,
 * float.
 * 
 * bindec interprets all binary_string values as unsigned integers. This is because
 * bindec sees the most significant bit as another order of magnitude rather than
 * as the sign bit.
 *
 * @param binary_string The binary string to convert
 * @return The decimal value of binary_string
 */
declare function bindec(binary_string: string): number;

/**
 * Round fractions up
 *
 * @param value The value to round
 * @return value rounded up to the next highest integer. The return value of ceil
 *         is still of type float as the value range of float is usually bigger
 *         than that of integer.
 */
declare function ceil(value: number): number;

/**
 * Cosine
 * 
 * cos returns the cosine of the arg parameter.  The arg parameter is in radians.
 *
 * @param arg An angle in radians
 * @return The cosine of arg
 */
declare function cos(arg: number): number;

/**
 * Hyperbolic cosine
 * 
 * Returns the hyperbolic cosine of arg, defined as (exp(arg) + exp(-arg))/2.
 *
 * @param arg The argument to process
 * @return The hyperbolic cosine of arg
 */
declare function cosh(arg: number): number;

/**
 * Decimal to binary
 * 
 * Returns a string containing a binary representation of the given number
 * argument.
 *
 * @param number_ Decimal value to convert
 * @return Binary string representation of number
 */
declare function decbin(number_: number): string;

/**
 * Decimal to hexadecimal
 * 
 * Returns a string containing a hexadecimal representation of the given unsigned
 * number argument.
 * 
 * The largest number that can be converted is PHP_INT_MAX * 2 + 1 (or -1): on
 * 32-bit platforms, this will be 4294967295 in decimal, which results in dechex
 * returning ffffffff.
 *
 * @param number_ The decimal value to convert.
 *                
 *                As PHP's integer type is signed, but dechex deals with unsigned
 *                integers, negative integers will be treated as though they were
 *                unsigned.
 * @return Hexadecimal string representation of number.
 */
declare function dechex(number_: number): string;

/**
 * Decimal to octal
 * 
 * Returns a string containing an octal representation of the given number
 * argument.  The largest number that can be converted is 4294967295 in decimal
 * resulting to "37777777777".
 *
 * @param number_ Decimal value to convert
 * @return Octal string representation of number
 */
declare function decoct(number_: number): string;

/**
 * Converts the number in degrees to the radian equivalent
 * 
 * This function converts number from degrees to the radian equivalent.
 *
 * @param number_ Angular value in degrees
 * @return The radian equivalent of number
 */
declare function deg2rad(number_: number): number;

/**
 * Calculates the exponent of e
 * 
 * Returns e raised to the power of arg.
 * 
 * 'e' is the base of the natural system of logarithms, or approximately 2.718282.
 *
 * @param arg The argument to process
 * @return 'e' raised to the power of arg
 */
declare function exp(arg: number): number;

/**
 * Returns exp(number) - 1, computed in a way that is accurate even when the value
 * of number is close to zero
 * 
 * expm1 returns the equivalent to 'exp(arg) -  1' computed in a way that is
 * accurate even if the value of arg is near zero, a case where 'exp (arg) - 1'
 * would be inaccurate due to subtraction of two numbers that are nearly equal.
 *
 * @param arg The argument to process
 * @return 'e' to the power of arg minus one
 */
declare function expm1(arg: number): number;

/**
 * Round fractions down
 *
 * @param value The numeric value to round
 * @return value rounded to the next lowest integer. The return value of floor is
 *         still of type float because the value range of float is usually bigger
 *         than that of integer.
 */
declare function floor(value: number): number;

/**
 * Returns the floating point remainder (modulo) of the division of the arguments
 * 
 * Returns the floating point remainder of dividing the dividend (x) by the divisor
 * (y). The reminder (r) is defined as: x = i * y + r, for some integer i. If y is
 * non-zero, r has the same sign as x and a magnitude less than the magnitude of y.
 * 
 *
 * @param x The dividend
 * @param y The divisor
 * @return The floating point remainder of x/y
 */
declare function fmod(x: number, y: number): number;

/**
 * Show largest possible random value
 * @return The largest possible random value returned by rand
 */
declare function getrandmax(): number;

/**
 * Hexadecimal to decimal
 * 
 * Returns the decimal equivalent of the hexadecimal number represented by the
 * hex_string argument. hexdec converts a hexadecimal string to a decimal number.
 * 
 * hexdec will ignore any non-hexadecimal characters it encounters.
 *
 * @param hex_string The hexadecimal string to convert
 * @return The decimal representation of hex_string
 */
declare function hexdec(hex_string: string): number;

/**
 * Calculate the length of the hypotenuse of a right-angle triangle
 * 
 * hypot returns the length of the hypotenuse of a right-angle triangle with sides
 * of length x and y, or the distance of the point (x, y) from the origin. This is
 * equivalent to sqrt(x*x + y*y).
 *
 * @param x Length of first side
 * @param y Length of second side
 * @return Calculated length of the hypotenuse
 */
declare function hypot(x: number, y: number): number;

/**
 * Finds whether a value is a legal finite number
 * 
 * Checks whether val is a legal finite on this platform.
 *
 * @param val The value to check
 * @return true if val is a legal finite number within the allowed range for a PHP
 *         float on this platform, else false.
 */
declare function is_finite(val: number): bool;

/**
 * Finds whether a value is infinite
 * 
 * Returns true if val is infinite (positive or negative), like the result of
 * log(0) or any value too big to fit into a float on this platform.
 *
 * @param val The value to check
 * @return true if val is infinite, else false.
 */
declare function is_infinite(val: number): bool;

/**
 * Finds whether a value is not a number
 * 
 * Checks whether val is 'not a number', like the result of acos(1.01).
 *
 * @param val The value to check
 * @return Returns true if val is 'not a number', else false.
 */
declare function is_nan(val: number): bool;

/**
 * Combined linear congruential generator
 * 
 * lcg_value returns a pseudo random number in the range of (0, 1).  The function
 * combines two CGs with periods of 2^31 - 85 and 2^31 - 249. The period of this
 * function is equal to the product of both primes.
 * @return A pseudo random float value in the range of (0, 1)
 */
declare function lcg_value(): number;

/**
 * Natural logarithm
 * 
 * If the optional base parameter is specified, log returns logbase arg, otherwise
 * log returns the natural logarithm of arg.
 *
 * @param arg The value to calculate the logarithm for
 * @param base The optional logarithmic base to use (defaults to 'e' and so to the
 *             natural logarithm).
 * @return The logarithm of arg to base, if given, or the natural logarithm.
 */
declare function log(arg: number, base?: number): number;

/**
 * Base-10 logarithm
 * 
 * Returns the base-10 logarithm of arg.
 *
 * @param arg The argument to process
 * @return The base-10 logarithm of arg
 */
declare function log10(arg: number): number;

/**
 * Returns log(1 + number), computed in a way that is accurate even when the value
 * of number is close to zero
 * 
 * log1p returns log(1 + number) computed in a way that is accurate even when the
 * value of number is close to zero. log might only return log(1) in this case due
 * to lack of precision.
 *
 * @param arg
 * @return log(1 + number)
 */
declare function log1p(arg: number): number;

/**
 * Find highest value
 * 
 * If the first and only parameter is an array, max returns the highest value in
 * that array. If at least two parameters are provided, max returns the biggest of
 * these values.
 * 
 * PHP will evaluate a non-numeric string as 0 if compared to integer, but still
 * return the string if it's seen as the numerically highest value.  If multiple
 * arguments evaluate to 0, max will return a numeric 0 if given, else the
 * alphabetical highest string value will be returned.
 *
 * @param values An array containing the values.
 * @return max returns the numerically highest of the parameter values. If
 *         multiple values can be considered of the same size, the one that is
 *         listed first will be returned.
 *         
 *         When max is given multiple arrays, the longest array is returned. If
 *         all the arrays have the same length, max will use lexicographic
 *         ordering to find the return value.
 *         
 *         When given a string it will be cast as an integer when comparing.
 */
declare function max(values: any[]): any;

/**
 * Find highest value
 * 
 * If the first and only parameter is an array, max returns the highest value in
 * that array. If at least two parameters are provided, max returns the biggest of
 * these values.
 * 
 * PHP will evaluate a non-numeric string as 0 if compared to integer, but still
 * return the string if it's seen as the numerically highest value.  If multiple
 * arguments evaluate to 0, max will return a numeric 0 if given, else the
 * alphabetical highest string value will be returned.
 *
 * @param value1 Any comparable value.
 * @param value2 Any comparable value.
 * @param values An array containing the values.
 * @return max returns the numerically highest of the parameter values. If
 *         multiple values can be considered of the same size, the one that is
 *         listed first will be returned.
 *         
 *         When max is given multiple arrays, the longest array is returned. If
 *         all the arrays have the same length, max will use lexicographic
 *         ordering to find the return value.
 *         
 *         When given a string it will be cast as an integer when comparing.
 */
declare function max(value1: any, value2: any, ...values: any[]): any;

/**
 * Find lowest value
 * 
 * If the first and only parameter is an array, min returns the lowest value in
 * that array. If at least two parameters are provided, min returns the smallest of
 * these values.
 * 
 * PHP will evaluate a non-numeric string as 0 if compared to integer, but still
 * return the string if it's seen as the numerically lowest value.  If multiple
 * arguments evaluate to 0, min will return the lowest alphanumerical string value
 * if any strings are given, else a numeric 0 is returned.
 *
 * @param values An array containing the values.
 * @return min returns the numerically lowest of the parameter values.
 */
declare function min(values: any[]): any;

/**
 * Find lowest value
 * 
 * If the first and only parameter is an array, min returns the lowest value in
 * that array. If at least two parameters are provided, min returns the smallest of
 * these values.
 * 
 * PHP will evaluate a non-numeric string as 0 if compared to integer, but still
 * return the string if it's seen as the numerically lowest value.  If multiple
 * arguments evaluate to 0, min will return the lowest alphanumerical string value
 * if any strings are given, else a numeric 0 is returned.
 *
 * @param value1 Any comparable value.
 * @param value2 Any comparable value.
 * @param values An array containing the values.
 * @return min returns the numerically lowest of the parameter values.
 */
declare function min(value1: any, value2: any, ...values: any[]): any;

/**
 * Show largest possible random value
 * @return Returns the maximum random value returned by mt_rand
 */
declare function mt_getrandmax(): number;

/**
 * Generate a better random value
 * @return A random integer value between min (or 0) and max (or mt_getrandmax,
 *         inclusive), or false if max is less than min.
 */
declare function mt_rand(): number;

/**
 * Generate a better random value
 *
 * @param min Optional lowest value to be returned (default: 0)
 * @param max Optional highest value to be returned (default: mt_getrandmax)
 * @return A random integer value between min (or 0) and max (or mt_getrandmax,
 *         inclusive), or false if max is less than min.
 */
declare function mt_rand(min: number, max: number): number;

/**
 * Seed the better random number generator
 * 
 * Seeds the random number generator with seed or with a random value if no seed is
 * given.
 *
 * @param seed An optional seed value
 */
declare function mt_srand(seed?: number);

/**
 * Octal to decimal
 * 
 * Returns the decimal equivalent of the octal number represented by the
 * octal_string argument.
 *
 * @param octal_string The octal string to convert
 * @return The decimal representation of octal_string
 */
declare function octdec(octal_string: string): number;

/**
 * Get value of pi
 * @return The value of pi as float.
 */
declare function pi(): number;

/**
 * Exponential expression
 * 
 * Returns base raised to the power of exp.
 *
 * @param base The base to use
 * @param exp The exponent
 * @return base raised to the power of exp. If both arguments are non-negative
 *         integers and the result can be represented as an integer, the result
 *         will be returned with integer type, otherwise it will be returned as a
 *         float.
 */
declare function pow(base: number, exp: number): number;

/**
 * Converts the radian number to the equivalent number in degrees
 * 
 * This function converts number from radian to degrees.
 *
 * @param number_ A radian value
 * @return The equivalent of number in degrees
 */
declare function rad2deg(number_: number): number;

/**
 * Generate a random integer
 * @return A pseudo random value between min (or 0) and max (or getrandmax,
 *         inclusive).
 */
declare function rand(): number;

/**
 * Generate a random integer
 *
 * @param min The lowest value to return (default: 0)
 * @param max The highest value to return (default: getrandmax)
 * @return A pseudo random value between min (or 0) and max (or getrandmax,
 *         inclusive).
 */
declare function rand(min: number, max: number): number;

/**
 * Rounds a float
 * 
 * Returns the rounded value of val to specified precision (number of digits after
 * the decimal point). precision can also be negative or zero (default).
 * 
 * PHP doesn't handle strings like "12,300.2" correctly by default. See converting
 * from strings.
 *
 * @param val The value to round
 * @param precision The optional number of decimal digits to round to.
 * @param mode Use one of the following constants to specify the mode in which
 *             rounding occurs.     Constant      PHP_ROUND_HALF_UP  Round val up
 *             to precision decimal places away from zero, when it is half way
 *             there. Making 1.5 into 2 and -1.5 into -2.    PHP_ROUND_HALF_DOWN 
 *             Round val down to precision decimal places towards zero, when it is
 *             half way there. Making 1.5 into 1 and -1.5 into -1.   
 *             PHP_ROUND_HALF_EVEN  Round val to precision decimal places towards
 *             the next even value.    PHP_ROUND_HALF_ODD  Round val to precision
 *             decimal places towards the next odd value.
 * @return The rounded value
 */
declare function round(val: number, precision?: number, mode?: number): number;

/**
 * Sine
 * 
 * sin returns the sine of the arg parameter.  The arg parameter is in radians.
 *
 * @param arg A value in radians
 * @return The sine of arg
 */
declare function sin(arg: number): number;

/**
 * Hyperbolic sine
 * 
 * Returns the hyperbolic sine of arg, defined as (exp(arg) - exp(-arg))/2.
 *
 * @param arg The argument to process
 * @return The hyperbolic sine of arg
 */
declare function sinh(arg: number): number;

/**
 * Square root
 * 
 * Returns the square root of arg.
 *
 * @param arg The argument to process
 * @return The square root of arg or the special value NAN for negative numbers.
 */
declare function sqrt(arg: number): number;

/**
 * Seed the random number generator
 * 
 * Seeds the random number generator with seed or with a random value if no seed is
 * given.
 *
 * @param seed Optional seed value
 */
declare function srand(seed?: number);

/**
 * Tangent
 * 
 * tan returns the tangent of the arg parameter.  The arg parameter is in radians.
 *
 * @param arg The argument to process in radians
 * @return The tangent of arg
 */
declare function tan(arg: number): number;

/**
 * Hyperbolic tangent
 * 
 * Returns the hyperbolic tangent of arg, defined as sinh(arg)/cosh(arg).
 *
 * @param arg The argument to process
 * @return The hyperbolic tangent of arg
 */
declare function tanh(arg: number): number;

//--------------------------------------------------------------------------------
// misc
//--------------------------------------------------------------------------------

/*
 * These functions were placed here because none of the other categories seemed to
 * fit.
 */

/**
 * Added in PHP 5.1.
 */
declare var __COMPILER_HALT_OFFSET__: number;

declare var CONNECTION_ABORTED: number;
declare var CONNECTION_NORMAL: number;
declare var CONNECTION_TIMEOUT: number;


/**
 * Check whether client disconnected
 * 
 * Checks whether the client disconnected.
 * @return Returns 1 if client disconnected, 0 otherwise.
 */
declare function connection_aborted(): number;

/**
 * Returns connection status bitfield
 * 
 * Gets the connection status bitfield.
 * @return Returns the connection status bitfield, which can be used against the
 *         CONNECTION_XXX constants to determine the connection status.
 */
declare function connection_status(): number;

/**
 * Check if the script timed out
 * 
 * Determines whether the script timed out.
 * @return Returns 1 if the script timed out, 0 otherwise.
 */
declare function connection_timeout(): number;

/**
 * Returns the value of a constant
 *
 * @param name The constant name.
 * @return Returns the value of the constant, or  if the constant is not defined.
 */
declare function constant(name: string): any;

/**
 * Defines a named constant
 * 
 * Defines a named constant at runtime.
 *
 * @param name The name of the constant.
 * @param value The value of the constant; only scalar and null values are
 *              allowed. Scalar values are integer, float, string or boolean
 *              values. It is possible to define resource constants, however it is
 *              not recommended and may cause unpredictable behavior.
 * @param case_insensitive If set to true, the constant will be defined
 *                         case-insensitive. The default behavior is
 *                         case-sensitive; i.e. CONSTANT and Constant represent
 *                         different values.
 *                         
 *                         Case-insensitive constants are stored as lower-case.
 */
declare function define(name: string, value: any, case_insensitive?: bool): bool; //TODO: explain how you also have to use declare in Pratphall

/**
 * Checks whether a given named constant exists
 * 
 * Checks whether the given constant exists and is defined.
 * 
 * If you want to see if a variable exists, use isset as defined only applies to
 * constants. If you want to see if a function exists, use function_exists.
 *
 * @param name The constant name.
 * @return Returns true if the named constant given by name has been defined,
 *         false otherwise.
 */
declare function defined(name: string): bool;
//NOTE: eval is already part of JS...but I'm gonna gripe in the compiler when I see it just out of principal (just a warning)
//NOTE: I don't like die, so I ain't putting it in...

/**
 * Output a message and terminate the current script
 * 
 * Terminates execution of the script. Shutdown functions and object destructors
 * will always be executed even if exit is called.
 * 
 * exit is a language construct and it can be called without parentheses if no
 * status is passed.
 *
 * @param status If status is a string, this function prints the status just
 *               before exiting.
 *               
 *               If status is an integer, that value will be used as the exit
 *               status and not printed. Exit statuses should be in the range 0 to
 *               254, the exit status 255 is reserved by PHP and shall not be
 *               used. The status 0 is used to terminate the program successfully.
 *               
 */
declare function exit(status?: string);

/**
 * Output a message and terminate the current script
 * 
 * Terminates execution of the script. Shutdown functions and object destructors
 * will always be executed even if exit is called.
 * 
 * exit is a language construct and it can be called without parentheses if no
 * status is passed.
 *
 * @param status If status is a string, this function prints the status just
 *               before exiting.
 *               
 *               If status is an integer, that value will be used as the exit
 *               status and not printed. Exit statuses should be in the range 0 to
 *               254, the exit status 255 is reserved by PHP and shall not be
 *               used. The status 0 is used to terminate the program successfully.
 *               
 */
declare function exit(status: number);

/**
 * Tells what the user's browser is capable of
 * 
 * Attempts to determine the capabilities of the user's browser, by looking up the
 * browser's information in the browscap.ini file.
 *
 * @param user_agent The User Agent to be analyzed. By default, the value of HTTP
 *                   User-Agent header is used; however, you can alter this (i.e.,
 *                   look up another browser's info) by passing this parameter.
 *                   
 *                   You can bypass this parameter with a  value.
 * @param return_array If set to true, this function will return an array instead
 *                     of an object.
 * @return The information is returned in an object or an array which will contain
 *         various data elements representing, for instance, the browser's major
 *         and minor version numbers and ID string; true/false values for features
 *         such as frames, JavaScript, and cookies; and so forth.
 *         
 *         The cookies value simply means that the browser itself is capable of
 *         accepting cookies and does not mean the user has enabled the browser to
 *         accept cookies or not. The only way to test if cookies are accepted is
 *         to set one with setcookie, reload, and check for the value.
 */
declare function get_browser(user_agent?: string, return_array?: bool): Pct.PhpAssocArray;

/**
 * Halts the compiler execution
 * 
 * Halts the execution of the compiler. This can be useful to embed data in PHP
 * scripts, like the installation files.
 * 
 * Byte position of the data start can be determined by the
 * __COMPILER_HALT_OFFSET__ constant which is defined only if there is a
 * __halt_compiler presented in the file.
 */
declare function __halt_compiler(); //TODO: explain how I am going to handle this when loading files in Pratphall

/**
 * Syntax highlighting of a file
 * 
 * Prints out or returns a syntax highlighted version of the code contained in
 * filename using the colors defined in the built-in syntax highlighter for PHP.
 * 
 * Many servers are configured to automatically highlight files with a phps
 * extension. For example, example.phps when viewed will show the syntax
 * highlighted source of the file. To enable this, add this line to the :
 *
 * @param filename Path to the PHP file to be highlighted.
 * @return If return is set to true, returns the highlighted code as a string
 *         instead of printing it out. Otherwise, it will return true on success,
 *         false on failure.
 */
declare function highlight_file(filename: string): bool;

/**
 * Syntax highlighting of a file
 * 
 * Prints out or returns a syntax highlighted version of the code contained in
 * filename using the colors defined in the built-in syntax highlighter for PHP.
 * 
 * Many servers are configured to automatically highlight files with a phps
 * extension. For example, example.phps when viewed will show the syntax
 * highlighted source of the file. To enable this, add this line to the :
 *
 * @param filename Path to the PHP file to be highlighted.
 * @param return_ Set this parameter to true to make this function return the
 *                highlighted code.
 * @return If return is set to true, returns the highlighted code as a string
 *         instead of printing it out. Otherwise, it will return true on success,
 *         false on failure.
 */
declare function highlight_file(filename: string, return_: bool): any;

/**
 * Syntax highlighting of a string
 *
 * @param str The PHP code to be highlighted. This should include the opening tag.
 * @return If return is set to true, returns the highlighted code as a string
 *         instead of printing it out. Otherwise, it will return true on success,
 *         false on failure.
 */
declare function highlight_string(str: string): bool;

/**
 * Syntax highlighting of a string
 *
 * @param str The PHP code to be highlighted. This should include the opening tag.
 * @param return_ Set this parameter to true to make this function return the
 *                highlighted code.
 * @return If return is set to true, returns the highlighted code as a string
 *         instead of printing it out. Otherwise, it will return true on success,
 *         false on failure.
 */
declare function highlight_string(str: string, return_: bool): any;

/**
 * Set whether a client disconnect should abort script execution
 * 
 * Sets whether a client disconnect should cause a script to be aborted.
 * 
 * When running PHP as a command line script, and the script's tty goes away
 * without the script being terminated then the script will die the next time it
 * tries to write anything, unless value is set to true
 *
 * @param value If set, this function will set the ignore_user_abort ini setting
 *              to the given value. If not, this function will only return the
 *              previous setting without changing it.
 * @return Returns the previous setting, as an integer.
 */
declare function ignore_user_abort(value?: string): number;

/**
 * Pack data into binary string
 * 
 * Pack given arguments into binary string according to format.
 * 
 * The idea for this function was taken from Perl and all formatting codes work the
 * same as in Perl. However, there are some formatting codes that are missing such
 * as Perl's "u" format code.
 * 
 * Note that the distinction between signed and unsigned values only affects the
 * function unpack, where as function pack gives the same result for signed and
 * unsigned format codes.
 *
 * @param format The format string consists of format codes followed by an
 *               optional repeater argument. The repeater argument can be either
 *               an integer value or * for repeating to the end of the input data.
 *               For a, A, h, H the repeat count specifies how many characters of
 *               one data argument are taken, for @ it is the absolute position
 *               where to put the next data, for everything else the repeat count
 *               specifies how many data arguments are consumed and packed into
 *               the resulting binary string.
 *               
 *               Currently implemented formats are:  pack format characters   
 *               Code Description     a NUL-padded string   A SPACE-padded string 
 *               h Hex string, low nibble first  H Hex string, high nibble first
 *               csigned char  C unsigned char  s signed short (always 16 bit,
 *               machine byte order)   S unsigned short (always 16 bit, machine
 *               byte order)   n unsigned short (always 16 bit, big endian byte
 *               order)   v unsigned short (always 16 bit, little endian byte
 *               order)   i signed integer (machine dependent size and byte order)
 *               I unsigned integer (machine dependent size and byte order)   l
 *               signed long (always 32 bit, machine byte order)   L unsigned long
 *               (always 32 bit, machine byte order)   N unsigned long (always 32
 *               bit, big endian byte order)   V unsigned long (always 32 bit,
 *               little endian byte order)   f float (machine dependent size and
 *               representation)   d double (machine dependent size and
 *               representation)   x NUL byte   X Back up one byte   @ NUL-fill to
 *               absolute position
 * @param args 
 * @return Returns a binary string containing data.
 */
declare function pack(format: string, ...args: any[]): string;

/**
 * Check the PHP syntax of (and execute) the specified file
 * 
 * Performs a syntax (lint) check on the specified filename testing for scripting
 * errors.
 * 
 * This is similar to using php -l from the commandline except that this function
 * will execute (but not output) the checked filename.
 * 
 * For example, if a function is defined in filename, this defined function will be
 * available to the file that executed php_check_syntax, but output from filename
 * will be suppressed.
 * 
 * For technical reasons, this function is deprecated and removed from PHP.
 * Instead, use php -l somefile.php from the commandline.
 *
 * @param filename The name of the file being checked.
 * @param $error_message If the error_message parameter is used, it will contain
 *                       the error message generated by the syntax check.
 *                       error_message is passed by reference.
 * @return Returns true if the lint check passed, and false if the link check
 *         failed or if filename cannot be opened.
 */
declare function php_check_syntax(filename: string, $error_message?: string): bool;

/**
 * Return source with stripped comments and whitespace
 * 
 * Returns the PHP source code in filename with PHP comments and whitespace
 * removed. This may be useful for determining the amount of actual code in your
 * scripts compared with the amount of comments. This is similar to using php -w
 * from the commandline.
 *
 * @param filename Path to the PHP file.
 * @return The stripped source code will be returned on success, or an empty
 *         string on failure.
 *         
 *         This function works as described as of PHP 5.0.1. Before this it would
 *         only return an empty string. For more information on this bug and its
 *         prior behavior, see bug report #29606.
 */
declare function php_strip_whitespace(filename: string): string;

/**
 * Delay execution
 *
 * @param seconds Halt time in seconds.
 * @return Returns zero on success, or false on error.
 *         
 *         If the call was interrupted by a signal, sleep returns a non-zero
 *         value. On Windows, this value will always be 192 (the value of the
 *         WAIT_IO_COMPLETION constant within the Windows API). On other
 *         platforms, the return value will be the number of seconds left to
 *         sleep.
 */
declare function sleep(seconds: number): number;

/**
 * Gets system load average
 * 
 * Returns three samples representing the average system load (the number of
 * processes in the system run queue) over the last 1, 5 and 15 minutes,
 * respectively.
 * @return Returns an array with three samples (last 1, 5 and 15 minutes).
 */
declare function sys_getloadavg(): number[];

/**
 * Delay for a number of seconds and nanoseconds
 * 
 * Delays program execution for the given number of seconds and nanoseconds.
 *
 * @param seconds Must be a non-negative integer.
 * @param nanoseconds Must be a non-negative integer less than 1 billion.
 * @return If the delay was interrupted by a signal, an associative array will be
 *         returned with the components:    seconds - number of seconds remaining
 *         in the delay     nanoseconds - number of nanoseconds remaining in the
 *         delay
 */
declare function time_nanosleep(seconds: number, nanoseconds: number): any;

/**
 * Make the script sleep until the specified time
 * 
 * Makes the script sleep until the specified timestamp.
 *
 * @param timestamp The timestamp when the script should wake.
 */
declare function time_sleep_until(timestamp: number): bool;

/**
 * Generate a unique ID
 * 
 * Gets a prefixed unique identifier based on the current time in microseconds.
 *
 * @param prefix Can be useful, for instance, if you generate identifiers
 *               simultaneously on several hosts that might happen to generate the
 *               identifier at the same microsecond.
 *               
 *               With an empty prefix, the returned string will be 13 characters
 *               long.  If more_entropy is true, it will be 23 characters.
 * @param more_entropy If set to true, uniqid will add additional entropy (using
 *                     the combined linear congruential generator) at the end of
 *                     the return value, which increases the likelihood that the
 *                     result will be unique.
 * @return Returns the unique identifier, as a string.
 */
declare function uniqid(prefix?: string, more_entropy?: bool): string;

/**
 * Unpack data from binary string
 * 
 * Unpacks from a binary string into an array according to the given format.
 * 
 * The unpacked data is stored in an associative array. To accomplish this you have
 * to name the different format codes and separate them by a slash /. If a repeater
 * argument is present, then each of the array keys will have a sequence number
 * behind the given name.
 *
 * @param format See pack for an explanation of the format codes.
 * @param data The packed data.
 * @return Returns an associative array containing unpacked elements of binary
 *         string.
 */
declare function unpack(format: string, data: string): Pct.PhpAssocArray;

/**
 * Delay execution in microseconds
 * 
 * Delays program execution for the given number of micro seconds.
 *
 * @param micro_seconds Halt time in micro seconds. A micro second is one
 *                      millionth of a second.
 */
declare function usleep(micro_seconds: number);

//--------------------------------------------------------------------------------
// pcre
//--------------------------------------------------------------------------------

/*
 * The syntax for patterns used in these functions closely resembles Perl. The
 * expression must be enclosed in the delimiters, a forward slash (/), for example.
 * Delimiters can be any non-alphanumeric, non-whitespace ASCII character except
 * the backslash (\) and the null byte. If the delimiter character has to be used
 * in the expression itself, it needs to be escaped by backslash. Since PHP 4.0.4,
 * you can also use Perl-style (), {}, [], and matching delimiters. See Pattern
 * Syntax for detailed explanation.
 * 
 * The ending delimiter may be followed by various modifiers that affect the
 * matching. See Pattern Modifiers.
 * 
 * PHP also supports regular expressions using a POSIX-extended syntax using the
 * POSIX-extended regex functions.
 * 
 * The PCRE library is a set of functions that implement regular expression pattern
 * matching using the same syntax and semantics as Perl 5, with just a few
 * differences (see below).  The current implementation corresponds to Perl 5.005.
 */
declare var PCRE_VERSION: number;
declare var PREG_BACKTRACK_LIMIT_ERROR: number;
declare var PREG_BAD_UTF8_ERROR: number;
declare var PREG_BAD_UTF8_OFFSET_ERROR: number;
declare var PREG_INTERNAL_ERROR: number;
declare var PREG_NO_ERROR: number;
declare var PREG_OFFSET_CAPTURE: number;
declare var PREG_PATTERN_ORDER: number;
declare var PREG_RECURSION_LIMIT_ERROR: number;
declare var PREG_SET_ORDER: number;
declare var PREG_SPLIT_DELIM_CAPTURE: number;
declare var PREG_SPLIT_NO_EMPTY: number;
declare var PREG_SPLIT_OFFSET_CAPTURE: number;


/**
 * Perform a regular expression search and replace
 * 
 * preg_filter is identical to preg_replace except it only returns the (possibly
 * transformed) subjects where there was a match. For details about how this
 * function works, read the preg_replace documentation.
 *
 * @param pattern 
 * @param replacement 
 * @param subject 
 * @param limit 
 * @param $count 
 * @return Returns an array if the subject parameter is an array, or a string
 *         otherwise.
 *         
 *         If no matches are found or an error occurred, an empty array is
 *         returned when subject is an array or  otherwise.
 */
declare function preg_filter(pattern: string, replacement: string, subject: string, limit?: number, $count?: number): string;

/**
 * Perform a regular expression search and replace
 * 
 * preg_filter is identical to preg_replace except it only returns the (possibly
 * transformed) subjects where there was a match. For details about how this
 * function works, read the preg_replace documentation.
 *
 * @param pattern 
 * @param replacement 
 * @param subject 
 * @param limit 
 * @param $count 
 * @return Returns an array if the subject parameter is an array, or a string
 *         otherwise.
 *         
 *         If no matches are found or an error occurred, an empty array is
 *         returned when subject is an array or  otherwise.
 */
declare function preg_filter(pattern: string[], replacement: string, subject: string, limit?: number, $count?: number): string;

/**
 * Perform a regular expression search and replace
 * 
 * preg_filter is identical to preg_replace except it only returns the (possibly
 * transformed) subjects where there was a match. For details about how this
 * function works, read the preg_replace documentation.
 *
 * @param pattern 
 * @param replacement 
 * @param subject 
 * @param limit 
 * @param $count 
 * @return Returns an array if the subject parameter is an array, or a string
 *         otherwise.
 *         
 *         If no matches are found or an error occurred, an empty array is
 *         returned when subject is an array or  otherwise.
 */
declare function preg_filter(pattern: string, replacement: string[], subject: string, limit?: number, $count?: number): string;

/**
 * Perform a regular expression search and replace
 * 
 * preg_filter is identical to preg_replace except it only returns the (possibly
 * transformed) subjects where there was a match. For details about how this
 * function works, read the preg_replace documentation.
 *
 * @param pattern 
 * @param replacement 
 * @param subject 
 * @param limit 
 * @param $count 
 * @return Returns an array if the subject parameter is an array, or a string
 *         otherwise.
 *         
 *         If no matches are found or an error occurred, an empty array is
 *         returned when subject is an array or  otherwise.
 */
declare function preg_filter(pattern: string[], replacement: string[], subject: string, limit?: number, $count?: number): string;

/**
 * Perform a regular expression search and replace
 * 
 * preg_filter is identical to preg_replace except it only returns the (possibly
 * transformed) subjects where there was a match. For details about how this
 * function works, read the preg_replace documentation.
 *
 * @param pattern 
 * @param replacement 
 * @param subject 
 * @param limit 
 * @param $count 
 * @return Returns an array if the subject parameter is an array, or a string
 *         otherwise.
 *         
 *         If no matches are found or an error occurred, an empty array is
 *         returned when subject is an array or  otherwise.
 */
declare function preg_filter(pattern: string, replacement: string, subject: string[], limit?: number, $count?: number): string[];

/**
 * Perform a regular expression search and replace
 * 
 * preg_filter is identical to preg_replace except it only returns the (possibly
 * transformed) subjects where there was a match. For details about how this
 * function works, read the preg_replace documentation.
 *
 * @param pattern 
 * @param replacement 
 * @param subject 
 * @param limit 
 * @param $count 
 * @return Returns an array if the subject parameter is an array, or a string
 *         otherwise.
 *         
 *         If no matches are found or an error occurred, an empty array is
 *         returned when subject is an array or  otherwise.
 */
declare function preg_filter(pattern: string, replacement: string[], subject: string[], limit?: number, $count?: number): string[];

/**
 * Perform a regular expression search and replace
 * 
 * preg_filter is identical to preg_replace except it only returns the (possibly
 * transformed) subjects where there was a match. For details about how this
 * function works, read the preg_replace documentation.
 *
 * @param pattern 
 * @param replacement 
 * @param subject 
 * @param limit 
 * @param $count 
 * @return Returns an array if the subject parameter is an array, or a string
 *         otherwise.
 *         
 *         If no matches are found or an error occurred, an empty array is
 *         returned when subject is an array or  otherwise.
 */
declare function preg_filter(pattern: string[], replacement: string, subject: string[], limit?: number, $count?: number): string[];

/**
 * Perform a regular expression search and replace
 * 
 * preg_filter is identical to preg_replace except it only returns the (possibly
 * transformed) subjects where there was a match. For details about how this
 * function works, read the preg_replace documentation.
 *
 * @param pattern 
 * @param replacement 
 * @param subject 
 * @param limit 
 * @param $count 
 * @return Returns an array if the subject parameter is an array, or a string
 *         otherwise.
 *         
 *         If no matches are found or an error occurred, an empty array is
 *         returned when subject is an array or  otherwise.
 */
declare function preg_filter(pattern: string[], replacement: string[], subject: string[], limit?: number, $count?: number): string[];

/**
 * Return array entries that match the pattern
 * 
 * Returns the array consisting of the elements of the input array that match the
 * given pattern.
 *
 * @param pattern The pattern to search for, as a string.
 * @param input The input array.
 * @param flags If set to PREG_GREP_INVERT, this function returns the elements of
 *              the input array that do not match the given pattern.
 * @return Returns an array indexed using the keys from the input array.
 */
declare function preg_grep(pattern: string, input: Array, flags?: number): Array;

/**
 * Returns the error code of the last PCRE regex execution
 * 
 * Returns the error code of the last PCRE regex execution.
 * 
 * preg_last_error example   ]]>
 * @return Returns one of the following constants (explained on their own page): 
 *         PREG_NO_ERROR PREG_INTERNAL_ERROR PREG_BACKTRACK_LIMIT_ERROR (see also
 *         pcre.backtrack_limit) PREG_RECURSION_LIMIT_ERROR (see also
 *         pcre.recursion_limit) PREG_BAD_UTF8_ERROR PREG_BAD_UTF8_OFFSET_ERROR
 *         (since PHP 5.3.0)
 */
declare function preg_last_error(): number;

/**
 * Perform a regular expression match
 * 
 * Searches subject for a match to the regular expression given in pattern.
 *
 * @param pattern The pattern to search for, as a string.
 * @param subject The input string.
 * @param $matches If matches is provided, then it is filled with the results of
 *                 search. $matches[0] will contain the text that matched the full
 *                 pattern, $matches[1] will have the text that matched the first
 *                 captured parenthesized subpattern, and so on.
 * @param flags flags can be the following flag:   PREG_OFFSET_CAPTURE   If this
 *              flag is passed, for every occurring match the appendant string
 *              offset will also be returned. Note that this changes the value of
 *              matches into an array where every element is an array consisting
 *              of the matched string at offset 0 and its string offset into
 *              subject at offset 1.
 * @param offset Normally, the search starts from the beginning of the subject
 *               string. The optional parameter offset can be used to specify the
 *               alternate place from which to start the search (in bytes).
 *               
 *               Using offset is not equivalent to passing substr($subject,
 *               $offset) to preg_match in place of the subject string, because
 *               pattern can contain assertions such as ^, $ or (?=x). Compare:   
 *               ]]>       while this example    ]]>   will produce    Array ( [0]
 *               => def [1] => 0 )  ) ]]>
 *               
 *               while this example
 *               
 *               will produce
 * @return preg_match returns 1 if the pattern matches given subject, 0 if it does
 *         not, or false if an error occurred.
 */
declare function preg_match(pattern: string, subject: string, $matches?: Array, flags?: number, offset?: number): number;

/**
 * Perform a global regular expression match
 * 
 * Searches subject for all matches to the regular expression given in pattern and
 * puts them in matches in the order specified by flags.
 * 
 * After the first match is found, the subsequent searches  are continued on from
 * end of the last match.
 *
 * @param pattern The pattern to search for, as a string.
 * @param subject The input string.
 * @param $matches Array of all matches in multi-dimensional array ordered
 *                 according to flags.
 * @param flags Can be a combination of the following flags (note that it doesn't
 *              make sense to use PREG_PATTERN_ORDER together with
 *              PREG_SET_ORDER):   PREG_PATTERN_ORDER   Orders results so that
 *              $matches[0] is an array of full pattern matches, $matches[1] is an
 *              array of strings matched by the first parenthesized subpattern,
 *              and so on.      ]]>    example: , this is a test example: , this
 *              is a test ]]>   So, $out[0] contains array of strings that matched
 *              full pattern, and $out[1] contains array of strings enclosed by
 *              tags.       PREG_SET_ORDER   Orders results so that $matches[0] is
 *              an array of first set of matches, $matches[1] is an array of
 *              second set of matches, and so on.    ]]>    example: , example:
 *              this is a test, this is a test ]]>       PREG_OFFSET_CAPTURE   If
 *              this flag is passed, for every occurring match the appendant
 *              string offset will also be returned. Note that this changes the
 *              value of matches into an array where every element is an array
 *              consisting of the matched string at offset 0 and its string offset
 *              into subject at offset 1.
 *              
 *              Orders results so that $matches[0] is an array of full pattern
 *              matches, $matches[1] is an array of strings matched by the first
 *              parenthesized subpattern, and so on.
 *              
 *              ]]>    example: , this is a test example: , this is a test ]]>  
 *              So, $out[0] contains array of strings that matched full pattern,
 *              and $out[1] contains array of strings enclosed by tags.
 *              
 *              So, $out[0] contains array of strings that matched full pattern,
 *              and $out[1] contains array of strings enclosed by tags.
 *              
 *              Orders results so that $matches[0] is an array of first set of
 *              matches, $matches[1] is an array of second set of matches, and so
 *              on.    ]]>    example: , example: this is a test, this is a test
 *              ]]>
 *              
 *              If this flag is passed, for every occurring match the appendant
 *              string offset will also be returned. Note that this changes the
 *              value of matches into an array where every element is an array
 *              consisting of the matched string at offset 0 and its string offset
 *              into subject at offset 1.
 *              
 *              If no order flag is given, PREG_PATTERN_ORDER is assumed.
 * @param offset Normally, the search starts from the beginning of the subject
 *               string. The optional parameter offset can be used to specify the
 *               alternate place from which to start the search (in bytes).
 *               
 *               Using offset is not equivalent to passing substr($subject,
 *               $offset) to preg_match_all in place of the subject string,
 *               because pattern can contain assertions such as ^, $ or (?=x). See
 *               preg_match for examples.
 * @return Returns the number of full pattern matches (which might be zero), or
 *         false if an error occurred.
 */
declare function preg_match_all(pattern: string, subject: string, $matches?: Array, flags?: number, offset?: number): number;

/**
 * Quote regular expression characters
 * 
 * preg_quote takes str and puts a backslash in front of every character that is
 * part of the regular expression syntax.  This is useful if you have a run-time
 * string that you need to match in some text and the string may contain special
 * regex characters.
 * 
 * The special regular expression characters are: . \ + * ? [ ^ ] $ ( ) { } = !   |
 * : -
 *
 * @param str The input string.
 * @param delimiter If the optional delimiter is specified, it will also be
 *                  escaped.  This is useful for escaping the delimiter that is
 *                  required by the PCRE functions. The / is the most commonly
 *                  used delimiter.
 * @return Returns the quoted string.
 */
declare function preg_quote(str: string, delimiter?: string): string;

/**
 * Perform a regular expression search and replace
 * 
 * Searches subject for matches to pattern and replaces them with replacement.
 *
 * @param pattern The pattern to search for. It can be either a string or an array
 *                with strings.
 *                
 *                Several PCRE modifiers are also available, including 'e'
 *                (PREG_REPLACE_EVAL), which is specific to this function.
 * @param replacement The string or an array with strings to replace. If this
 *                    parameter is a string and the pattern parameter is an array,
 *                    all patterns will be replaced by that string. If both
 *                    pattern and replacement parameters are arrays, each pattern
 *                    will be replaced by the replacement counterpart. If there
 *                    are fewer elements in the replacement array than in the
 *                    pattern array, any extra patterns will be replaced by an
 *                    empty string.
 *                    
 *                    replacement may contain references of the form \\n or (since
 *                    PHP 4.0.4) $n, with the latter form being the preferred one.
 *                    Every such reference will be replaced by the text captured
 *                    by the n'th parenthesized pattern. n can be from 0 to 99,
 *                    and \\0 or $0 refers to the text matched by the whole
 *                    pattern. Opening parentheses are counted from left to right
 *                    (starting from 1) to obtain the number of the capturing
 *                    subpattern. To use backslash in replacement, it must be
 *                    doubled ("\\\\" PHP string).
 *                    
 *                    When working with a replacement pattern where a
 *                    backreference is immediately followed by another number
 *                    (i.e.: placing a literal number immediately after a matched
 *                    pattern), you cannot use the familiar \\1 notation for your
 *                    backreference. \\11, for example, would confuse preg_replace
 *                    since it does not know whether you want the \\1
 *                    backreference followed by a literal 1, or the \\11
 *                    backreference followed by nothing.  In this case the
 *                    solution is to use \${1}1.  This creates an isolated $1
 *                    backreference, leaving the 1 as a literal.
 *                    
 *                    When using the e modifier, this function escapes some
 *                    characters (namely ', ", \ and NULL) in the strings that
 *                    replace the backreferences. This is done to ensure that no
 *                    syntax errors arise from backreference usage with either
 *                    single or double quotes (e.g.
 *                    'strlen(\'$1\')+strlen("$2")'). Make sure you are aware of
 *                    PHP's string syntax to know exactly how the interpreted
 *                    string will look.
 * @param subject The string or an array with strings to search and replace.
 *                
 *                If subject is an array, then the search and replace is performed
 *                on every entry of subject, and the return value is an array as
 *                well.
 * @param limit The maximum possible replacements for each pattern in each subject
 *              string. Defaults to -1 (no limit).
 * @param $count If specified, this variable will be filled with the number of
 *               replacements done.
 * @return preg_replace returns an array if the subject parameter is an array, or
 *         a string otherwise.
 *         
 *         If matches are found, the new subject will be returned, otherwise
 *         subject will be returned unchanged or  if an error occurred.
 */
declare function preg_replace(pattern: string, replacement: string, subject: string, limit?: number, $count?: number): string;

/**
 * Perform a regular expression search and replace
 * 
 * Searches subject for matches to pattern and replaces them with replacement.
 *
 * @param pattern The pattern to search for. It can be either a string or an array
 *                with strings.
 *                
 *                Several PCRE modifiers are also available, including 'e'
 *                (PREG_REPLACE_EVAL), which is specific to this function.
 * @param replacement The string or an array with strings to replace. If this
 *                    parameter is a string and the pattern parameter is an array,
 *                    all patterns will be replaced by that string. If both
 *                    pattern and replacement parameters are arrays, each pattern
 *                    will be replaced by the replacement counterpart. If there
 *                    are fewer elements in the replacement array than in the
 *                    pattern array, any extra patterns will be replaced by an
 *                    empty string.
 *                    
 *                    replacement may contain references of the form \\n or (since
 *                    PHP 4.0.4) $n, with the latter form being the preferred one.
 *                    Every such reference will be replaced by the text captured
 *                    by the n'th parenthesized pattern. n can be from 0 to 99,
 *                    and \\0 or $0 refers to the text matched by the whole
 *                    pattern. Opening parentheses are counted from left to right
 *                    (starting from 1) to obtain the number of the capturing
 *                    subpattern. To use backslash in replacement, it must be
 *                    doubled ("\\\\" PHP string).
 *                    
 *                    When working with a replacement pattern where a
 *                    backreference is immediately followed by another number
 *                    (i.e.: placing a literal number immediately after a matched
 *                    pattern), you cannot use the familiar \\1 notation for your
 *                    backreference. \\11, for example, would confuse preg_replace
 *                    since it does not know whether you want the \\1
 *                    backreference followed by a literal 1, or the \\11
 *                    backreference followed by nothing.  In this case the
 *                    solution is to use \${1}1.  This creates an isolated $1
 *                    backreference, leaving the 1 as a literal.
 *                    
 *                    When using the e modifier, this function escapes some
 *                    characters (namely ', ", \ and NULL) in the strings that
 *                    replace the backreferences. This is done to ensure that no
 *                    syntax errors arise from backreference usage with either
 *                    single or double quotes (e.g.
 *                    'strlen(\'$1\')+strlen("$2")'). Make sure you are aware of
 *                    PHP's string syntax to know exactly how the interpreted
 *                    string will look.
 * @param subject The string or an array with strings to search and replace.
 *                
 *                If subject is an array, then the search and replace is performed
 *                on every entry of subject, and the return value is an array as
 *                well.
 * @param limit The maximum possible replacements for each pattern in each subject
 *              string. Defaults to -1 (no limit).
 * @param $count If specified, this variable will be filled with the number of
 *               replacements done.
 * @return preg_replace returns an array if the subject parameter is an array, or
 *         a string otherwise.
 *         
 *         If matches are found, the new subject will be returned, otherwise
 *         subject will be returned unchanged or  if an error occurred.
 */
declare function preg_replace(pattern: string[], replacement: string, subject: string, limit?: number, $count?: number): string;

/**
 * Perform a regular expression search and replace
 * 
 * Searches subject for matches to pattern and replaces them with replacement.
 *
 * @param pattern The pattern to search for. It can be either a string or an array
 *                with strings.
 *                
 *                Several PCRE modifiers are also available, including 'e'
 *                (PREG_REPLACE_EVAL), which is specific to this function.
 * @param replacement The string or an array with strings to replace. If this
 *                    parameter is a string and the pattern parameter is an array,
 *                    all patterns will be replaced by that string. If both
 *                    pattern and replacement parameters are arrays, each pattern
 *                    will be replaced by the replacement counterpart. If there
 *                    are fewer elements in the replacement array than in the
 *                    pattern array, any extra patterns will be replaced by an
 *                    empty string.
 *                    
 *                    replacement may contain references of the form \\n or (since
 *                    PHP 4.0.4) $n, with the latter form being the preferred one.
 *                    Every such reference will be replaced by the text captured
 *                    by the n'th parenthesized pattern. n can be from 0 to 99,
 *                    and \\0 or $0 refers to the text matched by the whole
 *                    pattern. Opening parentheses are counted from left to right
 *                    (starting from 1) to obtain the number of the capturing
 *                    subpattern. To use backslash in replacement, it must be
 *                    doubled ("\\\\" PHP string).
 *                    
 *                    When working with a replacement pattern where a
 *                    backreference is immediately followed by another number
 *                    (i.e.: placing a literal number immediately after a matched
 *                    pattern), you cannot use the familiar \\1 notation for your
 *                    backreference. \\11, for example, would confuse preg_replace
 *                    since it does not know whether you want the \\1
 *                    backreference followed by a literal 1, or the \\11
 *                    backreference followed by nothing.  In this case the
 *                    solution is to use \${1}1.  This creates an isolated $1
 *                    backreference, leaving the 1 as a literal.
 *                    
 *                    When using the e modifier, this function escapes some
 *                    characters (namely ', ", \ and NULL) in the strings that
 *                    replace the backreferences. This is done to ensure that no
 *                    syntax errors arise from backreference usage with either
 *                    single or double quotes (e.g.
 *                    'strlen(\'$1\')+strlen("$2")'). Make sure you are aware of
 *                    PHP's string syntax to know exactly how the interpreted
 *                    string will look.
 * @param subject The string or an array with strings to search and replace.
 *                
 *                If subject is an array, then the search and replace is performed
 *                on every entry of subject, and the return value is an array as
 *                well.
 * @param limit The maximum possible replacements for each pattern in each subject
 *              string. Defaults to -1 (no limit).
 * @param $count If specified, this variable will be filled with the number of
 *               replacements done.
 * @return preg_replace returns an array if the subject parameter is an array, or
 *         a string otherwise.
 *         
 *         If matches are found, the new subject will be returned, otherwise
 *         subject will be returned unchanged or  if an error occurred.
 */
declare function preg_replace(pattern: string, replacement: string[], subject: string, limit?: number, $count?: number): string;

/**
 * Perform a regular expression search and replace
 * 
 * Searches subject for matches to pattern and replaces them with replacement.
 *
 * @param pattern The pattern to search for. It can be either a string or an array
 *                with strings.
 *                
 *                Several PCRE modifiers are also available, including 'e'
 *                (PREG_REPLACE_EVAL), which is specific to this function.
 * @param replacement The string or an array with strings to replace. If this
 *                    parameter is a string and the pattern parameter is an array,
 *                    all patterns will be replaced by that string. If both
 *                    pattern and replacement parameters are arrays, each pattern
 *                    will be replaced by the replacement counterpart. If there
 *                    are fewer elements in the replacement array than in the
 *                    pattern array, any extra patterns will be replaced by an
 *                    empty string.
 *                    
 *                    replacement may contain references of the form \\n or (since
 *                    PHP 4.0.4) $n, with the latter form being the preferred one.
 *                    Every such reference will be replaced by the text captured
 *                    by the n'th parenthesized pattern. n can be from 0 to 99,
 *                    and \\0 or $0 refers to the text matched by the whole
 *                    pattern. Opening parentheses are counted from left to right
 *                    (starting from 1) to obtain the number of the capturing
 *                    subpattern. To use backslash in replacement, it must be
 *                    doubled ("\\\\" PHP string).
 *                    
 *                    When working with a replacement pattern where a
 *                    backreference is immediately followed by another number
 *                    (i.e.: placing a literal number immediately after a matched
 *                    pattern), you cannot use the familiar \\1 notation for your
 *                    backreference. \\11, for example, would confuse preg_replace
 *                    since it does not know whether you want the \\1
 *                    backreference followed by a literal 1, or the \\11
 *                    backreference followed by nothing.  In this case the
 *                    solution is to use \${1}1.  This creates an isolated $1
 *                    backreference, leaving the 1 as a literal.
 *                    
 *                    When using the e modifier, this function escapes some
 *                    characters (namely ', ", \ and NULL) in the strings that
 *                    replace the backreferences. This is done to ensure that no
 *                    syntax errors arise from backreference usage with either
 *                    single or double quotes (e.g.
 *                    'strlen(\'$1\')+strlen("$2")'). Make sure you are aware of
 *                    PHP's string syntax to know exactly how the interpreted
 *                    string will look.
 * @param subject The string or an array with strings to search and replace.
 *                
 *                If subject is an array, then the search and replace is performed
 *                on every entry of subject, and the return value is an array as
 *                well.
 * @param limit The maximum possible replacements for each pattern in each subject
 *              string. Defaults to -1 (no limit).
 * @param $count If specified, this variable will be filled with the number of
 *               replacements done.
 * @return preg_replace returns an array if the subject parameter is an array, or
 *         a string otherwise.
 *         
 *         If matches are found, the new subject will be returned, otherwise
 *         subject will be returned unchanged or  if an error occurred.
 */
declare function preg_replace(pattern: string[], replacement: string[], subject: string, limit?: number, $count?: number): string;

/**
 * Perform a regular expression search and replace
 * 
 * Searches subject for matches to pattern and replaces them with replacement.
 *
 * @param pattern The pattern to search for. It can be either a string or an array
 *                with strings.
 *                
 *                Several PCRE modifiers are also available, including 'e'
 *                (PREG_REPLACE_EVAL), which is specific to this function.
 * @param replacement The string or an array with strings to replace. If this
 *                    parameter is a string and the pattern parameter is an array,
 *                    all patterns will be replaced by that string. If both
 *                    pattern and replacement parameters are arrays, each pattern
 *                    will be replaced by the replacement counterpart. If there
 *                    are fewer elements in the replacement array than in the
 *                    pattern array, any extra patterns will be replaced by an
 *                    empty string.
 *                    
 *                    replacement may contain references of the form \\n or (since
 *                    PHP 4.0.4) $n, with the latter form being the preferred one.
 *                    Every such reference will be replaced by the text captured
 *                    by the n'th parenthesized pattern. n can be from 0 to 99,
 *                    and \\0 or $0 refers to the text matched by the whole
 *                    pattern. Opening parentheses are counted from left to right
 *                    (starting from 1) to obtain the number of the capturing
 *                    subpattern. To use backslash in replacement, it must be
 *                    doubled ("\\\\" PHP string).
 *                    
 *                    When working with a replacement pattern where a
 *                    backreference is immediately followed by another number
 *                    (i.e.: placing a literal number immediately after a matched
 *                    pattern), you cannot use the familiar \\1 notation for your
 *                    backreference. \\11, for example, would confuse preg_replace
 *                    since it does not know whether you want the \\1
 *                    backreference followed by a literal 1, or the \\11
 *                    backreference followed by nothing.  In this case the
 *                    solution is to use \${1}1.  This creates an isolated $1
 *                    backreference, leaving the 1 as a literal.
 *                    
 *                    When using the e modifier, this function escapes some
 *                    characters (namely ', ", \ and NULL) in the strings that
 *                    replace the backreferences. This is done to ensure that no
 *                    syntax errors arise from backreference usage with either
 *                    single or double quotes (e.g.
 *                    'strlen(\'$1\')+strlen("$2")'). Make sure you are aware of
 *                    PHP's string syntax to know exactly how the interpreted
 *                    string will look.
 * @param subject The string or an array with strings to search and replace.
 *                
 *                If subject is an array, then the search and replace is performed
 *                on every entry of subject, and the return value is an array as
 *                well.
 * @param limit The maximum possible replacements for each pattern in each subject
 *              string. Defaults to -1 (no limit).
 * @param $count If specified, this variable will be filled with the number of
 *               replacements done.
 * @return preg_replace returns an array if the subject parameter is an array, or
 *         a string otherwise.
 *         
 *         If matches are found, the new subject will be returned, otherwise
 *         subject will be returned unchanged or  if an error occurred.
 */
declare function preg_replace(pattern: string, replacement: string, subject: string[], limit?: number, $count?: number): string[];

/**
 * Perform a regular expression search and replace
 * 
 * Searches subject for matches to pattern and replaces them with replacement.
 *
 * @param pattern The pattern to search for. It can be either a string or an array
 *                with strings.
 *                
 *                Several PCRE modifiers are also available, including 'e'
 *                (PREG_REPLACE_EVAL), which is specific to this function.
 * @param replacement The string or an array with strings to replace. If this
 *                    parameter is a string and the pattern parameter is an array,
 *                    all patterns will be replaced by that string. If both
 *                    pattern and replacement parameters are arrays, each pattern
 *                    will be replaced by the replacement counterpart. If there
 *                    are fewer elements in the replacement array than in the
 *                    pattern array, any extra patterns will be replaced by an
 *                    empty string.
 *                    
 *                    replacement may contain references of the form \\n or (since
 *                    PHP 4.0.4) $n, with the latter form being the preferred one.
 *                    Every such reference will be replaced by the text captured
 *                    by the n'th parenthesized pattern. n can be from 0 to 99,
 *                    and \\0 or $0 refers to the text matched by the whole
 *                    pattern. Opening parentheses are counted from left to right
 *                    (starting from 1) to obtain the number of the capturing
 *                    subpattern. To use backslash in replacement, it must be
 *                    doubled ("\\\\" PHP string).
 *                    
 *                    When working with a replacement pattern where a
 *                    backreference is immediately followed by another number
 *                    (i.e.: placing a literal number immediately after a matched
 *                    pattern), you cannot use the familiar \\1 notation for your
 *                    backreference. \\11, for example, would confuse preg_replace
 *                    since it does not know whether you want the \\1
 *                    backreference followed by a literal 1, or the \\11
 *                    backreference followed by nothing.  In this case the
 *                    solution is to use \${1}1.  This creates an isolated $1
 *                    backreference, leaving the 1 as a literal.
 *                    
 *                    When using the e modifier, this function escapes some
 *                    characters (namely ', ", \ and NULL) in the strings that
 *                    replace the backreferences. This is done to ensure that no
 *                    syntax errors arise from backreference usage with either
 *                    single or double quotes (e.g.
 *                    'strlen(\'$1\')+strlen("$2")'). Make sure you are aware of
 *                    PHP's string syntax to know exactly how the interpreted
 *                    string will look.
 * @param subject The string or an array with strings to search and replace.
 *                
 *                If subject is an array, then the search and replace is performed
 *                on every entry of subject, and the return value is an array as
 *                well.
 * @param limit The maximum possible replacements for each pattern in each subject
 *              string. Defaults to -1 (no limit).
 * @param $count If specified, this variable will be filled with the number of
 *               replacements done.
 * @return preg_replace returns an array if the subject parameter is an array, or
 *         a string otherwise.
 *         
 *         If matches are found, the new subject will be returned, otherwise
 *         subject will be returned unchanged or  if an error occurred.
 */
declare function preg_replace(pattern: string, replacement: string[], subject: string[], limit?: number, $count?: number): string[];

/**
 * Perform a regular expression search and replace
 * 
 * Searches subject for matches to pattern and replaces them with replacement.
 *
 * @param pattern The pattern to search for. It can be either a string or an array
 *                with strings.
 *                
 *                Several PCRE modifiers are also available, including 'e'
 *                (PREG_REPLACE_EVAL), which is specific to this function.
 * @param replacement The string or an array with strings to replace. If this
 *                    parameter is a string and the pattern parameter is an array,
 *                    all patterns will be replaced by that string. If both
 *                    pattern and replacement parameters are arrays, each pattern
 *                    will be replaced by the replacement counterpart. If there
 *                    are fewer elements in the replacement array than in the
 *                    pattern array, any extra patterns will be replaced by an
 *                    empty string.
 *                    
 *                    replacement may contain references of the form \\n or (since
 *                    PHP 4.0.4) $n, with the latter form being the preferred one.
 *                    Every such reference will be replaced by the text captured
 *                    by the n'th parenthesized pattern. n can be from 0 to 99,
 *                    and \\0 or $0 refers to the text matched by the whole
 *                    pattern. Opening parentheses are counted from left to right
 *                    (starting from 1) to obtain the number of the capturing
 *                    subpattern. To use backslash in replacement, it must be
 *                    doubled ("\\\\" PHP string).
 *                    
 *                    When working with a replacement pattern where a
 *                    backreference is immediately followed by another number
 *                    (i.e.: placing a literal number immediately after a matched
 *                    pattern), you cannot use the familiar \\1 notation for your
 *                    backreference. \\11, for example, would confuse preg_replace
 *                    since it does not know whether you want the \\1
 *                    backreference followed by a literal 1, or the \\11
 *                    backreference followed by nothing.  In this case the
 *                    solution is to use \${1}1.  This creates an isolated $1
 *                    backreference, leaving the 1 as a literal.
 *                    
 *                    When using the e modifier, this function escapes some
 *                    characters (namely ', ", \ and NULL) in the strings that
 *                    replace the backreferences. This is done to ensure that no
 *                    syntax errors arise from backreference usage with either
 *                    single or double quotes (e.g.
 *                    'strlen(\'$1\')+strlen("$2")'). Make sure you are aware of
 *                    PHP's string syntax to know exactly how the interpreted
 *                    string will look.
 * @param subject The string or an array with strings to search and replace.
 *                
 *                If subject is an array, then the search and replace is performed
 *                on every entry of subject, and the return value is an array as
 *                well.
 * @param limit The maximum possible replacements for each pattern in each subject
 *              string. Defaults to -1 (no limit).
 * @param $count If specified, this variable will be filled with the number of
 *               replacements done.
 * @return preg_replace returns an array if the subject parameter is an array, or
 *         a string otherwise.
 *         
 *         If matches are found, the new subject will be returned, otherwise
 *         subject will be returned unchanged or  if an error occurred.
 */
declare function preg_replace(pattern: string[], replacement: string, subject: string[], limit?: number, $count?: number): string[];

/**
 * Perform a regular expression search and replace
 * 
 * Searches subject for matches to pattern and replaces them with replacement.
 *
 * @param pattern The pattern to search for. It can be either a string or an array
 *                with strings.
 *                
 *                Several PCRE modifiers are also available, including 'e'
 *                (PREG_REPLACE_EVAL), which is specific to this function.
 * @param replacement The string or an array with strings to replace. If this
 *                    parameter is a string and the pattern parameter is an array,
 *                    all patterns will be replaced by that string. If both
 *                    pattern and replacement parameters are arrays, each pattern
 *                    will be replaced by the replacement counterpart. If there
 *                    are fewer elements in the replacement array than in the
 *                    pattern array, any extra patterns will be replaced by an
 *                    empty string.
 *                    
 *                    replacement may contain references of the form \\n or (since
 *                    PHP 4.0.4) $n, with the latter form being the preferred one.
 *                    Every such reference will be replaced by the text captured
 *                    by the n'th parenthesized pattern. n can be from 0 to 99,
 *                    and \\0 or $0 refers to the text matched by the whole
 *                    pattern. Opening parentheses are counted from left to right
 *                    (starting from 1) to obtain the number of the capturing
 *                    subpattern. To use backslash in replacement, it must be
 *                    doubled ("\\\\" PHP string).
 *                    
 *                    When working with a replacement pattern where a
 *                    backreference is immediately followed by another number
 *                    (i.e.: placing a literal number immediately after a matched
 *                    pattern), you cannot use the familiar \\1 notation for your
 *                    backreference. \\11, for example, would confuse preg_replace
 *                    since it does not know whether you want the \\1
 *                    backreference followed by a literal 1, or the \\11
 *                    backreference followed by nothing.  In this case the
 *                    solution is to use \${1}1.  This creates an isolated $1
 *                    backreference, leaving the 1 as a literal.
 *                    
 *                    When using the e modifier, this function escapes some
 *                    characters (namely ', ", \ and NULL) in the strings that
 *                    replace the backreferences. This is done to ensure that no
 *                    syntax errors arise from backreference usage with either
 *                    single or double quotes (e.g.
 *                    'strlen(\'$1\')+strlen("$2")'). Make sure you are aware of
 *                    PHP's string syntax to know exactly how the interpreted
 *                    string will look.
 * @param subject The string or an array with strings to search and replace.
 *                
 *                If subject is an array, then the search and replace is performed
 *                on every entry of subject, and the return value is an array as
 *                well.
 * @param limit The maximum possible replacements for each pattern in each subject
 *              string. Defaults to -1 (no limit).
 * @param $count If specified, this variable will be filled with the number of
 *               replacements done.
 * @return preg_replace returns an array if the subject parameter is an array, or
 *         a string otherwise.
 *         
 *         If matches are found, the new subject will be returned, otherwise
 *         subject will be returned unchanged or  if an error occurred.
 */
declare function preg_replace(pattern: string[], replacement: string[], subject: string[], limit?: number, $count?: number): string[];

/**
 * Perform a regular expression search and replace using a callback
 * 
 * The behavior of this function is almost identical to preg_replace, except for
 * the fact that instead of replacement parameter, one should specify a callback.
 *
 * @param pattern The pattern to search for. It can be either a string or an array
 *                with strings.
 * @param replacement
 * @param subject The string or an array with strings to search and replace.
 * @param limit The maximum possible replacements for each pattern in each subject
 *              string. Defaults to -1 (no limit).
 * @param $count If specified, this variable will be filled with the number of
 *               replacements done.
 * @return preg_replace_callback returns an array if the subject parameter is an
 *         array, or a string otherwise. On errors the return value is
 *         
 *         If matches are found, the new subject will be returned, otherwise
 *         subject will be returned unchanged.
 */
declare function preg_replace_callback(pattern: string, replacement: (matches: string[]) => string, subject: string, limit?: number, $count?: number): string;

/**
 * Perform a regular expression search and replace using a callback
 * 
 * The behavior of this function is almost identical to preg_replace, except for
 * the fact that instead of replacement parameter, one should specify a callback.
 *
 * @param pattern The pattern to search for. It can be either a string or an array
 *                with strings.
 * @param replacement
 * @param subject The string or an array with strings to search and replace.
 * @param limit The maximum possible replacements for each pattern in each subject
 *              string. Defaults to -1 (no limit).
 * @param $count If specified, this variable will be filled with the number of
 *               replacements done.
 * @return preg_replace_callback returns an array if the subject parameter is an
 *         array, or a string otherwise. On errors the return value is
 *         
 *         If matches are found, the new subject will be returned, otherwise
 *         subject will be returned unchanged.
 */
declare function preg_replace_callback(pattern: string[], replacement: (matches: string[]) => string, subject: string, limit?: number, $count?: number): string;

/**
 * Perform a regular expression search and replace using a callback
 * 
 * The behavior of this function is almost identical to preg_replace, except for
 * the fact that instead of replacement parameter, one should specify a callback.
 *
 * @param pattern The pattern to search for. It can be either a string or an array
 *                with strings.
 * @param replacement
 * @param subject The string or an array with strings to search and replace.
 * @param limit The maximum possible replacements for each pattern in each subject
 *              string. Defaults to -1 (no limit).
 * @param $count If specified, this variable will be filled with the number of
 *               replacements done.
 * @return preg_replace_callback returns an array if the subject parameter is an
 *         array, or a string otherwise. On errors the return value is
 *         
 *         If matches are found, the new subject will be returned, otherwise
 *         subject will be returned unchanged.
 */
declare function preg_replace_callback(pattern: string, replacement: (matches: string[]) => string, subject: string[], limit?: number, $count?: number): string[];

/**
 * Perform a regular expression search and replace using a callback
 * 
 * The behavior of this function is almost identical to preg_replace, except for
 * the fact that instead of replacement parameter, one should specify a callback.
 *
 * @param pattern The pattern to search for. It can be either a string or an array
 *                with strings.
 * @param replacement
 * @param subject The string or an array with strings to search and replace.
 * @param limit The maximum possible replacements for each pattern in each subject
 *              string. Defaults to -1 (no limit).
 * @param $count If specified, this variable will be filled with the number of
 *               replacements done.
 * @return preg_replace_callback returns an array if the subject parameter is an
 *         array, or a string otherwise. On errors the return value is
 *         
 *         If matches are found, the new subject will be returned, otherwise
 *         subject will be returned unchanged.
 */
declare function preg_replace_callback(pattern: string[], replacement: (matches: string[]) => string, subject: string[], limit?: number, $count?: number): string[];

/**
 * Split string by a regular expression
 * 
 * Split the given string by a regular expression.
 *
 * @param pattern The pattern to search for, as a string.
 * @param subject The input string.
 * @param limit If specified, then only substrings up to limit are returned with
 *              the rest of the string being placed in the last substring.  A
 *              limit of -1, 0 or  means "no limit" and, as is standard across
 *              PHP, you can use  to skip to the flags parameter.
 * @param flags flags can be any combination of the following flags (combined with
 *              the | bitwise operator):   PREG_SPLIT_NO_EMPTY   If this flag is
 *              set, only non-empty pieces will be returned by preg_split.    
 *              PREG_SPLIT_DELIM_CAPTURE   If this flag is set, parenthesized
 *              expression in the delimiter pattern will be captured and returned
 *              as well.     PREG_SPLIT_OFFSET_CAPTURE   If this flag is set, for
 *              every occurring match the appendant string offset will also be
 *              returned. Note that this changes the return value in an array
 *              where every element is an array consisting of the matched string
 *              at offset 0 and its string offset into subject at offset 1.
 *              
 *              If this flag is set, for every occurring match the appendant
 *              string offset will also be returned. Note that this changes the
 *              return value in an array where every element is an array
 *              consisting of the matched string at offset 0 and its string offset
 *              into subject at offset 1.
 * @return Returns an array containing substrings of subject split along
 *         boundaries matched by pattern.
 */
declare function preg_split(pattern: string, subject: string, limit?: number, flags?: number): any[];

//--------------------------------------------------------------------------------
// pct
//--------------------------------------------------------------------------------
/**
 * Pratphall Compile-Time
 *
 * These are utilities that assist in writing Pratphall code. Many
 * of the utilities are accompanied by extensions that affect the
 * PHP output.
 */
module Pct {

    /**
     * When a class or interface explicitly implements this interface
     * (i.e. not just have a super type that implements it), the type
     * will not be emitted to PHP. It is for use with compile-time
     * only checks for satisfying certain interfaces. This is really
     * helpful for type checking stdClass objects or callbacks. 
     *
     * Note, to define classes or interfaces in external code that still
     * may need to apply to type hints, instanceof checks, etc use the
     * Ambient interface.
     */
    interface CompileTimeOnly {}

    /**
     * When a class or interface explicitly implements this interface
     * (i.e. not just have a super type that implements it), the type
     * will not be emitted to PHP. It is for use with classes or
     * interfaces that may be defined in external libraries but still
     * need to be handled in instanceof checks, type hints, etc.
     *
     * Any items in a .d.ts file (a declaration file) are automatically
     * assumed to be ambient. Similarly any classes, vars, or functions
     * that are prefixed with "declare" are also assumed ambient. 
     * Interfaces outside of declaration files are required to explicitly
     * implement this to be assumed ambient.
     *
     * Note, to define classes or interfaces for compile-time use only,
     * use the CompileTimeOnly interface.
     */
    interface Ambient extends CompileTimeOnly {}

    /**
     * When a class or interface explicitly implements this interface,
     * the type is assumed to use old-style namespaces which are underscores
     * instead of native PHP 5.3+ namespaces. This is only allowed on
     * ambient types, not in compiled code.
     */
    interface OldStyleNamespace extends CompileTimeOnly { }

    /**
     * Simple interface for defining indexers. This interface should not
     * be confused with ArrayAccess which provides runtime support for
     * bracketed index-based lookups.
     */
    interface Indexable extends CompileTimeOnly {
        [index: string]: any;
        [index: number]: any;
    }

    /**
     * Associative array in PHP. Has all features of normal array.
     */
    interface PhpAssocArray extends Array, Indexable, CompileTimeOnly {
        forEach?(callbackfn: (value: any, index: any) => void): void;
    }

    /**
     * Representation of a PHP resource
     */
    interface PhpResource extends CompileTimeOnly { }

    /**
     * Makes anything passed as "by-reference" essentially prefixing
     * an ampersand.
     */
    function byRef(expression: any): any;

    /**
     * Takes the given expression and assumes the last identifier is
     * a variable. This is useful when you have a variable that is 
     * completely capitalized but you want to use it as a variable instead
     * of Pratphall's default which is a const.
     */
    function asVar(id: any): any;

    /**
     * Takes the given expression and assumes it is a constant, avoiding
     * prefixing the dollar sign. This is useful when you have a variable
     * that is actually a constant, but is not all capitalized so Pratphall
     * does not know it is a constant.
     */
    function const(value: any): any;

    /**
     * Handles PHP's declare construct
     */
    function declare(directive: string, value: any, block?: () => void): bool;

    /**
     * This will emit a PHP instanceof check. Usually the regular instanceof
     * operator is preferred. This is useful when the right-hand side of the
     * operator needs to be a string or an expression.
     */
    function isInstance(obj: any, check: any): bool;

    /**
     * Gets the name of the type at compile time, NOT runtime. This means it
     * can output values like "any" or "number". It is best used for class or
     * interface types where it will return a fully-qualified, slash-style PHP
     * type name.
     */
    function typeName(obj: any): string;

    /**
     * Insert PHP break. This is helpful in forEach loop
     */
    function break();

    /**
     * Insert PHP continue. This is helpful in forEach loop
     */
    function continue();

    /**
     * Create a new associative array. An empty array is created if no 
     * parameters are present. Otherwise, the parameter must be an object
     * literal which properly translates.
     */
    function newAssocArray(obj?: Object): PhpAssocArray;

    /**
     * Convert an associative array to a numerically indexed array at compile
     * time. This does NOT emit anything in PHP.
     */
    function toArray(array: PhpAssocArray): any[];

    /**
     * Convert a numerically indexed array to an associative array at compile
     * time. This does NOT emit anything in PHP.
     */
    function toAssocArray(array: any[]): PhpAssocArray;

    /**
     * Unions two arrays like the plus operator in PHP.
     */
    function unionArray(...arrays: any[][]): any[];

    /**
     * Unions two arrays like the plus operator in PHP.
     */
    function unionArray(...arrays: PhpAssocArray[]): PhpAssocArray;

    /**
     * Unions two arrays like the plus operator in PHP.
     */
    function unionArray(...arrays: any[]): PhpAssocArray;

    /**
     * A literal PHP (int) cast
     */
    function castInt(value: any): number;

    /**
     * A literal PHP (bool) cast
     */
    function castBool(value: any): bool;

    /**
     * A literal PHP (float) cast
     */
    function castFloat(value: any): number;

    /**
     * A literal PHP (string) cast
     */
    function castString(value: any): string;

    /**
     * A literal PHP (array) cast returning a compile-time
     * numerically indexed array.
     */
    function castArray(value: any): any[];

    /**
     * A literal PHP (array) cast returning a compile-time
     * associative array.
     */
    function castAssocArray(value: any): PhpAssocArray;

    /**
     * A literal PHP (object) cast
     */
    function castObject(value: any): Object;

    /**
     * A literal PHP (unset) cast
     */
    function castUnset(value: any): undefined;

    /**
     * A literal PHP (binary) cast
     */
    function castBinary(value: any): string;

    /**
     * Strict === false check. Beware "!Pct.isFalse(val)" will
     * not do what you think, it will do !$val === false. Use
     * Pct.isNotFalse for !== false.
     */
    function isFalse(value: any): bool;

    /**
     * Strict !== false check.
     */
    function isNotFalse(value: any): bool;

    /**
     * Support for the PHP error control operator "@".
     */
    function swallowErrors(value: any): any;

    /**
     * Support for the PHP clone keyword.
     */
    function clone(value: any): any;

    /**
     * Advanced try-catch that can support a single catch and/or finally.
     * A standalone try can als be provided.
     */
    interface TryCatch {
        try: () => any;
        catch?: { (e: Exception): any; };
        finally?: () => any;
    }


    /**
     * Advanced try-catch that can support a mulitple catches and/or finally.
     */
    interface TryCatches {
        try: () => any;
        catch: { (e: Exception): any; }[];
        finally?: () => any;
    }

    /**
     * Handle advanced try/catch logic
     */
    function try(val: TryCatch);

    /**
     * Handle advanced try/catch logic
     */
    function try(val: TryCatches);

}

//--------------------------------------------------------------------------------
// predefined
//--------------------------------------------------------------------------------
var __LINE__: number;
var __FILE__: string;
var __DIR__: string;
var __FUNCTION__: string;
var __CLASS__: string;
var __TRAIT__: string;
var __METHOD__: string;
var __NAMESPACE__: string;

declare var GLOBALS: Pct.PhpAssocArray;
declare var _SERVER: Pct.PhpAssocArray;
declare var _GET: Pct.PhpAssocArray;
declare var _POST: Pct.PhpAssocArray;
declare var _FILES: Pct.PhpAssocArray;
declare var _REQUEST: Pct.PhpAssocArray;
declare var _SESSION: Pct.PhpAssocArray;
declare var _ENV: Pct.PhpAssocArray;
declare var _COOKIE: Pct.PhpAssocArray;
declare var php_errormsg: string;
declare var http_response_header: string[];
declare var argc: number;
declare var argv: string[];

function include(path: string): any;
function include_once(path: string): any;
function require(path: string): any;
function require_once(path: string): any;

declare interface Traversable {
    forEach?(callbackfn: (value: any, index: any) => void);
}

declare interface Iterator extends Traversable {
    current(): any;
    key(): any;
    next();
    rewind();
    valid(): bool;
}

declare interface IteratorAggregate extends Traversable {
    getIterator(): Traversable;
}

declare interface ArrayAccess extends Pct.Indexable {
    offsetExists(offset: any): bool;
    offsetGet(offset: any): any;
    offsetSet(offset: any, value: any);
    offsetUnset(offset: any);
}

declare interface Serializable {
    serialize(): string;
    unserialize(serialized: string);
}

declare class Closure {
    static bind(closure: Closure, newthis: any, newscope?: any): Closure;

    constructor();
    bindTo(newthis: any, newscope?: any): Closure;
}

declare class stdClass {
}

declare class Exception implements Error {
    name: string; //only here for compat
    message: string;
    code: number;
    file: string;
    line: number;

    constructor(message?: string, code?: number, previous?: Exception);
    getMessage(): string;
    getPrevious(): Exception;
    getCode(): number;
    getFile(): string;
    getLine(): number;
    getTrace(): Pct.PhpAssocArray[];
    getTraceAsString(): string;
}

declare class ErrorException extends Exception {
    severity: number;

    constructor(message?: string, code?: number, severity?: number, filename?: string, lineno?: number, previous?: Exception);
}

//--------------------------------------------------------------------------------
// reflection
//--------------------------------------------------------------------------------

/*
 * PHP 5 comes with a complete reflection API that adds the ability to
 * reverse-engineer classes, interfaces, functions, methods and extensions.
 * Additionally, the reflection API offers ways to retrieve doc comments for
 * functions, classes and methods.
 * 
 * Please note that certain parts of the internal API are missing the necessary
 * code to work with the Reflection extension. E.g., an internal PHP class might be
 * missing reflection data for properties. These few cases are considered bugs,
 * however, so they should be discovered and fixed.
 */

/**
 * Reflector is an interface implemented by all exportable Reflection classes.
 */
declare interface Reflector {
    //static export(): string; http://typescript.codeplex.com/workitem/80

}


/**
 * The reflection class.
 */
declare class Reflection {
    //static export(): string; http://typescript.codeplex.com/workitem/80
    
    /**
     * Gets modifier names
     * 
     * Gets modifier names.
     *
     * @param modifiers The modifiers to get, which is from a numeric value.
     * @return An array of modifier names.
     */
    static getModifierNames(modifiers: number): string[];
}


/**
 * The ReflectionClass class reports information about a class.
 */
declare class ReflectionClass implements Reflector {
    
    /**
     * Indicates class that is  abstract because it has some abstract methods.
     */
    static IS_IMPLICIT_ABSTRACT: number;
    
    /**
     * Indicates class that is  abstract because of its definition.
     */
    static IS_EXPLICIT_ABSTRACT: number;
    
    /**
     * Indicates final class.
     */
    static IS_FINAL: number;

    
    /**
     * Name of the class. Read-only, throws ReflectionException in attempt to write.
     */
    name: string;

    
    /**
     * Constructs a ReflectionClass
     * 
     * Constructs a new ReflectionClass object.
     *
     * @param argument Either a string containing the name of the class to reflect, or
     *                 an object.
     */
    constructor(argument: string);
    
    /**
     * Constructs a ReflectionClass
     * 
     * Constructs a new ReflectionClass object.
     *
     * @param argument Either a string containing the name of the class to reflect, or
     *                 an object.
     */
    constructor(argument: Object);

    
    /**
     * Gets defined constant
     * 
     * Gets the defined constant.
     *
     * @param name Name of the constant.
     * @return Value of the constant.
     */
    getConstant(name: string): any;
    
    /**
     * Gets constants
     * 
     * Gets defined constants from a class.
     * @return An array of constants. Constant name in key, constant value in value.
     */
    getConstants(): Pct.PhpAssocArray;
    
    /**
     * Gets the constructor of the class
     * 
     * Gets the constructor of the reflected class.
     * @return A ReflectionMethod object reflecting the class' constructor, or  if the
     *         class has no constructor.
     */
    getConstructor(): ReflectionMethod;
    
    /**
     * Gets default properties
     * 
     * Gets default properties from a class (including inherited properties).
     * @return An array of default properties, with the key being the name of the
     *         property and the value being the default value of the property or if
     *         the property doesn't have a default value. The function does not
     *         distinguish between static and non static properties and does not take
     *         visibility modifiers into account.
     */
    getDefaultProperties(): Pct.PhpAssocArray;
    
    /**
     * Gets doc comments
     * 
     * Gets doc comments from a class.
     * @return The doc comment if it exists, otherwise false
     */
    getDocComment(): string;
    
    /**
     * Gets end line
     * 
     * Gets end line number from a user-defined class definition.
     * @return The ending line number of the user defined class, or false if unknown.
     */
    getEndLine(): number;
    
    /**
     * Gets a ReflectionExtension object for the extension which defined the class
     * 
     * Gets a ReflectionExtension object for the extension which defined the class.
     * @return A ReflectionExtension object representing the extension which defined
     *         the class, or  for user-defined classes.
     */
    getExtension(): ReflectionExtension;
    
    /**
     * Gets the name of the extension which defined the class
     * 
     * Gets the name of the extension which defined the class.
     * @return The name of the extension which defined the class, or false for
     *         user-defined classes.
     */
    getExtensionName(): string;
    
    /**
     * Gets the filename of the file in which the class has been defined
     * 
     * Gets the filename of the file in which the class has been defined.
     * @return Returns the filename of the file in which the class has been defined.
     *         If the class is defined in the PHP core or in a PHP extension, false is
     *         returned.
     */
    getFileName(): string;
    
    /**
     * Gets the interface names
     * 
     * Get the interface names.
     * @return A numerical array with interface names as the values.
     */
    getInterfaceNames(): string[];
    
    /**
     * Gets the interfaces
     * 
     * Gets the interfaces.
     * @return An associative array of interfaces, with keys as interface names and
     *         the array values as ReflectionClass objects.
     */
    getInterfaces(): Pct.PhpAssocArray;
    
    /**
     * Gets a ReflectionMethod for a class method.
     * 
     * Gets a ReflectionMethod for a class method.
     *
     * @param name The method name to reflect.
     * @return A ReflectionMethod.
     */
    getMethod(name: string): ReflectionMethod;
    
    /**
     * Gets an array of methods
     * 
     * Gets an array of methods for the class.
     *
     * @param filter Filter the results to include only methods with certain
     *               attributes. Defaults to no filtering.
     *               
     *               Any combination of ReflectionMethod::IS_STATIC,
     *               ReflectionMethod::IS_PUBLIC, ReflectionMethod::IS_PROTECTED,
     *               ReflectionMethod::IS_PRIVATE, ReflectionMethod::IS_ABSTRACT,
     *               ReflectionMethod::IS_FINAL.
     * @return An array of ReflectionMethod objects reflecting each method.
     */
    getMethods(filter?: number): ReflectionMethod[];
    
    /**
     * Gets modifiers
     * 
     * Returns a bitfield of the access modifiers for this class.
     * @return Returns bitmask of  modifier constants.
     */
    getModifiers(): number;
    
    /**
     * Gets class name
     * 
     * Gets the class name.
     * @return The class name.
     */
    getName(): string;
    
    /**
     * Gets namespace name
     * 
     * Gets the namespace name.
     * @return The namespace name.
     */
    getNamespaceName(): string;
    
    /**
     * Gets parent class
     * @return A ReflectionClass.
     */
    getParentClass(): ReflectionClass;
    
    /**
     * Gets properties
     * 
     * Retrieves reflected properties.
     *
     * @param filter The optional filter, for filtering desired property types. It's
     *               configured using the ReflectionProperty constants, and defaults
     *               to all property types.
     * @return An array of ReflectionProperty objects.
     */
    getProperties(filter?: number): ReflectionProperty[];
    
    /**
     * Gets a ReflectionProperty for a class's property
     * 
     * Gets a ReflectionProperty for a class's property.
     *
     * @param name The property name.
     * @return A ReflectionProperty.
     */
    getProperty(name: string): ReflectionProperty;
    
    /**
     * Gets short name
     * 
     * Gets the short name of the class, the part without the namespace.
     * @return The class short name.
     */
    getShortName(): string;
    
    /**
     * Gets starting line number
     * 
     * Get the starting line number.
     * @return The starting line number, as an integer.
     */
    getStartLine(): number;
    
    /**
     * Gets static properties
     * 
     * Get the static properties.
     * @return The static properties, as an array.
     */
    getStaticProperties(): Pct.PhpAssocArray;
    
    /**
     * Gets static property value
     * 
     * Gets the value of a static property on this class.
     *
     * @param name The name of the static property for which to return a value.
     * @return The value of the static property.
     */
    getStaticPropertyValue(name: string): any;
    
    /**
     * Returns an array of trait aliases
     * @return Returns an array with new method names in keys and original names (in
     *         the format "TraitName::original") in values. Returns  in case of an
     *         error.
     */
    getTraitAliases(): Pct.PhpAssocArray;
    
    /**
     * Returns an array of names of traits used by this class
     * @return Returns an array with trait names in values. Returns  in case of an
     *         error.
     */
    getTraitNames(): string[];
    
    /**
     * Returns an array of traits used by this class
     * @return Returns an array with trait names in keys and instances of trait's
     *         ReflectionClass in values. Returns  in case of an error.
     */
    getTraits(): Pct.PhpAssocArray;
    
    /**
     * Checks if constant is defined
     * 
     * Checks whether the class has a specific constant defined or not.
     *
     * @param name The name of the constant being checked for.
     * @return true if the constant is defined, otherwise false.
     */
    hasConstant(name: string): bool;
    
    /**
     * Checks if method is defined
     * 
     * Checks whether a specific method is defined in a class.
     *
     * @param name Name of the method being checked for.
     * @return true if it has the method, otherwise false
     */
    hasMethod(name: string): bool;
    
    /**
     * Checks if property is defined
     * 
     * Checks whether the specified property is defined.
     *
     * @param name Name of the property being checked for.
     * @return true if it has the property, otherwise false
     */
    hasProperty(name: string): bool;
    
    /**
     * Implements interface
     * 
     * Checks whether it implements an interface.
     *
     * @param interface_ The interface name.
     */
    implementsInterface(interface_: string): bool;
    
    /**
     * Checks if in namespace
     * 
     * Checks if this class is defined in a namespace.
     */
    inNamespace(): bool;
    
    /**
     * Checks if class is abstract
     * 
     * Checks if the class is abstract.
     */
    isAbstract(): bool;
    
    /**
     * Returns whether this class is cloneable
     * 
     * Returns whether this class is cloneable.
     * @return Returns true if the class is cloneable, false otherwise.
     */
    isCloneable(): bool;
    
    /**
     * Checks if class is final
     * 
     * Checks if a class is final.
     */
    isFinal(): bool;
    
    /**
     * Checks class for instance
     * 
     * Checks if an object is an instance of a class.
     *
     * @param object The object being compared to.
     */
    isInstance(object: any): bool;
    
    /**
     * Checks if the class is instantiable
     * 
     * Checks if the class is instantiable.
     */
    isInstantiable(): bool;
    
    /**
     * Checks if the class is an interface
     * 
     * Checks whether the class is an interface.
     */
    isInterface(): bool;
    
    /**
     * Checks if class is defined internally by an extension, or the core
     * 
     * Checks if the class is defined internally by an extension, or the core, as
     * opposed to user-defined.
     */
    isInternal(): bool;
    
    /**
     * Checks if iterateable
     * 
     * Checks whether the class is iterateable.
     */
    isIterateable(): bool;
    
    /**
     * Checks if a subclass
     * 
     * Checks if the class is a subclass of a specified class or implements a specified
     * interface.
     *
     * @param class_ The class name being checked against.
     */
    isSubclassOf(class_: string): bool;
    
    /**
     * Returns whether this is a trait
     * @return Returns true if this is a trait, false otherwise. Returns  in case of
     *         an error.
     */
    isTrait(): bool;
    
    /**
     * Checks if user defined
     * 
     * Checks whether the class is user-defined, as opposed to internal.
     */
    isUserDefined(): bool;
    
    /**
     * Creates a new class instance from given arguments.
     * 
     * Creates a new instance of the class. The given arguments are passed to the class
     * constructor.
     *
     * @param args Accepts a variable number of arguments which are passed to the
     *             class constructor, much like call_user_func.
     */
    newInstance(...args: any[]): any;
    
    /**
     * Creates a new class instance from given arguments.
     * 
     * Creates a new instance of the class, the given arguments are passed to the class
     * constructor.
     *
     * @param args The parameters to be passed to the class constructor as an array.
     * @return Returns a new instance of the class.
     */
    newInstanceArgs(args?: any[]): any;
    
    /**
     * Creates a new class instance without invoking the constructor.
     * 
     * Creates a new instance of the class without invoking the constructor.
     */
    newInstanceWithoutConstructor(): any;
    
    /**
     * Sets static property value
     * 
     * Sets static property value.
     *
     * @param name Property name.
     * @param value New property value.
     */
    setStaticPropertyValue(name: string, value: any);
}

declare class ReflectionZendExtension implements Reflector {
    
    /**
     * Name of the extension. Read-only, throws ReflectionException in attempt to
     * write.
     */
    name: string;

    
    /**
     * Constructor
     *
     * @param name 
     */
    constructor(name: string);
    
    /**
     * Gets author
     */
    getAuthor(): string;
    
    /**
     * Gets copyright
     */
    getCopyright(): string;
    
    /**
     * Gets name
     */
    getName(): string;
    
    /**
     * Gets URL
     */
    getURL(): string;
    
    /**
     * Gets version
     */
    getVersion(): string;
}


/**
 * The ReflectionExtension class reports information about an extension.
 */
declare class ReflectionExtension implements Reflector {
    
    /**
     * Name of the extension, same as calling the ReflectionExtension::getName method.
     */
    name: string;

    
    /**
     * Constructs a ReflectionExtension
     * 
     * Construct a ReflectionExtension object.
     *
     * @param name Name of the extension.
     * @return A ReflectionExtension object.
     */
    constructor(name: string);
    
    /**
     * Gets classes
     * 
     * Gets a list of classes from an extension.
     * @return An array of ReflectionClass objects, one for each class within the
     *         extension. If no classes are defined, an empty array is returned.
     */
    getClasses(): Pct.PhpAssocArray;
    
    /**
     * Gets class names
     * 
     * Gets a listing of class names as defined in the extension.
     * @return An array of class names, as defined in the extension. If no classes are
     *         defined, an empty array is returned.
     */
    getClassNames(): string[];
    
    /**
     * Gets constants
     * 
     * Get defined constants from an extension.
     * @return An associative array with constant names as keys.
     */
    getConstants(): Pct.PhpAssocArray;
    
    /**
     * Gets dependencies
     * 
     * Gets dependencies, by listing both required and conflicting dependencies.
     * @return An associative array with dependencies as keys and either Required,
     *         Optional or Conflicts as the values.
     */
    getDependencies(): Pct.PhpAssocArray;
    
    /**
     * Gets extension functions
     * 
     * Get defined functions from an extension.
     * @return An associative array of ReflectionFunction objects, for each function
     *         defined in the extension with the keys being the function names. If no
     *         function are defined, an empty array is returned.
     */
    getFunctions(): Pct.PhpAssocArray;
    
    /**
     * Gets extension ini entries
     * 
     * Get the ini entries for an extension.
     * @return An associative array with the ini entries as keys, with their defined
     *         values as values.
     */
    getINIEntries(): Pct.PhpAssocArray;
    
    /**
     * Gets extension name
     * 
     * Gets the extensions name.
     * @return The extensions name.
     */
    getName(): string;
    
    /**
     * Gets extension version
     * 
     * Gets the version of the extension.
     * @return The version of the extension.
     */
    getVersion(): string;
    
    /**
     * Print extension info
     * 
     * Prints out the "phpinfo" snippet for the given extension.
     * @return Information about the extension.
     */
    info();
    
    /**
     * Returns whether this extension is persistent
     * @return Returns true for extensions loaded by extension, false otherwise.
     */
    isPersistent(): bool;
    
    /**
     * Returns whether this extension is temporary
     * @return Returns true for extensions loaded by dl, false otherwise.
     */
    isTemporary(): bool;
}


/**
 * A parent class to ReflectionFunction, read its description for details.
 */
declare class ReflectionFunctionAbstract implements Reflector {
    
    /**
     * Name of the function. Read-only, throws ReflectionException in attempt to write.
     */
    name: string;

    
    /**
     * Returns this pointer bound to closure
     * @return Returns $this pointer. Returns  in case of an error.
     */
    getClosureThis(): any;
    
    /**
     * Gets doc comment
     * 
     * Get a Doc comment from a function.
     * @return The doc comment if it exists, otherwise false
     */
    getDocComment(): string;
    
    /**
     * Gets end line number
     * 
     * Get the ending line number.
     * @return The ending line number of the user defined function, or false if
     *         unknown.
     */
    getEndLine(): number;
    
    /**
     * Gets extension info
     * 
     * Get the extension information of a function.
     * @return The extension information, as a ReflectionExtension object.
     */
    getExtension(): ReflectionExtension;
    
    /**
     * Gets extension name
     * 
     * Get the extensions name.
     * @return The extensions name.
     */
    getExtensionName(): string;
    
    /**
     * Gets file name
     * 
     * Gets the file name from a user-defined function.
     * @return The file name.
     */
    getFileName(): string;
    
    /**
     * Gets function name
     * 
     * Get the name of the function.
     * @return The name of the function.
     */
    getName(): string;
    
    /**
     * Gets namespace name
     * 
     * Get the namespace name where the class is defined.
     * @return The namespace name.
     */
    getNamespaceName(): string;
    
    /**
     * Gets number of parameters
     * 
     * Get the number of parameters that a function defines, both optional and
     * required.
     * @return The number of parameters.
     */
    getNumberOfParameters(): number;
    
    /**
     * Gets number of required parameters
     * 
     * Get the number of required parameters that a function defines.
     * @return The number of required parameters.
     */
    getNumberOfRequiredParameters(): number;
    
    /**
     * Gets parameters
     * 
     * Get the parameters as an array of ReflectionParameter.
     * @return The parameters, as a ReflectionParameter object.
     */
    getParameters(): ReflectionParameter[];
    
    /**
     * Gets function short name
     * 
     * Get the short name of the function (without the namespace part).
     * @return The short name of the function.
     */
    getShortName(): string;
    
    /**
     * Gets starting line number
     * 
     * Gets the starting line number of the function.
     * @return The starting line number.
     */
    getStartLine(): number;
    
    /**
     * Gets static variables
     * 
     * Get the static variables.
     * @return An array of static variables.
     */
    getStaticVariables(): any[]; //TODO: figure out
    
    /**
     * Checks if function in namespace
     * 
     * Checks whether a function is defined in a namespace.
     * @return true if it's in a namespace, otherwise false
     */
    inNamespace(): bool;
    
    /**
     * Checks if closure
     * 
     * Checks whether it's a closure.
     * @return true if it's a closure, otherwise false
     */
    isClosure(): bool;
    
    /**
     * Checks if deprecated
     * 
     * Checks whether the function is deprecated.
     * @return true if it's deprecated, otherwise false
     */
    isDeprecated(): bool;
    
    /**
     * Checks if is internal
     * 
     * Checks whether the function is internal, as opposed to user-defined.
     * @return true if it's internal, otherwise false
     */
    isInternal(): bool;
    
    /**
     * Checks if user defined
     * 
     * Checks whether the function is user-defined, as opposed to internal.
     * @return true if it's user-defined, otherwise false;
     */
    isUserDefined(): bool;
    
    /**
     * Checks if returns reference
     * 
     * Checks whether the function returns a reference.
     * @return true if it returns a reference, otherwise false
     */
    returnsReference(): bool;
}


/**
 * The ReflectionFunction class reports information about a function.
 */
declare class ReflectionFunction extends ReflectionFunctionAbstract {
    
    /**
     * Indicates deprecated functions.
     */
    static IS_DEPRECATED: number;

    
    /**
     * Name of the function. Read-only, throws ReflectionException in attempt to write.
     */
    name: string;

    
    /**
     * Constructs a ReflectionFunction object
     * 
     * Constructs a ReflectionFunction object.
     *
     * @param name The name of the function to reflect or a closure.
     */
    constructor(name: any);
    
    /**
     * Returns a dynamically created closure for the function
     * @return Returns Closure. Returns  in case of an error.
     */
    getClosure(): Closure;
    
    /**
     * Invokes function
     * 
     * Invokes a reflected function.
     *
     * @param parameter 
     * @return Returns the result of the invoked function call.
     */
    invoke(...parameter: any[]): any;
    
    /**
     * Invokes function args
     * 
     * Invokes the function and pass its arguments as array.
     *
     * @param args The passed arguments to the function as an array, much like
     *             call_user_func_array works.
     * @return Returns the result of the invoked function
     */
    invokeArgs(args: any[]): any;
    
    /**
     * Checks if function is disabled
     * 
     * Checks if the function is disabled, via the disable_functions directive.
     * @return true if it's disable, otherwise false
     */
    isDisabled(): bool;
}


/**
 * The ReflectionMethod class reports information about a method.
 */
declare class ReflectionMethod extends ReflectionFunctionAbstract {
    
    /**
     * Indicates that the method is static.
     */
    static IS_STATIC: number;
    
    /**
     * Indicates that the method is public.
     */
    static IS_PUBLIC: number;
    
    /**
     * Indicates that the method is protected.
     */
    static IS_PROTECTED: number;
    
    /**
     * Indicates that the method is private.
     */
    static IS_PRIVATE: number;
    
    /**
     * Indicates that the method is abstract.
     */
    static IS_ABSTRACT: number;
    
    /**
     * Indicates that the method is final.
     */
    static IS_FINAL: number;

    
    /**
     * Method name
     */
    name: string;
    class_: string;

    
    /**
     * Constructs a ReflectionMethod
     * 
     * Constructs a new ReflectionMethod.
     *
     * @param class_ Classname or object (instance of the class) that contains the
     *               method.
     * @param name Name of the method.
     */
    constructor(class_: string, name: string);
    
    /**
     * Constructs a ReflectionMethod
     * 
     * Constructs a new ReflectionMethod.
     *
     * @param class_ Classname or object (instance of the class) that contains the
     *               method.
     * @param name Name of the method.
     */
    constructor(class_: Object, name: string);
    
    /**
     * Returns a dynamically created closure for the method
     *
     * @param object Forbidden for static methods, required for other methods.
     * @return Returns Closure. Returns  in case of an error.
     */
    getClosure(object?: any): Closure;
    
    /**
     * Gets declaring class for the reflected method.
     * 
     * Gets the declaring class for the reflected method.
     * @return A ReflectionClass object of the class that the reflected method is part
     *         of.
     */
    getDeclaringClass(): ReflectionClass;
    
    /**
     * Gets the method modifiers
     * 
     * Returns a bitfield of the access modifiers for this method.
     * @return A numeric representation of the modifiers. The modifiers are listed
     *         below. The actual meanings of these modifiers are described in the
     *         predefined constants.
     */
    getModifiers(): number;
    
    /**
     * Gets the method prototype (if there is one).
     * 
     * Returns the methods prototype.
     * @return A ReflectionMethod instance of the method prototype.
     */
    getPrototype(): ReflectionMethod;
    
    /**
     * Invoke
     * 
     * Invokes a reflected method.
     *
     * @param object The object to invoke the method on. For static methods, pass null
     *               to this parameter.
     * @param parameter Zero or more parameters to be passed to the method. It accepts
     *                  a variable number of parameters which are passed to the
     *                  method.
     * @return Returns the method result.
     */
    invoke(object: any, ...parameter: any[]): any;
    
    /**
     * Invoke args
     * 
     * Invokes the reflected method and pass its arguments as array.
     *
     * @param object The object to invoke the method on. In case of static methods,
     *               you can pass null to this parameter.
     * @param args The parameters to be passed to the function, as an array.
     * @return Returns the method result.
     */
    invokeArgs(object: any, args: any[]): any;
    
    /**
     * Checks if method is abstract
     * 
     * Checks if the method is abstract.
     * @return true if the method is abstract, otherwise false
     */
    isAbstract(): bool;
    
    /**
     * Checks if method is a constructor
     * 
     * Checks if the method is a constructor.
     * @return true if the method is a constructor, otherwise false
     */
    isConstructor(): bool;
    
    /**
     * Checks if method is a destructor
     * 
     * Checks if the method is a destructor.
     * @return true if the method is a destructor, otherwise false
     */
    isDestructor(): bool;
    
    /**
     * Checks if method is final
     * 
     * Checks if the method is final.
     * @return true if the method is final, otherwise false
     */
    isFinal(): bool;
    
    /**
     * Checks if method is private
     * 
     * Checks if the method is private.
     * @return true if the method is private, otherwise false
     */
    isPrivate(): bool;
    
    /**
     * Checks if method is protected
     * 
     * Checks if the method is protected.
     * @return true if the method is protected, otherwise false
     */
    isProtected(): bool;
    
    /**
     * Checks if method is public
     * 
     * Checks if the method is public.
     * @return true if the method is public, otherwise false
     */
    isPublic(): bool;
    
    /**
     * Checks if method is static
     * 
     * Checks if the method is static.
     * @return true if the method is static, otherwise false
     */
    isStatic(): bool;
    
    /**
     * Set method accessibility
     * 
     * Sets a method to be accessible. For example, it may allow protected and private
     * methods to be invoked.
     *
     * @param accessible true to allow accessibility, or false.
     */
    setAccessible(accessible: bool);
}


/**
 * The ReflectionObject class reports information about an object.
 */
declare class ReflectionObject extends ReflectionClass {
}


/**
 * The ReflectionParameter class retrieves information about function's or method's
 * parameters.
 * 
 * To introspect function parameters, first create an instance of the
 * ReflectionFunction or ReflectionMethod classes and then use their
 * ReflectionFunctionAbstract::getParameters method to retrieve an array of
 * parameters.
 */
declare class ReflectionParameter implements Reflector {
    
    /**
     * Name of the parameter. Read-only, throws ReflectionException in attempt to
     * write.
     */
    name: string;

    
    /**
     * Construct
     * 
     * Constructs a ReflectionParameter class.
     *
     * @param function_ The function to reflect parameters from.
     * @param parameter The parameter.
     */
    constructor(function_: string, parameter: string);
    
    /**
     * Checks if null is allowed
     * 
     * Checks whether the parameter allows .
     * @return true if  is allowed, otherwise false
     */
    allowsNull(): bool;
    
    /**
     * Returns whether this parameter can be passed by value
     * @return Returns true if the parameter can be passed by value, false otherwise.
     *         Returns  in case of an error.
     */
    canBePassedByValue(): bool;
    
    /**
     * Get class
     * 
     * Gets a class.
     * @return A ReflectionClass object.
     */
    getClass(): ReflectionClass;
    
    /**
     * Gets declaring class
     * 
     * Gets the declaring class.
     * @return A ReflectionClass object.
     */
    getDeclaringClass(): ReflectionClass;
    
    /**
     * Gets declaring function
     * 
     * Gets the declaring function.
     * @return A ReflectionFunction object.
     */
    getDeclaringFunction(): ReflectionFunction;
    
    /**
     * Gets default parameter value
     * 
     * Gets the default value of the parameter for a user-defined function or method.
     * If the parameter is not optional a ReflectionException will be thrown.
     * @return The parameters default value.
     */
    getDefaultValue(): any;
    
    /**
     * Gets parameter name
     * 
     * Gets the name of the parameter.
     * @return The name of the reflected parameter.
     */
    getName(): string;
    
    /**
     * Gets parameter position
     * 
     * Gets the position of the parameter.
     * @return The position of the parameter, left to right, starting at position #0.
     */
    getPosition(): number;
    
    /**
     * Checks if parameter expects an array
     * 
     * Checks if the parameter expects an array.
     * @return true if an array is expected, false otherwise.
     */
    isArray(): bool;
    
    /**
     * Checks if a default value is available
     * 
     * Checks if a default value for the parameter is available.
     * @return true if a default value is available, otherwise false
     */
    isDefaultValueAvailable(): bool;
    
    /**
     * Checks if optional
     * 
     * Checks if the parameter is optional.
     * @return true if the parameter is optional, otherwise false
     */
    isOptional(): bool;
    
    /**
     * Checks if passed by reference
     * 
     * Checks if the parameter is passed in by reference.
     * @return true if the parameter is passed in by reference, otherwise false
     */
    isPassedByReference(): bool;
}


/**
 * The ReflectionProperty class reports information about classes properties.
 */
declare class ReflectionProperty implements Reflector {
    
    /**
     * Indicates static properties.
     */
    static IS_STATIC: number;
    
    /**
     * Indicates public properties.
     */
    static IS_PUBLIC: number;
    
    /**
     * Indicates protected properties.
     */
    static IS_PROTECTED: number;
    
    /**
     * Indicates private properties.
     */
    static IS_PRIVATE: number;

    
    /**
     * Name of the property. Read-only, throws ReflectionException in attempt to write.
     */
    name: string;
    class_: string;

    
    /**
     * Construct a ReflectionProperty object
     *
     * @param class_ The class name, that contains the property.
     * @param name The name of the property being reflected.
     */
    constructor(class_: string, name: string);
    
    /**
     * Construct a ReflectionProperty object
     *
     * @param class_ The class name, that contains the property.
     * @param name The name of the property being reflected.
     */
    constructor(class_: Object, name: string);
    
    /**
     * Gets declaring class
     * 
     * Gets the declaring class.
     * @return A ReflectionClass object.
     */
    getDeclaringClass(): ReflectionClass;
    
    /**
     * Gets doc comment
     * 
     * Gets the doc comment.
     * @return The doc comment.
     */
    getDocComment(): string;
    
    /**
     * Gets modifiers
     * 
     * Gets the modifiers.
     * @return A numeric representation of the modifiers.
     */
    getModifiers(): number;
    
    /**
     * Gets property name
     * 
     * Gets the properties name.
     * @return The name of the reflected property.
     */
    getName(): string;
    
    /**
     * Gets value
     * 
     * Gets the properties value.
     *
     * @param object If the property is non-static an object must be provided to fetch
     *               the property from. If you want to fetch the default property
     *               without providing an object use
     *               ReflectionClass::getDefaultProperties instead.
     * @return The current value of the property.
     */
    getValue(object?: any): any;
    
    /**
     * Checks if default value
     * 
     * Checks whether the property is the default.
     * @return true if the property was declared at compile-time, or false if it was
     *         created at run-time.
     */
    isDefault(): bool;
    
    /**
     * Checks if property is private
     * 
     * Checks whether the property is private.
     * @return true if the property is private, false otherwise.
     */
    isPrivate(): bool;
    
    /**
     * Checks if property is protected
     * 
     * Checks whether the property is protected.
     * @return true if the property is protected, false otherwise.
     */
    isProtected(): bool;
    
    /**
     * Checks if property is public
     * 
     * Checks whether the property is public.
     * @return true if the property is public, false otherwise.
     */
    isPublic(): bool;
    
    /**
     * Checks if property is static
     * 
     * Checks whether the property is static.
     * @return true if the property is static, false otherwise.
     */
    isStatic(): bool;
    
    /**
     * Set property accessibility
     * 
     * Sets a property to be accessible. For example, it may allow protected and
     * private properties to be accessed.
     *
     * @param accessible true to allow accessibility, or false.
     */
    setAccessible(accessible: bool);
    
    /**
     * Set property value
     * 
     * Sets (changes) the property's value.
     *
     * @param value The new value.
     */
    setValue(value: any);
    
    /**
     * Set property value
     * 
     * Sets (changes) the property's value.
     *
     * @param object If the property is non-static an object must be provided to
     *               change the property on. If the property is static this parameter
     *               is left out and only value needs to be provided.
     * @param value The new value.
     */
    setValue(object: any, value: any);
}


/**
 * The ReflectionException class.
 */
declare class ReflectionException extends Exception { }

//--------------------------------------------------------------------------------
// session
//--------------------------------------------------------------------------------

/*
 * Session support in PHP consists of a way to preserve certain data across
 * subsequent accesses. This enables you to build more customized applications and
 * increase the appeal of your web site.
 * 
 * A visitor accessing your web site is assigned a unique id, the so-called session
 * id. This is either stored in a cookie on the user side or is propagated in the
 * URL.
 * 
 * The session support allows you to store data between requests in the $_SESSION
 * superglobal array. When a visitor accesses your site, PHP will check
 * automatically (if session.auto_start is set to 1) or on your request (explicitly
 * through session_start or implicitly through session_register) whether a specific
 * session id has been sent with the request. If this is the case, the prior saved
 * environment is recreated.
 * 
 * $_SESSION (and all registered variables) are serialized internally by PHP using
 * the serialization handler specified by the session.serialize_handler ini
 * setting, after the request finishes.  Registered variables which are undefined
 * are marked as being not defined.  On subsequent accesses, these are not defined
 * by the session module unless the user defines them later.
 */

/**
 * SessionHandlerInterface is an interface which defines a prototype for creating a
 * custom session handler. In order to pass a custom session handler to
 * session_set_save_handler using its OOP invocation, the class must implement this
 * interface.
 * 
 * Please note the callback methods of this class are designed to be called
 * internally by PHP and are not meant to be called from user-space code.
 */
declare interface SessionHandlerInterface {
    
    /**
     * Close the session
     * 
     * Closes the current session. This function is automatically executed when closing
     * the session, or explicitly via session_write_close.
     */
    close(): bool;
    
    /**
     * Destroy a session
     * 
     * Destroys a session. Called by session_regenerate_id (with $destroy = true),
     * session_destroy and when session_decode fails.
     *
     * @param session_id The session ID being destroyed.
     */
    destroy(session_id: string): bool;
    
    /**
     * Cleanup old sessions
     * 
     * Cleans up expired sessions. Called by session_start, based on
     * session.gc_divisor, session.gc_probability and session.gc_lifetime settings.
     *
     * @param maxlifetime Sessions that have not updated for the last maxlifetime
     *                    seconds will be removed.
     */
    gc(maxlifetime: string): bool;
    
    /**
     * Initialize session
     * 
     * Re-initialize existing session, or creates a new one. Called when a session
     * starts or when session_start is invoked.
     *
     * @param save_path The path where to store/retrieve the session.
     * @param name The session name.
     */
    open(save_path: string, name: string): bool;
    
    /**
     * Read session data
     * 
     * Reads the session data from the session storage, and returns the results. Called
     * right after the session starts or when session_start is called. Please note that
     * before this method is called SessionHandlerInterface::open is invoked.
     * 
     * This method is called by PHP itself when the session is started. This method
     * should retrieve the session data from storage by the session ID provided. The
     * string returned by this method must be in the same serialized format as when
     * originally passed to the SessionHandlerInterface::write If the record was not
     * found, return an empty string.
     * 
     * The data returned by this method will be decoded internally by PHP using the
     * unserialization method specified in session.serialize_handler. The resultig data
     * will be used to populate the $_SESSION superglobal.
     * 
     * Note that the serialization scheme is not the same as unserialize and can be
     * accessed by session_decode.
     *
     * @param session_id The session id.
     * @return Returns an encoded string of the read data. If nothing was read, it
     *         must return an empty string. Note this value is returned internally to
     *         PHP for processing.
     */
    read(session_id: string): string;
    
    /**
     * Write session data
     * 
     * Writes the session data to the session storage. Called by session_write_close,
     * when session_register_shutdown fails, or during a normal shutdown. Note:
     * SessionHandlerInterface::close is called immediately after this function.
     * 
     * PHP will call this method when the session is ready to be saved and closed. It
     * encodes the session data from the $_SESSION superglobal to a serialized string
     * and passes this along with the session ID to this method for storage.  The
     * serialization method used is specified in the session.serialize_handler setting.
     * 
     * 
     * Note this method is normally called by PHP after the output buffers have been
     * closed unless explicitly called by session_write_close
     *
     * @param session_id The session id.
     * @param session_data The encoded session data.  This data is the result of the
     *                     PHP internally encoding the $_SESSION superglobal to a
     *                     serialized string and passing it as this parameter.  Please
     *                     note sessions use an alternative serialization method.
     */
    write(session_id: string, session_data: string): bool;
}


/**
 * SessionHandler a special class that can be used to expose the current internal
 * PHP session save handler by inheritance.  There are six methods which wrap the
 * six internal session save handler callbacks (open, close, read, write, destroy
 * and gc). By default, this class will wrap whatever internal save handler is set
 * as as defined by the session.save_handler configuration directive which is
 * usually files by default. Other internal session save handlers are provided by
 * PHP extensions such as SQLite (as sqlite), Memcache (as memcache), and Memcached
 * (as memcached).
 * 
 * When a plain instance of SessionHandler is set as the save handler using
 * session_set_save_handler it will wrap the current save handlers. A class
 * extending from SessionHandler allows you to override the methods or intercept or
 * filter them by calls the parent class methods which ultimately wrap the interal
 * PHP session handlers.
 * 
 * This allows you, for example, to intercept the read and write methods to
 * encrypt/decrypt the session data and then pass the result to and from the parent
 * class. Alternatively one might chose to entirely override a method like the
 * garbage collection callback gc.
 * 
 * Because the SessionHandler wraps the current internal save handler methods, the
 * above example of encryption can be applied to any internal save handler without
 * having to know the internals of the handlers.
 * 
 * To use this class, first set the save handler you wish to expose using
 * session.save_handler and then pass an instance of SessionHandler or one
 * extending it to session_set_save_handler.
 * 
 * Please note the callback methods of this class are designed to be called
 * internally by PHP and are not meant to be called from user-space code.  The
 * return values are equally processed internally by PHP.  For more information on
 * the session workflow, please refer session_set_save_handler.
 */
declare class SessionHandler implements SessionHandlerInterface {
    
    /**
     * Close the session
     * 
     * Closes the current session. This method is automatically executed internally by
     * PHP when closing the session, or explicitly via session_write_close (which first
     * calls the SessionHandler::write).
     * 
     * This method wraps the internal PHP save handler defined in the
     * session.save_handler ini setting that was set before this handler was activated
     * by session_set_save_handler.
     * 
     * If this class is extended by inheritiance, calling the parent close method will
     * invoke the wrapper for this method and therefor invoke the associated internal
     * callback.  This allows the method to be overidden and or intercepted.
     * 
     * For more information on what this method is expected to do, please refer to the
     * documentation at SessionHandlerInterface::close.
     */
    close(): bool;
    
    /**
     * Destroy a session
     * 
     * Destroys a session. Called by internally by PHP with session_regenerate_id
     * (assuming the $destory is set to true, by session_destroy or when session_decode
     * fails.
     * 
     * This method wraps the internal PHP save handler defined in the
     * session.save_handler ini setting that was set before this handler was set by
     * session_set_save_handler.
     * 
     * If this class is extended by inheritiance, calling the parent destroy method
     * will invoke the wrapper for this method and therefor invoke the associated
     * internal callback.  This allows this method to be overidden and or intercepted
     * and filtered.
     * 
     * For more information on what this method is expected to do, please refer to the
     * documentation at SessionHandlerInterface::destroy.
     *
     * @param session_id The session ID being destroyed.
     */
    destroy(session_id: string): bool;
    
    /**
     * Cleanup old sessions
     * 
     * Cleans up expired sessions. Called randomly by PHP internally when a session
     * starts or when session_start is invoked.  The frequency this is called is based
     * on the session.gc_divisor and session.gc_probability configuration directives.
     * 
     * This method wraps the internal PHP save handler defined in the
     * session.save_handler ini setting that was set before this handler was set by
     * session_set_save_handler.
     * 
     * If this class is extended by inheritiance, calling the parent gc method will
     * invoke the wrapper for this method and therefor invoke the associated internal
     * callback.  This allows this method to be overidden and or intercepted and
     * filtered.
     * 
     * For more information on what this method is expected to do, please refer to the
     * documentation at SessionHandlerInterface::gc.
     *
     * @param maxlifetime Sessions that have not updated for the last maxlifetime
     *                    seconds will be removed.
     */
    gc(maxlifetime: string): bool;
    
    /**
     * Initialize session
     * 
     * Create new session, or re-initialize existing session. Called internally by PHP
     * when a session starts either automatically or when session_start is invoked.
     * 
     * This method wraps the internal PHP save handler defined in the
     * session.save_handler ini setting that was set before this handler was set by
     * session_set_save_handler.
     * 
     * If this class is extended by inheritiance, calling the parent open method will
     * invoke the wrapper for this method and therefor invoke the associated internal
     * callback.  This allows this method to be overidden and or intercepted and
     * filtered.
     * 
     * For more information on what this method is expected to do, please refer to the
     * documentation at SessionHandlerInterface::open.
     *
     * @param save_path The path where to store/retrieve the session.
     * @param name
     */
    open(save_path: string, name: string): bool;
    
    /**
     * Read session data
     * 
     * Reads the session data from the session storage, and returns the result back to
     * PHP for internal processing. This method is called automatically by PHP when a
     * session is started (either automatically or explicity with session_start and is
     * preceeded by an internal call to the SessionHandler::open.
     * 
     * This method wraps the internal PHP save handler defined in the
     * session.save_handler ini setting that was set before this handler was set by
     * session_set_save_handler.
     * 
     * If this class is extended by inheritiance, calling the parent read method will
     * invoke the wrapper for this method and therefor invoke the associated internal
     * callback.  This allows the method to be overidden and or intercepted and
     * filtered (for example, decrypting $data value returned by the parent read
     * method).
     * 
     * For more information on what this method is expected to do, please refer to the
     * documentation at SessionHandlerInterface::read.
     *
     * @param session_id The session id to read data for.
     * @return Returns an encoded string of the read data. If nothing was read, it
     *         must return an empty string. Note this value is returned internally to
     *         PHP for processing.
     */
    read(session_id: string): string;
    
    /**
     * Write session data
     * 
     * Writes the session data to the session storage. Called by normal PHP shutdown,
     * by session_write_close, or when session_register_shutdown fails. PHP will call
     * SessionHandler::close immediately after this method returns.
     * 
     * This method wraps the internal PHP save handler defined in the
     * session.save_handler ini setting that was set before this handler was set by
     * session_set_save_handler.
     * 
     * If this class is extended by inheritiance, calling the parent write method will
     * invoke the wrapper for this method and therefor invoke the associated internal
     * callback.  This allows this method to be overidden and or intercepted and
     * filtered (for example, encrypting the $data value before sending it to the
     * parent write method).
     * 
     * For more information on what this method is expected to do, please refer to the
     * documentation at SessionHandlerInterface::write.
     *
     * @param session_id The session id.
     * @param session_data The encoded session data.  This data is the result of the
     *                     PHP internally encoding the $_SESSION superglobal to a
     *                     serialized string and passing it as this parameter.  Please
     *                     note sessions use an alternative serialization method.
     */
    write(session_id: string, session_data: string): bool;
}

//TODO: rest...don't feel like it right now...

//--------------------------------------------------------------------------------
// simplexml
//--------------------------------------------------------------------------------

/*
 * The SimpleXML extension provides a very simple and easily usable toolset to
 * convert XML to an object that can be processed with normal property selectors
 * and array iterators.
 */

/**
 * Represents an element in an XML document.
 */
class SimpleXMLElement implements Traversable, Pct.Indexable {
    
    /**
     * Creates a new SimpleXMLElement object
     * 
     * Creates a new SimpleXMLElement object.
     *
     * @param data
     * @param options
     * @param data_is_url
     * @param ns
     * @param is_prefix
     * @return Returns a SimpleXMLElement object representing data.
     */
    constructor(data: string, options?: number, data_is_url?: bool, ns?: string, is_prefix?: bool);
    
    /**
     * Adds an attribute to the SimpleXML element
     * 
     * Adds an attribute to the SimpleXML element.
     *
     * @param name The name of the attribute to add.
     * @param value The value of the attribute.
     * @param namespace If specified, the namespace to which the attribute belongs.
     */
    addAttribute(name: string, value?: string, namespace?: string);
    
    /**
     * Adds a child element to the XML node
     * 
     * Adds a child element to the node and returns a SimpleXMLElement of the child.
     *
     * @param name The name of the child element to add.
     * @param value If specified, the value of the child element.
     * @param namespace If specified, the namespace to which the child element
     *                  belongs.
     * @return The addChild method returns a SimpleXMLElement object representing the
     *         child added to the XML node.
     */
    addChild(name: string, value?: string, namespace?: string): SimpleXMLElement;
    
    /**
     * Return a well-formed XML string based on SimpleXML element
     * 
     * The asXML method formats the parent object's data in XML version 1.0.
     * @return If the filename isn't specified, this function returns a string on
     *         success and false on error. If the parameter is specified, it returns
     *         true if the file was written successfully and false otherwise.
     */
    asXML(): string;
    
    /**
     * Return a well-formed XML string based on SimpleXML element
     * 
     * The asXML method formats the parent object's data in XML version 1.0.
     *
     * @param filename If specified, the function writes the data to the file rather
     *                 than returning it.
     * @return If the filename isn't specified, this function returns a string on
     *         success and false on error. If the parameter is specified, it returns
     *         true if the file was written successfully and false otherwise.
     */
    asXML(filename: string): bool;
    
    /**
     * Identifies an element's attributes
     * 
     * This function provides the attributes and values defined within an xml tag.
     *
     * @param ns An optional namespace for the retrieved attributes
     * @param is_prefix Default to false
     * @return Returns a SimpleXMLElement object that can be iterated over to loop
     *         through the attributes on the tag.
     *         
     *         Returns  if called on a SimpleXMLElement object that already represents
     *         an attribute and not a tag.
     */
    attributes(ns?: string, is_prefix?: bool): SimpleXMLElement;
    
    /**
     * Finds children of given node
     * 
     * This method finds the children of an element. The result follows normal
     * iteration rules.
     *
     * @param ns An XML namespace.
     * @param is_prefix If is_prefix is true, ns will be regarded as a prefix. If
     *                  false, ns will be regarded as a namespace URL.
     * @return Returns a SimpleXMLElement element, whether the node has children or
     *         not.
     */
    children(ns?: string, is_prefix?: bool): SimpleXMLElement;
    
    /**
     * Counts the children of an element
     * 
     * This method counts the number of children of an element.
     * @return Returns the number of elements of an element.
     */
    count(): number;
    
    /**
     * Returns namespaces declared in document
     * 
     * Returns namespaces declared in document
     *
     * @param recursive If specified, returns all namespaces declared in parent and
     *                  child nodes. Otherwise, returns only namespaces declared in
     *                  root node.
     * @return The getDocNamespaces method returns an array of namespace names with
     *         their associated URIs.
     */
    getDocNamespaces(recursive?: bool): Pct.PhpAssocArray;
    
    /**
     * Gets the name of the XML element
     * 
     * Gets the name of the XML element.
     * @return The getName method returns as a string the name of the XML tag
     *         referenced by the SimpleXMLElement object.
     */
    getName(): string;
    
    /**
     * Returns namespaces used in document
     * 
     * Returns namespaces used in document
     *
     * @param recursive If specified, returns all namespaces used in parent and child
     *                  nodes. Otherwise, returns only namespaces used in root node.
     * @return The getNamespaces method returns an array of namespace names with their
     *         associated URIs.
     */
    getNamespaces(recursive?: bool): Pct.PhpAssocArray;
    
    /**
     * Creates a prefix/ns context for the next XPath query
     * 
     * Creates a prefix/ns context for the next XPath query. In particular, this is
     * helpful if the provider of the given XML document alters the namespace prefixes.
     * registerXPathNamespace will create a prefix for the associated namespace,
     * allowing one to access nodes in that namespace without the need to change code
     * to allow for the new prefixes dictated by the provider.
     *
     * @param prefix The namespace prefix to use in the XPath query for the namespace
     *               given in ns.
     * @param ns The namespace to use for the XPath query. This must match a namespace
     *           in use by the XML document or the XPath query using prefix will not
     *           return any results.
     */
    registerXPathNamespace(prefix: string, ns: string): bool;
    
    /**
     * Runs XPath query on XML data
     * 
     * The xpath method searches the SimpleXML node for children matching the XPath
     * path.
     *
     * @param path An XPath path
     * @return Returns an array of SimpleXMLElement objects or false in case of an
     *         error.
     */
    xpath(path: string): SimpleXMLElement[];
}


/**
 * The SimpleXMLIterator provides recursive iteration over all nodes of a
 * SimpleXMLElement object.
 */
class SimpleXMLIterator extends SimpleXMLElement implements RecursiveIterator, Countable {

    //overrides
    
    /**
     * Returns the current element
     * 
     * This method returns the current element as a SimpleXMLIterator object or .
     * @return Returns the current element as a SimpleXMLIterator object or  on
     *         failure.
     */
    current(): SimpleXMLIterator;
    
    /**
     * Return current key
     * 
     * This method gets the XML tag name of the current element.
     * @return Returns the XML tag name of the element referenced by the current
     *         SimpleXMLIterator object or false
     */
    key(): string;
    
    /**
     * Move to next element
     * 
     * This method moves the SimpleXMLIterator to the next element.
     */
    next();
    
    /**
     * Rewind to the first element
     * 
     * This method rewinds the SimpleXMLIterator to the first element.
     */
    rewind();
    
    /**
     * Check whether the current element is valid
     * 
     * This method checks if the current element is valid after calls to
     * SimpleXMLIterator::rewind or SimpleXMLIterator::next.
     * @return Returns true if the current element is valid, otherwise false
     */
    valid(): bool;
    
    /**
     * Returns the sub-elements of the current element
     * 
     * This method returns a SimpleXMLIterator object containing sub-elements of the
     * current SimpleXMLIterator element.
     * @return Returns a SimpleXMLIterator object containing the sub-elements of the
     *         current element.
     */
    getChildren(): SimpleXMLIterator;
    
    /**
     * Checks whether the current element has sub elements.
     * 
     * This method checks whether the current SimpleXMLIterator element has
     * sub-elements.
     * @return true if the current element has sub-elements, otherwise false
     */
    hasChildren(): bool;
}


/**
 * Get a SimpleXMLElement object from a DOM node.
 * 
 * This function takes a node of a DOM document and makes it into a SimpleXML node.
 * This new object can then be used as a native SimpleXML element.
 *
 * @param node A DOM Element node
 * @param class_name You may use this optional parameter so that
 *                   simplexml_import_dom will return an object of the specified
 *                   class. That class should extend the SimpleXMLElement class.
 * @return Returns a SimpleXMLElement.
 */
function simplexml_import_dom(node: DOMNode, class_name?: string): SimpleXMLElement;

/**
 * Interprets an XML file into an object
 * 
 * Convert the well-formed XML document in the given file to an object.
 *
 * @param filename Path to the XML file
 *                 
 *                 Libxml 2 unescapes the URI, so if you want to pass e.g. bc as
 *                 the URI parameter a, you have to call
 *                 simplexml_load_file(rawurlencode('http://example.com/?a=' .
 *                 urlencode('bc'))). Since PHP 5.1.0 you don't need to do this
 *                 because PHP will do it for you.
 * @param class_name You may use this optional parameter so that
 *                   simplexml_load_file will return an object of the specified
 *                   class. That class should extend the SimpleXMLElement class.
 * @param options Since PHP 5.1.0 and Libxml 2.6.0, you may also use the options
 *                parameter to specify additional Libxml parameters.
 * @param ns Namespace prefix or URI.
 * @param is_prefix true if ns is a prefix, false if it's a URI; defaults to
 *                  false.
 * @return Returns an object of class SimpleXMLElement with properties containing
 *         the data held within the XML document,.
 */
function simplexml_load_file(filename: string, class_name?: string, options?: number, ns?: string, is_prefix?: bool): SimpleXMLElement;

/**
 * Interprets a string of XML into an object
 * 
 * Takes a well-formed XML string and returns it as an object.
 *
 * @param data A well-formed XML string
 * @param class_name You may use this optional parameter so that
 *                   simplexml_load_string will return an object of the specified
 *                   class. That class should extend the SimpleXMLElement class.
 * @param options Since PHP 5.1.0 and Libxml 2.6.0, you may also use the options
 *                parameter to specify additional Libxml parameters.
 * @param ns Namespace prefix or URI.
 * @param is_prefix true if ns is a prefix, false if it's a URI; defaults to
 *                  false.
 * @return Returns an object of class SimpleXMLElement with properties containing
 *         the data held within the xml document,.
 */
function simplexml_load_string(data: string, class_name?: string, options?: number, ns?: string, is_prefix?: bool): SimpleXMLElement;

//--------------------------------------------------------------------------------
// spl
//--------------------------------------------------------------------------------

/*
 * SPL is a collection of interfaces and classes that are meant to solve standard
 * problems.
 */
//my god are the SPL docs bad...wrong return types, param types, etc...


/**
 * Classes implementing Countable can be used with the count function.
 */
declare interface Countable {
    
    /**
     * Count elements of an object
     * 
     * This method is executed when using the count function on an object implementing
     * Countable.
     * @return The custom count as an integer.
     *         
     *         The return value is cast to an integer.
     */
    count(): number;
}


/**
 * The Seekable iterator.
 */
declare interface SeekableIterator extends Iterator {
    
    /**
     * Seeks to a position
     * 
     * Seeks to a given position in the iterator.
     *
     * @param position The position to seek to.
     */
    seek(position: number);
}


/**
 * Classes implementing RecursiveIterator can be used to iterate over iterators
 * recursively.
 */
declare interface RecursiveIterator extends Iterator {
    
    /**
     * Returns an iterator for the current entry.
     * 
     * Returns an iterator for the current iterator entry.
     * @return An iterator for the current entry.
     */
    getChildren(): RecursiveIterator;
    
    /**
     * Returns if an iterator can be created fot the current entry.
     * 
     * Returns if an iterator can be created for the current entry.
     * RecursiveIterator::getChildren.
     * @return Returns true if the current entry can be iterated over, otherwise
     *         returns false.
     */
    hasChildren(): bool;
}


/**
 * Classes implementing OuterIterator can be used to iterate over iterators.
 */
declare interface OuterIterator extends Iterator {
    
    /**
     * Returns the inner iterator for the current entry.
     * 
     * Returns the inner iterator for the current iterator entry.
     * @return The inner iterator for the current entry.
     */
    getInnerIterator(): Iterator;
}


/**
 * The SplObserver interface is used alongside SplSubject to implement the Observer
 * Design Pattern.
 */
declare interface SplObserver {
    
    /**
     * Receive update from subject
     * 
     * This method is called when any SplSubject to which the observer is attached
     * calls SplSubject::notify.
     *
     * @param subject The SplSubject notifying the observer of an update.
     */
    update(subject: SplSubject);
}


/**
 * The SplSubject interface is used alongside SplObserver to implement the Observer
 * Design Pattern.
 */
declare interface SplSubject {
    
    /**
     * Attach an SplObserver
     * 
     * Attaches an SplObserver so that it can be notified of updates.
     *
     * @param observer The SplObserver to attach.
     */
    attach(observer: SplObserver);
    
    /**
     * Detach an observer
     * 
     * Detaches an observer from the subject to no longer notify it of updates.
     *
     * @param observer The SplObserver to detach.
     */
    detach(observer: SplObserver);
    
    /**
     * Notify an observer
     * 
     * Notifies all attached observers.
     */
    notify();
}


/**
 * The SplDoublyLinkedList class provides the main functionalities of a doubly
 * linked list.
 */
declare class SplDoublyLinkedList implements Iterator, ArrayAccess, Countable {
    static IT_MODE_DELETE: number;
    static IT_MODE_FIFO: number;
    static IT_MODE_KEEP: number;
    static IT_MODE_LIFO: number;

    
    /**
     * Peeks at the node from the beginning of the doubly linked list
     * @return The value of the first node.
     */
    bottom(): any;
    
    /**
     * Returns the mode of iteration
     * @return Returns the different modes and flags that affect the iteration.
     */
    getIteratorMode(): number;
    
    /**
     * Checks whether the doubly linked list is empty.
     * @return Returns whether the doubly linked list is empty.
     */
    isEmpty(): bool;
    
    /**
     * Pops a node from the end of the doubly linked list
     * @return The value of the popped node.
     */
    pop(): bool;
    
    /**
     * Move to previous entry
     * 
     * Move the iterator to the previous node.
     */
    prev();
    
    /**
     * Pushes an element at the end of the doubly linked list
     * 
     * Pushes value at the end of the doubly linked list.
     *
     * @param value The value to push.
     */
    push(value: any);
    
    /**
     * Serializes the storage
     * 
     * Serializes the storage.
     * @return The serialized string.
     */
    serialize(): string;
    
    /**
     * Sets the mode of iteration
     *
     * @param mode There are two orthogonal sets of modes that can be set:
     *             
     *             The default mode is: SplDoublyLinkedList::IT_MODE_FIFO |
     *             SplDoublyLinkedList::IT_MODE_KEEP
     */
    setIteratorMode(mode: number);
    
    /**
     * Shifts a node from the beginning of the doubly linked list
     * @return The value of the shifted node.
     */
    shift(): any;
    
    /**
     * Peeks at the node from the end of the doubly linked list
     * @return The value of the last node.
     */
    top(): any;
    
    /**
     * Unserializes the storage
     * 
     * Unserializes the storage, from SplDoublyLinkedList::serialize.
     *
     * @param serialized The serialized string.
     */
    unserialize(serialized: string);
    
    /**
     * Prepends the doubly linked list with an element
     * 
     * Prepends value at the beginning of the doubly linked list.
     *
     * @param value The value to unshift.
     */
    unshift(value: any);

    
    /**
     * Return current array entry
     * 
     * Get the current doubly linked list node.
     * @return The current node value.
     */
    current(): any;
    
    /**
     * Return current node index
     * 
     * This function returns the current node index
     * @return The current node index.
     */
    key(): any;
    
    /**
     * Move to next entry
     * 
     * Move the iterator to the next node.
     */
    next();
    
    /**
     * Rewind iterator back to the start
     * 
     * This rewinds the iterator to the beginning.
     */
    rewind();
    
    /**
     * Check whether the doubly linked list contains more nodes
     * 
     * Checks if the doubly linked list contains any more nodes.
     * @return Returns true if the doubly linked list contains any more nodes, false
     *         otherwise.
     */
    valid(): bool;
    
    /**
     * Returns whether the requested $index exists
     *
     * @param offset
     * @return true if the requested index exists, otherwise false
     */
    offsetExists(offset: any): bool;
    
    /**
     * Returns the value at the specified $index
     *
     * @param offset
     * @return The value at the specified index.
     */
    offsetGet(offset: any): any;
    
    /**
     * Sets the value at the specified $index to $newval
     * 
     * Sets the value at the specified index to newval.
     *
     * @param offset
     * @param value
     */
    offsetSet(offset: any, value: any);
    
    /**
     * Unsets the value at the specified $index
     * 
     * Unsets the value at the specified index.
     *
     * @param offset
     */
    offsetUnset(offset: any);
    
    /**
     * Counts the number of elements in the doubly linked list.
     * @return Returns the number of elements in the doubly linked list.
     */
    count(): number;
}


/**
 * The SplStack class provides the main functionalities of a stack implemented
 * using a doubly linked list.
 */
declare class SplStack extends SplDoublyLinkedList {

}


/**
 * The SplQueue class provides the main functionalities of a queue implemented
 * using a doubly linked list.
 */
declare class SplQueue extends SplDoublyLinkedList {
    
    /**
     * Dequeues a node from the queue
     * 
     * Dequeues value from the top of the queue.
     * 
     * SplQueue::dequeue is an alias of SplDoublyLinkedList::shift.
     * @return The value of the dequeued node.
     */
    dequeue(): any;
    
    /**
     * Adds an element to the queue.
     * 
     * Enqueues value at the end of the queue.
     * 
     * SplQueue::enqueue is an alias of SplDoublyLinkedList::push.
     *
     * @param value The value to enqueue.
     */
    enqueue(value: any);
}


/**
 * The SplHeap class provides the main functionalities of a Heap.
 */
declare class SplHeap implements Iterator, Countable {
    
    /**
     * Compare elements in order to place them correctly in the heap while sifting up.
     * 
     * Compare value1 with value2.
     * 
     * Throwing exceptions in SplHeap::compare can corrupt the Heap and place it in a
     * blocked state. You can unblock it by calling SplHeap::recoverFromCorruption.
     * However, some elements might not be placed correctly and it may hence break the
     * heap-property.
     *
     * @param value1 The value of the first node being compared.
     * @param value2 The value of the second node being compared.
     * @return Result of the comparison, positive integer if value1 is greater than
     *         value2, 0 if they are equal, negative integer otherwise.
     *         
     *         Having multiple elements with the same value in a Heap is not
     *         recommended. They will end up in an arbitrary relative position.
     */
    compare(value1: any, value2: any): number;
    
    /**
     * Extracts a node from top of the heap and sift up.
     * @return The value of the extracted node.
     */
    extract(): any;
    
    /**
     * Inserts an element in the heap by sifting it up.
     * 
     * Insert value in the heap.
     *
     * @param value The value to insert.
     */
    insert(value: any);
    
    /**
     * Checks whether the heap is empty.
     * @return Returns whether the heap is empty.
     */
    isEmpty(): bool;
    
    /**
     * Recover from the corrupted state and allow further actions on the heap.
     */
    recoverFromCorruption();
    
    /**
     * Peeks at the node from the top of the heap
     * @return The value of the node on the top.
     */
    top(): any;

    
    /**
     * Return current node pointed by the iterator
     * 
     * Get the current datastructure node.
     * @return The current node value.
     */
    current(): any;
    
    /**
     * Return current node index
     * 
     * This function returns the current node index
     * @return The current node index.
     */
    key(): any;
    
    /**
     * Move to the next node
     * 
     * Move to the next node.
     */
    next();
    
    /**
     * Rewind iterator back to the start (no-op)
     * 
     * This rewinds the iterator to the beginning. This is a no-op for heaps as the
     * iterator is virtual and in fact never moves from the top of the heap.
     */
    rewind();
    
    /**
     * Check whether the heap contains more nodes
     * 
     * Checks if the heap contains any more nodes.
     * @return Returns true if the heap contains any more nodes, false otherwise.
     */
    valid(): bool;
    
    /**
     * Counts the number of elements in the heap.
     * @return Returns the number of elements in the heap.
     */
    count(): number;
}


/**
 * The SplMaxHeap class provides the main functionalities of a heap, keeping the
 * maximum on the top.
 */
declare class SplMaxHeap extends SplHeap {
}


/**
 * The SplMinHeap class provides the main functionalities of a heap, keeping the
 * minimum on the top.
 */
declare class SplMinHeap extends SplHeap {
}


/**
 * The SplPriorityQueue class provides the main functionalities of an prioritized
 * queue, implemented using a heap.
 */
declare class SplPriorityQueue implements Iterator, Countable {
    static EXTR_BOTH: number;
    static EXTR_DATA: number;
    static EXTR_PRIORITY: number;

    
    /**
     * Compare priorities in order to place elements correctly in the heap while
     * sifting up.
     * 
     * Compare priority1 with priority2.
     *
     * @param priority1 The priority of the first node being compared.
     * @param priority2 The priority of the second node being compared.
     * @return Result of the comparison, positive integer if priority1 is greater than
     *         priority2, 0 if they are equal, negative integer otherwise.
     *         
     *         Multiple elements with the same priority will get dequeued in no
     *         particular order.
     */
    compare(priority1: any, priority2: any): number;
    
    /**
     * Extracts a node from top of the heap and sift up.
     * @return The value or priority (or both) of the extracted node, depending on the
     *         extract flag.
     */
    extract(): any;
    
    /**
     * Inserts an element in the queue by sifting it up.
     * 
     * Insert value with the priority priority in the queue.
     *
     * @param value The value to insert.
     * @param priority The associated priority.
     */
    insert(value: any, priority: any);
    
    /**
     * Checks whether the queue is empty.
     * @return Returns whether the queue is empty.
     */
    isEmpty(): bool;
    
    /**
     * Recover from the corrupted state and allow further actions on the queue.
     */
    recoverFromCorruption();
    
    /**
     * Sets the mode of extraction
     *
     * @param flags Defines what is extracted by SplPriorityQueue::current,
     *              SplPriorityQueue::top and SplPriorityQueue::extract.
     *              
     *              The default mode is SplPriorityQueue::EXTR_DATA.
     */
    setExtractFlags(flags: number);
    
    /**
     * Peeks at the node from the top of the queue
     * @return The value or priority (or both) of the top node, depending on the
     *         extract flag.
     */
    top(): any;

    
    /**
     * Return current node pointed by the iterator
     * 
     * Get the current datastructure node.
     * @return The value or priority (or both) of the current node, depending on the
     *         extract flag.
     */
    current(): any;
    
    /**
     * Return current node index
     * 
     * This function returns the current node index
     * @return The current node index.
     */
    key(): any;
    
    /**
     * Move to the next node
     * 
     * Extracts the top node from the queue.
     */
    next();
    
    /**
     * Rewind iterator back to the start (no-op)
     * 
     * This rewinds the iterator to the beginning. This is a no-op for heaps as the
     * iterator is virtual and in fact never moves from the top of the heap.
     */
    rewind();
    
    /**
     * Check whether the queue contains more nodes
     * 
     * Checks if the queue contains any more nodes.
     * @return Returns true if the queue contains any more nodes, false otherwise.
     */
    valid(): bool;
    
    /**
     * Counts the number of elements in the queue.
     * @return Returns the number of elements in the queue.
     */
    count(): number;
}


/**
 * The SplFixedArray class provides the main functionalities of array. The main
 * differences between a SplFixedArray and a normal PHP array is that the
 * SplFixedArray is of fixed length and allows only integers within the range as
 * indexes. The advantage is that it allows a faster array implementation.
 */
declare class SplFixedArray implements Iterator, ArrayAccess, Countable {
    
    /**
     * Import a PHP array in a SplFixedArray instance
     * 
     * Import the PHP array array in a new SplFixedArray instance
     *
     * @param array The array to import.
     * @param save_indexes Try to save the numeric indexes used in the original array.
     * @return Returns an instance of SplFixedArray containing the array content.
     */
    static fromArray(array: Array, save_indexes?: bool): SplFixedArray;

    
    /**
     * Constructs a new fixed array
     * 
     * Initializes a fixed array with a number of  values equal to size.
     *
     * @param size
     */
    constructor(size?: number);
    
    /**
     * Gets the size of the array
     * 
     * Gets the size of the array.
     * @return Returns the size of the array, as an integer.
     */
    getSize(): number;
    
    /**
     * Change the size of an array
     * 
     * Change the size of an array to the new size of size. If size is less than the
     * current array size, any values after the new size will be discarded. If size is
     * greater than the current array size, the array will be padded with  values.
     *
     * @param size The new array size. This should be a value between 0 and
     *             PHP_INT_MAX.
     */
    setSize(size: number): number;
    
    /**
     * Returns a PHP array from the fixed array
     * 
     * Returns a PHP array from the fixed array.
     * @return Returns a PHP array, similar to the fixed array.
     */
    toArray(): Array;
    
    /**
     * Reinitialises the array after being unserialised
     * 
     * Reinitialises the array after being unserialised.
     */
    __wakeup();

    
    /**
     * Return current array entry
     * 
     * Get the current array element.
     * @return The current element value.
     */
    current(): any;
    
    /**
     * Return current array index
     * 
     * Returns the current array index.
     * @return The current array index.
     */
    key(): any;
    
    /**
     * Move to next entry
     * 
     * Move the iterator to the next array entry.
     */
    next();
    
    /**
     * Rewind iterator back to the start
     * 
     * Rewinds the iterator to the beginning.
     */
    rewind();
    
    /**
     * Check whether the array contains more elements
     * 
     * Checks if the array contains any more elements.
     * @return Returns true if the array contains any more elements, false otherwise.
     */
    valid(): bool;
    
    /**
     * Returns whether the requested index exists
     * 
     * Checks whether the requested index index exists.
     *
     * @param offset
     * @return true if the requested index exists, otherwise false
     */
    offsetExists(offset: any): bool;
    
    /**
     * Returns the value at the specified index
     * 
     * Returns the value at the index index.
     *
     * @param offset
     * @return The value at the specified index.
     */
    offsetGet(offset: any): any;
    
    /**
     * Sets a new value at a specified index
     * 
     * Sets the value at the specified index to newval.
     *
     * @param offset
     * @param value
     */
    offsetSet(offset: any, value: any);
    
    /**
     * Unsets the value at the specified $index
     * 
     * Unsets the value at the specified index.
     *
     * @param offset
     */
    offsetUnset(offset: any);
    
    /**
     * Returns the size of the array
     * 
     * Returns the size of the array.
     * @return Returns the size of the array.
     */
    count(): number;
}


/**
 * The SplObjectStorage class provides a map from objects to data or, by ignoring
 * data, an object set. This dual purpose can be useful in many cases involving the
 * need to uniquely identify objects.
 */
declare class SplObjectStorage implements Countable, Iterator, Serializable, ArrayAccess {
    
    /**
     * Adds all objects from another storage
     * 
     * Adds all objects-data pairs from a different storage in the current storage.
     *
     * @param storage The storage you want to import.
     */
    addAll(storage: SplObjectStorage);
    
    /**
     * Adds an object in the storage
     * 
     * Adds an object inside the storage, and optionally associate it to some data.
     *
     * @param object The object to add.
     * @param data The data to associate with the object.
     */
    attach(object: Object, data?: any);
    
    /**
     * Checks if the storage contains a specific object
     * 
     * Checks if the storage contains the object provided.
     *
     * @param object The object to look for.
     * @return Returns true if the object is in the storage, false otherwise.
     */
    contains(object: Object): bool;
    
    /**
     * Removes an object from the storage
     * 
     * Removes the object from the storage.
     *
     * @param object The object to remove.
     */
    detach(object: Object);
    
    /**
     * Calculate a unique identifier for the contained objects
     * 
     * This method calculates an identifier for the objects added to an
     * SplObjectStorage object.
     * 
     * The implementation in SplObjectStorage returns the same value as
     * spl_object_hash.
     * 
     * The storage object will never contain more than one object with the same
     * identifier. As such, it can be used to implement a set (a collection of unique
     * values) where the quality of an object being unique is determined by the value
     * returned by this function being unique.
     *
     * @param object The object whose identifier is to be calculated.
     * @return A string with the calculated identifier.
     */
    getHash(object?: Object): string;
    
    /**
     * Returns the data associated with the current iterator entry
     * 
     * Returns the data, or info, associated with the object pointed by the current
     * iterator position.
     * @return The data associated with the current iterator position.
     */
    getInfo(): any;
    
    /**
     * Removes objects contained in another storage from the current storage
     * 
     * Removes objects contained in another storage from the current storage.
     *
     * @param storage The storage containing the elements to remove.
     */
    removeAll(storage: SplObjectStorage);
    
    /**
     * Removes all objects except for those contained in another storage from the
     * current storage
     * 
     * Removes all objects except for those contained in another storage from the
     * current storage.
     *
     * @param storage The storage containing the elements to retain in the current
     *                storage.
     */
    removeAllExcept(storage: SplObjectStorage);
    
    /**
     * Sets the data associated with the current iterator entry
     * 
     * Associates data, or info, with the object currently pointed to by the iterator.
     *
     * @param data The data to associate with the current iterator entry.
     */
    setInfo(data: any);

    
    /**
     * Returns the current storage entry
     * 
     * Returns the current storage entry.
     * @return The object at the current iterator position.
     */
    current(): any;
    
    /**
     * Returns the index at which the iterator currently is
     * 
     * Returns the index at which the iterator currently is.
     * @return The index corresponding to the position of the iterator.
     */
    key(): any;
    
    /**
     * Move to the next entry
     * 
     * Moves the iterator to the next object in the storage.
     */
    next();
    
    /**
     * Rewind the iterator to the first storage element
     * 
     * Rewind the iterator to the first storage element.
     */
    rewind();
    
    /**
     * Returns if the current iterator entry is valid
     * 
     * Returns if the current iterator entry is valid.
     * @return Returns true if the iterator entry is valid, false otherwise.
     */
    valid(): bool;
    
    /**
     * Checks whether an object exists in the storage
     * 
     * Checks whether an object exists in the storage.
     * 
     * SplObjectStorage::offsetExists is an alias of SplObjectStorage::contains.
     *
     * @param offset
     * @return Returns true if the object exists in the storage, and false otherwise.
     */
    offsetExists(offset: any): bool;
    
    /**
     * Returns the data associated with an object
     * 
     * Returns the data associated with an object in the storage.
     *
     * @param offset
     * @return The data previously associated with the object in the storage.
     */
    offsetGet(offset: any): any;
    
    /**
     * Associates data to an object in the storage
     * 
     * Associate data to an object in the storage.
     * 
     * SplObjectStorage::offsetSet is an alias of SplObjectStorage::attach.
     *
     * @param offset
     * @param value
     */
    offsetSet(offset: any, value: any);
    
    /**
     * Removes an object from the storage
     * 
     * Removes an object from the storage.
     * 
     * SplObjectStorage::offsetUnset is an alias of SplObjectStorage::detach.
     *
     * @param offset
     */
    offsetUnset(offset: any);
    
    /**
     * Returns the number of objects in the storage
     * 
     * Counts the number of objects in the storage.
     * @return The number of objects in the storage.
     */
    count(): number;
    
    /**
     * Serializes the storage
     * 
     * Returns a string representation of the storage.
     * @return A string representing the storage.
     */
    serialize(): string;
    
    /**
     * Unserializes a storage from its string representation
     * 
     * Unserializes storage entries and attach them to the current storage.
     *
     * @param serialized The serialized representation of a storage.
     */
    unserialize(serialized: string);
}


/**
 * This iterator allows to unset and modify values and keys while iterating over
 * Arrays and Objects.
 * 
 * When you want to iterate over the same array multiple times you need to
 * instantiate ArrayObject and let it create ArrayIterator instances that refer to
 * it either by using  or by calling its getIterator() method manually.
 */
declare class ArrayIterator implements ArrayAccess, SeekableIterator, Countable, Serializable {
    
    /**
     * Construct an ArrayIterator
     * 
     * Constructs an ArrayIterator object.
     *
     * @param array The array or object to be iterated on.
     * @param flags Flags to control the behaviour of the ArrayObject object. See
     *              ArrayObject::setFlags.
     * @return An ArrayIterator object.
     */
    constructor(array?: any, flags?: number);
    
    /**
     * Append an element
     * 
     * Appends value as the last element.
     *
     * @param value The value to append.
     */
    append(value: any);
    
    /**
     * Sort array by values
     * 
     * Sorts an array by values.
     */
    asort();
    
    /**
     * Get array copy
     * 
     * Get a copy of an array.
     * @return A copy of the array, or array of public properties if ArrayIterator
     *         refers to an object.
     */
    getArrayCopy(): Array;
    
    /**
     * Get flags
     * 
     * Get the current flags.
     * @return The current flags.
     */
    getFlags(); //TODO: what?
    
    /**
     * Sort array by keys
     * 
     * Sorts an array by the keys.
     */
    ksort();
    
    /**
     * Sort an array naturally, case insensitive
     * 
     * Sort the entries by values using a case insensitive "natural order" algorithm.
     */
    natcasesort();
    
    /**
     * Sort an array naturally
     * 
     * Sort the entries by values using "natural order" algorithm.
     */
    natsort();
    
    /**
     * Set behaviour flags
     * 
     * Sets behaviour flags.
     *
     * @param flags A bitmask as follows:   0 = Properties of the object have their
     *              normal functionality when accessed as list (var_dump, foreach,
     *              etc.).   1 = Array indices can be accessed as properties in
     *              read/write.
     */
    setFlags(flags: string); //TODO: string?
    
    /**
     * User defined sort
     * 
     * Sort the entries by values using user defined function.
     *
     * @param cmp_function The compare function used for the sort.
     */
    uasort(cmp_function: string); //TODO: string?
    
    /**
     * User defined sort
     * 
     * Sort the entries by key using user defined function.
     *
     * @param cmp_function The compare function used for the sort.
     */
    uksort(cmp_function: string); //TODO: string?

    
    /**
     * Return current array entry
     * 
     * Get the current array entry.
     * @return The current array entry.
     */
    current(): any;
    
    /**
     * Return current array key
     * 
     * This function returns the current array key
     * @return The current array key.
     */
    key(): any;
    
    /**
     * Move to next entry
     * 
     * The iterator to the next entry.
     */
    next();
    
    /**
     * Rewind array back to the start
     * 
     * This rewinds the iterator to the beginning.
     */
    rewind();
    
    /**
     * Check whether array contains more entries
     * 
     * Checks if the array contains any more entries.
     */
    valid(): bool;
    
    /**
     * Seek to position
     *
     * @param position The position to seek to.
     */
    seek(position: number);
    
    /**
     * Check if offset exists
     * 
     * Checks if the offset exists.
     *
     * @param offset
     * @return true if the offset exists, otherwise false
     */
    offsetExists(offset: any): bool;
    
    /**
     * Get value for an offset
     * 
     * Gets the value from the provided offset.
     *
     * @param offset
     * @return The value at offset index.
     */
    offsetGet(offset: any): any;
    
    /**
     * Set value for an offset
     * 
     * Sets a value for a given offset.
     *
     * @param offset
     * @param value
     */
    offsetSet(offset: any, value: any);
    
    /**
     * Unset value for an offset
     * 
     * Unsets a value for an offset.
     *
     * @param offset
     */
    offsetUnset(offset: any);
    
    /**
     * Count elements
     * 
     * Gets the number of elements in the array, or the number of public properties in
     * the object.
     * @return The number of elements or public properties in the associated array or
     *         object, respectively.
     */
    count(): number;
    
    /**
     * Serialize
     * 
     * Serialize.
     * @return The serialized ArrayIterator.
     */
    serialize(): string;
    
    /**
     * Unserialize
     * 
     * Unserialize.
     *
     * @param serialized The serialized ArrayIterator object to be unserialized.
     * @return The ArrayIterator.
     */
    unserialize(serialized: string);
}


/**
 * This iterator allows to unset and modify values and keys while iterating over
 * Arrays and Objects in the same way as the ArrayIterator. Additionally it is
 * possible to iterate over the current iterator entry.
 */
declare class RecursiveArrayIterator extends ArrayIterator implements RecursiveIterator {
    
    /**
     * Returns an iterator for the current entry if it is an array or an object.
     * 
     * Returns an iterator for the current iterator entry.
     * @return An iterator for the current entry, if it is an array or object.
     */
    getChildren(): RecursiveIterator;
    
    /**
     * Returns whether current entry is an array or an object.
     * 
     * Returns whether current entry is an array or an object for which an iterator can
     * be obtained via RecursiveArrayIterator::getChildren.
     * @return Returns true if the current entry is an array or an object, otherwise
     *         false is returned.
     */
    hasChildren(): bool;
}


/**
 * The EmptyIterator class for an empty iterator.
 */
declare class EmptyIterator implements Iterator {
    
    /**
     * The current() method
     * 
     * This function must not be called. It throws an exception upon access.
     */
    current(): any;
    
    /**
     * The key() method
     * 
     * This function must not be called. It throws an exception upon access.
     */
    key(): any;
    
    /**
     * The next() method
     * 
     * No operation, nothing to do.
     */
    next();
    
    /**
     * The rewind() method
     * 
     * No operation, nothing to do.
     */
    rewind();
    
    /**
     * The valid() method
     * 
     * The EmptyIterator valid() method.
     * @return false
     */
    valid(): bool;
}


/**
 * This iterator wrapper allows the conversion of anything that is Traversable into
 * an Iterator. It is important to understand that most classes that do not
 * implement Iterators have reasons as most likely they do not allow the full
 * Iterator feature set. If so, techniques should be provided to prevent misuse,
 * otherwise expect exceptions or fatal errors.
 */
declare class IteratorIterator implements OuterIterator {
    
    /**
     * Create an iterator from anything that is traversable
     * 
     * Creates an iterator from anything that is traversable.
     *
     * @param iterator The traversable iterator.
     */
    constructor(iterator: Traversable);

    
    /**
     * Get the current value
     * 
     * Get the value of the current element.
     * @return The value of the current element.
     */
    current(): any;
    
    /**
     * Get the key of the current element
     * 
     * Get the key of the current element.
     * @return The key of the current element.
     */
    key(): any;
    
    /**
     * Forward to the next element
     * 
     * Forward to the next element.
     */
    next();
    
    /**
     * Rewind to the first element
     * 
     * Rewinds to the first element.
     */
    rewind();
    
    /**
     * Checks if the iterator is valid
     * 
     * Checks if the iterator is valid.
     * @return Returns true if the iterator is valid, otherwise false
     */
    valid(): bool;
    
    /**
     * Get the inner iterator
     * 
     * Get the inner iterator.
     * @return The inner iterator as passed to IteratorIterator::__construct.
     */
    getInnerIterator(): Iterator;
}


/**
 * An Iterator that iterates over several iterators one after the other.
 */
declare class AppendIterator extends IteratorIterator {
    
    /**
     * Constructs an AppendIterator
     * 
     * Constructs an AppendIterator.
     */
    constructor();
    
    /**
     * Appends an iterator
     * 
     * Appends an iterator.
     *
     * @param iterator The iterator to append.
     */
    append(iterator: Iterator);
    
    /**
     * Gets the ArrayIterator
     * 
     * This method gets the ArrayIterator that is used to store the iterators added
     * with AppendIterator::append.
     * @return Returns an ArrayIterator containing the appended iterators.
     */
    getArrayIterator(): ArrayIterator;
    
    /**
     * Gets an index of iterators
     * 
     * Gets the index of the current inner iterator.
     * @return Returns an integer, which is the zero-based index of the current inner
     *         iterator.
     */
    getIteratorIndex(): number;
}


/**
 * This object supports cached iteration over another iterator.
 */
declare class CachingIterator extends IteratorIterator implements ArrayAccess, Countable {
    
    /**
     * Convert every element to string.
     */
    static CALL_TOSTRING: number;
    
    /**
     * Don't throw exception in accessing children.
     */
    static CATCH_GET_CHILD: number;
    
    /**
     * Cache all read data.
     */
    static FULL_CACHE: number;
    
    /**
     * Use current for conversion to string.
     */
    static TOSTRING_USE_CURRENT: number;
    
    /**
     * Use inner for conversion to string.
     */
    static TOSTRING_USE_INNER: number;
    
    /**
     * Use key for conversion to string.
     */
    static TOSTRING_USE_KEY: number;

    
    /**
     * Construct a new CachingIterator object for the iterator.
     *
     * @param iterator Iterator to cache
     * @param flags Bitmask of flags.
     */
    constructor(iterator: Iterator, flags?: number);
    
    /**
     * The getCache purpose
     * @return Description...
     */
    getCache(); //TODO: wat?
    
    /**
     * Get flags used
     * 
     * Get the bitmask of the flags used for this CachingIterator instance.
     * @return Description...
     */
    getFlags(); //TODO: wat?
    
    /**
     * The setFlags purpose
     * 
     * Set the flags for the CachingIterator object.
     *
     * @param flags Bitmask of the flags to set.
     */
    setFlags(flags: number);

    
    /**
     * The offsetExists purpose
     *
     * @param offset
     * @return Returns true if an entry referenced by the offset exists, false
     *         otherwise.
     */
    offsetExists(offset: any): bool;
    
    /**
     * The offsetGet purpose
     *
     * @param offset
     * @return Description...
     */
    offsetGet(offset: any): any;
    
    /**
     * The offsetSet purpose
     *
     * @param offset
     * @param value
     */
    offsetSet(offset: any, value: any);
    
    /**
     * The offsetUnset purpose
     *
     * @param offset
     */
    offsetUnset(offset: any);
    
    /**
     * The number of elements in the iterator
     * 
     * May return the number of elements in the iterator.
     * @return The count of the elements iterated over.
     */
    count(): number;
}


/**
 * ...
 */
declare class RecursiveCachingIterator extends CachingIterator implements RecursiveIterator {
    
    /**
     * Return the inner iterator's children as a RecursiveCachingIterator
     * @return The inner iterator's children, as a RecursiveCachingIterator.
     */
    getChildren(): RecursiveCachingIterator;
    
    /**
     * Check whether the current element of the inner iterator has children
     * @return true if the inner iterator has children, otherwise false
     */
    hasChildren(): bool;
}


/**
 * This abstract iterator filters out unwanted values. This class should be
 * extended to implement custom iterator filters. The FilterIterator::accept must
 * be implemented in the subclass.
 */
declare class FilterIterator extends IteratorIterator {
    
    /**
     * Construct a filterIterator
     * 
     * Constructs a new FilterIterator, which consists of a passed in iterator with
     * filters applied to it.
     *
     * @param iterator The iterator that is being filtered.
     * @return The FilterIterator.
     */
    constructor(iterator: Iterator);
    
    /**
     * Check whether the current element of the iterator is acceptable
     * 
     * Returns whether the current element of the iterator is acceptable through this
     * filter.
     * @return true if the current element is acceptable, otherwise false.
     */
    accept(): bool;
}

declare class CallbackFilterIterator extends FilterIterator {
    
    /**
     * Create a filtered iterator from another iterator
     * 
     * Creates a filtered iterator using the callback to determine which items are
     * accepted or rejected.
     *
     * @param iterator
     * @param callback
     */
    constructor(iterator: Iterator, callback: (current: any, key: any, iterator: Iterator) => bool);
}

declare class RecursiveCallbackFilterIterator extends CallbackFilterIterator implements RecursiveIterator {
    
    /**
     * Create a RecursiveCallbackFilterIterator from a RecursiveIterator
     * 
     * Creates a filtered iterator from a RecursiveIterator using the callback to
     * determine which items are accepted or rejected.
     *
     * @param iterator
     * @param callback
     */
    constructor(iterator: RecursiveIterator, callback: (current: any, key: any, iterator: Iterator) => bool);

    
    /**
     * Return the inner iterator's children contained in a
     * RecursiveCallbackFilterIterator
     * 
     * Fetches the filtered children of the inner iterator.
     * 
     * RecursiveCallbackFilterIterator::hasChildren should be used to determine if
     * there are children to be fetched.
     * @return Returns a RecursiveCallbackFilterIterator containing the children.
     */
    getChildren(): RecursiveCallbackFilterIterator;
    
    /**
     * Check whether the inner iterator's current element has children
     * 
     * Returns true if the current element has children, false otherwise.
     * @return Returns true if the current element has children, false otherwise.
     */
    hasChildren(): bool;
}


/**
 * This abstract iterator filters out unwanted values for a RecursiveIterator. This
 * class should be extended to implement custom filters. The
 * RecursiveFilterIterator::accept must be implemented in the subclass.
 */
declare class RecursiveFilterIterator extends FilterIterator implements RecursiveIterator {
    
    /**
     * Create a RecursiveFilterIterator from a RecursiveIterator
     * 
     * Create a RecursiveFilterIterator from a RecursiveIterator.
     *
     * @param iterator The RecursiveIterator to be filtered.
     */
    constructor(iterator: RecursiveIterator);

    
    /**
     * Return the inner iterator's children contained in a RecursiveFilterIterator
     * 
     * Return the inner iterator's children contained in a RecursiveFilterIterator.
     * @return Returns a RecursiveFilterIterator containing the inner iterator's
     *         children.
     */
    getChildren(): RecursiveFilterIterator;
    
    /**
     * Check whether the inner iterator's current element has children
     * 
     * Check whether the inner iterator's current element has children.
     * @return true if the inner iterator has children, otherwise false
     */
    hasChildren(): bool;
}


/**
 * This extended FilterIterator allows a recursive iteration using
 * RecursiveIteratorIterator that only shows those elements which have children.
 */
declare class ParentIterator extends RecursiveFilterIterator {
    
    /**
     * Return the inner iterator's children contained in a ParentIterator
     * 
     * Get the inner iterator's children contained in a ParentIterator.
     * @return An object.
     */
    getChildren(): ParentIterator;
}


/**
 * This iterator can be used to filter another iterator based on a regular
 * expression.
 */
declare class RegexIterator extends FilterIterator {
    
    /**
     * Return all matches for the current entry (see preg_match_all).
     */
    static ALL_MATCHES: number;
    
    /**
     * Return the first match for the current entry (see preg_match).
     */
    static GET_MATCH: number;
    
    /**
     * Only execute match (filter) for the current entry (see preg_match).
     */
    static MATCH: number;
    
    /**
     * Replace the current entry (see preg_replace; Not fully implemented yet)
     */
    static REPLACE: number;
    
    /**
     * Returns the split values for the current entry (see preg_split).
     */
    static SPLIT: number;
    
    /**
     * Special flag: Match the entry key instead of the entry value.
     */
    static USE_KEY: number;

    
    /**
     * Create a new RegexIterator
     * 
     * Create a new RegexIterator which filters an Iterator using a regular expression.
     *
     * @param iterator
     * @param regex
     * @param mode
     * @param flags
     * @param preg_flags
     */
    constructor(iterator: Iterator, regex: string, mode?: number, flags?: number, preg_flags?: number);
    
    /**
     * Get flags
     * 
     * Returns the flags, see RegexIterator::setFlags for a list of available flags.
     * @return Returns the set flags.
     */
    getFlags(): number;
    
    /**
     * Returns operation mode.
     * 
     * Returns the operation mode, see RegexIterator::setMode for the list of operation
     * modes.
     * @return Returns the operation mode.
     */
    getMode(): number;
    
    /**
     * Returns the regular expression flags.
     * 
     * Returns the regular expression flags, see RegexIterator::__construct for the
     * list of flags.
     * @return Returns a bitmask of the regular expression flags.
     */
    getPregFlags(): number;
    
    /**
     * Returns current regular expression
     */
    getRegex(): string;
    
    /**
     * Sets the flags.
     * 
     * Sets the flags.
     *
     * @param flags The flags to set, a bitmask of class constants.
     *              
     *              The available flags are listed below. The actual meanings of these
     *              flags are described in the predefined constants.  RegexIterator
     *              flags    value constant     1  RegexIterator::USE_KEY
     */
    setFlags(flags: number);
    
    /**
     * Sets the operation mode.
     * 
     * Sets the operation mode.
     *
     * @param mode The operation mode.
     *             
     *             The available modes are listed below. The actual meanings of these
     *             modes are described in the predefined constants.  RegexIterator
     *             modes    value constant     0  RegexIterator::MATCH    1 
     *             RegexIterator::GET_MATCH    2  RegexIterator::ALL_MATCHES    3 
     *             RegexIterator::SPLIT    4  RegexIterator::REPLACE
     */
    setMode(mode: number);
    
    /**
     * Sets the regular expression flags.
     * 
     * Sets the regular expression flags.
     *
     * @param pref_flags
     */
    setPregFlags(pref_flags: number);
}


/**
 * This recursive iterator can filter another recursive iterator via a regular
 * expression.
 */
declare class RecursiveRegexIterator extends RegexIterator implements RecursiveIterator {
    
    /**
     * Creates a new RecursiveRegexIterator.
     * 
     * Creates a new regular expression iterator.
     *
     * @param iterator
     * @param regex
     * @param mode
     * @param flags
     * @param preg_flags
     */
    constructor(iterator: RecursiveIterator, regex: string, mode?: number, flags?: number, preg_flags?: number);

    
    /**
     * Returns an iterator for the current entry.
     * 
     * Returns an iterator for the current iterator entry.
     * @return An iterator for the current entry, if it can be iterated over by the
     *         inner iterator.
     */
    getChildren(): RecursiveIterator;
    
    /**
     * Returns whether an iterator can be obtained for the current entry.
     * 
     * Returns whether an iterator can be obtained for the current entry. This iterator
     * can be obtained via RecursiveRegexIterator::getChildren.
     * @return Returns true if an iterator can be obtained for the current entry,
     *         otherwise returns false.
     */
    hasChildren(): bool;
}


/**
 * The InfiniteIterator allows one to infinitely iterate over an iterator without
 * having to manually rewind the iterator upon reaching its end.
 */
declare class InfiniteIterator extends IteratorIterator {
    
    /**
     * Constructs an InfiniteIterator
     * 
     * Constructs an InfiniteIterator from an Iterator.
     *
     * @param iterator The iterator to infinitely iterate over.
     */
    constructor(iterator: Iterator);
}


/**
 * The LimitIterator class allows iteration over a limited subset of items in an
 * Iterator.
 */
declare class LimitIterator extends IteratorIterator {
    
    /**
     * Construct a LimitIterator
     * 
     * Constructs a new LimitIterator from an iterator with a given starting offset and
     * maximum count.
     *
     * @param iterator The Iterator to limit.
     * @param offset Optional offset of the limit.
     * @param count Optional count of the limit.
     * @return The new LimitIterator.
     */
    constructor(iterator: Iterator, offset?: number, count?: number);
    
    /**
     * Return the current position
     * 
     * Gets the current zero-based position of the inner Iterator.
     * @return The current position.
     */
    getPosition(): number;
    
    /**
     * Seek to the given position
     * 
     * Moves the iterator to the offset specified by position.
     *
     * @param position The position to seek to.
     * @return Returns the offset position after seeking.
     */
    seek(position: number): number;
}


/**
 * This iterator cannot be rewound.
 */
declare class NoRewindIterator extends IteratorIterator {
    
    /**
     * Construct a NoRewindIterator
     * 
     * Constructs a NoRewindIterator.
     *
     * @param iterator The iterator being used.
     * @return A NoRewindIterator based on the passed in iterator.
     */
    constructor(iterator: Iterator);
}


/**
 * An Iterator that sequentially iterates over all attached iterators
 */
declare class MultipleIterator implements Iterator {
    
    /**
     * Keys are created from sub iterators associated information.
     */
    static MIT_KEYS_ASSOC: number;
    
    /**
     * Keys are created from the sub iterators position.
     */
    static MIT_KEYS_NUMERIC: number;
    
    /**
     * Require all sub iterators to be valid in iteration.
     */
    static MIT_NEED_ALL: number;
    
    /**
     * Do not require all sub iterators to be valid in iteration.
     */
    static MIT_NEED_ANY: number;

    
    /**
     * Constructs a new MultipleIterator
     * 
     * Construct a new MultipleIterator.
     *
     * @param flags
     */
    constructor(flags?: number);
    
    /**
     * Attaches iterator information
     * 
     * Attaches iterator information.
     *
     * @param iterator The new iterator to attach.
     * @param infos The associative information for the Iterator, which must be an
     *              integer, a string, or .
     * @return Description...
     */
    attachIterator(iterator: Iterator, infos?: string);
    
    /**
     * Checks if an iterator is attached
     * 
     * Checks if an iterator is attached or not.
     *
     * @param iterator The iterator to check.
     */
    containsIterator(iterator: Iterator); //TODO: wat?
    
    /**
     * Gets the number of attached iterator instances
     * 
     * Gets the number of attached iterator instances.
     * @return The number of attached iterator instances (as an integer).
     */
    countIterators(); //TODO: wat?
    
    /**
     * Detaches an iterator
     * 
     * Detaches an iterator.
     *
     * @param iterator The iterator to detach.
     */
    detachIterator(iterator: Iterator);
    
    /**
     * Gets the flag information
     * 
     * Gets information about the flags.
     * @return Information about the flags, as an integer.
     */
    getFlags(); //TODO: wat?
    
    /**
     * Sets flags
     * 
     * Sets flags.
     *
     * @param flags The flags to set, according to the Flag Constants
     */
    setFlags(flags: number);

    
    /**
     * Gets the registered iterator instances
     * 
     * Get the registered iterator instances current() result.
     * @return An array containing the current values of each attached iterator, or
     *         false if no iterators are attached.
     */
    current(): any;
    
    /**
     * Gets the registered iterator instances
     * 
     * Get the registered iterator instances key() result.
     * @return An array of all registered iterator instances, or false if no sub
     *         iterator is attached.
     */
    key(): any;
    
    /**
     * Moves all attached iterator instances forward
     * 
     * Moves all attached iterator instances forward.
     */
    next();
    
    /**
     * Rewinds all attached iterator instances
     * 
     * Rewinds all attached iterator instances.
     */
    rewind();
    
    /**
     * Checks the validity of sub iterators
     * 
     * Checks the validity of sub iterators.
     * @return Returns true if one or all sub iterators are valid depending on flags,
     *         otherwise false
     */
    valid(): bool;
}


/**
 * Can be used to iterate through recursive iterators.
 */
declare class RecursiveIteratorIterator implements OuterIterator {
    static CATCH_GET_CHILD: number;
    static CHILD_FIRST: number;
    static LEAVES_ONLY: number;
    static SELF_FIRST: number;

    
    /**
     * Construct a RecursiveIteratorIterator
     * 
     * Creates a RecursiveIteratorIterator from a RecursiveIterator.
     *
     * @param iterator The iterator being constructed from. Either a RecursiveIterator
     *                 or IteratorAggregate.
     * @param mode Optional mode. Possible values are  
     *             RecursiveIteratorIterator::LEAVES_ONLY - The default. Lists only
     *             leaves in iteration.   RecursiveIteratorIterator::SELF_FIRST -
     *             Lists leaves and parents in iteration with parents coming first.  
     *             RecursiveIteratorIterator::CHILD_FIRST - Lists leaves and parents
     *             in iteration with leaves coming first.
     * @param flags Optional flag. Possible values are
     *              RecursiveIteratorIterator::CATCH_GET_CHILD which will then ignore
     *              exceptions thrown in calls to
     *              RecursiveIteratorIterator::getChildren.
     */
    constructor(iterator: Traversable, mode?: number, flags?: number);
    
    /**
     * Begin children
     * 
     * Is called after calling RecursiveIteratorIterator::getChildren, and its
     * associated RecursiveIteratorIterator::rewind.
     */
    beginChildren();
    
    /**
     * Begin Iteration
     * 
     * Called when iteration begins (after the first RecursiveIteratorIterator::rewind
     * call.
     */
    beginIteration();
    
    /**
     * Get children
     * 
     * Get children of the current element.
     * @return A RecursiveIterator.
     */
    callGetChildren(): RecursiveIterator;
    
    /**
     * Has children
     * 
     * Called for each element to test whether it has children.
     * @return true if the element has children, otherwise false
     */
    callHasChildren(): bool;
    
    /**
     * End children
     * 
     * Called when end recursing one level.
     */
    endChildren();
    
    /**
     * End Iteration
     * 
     * Called when the iteration ends (when RecursiveIteratorIterator::valid first
     * returns false.
     */
    endIteration();
    
    /**
     * Get the current depth of the recursive iteration
     * @return The current depth of the recursive iteration.
     */
    getDepth(): number;
    
    /**
     * Get max depth
     * 
     * Gets the maximum allowable depth.
     * @return The maximum accepted depth, or false if any depth is allowed.
     */
    getMaxDepth(): number;
    
    /**
     * The current active sub iterator
     * @return The current active sub iterator.
     */
    getSubIterator(): RecursiveIterator;
    
    /**
     * Next element
     * 
     * Called when the next element is available.
     */
    nextElement();
    
    /**
     * Set max depth
     * 
     * Set the maximum allowed depth.
     *
     * @param max_depth The maximum allowed depth. -1 is used for any depth.
     */
    setMaxDepth(max_depth?: number); //doc says string, I'm ignoring the doc

    
    /**
     * Access the current element value
     * @return The current elements value.
     */
    current(): any;
    
    /**
     * Access the current key
     * @return The current key.
     */
    key(): any;
    
    /**
     * Move forward to the next element
     */
    next();
    
    /**
     * Rewind the iterator to the first element of the top level inner iterator
     */
    rewind();
    
    /**
     * Check whether the current position is valid
     * @return true if the current position is valid, otherwise false
     */
    valid(): bool;
    
    /**
     * Get inner iterator
     * 
     * Gets the current active sub iterator.
     * @return The current active sub iterator.
     */
    getInnerIterator(): Iterator;
}


/**
 * Allows iterating over a RecursiveIterator to generate an ASCII graphic tree.
 */
declare class RecursiveTreeIterator extends RecursiveIteratorIterator {
    static BYPASS_CURRENT: number;
    static BYPASS_KEY: number;
    static PREFIX_END_LAST: number;
    static PREFIX_END_HAS_NEXT: number;
    static PREFIX_LEFT: number;
    static PREFIX_MID_HAS_NEXT: number;
    static PREFIX_MID_LAST: number;
    static PREFIX_RIGHT: number;

    
    /**
     * Construct a RecursiveTreeIterator
     * 
     * Constructs a new RecursiveTreeIterator from the supplied recursive iterator.
     *
     * @param it The RecursiveIterator or IteratorAggregate to iterate over.
     * @param flags Flags may be provided which will affect the behavior of some
     *              methods. A list of the flags can found under RecursiveTreeIterator
     *              predefined constants.
     * @param cit_flags 
     * @param mode Flags to affect the behavior of the RecursiveIteratorIterator used
     *             internally.
     */
    constructor(it: RecursiveIterator, flags?: number, cit_flags?: number, mode?: number);
    
    /**
     * Construct a RecursiveTreeIterator
     * 
     * Constructs a new RecursiveTreeIterator from the supplied recursive iterator.
     *
     * @param it The RecursiveIterator or IteratorAggregate to iterate over.
     * @param flags Flags may be provided which will affect the behavior of some
     *              methods. A list of the flags can found under RecursiveTreeIterator
     *              predefined constants.
     * @param cit_flags 
     * @param mode Flags to affect the behavior of the RecursiveIteratorIterator used
     *             internally.
     */
    constructor(it: IteratorAggregate, flags?: number, cit_flags?: number, mode?: number);
    
    /**
     * Get current entry
     * 
     * Gets the part of the tree built for the current element.
     * @return Returns the part of the tree built for the current element.
     */
    getEntry(): string;
    
    /**
     * Get the postfix
     * 
     * Gets the string to place after the current element.
     * @return Returns the string to place after the current element.
     */
    getPostfix(); //TODO: wat?
    
    /**
     * Get the prefix
     * 
     * Gets the string to place in front of current element
     * @return Returns the string to place in front of current element
     */
    getPrefix(): string;
    
    /**
     * Set a part of the prefix
     * 
     * Sets a part of the prefix used in the graphic tree.
     *
     * @param part One of the RecursiveTreeIterator::PREFIX_* constants.
     * @param value The value to assign to the part of the prefix specified in part.
     */
    setPrefixPart(part: number, value: string);
}

declare class LogicException extends Exception { }

declare class BadFunctionCallException extends LogicException { }

declare class BadMethodCallException extends BadFunctionCallException { }

declare class DomainException extends LogicException { }

declare class InvalidArgumentException extends LogicException { }

declare class LengthException extends LogicException { }

declare class OutOfRangeException extends LogicException { }

declare class RuntimeException extends Exception { }

declare class OutOfBoundsException extends RuntimeException { }

declare class OverflowException extends RuntimeException { }

declare class RangeException extends RuntimeException { }

declare class UnderflowException extends RuntimeException { }

declare class UnexpectedValueException extends RuntimeException { }


/**
 * The SplFileInfo class offers a high-level object oriented interface to
 * information for an individual file.
 */
declare class SplFileInfo {
    
    /**
     * Construct a new SplFileInfo object
     * 
     * Creates a new SplFileInfo object for the file_name specified. The file does not
     * need to exist, or be readable.
     *
     * @param file_name Path to the file.
     */
    constructor(file_name: string);
    
    /**
     * Gets last access time of the file
     * 
     * Gets the last access time for the file.
     * @return Returns the time the file was last accessed.
     */
    getATime(): number;
    
    /**
     * Gets the base name of the file
     * 
     * This method returns the base name of the file, directory, or link without path
     * info.
     *
     * @param suffix Optional suffix to omit from the base name returned.
     * @return Returns the base name without path information.
     */
    getBasename(suffix?: string): string;
    
    /**
     * Gets the inode change time
     * 
     * Returns the inode change time for the file. The time returned is a Unix
     * timestamp.
     * @return The last change time, in a Unix timestamp.
     */
    getCTime(): number;
    
    /**
     * Gets the file extension
     * 
     * Retrieves the file extension.
     * @return Returns a string containing the file extension, or an empty string if
     *         the file has no extension.
     */
    getExtension(): string;
    
    /**
     * Gets an SplFileInfo object for the file
     * 
     * This method gets an SplFileInfo object for the referenced file.
     *
     * @param class_name Name of an SplFileInfo derived class to use.
     * @return An SplFileInfo object created for the file.
     */
    getFileInfo(class_name?: string): SplFileInfo;
    
    /**
     * Gets the filename
     * 
     * Gets the filename without any path information.
     * @return The filename.
     */
    getFilename(): string;
    
    /**
     * Gets the file group
     * 
     * Gets the file group. The group ID is returned in numerical format.
     * @return The group id in numerical format.
     */
    getGroup(): number;
    
    /**
     * Gets the inode for the file
     * 
     * Gets the inode number for the filesystem object.
     * @return Returns the inode number for the filesystem object.
     */
    getInode(): number;
    
    /**
     * Gets the target of a link
     * 
     * Gets the target of a filesystem link.
     * 
     * The target may not be the real path on the filesystem. Use
     * SplFileInfo::getRealPath to determine the true path on the filesystem.
     * @return Returns the target of the filesystem link.
     */
    getLinkTarget(): string;
    
    /**
     * Gets the last modified time
     * 
     * Returns the time when the contents of the file were changed. The time returned
     * is a Unix timestamp.
     * @return Returns the last modified time for the file, in a Unix timestamp.
     */
    getMTime(): number;
    
    /**
     * Gets the owner of the file
     * 
     * Gets the file owner. The owner ID is returned in numerical format.
     * @return The owner id in numerical format.
     */
    getOwner(): number;
    
    /**
     * Gets the path without filename
     * 
     * Returns the path to the file, omitting the filename and any trailing slash.
     * @return Returns the path to the file.
     */
    getPath(): string;
    
    /**
     * Gets an SplFileInfo object for the path
     * 
     * Gets an SplFileInfo object for the parent of the current file.
     *
     * @param class_name Name of an SplFileInfo derived class to use.
     * @return Returns an SplFileInfo object for the parent path of the file.
     */
    getPathInfo(class_name?: string): SplFileInfo;
    
    /**
     * Gets the path to the file
     * 
     * Returns the path to the file.
     * @return The path to the file.
     */
    getPathname(): string;
    
    /**
     * Gets file permissions
     * 
     * Gets the file permissions for the file.
     * @return Returns the file permissions.
     */
    getPerms(): number;
    
    /**
     * Gets absolute path to file
     * 
     * This method expands all symbolic links, resolves relative references and returns
     * the real path to the file.
     * @return Returns the path to the file.
     */
    getRealPath(): string;
    
    /**
     * Gets file size
     * 
     * Returns the filesize in bytes for the file referenced.
     * @return The filesize in bytes.
     */
    getSize(): number;
    
    /**
     * Gets file type
     * 
     * Returns the type of the file referenced.
     * @return A string representing the type of the entry. May be one of file, link,
     *         or dir
     */
    getType(): string;
    
    /**
     * Tells if the file is a directory
     * 
     * This method can be used to determine if the file is a directory.
     * @return Returns true if a directory, false otherwise.
     */
    isDir(): bool;
    
    /**
     * Tells if the file is executable
     * 
     * Checks if the file is executable.
     * @return Returns true if executable, false otherwise.
     */
    isExecutable(): bool;
    
    /**
     * Tells if the object references a regular file
     * 
     * Checks if the file referenced by this SplFileInfo object exists and is a regular
     * file.
     * @return Returns true if the file exists and is a regular file (not a link),
     *         false otherwise.
     */
    isFile(): bool;
    
    /**
     * Tells if the file is a link
     * 
     * Use this method to check if the file referenced by the SplFileInfo object is a
     * link.
     * @return Returns true if the file is a link, false otherwise.
     */
    isLink(): bool;
    
    /**
     * Tells if file is readable
     * 
     * Check if the file is readable.
     * @return Returns true if readable, false otherwise.
     */
    isReadable(): bool;
    
    /**
     * Tells if the entry is writable
     * 
     * Checks if the current entry is writable.
     * @return Returns true if writable, false otherwise;
     */
    isWritable(): bool;
    
    /**
     * Gets an SplFileObject object for the file
     * 
     * Creates an SplFileObject object of the file. This is useful because
     * SplFileObject contains additional methods for manipulating the file whereas
     * SplFileInfo is only useful for gaining information, like whether the file is
     * writable.
     *
     * @param open_mode The mode for opening the file. See the fopen documentation for
     *                  descriptions of possible modes. The default is read only.
     * @param use_include_path 
     * @param context 
     * @return The opened file as an SplFileObject object.
     */
    openFile(open_mode?: string, use_include_path?: bool, context?: Pct.PhpResource): SplFileObject;
    
    /**
     * Sets the class name used with SplFileInfo::openFile
     * 
     * Set the class name which SplFileInfo will use to open files with when openFile()
     * is called. The class name passed to this method must be derived from
     * SplFileObject.
     *
     * @param class_name The class name to use when openFile() is called.
     */
    setFileClass(class_name?: string);
    
    /**
     * Sets the class used with getFileInfo and getPathInfo
     * 
     * Use this method to set a custom class which will be used when getFileInfo and
     * getPathInfo are called. The class name passed to this method must be derived
     * from SplFileInfo.
     *
     * @param class_name The class name to use.
     */
    setInfoClass(class_name?: string);
}


/**
 * The SplFileObject class offers an object oriented interface for a file.
 */
declare class SplFileObject extends SplFileInfo implements RecursiveIterator, SeekableIterator {
    
    /**
     * Drop newlines at the end of a line.
     */
    static DROP_NEW_LINE: number;
    
    /**
     * Read on rewind/next.
     */
    static READ_AHEAD: number;
    
    /**
     * Read lines as CSV rows.
     */
    static READ_CSV: number;
    
    /**
     * Skips empty lines in the file. This requires the READ_AHEAD flag be enabled, to
     * work as expected.
     */
    static SKIP_EMPTY: number;

    
    /**
     * Construct a new file object.
     * 
     * Construct a new file object.
     *
     * @param filename The file to read.
     * @param open_mode The mode in which to open the file. See fopen for a list of
     *                  allowed modes.
     * @param use_include_path Whether to search in the include_path for filename.
     * @param context A valid context resource created with stream_context_create.
     */
    constructor(filename: string, open_mode?: string, use_include_path?: bool, context?: Pct.PhpResource);
    
    /**
     * Reached end of file
     * 
     * Determine whether the end of file has been reached
     * @return Returns true if file is at EOF, false otherwise.
     */
    eof(): bool;
    
    /**
     * Flushes the output to the file
     * 
     * Forces a write of all buffered output to the file.
     */
    fflush(): bool;
    
    /**
     * Gets character from file
     * 
     * Gets a character from the file.
     * @return Returns a string containing a single character read from the file or
     *         false on EOF.
     */
    fgetc(): string;
    
    /**
     * Gets line from file and parse as CSV fields
     * 
     * Gets a line from the file which is in CSV format and returns an array containing
     * the fields read.
     *
     * @param delimiter The field delimiter (one character only). Defaults as a comma
     *                  or the value set using SplFileObject::setCsvControl.
     * @param enclosure The field enclosure character (one character only). Defaults
     *                  as a double quotation mark or the value set using
     *                  SplFileObject::setCsvControl.
     * @param escape The escape character (one character only). Defaults as a
     *               backslash (\) or the value set using
     *               SplFileObject::setCsvControl.
     * @return Returns an indexed array containing the fields read, or false on error.
     *         
     *         A blank line in a CSV file will be returned as an array comprising a
     *         single  field unless using SplFileObject::SKIP_EMPTY |
     *         SplFileObject::DROP_NEW_LINE, in which case empty lines are skipped.
     */
    fgetcsv(delimiter?: string, enclosure?: string, escape?: string): any[];
    
    /**
     * Gets line from file
     * 
     * Gets a line from the file.
     * @return Returns a string containing the next line from the file, or false on
     *         error.
     */
    fgets(): string;
    
    /**
     * Gets line from file and strip HTML tags
     * 
     * Identical to SplFileObject::fgets, except that SplFileObject::fgetss attempts to
     * strip any HTML and PHP tags from the text it reads.
     *
     * @param allowable_tags Optional parameter to specify tags which should not be
     *                       stripped.
     * @return Returns a string containing the next line of the file with HTML and PHP
     *         code stripped, or false on error.
     */
    fgetss(allowable_tags?: string): string;
    
    /**
     * Portable file locking
     * 
     * Locks or unlocks the file in the same portable way as flock.
     *
     * @param operation operation is one of the following:    LOCK_SH to acquire a
     *                  shared lock (reader).     LOCK_EX to acquire an exclusive lock
     *                  (writer).     LOCK_UN to release a lock (shared or exclusive).
     *                  LOCK_NB to not block while locking (not supported on Windows).
     *                  
     * @param $wouldblock Set to true if the lock would block (EWOULDBLOCK errno
     *                    condition).
     */
    flock(operation: number, $wouldblock?: number): bool;
    
    /**
     * Output all remaining data on a file pointer
     * 
     * Reads to EOF on the given file pointer from the current position and writes the
     * results to the output buffer.
     * 
     * You may need to call SplFileObject::rewind to reset the file pointer to the
     * beginning of the file if you have already written data to the file.
     * @return Returns the number of characters read from handle and passed through to
     *         the output.
     */
    fpassthru(): number;
    
    /**
     * Write a field array as a CSV line
     * 
     * Writes the fields array to the file as a CSV line.
     *
     * @param fields An array of values.
     * @param delimiter The optional delimiter parameter sets the field delimiter (one
     *                  character only).
     * @param enclosure The optional enclosure parameter sets the field enclosure (one
     *                  character only).
     * @return Returns the length of the written string.
     *         
     *         Returns false, and does not write the CSV line to the file, if the
     *         delimiter or enclosure parameter is not a single character.
     */
    fputcsv(fields: any[], delimiter?: string, enclosure?: string): number;
    
    /**
     * Parses input from file according to a format
     * 
     * Reads a line from the file and interprets it according to the specified format,
     * which is described in the documentation for sprintf.
     * 
     * Any whitespace in the format string matches any whitespace in the line from the
     * file. This means that even a tab \t in the format string can match a single
     * space character in the input stream.
     *
     * @param format The specified format as described in the sprintf documentation.
     * @return If only one parameter is passed to this method, the values parsed will
     *         be returned as an array. Otherwise, if optional parameters are passed,
     *         the function will return the number of assigned values. The optional
     *         parameters must be passed by reference.
     */
    fscanf(format?: string): any[]; //NOTE: the assign-variables version does not work currently
    
    /**
     * Seek to a position
     * 
     * Seek to a position in the file measured in bytes from the beginning of the file,
     * obtained by adding offset to the position specified by whence.
     *
     * @param offset The offset. A negative value can be used to move backwards
     *               through the file which is useful when SEEK_END is used as the
     *               whence value.
     * @param whence whence values are:  SEEK_SET - Set position equal to offset
     *               bytes. SEEK_CUR - Set position to current location plus offset.
     *               SEEK_END - Set position to end-of-file plus offset.
     *               
     *               If whence is not specified, it is assumed to be SEEK_SET.
     * @return Returns 0 if the seek was successful, -1 otherwise. Note that seeking
     *         past EOF is not considered an error.
     */
    fseek(offset: number, whence?: number): number;
    
    /**
     * Gets information about the file
     * 
     * Gathers the statistics of the file. Behaves identically to fstat.
     * @return Returns an array with the statistics of the file; the format of the
     *         array is described in detail on the stat manual page.
     */
    fstat(): Pct.PhpAssocArray;
    
    /**
     * Return current file position
     * 
     * Returns the position of the file pointer which represents the current offset in
     * the file stream.
     * @return Returns the position of the file pointer as an integer, or false on
     *         error.
     */
    ftell(): number;
    
    /**
     * Truncates the file to a given length
     * 
     * Truncates the file to size bytes.
     *
     * @param size The size to truncate to.
     *             
     *             If size is larger than the file it is extended with null bytes.
     *             
     *             If size is smaller than the file, the extra data will be lost.
     */
    ftruncate(size: number): bool;
    
    /**
     * Write to file
     * 
     * Writes the contents of string to the file
     *
     * @param str The string to be written to the file.
     * @param length If the length argument is given, writing will stop after length
     *               bytes have been written or the end of string is reached,
     *               whichever comes first.
     * @return Returns the number of bytes written, or  on error.
     */
    fwrite(str: string, length?: number): number;
    
    /**
     * Get the delimiter and enclosure character for CSV
     * 
     * Gets the delimiter and enclosure character used for parsing CSV fields.
     * @return Returns an indexed array containing the delimiter and enclosure
     *         character.
     */
    getCsvControl(): string[];
    
    /**
     * Gets flags for the SplFileObject
     * 
     * Gets the flags set for an instance of SplFileObject as an integer.
     * @return Returns an integer representing the flags.
     */
    getFlags(): number;
    
    /**
     * Get maximum line length
     * 
     * Gets the maximum line length as set by SplFileObject::setMaxLineLen.
     * @return Returns the maximum line length if one has been set with
     *         SplFileObject::setMaxLineLen, default is 0.
     */
    getMaxLineLen(): number;
    
    /**
     * Set the delimiter and enclosure character for CSV
     * 
     * Sets the delimiter and enclosure character for parsing CSV fields.
     *
     * @param delimiter The field delimiter (one character only).
     * @param enclosure The field enclosure character (one character only).
     * @param escape The field escape character (one character only).
     */
    setCsvControl(delimiter?: string, enclosure?: string, escape?: string);
    
    /**
     * Sets flags for the SplFileObject
     * 
     * Sets the flags to be used by the SplFileObject.
     *
     * @param flags Bit mask of the flags to set. See SplFileObject constants for the
     *              available flags.
     */
    setFlags(flags: number);
    
    /**
     * Set maximum line length
     * 
     * Sets the maximum length of a line to be read.
     *
     * @param max_len The maximum length of a line.
     */
    setMaxLineLen(max_len: number);

    
    /**
     * Retrieve current line of file
     * 
     * Retrieves the current line of the file.
     * @return Retrieves the current line of the file. If the SplFileObject::READ_CSV
     *         flag is set, this method returns an array containing the current line
     *         parsed as CSV data.
     */
    current(): any;
    
    /**
     * Get line number
     * 
     * Gets the current line number.
     * 
     * This number may not reflect the actual line number in the file if
     * SplFileObject::setMaxLineLen is used to read fixed lengths of the file.
     * @return Returns the current line number.
     */
    key(): any;
    
    /**
     * Read next line
     * 
     * Moves ahead to the next line in the file.
     */
    next();
    
    /**
     * Rewind the file to the first line
     * 
     * Rewinds the file back to the first line.
     */
    rewind();
    
    /**
     * Not at EOF
     * 
     * Check whether EOF has been reached.
     * @return Returns true if not reached EOF, false otherwise.
     */
    valid(): bool;
    
    /**
     * No purpose
     * 
     * An SplFileObject does not have children so this method returns .
     */
    getChildren(): RecursiveIterator;
    
    /**
     * SplFileObject does not have children
     * 
     * An SplFileObject does not have children so this method always return false.
     * @return Returns false
     */
    hasChildren(): bool;
    
    /**
     * Seek to specified line
     * 
     * Seek to specified line in the file.
     *
     * @param position
     */
    seek(position: number);
}


/**
 * The SplTempFileObject class offers an object oriented interface for a temporary
 * file.
 */
declare class SplTempFileObject extends SplFileObject {
    
    /**
     * Construct a new temporary file object
     * 
     * Construct a new temporary file object.
     *
     * @param max_memory The maximum amount of memory (in bytes, default is 2 MB) for
     *                   the temporary file to use. If the temporary file exceeds this
     *                   size, it will be moved to a file in the system's temp
     *                   directory.
     *                   
     *                   If max_memory is negative, only memory will be used. If
     *                   max_memory is zero, no memory will be used.
     */
    constructor(max_memory?: number);
}


/**
 * The DirectoryIterator class provides a simple interface for viewing the contents
 * of filesystem directories.
 */
declare class DirectoryIterator extends SplFileInfo implements SeekableIterator {
    
    /**
     * Determine if current DirectoryIterator item is '.' or '..'
     * 
     * Determines if the current DirectoryIterator item is a directory and either . or
     * ...
     * @return true if the entry is . or .., otherwise false
     */
    isDot(): bool;

    
    /**
     * Return the current DirectoryIterator item.
     * 
     * Get the current DirectoryIterator item.
     * @return The current DirectoryIterator item.
     */
    current(): any;
    
    /**
     * Return the key for the current DirectoryIterator item
     * 
     * Get the key for the current DirectoryIterator item.
     * @return The key for the current DirectoryIterator item.
     */
    key(): any;
    
    /**
     * Move forward to next DirectoryIterator item
     * 
     * Move forward to the next DirectoryIterator item.
     */
    next();
    
    /**
     * Rewind the DirectoryIterator back to the start
     * 
     * Rewind the DirectoryIterator back to the start.
     */
    rewind();
    
    /**
     * Check whether current DirectoryIterator position is a valid file
     * 
     * Check whether current DirectoryIterator position is a valid file.
     * @return Returns true if the position is valid, otherwise false
     */
    valid(): bool;
    
    /**
     * Seek to a DirectoryIterator item
     * 
     * Seek to a given position in the DirectoryIterator.
     *
     * @param position The zero-based numeric position to seek to.
     */
    seek(position: number);
}


/**
 * The Filesystem iterator
 */
declare class FilesystemIterator extends DirectoryIterator {
    
    /**
     * Makes FilesystemIterator::current return an SplFileInfo instance.
     */
    static CURRENT_AS_FILEINFO: number;
    
    /**
     * Makes FilesystemIterator::current return the pathname.
     */
    static CURRENT_AS_PATHNAME: number;
    
    /**
     * Makes FilesystemIterator::current return $this (the FilesystemIterator).
     */
    static CURRENT_AS_SELF: number;
    
    /**
     * Masks FilesystemIterator::current
     */
    static CURRENT_MODE_MASK: number;
    
    /**
     * Makes RecursiveDirectoryIterator::hasChildren follow symlinks.
     */
    static FOLLOW_SYMLINKS: number;
    
    /**
     * Makes FilesystemIterator::key return the filename.
     */
    static KEY_AS_FILENAME: number;
    
    /**
     * Makes FilesystemIterator::key return the pathname.
     */
    static KEY_AS_PATHNAME: number;
    
    /**
     * Masks FilesystemIterator::key
     */
    static KEY_MODE_MASK: number;
    
    /**
     * Same as FilesystemIterator::KEY_AS_FILENAME |
     * FilesystemIterator::CURRENT_AS_FILEINFO.
     */
    static NEW_CURRENT_AND_KEY: number;
    
    /**
     * Skips dot files (. and ..).
     */
    static SKIP_DOTS: number;
    
    /**
     * Makes paths use Unix-style forward slash irrespective of system default.
     */
    static UNIX_PATHS: number;

    
    /**
     * Constructs a new filesystem iterator
     * 
     * Constructs a new filesystem iterator from the path.
     *
     * @param path The path of the filesystem item to be iterated over.
     * @param flags Flags may be provided which will affect the behavior of some
     *              methods. A list of the flags can found under FilesystemIterator
     *              predefined constants. They can also be set later with
     *              FilesystemIterator::setFlags
     */
    constructor(path: string, flags?: number);
}


/**
 * Iterates through a file system in a similar fashion to glob.
 */
declare class GlobIterator extends FilesystemIterator implements Countable {
    
    /**
     * Get the number of directories and files
     * 
     * Gets the number of directories and files found by the glob expression.
     * @return The number of returned directories and files, as an integer.
     */
    count(): number;
}


/**
 * The RecursiveDirectoryIterator provides an interface for iterating recursively
 * over filesystem directories.
 */
declare class RecursiveDirectoryIterator extends FilesystemIterator implements RecursiveIterator {
    
    /**
     * Get sub path
     * 
     * Gets the sub path.
     * @return The sub path (sub directory).
     */
    getSubPath(): string;
    
    /**
     * Get sub path and name
     * 
     * Gets the sub path and filename.
     * @return The sub path (sub directory) and filename.
     */
    getSubPathname(): string;

    
    /**
     * Returns an iterator for the current entry if it is a directory
     * @return The filename, file information, or $this depending on the set flags.
     *         See the FilesystemIterator constants.
     */
    getChildren(): RecursiveIterator;
    
    /**
     * Returns whether current entry is a directory and not '.' or '..'
     *
     * @param allow_links 
     * @return Returns whether the current entry is a directory, but not '.' or '..'
     */
    hasChildren(allow_links?: bool): bool;
}


/**
 * This class allows objects to work as arrays.
 */
declare class ArrayObject implements IteratorAggregate, ArrayAccess, Serializable, Countable {
    
    /**
     * Entries can be accessed as properties (read and write).
     */
    static ARRAY_AS_PROPS: number;
    
    /**
     * Properties of the object have their normal functionality when accessed as list
     * (var_dump, foreach, etc.).
     */
    static STD_PROP_LIST: number;

    
    /**
     * Construct a new array object
     * 
     * This constructs a new array object.
     *
     * @param input
     * @param flags
     * @param iterator_class
     */
    constructor(input?: any, flags?: number, iterator_class?: string);
    
    /**
     * Appends the value
     * 
     * Appends a new value as the last element.
     * 
     * This method cannot be called when the ArrayObject was constructed from an
     * object. Use ArrayObject::offsetSet instead.
     *
     * @param value The value being appended.
     */
    append(value: any);
    
    /**
     * Sort the entries by value
     * 
     * Sorts the entries such that the keys maintain their correlation with the entries
     * they are associated with. This is used mainly when sorting associative arrays
     * where the actual element order is significant.
     */
    asort();
    
    /**
     * Exchange the array for another one.
     * 
     * Exchange the current array with another array or object.
     *
     * @param input The new array or object to exchange with the current array.
     * @return Returns the old array.
     */
    exchangeArray(input?: any): Array;
    
    /**
     * Creates a copy of the ArrayObject.
     * 
     * Exports the ArrayObject to an array.
     * @return Returns a copy of the array. When the ArrayObject refers to an object
     *         an array of the public properties of that object will be returned.
     */
    getArrayCopy(): Array;
    
    /**
     * Gets the behavior flags.
     * 
     * Gets the behavior flags of the ArrayObject. See the ArrayObject::setFlags method
     * for a list of the available flags.
     * @return Returns the behavior flags of the ArrayObject.
     */
    getFlags(): number;
    
    /**
     * Gets the iterator classname for the ArrayObject.
     * 
     * Gets the class name of the array iterator that is used by
     * ArrayObject::getIterator().
     * @return Returns the iterator class name that is used to iterate over this
     *         object.
     */
    getIteratorClass(): string;
    
    /**
     * Sort the entries by key
     * 
     * Sorts the entries by key, maintaining key to entry correlations. This is useful
     * mainly for associative arrays.
     */
    ksort();
    
    /**
     * Sort an array using a case insensitive "natural order" algorithm
     * 
     * This method is a case insensitive version of ArrayObject::natsort.
     * 
     * This method implements a sort algorithm that orders alphanumeric strings in the
     * way a human being would while maintaining key/value associations.  This is
     * described as a "natural ordering".
     */
    natcasesort();
    
    /**
     * Sort entries using a "natural order" algorithm
     * 
     * This method implements a sort algorithm that orders alphanumeric strings in the
     * way a human being would while maintaining key/value associations. This is
     * described as a "natural ordering".  An example of the difference between this
     * algorithm and the regular computer string sorting algorithms (used in
     * ArrayObject::asort) method can be seen in the example below.
     */
    natsort();
    
    /**
     * Sets the behavior flags.
     * 
     * Set the flags that change the behavior of the ArrayObject.
     *
     * @param flags The new ArrayObject behavior. It takes on either a bitmask, or
     *              named constants. Using named constants is strongly encouraged to
     *              ensure compatibility for future versions.
     *              
     *              The available behavior flags are listed below. The actual meanings
     *              of these flags are described in the predefined constants. 
     *              ArrayObject behavior flags    value constant     1 
     *              ArrayObject::STD_PROP_LIST    2  ArrayObject::ARRAY_AS_PROPS
     */
    setFlags(flags: number);
    
    /**
     * Sets the iterator classname for the ArrayObject.
     * 
     * Sets the classname of the array iterator that is used by
     * ArrayObject::getIterator().
     *
     * @param iterator_class The classname of the array iterator to use when iterating
     *                       over this object.
     */
    setIteratorClass(iterator_class: string);
    
    /**
     * Sort the entries with a user-defined comparison function and maintain key
     * association
     * 
     * This function sorts the entries such that keys maintain their correlation with
     * the entry that they are associated with, using a user-defined comparison
     * function.
     * 
     * This is used mainly when sorting associative arrays where the actual element
     * order is significant.
     *
     * @param cmp_function Function cmp_function should accept two parameters which
     *                     will be filled by pairs of entries. The comparison function
     *                     must return an integer less than, equal to, or greater than
     *                     zero if the first argument is considered to be respectively
     *                     less than, equal to, or greater than the second.
     */
    uasort(cmp_function: (a: any, b: any) => number);
    
    /**
     * Sort the entries by keys using a user-defined comparison function
     * 
     * This function sorts the keys of the entries using a user-supplied comparison
     * function. The key to entry correlations will be maintained.
     *
     * @param cmp_function The callback comparison function.
     *                     
     *                     Function cmp_function should accept two parameters which
     *                     will be filled by pairs of entry keys. The comparison
     *                     function must return an integer less than, equal to, or
     *                     greater than zero if the first argument is considered to be
     *                     respectively less than, equal to, or greater than the
     *                     second.
     */
    uksort(cmp_function: (a: any, b: any) => number);

    
    /**
     * Create a new iterator from an ArrayObject instance
     * 
     * Create a new iterator from an ArrayObject instance.
     * @return An iterator from an ArrayObject.
     */
    getIterator(): ArrayIterator;
    
    /**
     * Returns whether the requested index exists
     *
     * @param offset
     * @return true if the requested index exists, otherwise false
     */
    offsetExists(offset: any): bool;
    
    /**
     * Returns the value at the specified index
     *
     * @param offset
     * @return The value at the specified index or .
     */
    offsetGet(offset: any): any;
    
    /**
     * Sets the value at the specified index to newval
     * 
     * Sets the value at the specified index to newval.
     *
     * @param offset
     * @param value
     */
    offsetSet(offset: any, value: any);
    
    /**
     * Unsets the value at the specified index
     * 
     * Unsets the value at the specified index.
     *
     * @param offset
     */
    offsetUnset(offset: any);
    
    /**
     * Serialize an ArrayObject
     * 
     * Serializes an ArrayObject.
     * @return The serialized representation of the ArrayObject.
     */
    serialize(): string;
    
    /**
     * Unserialize an ArrayObject
     * 
     * Unserializes a serialized ArrayObject.
     *
     * @param serialized The serialized ArrayObject.
     * @return The unserialized ArrayObject.
     */
    unserialize(serialized: string);
    
    /**
     * Get the number of public properties in the ArrayObject
     * 
     * Get the number of public properties in the ArrayObject.
     * @return The number of public properties in the ArrayObject.
     *         
     *         When the ArrayObject is constructed from an array all properties are
     *         public.
     */
    count(): number;
}


/**
 * Return the interfaces which are implemented by the given class
 * 
 * This function returns an array with the names of the interfaces that the given
 * class and its parents implement.
 *
 * @param class_ An object (class instance) or a string (class name).
 * @param autoload Whether to allow this function to load the class automatically
 *                 through the __autoload magic method.
 * @return An array on success, or false on error.
 */
declare function class_implements(class_: any, autoload?: bool): Pct.PhpAssocArray;

/**
 * Return the parent classes of the given class
 * 
 * This function returns an array with the name of the parent classes of the given
 * class.
 *
 * @param class_ An object (class instance) or a string (class name).
 * @param autoload Whether to allow this function to load the class automatically
 *                 through the __autoload magic method.
 * @return An array on success, or false on error.
 */
declare function class_parents(class_: any, autoload?: bool): Pct.PhpAssocArray;

/**
 * Return the traits used by the given class
 * 
 * This function returns an array with the names of the traits that the given class
 * uses. This does however not include any traits used by a parent class.
 *
 * @param class_ An object (class instance) or a string (class name).
 * @param autoload Whether to allow this function to load the class automatically
 *                 through the __autoload magic method.
 * @return An array on success, or false on error.
 */
declare function class_uses(class_: any, autoload?: bool): Pct.PhpAssocArray;

/**
 * Call a function for every element in an iterator
 * 
 * Calls a function for every element in an iterator.
 *
 * @param iterator The class to iterate over.
 * @param function_ The callback function to call on every element.   The function
 *                  must return true in order to continue iterating over the
 *                  iterator.
 * @param args Arguments to pass to the callback function.
 * @return Returns the iteration count.
 */
declare function iterator_apply(iterator: Traversable, function_: (iterator: Traversable) => any, args?: any[]): number;

/**
 * Count the elements in an iterator
 * 
 * Count the elements in an iterator.
 *
 * @param iterator The iterator being counted.
 * @return The number of elements in iterator.
 */
declare function iterator_count(iterator: Traversable): number;

/**
 * Copy the iterator into an array
 * 
 * Copy the elements of an iterator into an array.
 *
 * @param iterator The iterator being copied.
 * @return An array containing the elements of the iterator.
 */
declare function iterator_to_array(iterator: Traversable): any[];

/**
 * Copy the iterator into an array
 * 
 * Copy the elements of an iterator into an array.
 *
 * @param iterator The iterator being copied.
 * @param use_keys Whether to use the iterator element keys as index.
 * @return An array containing the elements of the iterator.
 */
declare function iterator_to_array(iterator: Traversable, use_keys: bool): Array;

/**
 * Default implementation for __autoload()
 * 
 * This function is intended to be used as a default implementation for __autoload.
 * If nothing else is specified and spl_autoload_register is called without any
 * parameters then this function will be used for any later call to __autoload.
 *
 * @param class_name The lowercased name of the class (and namespace) being
 *                   instantiated.
 * @param file_extensions By default it checks all include paths to contain
 *                        filenames built up by the lowercase class name appended
 *                        by the filename extensions .inc and .php.
 */
declare function spl_autoload(class_name: string, file_extensions?: string);

/**
 * Try all registered __autoload() function to load the requested class
 * 
 * This function can be used to manually search for a class or interface using the
 * registered __autoload functions.
 *
 * @param class_name The class name being searched.
 */
declare function spl_autoload_call(class_name: string);

/**
 * Register and return default file extensions for spl_autoload
 * 
 * This function can modify and check the file extensions that the built in
 * __autoload fallback function spl_autoload will be using.
 *
 * @param file_extensions When calling without an argument, it simply returns the
 *                        current list of extensions each separated by comma. To
 *                        modify the list of file extensions, simply invoke the
 *                        functions with the new list of file extensions to use in
 *                        a single string with each extensions separated by comma.
 *                        
 * @return A comma delimited list of default file extensions for spl_autoload.
 */
declare function spl_autoload_extensions(file_extensions?: string): string;

/**
 * Return all registered __autoload() functions
 * 
 * Get all registered __autoload() functions.
 * @return An array of all registered __autoload functions. If the autoload stack
 *         is not activated then the return value is false. If no function is
 *         registered the return value will be an empty array.
 */
declare function spl_autoload_functions(): any[];

/**
 * Register given function as __autoload() implementation
 * 
 * Register a function with the spl provided __autoload stack. If the stack is not
 * yet activated it will be activated.
 * 
 * If your code has an existing __autoload function then this function must be
 * explicitly registered on the __autoload stack. This is because
 * spl_autoload_register will effectively replace the engine cache for the
 * __autoload function by either spl_autoload or spl_autoload_call.
 * 
 * If there must be multiple autoload functions, spl_autoload_register allows for
 * this. It effectively creates a queue of autoload functions, and runs through
 * each of them in the order they are defined. By contrast, __autoload may only be
 * defined once.
 *
 * @param autoload_function The autoload function being registered. If no
 *                          parameter is provided, then the default implementation
 *                          of spl_autoload will be registered.
 * @param throw_ This parameter specifies whether spl_autoload_register should
 *               throw exceptions when the autoload_function cannot be registered.
 *               
 * @param prepend If true, spl_autoload_register will prepend the autoloader on
 *                the autoload stack instead of appending it.
 */
declare function spl_autoload_register(autoload_function?: (class_: string) => void, throw_?: bool, prepend?: bool): bool;

/**
 * Unregister given function as __autoload() implementation
 * 
 * Unregister a function from the spl provided __autoload stack. If the stack is
 * activated and empty after unregistering the given function then it will be
 * deactivated.
 * 
 * When this function results in the autoload stack being deactivated, any
 * __autoload function that previously existed will not be reactivated.
 *
 * @param autoload_function The autoload function being unregistered.
 */
declare function spl_autoload_unregister(autoload_function: (class_: string) => void): bool;

/**
 * Return available SPL classes
 * 
 * This function returns an array with the current available SPL classes.
 * @return Returns an array containing the currently available SPL classes.
 */
declare function spl_classes(): Pct.PhpAssocArray;

/**
 * Return hash id for given object
 * 
 * This function returns a unique identifier for the object. This id can be used as
 * a hash key for storing objects or for identifying an object.
 *
 * @param obj 
 * @return A string that is unique for each currently existing object and is
 *         always the same for each object.
 */
declare function spl_object_hash(obj: any): string;

//--------------------------------------------------------------------------------
// stream
//--------------------------------------------------------------------------------

/*
 * A stream is referenced as: scheme://target    scheme(string) - The name of the
 * wrapper to be used.  Examples include: file, http, https, ftp, ftps,
 * compress.zlib, compress.bz2, and php.  See  for a list of PHP built-in wrappers.
 * If no wrapper is specified, the function default is used (typically file://).   
 * target - Depends on the wrapper used.  For filesystem related streams this is
 * typically a path and filename of the desired file.  For network related streams
 * this is typically a hostname, often with a path appended.  Again, see  for a
 * description of targets for built-in streams.
 * 
 * Information on using streams within the PHP source code can be found in the
 * Streams API for PHP Extension Authors reference.
 */
declare var PSFS_ERR_FATAL: number;
declare var PSFS_FEED_ME: number;
declare var PSFS_FLAG_FLUSH_CLOSE: number;
declare var PSFS_FLAG_FLUSH_INC: number;
declare var PSFS_FLAG_NORMAL: number;
declare var PSFS_PASS_ON: number;

declare var STREAM_CAST_AS_STREAM: number;
declare var STREAM_CAST_FOR_SELECT: number;

declare var STREAM_CLIENT_ASYNC_CONNECT: number;
declare var STREAM_CLIENT_CONNECT: number;
declare var STREAM_CLIENT_PERSISTENT: number;

declare var STREAM_FILTER_ALL: number;
declare var STREAM_FILTER_READ: number;
declare var STREAM_FILTER_WRITE: number;

declare var STREAM_IPPROTO_ICMP: number;
declare var STREAM_IPPROTO_IP: number;
declare var STREAM_IPPROTO_RAW: number;
declare var STREAM_IPPROTO_TCP: number;
declare var STREAM_IPPROTO_UDP: number;

declare var STREAM_META_ACCESS: number;
declare var STREAM_META_GROUP: number;
declare var STREAM_META_GROUP_NAME: number;
declare var STREAM_META_OWNER: number;
declare var STREAM_META_OWNER_NAME: number;
declare var STREAM_META_TOUCH: number;

declare var STREAM_NOTIFY_AUTH_REQUIRED: number;
declare var STREAM_NOTIFY_AUTH_RESULT: number;
declare var STREAM_NOTIFY_COMPLETED: number;
declare var STREAM_NOTIFY_CONNECT: number;
declare var STREAM_NOTIFY_FAILURE: number;
declare var STREAM_NOTIFY_FILE_SIZE_IS: number;
declare var STREAM_NOTIFY_MIME_TYPE_IS: number;
declare var STREAM_NOTIFY_PROGRESS: number;
declare var STREAM_NOTIFY_REDIRECTED: number;
declare var STREAM_NOTIFY_RESOLVE: number;
declare var STREAM_NOTIFY_SEVERITY_ERR: number;
declare var STREAM_NOTIFY_SEVERITY_INFO: number;
declare var STREAM_NOTIFY_SEVERITY_WARN: number;

declare var STREAM_PF_INET6: number;
declare var STREAM_PF_INET: number;
declare var STREAM_PF_UNIX: number;

declare var STREAM_REPORT_ERRORS: number;

declare var STREAM_SERVER_BIND: number;
declare var STREAM_SERVER_LISTEN: number;

declare var STREAM_SHUT_RD: number;
declare var STREAM_SHUT_RDWR: number;
declare var STREAM_SHUT_WR: number;

declare var STREAM_SOCK_DGRAM: number;
declare var STREAM_SOCK_RAW: number;
declare var STREAM_SOCK_RDM: number;
declare var STREAM_SOCK_SEQPACKET: number;
declare var STREAM_SOCK_STREAM: number;

declare var STREAM_USE_PATH: number;


/**
 * Children of this class are passed to stream_filter_register.
 */
declare class php_user_filter {
    
    /**
     * Name of the filter registered by stream_filter_append.
     */
    filtername: string;
    params: any; //TODO: wat?

    filter(in_: Pct.PhpResource, out: Pct.PhpResource, $consumed: number, closing: bool): number;
    onClose();
    onCreate(): bool;
}

//TODO: streamWrapper an interface or class?


/**
 * Append bucket to brigade
 *
 * @param brigade 
 * @param bucket 
 */
declare function stream_bucket_append(brigade: Pct.PhpResource, bucket: Pct.PhpResource);
declare function stream_bucket_make_writable(brigade: Pct.PhpResource);

/**
 * Create a new bucket for use on the current stream
 *
 * @param stream 
 * @param buffer 
 */
declare function stream_bucket_new(stream: Pct.PhpResource, buffer: string): any;

/**
 * Prepend bucket to brigade
 * 
 * This function can be called to prepend a bucket to a bucket brigade. It is
 * typically called from php_user_filter::filter.
 *
 * @param brigade brigade is a resource pointing to a bucket brigade which
 *                contains one or more bucket objects.
 * @param bucket A bucket object.
 */
declare function stream_bucket_prepend(brigade: Pct.PhpResource, bucket: Pct.PhpResource);

/**
 * Creates a stream context
 * 
 * Creates and returns a stream context with any options supplied in options
 * preset.
 *
 * @param options Must be an associative array of associative arrays in the format
 *                $arr['wrapper']['option'] = $value.
 *                
 *                Default to an empty array.
 * @param params Must be an associative array in the format $arr['parameter'] =
 *               $value. Refer to context parameters for a listing of standard
 *               stream parameters.
 * @return A stream context resource.
 */
declare function stream_context_create(options?: Pct.PhpAssocArray, params?: Pct.PhpAssocArray): Pct.PhpResource;

/**
 * Retrieve the default stream context
 *
 * @param options As of PHP 5.3.0, the stream_context_set_default function can be
 *                used to set the default context.
 * @return A stream context resource.
 */
declare function stream_context_get_default(options?: Pct.PhpAssocArray): Pct.PhpResource;

/**
 * Retrieve options for a stream/wrapper/context
 *
 * @param stream_or_context The stream or context to get options from
 * @return Returns an associative array with the options.
 */
declare function stream_context_get_options(stream_or_context: Pct.PhpResource): Pct.PhpAssocArray;

/**
 * Retrieves parameters from a context
 * 
 * Retrieves parameter and options information from the stream or context.
 *
 * @param stream_or_context A stream resource or a context resource
 * @return Returns an associate array containing all context options and
 *         parameters.
 */
declare function stream_context_get_params(stream_or_context: Pct.PhpResource): Pct.PhpAssocArray;

/**
 * Set the default stream context
 *
 * @param options The options to set for the default context.
 *                
 *                options must be an associative array of associative arrays in
 *                the format $arr['wrapper']['option'] = $value.
 * @return Returns the default stream context.
 */
declare function stream_context_set_default(options: Pct.PhpAssocArray): Pct.PhpResource;

/**
 * Sets an option for a stream/wrapper/context
 *
 * @param stream_or_context The stream or context resource to apply the options
 *                          too.
 * @param wrapper 
 * @param option 
 * @param value 
 */
declare function stream_context_set_option(stream_or_context: Pct.PhpResource, wrapper: string, option: string, value: any): bool;

/**
 * Sets an option for a stream/wrapper/context
 *
 * @param stream_or_context The stream or context resource to apply the options
 *                          too.
 * @param options The options to set for the default context.
 *                
 *                options must be an associative array of associative arrays in
 *                the format $arr['wrapper']['option'] = $value.
 *                
 *                Refer to context options and parameters for a listing of stream
 *                options.
 */
declare function stream_context_set_option(stream_or_context: Pct.PhpResource, options: Pct.PhpAssocArray): bool;

/**
 * Set parameters for a stream/wrapper/context
 * 
 * Sets parameters on the specified context.
 *
 * @param stream_or_context The stream or context to apply the parameters too.
 * @param params An array of parameters to set.
 *               
 *               params should be an associative array of the structure:
 *               $params['paramname'] = "paramvalue";.
 */
declare function stream_context_set_params(stream_or_context: Pct.PhpResource, params: Pct.PhpAssocArray): bool;

/**
 * Copies data from one stream to another
 * 
 * Makes a copy of up to maxlength bytes of data from the current position (or from
 * the offset position, if specified) in source to dest. If maxlength is not
 * specified, all remaining content in source will be copied.
 *
 * @param source The source stream
 * @param dest The destination stream
 * @param maxlength Maximum bytes to copy
 * @param offset The offset where to start to copy data
 * @return Returns the total count of bytes copied.
 */
declare function stream_copy_to_stream(source: Pct.PhpResource, dest: Pct.PhpResource, maxlength?: number, offset?: number): number;

/**
 * Set character set for stream encoding
 *
 * @param stream 
 * @param encoding 
 */
declare function stream_encoding(stream: Pct.PhpResource, encoding?: string): bool;

/**
 * Attach a filter to a stream
 * 
 * Adds filtername to the list of filters attached to stream.
 *
 * @param stream The target stream.
 * @param filtername The filter name.
 * @param read_write By default, stream_filter_append will attach the filter to
 *                   the read filter chain if the file was opened for reading
 *                   (i.e. File Mode: r, and/or +).  The filter will also be
 *                   attached to the write filter chain if the file was opened for
 *                   writing (i.e. File Mode: w, a, and/or +). STREAM_FILTER_READ,
 *                   STREAM_FILTER_WRITE, and/or STREAM_FILTER_ALL can also be
 *                   passed to the read_write parameter to override this behavior.
 *                   
 * @param params This filter will be added with the specified params to the end of
 *               the list and will therefore be called last during stream
 *               operations. To add a filter to the beginning of the list, use
 *               stream_filter_prepend.
 * @return Returns a resource which can be used to refer to this filter instance
 *         during a call to stream_filter_remove.
 */
declare function stream_filter_append(stream: Pct.PhpResource, filtername: string, read_write?: number, params?: Pct.PhpAssocArray): Pct.PhpResource;

/**
 * Attach a filter to a stream
 * 
 * Adds filtername to the list of filters attached to stream.
 *
 * @param stream The target stream.
 * @param filtername The filter name.
 * @param read_write By default, stream_filter_prepend will attach the filter to
 *                   the read filter chain if the file was opened for reading
 *                   (i.e. File Mode: r, and/or +).  The filter will also be
 *                   attached to the write filter chain if the file was opened for
 *                   writing (i.e. File Mode: w, a, and/or +). STREAM_FILTER_READ,
 *                   STREAM_FILTER_WRITE, and/or STREAM_FILTER_ALL can also be
 *                   passed to the read_write parameter to override this behavior.
 *                   See stream_filter_append for an example of using this
 *                   parameter.
 * @param params This filter will be added with the specified params to the
 *               beginning of the list and will therefore be called first during
 *               stream operations.  To add a filter to the end of the list, use
 *               stream_filter_append.
 * @return Returns a resource which can be used to refer to this filter instance
 *         during a call to stream_filter_remove.
 */
declare function stream_filter_prepend(stream: Pct.PhpResource, filtername: string, read_write?: number, params?: Pct.PhpAssocArray): Pct.PhpResource;

/**
 * Register a user defined stream filter
 * 
 * stream_filter_register allows you to implement your own filter on any registered
 * stream used with all the other filesystem functions (such as fopen, fread etc.).
 * 
 *
 * @param filtername The filter name to be registered.
 * @param classname To implement a filter, you need to define a class as an
 *                  extension of php_user_filter with a number of member
 *                  functions. When performing read/write operations on the stream
 *                  to which your filter is attached, PHP will pass the data
 *                  through your filter (and any other filters attached to that
 *                  stream) so that the data may be modified as desired. You must
 *                  implement the methods exactly as described in php_user_filter
 *                  - doing otherwise will lead to undefined behaviour.
 * @return stream_filter_register will return false if the filtername is already
 *         defined.
 */
declare function stream_filter_register(filtername: string, classname: string): bool;

/**
 * Remove a filter from a stream
 * 
 * Removes a stream filter previously added to a stream with stream_filter_prepend
 * or stream_filter_append.  Any data remaining in the filter's internal buffer
 * will be flushed through to the next filter before removing it.
 *
 * @param stream_filter The stream filter to be removed.
 */
declare function stream_filter_remove(stream_filter: Pct.PhpResource): bool;

/**
 * Reads remainder of a stream into a string
 * 
 * Identical to file_get_contents, except that stream_get_contents operates on an
 * already open stream resource and returns the remaining contents in a string, up
 * to maxlength bytes and starting at the specified offset.
 *
 * @param handle A stream resource (e.g. returned from fopen)
 * @param maxlength The maximum bytes to read. Defaults to -1 (read all the
 *                  remaining buffer).
 * @param offset Seek to the specified offset before reading. If this number is
 *               negative, no seeking will occur and reading will start from the
 *               current position.
 * @return Returns a string.
 */
declare function stream_get_contents(handle: Pct.PhpResource, maxlength?: number, offset?: number): string;

/**
 * Retrieve list of registered filters
 * @return Returns an indexed array containing the name of all stream filters
 *         available.
 */
declare function stream_get_filters(): string[];

/**
 * Gets line from stream resource up to a given delimiter
 * 
 * Gets a line from the given handle.
 * 
 * Reading ends when length bytes have been read, when the string specified by
 * ending is found (which is not included in the return value), or on EOF
 * (whichever comes first).
 * 
 * This function is nearly identical to fgets except in that it allows end of line
 * delimiters other than the standard \n, \r, and \r\n, and does not return the
 * delimiter itself.
 *
 * @param handle A valid file handle.
 * @param length The number of bytes to read from the handle.
 * @param ending An optional string delimiter.
 * @return Returns a string of up to length bytes read from the file pointed to by
 *         handle.
 *         
 *         If an error occurs, returns false.
 */
declare function stream_get_line(handle: Pct.PhpResource, length: number, ending?: string): string;

/**
 * Retrieves header/meta data from streams/file pointers
 * 
 * Returns information about an existing stream.
 *
 * @param stream The stream can be any stream created by fopen, fsockopen and
 *               pfsockopen.
 * @return The result array contains the following items:
 *         
 *         timed_out (bool) - true if the stream timed out while waiting for data
 *         on the last call to fread or fgets.
 *         
 *         blocked (bool) - true if the stream is in blocking IO mode. See
 *         stream_set_blocking.
 *         
 *         eof (bool) - true if the stream has reached end-of-file.  Note that for
 *         socket streams this member can be true even when unread_bytes is
 *         non-zero.  To determine if there is more data to be read, use feof
 *         instead of reading this item.
 *         
 *         unread_bytes (int) - the number of bytes currently contained in the
 *         PHP's own internal buffer.
 *         
 *         stream_type (string) - a label describing the underlying implementation
 *         of the stream.
 *         
 *         wrapper_type (string) - a label describing the protocol wrapper
 *         implementation layered over the stream. See  for more information about
 *         wrappers.
 *         
 *         wrapper_data (mixed) - wrapper specific data attached to this stream. 
 *         See  for more information about wrappers and their wrapper data.
 *         
 *         filters (array) - and array containing the names of any filters that
 *         have been stacked onto this stream. Documentation on filters can be
 *         found in the Filters appendix.
 *         
 *         mode (string) - the type of access required for this stream (see Table
 *         1 of the fopen() reference)
 *         
 *         seekable (bool) - whether the current stream can be seeked.
 *         
 *         uri (string) - the URI/filename associated with this stream.
 */
declare function stream_get_meta_data(stream: Pct.PhpResource): Pct.PhpAssocArray;

/**
 * Retrieve list of registered socket transports
 * @return Returns an indexed array of socket transports names.
 */
declare function stream_get_transports(): string[];

/**
 * Retrieve list of registered streams
 * 
 * Retrieve list of registered streams available on the running system.
 * @return Returns an indexed array containing the name of all stream wrappers
 *         available on the running system.
 */
declare function stream_get_wrappers(): string[];

/**
 * Checks if a stream is a local stream
 * 
 * Checks if a stream, or a URL, is a local one or not.
 *
 * @param url
 */
declare function stream_is_local(url: string): bool;

/**
 * Checks if a stream is a local stream
 * 
 * Checks if a stream, or a URL, is a local one or not.
 *
 * @param stream
 */
declare function stream_is_local(stream: Pct.PhpResource): bool;

/**
 * Resolve filename against the include path
 * 
 * Resolve filename against the include path according to the same rules as
 * fopen/include.
 *
 * @param filename The filename to resolve.
 * @return Returns a string containing the resolved absolute filename, .
 */
declare function stream_resolve_include_path(filename: string): string;

/**
 * Runs the equivalent of the select() system call on the given arrays of streams
 * with a timeout specified by tv_sec and tv_usec
 * 
 * The stream_select function accepts arrays of streams and waits for them to
 * change status. Its operation is equivalent to that of the socket_select function
 * except in that it acts on streams.
 *
 * @param $read The streams listed in the read array will be watched to see if
 *              characters become available for reading (more precisely, to see if
 *              a read will not block - in particular, a stream resource is also
 *              ready on end-of-file, in which case an fread will return a zero
 *              length string).
 * @param $write The streams listed in the write array will be watched to see if a
 *               write will not block.
 * @param $except The streams listed in the except array will be watched for high
 *                priority exceptional ("out-of-band") data arriving.
 *                
 *                When stream_select returns, the arrays read, write and except
 *                are modified to indicate which stream resource(s) actually
 *                changed status.
 * @param tv_sec The tv_sec and tv_usec together form the timeout parameter,
 *               tv_sec specifies the number of seconds while tv_usec the number
 *               of microseconds. The timeout is an upper bound on the amount of
 *               time that stream_select will wait before it returns. If tv_sec
 *               and tv_usec are both set to 0, stream_select will not wait for
 *               data - instead it will return immediately, indicating the current
 *               status of the streams.
 *               
 *               If tv_sec is  stream_select can block indefinitely, returning
 *               only when an event on one of the watched streams occurs (or if a
 *               signal interrupts the system call).
 *               
 *               Using a timeout value of 0 allows you to instantaneously poll the
 *               status of the streams, however, it is NOT a good idea to use a 0
 *               timeout value in a loop as it will cause your script to consume
 *               too much CPU time.
 *               
 *               It is much better to specify a timeout value of a few seconds,
 *               although if you need to be checking and running other code
 *               concurrently, using a timeout value of at least 200000
 *               microseconds will help reduce the CPU usage of your script.
 *               
 *               Remember that the timeout value is the maximum time that will
 *               elapse; stream_select will return as soon as the requested
 *               streams are ready for use.
 * @param tv_usec See tv_sec description.
 * @return On success stream_select returns the number of stream resources
 *         contained in the modified arrays, which may be zero if the timeout
 *         expires before anything interesting happens. On error false is returned
 *         and a warning raised (this can happen if the system call is interrupted
 *         by an incoming signal).
 */
declare function stream_select($read: Pct.PhpResource[], $write: Pct.PhpResource[], $except: Pct.PhpResource[], tv_sec: number, tv_usec?: number): number;

/**
 * Set blocking/non-blocking mode on a stream
 * 
 * Sets blocking or non-blocking mode on a stream.
 * 
 * This function works for any stream that supports non-blocking mode (currently,
 * regular files and socket streams).
 *
 * @param stream The stream.
 * @param mode If mode is 0, the given stream will be switched to non-blocking
 *             mode, and if 1, it will be switched to blocking mode.  This affects
 *             calls like fgets and fread that read from the stream.  In
 *             non-blocking mode an fgets call will always return right away while
 *             in blocking mode it will wait for data to become available on the
 *             stream.
 */
declare function stream_set_blocking(stream: Pct.PhpResource, mode: number): bool;

/**
 * Set the stream chunk size
 * 
 * Set the stream chunk size.
 *
 * @param fp The target stream.
 * @param chunk_size The desired new chunk size.
 * @return Returns the previous chunk size on success.
 *         
 *         Will return false if chunk_size is less than 1 or greater than
 *         PHP_INT_MAX.
 */
declare function stream_set_chunk_size(fp: Pct.PhpResource, chunk_size: number): number;

/**
 * Set read file buffering on the given stream
 * 
 * Sets the read buffer. It's the equivalent of stream_set_write_buffer, but for
 * read operations.
 *
 * @param stream The file pointer.
 * @param buffer The number of bytes to buffer. If buffer is 0 then read
 *               operations are unbuffered.  This ensures that all reads with
 *               fread are completed before other processes are allowed to read
 *               from that input stream.
 * @return Returns 0 on success, or EOF if the request cannot be honored.
 */
declare function stream_set_read_buffer(stream: Pct.PhpResource, buffer: number): number;

/**
 * Set timeout period on a stream
 * 
 * Sets the timeout value on stream, expressed in the sum of seconds and
 * microseconds.
 * 
 * When the stream times out, the 'timed_out' key of the array returned by
 * stream_get_meta_data is set to true, although no error/warning is generated.
 *
 * @param stream The target stream.
 * @param seconds The seconds part of the timeout to be set.
 * @param microseconds The microseconds part of the timeout to be set.
 */
declare function stream_set_timeout(stream: Pct.PhpResource, seconds: number, microseconds?: number): bool;

/**
 * Sets write file buffering on the given stream
 * 
 * Sets the buffering for write operations on the given stream to buffer bytes.
 *
 * @param stream The file pointer.
 * @param buffer The number of bytes to buffer. If buffer is 0 then write
 *               operations are unbuffered.  This ensures that all writes with
 *               fwrite are completed before other processes are allowed to write
 *               to that output stream.
 * @return Returns 0 on success, or EOF if the request cannot be honored.
 */
declare function stream_set_write_buffer(stream: Pct.PhpResource, buffer: number): number;

/**
 * Accept a connection on a socket created by stream_socket_server
 * 
 * Accept a connection on a socket previously created by stream_socket_server.
 *
 * @param server_socket The server socket to accept a connection from.
 * @param timeout Override the default socket accept timeout. Time should be given
 *                in seconds.
 * @param $peername Will be set to the name (address) of the client which
 *                  connected, if included and available from the selected
 *                  transport.
 *                  
 *                  Can also be determined later using stream_socket_get_name.
 * @return Returns a stream to the accepted socket connection.
 */
declare function stream_socket_accept(server_socket: Pct.PhpResource, timeout?: number, $peername?: string): Pct.PhpResource;

/**
 * Open Internet or Unix domain socket connection
 * 
 * Initiates a stream or datagram connection to the destination specified by
 * remote_socket.  The type of socket created is determined by the transport
 * specified using standard URL formatting: transport://target.  For Internet
 * Domain sockets (AF_INET) such as TCP and UDP, the target portion of the
 * remote_socket parameter should consist of a hostname or IP address followed by a
 * colon and a port number.  For Unix domain sockets, the target portion should
 * point to the socket file on the filesystem.
 * 
 * The stream will by default be opened in blocking mode.  You can switch it to
 * non-blocking mode by using stream_set_blocking.
 *
 * @param remote_socket Address to the socket to connect to.
 * @param $errno Will be set to the system level error number if connection fails.
 * @param $errstr Will be set to the system level error message if the connection
 *                fails.
 * @param timeout Number of seconds until the connect() system call should
 *                timeout.   This parameter only applies when not making
 *                asynchronous connection attempts.     To set a timeout for
 *                reading/writing data over the socket, use the
 *                stream_set_timeout, as the timeout only applies while making
 *                connecting the socket.
 *                
 *                To set a timeout for reading/writing data over the socket, use
 *                the stream_set_timeout, as the timeout only applies while making
 *                connecting the socket.
 * @param flags Bitmask field which may be set to any combination of connection
 *              flags. Currently the select of connection flags is limited to
 *              STREAM_CLIENT_CONNECT (default), STREAM_CLIENT_ASYNC_CONNECT and
 *              STREAM_CLIENT_PERSISTENT.
 * @param context A valid context resource created with stream_context_create.
 * @return On success a stream resource is returned which may be used together
 *         with the other file functions (such as fgets, fgetss, fwrite, fclose,
 *         and feof), false on failure.
 */
declare function stream_socket_client(remote_socket: string, $errno?: number, $errstr?: string, timeout?: number, flags?: number, context?: Pct.PhpResource): Pct.PhpResource;

/**
 * Turns encryption on/off on an already connected socket
 *
 * @param stream The stream resource.
 * @param enable Enable/disable cryptography on the stream.
 * @param crypto_type Setup encryption on the stream. Valid methods are 
 *                    STREAM_CRYPTO_METHOD_SSLv2_CLIENT
 *                    STREAM_CRYPTO_METHOD_SSLv3_CLIENT
 *                    STREAM_CRYPTO_METHOD_SSLv23_CLIENT
 *                    STREAM_CRYPTO_METHOD_TLS_CLIENT
 *                    STREAM_CRYPTO_METHOD_SSLv2_SERVER
 *                    STREAM_CRYPTO_METHOD_SSLv3_SERVER
 *                    STREAM_CRYPTO_METHOD_SSLv23_SERVER
 *                    STREAM_CRYPTO_METHOD_TLS_SERVER
 * @param session_stream Seed the stream with settings from session_stream.
 * @return Returns true on success, false if negotiation has failed or 0 if there
 *         isn't enough data and you should try again (only for non-blocking
 *         sockets).
 */
declare function stream_socket_enable_crypto(stream: Pct.PhpResource, enable: bool, crypto_type?: number, session_stream?: Pct.PhpResource): any;

/**
 * Retrieve the name of the local or remote sockets
 * 
 * Returns the local or remote name of a given socket connection.
 *
 * @param handle The socket to get the name of.
 * @param want_peer If set to true the remote socket name will be returned, if set
 *                  to false the local socket name will be returned.
 * @return The name of the socket.
 */
declare function stream_socket_get_name(handle: Pct.PhpResource, want_peer: bool): string;

/**
 * Creates a pair of connected, indistinguishable socket streams
 * 
 * stream_socket_pair creates a pair of connected, indistinguishable socket
 * streams. This function is commonly used in IPC (Inter-Process Communication).
 *
 * @param domain The protocol family to be used: STREAM_PF_INET, STREAM_PF_INET6
 *               or STREAM_PF_UNIX
 * @param type The type of communication to be used: STREAM_SOCK_DGRAM,
 *             STREAM_SOCK_RAW, STREAM_SOCK_RDM, STREAM_SOCK_SEQPACKET or
 *             STREAM_SOCK_STREAM
 * @param protocol The protocol to be used: STREAM_IPPROTO_ICMP,
 *                 STREAM_IPPROTO_IP, STREAM_IPPROTO_RAW, STREAM_IPPROTO_TCP or
 *                 STREAM_IPPROTO_UDP
 * @return Returns an array with the two socket resources on success, or false on
 *         failure.
 */
declare function stream_socket_pair(domain: number, type: number, protocol: number): Pct.PhpResource[];

/**
 * Receives data from a socket, connected or not
 * 
 * stream_socket_recvfrom accepts data from a remote socket up to length bytes.
 *
 * @param socket The remote socket.
 * @param length The number of bytes to receive from the socket.
 * @param flags The value of flags can be any combination of the following: 
 *              Possible values for flags    STREAM_OOB  Process OOB (out-of-band)
 *              data.    STREAM_PEEK  Retrieve data from the socket, but do not
 *              consume the buffer. Subsequent calls to fread or
 *              stream_socket_recvfrom will see the same data.
 * @param $address If address is provided it will be populated with the address of
 *                 the remote socket.
 * @return Returns the read data, as a string
 */
declare function stream_socket_recvfrom(socket: Pct.PhpResource, length: number, flags?: number, $address?: string): string;

/**
 * Sends a message to a socket, whether it is connected or not
 * 
 * Sends the specified data through the socket.
 *
 * @param socket The socket to send data to.
 * @param data The data to be sent.
 * @param flags The value of flags can be any combination of the following: 
 *              possible values for flags    STREAM_OOB  Process OOB (out-of-band)
 *              data.
 * @param address The address specified when the socket stream was created will be
 *                used unless an alternate address is specified in address.
 *                
 *                If specified, it must be in dotted quad (or [ipv6]) format.
 * @return Returns a result code, as an integer.
 */
declare function stream_socket_sendto(socket: Pct.PhpResource, data: string, flags?: number, address?: string): number;

/**
 * Create an Internet or Unix domain server socket
 * 
 * Creates a stream or datagram socket on the specified local_socket.
 * 
 * This function only creates a socket, to begin accepting connections use
 * stream_socket_accept.
 *
 * @param local_socket The type of socket created is determined by the transport
 *                     specified using standard URL formatting:
 *                     transport://target.
 *                     
 *                     For Internet Domain sockets (AF_INET) such as TCP and UDP,
 *                     the target portion of the remote_socket parameter should
 *                     consist of a hostname or IP address followed by a colon and
 *                     a port number.  For Unix domain sockets, the target portion
 *                     should point to the socket file on the filesystem.
 *                     
 *                     Depending on the environment, Unix domain sockets may not
 *                     be available. A list of available transports can be
 *                     retrieved using stream_get_transports. See  for a list of
 *                     bulitin transports.
 * @param $errno If the optional errno and errstr arguments are present they will
 *               be set to indicate the actual system level error that occurred in
 *               the system-level socket(), bind(), and listen() calls. If the
 *               value returned in errno is 0 and the function returned false, it
 *               is an indication that the error occurred before the bind() call.
 *               This is most likely due to a problem initializing the socket.
 *               Note that the errno and errstr arguments will always be passed by
 *               reference.
 * @param $errstr See errno description.
 * @param flags A bitmask field which may be set to any combination of socket
 *              creation flags.
 *              
 *              For UDP sockets, you must use STREAM_SERVER_BIND as the flags
 *              parameter.
 * @param context 
 * @return Returns the created stream, or false on error.
 */
declare function stream_socket_server(local_socket: string, $errno?: number, $errstr?: string, flags?: number, context?: Pct.PhpResource): Pct.PhpResource;

/**
 * Shutdown a full-duplex connection
 * 
 * Shutdowns (partially or not) a full-duplex connection.
 *
 * @param stream An open stream (opened with stream_socket_client, for example)
 * @param how One of the following constants: STREAM_SHUT_RD (disable further
 *            receptions), STREAM_SHUT_WR (disable further transmissions) or
 *            STREAM_SHUT_RDWR (disable further receptions and transmissions).
 */
declare function stream_socket_shutdown(stream: Pct.PhpResource, how: number): bool;

/**
 * Tells whether the stream supports locking.
 * 
 * Tells whether the stream supports locking through flock.
 *
 * @param stream The stream to check.
 */
declare function stream_supports_lock(stream: Pct.PhpResource): bool;

/**
 * Register a URL wrapper implemented as a PHP class
 * 
 * Allows you to implement your own protocol handlers and streams for use with all
 * the other filesystem functions (such as fopen, fread etc.).
 *
 * @param protocol The wrapper name to be registered.
 * @param classname The classname which implements the protocol.
 * @param flags Should be set to STREAM_IS_URL if protocol is a URL protocol.
 *              Default is 0, local stream.
 * @return stream_wrapper_register will return false if the protocol already has a
 *         handler.
 */
declare function stream_wrapper_register(protocol: string, classname: string, flags?: number): bool;

/**
 * Restores a previously unregistered built-in wrapper
 * 
 * Restores a built-in wrapper previously unregistered with
 * stream_wrapper_unregister.
 *
 * @param protocol 
 */
declare function stream_wrapper_restore(protocol: string): bool;

/**
 * Unregister a URL wrapper
 * 
 * Allows you to disable an already defined stream wrapper. Once the wrapper has
 * been disabled you may override it with a user-defined wrapper using
 * stream_wrapper_register or reenable it later on with stream_wrapper_restore.
 *
 * @param protocol 
 */
declare function stream_wrapper_unregister(protocol: string): bool;

//--------------------------------------------------------------------------------
// strings
//--------------------------------------------------------------------------------

/*
 * These functions all manipulate strings in various ways. Some more specialized
 * sections can be found in the regular expression and URL handling sections.
 * 
 * For information on how strings behave, especially with regard to usage of single
 * quotes, double quotes, and escape sequences, see the Strings entry in the Types
 * section of the manual.
 */
declare var HTML_ENTITIES: number;
declare var HTML_SPECIALCHARS: number;

declare var ENT_COMPAT: number;
declare var ENT_QUOTES: number;
declare var ENT_NOQUOTES: number;
declare var ENT_IGNORE: number;
declare var ENT_SUBSTITUTE: number;
declare var ENT_DISALLOWED: number;
declare var ENT_HTML401: number;
declare var ENT_XML1: number;
declare var ENT_XHTML: number;
declare var ENT_HTML5: number;

declare var LC_ALL: number;
declare var LC_COLLATE: number;
declare var LC_CTYPE: number;
declare var LC_MONETARY: number;
declare var LC_NUMERIC: number;
declare var LC_TIME: number;
declare var LC_MESSAGES: number;

declare var STR_PAD_RIGHT: number;
declare var STR_PAD_LEFT: number;
declare var STR_PAD_BOTH: number;


/**
 * Quote string with slashes in a C style
 * 
 * Returns a string with backslashes before characters that are listed in charlist
 * parameter.
 *
 * @param str The string to be escaped.
 * @param charlist A list of characters to be escaped. If charlist contains
 *                 characters \n, \r etc., they are converted in C-like style,
 *                 while other non-alphanumeric characters with ASCII codes lower
 *                 than 32 and higher than 126 converted to octal representation.
 *                 
 *                 When you define a sequence of characters in the charlist
 *                 argument make sure that you know what characters come between
 *                 the characters that you set as the start and end of the range. 
 *                 ]]>   Also, if the first character in a range has a higher
 *                 ASCII value than the second character in the range, no range
 *                 will be constructed.  Only the start, end and period characters
 *                 will be escaped. Use the ord function to find the ASCII value
 *                 for a character.    ]]>
 *                 
 *                 Be careful if you choose to escape characters 0, a, b, f, n, r,
 *                 t and v. They will be converted to \0, \a, \b, \f, \n, \r, \t
 *                 and \v. In PHP \0 (NULL), \r (carriage return), \n (newline),
 *                 \f (form feed), \v (vertical tab) and \t (tab) are predefined
 *                 escape sequences, while in C all of these are predefined escape
 *                 sequences.
 * @return Returns the escaped string.
 */
declare function addcslashes(str: string, charlist: string): string;

/**
 * Quote string with slashes
 * 
 * Returns a string with backslashes before characters that need to be quoted in
 * database queries etc.  These characters are single quote ('), double quote ("),
 * backslash (\) and NUL (the  byte).
 * 
 * An example use of addslashes is when you're entering data into a database.  For
 * example, to insert the name O'reilly into a database, you will need to escape
 * it. It's highly recommended to use DBMS specific escape function (e.g.
 * mysqli_real_escape_string for MySQL or pg_escape_string for PostgreSQL), but if
 * the DBMS you're using doesn't have an escape function and the DBMS uses \ to
 * escape special chars, you can use this function. This would only be to get the
 * data into the database, the extra \ will not be inserted. Having the PHP
 * directive  magic_quotes_sybase set to on will mean ' is instead escaped with
 * another '.
 * 
 * The PHP directive  magic_quotes_gpc was on by default before PHP 5.4, and it
 * essentially ran addslashes on all GET, POST, and COOKIE data.  Do not use
 * addslashes on strings that have already been escaped with magic_quotes_gpc as
 * you'll then do double escaping.  The function get_magic_quotes_gpc may come in
 * handy for checking this.
 *
 * @param str The string to be escaped.
 * @return Returns the escaped string.
 */
declare function addslashes(str: string): string;

/**
 * Convert binary data into hexadecimal representation
 * 
 * Returns an ASCII string containing the hexadecimal representation of str. The
 * conversion is done byte-wise with the high-nibble first.
 *
 * @param str A string.
 * @return Returns the hexadecimal representation of the given string.
 */
declare function bin2hex(str: string): string;

/**
 * Return a specific character
 * 
 * Returns a one-character string containing the character specified by ascii.
 * 
 * This function complements ord.
 *
 * @param ascii The ascii code.
 * @return Returns the specified character.
 */
declare function chr(ascii: number): string;

/**
 * Split a string into smaller chunks
 * 
 * Can be used to split a string into smaller chunks which is useful for e.g.
 * converting base64_encode output to match RFC 2045 semantics. It inserts end
 * every chunklen characters.
 *
 * @param body The string to be chunked.
 * @param chunklen The chunk length.
 * @param end The line ending sequence.
 * @return Returns the chunked string.
 */
declare function chunk_split(body: string, chunklen?: number, end?: string): string;

/**
 * Convert from one Cyrillic character set to another
 * 
 * Converts from one Cyrillic character set to another.
 *
 * @param str The string to be converted.
 * @param from The source Cyrillic character set, as a single character.
 * @param to The target Cyrillic character set, as a single character.
 * @return Returns the converted string.
 */
declare function convert_cyr_string(str: string, from: string, to: string): string;

/**
 * Decode a uuencoded string
 * 
 * convert_uudecode decodes a uuencoded string.
 *
 * @param data The uuencoded data.
 * @return Returns the decoded data as a string.
 */
declare function convert_uudecode(data: string): string;

/**
 * Uuencode a string
 * 
 * convert_uuencode encodes a string using the uuencode algorithm.
 * 
 * Uuencode translates all strings (including binary's ones) into printable
 * characters, making them safe for network transmissions. Uuencoded data is about
 * 35% larger than the original.
 *
 * @param data The data to be encoded.
 * @return Returns the uuencoded data.
 */
declare function convert_uuencode(data: string): string;

/**
 * Return information about characters used in a string
 * 
 * Counts the number of occurrences of every byte-value (0..255) in string and
 * returns it in various ways.
 *
 * @param string The examined string.
 * @param mode See return values.
 * @return Depending on mode count_chars returns one of the following:    0 - an
 *         array with the byte-value as key and the frequency of every byte as
 *         value.     1 - same as 0 but only byte-values with a frequency greater
 *         than zero are listed.     2 - same as 0 but only byte-values with a
 *         frequency equal to zero are listed.     3 - a string containing all
 *         unique characters is returned.     4 - a string containing all not used
 *         characters is returned.
 */
declare function count_chars(string: string, mode?: number): any;

/**
 * Calculates the crc32 polynomial of a string
 * 
 * Generates the cyclic redundancy checksum polynomial of 32-bit lengths of the
 * str. This is usually used to validate the integrity of data being transmitted.
 *
 * @param str The data.
 * @return Returns the crc32 checksum of str as an integer.
 */
declare function crc32(str: string): number;

/**
 * One-way string hashing
 * 
 * crypt will return a hashed string using the standard Unix DES-based algorithm or
 * alternative algorithms that may be available on the system.
 * 
 * Some operating systems support more than one type of hash.  In fact, sometimes
 * the standard DES-based algorithm is replaced by an MD5-based algorithm.  The
 * hash type is triggered by the salt argument. Prior to 5.3, PHP would determine
 * the available algorithms at install-time based on the system's crypt(). If no
 * salt is provided, PHP will auto-generate either a standard two character (DES)
 * salt, or a twelve character (MD5), depending on the availability of MD5 crypt().
 * PHP sets a constant named CRYPT_SALT_LENGTH which indicates the longest valid
 * salt allowed by the available hashes.
 * 
 * The standard DES-based crypt returns the salt as the first two characters of the
 * output. It also only uses the first eight characters of str, so longer strings
 * that start with the same eight characters will generate the same result (when
 * the same salt is used).
 * 
 * As of PHP 5.3.0, PHP contains its own implementation and will use that if the
 * system lacks of support for one or more of the algorithms.
 *
 * @param str The string to be hashed.
 * @param salt An optional salt string to base the hashing on. If not provided,
 *             the behaviour is defined by the algorithm implementation and can
 *             lead to unexpected results.
 * @return Returns the hashed string or a string that is shorter than 13
 *         characters and is guaranteed to differ from the salt on failure.
 */
declare function crypt(str: string, salt: string): string;

/**
 * Output one or more strings
 * 
 * echo is not actually a function (it is a language construct), so you are not
 * required to use parentheses with it. echo (unlike some other language
 * constructs) does not behave like a function, so it cannot always be used in the
 * context of a function. Additionally, if you want to pass more than one parameter
 * to echo, the parameters must not be enclosed within parentheses.
 * 
 * echo also has a shortcut syntax, where you can immediately follow the opening
 * tag with an equals sign. Prior to PHP 5.4.0, this short syntax only works with
 * the short_open_tag configuration setting enabled.    foo. ]]>
 *
 * @param str 
 */
declare function echo(...str: any[]): string;

/**
 * Split a string by string
 * 
 * Returns an array of strings, each of which is a substring of string formed by
 * splitting it on boundaries formed by the string delimiter.
 *
 * @param delimiter The boundary string.
 * @param string The input string.
 * @param limit If limit is set and positive, the returned array will contain a
 *              maximum of limit elements with the last element containing the
 *              rest of string.
 *              
 *              If the limit parameter is negative, all components except the last
 *              -limit are returned.
 *              
 *              If the limit parameter is zero, then this is treated as 1.
 * @return Returns an array of strings created by splitting the string parameter
 *         on boundaries formed by the delimiter.
 *         
 *         If delimiter is an empty string (""), explode will return false. If
 *         delimiter contains a value that is not contained in string and a
 *         negative limit is used, then an empty array will be returned, otherwise
 *         an array containing string will be returned.
 */
declare function explode(delimiter: string, string: string, limit?: number): string[];

/**
 * Write a formatted string to a stream
 * 
 * Write a string produced according to format to the stream resource specified by
 * handle.
 *
 * @param handle 
 * @param format See sprintf for a description of format.
 * @param args 
 * @return Returns the length of the string written.
 */
declare function fprintf(handle: Pct.PhpResource, format: string, ...args: any[]): number;

/**
 * Returns the translation table used by htmlspecialchars and htmlentities
 * 
 * get_html_translation_table will return the translation table that is used
 * internally for htmlspecialchars and htmlentities.
 * 
 * Special characters can be encoded in several ways. E.g. " can be encoded as
 * quot;, #34; or #x22. get_html_translation_table returns only the form used by
 * htmlspecialchars and htmlentities.
 *
 * @param table Which table to return. Either HTML_ENTITIES or HTML_SPECIALCHARS.
 * @param flags A bitmask of one or more of the following flags, which specify
 *              which quotes the table will contain as well as which document type
 *              the table is for. The default is ENT_COMPAT | ENT_HTML401. 
 *              Available flags constants    Constant Name Description    
 *              ENT_COMPAT Table will contain entities for double-quotes, but not
 *              for single-quotes.   ENT_QUOTES Table will contain entities for
 *              both double and single quotes.   ENT_NOQUOTES Table will neither
 *              contain entities for single quotes nor for double quotes.  
 *              ENT_HTML401 Table for HTML 4.01.   ENT_XML1 Table for XML 1.  
 *              ENT_XHTML Table for XHTML.   ENT_HTML5 Table for HTML 5.
 * @param encoding Encoding to use. If omitted, the default value for this
 *                 argument is ISO-8859-1 in versions of PHP prior to 5.4.0, and
 *                 UTF-8 from PHP 5.4.0 onwards.
 * @return Returns the translation table as an array, with the original characters
 *         as keys and entities as values.
 */
declare function get_html_translation_table(table?: number, flags?: number, encoding?: string): Pct.PhpAssocArray;

/**
 * Convert logical Hebrew text to visual text
 * 
 * Converts logical Hebrew text to visual text.
 * 
 * The function tries to avoid breaking words.
 *
 * @param hebrew_text A Hebrew input string.
 * @param max_chars_per_line This optional parameter indicates maximum number of
 *                           characters per line that will be returned.
 * @return Returns the visual string.
 */
declare function hebrev(hebrew_text: string, max_chars_per_line?: number): string;

/**
 * Convert logical Hebrew text to visual text with newline conversion
 * 
 * This function is similar to hebrev with the difference that it converts newlines
 * (\n) to "br\n".
 * 
 * The function tries to avoid breaking words.
 *
 * @param hebrew_text A Hebrew input string.
 * @param max_chars_per_line This optional parameter indicates maximum number of
 *                           characters per line that will be returned.
 * @return Returns the visual string.
 */
declare function hebrevc(hebrew_text: string, max_chars_per_line?: number): string;

/**
 * Decodes a hexadecimally encoded binary string
 * 
 * Decodes a hexadecimally encoded binary string.
 * 
 * This function does NOT convert a hexadecimal number to a binary number. This can
 * be done using the base_convert function.
 *
 * @param data Hexadecimal representation of data.
 * @return Returns the binary representation of the given data .
 */
declare function hex2bin(data: string): string;

/**
 * Convert all HTML entities to their applicable characters
 * 
 * html_entity_decode is the opposite of htmlentities in that it converts all HTML
 * entities in the string to their applicable characters.
 * 
 * More precisely, this function decodes all the entities (including all numeric
 * entities) that a) are necessarily valid for the chosen document type — i.e., for
 * XML, this function does not decode named entities that might be defined in some
 * DTD — and b) whose character or characters are in the coded character set
 * associated with the chosen encoding and are permitted in the chosen document
 * type. All other entities are left as is.
 *
 * @param string The input string.
 * @param flags A bitmask of one or more of the following flags, which specify how
 *              to handle quotes and which document type to use. The default is
 *              ENT_COMPAT | ENT_HTML401.  Available flags constants    Constant
 *              Name Description     ENT_COMPAT Will convert double-quotes and
 *              leave single-quotes alone.   ENT_QUOTES Will convert both double
 *              and single quotes.   ENT_NOQUOTES Will leave both double and
 *              single quotes unconverted.   ENT_HTML401  Handle code as HTML
 *              4.01.    ENT_XML1  Handle code as XML 1.    ENT_XHTML  Handle code
 *              as XHTML.    ENT_HTML5  Handle code as HTML 5.
 * @param encoding Encoding to use. If omitted, the default value for this
 *                 argument is ISO-8859-1 in versions of PHP prior to 5.4.0, and
 *                 UTF-8 from PHP 5.4.0 onwards.
 * @return Returns the decoded string.
 */
declare function html_entity_decode(string: string, flags?: number, encoding?: string): string;

/**
 * Convert all applicable characters to HTML entities
 * 
 * This function is identical to htmlspecialchars in all ways, except with
 * htmlentities, all characters which have HTML character entity equivalents are
 * translated into these entities.
 * 
 * If you want to decode instead (the reverse) you can use html_entity_decode.
 *
 * @param string The input string.
 * @param flags A bitmask of one or more of the following flags, which specify how
 *              to handle quotes, invalid code unit sequences and the used
 *              document type. The default is ENT_COMPAT | ENT_HTML401.  Available
 *              flags constants    Constant Name Description     ENT_COMPAT Will
 *              convert double-quotes and leave single-quotes alone.   ENT_QUOTES
 *              Will convert both double and single quotes.   ENT_NOQUOTES Will
 *              leave both double and single quotes unconverted.   ENT_IGNORE 
 *              Silently discard invalid code unit sequences instead of returning
 *              an empty string. Using this flag is discouraged as it may have
 *              security implications.    ENT_SUBSTITUTE  Replace invalid code
 *              unit sequences with a Unicode Replacement Character U+FFFD (UTF-8)
 *              or #FFFD; (otherwise) instead of returning an empty string.   
 *              ENT_DISALLOWED  Replace invalid code points for the given document
 *              type with a Unicode Replacement Character U+FFFD (UTF-8) or #FFFD;
 *              (otherwise) instead of leaving them as is. This may be useful, for
 *              instance, to ensure the well-formedness of XML documents with
 *              embedded external content.    ENT_HTML401  Handle code as HTML
 *              4.01.    ENT_XML1  Handle code as XML 1.    ENT_XHTML  Handle code
 *              as XHTML.    ENT_HTML5  Handle code as HTML 5.
 * @param encoding Like htmlspecialchars, htmlentities takes an optional third
 *                 argument encoding which defines encoding used in conversion. If
 *                 omitted, the default value for this argument is ISO-8859-1 in
 *                 versions of PHP prior to 5.4.0, and UTF-8 from PHP 5.4.0
 *                 onwards. Although this argument is technically optional, you
 *                 are highly encouraged to specify the correct value for your
 *                 code.
 * @param double_encode When double_encode is turned off PHP will not encode
 *                      existing html entities. The default is to convert
 *                      everything.
 * @return Returns the encoded string.
 *         
 *         If the input string contains an invalid code unit sequence within the
 *         given encoding an empty string will be returned, unless either the
 *         ENT_IGNORE or ENT_SUBSTITUTE flags are set.
 */
declare function htmlentities(string: string, flags?: number, encoding?: string, double_encode?: bool): string;

/**
 * Convert special characters to HTML entities
 * 
 * Certain characters have special significance in HTML, and should be represented
 * by HTML entities if they are to preserve their meanings. This function returns a
 * string with these conversions made. If you require all input substrings that
 * have associated named entities to be translated, use htmlentities instead.
 * 
 * If the input string passed to this function and the final document share the
 * same character set, this function is sufficient to prepare input for inclusion
 * in most contexts of an HTML document. If, however, the input can represent
 * characters that are not coded in the final document character set and you wish
 * to retain those characters (as numeric or named entities), both this function
 * and htmlentities (which only encodes substrings that have named entity
 * equivalents) may be insufficient. You may have to use mb_encode_numericentity
 * instead.
 * 
 * The translations performed are:    '' (ampersand) becomes 'amp;'     '' (double
 * quote) becomes 'quot;' when ENT_NOQUOTES is not set.     ' (single quote)
 * becomes '#039;' (or apos;) only when ENT_QUOTES is set.     '' (less than)
 * becomes 'lt;'     '' (greater than) becomes 'gt;'
 *
 * @param string The string being converted.
 * @param flags A bitmask of one or more of the following flags, which specify how
 *              to handle quotes, invalid code unit sequences and the used
 *              document type. The default is ENT_COMPAT | ENT_HTML401.  Available
 *              flags constants    Constant Name Description     ENT_COMPAT Will
 *              convert double-quotes and leave single-quotes alone.   ENT_QUOTES
 *              Will convert both double and single quotes.   ENT_NOQUOTES Will
 *              leave both double and single quotes unconverted.   ENT_IGNORE 
 *              Silently discard invalid code unit sequences instead of returning
 *              an empty string. Using this flag is discouraged as it may have
 *              security implications.    ENT_SUBSTITUTE  Replace invalid code
 *              unit sequences with a Unicode Replacement Character U+FFFD (UTF-8)
 *              or #FFFD; (otherwise) instead of returning an empty string.   
 *              ENT_DISALLOWED  Replace invalid code points for the given document
 *              type with a Unicode Replacement Character U+FFFD (UTF-8) or #FFFD;
 *              (otherwise) instead of leaving them as is. This may be useful, for
 *              instance, to ensure the well-formedness of XML documents with
 *              embedded external content.    ENT_HTML401  Handle code as HTML
 *              4.01.    ENT_XML1  Handle code as XML 1.    ENT_XHTML  Handle code
 *              as XHTML.    ENT_HTML5  Handle code as HTML 5.
 * @param encoding Defines encoding used in conversion. If omitted, the default
 *                 value for this argument is ISO-8859-1 in versions of PHP prior
 *                 to 5.4.0, and UTF-8 from PHP 5.4.0 onwards.
 *                 
 *                 For the purposes of this function, the encodings ISO-8859-1,
 *                 ISO-8859-15, UTF-8, cp866, cp1251, cp1252, and KOI8-R are
 *                 effectively equivalent, provided the string itself is valid for
 *                 the encoding, as the characters affected by htmlspecialchars
 *                 occupy the same positions in all of these encodings.
 * @param double_encode When double_encode is turned off PHP will not encode
 *                      existing html entities, the default is to convert
 *                      everything.
 * @return The converted string.
 *         
 *         If the input string contains an invalid code unit sequence within the
 *         given encoding an empty string will be returned, unless either the
 *         ENT_IGNORE or ENT_SUBSTITUTE flags are set.
 */
declare function htmlspecialchars(string: string, flags?: number, encoding?: string, double_encode?: bool): string;

/**
 * Convert special HTML entities back to characters
 * 
 * This function is the opposite of htmlspecialchars. It converts special HTML
 * entities back to characters.
 * 
 * The converted entities are: amp;, quot; (when ENT_NOQUOTES is not set), #039;
 * (when ENT_QUOTES is set), lt; and gt;.
 *
 * @param string The string to decode.
 * @param flags A bitmask of one or more of the following flags, which specify how
 *              to handle quotes and which document type to use. The default is
 *              ENT_COMPAT | ENT_HTML401.  Available flags constants    Constant
 *              Name Description     ENT_COMPAT Will convert double-quotes and
 *              leave single-quotes alone.   ENT_QUOTES Will convert both double
 *              and single quotes.   ENT_NOQUOTES Will leave both double and
 *              single quotes unconverted.   ENT_HTML401  Handle code as HTML
 *              4.01.    ENT_XML1  Handle code as XML 1.    ENT_XHTML  Handle code
 *              as XHTML.    ENT_HTML5  Handle code as HTML 5.
 * @return Returns the decoded string.
 */
declare function htmlspecialchars_decode(string: string, flags?: number): string;

/**
 * Join array elements with a string
 * 
 * Join array elements with a glue string.
 * 
 * implode can, for historical reasons, accept its parameters in either order. For
 * consistency with explode, however, it may be less confusing to use the
 * documented order of arguments.
 *
 * @param glue Defaults to an empty string. This is not the preferred usage of
 *             implode as glue would be the second parameter and thus, the bad
 *             prototype would be used.
 * @param pieces The array of strings to implode.
 * @return Returns a string containing a string representation of all the array
 *         elements in the same order, with the glue string between each element.
 */
declare function implode(glue: string, pieces: Array): string;

/**
 * Join array elements with a string
 * 
 * Join array elements with a glue string.
 * 
 * implode can, for historical reasons, accept its parameters in either order. For
 * consistency with explode, however, it may be less confusing to use the
 * documented order of arguments.
 *
 * @param pieces The array of strings to implode.
 * @return Returns a string containing a string representation of all the array
 *         elements in the same order, with the glue string between each element.
 */
declare function implode(pieces: Array): string;

/**
 * Make a string's first character lowercase
 * 
 * Returns a string with the first character of str , lowercased if that character
 * is alphabetic.
 * 
 * Note that 'alphabetic' is determined by the current locale. For instance, in the
 * default "C" locale characters such as umlaut-a (ä) will not be converted.
 *
 * @param str The input string.
 * @return Returns the resulting string.
 */
declare function lcfirst(str: string): string;

/**
 * Calculate Levenshtein distance between two strings
 * 
 * The Levenshtein distance is defined as the minimal number of characters you have
 * to replace, insert or delete to transform str1 into str2. The complexity of the
 * algorithm is O(m*n), where n and m are the length of str1 and str2 (rather good
 * when compared to similar_text, which is O(max(n,m)**3), but still expensive).
 * 
 * In its simplest form the function will take only the two strings as parameter
 * and will calculate just the number of insert, replace and delete operations
 * needed to transform str1 into str2.
 * 
 * A second variant will take three additional parameters that define the cost of
 * insert, replace and delete operations.  This is more general and adaptive than
 * variant one, but not as efficient.
 *
 * @param str1 One of the strings being evaluated for Levenshtein distance.
 * @param str2 One of the strings being evaluated for Levenshtein distance.
 * @return This function returns the Levenshtein-Distance between the two argument
 *         strings or -1, if one of the argument strings is longer than the limit
 *         of 255 characters.
 */
declare function levenshtein(str1: string, str2: string): number;

/**
 * Calculate Levenshtein distance between two strings
 * 
 * The Levenshtein distance is defined as the minimal number of characters you have
 * to replace, insert or delete to transform str1 into str2. The complexity of the
 * algorithm is O(m*n), where n and m are the length of str1 and str2 (rather good
 * when compared to similar_text, which is O(max(n,m)**3), but still expensive).
 * 
 * In its simplest form the function will take only the two strings as parameter
 * and will calculate just the number of insert, replace and delete operations
 * needed to transform str1 into str2.
 * 
 * A second variant will take three additional parameters that define the cost of
 * insert, replace and delete operations.  This is more general and adaptive than
 * variant one, but not as efficient.
 *
 * @param str1 One of the strings being evaluated for Levenshtein distance.
 * @param str2 One of the strings being evaluated for Levenshtein distance.
 * @param const_ins
 * @param cost_rep Defines the cost of replacement.
 * @param cost_del Defines the cost of deletion.
 * @return This function returns the Levenshtein-Distance between the two argument
 *         strings or -1, if one of the argument strings is longer than the limit
 *         of 255 characters.
 */
declare function levenshtein(str1: string, str2: string, const_ins: number, cost_rep: number, cost_del: number);
declare function localconv(): Pct.PhpAssocArray;

/**
 * Strip whitespace (or other characters) from the beginning of a string
 * 
 * Strip whitespace (or other characters) from the beginning of a string.
 *
 * @param str The input string.
 * @param charlist You can also specify the characters you want to strip, by means
 *                 of the charlist parameter. Simply list all characters that you
 *                 want to be stripped. With .. you can specify a range of
 *                 characters.
 * @return This function returns a string with whitespace stripped from the
 *         beginning of str. Without the second parameter, ltrim will strip these
 *         characters:     " " (ASCII 32 (0x20)), an ordinary space.     "\t"
 *         (ASCII 9 (0x09)), a tab.     "\n" (ASCII 10 (0x0A)), a new line (line
 *         feed).     "\r" (ASCII 13 (0x0D)), a carriage return.     "\0" (ASCII 0
 *         (0x00)), the NUL-byte.      "\x0B" (ASCII 11 (0x0B)), a vertical tab.
 */
declare function ltrim(str: string, charlist?: string): string;

/**
 * Calculate the md5 hash of a string
 * 
 * Calculates the MD5 hash of str using the RSA Data Security, Inc. MD5
 * Message-Digest Algorithm, and returns that hash.
 *
 * @param str The string.
 * @param raw_output If the optional raw_output is set to true, then the md5
 *                   digest is instead returned in raw binary format with a length
 *                   of 16.
 * @return Returns the hash as a 32-character hexadecimal number.
 */
declare function md5(str: string, raw_output?: bool): string;

/**
 * Calculates the md5 hash of a given file
 * 
 * Calculates the MD5 hash of the file specified by the filename parameter using
 * the RSA Data Security, Inc. MD5 Message-Digest Algorithm, and returns that hash.
 * The hash is a 32-character hexadecimal number.
 *
 * @param filename The filename
 * @param raw_output When true, returns the digest in raw binary format with a
 *                   length of 16.
 * @return Returns a string on success, false otherwise.
 */
declare function md5_file(filename: string, raw_output?: bool): string;

/**
 * Calculate the metaphone key of a string
 * 
 * Calculates the metaphone key of str.
 * 
 * Similar to soundex metaphone creates the same key for similar sounding words.
 * It's more accurate than soundex as it knows the basic rules of English
 * pronunciation.  The metaphone generated keys are of variable length.
 * 
 * Metaphone was developed by Lawrence Philips lphilips at verity dot com&gt;. It
 * is described in ["Practical Algorithms for Programmers", Binstock  Rex, Addison
 * Wesley, 1995].
 *
 * @param str The input string.
 * @param phonemes This parameter restricts the returned metaphone key to phonemes
 *                 characters in length. The default value of 0 means no
 *                 restriction.
 * @return Returns the metaphone key as a string, .
 */
declare function metaphone(str: string, phonemes?: number): string;

/**
 * Formats a number as a currency string
 * 
 * money_format returns a formatted version of number.  This function wraps the C
 * library function strfmon, with the difference that this implementation converts
 * only one number at a time.
 *
 * @param format The format specification consists of the following sequence:  a %
 *               character optional flags optional field width optional left
 *               precision optional right precision a required conversion
 *               character
 *               
 *               a % character
 *               
 *               optional flags
 *               
 *               optional field width
 *               
 *               optional left precision
 *               
 *               optional right precision
 *               
 *               a required conversion character
 *               
 *               One or more of the optional flags below can be used:   =f   The
 *               character = followed by a (single byte) character f to be used as
 *               the numeric fill character. The default fill character is space. 
 *               ^   Disable the use of grouping characters (as defined by the
 *               current locale).     + or (   Specify the formatting style for
 *               positive and negative numbers. If + is used, the locale's
 *               equivalent for + and - will be used. If ( is used, negative
 *               amounts are enclosed in parenthesis. If no specification is
 *               given, the default is +.     !   Suppress the currency symbol
 *               from the output string.     -   If present, it will make all
 *               fields left-justified (padded to the right), as opposed to the
 *               default which is for the fields to be right-justified (padded to
 *               the left).
 *               
 *               The character = followed by a (single byte) character f to be
 *               used as the numeric fill character. The default fill character is
 *               space.
 *               
 *               Disable the use of grouping characters (as defined by the current
 *               locale).
 *               
 *               Specify the formatting style for positive and negative numbers.
 *               If + is used, the locale's equivalent for + and - will be used.
 *               If ( is used, negative amounts are enclosed in parenthesis. If no
 *               specification is given, the default is +.
 *               
 *               Suppress the currency symbol from the output string.
 *               
 *               If present, it will make all fields left-justified (padded to the
 *               right), as opposed to the default which is for the fields to be
 *               right-justified (padded to the left).
 *               
 *               w   A decimal digit string specifying a minimum field width.
 *               Field will be right-justified unless the flag - is used. Default
 *               value is 0 (zero).
 *               
 *               A decimal digit string specifying a minimum field width. Field
 *               will be right-justified unless the flag - is used. Default value
 *               is 0 (zero).
 *               
 *               #n   The maximum number of digits (n) expected to the left of the
 *               decimal character (e.g. the decimal point). It is used usually to
 *               keep formatted output aligned in the same columns, using the fill
 *               character if the number of digits is less than n. If the number
 *               of actual digits is bigger than n, then this specification is
 *               ignored.   If grouping has not been suppressed using the ^ flag,
 *               grouping separators will be inserted before the fill characters
 *               (if any) are added. Grouping separators will not be applied to
 *               fill characters, even if the fill character is a digit.   To
 *               ensure alignment, any characters appearing before or after the
 *               number in the formatted output such as currency or sign symbols
 *               are padded as necessary with space characters to make their
 *               positive and negative formats an equal length.
 *               
 *               The maximum number of digits (n) expected to the left of the
 *               decimal character (e.g. the decimal point). It is used usually to
 *               keep formatted output aligned in the same columns, using the fill
 *               character if the number of digits is less than n. If the number
 *               of actual digits is bigger than n, then this specification is
 *               ignored.
 *               
 *               If grouping has not been suppressed using the ^ flag, grouping
 *               separators will be inserted before the fill characters (if any)
 *               are added. Grouping separators will not be applied to fill
 *               characters, even if the fill character is a digit.
 *               
 *               To ensure alignment, any characters appearing before or after the
 *               number in the formatted output such as currency or sign symbols
 *               are padded as necessary with space characters to make their
 *               positive and negative formats an equal length.
 *               
 *               .p   A period followed by the number of digits (p) after the
 *               decimal character. If the value of p is 0 (zero), the decimal
 *               character and the digits to its right will be omitted. If no
 *               right precision is included, the default will dictated by the
 *               current local in use. The amount being formatted is rounded to
 *               the specified number of digits prior to formatting.
 *               
 *               A period followed by the number of digits (p) after the decimal
 *               character. If the value of p is 0 (zero), the decimal character
 *               and the digits to its right will be omitted. If no right
 *               precision is included, the default will dictated by the current
 *               local in use. The amount being formatted is rounded to the
 *               specified number of digits prior to formatting.
 *               
 *               i   The number is formatted according to the locale's
 *               international currency format (e.g. for the USA locale: USD
 *               1,234.56).     n   The number is formatted according to the
 *               locale's national currency format (e.g. for the de_DE locale:
 *               EU1.234,56).     %   Returns the % character.
 *               
 *               The number is formatted according to the locale's international
 *               currency format (e.g. for the USA locale: USD 1,234.56).
 *               
 *               The number is formatted according to the locale's national
 *               currency format (e.g. for the de_DE locale: EU1.234,56).
 *               
 *               Returns the % character.
 * @param number The number to be formatted.
 * @return Returns the formatted string. Characters before and after the
 *         formatting string will be returned unchanged. Non-numeric number causes
 *         returning  and emitting E_WARNING.
 */
declare function money_format(format: string, number: number): string;

/**
 * Query language and locale information
 * 
 * nl_langinfo is used to access individual elements of the locale categories. 
 * Unlike localeconv, which returns all of the elements, nl_langinfo allows you to
 * select any specific element.
 *
 * @param item item may be an integer value of the element or the constant name of
 *             the element. The following is a list of constant names for item
 *             that may be used and their description. Some of these constants may
 *             not be defined or hold no value for certain locales.  nl_langinfo
 *             Constants      Constant Description     LC_TIME Category Constants 
 *             ABDAY_(1-7) Abbreviated name of n-th day of the week.   DAY_(1-7)
 *             Name of the n-th day of the week (DAY_1 = Sunday).   ABMON_(1-12)
 *             Abbreviated name of the n-th month of the year.   MON_(1-12) Name
 *             of the n-th month of the year.   AM_STR String for Ante meridian.  
 *             PM_STR String for Post meridian.   D_T_FMT String that can be used
 *             as the format string for strftime to represent time and date.  
 *             D_FMT String that can be used as the format string for strftime to
 *             represent date.   T_FMT String that can be used as the format
 *             string for strftime to represent time.   T_FMT_AMPM String that can
 *             be used as the format string for strftime to represent time in
 *             12-hour format with ante/post meridian.   ERA Alternate era.  
 *             ERA_YEAR Year in alternate era format.   ERA_D_T_FMT Date and time
 *             in alternate era format (string can be used in strftime).  
 *             ERA_D_FMT Date in alternate era format (string can be used in
 *             strftime).   ERA_T_FMT Time in alternate era format (string can be
 *             used in strftime).   LC_MONETARY Category Constants  
 *             INT_CURR_SYMBOL International currency symbol.   CURRENCY_SYMBOL
 *             Local currency symbol.   CRNCYSTR Same value as CURRENCY_SYMBOL.  
 *             MON_DECIMAL_POINT Decimal point character.   MON_THOUSANDS_SEP
 *             Thousands separator (groups of three digits).   MON_GROUPING Like
 *             "grouping" element.   POSITIVE_SIGN Sign for positive values.  
 *             NEGATIVE_SIGN Sign for negative values.   INT_FRAC_DIGITS
 *             International fractional digits.   FRAC_DIGITS Local fractional
 *             digits.   P_CS_PRECEDES Returns 1 if CURRENCY_SYMBOL precedes a
 *             positive value.   P_SEP_BY_SPACE Returns 1 if a space separates
 *             CURRENCY_SYMBOL from a positive value.   N_CS_PRECEDES Returns 1 if
 *             CURRENCY_SYMBOL precedes a negative value.   N_SEP_BY_SPACE Returns
 *             1 if a space separates CURRENCY_SYMBOL from a negative value.  
 *             P_SIGN_POSN     Returns 0 if parentheses surround the quantity and
 *             CURRENCY_SYMBOL.     Returns 1 if the sign string precedes the
 *             quantity and CURRENCY_SYMBOL.     Returns 2 if the sign string
 *             follows the quantity and CURRENCY_SYMBOL.     Returns 3 if the sign
 *             string immediately precedes the CURRENCY_SYMBOL.     Returns 4 if
 *             the sign string immediately follows the CURRENCY_SYMBOL.      
 *             N_SIGN_POSN   LC_NUMERIC Category Constants   DECIMAL_POINT Decimal
 *             point character.   RADIXCHAR Same value as DECIMAL_POINT.  
 *             THOUSANDS_SEP Separator character for thousands (groups of three
 *             digits).   THOUSEP Same value as THOUSANDS_SEP.   GROUPING   
 *             LC_MESSAGES Category Constants   YESEXPR Regex string for matching
 *             "yes" input.   NOEXPR Regex string for matching "no" input.  
 *             YESSTR Output string for "yes".   NOSTR Output string for "no".  
 *             LC_CTYPE Category Constants   CODESET Return a string with the name
 *             of the character encoding.
 * @return Returns the element as a string, or false if item is not valid.
 */
declare function nl_langinfo(item: number): string; //TODO enum for last param

/**
 * Inserts HTML line breaks before all newlines in a string
 * 
 * Returns string with 'br /' or 'br' inserted before all newlines (\r\n, \n\r, \n
 * and \r).
 *
 * @param string The input string.
 * @param is_xhtml Whether to use XHTML compatible line breaks or not.
 * @return Returns the altered string.
 */
declare function nl2br(string: string, is_xhtml?: bool): string;

/**
 * Format a number with grouped thousands
 * 
 * This function accepts either one, two, or four parameters (not three):
 * 
 * If only one parameter is given, number will be formatted without decimals, but
 * with a comma (",") between every group of thousands.
 * 
 * If two parameters are given, number will be formatted with decimals decimals
 * with a dot (".") in front, and a comma (",") between every group of thousands.
 * 
 * If all four parameters are given, number will be formatted with decimals
 * decimals, dec_point instead of a dot (".") before the decimals and thousands_sep
 * instead of a comma (",") between every group of thousands.
 *
 * @param number The number being formatted.
 * @param decimals Sets the number of decimal points.
 * @param dec_point Sets the separator for the decimal point.
 * @param thousands_sep Sets the thousands separator.
 * @return A formatted version of number.
 */
declare function number_format(number: number, decimals?: number, dec_point?: string, thousands_sep?: string): string;

/**
 * Return ASCII value of character
 * 
 * Returns the ASCII value of the first character of string.
 * 
 * This function complements chr.
 *
 * @param string A character.
 * @return Returns the ASCII value as an integer.
 */
declare function ord(string: string): number;

/**
 * Parses the string into variables
 * 
 * Parses str as if it were the query string passed via a URL and sets variables in
 * the current scope.
 * 
 * To get the current QUERY_STRING, you may use the variable
 * $_SERVER['QUERY_STRING']. Also, you may want to read the section on variables
 * from external sources.
 * 
 * The magic_quotes_gpc setting affects the output of this function, as parse_str
 * uses the same mechanism that PHP uses to populate the $_GET, $_POST, etc.
 * variables.
 *
 * @param str The input string.
 * @param $arr If the second parameter arr is present, variables are stored in
 *             this variable as array elements instead.
 */
declare function parse_str(str: string, $arr: Pct.PhpAssocArray); //we require an array because we don't have ability to set var in current scope and don't want it

/**
 * Output a string
 * 
 * Outputs arg.
 * 
 * print is not actually a real function (it is a language construct) so you are
 * not required to use parentheses with its argument list.
 *
 * @param arg The input data.
 * @return Returns 1, always.
 */
declare function print(arg: any): number;

/**
 * Output a formatted string
 *
 * @param format See sprintf for a description of format.
 * @param args 
 * @return Returns the length of the outputted string.
 */
declare function printf(format: string, ...args: any[]): number;

/**
 * Convert a quoted-printable string to an 8 bit string
 * 
 * This function returns an 8-bit binary string corresponding to the decoded quoted
 * printable string (according to RFC2045, section 6.7, not RFC2821, section 4.5.2,
 * so additional periods are not stripped from the beginning of line).
 * 
 * This function is similar to imap_qprint, except this one does not require the
 * IMAP module to work.
 *
 * @param str The input string.
 * @return Returns the 8-bit binary string.
 */
declare function quoted_printable_decode(str: string): string;

/**
 * Convert a 8 bit string to a quoted-printable string
 * 
 * Returns a quoted printable string created according to RFC2045, section 6.7.
 * 
 * This function is similar to imap_8bit, except this one does not require the IMAP
 * module to work.
 *
 * @param str The input string.
 * @return Returns the encoded string.
 */
declare function quoted_printable_encode(str: string): string;

/**
 * Quote meta characters
 * 
 * Returns a version of str with a backslash character (\) before every character
 * that is among these: . \ + * ? [ ^ ] ( $ )
 *
 * @param str The input string.
 * @return Returns the string with meta characters quoted, or false if an empty
 *         string is given as str.
 */
declare function quotemeta(str: string): string;

/**
 * Strip whitespace (or other characters) from the end of a string
 * 
 * This function returns a string with whitespace stripped from the end of str.
 * 
 * Without the second parameter, rtrim will strip these characters:     " " (ASCII
 * 32 (0x20)), an ordinary space.     "\t" (ASCII 9 (0x09)), a tab.     "\n" (ASCII
 * 10 (0x0A)), a new line (line feed).     "\r" (ASCII 13 (0x0D)), a carriage
 * return.     "\0" (ASCII 0 (0x00)), the NUL-byte.      "\x0B" (ASCII 11 (0x0B)),
 * a vertical tab.
 *
 * @param str The input string.
 * @param charlist You can also specify the characters you want to strip, by means
 *                 of the charlist parameter. Simply list all characters that you
 *                 want to be stripped. With .. you can specify a range of
 *                 characters.
 * @return Returns the modified string.
 */
declare function rtrim(str: string, charlist?: string): string;

/**
 * Set locale information
 * 
 * Sets locale information.
 *
 * @param category category is a named constant specifying the category of the
 *                 functions affected by the locale setting:    LC_ALL for all of
 *                 the below     LC_COLLATE for string comparison, see strcoll    
 *                 LC_CTYPE for character classification and conversion, for
 *                 example strtoupper     LC_MONETARY for localeconv    
 *                 LC_NUMERIC for decimal separator (See also localeconv)    
 *                 LC_TIME for date and time formatting with strftime    
 *                 LC_MESSAGES for system responses (available if PHP was compiled
 *                 with libintl)
 * @param locale If locale is  or the empty string "", the locale names will be
 *               set from the values of environment variables with the same names
 *               as the above categories, or from "LANG".
 *               
 *               If locale is "0", the locale setting is not affected, only the
 *               current setting is returned.
 *               
 *               If locale is an array or followed by additional parameters then
 *               each array element or parameter is tried to be set as new locale
 *               until success. This is useful if a locale is known under
 *               different names on different systems or for providing a fallback
 *               for a possibly not available locale.
 * @param settings (Optional string or array parameters to try as locale settings
 *                 until success.)
 * @return Returns the new current locale, or false if the locale functionality is
 *         not implemented on your platform, the specified locale does not exist
 *         or the category name is invalid.
 *         
 *         An invalid category name also causes a warning message. Category/locale
 *         names can be found in RFC 1766 and ISO 639. Different systems have
 *         different naming schemes for locales.
 *         
 *         The return value of setlocale depends on the system that PHP is
 *         running.  It returns exactly what the system setlocale function
 *         returns.
 */
declare function setlocale(category: number, locale: string, ...settings: string[]): string;

/**
 * Set locale information
 * 
 * Sets locale information.
 *
 * @param category category is a named constant specifying the category of the
 *                 functions affected by the locale setting:    LC_ALL for all of
 *                 the below     LC_COLLATE for string comparison, see strcoll    
 *                 LC_CTYPE for character classification and conversion, for
 *                 example strtoupper     LC_MONETARY for localeconv    
 *                 LC_NUMERIC for decimal separator (See also localeconv)    
 *                 LC_TIME for date and time formatting with strftime    
 *                 LC_MESSAGES for system responses (available if PHP was compiled
 *                 with libintl)
 * @param locale If locale is  or the empty string "", the locale names will be
 *               set from the values of environment variables with the same names
 *               as the above categories, or from "LANG".
 *               
 *               If locale is "0", the locale setting is not affected, only the
 *               current setting is returned.
 *               
 *               If locale is an array or followed by additional parameters then
 *               each array element or parameter is tried to be set as new locale
 *               until success. This is useful if a locale is known under
 *               different names on different systems or for providing a fallback
 *               for a possibly not available locale.
 * @return Returns the new current locale, or false if the locale functionality is
 *         not implemented on your platform, the specified locale does not exist
 *         or the category name is invalid.
 *         
 *         An invalid category name also causes a warning message. Category/locale
 *         names can be found in RFC 1766 and ISO 639. Different systems have
 *         different naming schemes for locales.
 *         
 *         The return value of setlocale depends on the system that PHP is
 *         running.  It returns exactly what the system setlocale function
 *         returns.
 */
declare function setlocale(category: number, locale: Array): string;

/**
 * Calculate the sha1 hash of a string
 *
 * @param str The input string.
 * @param raw_output If the optional raw_output is set to true, then the sha1
 *                   digest is instead returned in raw binary format with a length
 *                   of 20, otherwise the returned value is a 40-character
 *                   hexadecimal number.
 * @return Returns the sha1 hash as a string.
 */
declare function sha1(str: string, raw_output?: bool): string;

/**
 * Calculate the sha1 hash of a file
 *
 * @param filename The filename of the file to hash.
 * @param raw_output When true, returns the digest in raw binary format with a
 *                   length of 20.
 * @return Returns a string on success, false otherwise.
 */
declare function sha1_file(filename: string, raw_output?: bool): string;

/**
 * Calculate the similarity between two strings
 * 
 * This calculates the similarity between two strings as described in . Note that
 * this implementation does not use a stack as in Oliver's pseudo code, but
 * recursive calls which may or may not speed up the whole process. Note also that
 * the complexity of this algorithm is O(N**3) where N is the length of the longest
 * string.
 *
 * @param first The first string.
 * @param second The second string.
 * @param $percent By passing a reference as third argument, similar_text will
 *                 calculate the similarity in percent for you.
 * @return Returns the number of matching chars in both strings.
 */
declare function similar_text(first: string, second: string, $percent?: number): number;

/**
 * Calculate the soundex key of a string
 * 
 * Calculates the soundex key of str.
 * 
 * Soundex keys have the property that words pronounced similarly produce the same
 * soundex key, and can thus be used to simplify searches in databases where you
 * know the pronunciation but not the spelling. This soundex function returns a
 * string 4 characters long, starting with a letter.
 * 
 * This particular soundex function is one described by Donald Knuth in "The Art Of
 * Computer Programming, vol. 3: Sorting And Searching", Addison-Wesley (1973), pp.
 * 391-392.
 *
 * @param str The input string.
 * @return Returns the soundex key as a string.
 */
declare function soundex(str: string): string;

/**
 * Return a formatted string
 * 
 * Returns a string produced according to the formatting string format.
 *
 * @param format The format string is composed of zero or more directives:
 *               ordinary characters (excluding %) that are copied directly to the
 *               result, and conversion specifications, each of which results in
 *               fetching its own parameter.  This applies to both sprintf and
 *               printf.
 *               
 *               Each conversion specification consists of a percent sign (%),
 *               followed by one or more of these elements, in order:    An
 *               optional sign specifier that forces a sign (- or +) to be used on
 *               a number. By default, only the - sign is used on a number if it's
 *               negative. This specifier forces positive numbers to have the +
 *               sign attached as well, and was added in PHP 4.3.0.     An
 *               optional padding specifier that says what character will be used
 *               for padding the results to the right string size.  This may be a
 *               space character or a 0 (zero character).  The default is to pad
 *               with spaces.  An alternate padding character can be specified by
 *               prefixing it with a single quote ('). See the examples below.    
 *               An optional alignment specifier that says if the result should be
 *               left-justified or right-justified. The default is
 *               right-justified; a - character here will make it left-justified. 
 *               An optional number, a width specifier that says how many
 *               characters (minimum) this conversion should result in.     An
 *               optional precision specifier in the form of a period (`.')
 *               followed by an optional decimal digit string that says how many
 *               decimal digits should be displayed for floating-point numbers.
 *               When using this specifier on a string, it acts as a cutoff point,
 *               setting a maximum character limit to the string.     A type
 *               specifier that says what type the argument data should be treated
 *               as.  Possible types:   % - a literal percent character. No
 *               argument is required.   b - the argument is treated as an
 *               integer, and presented as a binary number.   c - the argument is
 *               treated as an integer, and presented as the character with that
 *               ASCII value.   d - the argument is treated as an integer, and
 *               presented as a (signed) decimal number.   e - the argument is
 *               treated as scientific notation (e.g. 1.2e+2). The precision
 *               specifier stands for the number of digits after the decimal point
 *               since PHP 5.2.1. In earlier versions, it was taken as number of
 *               significant digits (one less).   E - like %e but uses uppercase
 *               letter (e.g. 1.2E+2).   u - the argument is treated as an
 *               integer, and presented as an unsigned decimal number.   f - the
 *               argument is treated as a float, and presented as a floating-point
 *               number (locale aware).   F - the argument is treated as a float,
 *               and presented as a floating-point number (non-locale aware).
 *               Available since PHP 4.3.10 and PHP 5.0.3.   g - shorter of %e and
 *               %f.   G - shorter of %E and %f.   o - the argument is treated as
 *               an integer, and presented as an octal number.   s - the argument
 *               is treated as and presented as a string.   x - the argument is
 *               treated as an integer and presented as a hexadecimal number (with
 *               lowercase letters).   X - the argument is treated as an integer
 *               and presented as a hexadecimal number (with uppercase letters).
 *               
 *               A type specifier that says what type the argument data should be
 *               treated as.  Possible types:   % - a literal percent character.
 *               No argument is required.   b - the argument is treated as an
 *               integer, and presented as a binary number.   c - the argument is
 *               treated as an integer, and presented as the character with that
 *               ASCII value.   d - the argument is treated as an integer, and
 *               presented as a (signed) decimal number.   e - the argument is
 *               treated as scientific notation (e.g. 1.2e+2). The precision
 *               specifier stands for the number of digits after the decimal point
 *               since PHP 5.2.1. In earlier versions, it was taken as number of
 *               significant digits (one less).   E - like %e but uses uppercase
 *               letter (e.g. 1.2E+2).   u - the argument is treated as an
 *               integer, and presented as an unsigned decimal number.   f - the
 *               argument is treated as a float, and presented as a floating-point
 *               number (locale aware).   F - the argument is treated as a float,
 *               and presented as a floating-point number (non-locale aware).
 *               Available since PHP 4.3.10 and PHP 5.0.3.   g - shorter of %e and
 *               %f.   G - shorter of %E and %f.   o - the argument is treated as
 *               an integer, and presented as an octal number.   s - the argument
 *               is treated as and presented as a string.   x - the argument is
 *               treated as an integer and presented as a hexadecimal number (with
 *               lowercase letters).   X - the argument is treated as an integer
 *               and presented as a hexadecimal number (with uppercase letters).
 *               
 *               The format string supports argument numbering/swapping.  Here is
 *               an example:  Argument swapping   ]]>   This will output "There
 *               are 5 monkeys in the tree".  But imagine we are creating a format
 *               string in a separate file, commonly because we would like to
 *               internationalize it and we rewrite it as:  Argument swapping  
 *               ]]>   We now have a problem.  The order of the placeholders in
 *               the format string does not match the order of the arguments in
 *               the code.  We would like to leave the code as is and simply
 *               indicate in the format string which arguments the placeholders
 *               refer to. We would write the format string like this instead: 
 *               Argument swapping   ]]>   An added benefit here is that you can
 *               repeat the placeholders without adding more arguments in the
 *               code.  For example:  Argument swapping   ]]>   When using
 *               argument swapping, the n$ position specifier must come
 *               immediately after the percent sign (%), before any other
 *               specifiers, as shown in the example below.  Position specifier
 *               with other specifiers   ]]>
 *               
 *               Attempting to use a position specifier greater than PHP_INT_MAX
 *               will result in sprintf generating warnings.
 * @param args 
 * @return Returns a string produced according to the formatting string format.
 */
declare function sprintf(format: string, ...args: any[]): string;

/**
 * Parses input from a string according to a format
 * 
 * The function sscanf is the input analog of printf. sscanf reads from the string
 * str and interprets it according to the specified format, which is described in
 * the documentation for sprintf.
 * 
 * Any whitespace in the format string matches any whitespace in the input string.
 * This means that even a tab \t in the format string can match a single space
 * character in the input string.
 *
 * @param str The input string being parsed.
 * @param format The interpreted format for str, which is described in the
 *               documentation for sprintf with following differences:   Function
 *               is not locale-aware.   F, g, G and b are not supported.   D
 *               stands for decimal number.   i stands for integer with base
 *               detection.   n stands for number of characters processed so far.
 * @param $vars Optionally pass in variables by reference that will contain the
 *              parsed values.
 * @return If only two parameters were passed to this function, the values parsed
 *         will be returned as an array. Otherwise, if optional parameters are
 *         passed, the function will return the number of assigned values. The
 *         optional parameters must be passed by reference.
 *         
 *         If there are more substrings expected in the format than there are
 *         available within str, -1 will be returned.
 */
declare function sscanf(str: string, format: string, ...$vars: any[]): any;

/**
 * Parse a CSV string into an array
 * 
 * Parses a string input for fields in CSV format and returns an array containing
 * the fields read.
 *
 * @param input The string to parse.
 * @param delimiter Set the field delimiter (one character only).
 * @param enclosure Set the field enclosure character (one character only).
 * @param escape Set the escape character (one character only). Defaults as a
 *               backslash (\)
 * @return Returns an indexed array containing the fields read.
 */
declare function str_getcsv(input: string, delimiter?: string, enclosure?: string, escape?: string): string[];

/**
 * Case-insensitive version of str_replace.
 * 
 * This function returns a string or an array with all occurrences of search in
 * subject (ignoring case) replaced with the given replace value.  If you don't
 * need fancy replacing rules, you should generally use this function instead of
 * preg_replace with the i modifier.
 *
 * @param search The value being searched for, otherwise known as the needle.  An
 *               array may be used to designate multiple needles.
 * @param replace The replacement value that replaces found search values. An
 *                array may be used to designate multiple replacements.
 * @param subject The string or array being searched and replaced on, otherwise
 *                known as the haystack.
 *                
 *                If subject is an array, then the search and replace is performed
 *                with every entry of subject, and the return value is an array as
 *                well.
 * @param $count If passed, this will be set to the number of replacements
 *               performed.
 * @return Returns a string or an array of replacements.
 */
declare function str_ireplace(search: string, replace: string, subject: string, $count?: number): string;

/**
 * Case-insensitive version of str_replace.
 * 
 * This function returns a string or an array with all occurrences of search in
 * subject (ignoring case) replaced with the given replace value.  If you don't
 * need fancy replacing rules, you should generally use this function instead of
 * preg_replace with the i modifier.
 *
 * @param search The value being searched for, otherwise known as the needle.  An
 *               array may be used to designate multiple needles.
 * @param replace The replacement value that replaces found search values. An
 *                array may be used to designate multiple replacements.
 * @param subject The string or array being searched and replaced on, otherwise
 *                known as the haystack.
 *                
 *                If subject is an array, then the search and replace is performed
 *                with every entry of subject, and the return value is an array as
 *                well.
 * @param $count If passed, this will be set to the number of replacements
 *               performed.
 * @return Returns a string or an array of replacements.
 */
declare function str_ireplace(search: any[], replace: string, subject: string, $count?: number): string;

/**
 * Case-insensitive version of str_replace.
 * 
 * This function returns a string or an array with all occurrences of search in
 * subject (ignoring case) replaced with the given replace value.  If you don't
 * need fancy replacing rules, you should generally use this function instead of
 * preg_replace with the i modifier.
 *
 * @param search The value being searched for, otherwise known as the needle.  An
 *               array may be used to designate multiple needles.
 * @param replace The replacement value that replaces found search values. An
 *                array may be used to designate multiple replacements.
 * @param subject The string or array being searched and replaced on, otherwise
 *                known as the haystack.
 *                
 *                If subject is an array, then the search and replace is performed
 *                with every entry of subject, and the return value is an array as
 *                well.
 * @param $count If passed, this will be set to the number of replacements
 *               performed.
 * @return Returns a string or an array of replacements.
 */
declare function str_ireplace(search: any[], replace: any[], subject: string, $count?: number): string;

/**
 * Case-insensitive version of str_replace.
 * 
 * This function returns a string or an array with all occurrences of search in
 * subject (ignoring case) replaced with the given replace value.  If you don't
 * need fancy replacing rules, you should generally use this function instead of
 * preg_replace with the i modifier.
 *
 * @param search The value being searched for, otherwise known as the needle.  An
 *               array may be used to designate multiple needles.
 * @param replace The replacement value that replaces found search values. An
 *                array may be used to designate multiple replacements.
 * @param subject The string or array being searched and replaced on, otherwise
 *                known as the haystack.
 *                
 *                If subject is an array, then the search and replace is performed
 *                with every entry of subject, and the return value is an array as
 *                well.
 * @param $count If passed, this will be set to the number of replacements
 *               performed.
 * @return Returns a string or an array of replacements.
 */
declare function str_ireplace(search: any[], replace: any[], subject: any[], $count?: number): string[];

/**
 * Case-insensitive version of str_replace.
 * 
 * This function returns a string or an array with all occurrences of search in
 * subject (ignoring case) replaced with the given replace value.  If you don't
 * need fancy replacing rules, you should generally use this function instead of
 * preg_replace with the i modifier.
 *
 * @param search The value being searched for, otherwise known as the needle.  An
 *               array may be used to designate multiple needles.
 * @param replace The replacement value that replaces found search values. An
 *                array may be used to designate multiple replacements.
 * @param subject The string or array being searched and replaced on, otherwise
 *                known as the haystack.
 *                
 *                If subject is an array, then the search and replace is performed
 *                with every entry of subject, and the return value is an array as
 *                well.
 * @param $count If passed, this will be set to the number of replacements
 *               performed.
 * @return Returns a string or an array of replacements.
 */
declare function str_ireplace(search: string, replace: any[], subject: string, $count?: number): string;

/**
 * Case-insensitive version of str_replace.
 * 
 * This function returns a string or an array with all occurrences of search in
 * subject (ignoring case) replaced with the given replace value.  If you don't
 * need fancy replacing rules, you should generally use this function instead of
 * preg_replace with the i modifier.
 *
 * @param search The value being searched for, otherwise known as the needle.  An
 *               array may be used to designate multiple needles.
 * @param replace The replacement value that replaces found search values. An
 *                array may be used to designate multiple replacements.
 * @param subject The string or array being searched and replaced on, otherwise
 *                known as the haystack.
 *                
 *                If subject is an array, then the search and replace is performed
 *                with every entry of subject, and the return value is an array as
 *                well.
 * @param $count If passed, this will be set to the number of replacements
 *               performed.
 * @return Returns a string or an array of replacements.
 */
declare function str_ireplace(search: string, replace: any[], subject: any[], $count?: number): string;

/**
 * Case-insensitive version of str_replace.
 * 
 * This function returns a string or an array with all occurrences of search in
 * subject (ignoring case) replaced with the given replace value.  If you don't
 * need fancy replacing rules, you should generally use this function instead of
 * preg_replace with the i modifier.
 *
 * @param search The value being searched for, otherwise known as the needle.  An
 *               array may be used to designate multiple needles.
 * @param replace The replacement value that replaces found search values. An
 *                array may be used to designate multiple replacements.
 * @param subject The string or array being searched and replaced on, otherwise
 *                known as the haystack.
 *                
 *                If subject is an array, then the search and replace is performed
 *                with every entry of subject, and the return value is an array as
 *                well.
 * @param $count If passed, this will be set to the number of replacements
 *               performed.
 * @return Returns a string or an array of replacements.
 */
declare function str_ireplace(search: string, replace: string, subject: any[], $count?: number): string;

/**
 * Pad a string to a certain length with another string
 * 
 * This functions returns the input string padded on the left, the right, or both
 * sides to the specified padding length. If the optional argument pad_string is
 * not supplied, the input is padded with spaces, otherwise it is padded with
 * characters from pad_string up to the limit.
 *
 * @param input The input string.
 * @param pad_length If the value of pad_length is negative, less than, or equal
 *                   to the length of the input string, no padding takes place.
 * @param pad_string The pad_string may be truncated if the required number of
 *                   padding characters can't be evenly divided by the
 *                   pad_string's length.
 * @param pad_type Optional argument pad_type can be STR_PAD_RIGHT, STR_PAD_LEFT,
 *                 or STR_PAD_BOTH. If pad_type is not specified it is assumed to
 *                 be STR_PAD_RIGHT.
 * @return Returns the padded string.
 */
declare function str_pad(input: string, pad_length: number, pad_string?: string, pad_type?: number): string;

/**
 * Repeat a string
 * 
 * Returns input repeated multiplier times.
 *
 * @param input The string to be repeated.
 * @param multiplier Number of time the input string should be repeated.
 *                   
 *                   multiplier has to be greater than or equal to 0. If the
 *                   multiplier is set to 0, the function will return an empty
 *                   string.
 * @return Returns the repeated string.
 */
declare function str_repeat(input: string, multiplier: number): string;

/**
 * Replace all occurrences of the search string with the replacement string
 * 
 * This function returns a string or an array with all occurrences of search in
 * subject replaced with the given replace value.
 * 
 * If you don't need fancy replacing rules (like regular expressions), you should
 * always use this function instead of preg_replace.
 *
 * @param search The value being searched for, otherwise known as the needle. An
 *               array may be used to designate multiple needles.
 * @param replace The replacement value that replaces found search values. An
 *                array may be used to designate multiple replacements.
 * @param subject The string or array being searched and replaced on, otherwise
 *                known as the haystack.
 *                
 *                If subject is an array, then the search and replace is performed
 *                with every entry of subject, and the return value is an array as
 *                well.
 * @param $count If passed, this will be set to the number of replacements
 *               performed.
 * @return This function returns a string or an array with the replaced values.
 */
declare function str_replace(search: string, replace: string, subject: string, $count?: number): string;

/**
 * Replace all occurrences of the search string with the replacement string
 * 
 * This function returns a string or an array with all occurrences of search in
 * subject replaced with the given replace value.
 * 
 * If you don't need fancy replacing rules (like regular expressions), you should
 * always use this function instead of preg_replace.
 *
 * @param search The value being searched for, otherwise known as the needle. An
 *               array may be used to designate multiple needles.
 * @param replace The replacement value that replaces found search values. An
 *                array may be used to designate multiple replacements.
 * @param subject The string or array being searched and replaced on, otherwise
 *                known as the haystack.
 *                
 *                If subject is an array, then the search and replace is performed
 *                with every entry of subject, and the return value is an array as
 *                well.
 * @param $count If passed, this will be set to the number of replacements
 *               performed.
 * @return This function returns a string or an array with the replaced values.
 */
declare function str_replace(search: any[], replace: string, subject: string, $count?: number): string;

/**
 * Replace all occurrences of the search string with the replacement string
 * 
 * This function returns a string or an array with all occurrences of search in
 * subject replaced with the given replace value.
 * 
 * If you don't need fancy replacing rules (like regular expressions), you should
 * always use this function instead of preg_replace.
 *
 * @param search The value being searched for, otherwise known as the needle. An
 *               array may be used to designate multiple needles.
 * @param replace The replacement value that replaces found search values. An
 *                array may be used to designate multiple replacements.
 * @param subject The string or array being searched and replaced on, otherwise
 *                known as the haystack.
 *                
 *                If subject is an array, then the search and replace is performed
 *                with every entry of subject, and the return value is an array as
 *                well.
 * @param $count If passed, this will be set to the number of replacements
 *               performed.
 * @return This function returns a string or an array with the replaced values.
 */
declare function str_replace(search: any[], replace: any[], subject: string, $count?: number): string;

/**
 * Replace all occurrences of the search string with the replacement string
 * 
 * This function returns a string or an array with all occurrences of search in
 * subject replaced with the given replace value.
 * 
 * If you don't need fancy replacing rules (like regular expressions), you should
 * always use this function instead of preg_replace.
 *
 * @param search The value being searched for, otherwise known as the needle. An
 *               array may be used to designate multiple needles.
 * @param replace The replacement value that replaces found search values. An
 *                array may be used to designate multiple replacements.
 * @param subject The string or array being searched and replaced on, otherwise
 *                known as the haystack.
 *                
 *                If subject is an array, then the search and replace is performed
 *                with every entry of subject, and the return value is an array as
 *                well.
 * @param $count If passed, this will be set to the number of replacements
 *               performed.
 * @return This function returns a string or an array with the replaced values.
 */
declare function str_replace(search: any[], replace: any[], subject: any[], $count?: number): string[];

/**
 * Replace all occurrences of the search string with the replacement string
 * 
 * This function returns a string or an array with all occurrences of search in
 * subject replaced with the given replace value.
 * 
 * If you don't need fancy replacing rules (like regular expressions), you should
 * always use this function instead of preg_replace.
 *
 * @param search The value being searched for, otherwise known as the needle. An
 *               array may be used to designate multiple needles.
 * @param replace The replacement value that replaces found search values. An
 *                array may be used to designate multiple replacements.
 * @param subject The string or array being searched and replaced on, otherwise
 *                known as the haystack.
 *                
 *                If subject is an array, then the search and replace is performed
 *                with every entry of subject, and the return value is an array as
 *                well.
 * @param $count If passed, this will be set to the number of replacements
 *               performed.
 * @return This function returns a string or an array with the replaced values.
 */
declare function str_replace(search: string, replace: any[], subject: string, $count?: number): string;

/**
 * Replace all occurrences of the search string with the replacement string
 * 
 * This function returns a string or an array with all occurrences of search in
 * subject replaced with the given replace value.
 * 
 * If you don't need fancy replacing rules (like regular expressions), you should
 * always use this function instead of preg_replace.
 *
 * @param search The value being searched for, otherwise known as the needle. An
 *               array may be used to designate multiple needles.
 * @param replace The replacement value that replaces found search values. An
 *                array may be used to designate multiple replacements.
 * @param subject The string or array being searched and replaced on, otherwise
 *                known as the haystack.
 *                
 *                If subject is an array, then the search and replace is performed
 *                with every entry of subject, and the return value is an array as
 *                well.
 * @param $count If passed, this will be set to the number of replacements
 *               performed.
 * @return This function returns a string or an array with the replaced values.
 */
declare function str_replace(search: string, replace: any[], subject: any[], $count?: number): string;

/**
 * Replace all occurrences of the search string with the replacement string
 * 
 * This function returns a string or an array with all occurrences of search in
 * subject replaced with the given replace value.
 * 
 * If you don't need fancy replacing rules (like regular expressions), you should
 * always use this function instead of preg_replace.
 *
 * @param search The value being searched for, otherwise known as the needle. An
 *               array may be used to designate multiple needles.
 * @param replace The replacement value that replaces found search values. An
 *                array may be used to designate multiple replacements.
 * @param subject The string or array being searched and replaced on, otherwise
 *                known as the haystack.
 *                
 *                If subject is an array, then the search and replace is performed
 *                with every entry of subject, and the return value is an array as
 *                well.
 * @param $count If passed, this will be set to the number of replacements
 *               performed.
 * @return This function returns a string or an array with the replaced values.
 */
declare function str_replace(search: string, replace: string, subject: any[], $count?: number): string;

/**
 * Perform the rot13 transform on a string
 * 
 * Performs the ROT13 encoding on the str argument and returns the resulting
 * string.
 * 
 * The ROT13 encoding simply shifts every letter by 13 places in the alphabet while
 * leaving non-alpha characters untouched. Encoding and decoding are done by the
 * same function, passing an encoded string as argument will return the original
 * version.
 *
 * @param str The input string.
 * @return Returns the ROT13 version of the given string.
 */
declare function str_rot13(str: string): string;

/**
 * Randomly shuffles a string
 *
 * @param str The input string.
 * @return Returns the shuffled string.
 */
declare function str_shuffle(str: string): string;

/**
 * Convert a string to an array
 * 
 * Converts a string to an array.
 *
 * @param str
 * @param split_length Maximum length of the chunk.
 * @return If the optional split_length parameter is specified, the returned array
 *         will be broken down into chunks with each being split_length in length,
 *         otherwise each chunk will be one character in length.
 *         
 *         false is returned if split_length is less than 1. If the split_length
 *         length exceeds the length of string, the entire string is returned as
 *         the first (and only) array element.
 */
declare function str_split(str: string, split_length?: number): string[];

/**
 * Return information about words used in a string
 * 
 * Counts the number of words inside string. If the optional format is not
 * specified, then the return value will be an integer representing the number of
 * words found. In the event the format is specified, the return value will be an
 * array, content of which is dependent on the format. The possible value for the
 * format and the resultant outputs are listed below.
 * 
 * For the purpose of this function, 'word' is defined as a locale dependent string
 * containing alphabetic characters, which also may contain, but not start with '
 * and - characters.
 *
 * @param string The string
 * @param format Specify the return value of this function. The current supported
 *               values are:    0 - returns the number of words found     1 -
 *               returns an array containing all the words found inside the string
 *               2 - returns an associative array, where the key is the numeric
 *               position of the word inside the string and the value is the
 *               actual word itself
 * @param charlist A list of additional characters which will be considered as
 *                 'word'
 * @return Returns an array or an integer, depending on the format chosen.
 */
declare function str_word_count(string: string, format?: number, charlist?: string): any; //number or array

/**
 * Binary safe case-insensitive string comparison
 * 
 * Binary safe case-insensitive string comparison.
 *
 * @param str1 The first string
 * @param str2 The second string
 * @return Returns  0 if str1 is less than str2;  0 if str1 is greater than str2,
 *         and 0 if they are equal.
 */
declare function strcasecmp(str1: string, str2: string): number;

/**
 * Binary safe string comparison
 *
 * @param str1 The first string.
 * @param str2 The second string.
 * @return Returns  0 if str1 is less than str2;  0 if str1 is greater than str2,
 *         and 0 if they are equal.
 */
declare function strcmp(str1: string, str2: string): number;

/**
 * Locale based string comparison
 * 
 * Note that this comparison is case sensitive, and unlike strcmp this function is
 * not binary safe.
 * 
 * strcoll uses the current locale for doing the comparisons.  If the current
 * locale is C or POSIX, this function is equivalent to strcmp.
 *
 * @param str1 The first string.
 * @param str2 The second string.
 * @return Returns  0 if str1 is less than str2;  0 if str1 is greater than str2,
 *         and 0 if they are equal.
 */
declare function strcoll(str1: string, str2: string): number;

/**
 * Find length of initial segment not matching mask
 * 
 * Returns the length of the initial segment of str1 which does not contain any of
 * the characters in str2.
 *
 * @param str1 The first string.
 * @param str2 The second string.
 * @param start The start position of the string to examine.
 * @param length The length of the string to examine.
 * @return Returns the length of the segment as an integer.
 */
declare function strcspn(str1: string, str2: string, start?: number, length?: number): number;

/**
 * Strip HTML and PHP tags from a string
 * 
 * This function tries to return a string with all NUL bytes, HTML and PHP tags
 * stripped from a given str.  It uses the same tag stripping state machine as the
 * fgetss function.
 *
 * @param str The input string.
 * @param allowable_tags You can use the optional second parameter to specify tags
 *                       which should not be stripped.
 *                       
 *                       HTML comments and PHP tags are also stripped. This is
 *                       hardcoded and can not be changed with allowable_tags.
 *                       
 *                       This parameter should not contain whitespace. strip_tags
 *                       sees a tag as a case-insensitive string between  and the
 *                       first whitespace or . It means that strip_tags("br/",
 *                       "br") returns an empty string.
 * @return Returns the stripped string.
 */
declare function strip_tags(str: string, allowable_tags?: string): string;

/**
 * Un-quote string quoted with addcslashes
 * 
 * Returns a string with backslashes stripped off. Recognizes C-like \n, \r ...,
 * octal and hexadecimal representation.
 *
 * @param str The string to be unescaped.
 * @return Returns the unescaped string.
 */
declare function stripcslashes(str: string): string;

/**
 * Find the position of the first occurrence of a case-insensitive substring in a
 * string
 * 
 * Find the numeric position of the first occurrence of needle in the haystack
 * string.
 * 
 * Unlike the strpos, stripos is case-insensitive.
 *
 * @param haystack The string to search in.
 * @param needle Note that the needle may be a string of one or more characters.
 *               
 *               If needle is not a string, it is converted to an integer and
 *               applied as the ordinal value of a character.
 * @param offset If specified, search will start this number of characters counted
 *               from the beginning of the string. Unlike strrpos and strripos,
 *               the offset cannot be negative.
 * @return Returns the position of where the needle exists relative to the
 *         beginnning of the haystack string (independent of offset). Also note
 *         that string positions start at 0, and not 1.
 *         
 *         Returns false if the needle was not found.
 */
declare function stripos(haystack: string, needle: string, offset?: number): number;

/**
 * Find the position of the first occurrence of a case-insensitive substring in a
 * string
 * 
 * Find the numeric position of the first occurrence of needle in the haystack
 * string.
 * 
 * Unlike the strpos, stripos is case-insensitive.
 *
 * @param haystack The string to search in.
 * @param needle Note that the needle may be a string of one or more characters.
 *               
 *               If needle is not a string, it is converted to an integer and
 *               applied as the ordinal value of a character.
 * @param offset If specified, search will start this number of characters counted
 *               from the beginning of the string. Unlike strrpos and strripos,
 *               the offset cannot be negative.
 * @return Returns the position of where the needle exists relative to the
 *         beginnning of the haystack string (independent of offset). Also note
 *         that string positions start at 0, and not 1.
 *         
 *         Returns false if the needle was not found.
 */
declare function stripos(haystack: string, needle: number, offset?: number): number;

/**
 * Un-quotes a quoted string
 * 
 * Un-quotes a quoted string.
 * 
 * If magic_quotes_sybase is on, no backslashes are stripped off but two
 * apostrophes are replaced by one instead.
 * 
 * An example use of stripslashes is when the PHP directive magic_quotes_gpc is on
 * (it was on by default before PHP 5.4), and you aren't inserting this data into a
 * place (such as a database) that requires escaping. For example, if you're simply
 * outputting data straight from an HTML form.
 *
 * @param str The input string.
 * @return Returns a string with backslashes stripped off. (\' becomes ' and so
 *         on.) Double backslashes (\\) are made into a single backslash (\).
 */
declare function stripslashes(str: string): string;

/**
 * Case-insensitive strstr
 * 
 * Returns all of haystack starting from and including the first occurrence of
 * needle to the end.
 *
 * @param haystack The string to search in
 * @param needle If needle is not a string, it is converted to an integer and
 *               applied as the ordinal value of a character.
 * @param before_needle If true, stristr returns the part of the haystack before
 *                      the first occurrence of the needle (excluding needle).
 * @return Returns the matched substring. If needle is not found, returns false.
 */
declare function stristr(haystack: string, needle: string, before_needle?: bool): string;

/**
 * Case-insensitive strstr
 * 
 * Returns all of haystack starting from and including the first occurrence of
 * needle to the end.
 *
 * @param haystack The string to search in
 * @param needle If needle is not a string, it is converted to an integer and
 *               applied as the ordinal value of a character.
 * @param before_needle If true, stristr returns the part of the haystack before
 *                      the first occurrence of the needle (excluding needle).
 * @return Returns the matched substring. If needle is not found, returns false.
 */
declare function stristr(haystack: string, needle: number, before_needle?: bool): string;

/**
 * Get string length
 * 
 * Returns the length of the given string.
 *
 * @param string The string being measured for length.
 * @return The length of the string on success, and 0 if the string is empty.
 */
declare function strlen(string: string): number;

/**
 * Case insensitive string comparisons using a "natural order" algorithm
 * 
 * This function implements a comparison algorithm that orders alphanumeric strings
 * in the way a human being would.  The behaviour of this function is similar to
 * strnatcmp, except that the comparison is not case sensitive.  For more
 * information see: Martin Pool's Natural Order String Comparison page.
 *
 * @param str1 The first string.
 * @param str2 The second string.
 * @return Similar to other string comparison functions, this one returns  0 if
 *         str1 is less than str2 0 if str1 is greater than str2, and 0 if they
 *         are equal.
 */
declare function strnatcasecmp(str1: string, str2: string): number;

/**
 * String comparisons using a "natural order" algorithm
 * 
 * This function implements a comparison algorithm that orders alphanumeric strings
 * in the way a human being would, this is described as a "natural ordering". Note
 * that this comparison is case sensitive.
 *
 * @param str1 The first string.
 * @param str2 The second string.
 * @return Similar to other string comparison functions, this one returns  0 if
 *         str1 is less than str2; 0 if str1 is greater than str2, and 0 if they
 *         are equal.
 */
declare function strnatcmp(str1: string, str2: string): number;

/**
 * Binary safe case-insensitive string comparison of the first n characters
 * 
 * This function is similar to strcasecmp, with the difference that you can specify
 * the (upper limit of the) number of characters from each string to be used in the
 * comparison.
 *
 * @param str1 The first string.
 * @param str2 The second string.
 * @param len The length of strings to be used in the comparison.
 * @return Returns  0 if str1 is less than str2;  0 if str1 is greater than str2,
 *         and 0 if they are equal.
 */
declare function strncasecmp(str1: string, str2: string, len: number): number;

/**
 * Binary safe string comparison of the first n characters
 * 
 * This function is similar to strcmp, with the difference that you can specify the
 * (upper limit of the) number of characters from each string to be used in the
 * comparison.
 * 
 * Note that this comparison is case sensitive.
 *
 * @param str1 The first string.
 * @param str2 The second string.
 * @param len Number of characters to use in the comparison.
 * @return Returns  0 if str1 is less than str2;  0 if str1 is greater than str2,
 *         and 0 if they are equal.
 */
declare function strncmp(str1: string, str2: string, len: number): number;

/**
 * Search a string for any of a set of characters
 * 
 * strpbrk searches the haystack string for a char_list.
 *
 * @param haystack The string where char_list is looked for.
 * @param char_list This parameter is case sensitive.
 * @return Returns a string starting from the character found, or false if it is
 *         not found.
 */
declare function strpbrk(haystack: string, char_list: string): string;

/**
 * Find the position of the first occurrence of a substring in a string
 * 
 * Find the numeric position of the first occurrence of needle in the haystack
 * string.
 *
 * @param haystack The string to search in.
 * @param needle If needle is not a string, it is converted to an integer and
 *               applied as the ordinal value of a character.
 * @param offset If specified, search will start this number of characters counted
 *               from the beginning of the string. Unlike strrpos and strripos,
 *               the offset cannot be negative.
 * @return Returns the position of where the needle exists relative to the
 *         beginning of the haystack string (independent of offset). Also note
 *         that string positions start at 0, and not 1.
 *         
 *         Returns false if the needle was not found.
 */
declare function strpos(haystack: string, needle: string, offset?: number): number;

/**
 * Find the position of the first occurrence of a substring in a string
 * 
 * Find the numeric position of the first occurrence of needle in the haystack
 * string.
 *
 * @param haystack The string to search in.
 * @param needle If needle is not a string, it is converted to an integer and
 *               applied as the ordinal value of a character.
 * @param offset If specified, search will start this number of characters counted
 *               from the beginning of the string. Unlike strrpos and strripos,
 *               the offset cannot be negative.
 * @return Returns the position of where the needle exists relative to the
 *         beginning of the haystack string (independent of offset). Also note
 *         that string positions start at 0, and not 1.
 *         
 *         Returns false if the needle was not found.
 */
declare function strpos(haystack: string, needle: number, offset?: number): number;

/**
 * Find the last occurrence of a character in a string
 * 
 * This function returns the portion of haystack which starts at the last
 * occurrence of needle and goes until the end of haystack.
 *
 * @param haystack The string to search in
 * @param needle If needle contains more than one character, only the first is
 *               used. This behavior is different from that of strstr.
 *               
 *               If needle is not a string, it is converted to an integer and
 *               applied as the ordinal value of a character.
 * @return This function returns the portion of string, or false if needle is not
 *         found.
 */
declare function strrchr(haystack: string, needle: string): string;

/**
 * Find the last occurrence of a character in a string
 * 
 * This function returns the portion of haystack which starts at the last
 * occurrence of needle and goes until the end of haystack.
 *
 * @param haystack The string to search in
 * @param needle If needle contains more than one character, only the first is
 *               used. This behavior is different from that of strstr.
 *               
 *               If needle is not a string, it is converted to an integer and
 *               applied as the ordinal value of a character.
 * @return This function returns the portion of string, or false if needle is not
 *         found.
 */
declare function strrchr(haystack: string, needle: number): string;

/**
 * Reverse a string
 * 
 * Returns string, reversed.
 *
 * @param string The string to be reversed.
 * @return Returns the reversed string.
 */
declare function strrev(string: string): string;

/**
 * Find the position of the last occurrence of a case-insensitive substring in a
 * string
 * 
 * Find the numeric position of the last occurrence of needle in the haystack
 * string.
 * 
 * Unlike the strrpos, strripos is case-insensitive.
 *
 * @param haystack The string to search in.
 * @param needle If needle is not a string, it is converted to an integer and
 *               applied as the ordinal value of a character.
 * @param offset If specified, search will start this number of characters counted
 *               from the beginning of the string. If the value is negative,
 *               search will instead start from that many characters from the end
 *               of the string, searching backwards.
 * @return Returns the position where the needle exists relative to the beginnning
 *         of the haystack string (independent of search direction or offset).
 *         Also note that string positions start at 0, and not 1.
 *         
 *         Returns false if the needle was not found.
 */
declare function strripos(haystack: string, needle: string, offset?: number): number;

/**
 * Find the position of the last occurrence of a case-insensitive substring in a
 * string
 * 
 * Find the numeric position of the last occurrence of needle in the haystack
 * string.
 * 
 * Unlike the strrpos, strripos is case-insensitive.
 *
 * @param haystack The string to search in.
 * @param needle If needle is not a string, it is converted to an integer and
 *               applied as the ordinal value of a character.
 * @param offset If specified, search will start this number of characters counted
 *               from the beginning of the string. If the value is negative,
 *               search will instead start from that many characters from the end
 *               of the string, searching backwards.
 * @return Returns the position where the needle exists relative to the beginnning
 *         of the haystack string (independent of search direction or offset).
 *         Also note that string positions start at 0, and not 1.
 *         
 *         Returns false if the needle was not found.
 */
declare function strripos(haystack: string, needle: number, offset?: number): number;

/**
 * Find the position of the last occurrence of a substring in a string
 * 
 * Find the numeric position of the last occurrence of needle in the haystack
 * string.
 *
 * @param haystack The string to search in.
 * @param needle If needle is not a string, it is converted to an integer and
 *               applied as the ordinal value of a character.
 * @param offset If specified, search will start this number of characters counted
 *               from the beginning of the string. If the value is negative,
 *               search will instead start from that many characters from the end
 *               of the string, searching backwards.
 * @return Returns the position where the needle exists relative to the beginnning
 *         of the haystack string (independent of search direction or offset).
 *         Also note that string positions start at 0, and not 1.
 *         
 *         Returns false if the needle was not found.
 */
declare function strrpos(haystack: string, needle: string, offset?: number): number;

/**
 * Find the position of the last occurrence of a substring in a string
 * 
 * Find the numeric position of the last occurrence of needle in the haystack
 * string.
 *
 * @param haystack The string to search in.
 * @param needle If needle is not a string, it is converted to an integer and
 *               applied as the ordinal value of a character.
 * @param offset If specified, search will start this number of characters counted
 *               from the beginning of the string. If the value is negative,
 *               search will instead start from that many characters from the end
 *               of the string, searching backwards.
 * @return Returns the position where the needle exists relative to the beginnning
 *         of the haystack string (independent of search direction or offset).
 *         Also note that string positions start at 0, and not 1.
 *         
 *         Returns false if the needle was not found.
 */
declare function strrpos(haystack: string, needle: number, offset?: number): number;

/**
 * Finds the length of the initial segment of a string consisting entirely of
 * characters contained within a given mask.
 * 
 * Finds the length of the initial segment of subject that contains only characters
 * from mask.
 * 
 * If start and length are omitted, then all of subject will be examined. If they
 * are included, then the effect will be the same as calling
 * strspn(substr($subject, $start, $length), $mask) (see  for more information).
 * 
 * The line of code:    ]]>   will assign 2 to $var, because the string "42" is the
 * initial segment of subject that consists only of characters contained within
 * "1234567890".
 *
 * @param subject The string to examine.
 * @param mask The list of allowable characters.
 * @param start The position in subject to start searching.
 *              
 *              If start is given and is non-negative, then strspn will begin
 *              examining subject at the start'th position. For instance, in the
 *              string 'abcdef', the character at position 0 is 'a', the character
 *              at position 2 is 'c', and so forth.
 *              
 *              If start is given and is negative, then strspn will begin
 *              examining subject at the start'th position from the end of
 *              subject.
 * @param length The length of the segment from subject to examine.
 *               
 *               If length is given and is non-negative, then subject will be
 *               examined for length characters after the starting position.
 *               
 *               If lengthis given and is negative, then subject will be examined
 *               from the starting position up to length characters from the end
 *               of subject.
 * @return Returns the length of the initial segment of subject which consists
 *         entirely of characters in mask.
 */
declare function strspn(subject: string, mask: string, start?: number, length?: number): number;

/**
 * Find the first occurrence of a string
 * 
 * Returns part of haystack string starting from and including the first occurrence
 * of needle to the end of haystack.
 * 
 * This function is case-sensitive. For case-insensitive searches, use stristr.
 * 
 * If you only want to determine if a particular needle occurs within haystack, use
 * the faster and less memory intensive function strpos instead.
 *
 * @param haystack The input string.
 * @param needle If needle is not a string, it is converted to an integer and
 *               applied as the ordinal value of a character.
 * @param before_needle If true, strstr returns the part of the haystack before
 *                      the first occurrence of the needle (excluding the needle).
 *                      
 * @return Returns the portion of string, or false if needle is not found.
 */
declare function strstr(haystack: string, needle: string, before_needle?: bool): string;

/**
 * Find the first occurrence of a string
 * 
 * Returns part of haystack string starting from and including the first occurrence
 * of needle to the end of haystack.
 * 
 * This function is case-sensitive. For case-insensitive searches, use stristr.
 * 
 * If you only want to determine if a particular needle occurs within haystack, use
 * the faster and less memory intensive function strpos instead.
 *
 * @param haystack The input string.
 * @param needle If needle is not a string, it is converted to an integer and
 *               applied as the ordinal value of a character.
 * @param before_needle If true, strstr returns the part of the haystack before
 *                      the first occurrence of the needle (excluding the needle).
 *                      
 * @return Returns the portion of string, or false if needle is not found.
 */
declare function strstr(haystack: string, needle: number, before_needle?: bool): string;

/**
 * Tokenize string
 * 
 * strtok splits a string (str) into smaller strings (tokens), with each token
 * being delimited by any character from token. That is, if you have a string like
 * "This is an example string" you could tokenize this string into its individual
 * words by using the space character as the token.
 * 
 * Note that only the first call to strtok uses the string argument. Every
 * subsequent call to strtok only needs the token to use, as it keeps track of
 * where it is in the current string.  To start over, or to tokenize a new string
 * you simply call strtok with the string argument again to initialize it.  Note
 * that you may put multiple tokens in the token parameter.  The string will be
 * tokenized when any one of the characters in the argument are found.
 *
 * @param str The string being split up into smaller strings (tokens).
 * @param token The delimiter used when splitting up str.
 * @return A string token.
 */
declare function strtok(str: string, token: string): string;

/**
 * Tokenize string
 * 
 * strtok splits a string (str) into smaller strings (tokens), with each token
 * being delimited by any character from token. That is, if you have a string like
 * "This is an example string" you could tokenize this string into its individual
 * words by using the space character as the token.
 * 
 * Note that only the first call to strtok uses the string argument. Every
 * subsequent call to strtok only needs the token to use, as it keeps track of
 * where it is in the current string.  To start over, or to tokenize a new string
 * you simply call strtok with the string argument again to initialize it.  Note
 * that you may put multiple tokens in the token parameter.  The string will be
 * tokenized when any one of the characters in the argument are found.
 *
 * @param token The delimiter used when splitting up str.
 * @return A string token.
 */
declare function strtok(token: string): string;

/**
 * Make a string lowercase
 * 
 * Returns string with all alphabetic characters converted to lowercase.
 * 
 * Note that 'alphabetic' is determined by the current locale. This means that in
 * i.e. the default "C" locale, characters such as umlaut-A (Ä) will not be
 * converted.
 *
 * @param str The input string.
 * @return Returns the lowercased string.
 */
declare function strtolower(str: string): string;

/**
 * Make a string uppercase
 * 
 * Returns string with all alphabetic characters converted to uppercase.
 * 
 * Note that 'alphabetic' is determined by the current locale. For instance, in the
 * default "C" locale characters such as umlaut-a (ä) will not be converted.
 *
 * @param string The input string.
 * @return Returns the uppercased string.
 */
declare function strtoupper(string: string): string;

/**
 * Translate characters or replace substrings
 * 
 * If given three arguments, this function returns a copy of str where all
 * occurrences of each (single-byte) character in from have been translated to the
 * corresponding character in to, i.e., every occurrence of $from[$n] has been
 * replaced with $to[$n], where $n is a valid offset in both arguments.
 * 
 * If from and to have different lengths, the extra characters in the longer of the
 * two are ignored. The length of str will be the same as the return value's.
 * 
 * If given two arguments, the second should be an array in the form array('from'
 * =&gt; 'to', ...). The return value is a string where all the occurrences of the
 * array keys have been replaced by the corresponding values. The longest keys will
 * be tried first. Once a substring has been replaced, its new value will not be
 * searched again.
 * 
 * In this case, the keys and the values may have any length, provided that there
 * is no empty key; additionaly, the length of the return value may differ from
 * that of str. However, this function will be the most efficient when all the keys
 * have the same size.
 *
 * @param str The string being translated.
 * @param from The string being translated to to.
 * @param to The string replacing from.
 * @return Returns the translated string.
 *         
 *         If replace_pairs contains a key which is an empty string (""), false
 *         will be returned.
 */
declare function strtr(str: string, from: string, to: string): string;

/**
 * Translate characters or replace substrings
 * 
 * If given three arguments, this function returns a copy of str where all
 * occurrences of each (single-byte) character in from have been translated to the
 * corresponding character in to, i.e., every occurrence of $from[$n] has been
 * replaced with $to[$n], where $n is a valid offset in both arguments.
 * 
 * If from and to have different lengths, the extra characters in the longer of the
 * two are ignored. The length of str will be the same as the return value's.
 * 
 * If given two arguments, the second should be an array in the form array('from'
 * =&gt; 'to', ...). The return value is a string where all the occurrences of the
 * array keys have been replaced by the corresponding values. The longest keys will
 * be tried first. Once a substring has been replaced, its new value will not be
 * searched again.
 * 
 * In this case, the keys and the values may have any length, provided that there
 * is no empty key; additionaly, the length of the return value may differ from
 * that of str. However, this function will be the most efficient when all the keys
 * have the same size.
 *
 * @param str The string being translated.
 * @param replace_pairs The replace_pairs parameter may be used instead of to and
 *                      from, in which case it's an array in the form array('from'
 *                      =&gt; 'to', ...).
 * @return Returns the translated string.
 *         
 *         If replace_pairs contains a key which is an empty string (""), false
 *         will be returned.
 */
declare function strtr(str: string, replace_pairs: Pct.PhpAssocArray): string;

/**
 * Return part of a string
 * 
 * Returns the portion of string specified by the start and length parameters.
 *
 * @param string The input string. Must be one character or longer.
 * @param start If start is non-negative, the returned string will start at the
 *              start'th position in string, counting from zero. For instance, in
 *              the string 'abcdef', the character at position 0 is 'a', the
 *              character at position 2 is 'c', and so forth.
 *              
 *              If start is negative, the returned string will start at the
 *              start'th character from the end of string.
 *              
 *              If string is less than or equal to start characters long, false
 *              will be returned.
 *              
 *              Using a negative start   ]]>
 * @param length If length is given and is positive, the string returned will
 *               contain at most length characters beginning from start (depending
 *               on the length of string).
 *               
 *               If length is given and is negative, then that many characters
 *               will be omitted from the end of string (after the start position
 *               has been calculated when a start is negative).  If start denotes
 *               the position of this truncation or beyond, false will be
 *               returned.
 *               
 *               If length is given and is 0, false or  an empty string will be
 *               returned.
 *               
 *               If length is omitted, the substring starting from start until the
 *               end of the string will be returned.
 * @return Returns the extracted part of string; , or an empty string.
 */
declare function substr(string: string, start: number, length?: number): string;

/**
 * Binary safe comparison of two strings from an offset, up to length characters
 * 
 * substr_compare compares main_str from position offset with str up to length
 * characters.
 *
 * @param main_str The main string being compared.
 * @param str The secondary string being compared.
 * @param offset The start position for the comparison. If negative, it starts
 *               counting from the end of the string.
 * @param length The length of the comparison. The default value is the largest of
 *               the length of the str compared to the length of main_str less the
 *               offset.
 * @param case_sensitivity
 * @return Returns  0 if main_str from position offset is less than str, 0 if it
 *         is greater than str, and 0 if they are equal. If offset is equal to or
 *         greater than the length of main_str or length is set and is less than
 *         1, substr_compare prints a warning and returns false.
 */
declare function substr_compare(main_str: string, str: string, offset: number, length?: number, case_sensitivity?: bool): number;

/**
 * Count the number of substring occurrences
 * 
 * substr_count returns the number of times the needle substring occurs in the
 * haystack string. Please note that needle is case sensitive.
 * 
 * This function doesn't count overlapped substrings. See the example below!
 *
 * @param haystack The string to search in
 * @param needle The substring to search for
 * @param offset The offset where to start counting
 * @param length The maximum length after the specified offset to search for the
 *               substring. It outputs a warning if the offset plus the length is
 *               greater than the haystack length.
 * @return This function returns an integer.
 */
declare function substr_count(haystack: string, needle: string, offset?: number, length?: number): number;

/**
 * Replace text within a portion of a string
 * 
 * substr_replace replaces a copy of string delimited by the start and (optionally)
 * length parameters with the string given in replacement.
 *
 * @param string The input string.
 *               
 *               An array of strings can be provided, in which case the
 *               replacements will occur on each string in turn. In this case, the
 *               replacement, start and length parameters may be provided either
 *               as scalar values to be applied to each input string in turn, or
 *               as arrays, in which case the corresponding array element will be
 *               used for each input string.
 * @param replacement The replacement string.
 * @param start If start is positive, the replacing will begin at the start'th
 *              offset into string.
 *              
 *              If start is negative, the replacing will begin at the start'th
 *              character from the end of string.
 * @param length If given and is positive, it represents the length of the portion
 *               of string which is to be replaced. If it is negative, it
 *               represents the number of characters from the end of string at
 *               which to stop replacing. If it is not given, then it will default
 *               to strlen( string ); i.e. end the replacing at the end of string.
 *               Of course, if length is zero then this function will have the
 *               effect of inserting replacement into string at the given start
 *               offset.
 * @return The result string is returned. If string is an array then array is
 *         returned.
 */
declare function substr_replace(string: string, replacement: string, start: number, length?: number): string;

/**
 * Replace text within a portion of a string
 * 
 * substr_replace replaces a copy of string delimited by the start and (optionally)
 * length parameters with the string given in replacement.
 *
 * @param string The input string.
 *               
 *               An array of strings can be provided, in which case the
 *               replacements will occur on each string in turn. In this case, the
 *               replacement, start and length parameters may be provided either
 *               as scalar values to be applied to each input string in turn, or
 *               as arrays, in which case the corresponding array element will be
 *               used for each input string.
 * @param replacement The replacement string.
 * @param start If start is positive, the replacing will begin at the start'th
 *              offset into string.
 *              
 *              If start is negative, the replacing will begin at the start'th
 *              character from the end of string.
 * @param length If given and is positive, it represents the length of the portion
 *               of string which is to be replaced. If it is negative, it
 *               represents the number of characters from the end of string at
 *               which to stop replacing. If it is not given, then it will default
 *               to strlen( string ); i.e. end the replacing at the end of string.
 *               Of course, if length is zero then this function will have the
 *               effect of inserting replacement into string at the given start
 *               offset.
 * @return The result string is returned. If string is an array then array is
 *         returned.
 */
declare function substr_replace(string: string[], replacement: string, start: number, length?: number): string[];

/**
 * Replace text within a portion of a string
 * 
 * substr_replace replaces a copy of string delimited by the start and (optionally)
 * length parameters with the string given in replacement.
 *
 * @param string The input string.
 *               
 *               An array of strings can be provided, in which case the
 *               replacements will occur on each string in turn. In this case, the
 *               replacement, start and length parameters may be provided either
 *               as scalar values to be applied to each input string in turn, or
 *               as arrays, in which case the corresponding array element will be
 *               used for each input string.
 * @param replacement The replacement string.
 * @param start If start is positive, the replacing will begin at the start'th
 *              offset into string.
 *              
 *              If start is negative, the replacing will begin at the start'th
 *              character from the end of string.
 * @param length If given and is positive, it represents the length of the portion
 *               of string which is to be replaced. If it is negative, it
 *               represents the number of characters from the end of string at
 *               which to stop replacing. If it is not given, then it will default
 *               to strlen( string ); i.e. end the replacing at the end of string.
 *               Of course, if length is zero then this function will have the
 *               effect of inserting replacement into string at the given start
 *               offset.
 * @return The result string is returned. If string is an array then array is
 *         returned.
 */
declare function substr_replace(string: string[], replacement: string[], start: number, length?: number): string[];

/**
 * Replace text within a portion of a string
 * 
 * substr_replace replaces a copy of string delimited by the start and (optionally)
 * length parameters with the string given in replacement.
 *
 * @param string The input string.
 *               
 *               An array of strings can be provided, in which case the
 *               replacements will occur on each string in turn. In this case, the
 *               replacement, start and length parameters may be provided either
 *               as scalar values to be applied to each input string in turn, or
 *               as arrays, in which case the corresponding array element will be
 *               used for each input string.
 * @param replacement The replacement string.
 * @param start If start is positive, the replacing will begin at the start'th
 *              offset into string.
 *              
 *              If start is negative, the replacing will begin at the start'th
 *              character from the end of string.
 * @param length If given and is positive, it represents the length of the portion
 *               of string which is to be replaced. If it is negative, it
 *               represents the number of characters from the end of string at
 *               which to stop replacing. If it is not given, then it will default
 *               to strlen( string ); i.e. end the replacing at the end of string.
 *               Of course, if length is zero then this function will have the
 *               effect of inserting replacement into string at the given start
 *               offset.
 * @return The result string is returned. If string is an array then array is
 *         returned.
 */
declare function substr_replace(string: string[], replacement: string, start: number[], length?: number): string[];

/**
 * Replace text within a portion of a string
 * 
 * substr_replace replaces a copy of string delimited by the start and (optionally)
 * length parameters with the string given in replacement.
 *
 * @param string The input string.
 *               
 *               An array of strings can be provided, in which case the
 *               replacements will occur on each string in turn. In this case, the
 *               replacement, start and length parameters may be provided either
 *               as scalar values to be applied to each input string in turn, or
 *               as arrays, in which case the corresponding array element will be
 *               used for each input string.
 * @param replacement The replacement string.
 * @param start If start is positive, the replacing will begin at the start'th
 *              offset into string.
 *              
 *              If start is negative, the replacing will begin at the start'th
 *              character from the end of string.
 * @param length If given and is positive, it represents the length of the portion
 *               of string which is to be replaced. If it is negative, it
 *               represents the number of characters from the end of string at
 *               which to stop replacing. If it is not given, then it will default
 *               to strlen( string ); i.e. end the replacing at the end of string.
 *               Of course, if length is zero then this function will have the
 *               effect of inserting replacement into string at the given start
 *               offset.
 * @return The result string is returned. If string is an array then array is
 *         returned.
 */
declare function substr_replace(string: string[], replacement: string[], start: number[], length?: number): string[];

/**
 * Replace text within a portion of a string
 * 
 * substr_replace replaces a copy of string delimited by the start and (optionally)
 * length parameters with the string given in replacement.
 *
 * @param string The input string.
 *               
 *               An array of strings can be provided, in which case the
 *               replacements will occur on each string in turn. In this case, the
 *               replacement, start and length parameters may be provided either
 *               as scalar values to be applied to each input string in turn, or
 *               as arrays, in which case the corresponding array element will be
 *               used for each input string.
 * @param replacement The replacement string.
 * @param start If start is positive, the replacing will begin at the start'th
 *              offset into string.
 *              
 *              If start is negative, the replacing will begin at the start'th
 *              character from the end of string.
 * @param length If given and is positive, it represents the length of the portion
 *               of string which is to be replaced. If it is negative, it
 *               represents the number of characters from the end of string at
 *               which to stop replacing. If it is not given, then it will default
 *               to strlen( string ); i.e. end the replacing at the end of string.
 *               Of course, if length is zero then this function will have the
 *               effect of inserting replacement into string at the given start
 *               offset.
 * @return The result string is returned. If string is an array then array is
 *         returned.
 */
declare function substr_replace(string: string[], replacement: string, start: number, length?: number[]): string[];

/**
 * Replace text within a portion of a string
 * 
 * substr_replace replaces a copy of string delimited by the start and (optionally)
 * length parameters with the string given in replacement.
 *
 * @param string The input string.
 *               
 *               An array of strings can be provided, in which case the
 *               replacements will occur on each string in turn. In this case, the
 *               replacement, start and length parameters may be provided either
 *               as scalar values to be applied to each input string in turn, or
 *               as arrays, in which case the corresponding array element will be
 *               used for each input string.
 * @param replacement The replacement string.
 * @param start If start is positive, the replacing will begin at the start'th
 *              offset into string.
 *              
 *              If start is negative, the replacing will begin at the start'th
 *              character from the end of string.
 * @param length If given and is positive, it represents the length of the portion
 *               of string which is to be replaced. If it is negative, it
 *               represents the number of characters from the end of string at
 *               which to stop replacing. If it is not given, then it will default
 *               to strlen( string ); i.e. end the replacing at the end of string.
 *               Of course, if length is zero then this function will have the
 *               effect of inserting replacement into string at the given start
 *               offset.
 * @return The result string is returned. If string is an array then array is
 *         returned.
 */
declare function substr_replace(string: string[], replacement: string[], start: number, length?: number[]): string[];

/**
 * Replace text within a portion of a string
 * 
 * substr_replace replaces a copy of string delimited by the start and (optionally)
 * length parameters with the string given in replacement.
 *
 * @param string The input string.
 *               
 *               An array of strings can be provided, in which case the
 *               replacements will occur on each string in turn. In this case, the
 *               replacement, start and length parameters may be provided either
 *               as scalar values to be applied to each input string in turn, or
 *               as arrays, in which case the corresponding array element will be
 *               used for each input string.
 * @param replacement The replacement string.
 * @param start If start is positive, the replacing will begin at the start'th
 *              offset into string.
 *              
 *              If start is negative, the replacing will begin at the start'th
 *              character from the end of string.
 * @param length If given and is positive, it represents the length of the portion
 *               of string which is to be replaced. If it is negative, it
 *               represents the number of characters from the end of string at
 *               which to stop replacing. If it is not given, then it will default
 *               to strlen( string ); i.e. end the replacing at the end of string.
 *               Of course, if length is zero then this function will have the
 *               effect of inserting replacement into string at the given start
 *               offset.
 * @return The result string is returned. If string is an array then array is
 *         returned.
 */
declare function substr_replace(string: string[], replacement: string, start: number[], length?: number[]): string[];

/**
 * Replace text within a portion of a string
 * 
 * substr_replace replaces a copy of string delimited by the start and (optionally)
 * length parameters with the string given in replacement.
 *
 * @param string The input string.
 *               
 *               An array of strings can be provided, in which case the
 *               replacements will occur on each string in turn. In this case, the
 *               replacement, start and length parameters may be provided either
 *               as scalar values to be applied to each input string in turn, or
 *               as arrays, in which case the corresponding array element will be
 *               used for each input string.
 * @param replacement The replacement string.
 * @param start If start is positive, the replacing will begin at the start'th
 *              offset into string.
 *              
 *              If start is negative, the replacing will begin at the start'th
 *              character from the end of string.
 * @param length If given and is positive, it represents the length of the portion
 *               of string which is to be replaced. If it is negative, it
 *               represents the number of characters from the end of string at
 *               which to stop replacing. If it is not given, then it will default
 *               to strlen( string ); i.e. end the replacing at the end of string.
 *               Of course, if length is zero then this function will have the
 *               effect of inserting replacement into string at the given start
 *               offset.
 * @return The result string is returned. If string is an array then array is
 *         returned.
 */
declare function substr_replace(string: string[], replacement: string[], start: number[], length?: number[]): string[];

/**
 * Strip whitespace (or other characters) from the beginning and end of a string
 * 
 * This function returns a string with whitespace stripped from the beginning and
 * end of str. Without the second parameter, trim will strip these characters:    
 * " " (ASCII 32 (0x20)), an ordinary space.     "\t" (ASCII 9 (0x09)), a tab.    
 * "\n" (ASCII 10 (0x0A)), a new line (line feed).     "\r" (ASCII 13 (0x0D)), a
 * carriage return.     "\0" (ASCII 0 (0x00)), the NUL-byte.      "\x0B" (ASCII 11
 * (0x0B)), a vertical tab.
 *
 * @param str The string that will be trimmed.
 * @param charlist Optionally, the stripped characters can also be specified using
 *                 the charlist parameter. Simply list all characters that you
 *                 want to be stripped. With .. you can specify a range of
 *                 characters.
 * @return The trimmed string.
 */
declare function trim(str: string, charlist?: string): string;

/**
 * Make a string's first character uppercase
 * 
 * Returns a string with the first character of str capitalized, if that character
 * is alphabetic.
 * 
 * Note that 'alphabetic' is determined by the current locale. For instance, in the
 * default "C" locale characters such as umlaut-a (ä) will not be converted.
 *
 * @param str The input string.
 * @return Returns the resulting string.
 */
declare function ucfirst(str: string): string;

/**
 * Uppercase the first character of each word in a string
 * 
 * Returns a string with the first character of each word in str capitalized, if
 * that character is alphabetic.
 * 
 * The definition of a word is any string of characters that is immediately after a
 * whitespace (These are: space, form-feed, newline, carriage return, horizontal
 * tab, and vertical tab).
 *
 * @param str The input string.
 * @return Returns the modified string.
 */
declare function ucwords(str: string): string;

/**
 * Write a formatted string to a stream
 * 
 * Write a string produced according to format to the stream resource specified by
 * handle.
 * 
 * Operates as fprintf but accepts an array of arguments, rather than a variable
 * number of arguments.
 *
 * @param handle 
 * @param format See sprintf for a description of format.
 * @param args 
 * @return Returns the length of the outputted string.
 */
declare function vfprintf(handle: Pct.PhpResource, format: string, args: Array): number;

/**
 * Output a formatted string
 * 
 * Display array values as a formatted string according to format (which is
 * described in the documentation for sprintf).
 * 
 * Operates as printf but accepts an array of arguments, rather than a variable
 * number of arguments.
 *
 * @param format See sprintf for a description of format.
 * @param args 
 * @return Returns the length of the outputted string.
 */
declare function vprintf(format: string, args: Array): number;

/**
 * Return a formatted string
 * 
 * Operates as sprintf but accepts an array of arguments, rather than a variable
 * number of arguments.
 *
 * @param format See sprintf for a description of format.
 * @param args 
 * @return Return array values as a formatted string according to format (which is
 *         described in the documentation for sprintf).
 */
declare function vsprintf(format: string, args: Array): string;

/**
 * Wraps a string to a given number of characters
 * 
 * Wraps a string to a given number of characters using a string break character.
 *
 * @param str The input string.
 * @param width The number of characters at which the string will be wrapped.
 * @param break_ The line is broken using the optional break parameter.
 * @param cut If the cut is set to true, the string is always wrapped at or before
 *            the specified width.  So if you have a word that is larger than the
 *            given width, it is broken apart. (See second example).
 * @return Returns the given string wrapped at the specified length.
 */
declare function wordwrap(str: string, width?: number, break_?: string, cut?: bool): string;

//--------------------------------------------------------------------------------
// tokenizer
//--------------------------------------------------------------------------------

/*
 * The tokenizer functions provide an interface to the PHP tokenizer embedded in
 * the Zend Engine. Using these functions you may write your own PHP source
 * analyzing or modification tools without having to deal with the language
 * specification at the lexical level.
 * 
 * See also the appendix about tokens.
 */
declare var T_ABSTRACT: number;
declare var T_AND_EQUAL: number;
declare var T_ARRAY: number;
declare var T_ARRAY_CAST: number;
declare var T_AS: number;
declare var T_BAD_CHARACTER: number;
declare var T_BOOLEAN_AND: number;
declare var T_BOOLEAN_OR: number;
declare var T_BOOL_CAST: number;
declare var T_BREAK: number;
declare var T_CALLABLE: number;
declare var T_CASE: number;
declare var T_CATCH: number;
declare var T_CHARACTER: number;
declare var T_CLASS: number;
declare var T_CLASS_C: number;
declare var T_CLONE: number;
declare var T_CLOSE_TAG: number;
declare var T_COMMENT: number;
declare var T_CONCAT_EQUAL: number;
declare var T_CONST: number;
declare var T_CONSTANT_ENCAPSED_STRING: number;
declare var T_CONTINUE: number;
declare var T_CURLY_OPEN: number;
declare var T_DEC: number;
declare var T_DECLARE: number;
declare var T_DEFAULT: number;
declare var T_DIR: number;
declare var T_DIV_EQUAL: number;
declare var T_DNUMBER: number;
declare var T_DOC_COMMENT: number;
declare var T_DO: number;
declare var T_DOLLAR_OPEN_CURLY_BRACES: number;
declare var T_DOUBLE_ARROW: number;
declare var T_DOUBLE_CAST: number;
declare var T_DOUBLE_COLON: number;
declare var T_ECHO: number;
declare var T_ELSE: number;
declare var T_ELSEIF: number;
declare var T_EMPTY: number;
declare var T_ENCAPSED_AND_WHITESPACE: number;
declare var T_ENDDECLARE: number;
declare var T_ENDFOR: number;
declare var T_ENDFOREACH: number;
declare var T_ENDIF: number;
declare var T_ENDSWITCH: number;
declare var T_ENDWHILE: number;
declare var T_END_HEREDOC: number;
declare var T_EVAL: number;
declare var T_EXIT: number;
declare var T_EXTENDS: number;
declare var T_FILE: number;
declare var T_FINAL: number;
declare var T_FOR: number;
declare var T_FOREACH: number;
declare var T_FUNCTION: number;
declare var T_FUNC_C: number;
declare var T_GLOBAL: number;
declare var T_GOTO: number;
declare var T_HALT_COMPILER: number;
declare var T_IF: number;
declare var T_IMPLEMENTS: number;
declare var T_INC: number;
declare var T_INCLUDE: number;
declare var T_INCLUDE_ONCE: number;
declare var T_INLINE_HTML: number;
declare var T_INSTANCEOF: number;
declare var T_INSTEADOF: number;
declare var T_INT_CAST: number;
declare var T_INTERFACE: number;
declare var T_ISSET: number;
declare var T_IS_EQUAL: number;
declare var T_IS_GREATER_OR_EQUAL: number;
declare var T_IS_IDENTICAL: number;
declare var T_IS_NOT_EQUAL: number;
declare var T_IS_NOT_IDENTICAL: number;
declare var T_IS_SMALLER_OR_EQUAL: number;
declare var T_LINE: number;
declare var T_LIST: number;
declare var T_LNUMBER: number;
declare var T_LOGICAL_AND: number;
declare var T_LOGICAL_OR: number;
declare var T_LOGICAL_XOR: number;
declare var T_METHOD_C: number;
declare var T_MINUS_EQUAL: number;
declare var T_ML_COMMENT: number;
declare var T_MOD_EQUAL: number;
declare var T_MUL_EQUAL: number;
declare var T_NAMESPACE: number;
declare var T_NS_C: number;
declare var T_NS_SEPARATOR: number;
declare var T_NEW: number;
declare var T_NUM_STRING: number;
declare var T_OBJECT_CAST: number;
declare var T_OBJECT_OPERATOR: number;
declare var T_OLD_FUNCTION: number;
declare var T_OPEN_TAG: number;
declare var T_OPEN_TAG_WITH_ECHO: number;
declare var T_OR_EQUAL: number;
declare var T_PAAMAYIM_NEKUDOTAYIM: number;
declare var T_PLUS_EQUAL: number;
declare var T_PRINT: number;
declare var T_PRIVATE: number;
declare var T_PUBLIC: number;
declare var T_PROTECTED: number;
declare var T_REQUIRE: number;
declare var T_REQUIRE_ONCE: number;
declare var T_RETURN: number;
declare var T_SL: number;
declare var T_SL_EQUAL: number;
declare var T_SR: number;
declare var T_SR_EQUAL: number;
declare var T_START_HEREDOC: number;
declare var T_STATIC: number;
declare var T_STRING: number;
declare var T_STRING_CAST: number;
declare var T_STRING_VARNAME: number;
declare var T_SWITCH: number;
declare var T_THROW: number;
declare var T_TRAIT: number;
declare var T_TRAIT_C: number;
declare var T_TRY: number;
declare var T_UNSET: number;
declare var T_UNSET_CAST: number;
declare var T_USE: number;
declare var T_VAR: number;
declare var T_VARIABLE: number;
declare var T_WHILE: number;
declare var T_WHITESPACE: number;
declare var T_XOR_EQUAL: number;


/**
 * Split given source into PHP tokens
 * 
 * token_get_all parses the given source string into PHP language tokens using the
 * Zend engines lexical scanner.
 * 
 * For a list of parser tokens, see , or use token_name to translate a token value
 * into its string representation.
 *
 * @param source The PHP source to parse.
 * @return An array of token identifiers. Each individual token identifier is
 *         either a single character (i.e.: ;, ., , !, etc...), or a three element
 *         array containing the token index in element 0, the string content of
 *         the original token in element 1 and the line number in element 2.
 */
declare function token_get_all(source: string): Array;

/**
 * Get the symbolic name of a given PHP token
 * 
 * token_name gets the symbolic name for a PHP token value.
 *
 * @param token The token value.
 * @return The symbolic name of the given token.
 */
declare function token_name(token: number): string;

//--------------------------------------------------------------------------------
// url
//--------------------------------------------------------------------------------

/*
 * Dealing with URL strings: encoding, decoding and parsing.
 */
declare var PHP_QUERY_RFC1738: number;
declare var PHP_QUERY_RFC3986: number;

declare var PHP_URL_FRAGMENT: number;
declare var PHP_URL_HOST: number;
declare var PHP_URL_PASS: number;
declare var PHP_URL_PATH: number;
declare var PHP_URL_PORT: number;
declare var PHP_URL_QUERY: number;
declare var PHP_URL_SCHEME: number;
declare var PHP_URL_USER: number;


/**
 * Decodes data encoded with MIME base64
 * 
 * Decodes a base64 encoded data.
 *
 * @param data The encoded data.
 * @param strict Returns false if input contains character from outside the base64
 *               alphabet.
 * @return Returns the original data. The returned data may be binary.
 */
declare function base64_decode(data: string, strict?: bool): string;

/**
 * Encodes data with MIME base64
 * 
 * Encodes the given data with base64.
 * 
 * This encoding is designed to make binary data survive transport through
 * transport layers that are not 8-bit clean, such as mail bodies.
 * 
 * Base64-encoded data takes about 33% more space than the original data.
 *
 * @param data The data to encode.
 * @return The encoded data, as a string.
 */
declare function base64_encode(data: string): string;

/**
 * Fetches all the headers sent by the server in response to a HTTP request
 * 
 * get_headers returns an array with the headers sent by the server in response to
 * a HTTP request.
 *
 * @param url The target URL.
 * @param format If the optional format parameter is set to non-zero, get_headers
 *               parses the response and sets the array's keys.
 * @return Returns an indexed or associative array with the headers, or false on
 *         failure.
 */
declare function get_headers(url: string, format?: number): Array;

/**
 * Extracts all meta tag content attributes from a file and returns an array
 * 
 * Opens filename and parses it line by line for meta tags in the file. The parsing
 * stops at /head.
 *
 * @param filename The path to the HTML file, as a string. This can be a local
 *                 file or an URL.
 *                 
 *                 What get_meta_tags parses        ]]>   (pay attention to line
 *                 endings - PHP uses a native function to parse the input, so a
 *                 Mac file won't work on Unix).
 * @param use_include_path Setting use_include_path to true will result in PHP
 *                         trying to open the file along the standard include path
 *                         as per the include_path directive. This is used for
 *                         local files, not URLs.
 * @return Returns an array with all the parsed meta tags.
 *         
 *         The value of the name property becomes the key, the value of the
 *         content property becomes the value of the returned array, so you can
 *         easily use standard array functions to traverse it or access single
 *         values. Special characters in the value of the name property are
 *         substituted with '_', the rest is converted to lower case.  If two meta
 *         tags have the same name, only the last one is returned.
 */
declare function get_meta_tags(filename: string, use_include_path?: bool): Pct.PhpAssocArray;

/**
 * Generate URL-encoded query string
 * 
 * Generates a URL-encoded query string from the associative (or indexed) array
 * provided.
 *
 * @param query_data May be an array or object containing properties.
 *                   
 *                   If query_data is an array, it may be a simple one-dimensional
 *                   structure, or an array of arrays (which in turn may contain
 *                   other arrays).
 *                   
 *                   If query_data is an object, then only public properties will
 *                   be incorporated into the result.
 * @param numeric_prefix If numeric indices are used in the base array and this
 *                       parameter is provided, it will be prepended to the
 *                       numeric index for elements in the base array only.
 *                       
 *                       This is meant to allow for legal variable names when the
 *                       data is decoded by PHP or another CGI application later
 *                       on.
 * @param arg_separator arg_separator.output is used to separate arguments, unless
 *                      this parameter is specified, and is then used.
 * @param enc_type By default, PHP_QUERY_RFC1738.
 *                 
 *                 If enc_type is PHP_QUERY_RFC1738, then encoding is performed
 *                 per RFC 1738 and the application/x-www-form-urlencoded media
 *                 type, which implies that spaces are encoded as plus (+) signs.
 *                 
 *                 If enc_type is PHP_QUERY_RFC3986, then encoding is performed
 *                 according to RFC 3986, and spaces will be percent encoded
 *                 (%20).
 * @return Returns a URL-encoded string.
 */
declare function http_build_query(query_data: any, numeric_prefix?: string, arg_separator?: string, enc_type?: number): string;

/**
 * Parse a URL and return its components
 * 
 * This function parses a URL and returns an associative array containing any of
 * the various components of the URL that are present.
 * 
 * This function is not meant to validate the given URL, it only breaks it up into
 * the above listed parts. Partial URLs are also accepted, parse_url tries its best
 * to parse them correctly.
 *
 * @param url The URL to parse. Invalid characters are replaced by _.
 * @return On seriously malformed URLs, parse_url may return false.
 *         
 *         If the component parameter is omitted, an associative array is
 *         returned. At least one element will be present within the array.
 *         Potential keys within this array are:    scheme - e.g. http     host   
 *         port     user     pass     path     query - after the question mark ?  
 *         fragment - after the hashmark #
 *         
 *         If the component parameter is specified, parse_url returns a string (or
 *         an integer, in the case of PHP_URL_PORT) instead of an array. If the
 *         requested component doesn't exist within the given URL,  will be
 *         returned.
 */
declare function parse_url(url: string): Pct.PhpAssocArray;

/**
 * Parse a URL and return its components
 * 
 * This function parses a URL and returns an associative array containing any of
 * the various components of the URL that are present.
 * 
 * This function is not meant to validate the given URL, it only breaks it up into
 * the above listed parts. Partial URLs are also accepted, parse_url tries its best
 * to parse them correctly.
 *
 * @param url The URL to parse. Invalid characters are replaced by _.
 * @param component Specify one of PHP_URL_SCHEME, PHP_URL_HOST, PHP_URL_PORT,
 *                  PHP_URL_USER, PHP_URL_PASS, PHP_URL_PATH, PHP_URL_QUERY or
 *                  PHP_URL_FRAGMENT to retrieve just a specific URL component as
 *                  a string (except when PHP_URL_PORT is given, in which case the
 *                  return value will be an integer).
 * @return On seriously malformed URLs, parse_url may return false.
 *         
 *         If the component parameter is omitted, an associative array is
 *         returned. At least one element will be present within the array.
 *         Potential keys within this array are:    scheme - e.g. http     host   
 *         port     user     pass     path     query - after the question mark ?  
 *         fragment - after the hashmark #
 *         
 *         If the component parameter is specified, parse_url returns a string (or
 *         an integer, in the case of PHP_URL_PORT) instead of an array. If the
 *         requested component doesn't exist within the given URL,  will be
 *         returned.
 */
declare function parse_url(url: string, component: number): any;

/**
 * Decode URL-encoded strings
 * 
 * Returns a string in which the sequences with percent (%) signs followed by two
 * hex digits have been replaced with literal characters.
 *
 * @param str The URL to be decoded.
 * @return Returns the decoded URL, as a string.
 */
declare function rawurldecode(str: string): string;

/**
 * URL-encode according to RFC 3986
 * 
 * Encodes the given string according to RFC 3986.
 *
 * @param str The URL to be encoded.
 * @return Returns a string in which all non-alphanumeric characters except -_.~
 *         have been replaced with a percent (%) sign followed by two hex digits. 
 *         This is the encoding described in RFC 3986 for protecting literal
 *         characters from being interpreted as special URL delimiters, and for
 *         protecting URLs from being mangled by transmission media with character
 *         conversions (like some email systems).   Prior to PHP 5.3.0,
 *         rawurlencode encoded tildes (~) as per RFC 1738.
 *         
 *         Prior to PHP 5.3.0, rawurlencode encoded tildes (~) as per RFC 1738.
 */
declare function rawurlencode(str: string): string;

/**
 * Decodes URL-encoded string
 * 
 * Decodes any %## encoding in the given string. Plus symbols ('+') are decoded to
 * a space character.
 *
 * @param str The string to be decoded.
 * @return Returns the decoded string.
 */
declare function urldecode(str: string): string;

/**
 * URL-encodes string
 * 
 * This function is convenient when encoding a string to be used in a query part of
 * a URL, as a convenient way to pass variables to the next page.
 *
 * @param str The string to be encoded.
 * @return Returns a string in which all non-alphanumeric characters except -_.
 *         have been replaced with a percent (%) sign followed by two hex digits
 *         and spaces encoded as plus (+) signs.  It is encoded the same way that
 *         the posted data from a WWW form is encoded, that is the same way as in
 *         application/x-www-form-urlencoded media type. This differs from the RFC
 *         3986 encoding (see rawurlencode) in that for historical reasons, spaces
 *         are encoded as plus (+) signs.
 */
declare function urlencode(str: string): string;

//--------------------------------------------------------------------------------
// var
//--------------------------------------------------------------------------------

/*
 * For information on how variables behave, see the Variables entry in the Language
 * Reference section of the manual.
 */

/**
 * Get the boolean value of a variable
 * 
 * Returns the boolean value of var.
 *
 * @param var_ The scalar value being converted to a boolean.
 * @return The boolean value of var.
 */
declare function boolval(var_: any): bool;

/**
 * Dumps a string representation of an internal zend value to output
 * 
 * Dumps a string representation of an internal zend value to output.
 *
 * @param variable The variable being evaluated.
 */
declare function debug_zval_dump(variable: any);

/**
 * Determine whether a variable is empty
 * 
 * Determine whether a variable is considered to be empty. A variable is considered
 * empty if it does not exist or if its value equals false. empty does not generate
 * a warning if the variable does not exist.
 *
 * @param var_ Variable to be checked
 *             
 *             Prior to PHP 5.5, empty only supports variables; anything else will
 *             result in a parse error. In other words, the following will not
 *             work: empty(trim($name)). Instead, use trim($name) == false.
 *             
 *             No warning is generated if the variable does not exist. That means
 *             empty is essentially the concise equivalent to !isset($var) || $var
 *             == false.
 * @return Returns false if var exists and has a non-empty, non-zero value.
 *         Otherwise returns true.
 *         
 *         The following things are considered to be empty:  "" (an empty string)
 *         0 (0 as an integer) 0.0 (0 as a float) "0" (0 as a string)  false
 *         array() (an empty array) $var; (a variable declared, but without a
 *         value)
 */
declare function empty(var_: any): bool;

/**
 * Get float value of a variable
 * 
 * Gets the float value of var.
 *
 * @param var_ May be any scalar type. floatval should not be used on objects, as
 *             doing so will emit an E_NOTICE level error and return 1.
 * @return The float value of the given variable. Empty arrays return 0, non-empty
 *         arrays return 1.
 *         
 *         Strings will most likely return 0 although this depends on the leftmost
 *         characters of the string. The common rules of float casting apply.
 */
declare function floatval(var_: any): number;

/**
 * Returns an array of all defined variables
 * 
 * This function returns a multidimensional array containing a list of all defined
 * variables, be them environment, server or user-defined variables, within the
 * scope that get_defined_vars is called.
 * @return A multidimensional array with all the variables.
 */
declare function get_defined_vars(): Pct.PhpAssocArray;

/**
 * Returns the resource type
 * 
 * This function gets the type of the given resource.
 *
 * @param handle The evaluated resource handle.
 * @return If the given handle is a resource, this function will return a string
 *         representing its type. If the type is not identified by this function,
 *         the return value will be the string Unknown.
 *         
 *         This function will return false and generate an error if handle is not
 *         a resource.
 */
declare function get_resource_type(handle: Pct.PhpResource): string;

/**
 * Get the type of a variable
 * 
 * Returns the type of the PHP variable var. For type checking, use is_* functions.
 *
 * @param var_ The variable being type checked.
 * @return Possibles values for the returned string are:    "boolean"    
 *         "integer"     "double" (for historical reasons "double" is returned in
 *         case of a float, and not simply "float")     "string"     "array"    
 *         "object"     "resource"     "NULL"     "unknown type"
 */
declare function gettype(var_: any): string;
//declare function import_request_variables(); nope

/**
 * Get the integer value of a variable
 * 
 * Returns the integer value of var, using the specified base for the conversion
 * (the default is base 10). intval should not be used on objects, as doing so will
 * emit an E_NOTICE level error and return 1.
 *
 * @param var_ The scalar value being converted to an integer
 * @param base The base for the conversion
 * @return The integer value of var on success, or 0 on failure. Empty arrays
 *         return 0, non-empty arrays return 1.
 *         
 *         The maximum value depends on the system. 32 bit systems have a maximum
 *         signed integer range of -2147483648 to 2147483647. So for example on
 *         such a system, intval('1000000000000') will return 2147483647. The
 *         maximum signed integer value for 64 bit systems is 9223372036854775807.
 *         
 *         
 *         Strings will most likely return 0 although this depends on the leftmost
 *         characters of the string. The common rules of integer casting apply.
 */
declare function intval(var_: any, base?: number): number;

/**
 * Finds whether a variable is an array
 * 
 * Finds whether the given variable is an array.
 *
 * @param var_ The variable being evaluated.
 * @return Returns true if var is an array, false otherwise.
 */
declare function is_array(var_: any): bool;

/**
 * Finds out whether a variable is a boolean
 * 
 * Finds whether the given variable is a boolean.
 *
 * @param var_ The variable being evaluated.
 * @return Returns true if var is a boolean, false otherwise.
 */
declare function is_bool(var_: any): bool;

/**
 * Verify that the contents of a variable can be called as a function
 * 
 * Verify that the contents of a variable can be called as a function. This can
 * check that a simple variable contains the name of a valid function, or that an
 * array contains a properly encoded object and function name.
 *
 * @param name The callback function to check
 * @param syntax_only If set to true the function only verifies that name might be
 *                    a function or method. It will only reject simple variables
 *                    that are not strings, or an array that does not have a valid
 *                    structure to be used as a callback. The valid ones are
 *                    supposed to have only 2 entries, the first of which is an
 *                    object or a string, and the second a string.
 * @param $callable_name Receives the "callable name".  In the example below it is
 *                       "someClass::someMethod".  Note, however, that despite the
 *                       implication that someClass::SomeMethod() is a callable
 *                       static method, this is not the case.
 * @return Returns true if name is callable, false otherwise.
 */
declare function is_callable(name: any, syntax_only?: bool, $callable_name?: string): bool;

/**
 * Finds whether the type of a variable is float
 * 
 * Finds whether the type of the given variable is float.
 * 
 * To test if a variable is a number or a numeric string (such as form input, which
 * is always a string), you must use is_numeric.
 *
 * @param var_ The variable being evaluated.
 * @return Returns true if var is a float, false otherwise.
 */
declare function is_float(var_: any): bool;

/**
 * Find whether the type of a variable is integer
 * 
 * Finds whether the type of the given variable is integer.
 * 
 * To test if a variable is a number or a numeric string (such as form input, which
 * is always a string), you must use is_numeric.
 *
 * @param var_ The variable being evaluated.
 * @return Returns true if var is an integer, false otherwise.
 */
declare function is_int(var_: any): bool;

/**
 * Finds whether a variable is
 * 
 * Finds whether the given variable is .
 *
 * @param var_ The variable being evaluated.
 * @return Returns true if var is null, false otherwise.
 */
declare function is_null(var_: any): bool;

/**
 * Finds whether a variable is a number or a numeric string
 * 
 * Finds whether the given variable is numeric. Numeric strings consist of optional
 * sign, any number of digits, optional decimal part and optional exponential part.
 * Thus +0123.45e6 is a valid numeric value. Hexadecimal notation (0xFF) is allowed
 * too but only without sign, decimal and exponential part.
 *
 * @param var_ The variable being evaluated.
 * @return Returns true if var is a number or a numeric string, false otherwise.
 */
declare function is_numeric(var_: any): bool;

/**
 * Finds whether a variable is an object
 * 
 * Finds whether the given variable is an object.
 *
 * @param var_ The variable being evaluated.
 * @return Returns true if var is an object, false otherwise.
 */
declare function is_object(var_: any): bool;

/**
 * Finds whether a variable is a resource
 * 
 * Finds whether the given variable is a resource.
 *
 * @param var_ The variable being evaluated.
 * @return Returns true if var is a resource, false otherwise.
 */
declare function is_resource(var_: any): bool;

/**
 * Finds whether a variable is a scalar
 * 
 * Finds whether the given variable is a scalar.
 * 
 * Scalar variables are those containing an integer, float, string or boolean.
 * Types array, object and resource are not scalar.
 * 
 * is_scalar does not consider resource type values to be scalar as resources are
 * abstract datatypes which are currently based on integers. This implementation
 * detail should not be relied upon, as it may change.
 * 
 * is_scalar does not consider NULL to be scalar.
 *
 * @param var_ The variable being evaluated.
 * @return Returns true if var is a scalar false otherwise.
 */
declare function is_scalar(var_: any): bool;

/**
 * Find whether the type of a variable is string
 * 
 * Finds whether the type given variable is string.
 *
 * @param var_ The variable being evaluated.
 * @return Returns true if var is of type string, false otherwise.
 */
declare function is_string(var_: any): bool;

/**
 * Determine if a variable is set and is not
 * 
 * Determine if a variable is set and is not .
 * 
 * If a variable has been unset with unset, it will no longer be set. isset will
 * return false if testing a variable that has been set to . Also note that a  byte
 * ("\0") is not equivalent to the PHP  constant.
 * 
 * If multiple parameters are supplied then isset will return true only if all of
 * the parameters are set. Evaluation goes from left to right and stops as soon as
 * an unset variable is encountered.
 *
 * @param var_ The variable to be checked.
 * @return Returns true if var exists and has value other than , false otherwise.
 */
declare function isset(...var_: any[]): bool;

/**
 * Prints human-readable information about a variable
 * 
 * print_r displays information about a variable in a way that's readable by
 * humans.
 * 
 * print_r, var_dump and var_export will also show protected and private properties
 * of objects with PHP 5. Static class members will not be shown.
 *
 * @param expression The expression to be printed.
 * @return If given a string, integer or float, the value itself will be printed. 
 *         If given an array, values will be presented in a format that shows keys
 *         and elements.  Similar notation is used for objects.
 *         
 *         When the return parameter is true, this function will return a string.
 *         Otherwise, the return value is true.
 */
declare function print_r(expression: any);

/**
 * Prints human-readable information about a variable
 * 
 * print_r displays information about a variable in a way that's readable by
 * humans.
 * 
 * print_r, var_dump and var_export will also show protected and private properties
 * of objects with PHP 5. Static class members will not be shown.
 *
 * @param expression The expression to be printed.
 * @param return_ If you would like to capture the output of print_r, use the
 *                return parameter.  When this parameter is set to true, print_r
 *                will return the information rather than print it.
 * @return If given a string, integer or float, the value itself will be printed. 
 *         If given an array, values will be presented in a format that shows keys
 *         and elements.  Similar notation is used for objects.
 *         
 *         When the return parameter is true, this function will return a string.
 *         Otherwise, the return value is true.
 */
declare function print_r(expression: any, return_: bool): string;

/**
 * Generates a storable representation of a value
 * 
 * Generates a storable representation of a value.
 * 
 * This is useful for storing or passing PHP values around without losing their
 * type and structure.
 * 
 * To make the serialized string into a PHP value again, use unserialize.
 *
 * @param value The value to be serialized. serialize handles all types, except
 *              the resource-type. You can even serialize arrays that contain
 *              references to itself. Circular references inside the array/object
 *              you are serializing will also be stored. Any other reference will
 *              be lost.
 *              
 *              When serializing objects, PHP will attempt to call the member
 *              function __sleep() prior to serialization. This is to allow the
 *              object to do any last minute clean-up, etc. prior to being
 *              serialized. Likewise, when the object is restored using
 *              unserialize the __wakeup() member function is called.
 *              
 *              Object's private members have the class name prepended to the
 *              member name; protected members have a '*' prepended to the member
 *              name. These prepended values have null bytes on either side.
 * @return Returns a string containing a byte-stream representation of value that
 *         can be stored anywhere.
 *         
 *         Note that this is a binary string which may include null bytes, and
 *         needs to be stored and handled as such. For example, serialize output
 *         should generally be stored in a BLOB field in a database, rather than a
 *         CHAR or TEXT field.
 */
declare function serialize(value: any): string;

/**
 * Set the type of a variable
 * 
 * Set the type of variable var to type.
 *
 * @param $var_ The variable being converted.
 * @param type Possibles values of type are:    "boolean" (or, since PHP 4.2.0,
 *             "bool")     "integer" (or, since PHP 4.2.0, "int")     "float"
 *             (only possible since PHP 4.2.0, for older versions use the
 *             deprecated variant "double")     "string"     "array"     "object" 
 *             "null" (since PHP 4.2.0)
 */
declare function settype($var_: any, type: string): bool;

/**
 * Get string value of a variable
 *
 * @param var_ The variable that is being converted to a string.
 *             
 *             var may be any scalar type or an object that implements the
 *             __toString() method. You cannot use strval on arrays or on objects
 *             that do not implement the __toString() method.
 * @return The string value of var.
 */
declare function strval(var_: any): string;

/**
 * Creates a PHP value from a stored representation
 *
 * @param str The serialized string.
 *            
 *            If the variable being unserialized is an object, after successfully
 *            reconstructing the object PHP will automatically attempt to call the
 *            __wakeup() member function (if it exists).
 *            
 *            unserialize_callback_func directive  It's possible to set a
 *            callback-function which will be called, if an undefined class should
 *            be instantiated during unserializing. (to prevent getting an
 *            incomplete object "__PHP_Incomplete_Class".) Use your , ini_set or
 *            to define 'unserialize_callback_func'.  Everytime an undefined class
 *            should be instantiated, it'll be called.  To disable this feature
 *            just empty this setting.
 *            
 *            It's possible to set a callback-function which will be called, if an
 *            undefined class should be instantiated during unserializing. (to
 *            prevent getting an incomplete object "__PHP_Incomplete_Class".) Use
 *            your , ini_set or to define 'unserialize_callback_func'.  Everytime
 *            an undefined class should be instantiated, it'll be called.  To
 *            disable this feature just empty this setting.
 * @return The converted value is returned, and can be a boolean, integer, float,
 *         string, array or object.
 *         
 *         In case the passed string is not unserializeable, false is returned and
 *         E_NOTICE is issued.
 */
declare function unserialize(str: string): any;

/**
 * Unset a given variable
 * 
 * unset destroys the specified variables.
 * 
 * The behavior of unset inside of a function can vary depending on what type of
 * variable you are attempting to destroy.
 * 
 * If a globalized variable is unset inside of a function, only the local variable
 * is destroyed.  The variable in the calling environment will retain the same
 * value as before unset was called.    ]]>
 * 
 * To unset a global variable inside of a function, then use the $GLOBALS array to
 * do so:    ]]>
 * 
 * If a variable that is PASSED BY REFERENCE is unset inside of a function, only
 * the local variable is destroyed.  The variable in the calling environment will
 * retain the same value as before unset was called.    ]]>
 * 
 * If a static variable is unset inside of a function, unset destroys the variable
 * only in the context of the rest of a function. Following calls will restore the
 * previous value of a variable.    ]]>
 *
 * @param var_ The variable to be unset.
 */
declare function unset(...var_: any[]);

/**
 * Dumps information about a variable
 *
 * @param var_ 
 */
declare function var_dump(...var_: any[]);

/**
 * Outputs or returns a parsable string representation of a variable
 *
 * @param expression The variable you want to export.
 * @return Returns the variable representation when the return parameter is used
 *         and evaluates to true. Otherwise, this function will return .
 */
declare function var_export(expression: any);

/**
 * Outputs or returns a parsable string representation of a variable
 *
 * @param expression The variable you want to export.
 * @param return_ If used and set to true, var_export will return the variable
 *                representation instead of outputing it.
 * @return Returns the variable representation when the return parameter is used
 *         and evaluates to true. Otherwise, this function will return .
 */
declare function var_export(expression: any, return_: bool): string;

///<reference path="array.d.ts" />

declare var FILTER_CALLBACK: number;

declare var FILTER_DEFAULT: number;

declare var FILTER_FLAG_ALLOW_FRACTION: number;
declare var FILTER_FLAG_ALLOW_HEX: number;
declare var FILTER_FLAG_ALLOW_OCTAL: number;
declare var FILTER_FLAG_ALLOW_SCIENTIFIC: number;
declare var FILTER_FLAG_ALLOW_THOUSAND: number;
declare var FILTER_FLAG_EMPTY_STRING_NULL: number;
declare var FILTER_FLAG_ENCODE_AMP: number;
declare var FILTER_FLAG_ENCODE_HIGH: number;
declare var FILTER_FLAG_ENCODE_LOW: number;
declare var FILTER_FLAG_IPV4: number;
declare var FILTER_FLAG_IPV6: number;
declare var FILTER_FLAG_NO_ENCODE_QUOTES: number;
declare var FILTER_FLAG_NO_PRIV_RANGE: number;
declare var FILTER_FLAG_NO_RES_RANGE: number;
declare var FILTER_FLAG_NONE: number;
declare var FILTER_FLAG_PATH_REQUIRED: number;
declare var FILTER_FLAG_QUERY_REQUIRED: number;
declare var FILTER_FLAG_STRIP_HIGH: number;
declare var FILTER_FLAG_STRIP_LOW: number;

declare var FILTER_FORCE_ARRAY: number;

declare var FILTER_NULL_ON_FAILURE: number;

declare var FILTER_REQUIRE_ARRAY: number;
declare var FILTER_REQUIRE_SCALAR: number;

declare var FILTER_SANITIZE_EMAIL: number;
declare var FILTER_SANITIZE_ENCODED: number;
declare var FILTER_SANITIZE_MAGIC_QUOTES: number;
declare var FILTER_SANITIZE_NUMBER_FLOAT: number;
declare var FILTER_SANITIZE_NUMBER_INT: number;
declare var FILTER_SANITIZE_SPECIAL_CHARS: number;
declare var FILTER_SANITIZE_STRING: number;
declare var FILTER_SANITIZE_STRIPPED: number;
declare var FILTER_SANITIZE_URL: number;

declare var FILTER_UNSAFE_RAW: number;

declare var FILTER_VALIDATE_BOOLEAN: number;
declare var FILTER_VALIDATE_EMAIL: number;
declare var FILTER_VALIDATE_FLOAT: number;
declare var FILTER_VALIDATE_INT: number;
declare var FILTER_VALIDATE_IP: number;
declare var FILTER_VALIDATE_REGEXP: number;
declare var FILTER_VALIDATE_URL: number;

declare var INPUT_COOKIE: number;
declare var INPUT_ENV: number;
declare var INPUT_GET: number;
declare var INPUT_POST: number;
declare var INPUT_REQUEST: number;
declare var INPUT_SERVER: number;
declare var INPUT_SESSION: number;

declare function filter_has_var(type: number, variable_name: string): bool;
declare function filter_id(filtername: string): number;
declare function filter_input(type: number, variable_name: string, filter?: number, options?: any): any;
declare function filter_input_array(type: number, definition?: any): any;
declare function filter_list(): string[];
declare function filter_var(variable: any, filter?: number, options?: any): any;
declare function filter_var_array(data: PhpAssocArray, definition?: any): any;
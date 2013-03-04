///<reference path='all.d.ts' />

var FILTER_CALLBACK: number;

var FILTER_DEFAULT: number;

var FILTER_FLAG_ALLOW_FRACTION: number;
var FILTER_FLAG_ALLOW_HEX: number;
var FILTER_FLAG_ALLOW_OCTAL: number;
var FILTER_FLAG_ALLOW_SCIENTIFIC: number;
var FILTER_FLAG_ALLOW_THOUSAND: number;
var FILTER_FLAG_EMPTY_STRING_NULL: number;
var FILTER_FLAG_ENCODE_AMP: number;
var FILTER_FLAG_ENCODE_HIGH: number;
var FILTER_FLAG_ENCODE_LOW: number;
var FILTER_FLAG_IPV4: number;
var FILTER_FLAG_IPV6: number;
var FILTER_FLAG_NO_ENCODE_QUOTES: number;
var FILTER_FLAG_NO_PRIV_RANGE: number;
var FILTER_FLAG_NO_RES_RANGE: number;
var FILTER_FLAG_NONE: number;
var FILTER_FLAG_PATH_REQUIRED: number;
var FILTER_FLAG_QUERY_REQUIRED: number;
var FILTER_FLAG_STRIP_HIGH: number;
var FILTER_FLAG_STRIP_LOW: number;

var FILTER_FORCE_ARRAY: number;

var FILTER_NULL_ON_FAILURE: number;

var FILTER_REQUIRE_ARRAY: number;
var FILTER_REQUIRE_SCALAR: number;

var FILTER_SANITIZE_EMAIL: number;
var FILTER_SANITIZE_ENCODED: number;
var FILTER_SANITIZE_MAGIC_QUOTES: number;
var FILTER_SANITIZE_NUMBER_FLOAT: number;
var FILTER_SANITIZE_NUMBER_INT: number;
var FILTER_SANITIZE_SPECIAL_CHARS: number;
var FILTER_SANITIZE_STRING: number;
var FILTER_SANITIZE_STRIPPED: number;
var FILTER_SANITIZE_URL: number;

var FILTER_UNSAFE_RAW: number;

var FILTER_VALIDATE_BOOLEAN: number;
var FILTER_VALIDATE_EMAIL: number;
var FILTER_VALIDATE_FLOAT: number;
var FILTER_VALIDATE_INT: number;
var FILTER_VALIDATE_IP: number;
var FILTER_VALIDATE_REGEXP: number;
var FILTER_VALIDATE_URL: number;

var INPUT_COOKIE: number;
var INPUT_ENV: number;
var INPUT_GET: number;
var INPUT_POST: number;
var INPUT_REQUEST: number;
var INPUT_SERVER: number;
var INPUT_SESSION: number;

function filter_has_var(type: number, variable_name: string): bool;
function filter_id(filtername: string): number;
function filter_input(type: number, variable_name: string, filter?: number, options?: any): any;
function filter_input_array(type: number, definition?: any): any;
function filter_list(): string[];
function filter_var(variable: any, filter?: number, options?: any): any;
function filter_var_array(data: Pct.PhpAssocArray, definition?: any): any;
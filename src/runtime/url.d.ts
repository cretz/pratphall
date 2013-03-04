///<reference path='all.d.ts' />

var PHP_QUERY_RFC1738: number;
var PHP_QUERY_RFC3986: number;

var PHP_URL_FRAGMENT: number;
var PHP_URL_HOST: number;
var PHP_URL_PASS: number;
var PHP_URL_PATH: number;
var PHP_URL_PORT: number;
var PHP_URL_QUERY: number;
var PHP_URL_SCHEME: number;
var PHP_URL_USER: number;

function base64_decode(data: string, strict?: bool): string;
function base64_encode(data: string): string;
function get_headers(url: string, format?: number): Array;
function get_meta_tags(filename: string, use_include_path?: bool): Pct.PhpAssocArray;
function http_build_query(query_data: any, numeric_prefix?: string, arg_separator?: string, enc_type?: number): string;
function parse_url(url: string): Pct.PhpAssocArray;
function parse_url(url: string, component: number): any;
function rawurldecode(str: string): string;
function rawurlencode(str: string): string;
function urldecode(str: string): string;
function urlencode(str: string): string;
///<reference path='all.ts' />

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

declare function base64_decode(data: string, strict?: bool): string;
declare function base64_encode(data: string): string;
declare function get_headers(url: string, format?: number): Array;
declare function get_meta_tags(filename: string, use_include_path?: bool): Pct.PhpAssocArray;
declare function http_build_query(query_data: any, numeric_prefix?: string, arg_separator?: string, enc_type?: number): string;
declare function parse_url(url: string): Pct.PhpAssocArray;
declare function parse_url(url: string, component: number): any;
declare function rawurldecode(str: string): string;
declare function rawurlencode(str: string): string;
declare function urldecode(str: string): string;
declare function urlencode(str: string): string;
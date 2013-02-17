///<reference path='all.d.ts' />

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

declare function abs(number_: number): number;
declare function acos(arg: number): number;
declare function acosh(arg: number): number;
declare function asin(arg: number): number;
declare function asinh(arg: number): number;
declare function atan(arg: number): number;
declare function atan2(y: number, x: number): number;
declare function atanh(arg: number): number;
declare function base_convert(number: string, frombase: number, tobase: number): string;
declare function bindec(binary_string: string): number;
declare function ceil(value: number): number;
declare function cos(arg: number): number;
declare function cosh(arg: number): number;
declare function decbin(number_: number): string;
declare function dechex(number_: number): string;
declare function decoct(number_: number): string;
declare function deg2rad(number_: number): number;
declare function exp(arg: number): number;
declare function expm1(arg: number): number;
declare function floor(value: number): number;
declare function fmod(x: number, y: number): number;
declare function getrandmax(): number;
declare function hexdec(hex_string: string): number;
declare function hypot(x: number, y: number): number;
declare function is_finite(val: number): bool;
declare function is_infinite(val: number): bool;
declare function is_nan(val: number): bool;
declare function lcg_value(): number;
declare function log(arg: number, base?: number): number;
declare function log10(arg: number): number;
declare function log1p(arg: number): number;
declare function max(values: any[]): any;
declare function max(value1: any, value2: any, ...values: any[]): any;
declare function min(values: any[]): any;
declare function min(value1: any, value2: any, ...values: any[]): any;
declare function mt_getrandmax(): number;
declare function mt_rand(): number;
declare function mt_rand(min: number, max: number): number;
declare function mt_srand(seed?: number);
declare function octdec(octal_string: string): number;
declare function pi(): number;
declare function pow(base: number, exp: number): number;
declare function rad2deg(number_: number): number;
declare function rand(): number;
declare function rand(min: number, max: number): number;
declare function round(val: number, precision?: number, mode?: number): number;
declare function sin(arg: number): number;
declare function sinh(arg: number): number;
declare function sqrt(arg: number): number;
declare function srand(seed?: number);
declare function tan(arg: number): number;
declare function tanh(arg: number): number;
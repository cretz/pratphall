///<reference path='all.d.ts' />

var CAL_GREGORIAN: number;
var CAL_JULIAN: number;
var CAL_JEWISH: number;
var CAL_FRENCH: number;

var CAL_DOW_DAYNO: number;
var CAL_DOW_SHORT: number;
var CAL_DOW_LONG: number;

var CAL_MONTH_GREGORIAN_SHORT: number;
var CAL_MONTH_GREGORIAN_LONG: number;
var CAL_MONTH_JULIAN_SHORT: number;
var CAL_MONTH_JULIAN_LONG: number;
var CAL_MONTH_JEWISH: number;
var CAL_MONTH_FRENCH: number;

var CAL_EASTER_DEFAULT: number;
var CAL_EASTER_ROMAN: number;
var CAL_EASTER_ALWAYS_GREGORIAN: number;
var CAL_EASTER_ALWAYS_JULIAN: number;

function cal_days_in_month(calendar: number, month: number, year: number): number;
function cal_from_jd(jd: number, calendar: number): Pct.PhpAssocArray;
function cal_info(calendar?: number): Pct.PhpAssocArray;
function cal_to_jd(calendar: number, month: number, day: number, year: number): number;
function easter_date(year?: number): number;
function easter_days(year?: number, method?: number): number;
function frenchtojd(month: number, day: number, year: number): number;
function gregoriantojd(month: number, day: number, year: number): number;
function jddayofweek(julianday: number, mode?: number): any;
function jdmonthname(julianday: number, mode: number): string;
function jdtofrench(juliandaycount: number): string;
///<reference path='all.d.ts' />

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

declare function cal_days_in_month(calendar: number, month: number, year: number): number;
declare function cal_from_jd(jd: number, calendar: number): Pct.PhpAssocArray;
declare function cal_info(calendar?: number): Pct.PhpAssocArray;
declare function cal_to_jd(calendar: number, month: number, day: number, year: number): number;
declare function easter_date(year?: number): number;
declare function easter_days(year?: number, method?: number): number;
declare function frenchtojd(month: number, day: number, year: number): number;
declare function gregoriantojd(month: number, day: number, year: number): number;
declare function jddayofweek(julianday: number, mode?: number): any;
declare function jdmonthname(julianday: number, mode: number): string;
declare function jdtofrench(juliandaycount: number): string;
///<reference path='all.ts' />

declare var SUNFUNCS_RET_TIMESTAMP: number;
declare var SUNFUNCS_RET_STRING: number;
declare var SUNFUNCS_RET_DOUBLE: number;

declare class DateTime {
    static ATOM: string;
    static COOKIE: string;
    static ISO8601: string;
    static RFC822: string;
    static RFC850: string;
    static RFC1036: string;
    static RFC1123: string;
    static RFC2822: string;
    static RFC3339: string;
    static RSS: string;
    static W3C: string;

    constructor(time?: string, timezone?: DateTimeZone);
    add(interval: DateInterval): DateTime;
    static createFromFormat(format: string, time: string, timezone?: DateTimeZone): DateTime;
    diff(datetime2: DateTime, absolute?: bool): DateInterval;
    format(format: string): string;
    static getLastErrors(): Pct.PhpAssocArray;
    getOffset(): number;
    getTimestamp(): number;
    getTimezone(): DateTimeZone;
    modify(modify: string): DateTime;
    setDate(year: number, month: number, day: number): DateTime;
    setISODate(year: number, week: number, day?: number): DateTime;
    setTime(hour: number, minute: number, second?: number): DateTime;
    setTimestamp(unixtimestamp: number): DateTime;
    setTimezone(timezone: DateTimeZone): DateTime;
    sub(interval: DateInterval): DateTime;
}

declare class DateTimeZone {
    static AFRICA: number;
    static AMERICA: number;
    static ANTARTICA: number;
    static ARCTIC: number;
    static ASIA: number;
    static ATLANTIC: number;
    static AUSTRALIA: number;
    static EUROPE: number;
    static INDIAN: number;
    static PACIFIC: number;
    static UTC: number;
    static ALL: number;
    static ALL_WITH_BC: number;
    static PER_COUNTRY: number;

    constructor(timezone: string);
    getLocation(): Pct.PhpAssocArray;
    getName(): string;
    getOffset(datetime: DateTime): number;
    getTransitions(timestamp_begin?: number, timestamp_end?: number): Pct.PhpAssocArray[];
    static listAbbreviations(): Pct.PhpAssocArray[];
    static listIdentifiers(what?: number, country?: string): string[];
}

declare class DateInterval {
    y: number;
    m: number;
    d: number;
    h: number;
    i: number;
    s: number;
    invert: number;
    days: number;

    constructor(interval_spec: string);
    static createFromDateString(time: string): DateInterval;
    format(format: string): string;
}

declare class DatePeriod implements Traversable {
    static EXCLUDE_START_DATE: number;

    constructor(start: DateTime, interval: DateInterval, recurrences: number, options?: number);
    constructor(start: DateTime, interval: DateInterval, end: DateTime, options?: number);
    constructor(isostr: string, options?: number);
}

declare function checkdate(month: number, day: number, year: number): bool;
declare function date_default_timezone_get(): string;
declare function date_default_timezone_set(timezone_identifier: string): bool;
declare function date(format: string, timestamp?: number): string;
declare function date_parse_from_format(format: string, date: string): Pct.PhpAssocArray;
declare function date_parse(date: string): Pct.PhpAssocArray;
declare function date_sun_info(time: number, latitude: number, longitude: number): Pct.PhpAssocArray;
declare function date_sunrise(timestamp: number, format?: number, latitude?: number, longitude?: number, zenith?: number, gmt_offset?: number): any;
declare function date_sunset(timestamp: number, format?: number, latitude?: number, longitude?: number, zenith?: number, gmt_offset?: number): any;
declare function getdate(timestamp?: number): Pct.PhpAssocArray;
declare function gettimeofday(): Pct.PhpAssocArray;
declare function gettimeofday(return_float?: bool): any;
declare function gmdate(format: string, timestamp?: number): string;
declare function gmmktime(hour?: number, minute?: number, second?: number, month?: number, day?: number, year?: number, is_dst?: number): number;
declare function gmstrftime(format: string, timestamp?: number): string;
declare function idate(format: string, timestamp?: number): number;
declare function localtime(timestamp?: number): number[];
declare function localtime(timestamp?: number, is_associative?: bool): Array;
declare function microtime(): string;
declare function microtime(get_as_float: bool): any;
declare function mktime(hour?: number, minute?: number, second?: number, month?: number, day?: number, year?: number, is_dst?: number): number;
declare function strftime(format: string, timestamp?: number): string;
declare function strptime(date: string, format: string): Pct.PhpAssocArray;
declare function strtotime(time: string, now?: number): number;
declare function time(): number;
declare function timezone_name_from_abbr(abbr: string, gmtOffset?: number, isdst?: number): string;
declare function timezone_version_get(): string;
///<reference path="pratlog.ts" />

declare var PEAR_LOG_EMERG: number;
declare var PEAR_LOG_ALERT: number;
declare var PEAR_LOG_CRIT: number;
declare var PEAR_LOG_ERR: number;
declare var PEAR_LOG_WARNING: number;
declare var PEAR_LOG_NOTICE: number;
declare var PEAR_LOG_INFO: number;
declare var PEAR_LOG_DEBUG: number;

declare class Log {
    log(message: string, priority: number);
}
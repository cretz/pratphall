///<reference path="pratlog.ts" />

module Zend.Log {

    //NOTE: only implemented what I needed

    interface LoggerInterface { }

    class Logger implements LoggerInterface {
        EMERG: number;
        ALERT: number;
        CRIT: number;
        ERR: number;
        WARN: number;
        NOTICE: number;
        INFO: number;
        DEBUG: number;
    }

    module Exception {
        class InvalidArgumentException { }
    }
}
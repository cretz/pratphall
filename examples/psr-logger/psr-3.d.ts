///<reference path="pratlog.ts" />

module Psr.Log {

    interface LoggerInterface {
        emergency(message: string, context?: Array): void;
        alert(message: string, context?: Array): void;
        critical(message: string, context?: Array): void;
        error(message: string, context?: Array): void;
        warning(message: string, context?: Array): void;
        notice(message: string, context?: Array): void;
        info(message: string, context?: Array): void;
        debug(message: string, context?: Array): void;
        log(level: any, message: string, context?: Array): void;
    }

    class LogLevel {
        EMERGENCY: string;
        ALERT: string;
        CRITICAL: string;
        ERROR: string;
        WARNING: string;
        NOTICE: string;
        INFO: string;
        DEBUG: string;
    }

    class AbstractLogger implements LoggerInterface { }

    class NullLogger extends AbstractLogger { }

    interface LoggerAwareInterface {
        setLogger(logger: LoggerInterface): void;
    }

    class InvalidArgumentException extends InvalidArgumentException { }
}
///<reference path="pratlog.ts" />

module Pratphall.Log.Util {

    class LoggerUtilities {
        handlePlaceholders(message: string, context: Array) {
            var replace = Pct.newAssocArray();
            context.forEach((value: any, key: any) => {
                replace['{' . key . '}'] = value;
            });
            return strtr(message, replace);
        }

        private constructor() { }
    }

    class CompositeLogger extends Psr.Log.AbstractLogger {
        constructor(public ...loggers: Psr.Log.LoggerInterface) { }

        log(level: any, message: string, context = []) {
            this.loggers.forEach((logger: Psr.Log.LoggerInterface)) {
                logger.log(level, message, context);
            }
        }
    }

    interface LoggerFunction extends Pct.CompileTimeOnly {
        (level: any, message: string, context?: Array): void;
    }

    class ProxyLogger extends Psr.Log.AbstractLogger {
        constructor(public proxy: LoggerFunction) { }

        log(level: any, message: string, context = []) { this.proxy(level, message, context); }
    }

    interface LoggerFilterFunction extends Pct.CompileTimeOnly {
        (level: any, message: string, context?: Array): bool;
    }

    class FilteredLogger extends ProxyLogger {
        constructor(public filter: LoggerFilterFunction, public proxy: LoggerFunction) {
            super(proxy);
        }

        log(level: any, message: string, context = []) {
            if (this.filter(level, message, context)) {
                super.log(level, message, context);
            }
        }
    }
}
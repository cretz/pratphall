///<reference path="pratlog.ts" />

module Pratphall.Log.Zend {

    import PL = Psr.Log;
    import ZL = Zend.Log;

    class ZendLoggerWrapper implements PL.AbstractLogger {
        constructor(public zend: ZL.LoggerInterface, public handlePlaceholders = false) { }

        log(level: any, message: string, context = Pct.newAssocArray()) {
            if (handlePlaceholders) {
                message = Pratphall.Log.Util.LoggerUtilities.handlePlaceholders(message, context)
            }
            zend.log(this.levelToZend(level), message, context)
        }

        levelToZend(level: any) {
            switch (level) {
                case PL.LogLevel.EMERGENCY: return ZL.Logger.EMERG;
                case PL.LogLevel.ALERT: return ZL.Logger.ALERT;
                case PL.LogLevel.CRITICAL: return ZL.Logger.CRIT;
                case PL.LogLevel.ERROR: return ZL.Logger.ERR;
                case PL.LogLevel.WARNING: return ZL.Logger.WARN;
                case PL.LogLevel.NOTICE: return ZL.Logger.NOTICE;
                case PL.LogLevel.INFO: return ZL.Logger.INFO;
                case PL.LogLevel.DEBUG: return ZL.Logger.DEBUG;
                default:
                    throw new PL.InvalidArgumentException('Unrecognized level: ' + level);
            }
        }
    }

    class PsrLoggerWrapper extends ZL.Logger {
        constructor(public psr: PL.LoggerInterface) {
            super();
        }

        log(priority: any, message: string, extra = Pct.newAssocArray()) {
            psr.log(this.priorityToPsr(level), message, extra);
        }

        priorityToPsr(priority: number) {
            switch (priority) {
                case ZL.Logger.EMERG: return PL.LogLevel.EMERGENCY;
                case ZL.Logger.ALERT: return PL.LogLevel.ALERT;
                case ZL.Logger.CRIT: return PL.LogLevel.CRITICAL;
                case ZL.Logger.ERR: return PL.LogLevel.ERROR;
                case ZL.Logger.WARN: return PL.LogLevel.WARNING;
                case ZL.Logger.NOTICE: return PL.LogLevel.NOTICE;
                case ZL.Logger.INFO: return PL.LogLevel.INFO;
                case ZL.Logger.DEBUG: return PL.LogLevel.DEBUG;
                default:
                    throw new ZL.Exception.InvalidArgumentException('Unrecognized priority: ' + priority);
            }
        }
    }
}
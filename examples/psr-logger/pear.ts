///<reference path="pratlog.ts" />

module Pratphall.Log.Pear {
    import PL = Psr.Log;

    class PearLogWrapper implements PL.AbstractLogger {
        constructor(public pear: Log, public handlePlaceholders = false) { }

        log(level: any, message: string, context = Pct.newAssocArray()) {
            if (handlePlaceholders) {
                message = Pratphall.Log.Util.LoggerUtilities.handlePlaceholders(message, context)
            }
            pear.log(message, this.levelToZend(level), message)
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
}
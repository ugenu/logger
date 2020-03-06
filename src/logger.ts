import { Options } from "./options.interface";
import winston, { createLogger, transports } from "winston";

import { loggerFormatFn } from "./logger.format";

export function Logger(namespace: string | string[], level: Options["level"] = "info"): winston.Logger {
  return createLogger({
    transports: [
      new transports.Console({
        level,
        format: loggerFormatFn(namespace)
      }),
    ]
  });
}
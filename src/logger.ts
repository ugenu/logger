import { Options } from "./options.interface";
import { Logger, createLogger, transports, format, addColors } from "winston";
const { combine, timestamp, label, prettyPrint, simple } = format;
import { format as uFormat } from "./logger.format";
import { colors } from "./level-colors";
 
export function MakeLogger(domain: string): Logger {
  return createLogger({
    transports: [
      new transports.Console({
        level: 'silly',
        format: combine(
          label({label: domain}),
          timestamp({
            
          }),
          format((info, options) => {
            info.level = ` ${info.level} `;
            return info;
          })(),
          format.colorize({
            colors,
          }),
          uFormat,
          
        )
      }),
    ]
  });
}
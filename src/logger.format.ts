import { dim, green } from "colors/safe";
import { colors } from "./level-colors";
import { format as Format, addColors } from "winston";
import { namespaceFormat } from "./namespace.format";
const { printf, timestamp, label, combine, splat, simple } = Format;

export const format = printf(({ level, message, label, timestamp, namespace }) => {
  return `${level} ${label}
  ${dim(timestamp)} ${message}\n`
});


export function loggerFormatFn(namespace: string | string[]){
  return combine(
    /** give the logger a label */
    label({ label: namespaceFormat(namespace) }),

    /** give the logger a timestampe (include options for formatting) */
    timestamp({ }),

    /** transform the level text */
    Format((info, options) => {
      info.level = ` ${info.level.toUpperCase()} `;
      return info;
    })(),

    /** colorize the labels */
    Format.colorize({ colors }),

    /** allow splats */
    splat(),

    /** print format */
    format,

    
  );
}
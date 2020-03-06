import { format as Format, addColors } from "winston";
const { printf, timestamp, label } = Format;
export const format = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

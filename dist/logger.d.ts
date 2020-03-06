import { Options } from "./options.interface";
import winston from "winston";
export declare function Logger(namespace: string | string[], level?: Options["level"]): winston.Logger;

import { createLogger, format, transports } from "winston";
import path from "path";


const { combine, label, timestamp, printf } = format;

const logFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
})

const filename = path.resolve(path.join('logs', 'validation_errors.logs'));

export const validationLogger = createLogger({
    level: 'error',
    format: combine(label({ label: 'school API' }), timestamp(), logFormat),
    transports: [
        new transports.File({filename, level: 'error'}),
    ],
})
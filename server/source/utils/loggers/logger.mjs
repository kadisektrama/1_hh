import { createLogger, format, transports } from "winston";

const { combine, label, timestamp, printf } = format;

const logFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
})

export const logger = createLogger({
    level: 'debug',
    format: combine(label({ label: 'school API' }), timestamp(), logFormat),
    //defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new transports.Console(),
    ],
})
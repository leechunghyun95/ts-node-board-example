"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const logger = (0, winston_1.createLogger)({
    transports: [
        new winston_1.transports.Console({
            level: "debug",
            format: winston_1.format.combine(winston_1.format.label({ label: "" }), winston_1.format.timestamp({
                format: "YYYY-MM-DD HH:mm:ss",
            }), winston_1.format.colorize({ all: true }), winston_1.format.printf((info) => `${info.timestamp} - ${info.level}: ${info.label} ${info.message}`)),
        }),
        new winston_1.transports.File({
            filename: "logs/log.log",
            level: "debug",
            format: winston_1.format.combine(winston_1.format.label({ label: "" }), winston_1.format.timestamp({
                format: "YYYY-MM-DD HH:mm:ss",
            }), winston_1.format.printf((info) => `${info.timestamp} - ${info.level}: ${info.label} ${info.message}`)),
        }),
    ],
});
exports.default = logger;
//# sourceMappingURL=winston.js.map
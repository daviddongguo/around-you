"use strict";
exports.__esModule = true;
exports.logger = void 0;
var winston_1 = require("winston");
var config_1 = require("../../../config");
var fs_1 = require("fs");
var path_1 = require("path");
var logDir = 'log';
if (!fs_1["default"].existsSync(logDir)) {
    fs_1["default"].mkdirSync(logDir);
}
exports.logger = winston_1["default"].createLogger({
    level: config_1["default"].logs.level,
    format: winston_1["default"].format.combine(winston_1["default"].format.simple(), winston_1["default"].format.colorize({ all: true })),
    transports: [
        new winston_1["default"].transports.Console(),
        new winston_1["default"].transports.File({
            filename: path_1["default"].join(logDir, 'error.log'),
            level: 'error'
        }),
        new winston_1["default"].transports.File({ filename: path_1["default"].join(logDir, 'combined.log') })
    ]
});

"use strict";
exports.__esModule = true;
require("express-async-errors");
var config_1 = require("../config");
var app_1 = require("./app");
var logger_1 = require("./common/loaders/logger");
var start = function () {
    app_1.app.listen(config_1["default"].port, function () {
        logger_1.logger.info("Server running on port " + config_1["default"].port);
    });
};
start();

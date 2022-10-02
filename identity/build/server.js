"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this shim is required
require("reflect-metadata");
var routing_controllers_1 = require("routing-controllers");
var auth_1 = require("./controllers/auth");
var error_handler_1 = require("./middlewares/error-handler");
var logging_1 = require("./middlewares/logging");
// creates express app, registers all controller routes and returns you express app instance
var app = (0, routing_controllers_1.createExpressServer)({
    routePrefix: '/api',
    cors: true,
    defaultErrorHandler: false,
    controllers: [auth_1.AuthController],
    middlewares: [logging_1.LoggingMiddleware, error_handler_1.ErrorHandler],
});
// run express application on port 3000
app.listen(3000);
console.log('Listening on port 3000');

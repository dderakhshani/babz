"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
var routing_controllers_1 = require("routing-controllers");
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.error = function (error, request, Response, next) {
        console.log('Error Occured:');
        console.log(error);
        next(error);
    };
    ErrorHandler = __decorate([
        (0, routing_controllers_1.Middleware)({ type: 'before' })
    ], ErrorHandler);
    return ErrorHandler;
}());
exports.ErrorHandler = ErrorHandler;

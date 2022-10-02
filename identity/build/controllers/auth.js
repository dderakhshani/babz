"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
var routing_controllers_1 = require("routing-controllers");
var credential_1 = require("../models/credential");
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.prototype.login = function (cred) {
        console.log('POST auth/login');
        console.log("user name:".concat(cred.username, ",password:").concat(cred.password));
        return 'Login Successfull';
    };
    AuthController.prototype.loginByPhone = function (cred) {
        console.log('POST auth/login');
        console.log("user name:".concat(cred.username, ",password:").concat(cred.password));
        return 'Login Successfull';
    };
    __decorate([
        (0, routing_controllers_1.Post)('/login'),
        __param(0, (0, routing_controllers_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [credential_1.Credential]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "login", null);
    __decorate([
        (0, routing_controllers_1.Post)('/loginByPhone'),
        __param(0, (0, routing_controllers_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [credential_1.Credential]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "loginByPhone", null);
    AuthController = __decorate([
        (0, routing_controllers_1.JsonController)()
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;

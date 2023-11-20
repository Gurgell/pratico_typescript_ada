"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motor = void 0;
var Motor = /** @class */ (function () {
    function Motor() {
        this._status = false;
    }
    Motor.prototype.ligar = function () {
        this.status = true;
        return true;
    };
    Motor.prototype.desligar = function () {
        this.status = false;
        return false;
    };
    Object.defineProperty(Motor.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (status) {
            this._status = status;
        },
        enumerable: false,
        configurable: true
    });
    return Motor;
}());
exports.Motor = Motor;

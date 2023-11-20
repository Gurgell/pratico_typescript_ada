"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quadrado = void 0;
var Quadrado = /** @class */ (function () {
    function Quadrado(base, altura) {
        this._base = base;
        this._altura = altura;
    }
    Object.defineProperty(Quadrado.prototype, "base", {
        get: function () {
            return this._base;
        },
        set: function (base) {
            this._base = base;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quadrado.prototype, "altura", {
        get: function () {
            return this._altura;
        },
        set: function (altura) {
            this._altura = altura;
        },
        enumerable: false,
        configurable: true
    });
    Quadrado.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    Quadrado.prototype.calcularPerimetro = function () {
        return this.base * 4;
    };
    return Quadrado;
}());
exports.Quadrado = Quadrado;

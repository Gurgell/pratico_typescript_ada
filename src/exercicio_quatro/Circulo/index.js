"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = void 0;
var Circulo = /** @class */ (function () {
    function Circulo(raio) {
        this._raio = raio;
    }
    Object.defineProperty(Circulo.prototype, "raio", {
        get: function () {
            return this._raio;
        },
        set: function (raio) {
            this._raio = raio;
        },
        enumerable: false,
        configurable: true
    });
    Circulo.prototype.calcularArea = function () {
        return (this.raio * this.raio) * Circulo.pi;
    };
    Circulo.prototype.calcularPerimetro = function () {
        return (Circulo.pi * 2) * this.raio;
    };
    Circulo.pi = 3.14159;
    return Circulo;
}());
exports.Circulo = Circulo;

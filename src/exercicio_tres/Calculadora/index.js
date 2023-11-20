"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype._somar = function (a, b) {
        return a + b;
    };
    Calculadora.prototype._subtrair = function (a, b) {
        return a - b;
    };
    Calculadora.prototype._multiplicar = function (a, b) {
        return a * b;
    };
    Calculadora.prototype._dividir = function (a, b) {
        if (b === 0) {
            throw new Error("Não é possível dividir por 0");
        }
        return a / b;
    };
    Calculadora.valorAbs = function (numero) {
        return Math.abs(numero);
    };
    Calculadora.prototype.somar = function (a, b) {
        return this._somar(a, b);
    };
    Calculadora.prototype.subtrair = function (a, b) {
        return this._subtrair(a, b);
    };
    Calculadora.prototype.multiplicar = function (a, b) {
        return this._multiplicar(a, b);
    };
    Calculadora.prototype.dividir = function (a, b) {
        return this._dividir(a, b);
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;

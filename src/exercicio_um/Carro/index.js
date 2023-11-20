"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(modelo, ano, cor) {
        this._modelo = modelo;
        this._ano = ano;
        this._cor = cor;
    }
    Object.defineProperty(Carro.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        set: function (ano) {
            this._ano = ano;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "cor", {
        get: function () {
            return this._cor;
        },
        set: function (cor) {
            this._cor = cor;
        },
        enumerable: false,
        configurable: true
    });
    Carro.prototype.printCarro = function () {
        return "\n          **** Carro ****\n          Modelo: ".concat(this.modelo, "\n          Ano: ").concat(this.ano, "\n          Cor: ").concat(this.cor, "\n        ");
    };
    return Carro;
}());
exports.Carro = Carro;

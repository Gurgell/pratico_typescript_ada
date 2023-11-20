"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarroEx5 = void 0;
var Motor_1 = require("../Motor");
var CarroEx5 = /** @class */ (function () {
    function CarroEx5(modelo, ano, cor) {
        this.motor = new Motor_1.Motor();
        this._modelo = modelo;
        this._ano = ano;
        this._cor = cor;
    }
    CarroEx5.prototype.ligar = function () {
        if (!this.motor.status) {
            this.motor.ligar();
            console.log("Carro ligado!");
        }
    };
    CarroEx5.prototype.desligar = function () {
        if (this.motor.status) {
            this.motor.desligar();
            console.log("Carro desligado!");
        }
    };
    Object.defineProperty(CarroEx5.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarroEx5.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        set: function (ano) {
            this._ano = ano;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarroEx5.prototype, "cor", {
        get: function () {
            return this._cor;
        },
        set: function (cor) {
            this._cor = cor;
        },
        enumerable: false,
        configurable: true
    });
    CarroEx5.prototype.printCarro = function () {
        return "\n          **** Carro ****\n          Modelo: ".concat(this.modelo, "\n          Ano: ").concat(this.ano, "\n          Cor: ").concat(this.cor, "\n        ");
    };
    return CarroEx5;
}());
exports.CarroEx5 = CarroEx5;

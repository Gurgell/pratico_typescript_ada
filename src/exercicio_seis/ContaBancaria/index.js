"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(conta, saldo) {
        if (saldo === void 0) { saldo = 0; }
        this.agencia = 1;
        this.conta = 1;
        this.conta = conta;
        this._saldo = saldo;
    }
    Object.defineProperty(ContaBancaria.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        enumerable: false,
        configurable: true
    });
    ContaBancaria.prototype.sacar = function (valor) {
        if (this.saldo - valor < 0) {
            throw new Error("Saldo insuficiente para sacar!");
        }
        this._saldo = this.saldo - valor;
        return this.saldo;
    };
    ContaBancaria.prototype.depositar = function (valor) {
        if (valor <= 0) {
            throw new Error("Impossível depositar um valor nulo ou negativo!");
        }
        this._saldo = this.saldo + valor;
        return this.saldo;
    };
    ContaBancaria.prototype.extrato = function () {
        return "\n        **** Extrato ****\n        Agencia: ".concat(this.agencia, "\n        Conta: ").concat(this.conta, "\n        -----------------\n        Saldo total: ").concat(this._saldo, "\n      ");
    };
    return ContaBancaria;
}());
exports.ContaBancaria = ContaBancaria;

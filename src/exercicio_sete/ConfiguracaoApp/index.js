"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfiguracaoApp = void 0;
var ConfiguracaoApp = /** @class */ (function () {
    function ConfiguracaoApp(idioma) {
        this._idioma = idioma;
    }
    // Método para obter a instância única da classe
    ConfiguracaoApp.obterInstancia = function (idioma) {
        if (!ConfiguracaoApp.instancia) {
            ConfiguracaoApp.instancia = new ConfiguracaoApp(idioma);
        }
        this.instancia.idioma = idioma;
        return ConfiguracaoApp.instancia;
    };
    Object.defineProperty(ConfiguracaoApp.prototype, "idioma", {
        get: function () {
            return this._idioma;
        },
        set: function (idioma) {
            this._idioma = idioma;
        },
        enumerable: false,
        configurable: true
    });
    return ConfiguracaoApp;
}());
exports.ConfiguracaoApp = ConfiguracaoApp;

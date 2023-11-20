"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Index_1 = require("./src/exercicio_um/Carro/Index");
var Cachorro_1 = require("./src/exercicio_dois/Cachorro");
var Passaro_1 = require("./src/exercicio_dois/Passaro");
var Calculadora_1 = require("./src/exercicio_tres/Calculadora");
var Quadrado_1 = require("./src/exercicio_quatro/Quadrado");
var Circulo_1 = require("./src/exercicio_quatro/Circulo");
var Carro_1 = require("./src/exercicio_cinco/Carro");
var ContaBancaria_1 = require("./src/exercicio_seis/ContaBancaria");
var ConfiguracaoApp_1 = require("./src/exercicio_sete/ConfiguracaoApp");
console.log("\nParte 1: ");
var uno = new Index_1.Carro("Uno", "2005", "Vermelho");
var gol = new Index_1.Carro("Gol", "2007", "Branco");
console.log(uno.printCarro());
console.log(gol.printCarro());
console.log("\nParte 2: \n");
var passaro = new Passaro_1.Passaro();
var cachorro = new Cachorro_1.Cachorro();
passaro.emitirSom();
cachorro.emitirSom();
passaro.mover();
cachorro.mover();
console.log("\nParte 3: \n");
var calculadora = new Calculadora_1.Calculadora();
console.log(calculadora.somar(1, 3));
console.log(calculadora.subtrair(1, 3));
console.log(calculadora.dividir(1, 3));
console.log(calculadora.multiplicar(1, 3));
console.log(Calculadora_1.Calculadora.valorAbs(-3));
console.log("\nParte 4: \n");
var quadrado = new Quadrado_1.Quadrado(4, 5);
var circulo = new Circulo_1.Circulo(5);
console.log(quadrado.calcularArea());
console.log(quadrado.calcularPerimetro());
console.log(circulo.calcularArea());
console.log(circulo.calcularPerimetro());
console.log("\nParte 5: \n");
var carroMotor = new Carro_1.CarroEx5("Cobalt", "2014", "Vermelho");
carroMotor.ligar();
carroMotor.desligar();
console.log("\nParte 6: \n");
var conta = new ContaBancaria_1.ContaBancaria(4);
var conta2 = new ContaBancaria_1.ContaBancaria(5, 500);
try {
    console.log(conta2.sacar(400)); // Sacando 400 reais da conta que tem 500
    console.log(conta.sacar(100)); // Sacando 100 da conta zerada
}
catch (error) {
    console.log(error);
}
console.log("\nParte 7: \n");
var configuracao = ConfiguracaoApp_1.ConfiguracaoApp.obterInstancia("Português");
var configuracao2 = ConfiguracaoApp_1.ConfiguracaoApp.obterInstancia("Inglês");
console.log(configuracao.idioma);
console.log(configuracao2.idioma);
var configuracao3 = ConfiguracaoApp_1.ConfiguracaoApp.obterInstancia("Italiano");
console.log(configuracao.idioma);

import { Carro } from "./src/exercicio_um/Carro/Index";
import { Cachorro } from "./src/exercicio_dois/Cachorro"
import { Passaro } from "./src/exercicio_dois/Passaro"
import { Calculadora } from "./src/exercicio_tres/Calculadora"
import { Quadrado } from "./src/exercicio_quatro/Quadrado";
import { Circulo } from "./src/exercicio_quatro/Circulo";
import { CarroEx5 } from "./src/exercicio_cinco/Carro";
import { ContaBancaria } from "./src/exercicio_seis/ContaBancaria";
import { ConfiguracaoApp } from "./src/exercicio_sete/ConfiguracaoApp";

console.log("\nParte 1: ")

const uno = new Carro("Uno", "2005", "Vermelho");
const gol = new Carro("Gol", "2007", "Branco");

console.log(uno.printCarro());
console.log(gol.printCarro());

console.log("\nParte 2: \n");

const passaro = new Passaro();
const cachorro = new Cachorro();

passaro.emitirSom();
cachorro.emitirSom();
passaro.mover();
cachorro.mover();

console.log("\nParte 3: \n");

const calculadora = new Calculadora();

console.log(calculadora.somar(1, 3))
console.log(calculadora.subtrair(1, 3))
console.log(calculadora.dividir(1, 3))
console.log(calculadora.multiplicar(1, 3))
console.log(Calculadora.valorAbs(-3))


console.log("\nParte 4: \n");

const quadrado = new Quadrado(4, 5);
const circulo = new Circulo(5);

console.log(quadrado.calcularArea())
console.log(quadrado.calcularPerimetro())
console.log(circulo.calcularArea())
console.log(circulo.calcularPerimetro())

console.log("\nParte 5: \n");

const carroMotor = new CarroEx5("Cobalt", "2014", "Vermelho")
carroMotor.ligar();
carroMotor.desligar();


console.log("\nParte 6: \n");

const conta = new ContaBancaria(4, );
const conta2 = new ContaBancaria(5, 500);

try {
    console.log(conta2.sacar(400)) // Sacando 400 reais da conta que tem 500
    console.log(conta.sacar(100)) // Sacando 100 da conta zerada
} catch (error) {
    console.log(error)
}

console.log("\nParte 7: \n");

const configuracao = ConfiguracaoApp.obterInstancia("Português");
const configuracao2 = ConfiguracaoApp.obterInstancia("Inglês");

console.log(configuracao.idioma)
console.log(configuracao2.idioma)

const configuracao3 = ConfiguracaoApp.obterInstancia("Italiano");

console.log(configuracao.idioma)








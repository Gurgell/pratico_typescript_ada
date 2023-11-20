import { Motor } from "../Motor";

export class CarroEx5 {
    private _modelo: string
    private _ano: string
    private _cor: string
    private motor: Motor;

    constructor(modelo: string, ano: string, cor: string){
        this.motor = new Motor();
        this._modelo = modelo;
        this._ano = ano;
        this._cor = cor;
    }

    public ligar(): void{
        if (!this.motor.status){
            this.motor.ligar();
            console.log("Carro ligado!")
        } 
    }

    public desligar(): void{
        if (this.motor.status){
            this.motor.desligar();
            console.log("Carro desligado!")
        } 
    }


    get modelo(){
        return this._modelo;
    }

    set modelo(modelo: string){
        this._modelo = modelo;
    }
    get ano(){
        return this._ano;
    }

    set ano(ano: string){
        this._ano = ano;
    }
    get cor(){
        return this._cor;
    }

    set cor(cor: string){
        this._cor = cor;
    }

    printCarro(): string {
        return `
          **** Carro ****
          Modelo: ${this.modelo}
          Ano: ${this.ano}
          Cor: ${this.cor}
        `;
      }
}

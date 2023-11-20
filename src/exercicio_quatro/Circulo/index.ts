import { FormaGeometrica } from "../FormaGeometrica";

export class Circulo implements FormaGeometrica{

    private _raio: number;
    public static readonly pi = 3.14159;

    constructor(raio: number){
        this._raio = raio;
    }

    get raio(){
        return this._raio;
    }

    set raio(raio: number){
        this._raio = raio;
    }

    calcularArea(): number {
        return (this.raio * this.raio) * Circulo.pi;
    }
    calcularPerimetro(): number {
        return (Circulo.pi * 2) * this.raio;
    }
}
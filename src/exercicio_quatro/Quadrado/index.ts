import { FormaGeometrica } from "../FormaGeometrica";

export class Quadrado implements FormaGeometrica{

    private _base: number;
    private _altura: number;

    constructor(base: number, altura: number){
        this._base = base;
        this._altura = altura;
    }

    get base(){
        return this._base;
    }
    get altura(){
        return this._altura;
    }

    set base(base: number){
        this._base = base;
    }
    set altura(altura: number){
        this._altura = altura;
    }

    calcularArea(): number {
        return this.base * this.altura;
    }
    calcularPerimetro(): number {
        return this.base * 4;
    }

}
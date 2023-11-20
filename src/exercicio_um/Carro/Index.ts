class Carro {
    private _modelo: string
    private _ano: string
    private _cor: string

    constructor(modelo: string, ano: string, cor: string){
        this._modelo = modelo;
        this._ano = ano;
        this._cor = cor;
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

export { Carro }
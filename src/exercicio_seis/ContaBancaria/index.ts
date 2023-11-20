class ContaBancaria {
    public agencia: number = 1;
    public conta: number = 1; 
    protected _saldo: number;
  
    constructor(conta: number, saldo: number = 0) {
      this.conta = conta;
      this._saldo = saldo;
    }
  
    get saldo() {
        return this._saldo;
    }

    public sacar(valor: number): number{
        if (this.saldo - valor < 0){
            throw new Error("Saldo insuficiente para sacar!");
        }
        this._saldo = this.saldo - valor;
        return this.saldo;
    }

    public depositar(valor: number): number{
        if (valor <= 0){
            throw new Error("Impossível depositar um valor nulo ou negativo!");
        }
        this._saldo = this.saldo + valor;
        return this.saldo;
    }
  
    extrato(): string {
      return `
        **** Extrato ****
        Agencia: ${this.agencia}
        Conta: ${this.conta}
        -----------------
        Saldo total: ${this._saldo}
      `;
    }
  }
  
  export { ContaBancaria };
export class Calculadora{

    private _somar(a: number, b: number): number {
        return a + b;
    }

    private _subtrair(a: number, b: number): number {
        return a - b;
    }

    private _multiplicar(a: number, b: number): number {
        return a * b;
    }

    private _dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Não é possível dividir por 0");
        } 
        return a / b;
    }


    public static valorAbs(numero: number): number {
        return Math.abs(numero);
    }


    public somar(a: number, b: number): number{
        return this._somar(a, b);
    }

    public subtrair(a: number, b: number): number{
        return this._subtrair(a, b);
    }

    public multiplicar(a: number, b: number): number{
        return this._multiplicar(a, b);
    }

    public dividir(a: number, b: number): number{
        return this._dividir(a, b);
    }
}
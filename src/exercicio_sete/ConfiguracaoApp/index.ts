export class ConfiguracaoApp {
    private static instancia: ConfiguracaoApp;
    private _idioma: string;

    private constructor(idioma: string) {
        this._idioma = idioma;
    }

    // Método para obter a instância única da classe
    public static obterInstancia(idioma: string): ConfiguracaoApp {
        if (!ConfiguracaoApp.instancia) {
            ConfiguracaoApp.instancia = new ConfiguracaoApp(idioma);
        }
        this.instancia.idioma = idioma;
        return ConfiguracaoApp.instancia;
    }

    get idioma(){
        return this._idioma;
    }

    set idioma(idioma: string){
        this._idioma = idioma;
    }
}


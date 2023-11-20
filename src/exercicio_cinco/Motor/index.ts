export class Motor{
    
    private _status = false;

    public ligar(): boolean {
        this.status = true;
        return true
    }
    public desligar(): boolean {
        this.status = false;
        return false
    }

    get status(){
        return this._status;
    }

    set status(status: boolean){
        this._status = status;
    }

}
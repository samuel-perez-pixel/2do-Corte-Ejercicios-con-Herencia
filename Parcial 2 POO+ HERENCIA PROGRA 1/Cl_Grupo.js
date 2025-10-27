export default class Cl_Grupo {
    constructor(cantPer,monto,horas){
        this.cantPer = cantPer;
        this.monto = monto;
        this.horas = horas;
    }
    set cantPer(cantPer){
        this._cantPer = +cantPer;
    }
    get cantPer(){
        return this._cantPer;   
    }
    set monto(monto){
        this._monto = +monto;
    }
    get monto(){
        return this._monto;
    }
    set horas(horas){
        this._horas = +horas;
    }
    get horas(){
        return this._horas;
    }
}
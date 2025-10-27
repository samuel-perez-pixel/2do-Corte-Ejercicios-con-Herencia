import Cl_Grupo from "./Cl_Grupo.js";
export default class Cl_Financiado extends Cl_Grupo {
    constructor(cantPer,monto,horas,interes,cuotaI,plazo){
        super(cantPer,monto,horas);
        this.interes = interes;
        this.cuotaI = cuotaI;
        this.plazo = plazo;
    }
    set interes(interes){
        this._interes = +interes;
    }
    get interes(){
        return this._interes;
    }
    set cuotaI(cuotaI){
        this._cuotaI = +cuotaI;
    }
    get cuotaI(){
        return this._cuotaI;
    }
    set plazo(plazo){
        this._plazo = +plazo;
    }
    get plazo(){
        return this._plazo;
    }
    recargo(){
        return this.monto + ((this.monto * this.interes) / 100);
    }

    precioPlazo(){
        return (this.recargo()-this.cuotaI )/ this.plazo;
    }
}
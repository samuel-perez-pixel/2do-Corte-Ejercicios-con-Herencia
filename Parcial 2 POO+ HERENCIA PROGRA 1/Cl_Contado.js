import Cl_Grupo from "./Cl_Grupo.js";
export default class Cl_Contado extends Cl_Grupo {
    constructor(cantPer,monto,horas,horasTrato,descuento){
        super(cantPer,monto,horas);
        this.horasTrato = horasTrato;
        this.descuento = descuento;
    }
    set horasTrato(horasTrato){
        this._horasTrato = horasTrato;
    }
    get horasTrato(){
        return this._horasTrato;
    }
    set descuento(descuento){
        this._descuento = descuento;
    }
    get descuento(){
        return this._descuento;
    }
    descuentoContado(){
        if(this.horasTrato <24){
            return this.monto - ((this.monto * this.descuento) / 100);
        }
        else{
            return 'No aplica el descuento por trato anticipado por plazo de más de 24 horas';
             
        }
    }
}
import Cl_mRamo from "./Cl_mRamo.js";
export default class Cl_mFrutas extends Cl_mRamo{
    constructor({codigo,envase,costo,extra}){
        super(codigo,envase,costo);
        this.extra=extra;
    }
    getExtra(){
        return this.extra;
    }
    setExtra(e){
        this.extra=+e;
    }
    descuento(){
        if(this.extra=='Si'){
            return this.costo*(15/100);
        }
        else if(this.extra=='No'){
            return 0};
    }
    totalPagar(){
        return this.costo-this.descuento(); 
        }
    }

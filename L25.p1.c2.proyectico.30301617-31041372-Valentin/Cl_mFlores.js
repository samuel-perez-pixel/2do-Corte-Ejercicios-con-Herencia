import Cl_mRamo from "./Cl_mRamo.js";
export default class Cl_mFlores extends Cl_mRamo{
    constructor(){({codigo,envase,costo,tipoFlores})
        super(codigo,envase,costo);
        this.tipoFlores=tipoFlores;
    }
    getTipoFlores(){
        return this.tipoFlores;
    }
    setTipoFlores(t){
        this.tipoFlores=t;
    }
    descuento(){
        return this.costo*(10/100); 
    }
    recargo(){
        return this.costo*(8/100);
    }
    // metodo para calcular el total a pagar
    totalPagar(){
        if(this.tipoFlores=='n'){
            return this.costo-this.descuento();
        }
        else if(this.tipoFlores=='a'){
            return this.costo+this.recargo();
        }
        else{
            return "Tipo de flores no valido";
        }
    }
}
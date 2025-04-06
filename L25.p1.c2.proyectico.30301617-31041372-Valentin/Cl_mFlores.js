import Cl_mRamo from "./Cl_mRamo.js";
export default class Cl_mFlores extends Cl_mRamo{
    constructor({codigo,envase,costo,tipoFlores}){
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
        if(this.tipoFlores==='A')return this.costo*(10/100);
        else return 0; 
    }
    recargo(){
        if(this.tipoFlores==='N'){return this.costo*(8/100);
        }
        else return 0;
    }
    // metodo para calcular el total a pagar
    totalPagar(){
        if(this.tipoFlores==='A'){
            return this.costo-this.descuento();
        }
        else if(this.tipoFlores==='N'){
            return this.costo+this.recargo();
        }
        else{
            return "Tipo de flores no valido";
        }
    }
}
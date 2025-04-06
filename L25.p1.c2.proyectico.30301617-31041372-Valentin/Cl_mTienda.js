import Cl_mFlores from "./Cl_mFlores.js";
import Cl_mFrutas from "./Cl_mFrutas.js";

export default class Cl_mTienda{
    constructor(){
        this.acumTotal=0;
        this.cntFloreN=0;
        this.cntFloresMed=0;
        this.cntFlorestotal=0;
    }
    procesarRamo(r){
        this.acumTotal+=r.totalPagar();
        if(r instanceof Cl_mFlores){
            this.cntFlorestotal++;
            if(r.getTipoFlores()=='n'){
                this.cntFloreN++;
            }
        }
        if(this.envase==2){
            this.cntFloresMed++;
        }
        else if(r instanceof Cl_mFrutas){
            this.cntFrutas++;
        }
    }
    totalPagado(){
        return this.acumTotal;
    }
    cantidadFloresN(){
        return this.cntFloreN;
    }
    cantidadFloresMed(){
        return this.cntFloresMed;
    }
    porcFloresMed(){
        if(this.tipoFlores=='n'&& this.envase==2){
            return (this.cntFloresMed/this.cntFlorestotal)*100;
        }
    }
}
import Cl_mFlores from "./Cl_mFlores.js";
import Cl_mFrutas from "./Cl_mFrutas.js";

export default class Cl_mTienda{
    constructor(){
        this.acumTotalflor=0;
        this.acumTotalfruta=0;
        this.cntFloreN=0;
        this.cntFloresMed=0;
        this.cntFlorestotal=0;
    }
    procesarRamo(r){
        if(r instanceof Cl_mFlores){
            this.acumTotalflor+=r.totalPagar();
            if (r.envase==2){ 
            this.cntFlorestotal++;
        }
            if(r.getTipoFlores()=='n'){
                this.cntFloreN++;
            }
        }
        if(r.envase==2 && r.tipoFlores=='n'){
            this.cntFloresMed++;
        }
        else if(r instanceof Cl_mFrutas){
            this.cntFrutas++;
            this.acumTotalfruta+=r.totalPagar();
        }
    }
    totalPagado(){
        return this.acumTotalflor+this.acumTotalfruta;
    }
    cantidadFloresN(){
        return this.cntFloreN;
    }
    cantidadFloresMed(){
        return this.cntFloresMed;
    }
    porcFloresMed(){   
            return (this.cntFloresMed/this.cntFlorestotal)*100;
    }
}
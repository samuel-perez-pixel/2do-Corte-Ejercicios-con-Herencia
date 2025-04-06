export default class Cl_vFlores{
    constructor(){
        this.inCodigo=document.getElementById("florform_inCodigo");
        this.inEnvase=document.getElementById("florform_inEnvase");
        this.inCosto=document.getElementById("florform_inCosto");
        this.inTipoFlores=document.getElementById("florform_inTipoFlores");
        this.btProcesar=document.getElementById("florform_btProcesar");
    }
    getCodigo(){
        return +this.inCodigo.value;
    }
    getEnvase(){
        return +this.inEnvase.value;
    }
    getCosto(){
        return +this.inCosto.value;
    }
    getTipoFlores(){
        return +this.inTipoFlores.value;
    }
}
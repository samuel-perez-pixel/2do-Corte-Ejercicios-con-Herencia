export default class Cl_vFrutas{
    constructor(){
        this.inCodigo=document.getElementById("frutaform_inCodigo");
        this.inEnvase=document.getElementById("frutaform_inEnvase");
        this.inCosto=document.getElementById("frutaform_inCosto");
        this.inExtra=document.getElementById("frutaform_inExtra");
        this.btProcesar=document.getElementById("frutaform_btProcesar");
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
    getExtra(){
        return this.inExtra.value;
    }
}
export default class Cl_vFrutas{
    constructor(){
        this.inCodigo=document.getElementById("frutaForm_inCodigo");
        this.inEnvase=document.getElementById("frutaForm_inEnvase");
        this.inCosto=document.getElementById("frutaForm_inCosto");
        this.inExtra=document.getElementById("frutaForm_inExtra");
        this.btProcesar=document.getElementById("frutaForm_btProcesar");
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
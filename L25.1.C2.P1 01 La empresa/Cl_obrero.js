import Cl_personal from "./Cl_personal.js";
export default class Cl_obrero extends Cl_personal{
    constructor(nombre,edad,tipo,hijos){
        super(nombre,edad,tipo);
        this.hijos = hijos;
}
setHijos(hijos){
    this.hijos = hijos;
}
getHijos(){
    return this.hijos;  
}
bonoHijos(){
    if(this.hijos <=3){
        return 50
    }
    else{return 70;}
}
Edad(){
    return  this.mayorEdad(); 
}
sueldoFinal(){
    return this.bonoHijos() + this.sueldoBase();
}
}
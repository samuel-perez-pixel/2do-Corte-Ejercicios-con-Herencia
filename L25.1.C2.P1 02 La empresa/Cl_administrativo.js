import Cl_personal from "./Cl_personal.js";

export default class Cl_administrativo extends Cl_personal{
constructor(nombre,edad,tipo,nivel){
    super(nombre,edad,tipo);
    this.nivel = nivel;
}
setNivel(nivel){
    this.nivel = nivel;
}
getNivel(){
    return this.nivel;
}
incentivo(){
    if(this.mayorEdad() == true && this.nivel==1){
        return 50
    }
    else if(this.mayorEdad() == true && this.nivel==2 ||this.nivel==3){
        return 100
    }
    else {return 0;}
}
sueldoFinal(){
    return this.incentivo() + this.sueldoBase();
}
}
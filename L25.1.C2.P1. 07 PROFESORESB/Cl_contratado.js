import Cl_profesor from "./Cl_profesor.js";
export default class Cl_contratado extends Cl_profesor{
    constructor(nombre,bono,horas){
        super(nombre,bono);
        this.horas=horas;
    }
    ingresoTotal(){
        return this.bono+this.horas*10;
    }
}
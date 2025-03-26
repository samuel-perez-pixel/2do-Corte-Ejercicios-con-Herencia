import Cl_empleado from "./Cl_empleado.js";
export default class Cl_obrero extends Cl_empleado{
    constructor(sueldoBase, horasExtras){
        super(sueldoBase);
        this.horasExtras = horasExtras;
    }
    calcularSueldo(){
        return this.sueldoBase + this.horasExtras * 2;
    }
}
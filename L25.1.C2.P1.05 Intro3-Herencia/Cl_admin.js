import Cl_empleado from "./Cl_empleado.js";
export default class Cl_administrativo extends Cl_empleado{
    constructor(sueldoBase, primaFija){
        super(sueldoBase);
        this.primaFija = primaFija;
    }
    calcularSueldo(){
        return this.sueldoBase + this.primaFija;
    }
}
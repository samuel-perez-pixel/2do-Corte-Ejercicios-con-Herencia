import Cl_padre from "./Cl_padre.js";
export default class Cl_hijo2 extends Cl_padre {
    constructor(atribA, atrib2) {
        super(atribA);
        this.atrib2 = atrib2;
    }
    set atrib2(atrib2) {
        this._atrib2 = atrib2;
    }
    get atrib2() {
        return this._atrib2;
    }
    calculo(){
        return this.atribA+this.atrib2;
    }
}
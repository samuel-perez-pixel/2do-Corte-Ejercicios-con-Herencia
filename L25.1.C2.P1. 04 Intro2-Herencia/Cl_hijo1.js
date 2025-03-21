import Cl_padre from "./Cl_padre.js";

export default class Cl_hijo1 extends Cl_padre {
    constructor(atribA, atrib1) {
        super(atribA);
        this.atrib1 = atrib1;
    }
    set atrib1(atrib1) {
        this._atrib1 = atrib1;
    }
    get atrib1() {
        return this._atrib1;
    }
    calculo(){
        return this.atribA*this.atrib1;
    }
}
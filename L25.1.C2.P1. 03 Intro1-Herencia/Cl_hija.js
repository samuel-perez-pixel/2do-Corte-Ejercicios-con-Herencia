import Cl_padre from "./Cl_padre.js";

export default class Cl_hija extends Cl_padre {
    constructor(atribA, atribB) {
        super(atribA);
        this.atribB = atribB;
    }
    set atribB(atribB) {
        this._atribB = atribB;
    }
    get atribB() {
        return this._atribB;
    }
}
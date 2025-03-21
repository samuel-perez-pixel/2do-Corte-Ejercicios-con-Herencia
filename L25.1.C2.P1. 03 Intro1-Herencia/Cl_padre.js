export default class Cl_padre {
    constructor(atribA) {
        this.atribA = atribA;
    }
    set atribA(atribA) {
        this._atribA = atribA;
    }
    get atribA() {
        return this._atribA;
    }   
}
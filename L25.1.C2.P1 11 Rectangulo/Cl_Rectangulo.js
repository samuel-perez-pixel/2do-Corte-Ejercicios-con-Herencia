import Cl_cuadrado from "./Cl_Cuadrado.js";
export default class Cl_rectangulo extends Cl_cuadrado {
    constructor(base, altura) {
        super(base);
        this.altura = altura;
    }

    area() {
        return this.base * this.altura;
    }

    perimetro() {
        return 2 * this.base + 2 * this.altura;
    }
}
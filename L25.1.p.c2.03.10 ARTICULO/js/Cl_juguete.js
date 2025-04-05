import articulo from "./Cl_articulo.js";

export default class juguete extends articulo{
    constructor(nombre, cantidad, precioBase, edad){
        super(nombre, cantidad, precioBase);
        this.edad = edad;
    }

    descuento (){
        if(this.edad === 1){
            return this.totPago() - (this.totPago() * (10/100))
        }

        else
        return this.totPago();
    }
}
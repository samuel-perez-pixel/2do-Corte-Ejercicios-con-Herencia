import Cl_articulo from './Cl_articulo.js'; 

export default class Cl_ropa extends Cl_articulo {
    constructor( nombre, precio,color) {
        super( nombre, precio);
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
    descuentoRojo(){
        if(this.color == "rojo"){
            return this.precio * 0.10;
        }else{
            return 0;
        }
    }
    
}
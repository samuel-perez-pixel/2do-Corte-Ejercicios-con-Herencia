import Cl_articulo from './Cl_articulo.js'; 

export default class Cl_ropa extends Cl_articulo {
    constructor( tipo,nombre, precio,color) {
        super(tipo, nombre, precio);
        this.color = color;
    }
    setColor(color) {
        this.color = +color;
    }
    getColor() {
        return this.color;
    }
    descuentoRojo(){
        if(this.color == 3){
            return this.precio * (10/100);
        }else{
            return 0;
        }
    }
    precioFinal(){
        return (this.precio+this.incremento()) - this.descuentoRojo();        
    }
    
}
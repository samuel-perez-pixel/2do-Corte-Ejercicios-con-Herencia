import Cl_articulo from "./Cl_articulo.js";
export default class Cl_vivere extends Cl_articulo {
    constructor( tipo,nombre, precio,producto) {
        super(tipo, nombre, precio);
        this.producto = producto;
    }
    setProducto(producto) {
        this.producto = producto;
    }
    getProducto() {
        return this.producto;
    }
    descuentoBasico(){
        if(this.producto == "basico"){
            return this.precio * 0.10;
        }else{
            return 0;
        }
    }
    totalPagar(){
        return this.precio - this.descuentoBasico();
    }
}
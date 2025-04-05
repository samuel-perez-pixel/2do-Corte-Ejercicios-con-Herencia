export default class articulo{
    constructor(nombre, cantidad, precioBase){
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precioBase=precioBase;
    }

    totPago(){
        return this.cantidad * this.precioBase;
    }
}
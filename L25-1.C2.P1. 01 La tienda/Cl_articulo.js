export default class Cl_articulo {
    constructor( nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setPrecio(precio) {
        this.precio = +precio;
    }
    getNombre() {
        return this.nombre;
    }
    getPrecio() {
        return this.precio;
    }
    incremento(){
        return 20/100;
    }
}
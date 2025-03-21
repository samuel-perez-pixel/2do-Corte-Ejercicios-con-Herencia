export default class Cl_articulo {
    constructor( tipo,nombre, precio) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getTipo() {
        return this.tipo;
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
        return this.precio * (20/100);
    }
}
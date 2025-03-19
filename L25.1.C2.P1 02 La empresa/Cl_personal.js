export default class Cl_personal{
    constructor(nombre,edad,tipo){
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    getNombre(){
        return this.nombre;
    }
    setTipo(tipo){
        this.tipo = +tipo;
    }
    getTipo(){
        return this.tipo;
    }
    setEdad(edad){
        this.edad = +edad;
    }
    getEdad(){
        return this.edad;
    }

    sueldoBase(){
        return 150;
    }
    mayorEdad(){
        if(this.edad >= 18){
            return true;
        }else{
            return false;
        }
    }
}
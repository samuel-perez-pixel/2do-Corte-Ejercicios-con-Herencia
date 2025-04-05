export default class Cl_estudiante{
    constructor(nombre,notas,cantMaterias){
        this.nombre=nombre;
        this.notas=notas;
        this.cantMaterias=cantMaterias;
    }
    set nombre(n){this._nombre=n;}
    set notas(ns){this._notas=+ns;}
    set cantMaterias(cm){this._cantMaterias=+cm;}
    get nombre(){return this._nombre;}
    get notas(){return this._notas;}
    get cantMaterias(){return this._cantMaterias;}
    promedio(){
        return this._notas/this._cantMaterias;
    }
}
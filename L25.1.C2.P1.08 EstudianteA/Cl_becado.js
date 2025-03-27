import Cl_estudiante from "./Cl_estudiante.js";
export default class Cl_becado extends Cl_estudiante{
    constructor(nombre,notas,cantMaterias){
        super (nombre,notas,cantMaterias);
    }
    setnombre(nombre){
        this.nombre=nombre;
    }
    getnombre(){
        return this.nombre;
    }
    setnotas(notas){
        this.notas=notas;
    }
    getnotas(){
        return this.notas;
    }
    setcantMaterias(cantMaterias){
        this.cantMaterias=cantMaterias;
    }
    getcantMaterias(){
        return this.cantMaterias;
    }
    promedioBecas(){
        return this.notas/this.cantMaterias;
    }
    montoBeca(){
        if(this.promedioBecas()>=15){
            return 30;
        }
        else if(this.promedioBecas()==10){
            return 20;
        }
        else {return 'No le corresponde beca';}
    }
}
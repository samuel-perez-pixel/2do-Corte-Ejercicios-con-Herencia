import Cl_estudiante from "./Cl_estudiante.js";
export default class Cl_deportista extends Cl_estudiante{
    constructor(nombre,notas,cantMaterias,deporte,edad){
        super (nombre,notas,cantMaterias);
        this.deporte=deporte;
        this.edad=edad;
    }
    set deporte (d){this._deporte=d;}
    get deporte (){return this._deporte;}
    set edad(e){this._edad=e;}
    get edad(){return this._edad;}
    admision(){
        if(this.deporte==1 && this.promedio()> 14 && this.edad>=21){
            return ("Admitido al equipo de Beisbol");
        }
        else if(this.deporte==2 && this.promedio()>=12 && this.edad>=19){
            return ("Admitido al equipo de Futbol");
        }
        else {return ("No fue admitido en ningun deporte");}
    }
}
export default class Cl_mRamo{
    constructor(codigo,envase,costo){
        this.codigo=codigo;
        this.envase=envase;
        this.costo=costo;
    }
    getCodigo(){
        return this.codigo;
    }
    getEnvase(){
        return this.envase;
    }
    getCosto(){
        return this.costo;
    }
    setCodigo(C){
        this.codigo=+C; // Se convierte a número
    }
    setEnvase(e){
        this.envase=+e;
    }
    setCosto(c){
        this.costo=+c;
    }
}
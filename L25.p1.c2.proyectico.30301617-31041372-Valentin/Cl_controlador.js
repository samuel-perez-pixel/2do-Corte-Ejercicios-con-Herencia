export default class Cl_controlador{
    constructor(modelo,vista){
        this.modelo=modelo;
        this.vista=vista;
    }
    procesarFlores(){
        this.modelo.procesarRamo(this.vista.iniciarFlores());
        this.vista.repo1(
            this.modelo.totalPagado(),
            this.modelo.cantidadFloresN(),
            this.modelo.cantidadFloresMed(),
            this.modelo.porcFloresMed()
        )
    }


    procesarFrutas(){
        this.modelo.procesarRamo(this.vista.iniciarFrutas());
        this.vista.repo2(
            this.modelo.totalPagado(),
            this.modelo.cantidadFloresN(),
            this.modelo.cantidadFloresMed(),
            this.modelo.porcFloresMed()
        )
    }
}
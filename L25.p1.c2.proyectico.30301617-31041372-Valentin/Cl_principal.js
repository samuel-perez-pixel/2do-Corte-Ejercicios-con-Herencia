import Cl_controlador from "./Cl_controlador.js";
import Cl_mTienda from "./Cl_mTienda.js";
import Cl_vTienda from "./Cl_vTienda.js";


export default class Cl_principal{
    constructor(){
        let modelo=new Cl_mTienda(),
        vista=new Cl_vTienda(),
        controlador=new Cl_controlador(modelo,vista);
        vista.controlador=controlador;
    }
}
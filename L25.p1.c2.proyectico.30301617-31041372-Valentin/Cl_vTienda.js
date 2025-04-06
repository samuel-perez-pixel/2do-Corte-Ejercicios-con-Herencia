import Cl_mFlores from "./Cl_mFlores.js";
import Cl_vFlores from "./Cl_vFlores.js";
import Cl_mFrutas from "./Cl_mFrutas.js";
import Cl_vFrutas from "./Cl_vFrutas.js";

export default class Cl_vTienda{
    constructor(){
        this.controlador=null;
        this.vFrutas=new Cl_vFrutas();
        this.vFlores=new Cl_vFlores();

        this.salida=document.getElementById("salida");
        this.tablaFlores=document.getElementById("tablaFlores");
        this.tablaFrutas=document.getElementById("tablaFrutas");

        this.vFrutas.btProcesar.onclick=()=>{
            this.controlador.procesarFrutas();
        }
        this.vFlores.btProcesar.onclick=()=>{
            this.controlador.procesarFlores();
        }
        
    }
    iniciarFrutas(){
        this.mFrutas=new Cl_mFrutas({
            codigo:this.vFrutas.getCodigo(),
            envase:this.vFrutas.getEnvase(),
            costo:this.vFrutas.getCosto(),
            extra:this.vFrutas.getExtra()
        });
        return this.mFrutas;
    }
    iniciarFlores(){
        this.mFlores=new Cl_mFlores({
            codigo:this.vFlores.getCodigo(),
            envase:this.vFlores.getEnvase(),
            costo:this.vFlores.getCosto(),
            tipoFlores:this.vFlores.getTipoFlores()
        });
        return this.mFlores;
    }

   
    repo1(totalPagado,cantidadFloresN,cantidadFloresMed,porcFloresMed){
        this.tablaFlores.innerHTML+=`
        <tr>
        <td>${this.mFlores.getCodigo()}</td>    
        <td>${this.mFlores.getEnvase()}</td>
        <td>${this.mFlores.getCosto()}</td>
        <td>${this.mFlores.getTipoFlores()}</td>
        <td>${this.mFlores.descuento()}</td>
        <td>${this.mFlores.recargo()}</td>
        <td>${this.mFlores.totalPagar()}</td>
        </tr> 
        `
        this.salida.innerHTML=`
        <br> Total Pagado:${totalPagado}
        <br> Cantidad Flores Naturales:${cantidadFloresN}
        <br> Cantidad Flores Medianas:${cantidadFloresMed}
        <br> Porcentaje Flores Medianas:${porcFloresMed}%   `
    }

    repo2(totalPagado,cantidadFloresN,cantidadFloresMed,porcFloresMed){
        this.tablaFrutas.innerHTML+=`
        <tr>
        <td>${this.mFrutas.getCodigo()}</td>    
        <td>${this.mFrutas.getEnvase()}</td>
        <td>${this.mFrutas.getCosto()}</td>
        <td>${this.mFrutas.getExtra()}</td>
        <td>${this.mFrutas.descuento()}</td>
        <td>${this.mFrutas.totalPagar()}</td>
        </tr> 
        `
        this.salida.innerHTML=`
        <br> Total Pagado:${totalPagado}
        <br> Cantidad Flores Naturales:${cantidadFloresN}
        <br> Cantidad Flores Medianas:${cantidadFloresMed}
        <br> Porcentaje Flores Medianas:${porcFloresMed}%   `
    }
}
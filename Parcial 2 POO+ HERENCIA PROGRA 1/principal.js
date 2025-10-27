import Cl_Financiado from "./Cl_Financiado.js";
import Cl_Contado from "./Cl_Contado.js";

export default class Principal {
    constructor(){
        let financiado= new Cl_Financiado (10,200,48,10,100,3),
        contado= new Cl_Contado (8,200,24,15,5),
        contado2= new Cl_Contado (5,150,12,30,10);
        let salida = document.getElementById('salida');
        salida.innerHTML = `
        <h2>Financiado</h2>
        <p>Cantidad de personas: ${financiado.cantPer}</p>
        <p>Monto: $${financiado.monto}</p>
        <p>Horas: ${financiado.horas}</p>
        <p>Interes: ${financiado.interes}</p>
        <p>Cuota de interes: ${financiado.cuotaI}</p>
        <p>Plazo: ${financiado.plazo}</p>
        <p>Recargo: ${financiado.recargo()}</p>
        <p>Precio por plazo: ${financiado.precioPlazo()}</p>
        <h2>Contado</h2>
        <p>Cantidad de personas: ${contado.cantPer}</p>
        <p>Monto: $${contado.monto}</p>
        <p>Horas: ${contado.horas}</p>
        <p>Horas de trato anticipado: ${contado.horasTrato}</p>
        <p>Descuento: ${contado.descuento}</p>
        <p>Descuento Contado: ${contado.descuentoContado()}</p>
        <h2>Contado 2</h2>
        <p>Cantidad de personas: ${contado2.cantPer}</p>
        <p>Monto: $${contado2.monto}</p>
        <p>Horas: ${contado2.horas}</p>
        <p>Horas de trato anticipado: ${contado2.horasTrato}</p>
        <p>Descuento: ${contado2.descuento}</p>
        <p>Descuento Contado: ${contado2.descuentoContado()}</p>

        <p>Total por ambos grupos: ${financiado.recargo() + contado.descuentoContado()}</p>
        <p>Precio del plazo por financiado: ${financiado.precioPlazo()}</p>
        `
    }
}

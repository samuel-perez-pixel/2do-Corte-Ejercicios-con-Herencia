/*En la universidad se le paga a cada profesor un bono, sin embargo
si es personal fijo tiene un sueldo y si es contratado tiene cantidad
de horas, donde cada una se paga a 10$. Considere que a todos los
profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado 
heredan de la clase Cl_profesor.

Haga un programa que lea los datos de un profesor fijo y reporte su
ingreso total.
Ejemplos de la corrida: 
Nombre del profesor fijo: Carlos 
Monto del bono: $25 
Monto del sueldo: $100 
Ingreso total del profesor Carlos: $125 
Nombre del profesor fijo: Carolina 
Monto del bono: $40 
Monto del sueldo: $90 
Ingreso total del profesor Carolina: $130 */

import Cl_fijo from "./Cl_fijo.js";
export default class principal{
    constructor(){
        let profe1= new Cl_fijo("Carlos",25,100),
            profe2= new Cl_fijo("Carolina",40,90);
            let salida= document.getElementById("salida");
            salida.innerHTML+=`Nombre: ${profe1.nombre}<br>
            Bono: ${profe1.bono}<br>
            Sueldo: ${profe1.sueldo}<br>
            Total a cobrar: ${profe1.ingresoTotal()}<br>
            <br>
            Nombre: ${profe2.nombre}<br>
            Bono: ${profe2.bono}<br>
            Sueldo: ${profe2.sueldo}<br>
            Total a cobrar: ${profe2.ingresoTotal()}<br>`;
                            
    }
}
/**En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene 
un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere 
que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan 
de la clase Cl_profesor. 
Haga un programa que haga uso de la misma clase Cl_profesor del ejercicio anterior, lea los 
datos de un profesor contratado y reporte su ingreso total. 
Ejemplos de la corrida: 
Nombre del profesor contratado: Rafael 
Monto del bono: $30 
Cantidad de horas: 15 
Ingreso total del profesor Rafael: $180 
Nombre del profesor contratado: Felicia 
Monto del bono: $30 
Cantidad de horas: 20 
Ingreso total del profesor Felicia: $230  */

import Cl_contratado from "./Cl_contratado.js";
export default class Cl_main{
    constructor(){  
        let profesorFijo = new Cl_contratado("Rafael",30,15);
        let profefijo2 = new Cl_contratado("Felicia",30,20);
        let salida = document.getElementById("salida");
        salida.innerHTML+=`Nombre: ${profesorFijo.nombre}<br>
        Bono: ${profesorFijo.bono}<br>
        Horas: ${profesorFijo.horas}<br>
        Total a cobrar: ${profesorFijo.ingresoTotal()}<br>
        <br>
        Nombre: ${profefijo2.nombre}<br>
        Bono: ${profefijo2.bono}<br>
        Horas: ${profefijo2.horas}<br>
        Total a cobrar: ${profefijo2.ingresoTotal()}<br>`;
    }
}
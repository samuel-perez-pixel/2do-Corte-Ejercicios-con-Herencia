/*
El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias. 
Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias. 
Un estudiante deportista es admitido en el equipo universitario de beisbol si su promedio de 
notas es superior a 14 y tiene más de 21 años; para el equipo de fútbol ingresa con 19 años y 
promedio mínimo de 12 (1=beisbol - 2=fútbol). 
Diseñe las clases Cl_estudiante y Cl_deportista, usando herencia, de manera que procese un 
estudiante y reporte si es admitido en el equipo que solicita. 
 EJERCICIOS MICRO MARATÓN Nº3 - CORTE 2 
Pág. 3 
______________________________________________________ 
UCLA - DCyT - Coordinación del Eje de Programación 
Ejemplos de la corrida: 
Nombre del estudiante: Juan 
Acumulado de notas: 132 
Cantidad de materias: 8 
Deporte (1=beisbol - 2=fútbol): 1 
Edad: 21 
Nota promedio: 16.50 
Juan es admitido en beisbol 
Nombre del estudiante: Félix 
Acumulado de notas: 110 
Cantidad de materias: 10 
Deporte (1=beisbol - 2=fútbol): 2 
Edad: 20 
Nota promedio: 11.00 
Félix no es admitido en fútbol 

*/ 

import Cl_deportista from "./Cl_deportista.js";
export default class Cl_principal{
    constructor(){
        let depor1= new Cl_deportista("Juan",132,8,1,21),
            depor2= new Cl_deportista("Felix",110,10,2,20);
            let salida= document.getElementById("salida");
            salida.innerHTML+=`Nombre: ${depor1.nombre}<br>
            Acumulado de Notas: ${depor1.notas}<br>
            Materias: ${depor1.cantMaterias}<br>
            Edad: ${depor1.edad}<br>
            Promedio: ${depor1.promedio()}<br>
            Deporte 1=BEISBOL 2=FUTBOL: ${depor1.deporte}<br>
            ${depor1.nombre} es admitido en ${depor1.admision()}
            <br>
            Nombre: ${depor2.nombre}<br>
            Acumulado de Notas: ${depor2.notas}<br>
            Materias: ${depor2.cantMaterias}<br>
            Promedio: ${depor2.promedio()}<br>
            Deporte 1=BEISBOL 2=FUTBOL: ${depor2.deporte}<br>
            ${depor2.nombre} es admitido en ${depor2.admision()}`
    }
}
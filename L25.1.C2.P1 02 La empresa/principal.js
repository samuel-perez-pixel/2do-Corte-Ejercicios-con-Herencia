/*
 En una empresa se conoce el nombre y edad de su personal, 
con un sueldo base de $150. Trabajan obreros (1) y 
administrativos (2). Los obreros hasta con 3 hijos reciben $50 
de bono, con más de 3 hijos reciben $70. Los administrativos 
tienen nivel de estudio (1=bachiller, 2=técnico, 3=universitario), 
y reciben un incentivo (sólo si son mayor de edad) de $50 para 
bachilleres y $100 si tienen otro nivel.*/

import Cl_administrativo from "./Cl_administrativo.js";
import Cl_obrero from "./Cl_obrero.js";
export default class Cl_main{
    constructor(){
        let per1= new Cl_administrativo('Luis',15,2,1),
        per2= new Cl_obrero('Ana',20,1,2),
        per3= new Cl_obrero('Raul',17,1,0),
        per4= new Cl_administrativo('Liz',19,2,3),
        per5= new Cl_obrero('Eva',22,1,5);

        let salida = document.getElementById('salida');
        salida.innerHTML = `
            <BR> Resultados: <BR>
            <br>Nombre: ${per1.getNombre()}<br>
            Edad: ${per1.getEdad()}<br>
            Es mayor de edad: ${per1.mayorEdad()}<br>
            Tipo: ${per1.getTipo()}<br>
            Nivel: ${per1.getNivel()}<br>
            Incentivo: ${per1.incentivo()}<br>
            Sueldo: ${per1.sueldoFinal()}<br>
            <br>
            <br>Nombre: ${per2.getNombre()}<br>
            Edad: ${per2.getEdad()}<br>
            Es mayor de edad: ${per2.mayorEdad()}<br>
            Tipo: ${per2.getTipo()}<br>
            Hijos: ${per2.getHijos()}<br>
            Bono de hijos: ${per2.bonoHijos()}<br>
            Sueldo: ${per2.sueldoFinal()}<br>
            <br>
            <br>Nombre: ${per3.getNombre()}<br>
            Edad: ${per3.getEdad()}<br>
            Es mayor de edad: ${per3.mayorEdad()}<br>
            Tipo: ${per3.getTipo()}<br>
            Hijos: ${per3.getHijos()}<br>
            Bono de hijos: ${per3.bonoHijos()}<br>
            Sueldo: ${per3.sueldoFinal()}<br>
            <br>
            <br>Nombre: ${per4.getNombre()}<br>
            Edad: ${per4.getEdad()}<br>
            Es mayor de edad: ${per4.mayorEdad()}<br>
            Tipo: ${per4.getTipo()}<br>
            Nivel: ${per4.getNivel()}<br>
            Incentivo: ${per4.incentivo()}<br>
            Sueldo: ${per4.sueldoFinal()}<br>
            <br>
            <br>Nombre: ${per5.getNombre()}<br>
            Edad: ${per5.getEdad()}<br>
            Es mayor de edad: ${per5.mayorEdad()}<br>
            Tipo: ${per5.getTipo()}<br>
            Hijos: ${per5.getHijos()}<br>
            Bono de hijos: ${per5.bonoHijos()}<br>
            Sueldo: ${per5.sueldoFinal()}<br>
        `
    }
}
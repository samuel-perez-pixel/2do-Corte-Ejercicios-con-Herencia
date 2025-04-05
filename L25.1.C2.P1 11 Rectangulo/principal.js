/**
 * 9. RECTÁNGULO 
Considerando que un rectángulo varía de un cuadrado sólo 
porque la altura no es igual a la base, diseñe la clase 
Cl_rectangulo que herede de Cl_cuadrado, y luego haga un 
export default class Cl_cuadrado{ 
 constructor(base){ 
 this.base=base 
 } 
 area(){ 
 return this.base * 2 
 } 
 perimetro(){ 
 EJERCICIOS MICRO MARATÓN Nº3 - CORTE 2 
Pág. 4 
______________________________________________________ 
UCLA - DCyT - Coordinación del Eje de Programación 
programa que determine el área y el perímetro de un rectángulo 
(área= base * altura, perímetro= 2*base + 2*altura). 
 return this.base * 4 
 } 
}
Ejemplos de la corrida: 
Base del rectángulo: 4 
Altura: 2 
Área resultante: 8 
Perímetro: 12 
Base del rectángulo: 3 
Altura: 5 
Área resultante: 15 
Perímetro: 16 
 */
import Cl_Rectangulo from "./Cl_Rectangulo.js";
export default class principal {
    constructor() {
        let Rec1 = new Cl_Rectangulo(4, 2),
         Rec2= new Cl_Rectangulo(3, 5);
         let salida=document.getElementById("salida");
         salida.innerHTML += `Base del rectángulo: ${Rec1.base} <br>`;
         salida.innerHTML += `Altura: ${Rec1.altura} <br>`;
         salida.innerHTML += `Área resultante: ${Rec1.area()} <br>`;
         salida.innerHTML += `Perímetro: ${Rec1.perimetro()} <br>`;
         salida.innerHTML += `Base del rectángulo: ${Rec2.base} <br>`;
         salida.innerHTML += `Altura: ${Rec2.altura} <br>`;
         salida.innerHTML += `Área resultante: ${Rec2.area()} <br>`;
         salida.innerHTML += `Perímetro: ${Rec2.perimetro()} <br>`; 
    }
}
/*INTRO2-HERENCIA 
Tomando la Cl_padre del ejercicio anterior, crea la clase Cl_hijo1, que herede de Cl_padre, 
con el atributo atrib1, y la clase Cl_hijo2, que herede de Cl_padre, con el atributo atrib2. 
Cl_hijo1 tiene el método calculo() que multiplica atribA con atrib1; Cl_hijo2 tiene el método 
calculo() que suma atribA con atrib2. **/
import Cl_hijo1 from "./Cl_hijo1.js";
import Cl_hijo2 from "./Cl_hijo2.js";
export default class principal{
    constructor() {
        let hijo1 = new Cl_hijo1(1,2);
        let hijo2 = new Cl_hijo2(3,4);
        let salida = document.getElementById('salida');
        salida.innerHTML+=`Atributo A: ${hijo1.atribA}<br>`;
        salida.innerHTML+=`Atributo 1: ${hijo1.atrib1}<br>`;
        salida.innerHTML+=`Calculo: ${hijo1.calculo()}<br>`;
        salida.innerHTML+=`<br>`;
        salida.innerHTML+=`Atributo A: ${hijo2.atribA}<br>`;
        salida.innerHTML+=`Atributo 2: ${hijo2.atrib2}<br>`;
        salida.innerHTML+=`Calculo: ${hijo2.calculo()}<br>`;
    }
}
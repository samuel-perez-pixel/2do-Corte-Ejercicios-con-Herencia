/*INTRO3-HERENCIA 
Sea la clase Cl_empleado con atributo sueldoBase y método calcularSueldo(), que sólo 
retorna sueldoBase. La clase Cl_obrero hereda de Cl_empleado y también tiene horas extras a 
$2 cada una; la clase Cl_administrativo hereda de Cl_empleado y tiene una prima fija. El 
método calcularSueldo() debe hacer lo indicado en cada clase hija. 
Ej. 
 - calcularSueldo() en obrero es: this.sueldoBase + this.horasExtras * 2 
 - calcularSueldo() en administrativo es: this.sueldoBase + this.primaFija  */
 import Cl_obrero from "./Cl_obrero.js";
    import Cl_admin from "./Cl_admin.js";
    export default class principal{
        constructor(){
            let emple1=new Cl_obrero(100,14),
            emple2=new Cl_admin(100,50);
            let salida=document.getElementById('salida');
            salida.innerHTML+=`Sueldo Obrero: ${emple1.calcularSueldo()}<br>`;
            salida.innerHTML+=`Sueldo Administrativo: ${emple2.calcularSueldo()}<br>`;
        }
    }
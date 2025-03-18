import Cl_ropa from './Cl_ropa.js';
import Cl_vivere from './Cl_vivere.js';

export default class Cl_main{
    constructor(){
        let art1= new Cl_vivere(2,'Leche',10,'basico'),
         art2= new Cl_ropa(1,'Camisa',20,'azul'),
         art3= new Cl_ropa(1,'Short',20,'rojo'),
         art4= new Cl_vivere(2,'Toddy',30,'No basico'),
         art5= new Cl_ropa(1,'Blusa',40,'rojo');
    }
    
}
import Cl_ropa from './Cl_ropa.js';
import Cl_vivere from './Cl_vivere.js';

export default class Cl_main{
    constructor(){
        let art1= new Cl_vivere(2,'Leche',10,'basico'),
         art2= new Cl_ropa(1,'Camisa',20,2),
         art3= new Cl_ropa(1,'Short',20,3),
         art4= new Cl_vivere(2,'Toddy',30,'No basico'),
         art5= new Cl_ropa(1,'Blusa',40,3);
         let salida = document.getElementById('salida');
         salida.innerHTML+=`
         <Br> Resultados
            <br> Tipo: ${art1.getTipo()}<br>
            Nombre: ${art1.getNombre()}<br>
            Precio: ${art1.getPrecio()}<br>
            Producto: ${art1.getProducto()}<br>
            Ganancia: ${art1.gananciaBasico()}<br>
            Total a pagar: ${art1.totalPagar()}<br>
            <br>
            <br> Tipo: ${art2.getTipo()}<br>
            Nombre: ${art2.getNombre()}<br>
            Precio: ${art2.getPrecio()}<br>
            Color: ${art2.getColor()}<br>
            Descuento: ${art2.descuentoRojo()}<br>
            Precio final: ${art2.precioFinal()}<br>
            <br>
            <br> Tipo: ${art3.getTipo()}<br>
            Nombre: ${art3.getNombre()}<br>
            Precio: ${art3.getPrecio()}<br>
            Color: ${art3.getColor()}<br>
            Descuento: ${art3.descuentoRojo()}<br>
            Precio final: ${art3.precioFinal()}<br>
            <br>
            <br> Tipo: ${art4.getTipo()}<br>
            Nombre: ${art4.getNombre()}<br>
            Precio: ${art4.getPrecio()}<br>
            Producto: ${art4.getProducto()}<br> 
            Ganancia: ${art4.gananciaBasico()}<br>
            Total a pagar: ${art4.totalPagar()}<br>
            <br>
            <br> Tipo: ${art5.getTipo()}<br>
            Nombre: ${art5.getNombre()}<br>
            Precio: ${art5.getPrecio()}<br>
            Color: ${art5.getColor()}<br>
            Descuento: ${art5.descuentoRojo()}<br>
            Precio final: ${art5.precioFinal()}<br>
         `
    }
}
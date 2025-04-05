/*El departamento de juguetes está ofreciendo un descuento del 10% si el juguete es para 
edad de 1 año. 
Usando la clase suministrada Cl_articulo, programe la clase Cl_juguete con el atributo edad y 
el método descuento, que permita calcular el monto a pagar correctamente. Note que esta nueva 
clase sólo amerita edad y descuento(). 
Realice un programa que lea los datos de un juguete y reporte el monto a pagar. 
*/

import juguete from "./Cl_juguete.js";

let carrito = new juguete("carrito", 2, 10, 2),
    peluche = new juguete ("peluche", 3, 20, 1);

let salida = document.getElementById("salida");

salida.innerHTML = `
<br>Nombre del juguete: ${carrito.nombre}
<br>Cantidad: ${carrito.cantidad}
<br>Precio base: ${carrito.precioBase}
<br>Edad recomendada:${carrito.edad}
<br>Monto a pagar: ${carrito.descuento ()}
<br>
<br>
<br>Nombre del juguete: ${peluche.nombre}
<br>Cantidad: ${peluche.cantidad}
<br>Precio base: ${peluche.precioBase}
<br>Edad recomendada:${peluche.edad}
<br>Monto a pagar: ${peluche.descuento ()}`
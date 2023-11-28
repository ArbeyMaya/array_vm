//acceder a los elementos de un array

document.write("<h3>Elementos de un array </h3>")

const numbers = [1, 2, 3, 4, 5];
document.write("El Arreglo en su primera posicion 1 es: " + numbers[0] + "<br>");
document.write("El Arreglo en su primera posicion 2 es: " + numbers[2] + "<br>");


//usar variables para acceder a los elementos de un array.

let index = 4;
document.write("La variable index corresponde a: " + numbers[index] + "<br>")

//Modificar elementos de un array.

numbers[0] = 10;
numbers[2] = 30;

document.write("El nuevo arreglo es: " + numbers[0] + "<br>")
document.write("El nuevo arreglo es: " + numbers[2] + "<br>")

//Longitud de un array
document.write("<h3>Longitud de un array </h3>")

const frutas = ["manzana", "pera", "plátano", "fresa"]

document.write("El array de frutas es: " + frutas + "<br>")
document.write("El array de frutas tiene una longitud de: " + frutas.length + "<br>")

//asignar un nuevo valor a la propiedad
frutas.length = 2

document.write("El Array de frutas es: " + frutas + "<br>")
document.write("Nuevo valor: " + frutas.length + "<br>")

//METODOS DE ARRAYS
document.write("<h3>Metodos de arrays </h3>")

document.write("<h4>.push() </h4>")

const frutas2 = ["platano", "fresa"]
/*frutas2.push("naranja")
document.write("El nuevo elemento añadido al array es: " + frutas2 + "<br>")

*/
//devolver el nuevo longitud del array

document.write("longitud del array: " + frutas2.length + "<br>")

const newLength = frutas2.push("naranja")
document.write("nueva longitud del array: " + newLength + "<br>")
document.write(frutas2)


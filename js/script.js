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
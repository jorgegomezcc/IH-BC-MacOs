// --------- Ejercicio 1 (map): ---------
// Crea un array con los nombres de 5 de tus amigos o familiares. Utiliza el método .map() para crear un nuevo array con las iniciales de cada nombre.

const amigos = ["Hector", "Julian", "Carlos", "Pablo", "Javier"];
const inicial = amigos.map((nombre) => nombre[0]);

console.log(inicial);

// La función flecha "=>" toma un solo argumento (nombre) y devuelve el primer carácter de ese argumento (nombre[0]). Entonces, la variable "inicial" será un nuevo array con las "inicial" de cada nombre.


// --------- Ejercicio 2 (filter): ---------
//  Crea un array con números del 1 al 10. Utiliza el método .filter() para crear un nuevo array con solo los números pares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerospares = numeros.filter(numero => numero % 2 === 0);
console.log(numerospares);


// --------- Ejercicio 3 (sort): ---------
// Crea un array con nombres de frutas desordenadas. Utiliza el método .sort() para ordenar los nombres de las frutas en orden alfabético.


const frutas = ['manzana', 'naranja', 'mandarina', 'platano', 'fresa'];
frutas.sort();
console.log(frutas);

// --------- Ejercicio 4 (forEach): ---------
// Crea un array con números aleatorios. Utiliza el método .forEach() para ir sumando cada número a un resultado final.

const numerosaleatorios = [5, 18, 9, 47, 23, 3]
let resultado = 0;
numerosaleatorios.forEach((numerosasumar) => (resultado += numerosasumar));
console.log(resultado);

let paises = ["arg", "vzl", "col", "esp"];
let ciudades = ["bcn", "mad", "par", "lnd"];
let combinacion = paises.concat(ciudades  )
console.log(combinacion);
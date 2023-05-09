// Como resumir una funcion como la siguiente?

// function crearPersona (nombre, apellido) {
//     return {
//         nombre: nombre,
//         apellido: apellido
//     };
// }

// Podemos resumirla asi:

function crearPersona (nombre, apellido) {
    return {nombre, apellido};
}

// O hacerla con una funcion tipo flecha

// En este CacheStorage, en la funcion tipo flecha como ya sbaemos, si solo tiene un return, no hace falta añadirlo en la funcion, ni tampoco añadir las llaves, pero en este caso, como los argumentos de la funcion son los mismo que queremos devolver en el return, tenemos que añadir un parentesis en los mismos para que JS no crea que estamos añadiendo dichos parametros de nuevo al return
const crearPersona2 = (nombre, apellido) => ({nombre, apellido});


const persona = crearPersona ("Jorge", "Gomez");

const persona2 = crearPersona2 ("Ana", "Liarte");

console.log(persona)

console.log(persona2);


// si queremos imprimir argumentos de una funcion lo podemos hacer asi:

function imprimeArgumentos() {
    console.log(arguments);
}

// Si lo ejecutamos con una funcion tipo flecha no podriamos ver lo mismo, tenemos que añadir el parametro "rest" "...", el cual le dice que de todos los argumentos que sean enviardos al argumento de la funcion tipo flecha, se cree un array con cada uno de ellos, ademas hay que tener una consideracion, una vez añadimos el parametro resizeTo, no podemos añadir ningun otro argumento

const imprimeArgumentos2 = (...arguments) => {
    console.log(arguments);
};

const imprimeArgumentos3 = (edad, ...args) => {
    console.log({ edad, args });
};

const imprimeArgumentos4 = ( ...args) => {
    return args;
};


imprimeArgumentos (10, true, false, "Jorge", "hola")
imprimeArgumentos2 (10, true, false, "Jorge", "hola")
imprimeArgumentos3 (10, true, false, "Jorge", "hola")
imprimeArgumentos4 (10, true, false, "Jorge", "hola")

const [edad, vivo, casado, nombre, saludo] = imprimeArgumentos4 (10, true, false, "Jorge", "hola");

console.log(edad);
console.log(casado);


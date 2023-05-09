// let a = 11
// let b = 12

// Numero mas alto
//manera condicional

console.log("numero mas alto");
console.log("---------------------");

function maxOfTwonumeros(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
     }
   };

   console.log(maxOfTwonumeros (8, 10))

//   Metodo de numeros - Metodo MATH

const maxOfTwonumerosMath = (a, b) => {
    return Math.max(a, b)
};
console.log(maxOfTwonumerosMath (14, 16));



//   palabra mas larga

console.log("Palabra mas larga");
console.log("----------------------");

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];


function findLongestWord(words) {
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord(words)); // Output: 'crocodile'

// teoria

//   function findLongestWord(words) {
//     let longestWord = "";
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//       }
//     }
//     return longestWord;
//   }

//   Calcular suma

console.log("Calcular Suma");
console.log("---------------------");

  const numeros = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

  function sumnumeros(numeros) {
    let sum = 0;
    for (let i = 0; i < numeros.length; i++) {
      sum += numeros[i];
    }
    return sum;
  }
  console.log(sumnumeros(numeros)); // Output: 87


  const mixedArr = [6, "miami", 1, true, "barca", "200", "Lisboa", 8, 10];

  const suma = (matrixMixta) => {  //funcion tipo flecha
    if (matrixMixta.length === 0) return 0 //comprobamos si tiene contenido 
    let suma = 0 
    for (let i = 0; i < matrixMixta.length; i++) {  //Creamos un bucle para comprobar el polimorfismo
        let elemento = matrixMixta[i]; //Guardamos la iteracion individual en una variable
        if (typeof elemento === 'String') { //condicionamos el tipo de elemento string para tranformarlo en numero
            suma += elemento.length
        }else if ( typeof elemento === true) { // en esta condicion transformamos el tipo de dato buleano true en un numero
            suma += 1
        }else if (typeof elemento === 'object' && valor !== null) { // En esta condicion hacemos que si se incluye un objeto devolvemos un error (añadimos el null por que en esencia el valor null tambien es un objeto)
            throw new Error("No aceptamos objetos dentro de esta operacion")
        }else { //finalmente equiparamos la variable "elemento" a la variable "suma" para en efecto realizar la operacion matematica
            elemento = suma
        }
    }

  }

//   typeof === constructor de verificacion de tipos de datos


// Calcular media

console.log("Calcular media");
console.log("------------------");

const numeros1 = [2, 6, 9, 10, 7, 4, 1, 9]

  function mediadenumeros(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma / numeros.length;
  };
  console.log(mediadenumeros(numeros1)); // 


  const palabras = ['crab','poison','contagious','simple','bring','sharp','playground','poison','communion','simple','bring'];

  const arrayUnificacion = (palabras) => {
    if (palabras.length === 0) return null;

    let arraylimpio = [];

    palabras.forEach((elemento) => {
        for (let i = 0; i < palabras.length; i ++)
        if (!arraylimpio.includes(elemento)) {
            arraylimpio.push(elemento);
        }
        console.log(arraylimpio)
        return arraylimpio;
    });
  }

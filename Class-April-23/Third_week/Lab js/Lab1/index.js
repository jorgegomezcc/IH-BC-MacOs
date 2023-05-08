var hacker1 = "Ana"
var hacker2 = "Carlos"

// Iteración 1: Nombres y entradas

console.log("Nombres y entradas")


console.log("El nombre del conductor es "+ (hacker1));
console.log("El nombre del navegante es " + (hacker2));

console.log("Con Template Literal")
console.log("---------------------")

console.log(`El nombre del conductor es ${hacker1}`);
console.log(`El nombre del navegante es ${hacker2}`);

// Iteración 2: Condicionales

console.log("2. Condicionales")


if (hacker1.length > hacker2.length) { 
    console.log(hacker1 + " tiene el nombre mas largo que " + hacker2);
} else if (hacker1.length < hacker2.length){ 
    console.log(hacker2 + " tiene el nombre mas largo que " + hacker1);
} else {
    console.log(`Vaya ${hacker1} y ${hacker2} tienen la misma longitud`)
}

// Iteración 3: Loops  // hacker1 es la variable "var hacker1 = Jorge "

console.log("3. Loops - Deletreado")


let deletreado = "";



// Mayusculas + deletrado 

let mayusReverse = hacker1.split("");
mayusReverse.reverse("");

 for (let index = 0; index < hacker1.length; index++) {
     deletreado += hacker1[index].toUpperCase() + " ";
 }
console.log(deletreado) 

console.log("3.2 Loops - Deletreado inverso")


// Mayusculas + deletreado + inverso "dificil"

let deletradoReverse= "";

for (let index = 0; index < mayusReverse.length; index++) {
    deletradoReverse += mayusReverse[index].toUpperCase() + " ";
}

console.log(deletradoReverse);

// Mayusculas + deletreado + inverso "facil"

let deletreadoReverse1= "";

for (let index = hacker1.length -1; index >= 0 ; index--) {
    deletreadoReverse1 += hacker1[index].toUpperCase() + " ";
}

console.log(deletreadoReverse1);

console.log("3.3 Loops - condicionales")


// 3.3 orden Lxicogragico


let conductor = hacker1;
let navegante = hacker2;

let ordenLexico = [conductor, navegante]

// if (conductor > navegante) { 
//     console.log(`${conductor} va primero que ${navegante}`);
// } else if (navegante > conductor) {
//     console.log(`Yo, ${navegante} voy primero definitivamente`);    
// } else {
//     console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
// }


ordenLexico.sort((nombreUno, nombreDos) => {
    if (nombreUno > nombreDos) { 
        console.log(`${nombreUno} va primero que ${nombreDos}`);
    } else if (nombreDos > nombreUno) {
        console.log(`Yo, ${nombreDos} voy primero definitivamente`);    
    } else {
        console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
    }

})



// Bonus Palindormo

console.log("Bonus - Palindromo");
console.log("-----------------");

//   // Definir una cadena para verificar si es un palíndromo
const phraseToCheck = "Anita lava la tina";

// Convertir la cadena a minúsculas y eliminar los espacios en blanco
const phrase = phraseToCheck.toLowerCase().replace(/ /g, '');

// Variable booleana para verificar si es un palíndromo
let isPalindrome = true;

// Loop for para comparar caracteres
for (let i = 0; i < phrase.length / 2; i++) {
  if (phrase[i] !== phrase[phrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

// Mostrar el resultado usando if
if (isPalindrome) {
  console.log(`${phraseToCheck} es un palíndromo`);
} else {
  console.log(`${phraseToCheck} no es un palíndromo`);
}

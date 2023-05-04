// Ejercicios martes
const comidafavorita = ["Pizza", "Pasta", "Sushi", "Helado"]

console.log("me gusta mucho la " + comidafavorita [0]);

console.log("me gusta mucho la  " + comidafavorita [1]);

console.log("---------------------")

const movies = [
    {
      movie: "Wolf of Wallstreet",
      genre: ["Drama", "Action", "Comedy"],
      director: ["Martin Scorsese"],
      location: "New York City, NY",
      actors: ["Jonah Hill", "Margo Robbie", "Leo Di Caprio"],
      year: 2010,
    },
    {
      movie: "Fight Club",
      genre: ["Drama", "Noir", "Comedy", "Action"],
      director: ["David Fincher"],
      location: "Los Angeles, California",
      actors: ["Bradd Pitt", "Edward Norton", "Helena Bonham Carter"],
      year: 1999,
    },
    {
      movie: "The Neon Demon",
      genre: ["Aleix", "Thriller", "Drama"],
      director: ["Nicolas Winding Refn"],
      location: "Copenhagen, Denmark",
      actors: ["Elle Fanning", "Jenna Malone", "Keanu Reeves"],
      year: 2016,
    },
  ];

  console.log ("Me gusta mucho la pelicula " + movies[1].movie + " dirigida por " + movies[1].director + " y protagonizada por " + movies[1].actors[0] + " y " + movies[1].actors[1]);

// Tambien se puede realizar de una nueva forma de hacerlo


//Template literal

console.log(`Me gusta mucho la pelicula ${movies[1].movie} dirigida por ${movies[1].director[0]} y protagonizada por ${movies[1].actors[0]} y ${movies[1].actors[1]}`);

console.log("---------------------")



let Diego;
var Jorge;
Diego = "Es un profesor de Programacion"
Jorge = "Es un estudiante de Programacion"

console.log (Diego);
console.log (Jorge);

var estudiante = ["Jorge", "Emilio", "Facundo", "Chloe"];
console.log(estudiante);

console.log("---------------------")

let diego = "profesor";
console.log(`${diego != "professor"}`);

console.log("---------------------")


function miPrimeraFuncion (numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
}

console.log(miPrimeraFuncion (8, 20, 12))

console.log("---------------------")

let edad1 = 32
let edad2 = 30
let edad3 = 38

console.log(miPrimeraFuncion(edad1, edad2, edad3))

console.log("---------------------")

console.log("condicionales");

// const number = prompt ("Introduce un numero: ")

// if (number >= 0) {
//     console.log("Este numero es positivo")
// } else {
//     console.log("este numero es negativo")
// }

// const drinkingAge = parseInt (
//     prompt ("Si quieres comprar alcohol, introduce tu edad")
// )

// if(drinkingAge >=18 && drinkingAge <=29) {
//     console.log("Disfruta de tu bebida");
// } else if (drinkingAge >=30 && drinkingAge <= 64) {
//     console.log("Disfruta, pero ten cuidado con la resaca de mañana")
// } else if (drinkingAge >=65) {
//     console.log("Puedes beber, pero ya no tienes edad para resacas")
// } else {
//     console.log("Lo siento chaval, vuelve cuando seas mayor de edad")
// };

// console.log("---------------------")


// const askUser = prompt ( "Dime de que Pais eres y te dire a que Continente Perteneces" )

// if (askUser === "USA" || askUser === "Colombia" || askUser === "Argentina" || askUser === "Mexico" || askUser === "Venezuela") {
//     console.log("Tu continente es America")
// } else if (askUser === "España" || askUser === "Francia" || askUser === "Belgica" || askUser === "Alemania" || askUser === "Italia") {
//     console.log("Tu continente es Europa")
// } else if (askUser === "China" || askUser === "Malasia" || askUser === "Japon" || askUser === "India" || askUser === "Indonesia") {
//     console.log("Tu continente es Asia")
// } else if (askUser === "" || askUser === " ") {
//     console.log("No has escrito nada")
// } else {
//     console.log("Tu continente es Africa u Oceania")
// };


const numero = [10, 40, 44, 33, 45]

//function sumadeArrayDeNums(arrayDeNumero) {};


const sumadeArrayDeNumsFlecha = (arrayDeNumero) => {
    let sumatotal = 0; 
for (let i = 0; i < arrayDeNumero.length; i++){ sumatotal += arrayDeNumero[i]
    }
    return sumatotal;
};
sumadeArrayDeNumsFlecha(numero)

// const sumadeArrayDeNumsFlecha = (arrayDeNumero) => {
//     let sumatotal = 0; 
//     for (let i = 0, i < arrayDeNumero.length; i++){ sumatotal += arrayDeNumero[i]
//     }
//     return sumatotal
// };
// sumadeArrayDeNumsFlecha(numeros)
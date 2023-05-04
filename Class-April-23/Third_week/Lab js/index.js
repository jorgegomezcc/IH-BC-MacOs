var hacker1 = "Jorge"
var hacker2 = "Eduardo"

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

// Iteración 3: Loops




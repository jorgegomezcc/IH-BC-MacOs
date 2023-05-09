let personaje = {
    nombre: 'Tony Stark',
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70,
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
}

console.log(personaje.coords.lat)

console.log(`${personaje.nombre} tiene ${personaje.trajes.length} trajes`)

let numTrajes = personaje.trajes.length
let nombre = personaje.nombre

console.log(`${nombre} tiene ${numTrajes} trajes`)


const getAleatorio2 = () => Math.random ();

console.log( getAleatorio2() );
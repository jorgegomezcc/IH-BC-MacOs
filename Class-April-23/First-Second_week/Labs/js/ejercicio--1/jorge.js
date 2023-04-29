console.log("Work Here");

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


console.log("Me gusta mucho la peli");

console.log(movies [1].director[0]);
console.log(movies [1].movie);

console.log(" Me gusta mucho la peli " + movies[1].movie + " dirigida por " + movies[1].director[0]);

console.log( 
  `Me gusta mucho la peli ${movies[1].movie} dirigida por ${movies[1].director[0]} `
  );
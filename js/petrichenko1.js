const numberOfFilms = +prompt('How many movies did you see?', '');
const movieName = prompt('One of the last movies you saw');
const movieRate = prompt('How would you rate it?');
const movieNameDouble = prompt('One of the last movies you saw');
const movieRateDouble = prompt('How would you rate it?');

const personaMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  privat: false,
};

personaMovieDB.movies[movieName] = movieRate;
personaMovieDB.movies[movieNameDouble] = movieRateDouble;

console.log(personaMovieDB);

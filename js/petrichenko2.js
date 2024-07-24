let numberOfFilms;

function start() {
  numberOfFilms = +prompt('How many movies did you see?', '');
  while (
    numberOfFilms === null ||
    numberOfFilms === '' ||
    isNaN(numberOfFilms)
  ) {
    numberOfFilms = +prompt('How many movies did you see?', '');
  }
}

start();

const personaMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i += 1) {
    const movieName = prompt('One of the last movies you saw');
    const movieRate = prompt('How would you rate it?');
    if (
      movieName &&
      movieRate &&
      movieName !== '' &&
      movieRate !== '' &&
      movieName.length < 50
    ) {
      personaMovieDB.movies[movieName] = movieRate;
      console.log('ok');
    } else {
      i -= 1;
      console.log('error');
    }
  }
}

rememberMyFilms();

function detectMyLevel() {
  if (personaMovieDB.count < 10) {
    alert("You're looser");
  } else if (personaMovieDB.count > 10 && personaMovieDB.count < 30) {
    alert("You're an average viewer");
  } else if (personaMovieDB.count > 30) {
    alert("You're the best of the best!");
  } else {
    alert('error');
  }
}

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    const answer = prompt(`Your favorite genre ${i + 1}`);
    if (answer !== null && answer !== '' && isNaN(answer)) {
      personaMovieDB.genres.push(answer);
    } else {
      i -= 1;
    }
  }
}

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personaMovieDB);
  }
}

writeYourGenres();

detectMyLevel();

showMyDB(personaMovieDB.privat);

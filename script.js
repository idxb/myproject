const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Какой фильм вы сотрели?',''),
      b = prompt('Сколько баллов?'),
      c = prompt('Какой фильм вы смотрели?'),
      d = prompt('Сколько баллов?');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d; 

console.log(personalMovieDB);
// We've got an array of movie objects which each have an array of genres
// We want to output an array unique genres

const movies = require('./movies_with_ids.json');

let genres = [];

movies.forEach(movie => {
  let _genres = movie.genres;
  _genres.forEach(genre => {
    if (genres.indexOf(genre) == -1) {
      genres.push(genre);
    }
  });
});

console.log(genres);
const movies = require("./movies.json");
const fs = require("fs");

let moviesWithIds = [];

for (let i = 0; i < movies.length; i++) {
  let movie = movies[i];
  let id = i + 1;
  movie.id = id;
  moviesWithIds.push(movie);
}

fs.writeFile('movies_with_ids.json', JSON.stringify(moviesWithIds), 'utf8', () => {

});
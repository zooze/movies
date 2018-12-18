// Create a function (or set of functions that outputs the HTML below when given a list of directors and movies.)
 

let desiredHtml = `
  <div class='directors'>
    <div class='director' ng-repeat='director in directors'>
      <h2>{{director.name}}</h2>
      <p>Movies by {{director.name}}:</p>
      <ul class='movies'>
        <li ng-repeat='movie in director.movies'>{{movie}}</li>
      </ul>
    </div>
  </div>
`;

const generateMoviesListHtml = movies => {
  let liElements = movies.map(movie => `<li>${movie}</li>`).join('');
  return `<ul class='movies'>${liElements}</ul>`;
}

const generateDirectorHtml = director => {
  let moviesHtml = generateMoviesListHtml(director.movies);
  return `
    <div class='director'>
      <h2>${director.name}</h2>
      <p>Movies by ${director.name}:</p>
      ${moviesHtml}
    </div>`;
}

const generateDirectorsHtml = directors => {
  let directorsList = directors.map(generateDirectorHtml).join('');
  return `<div class='directors'>${directorsList}</div>`;
};

let directors = require("../data/directors_with_movies.json");
let html = generateDirectorsHtml(directors);

console.log(html);
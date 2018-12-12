// Genres array to play with
let genres = require('../data/genres.json');

// Build array of <li> elements
const generateListHtml = genre =>{
  let liElementArray = genre.map(genre => {
    return `<li>${genre}</li>`;
  });
  return [].concat('<ul>', liElementArray, '</ul>').join('');

}
let genresHtml = generateListHtml(genres);
console.log(genresHtml);



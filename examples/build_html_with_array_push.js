// Genres array to play with
let genres = require('../data/genres.json');

let htmlArray = [];

htmlArray.push('<ul>');
genres.forEach(genre => {
  htmlArray.push(`<li>${genre}</li>`);
});

htmlArray.push('</ul>');

html = htmlArray.join('');
console.log(html);
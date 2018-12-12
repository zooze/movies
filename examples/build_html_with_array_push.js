// Genres array to play with
let genres = require('../data/genres.json');

const generateListHtml = genre =>{
  let htmlArray = [];
  htmlArray.push('<ul>');
  genre.forEach(genre => {
  htmlArray.push(`<li>${genre}</li>`);
  });
  htmlArray.push('</ul>');
  let html = htmlArray.join('');
  return html;
  };
let genresHtml = generateListHtml(genres);
console.log(genresHtml);

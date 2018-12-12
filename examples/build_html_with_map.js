// Genres array to play with
let genres = require('../data/genres.json');

// Build array of <li> elements
const generateListHtml = genre =>{
let htmlArray = genre.map(genre => {
  return `<li>${genre}</li>`;
  });
  htmlArray.unshift('<ul>'); // Add opening tag to the beginning
  htmlArray.push('</ul>'); // Add closing tag to the end
  let html = htmlArray.join(''); // Join array into a string
  return html;
}
let genresHtml = generateListHtml(genres);
console.log(genresHtml);


// Correct indentation below. Also, just return htmlArray.join('') rather than creating a variable for it. It's quicker.
const generateListHtml = genre => {
  let htmlArray = genre.map(genre => {
    return `<li>${genre}</li>`;
  });
  htmlArray.unshift('<ul>'); // Add opening tag to the beginning
  htmlArray.push('</ul>'); // Add closing tag to the end
  return htmlArray.join(''); // Join array into a string
}
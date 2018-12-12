// Genres array to play with
let genres = require('../data/genres.json');

// Build array of <li> elements
let htmlArray = genres.map(genre => {
  return `<li>${genre}</li>`;
});

htmlArray.unshift('<ul>'); // Add opening tag to the beginning
htmlArray.push('</ul>'); // Add closing tag to the end

html = htmlArray.join(''); // Join array into a string
console.log(html);
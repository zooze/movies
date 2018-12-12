// Genres array to play with
let genres = ["Drama", "Crime", "Romance", "Animation", "History", "War", "Family", "Fantasy", "Comedy", "Thriller", "Horror", "Mystery", "Action", "Adventure", "Science Fiction", "Western", "TV Movie", "Music"];

let html = '<ul>';
genres.forEach(genre => {
  html += `<li>${genre}</li>`;
});
html += '</ul>';

console.log(html);

// The above will create an html string in the html variable.
// Orignally we put this into a function, which needed to 'return' the string. Maybe you could refactor into a function.
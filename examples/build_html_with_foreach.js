// Genres array to play with
let genres = ["Drama", "Crime", "Romance", "Animation", "History", "War", "Family", "Fantasy", "Comedy", "Thriller", "Horror", "Mystery", "Action", "Adventure", "Science Fiction", "Western", "TV Movie", "Music"];


const generateUnorderedList = arr =>{
  let html = '<ul>';
  arr.forEach(element => {
  html += `<li>${element}</li>`;
});
html += '</ul>';
return html;
}



// The above will create an html string in the html variable.
// Orignally we put this into a function, which needed to 'return' the string. Maybe you could refactor into a function.

let genreshtml = generateUnorderedList(genres);
console.log(genreshtml);
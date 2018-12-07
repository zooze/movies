//refactor writehead

const http = require('http');

const fs = require('fs');

require.extensions['.css'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const movies = require('./data/movies_with_ids.json');

const generateMovieSummaryHtml = movie => {
  return `<div class ='movie'>
    <h2>${movie.title}</h2>
    <span class='genre'><strong>Genre:</strong> ${movie.genres.join('/')}</span>
    <a href='/movies/${movie.id}'><img src='${movie.poster_url}'></a>
  </div>`
}



const generateMoviesHtml = movies =>{
  let generatedMoviesHtml = '';
  for(let i = 0; i < movies.length; i++){
    generatedMoviesHtml += generateMovieSummaryHtml(movies[i]);
  };
  return generatedMoviesHtml;
}


const generateHtml = (body, title) => {
  return `  
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link href="/assets/app.css" type="text/css" rel="stylesheet">
      </head>
      <body>
        <div class='nav'>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
          </ul>
        </div>
        ${body} 
      </body>
    </html>`;
}
const loadFile = path => {
  return require(path);
}
let moviesHtml = generateMoviesHtml(movies);
const server = http.createServer((request, response) =>{
  console.log(request.url);
  let text; 
  if(request.url === '/'){
    response.writeHead(200);
    let homeBody = `<h1>Welcome to the home page!</h1> ${moviesHtml}`;
    text = generateHtml(homeBody, 'Movies Site');
  } else if(request.url === '/about'){
    response.writeHead(200);
    text = generateHtml(`<h1>Built by Wickett bro's</h1>`, 'About - Movies Site');
  } else if(request.url === '/assets/app.css'){
    response.writeHead(200);
    text = loadFile('./assets/app.css');
  } else if(!!request.url.match('/movies/')){
    let splitUrl = request.url.split('/')
    let movieId = splitUrl[2];
    let filteredMovies = movies.filter(movie => {
      if(movieId == movie.id){
        return true;
      }
    })
    let movie = filteredMovies[0];
    let movieBody = `<img src='${movie.poster_url}'>`
    text = generateHtml(movieBody, movie.title);
    
    
  

  } else{
    response.writeHead(404);
    text = generateHtml(`<h1>404: Page unknown</h1>`,'404 - Movies Site');
  }
  response.write(text);
  response.end();
})

server.listen(3000, () =>{
  console.log('started the server on port 3000');
})
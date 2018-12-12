//refactor writehead
const http = require('http');
const fs = require('fs');
const truncate = require('./utils/truncate');

require.extensions['.css'] = function (module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8');
};

const loadFile = path => {
  return require(path);
}

const movies = require('./data/movies_with_ids.json');

const generateMovieSummaryHtml = movie => {
  return `<div class='movie'>
    <a class='movie-link' href='/movies/${movie.id}'>
      <div class='image-frame'>
        <img src='${movie.poster_url}'>
        <h2>${movie.title}</h2>
      </div>
    </a>
  </div>`
}

const generateMoviesListHtml = movies =>{
  let generatedMoviesHtml = `<div class="movies">`;
  for(let i = 0; i < movies.length; i++){
    generatedMoviesHtml += generateMovieSummaryHtml(movies[i]);
  };
  generatedMoviesHtml += `</div>`;
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

const respond = (response, statusCode, responseBody) => {
  response.writeHead(statusCode);
  response.write(responseBody);
  response.end();
}

const respondWithHomepage = response => {
  let moviesListHtml = generateMoviesListHtml(movies);
  let body = `
    <h1 class='listings'>Movie listings</h1>
    ${moviesListHtml}
  `;
  let title = 'Movies Site';
  let html = generateHtml(body, title);
  respond(response, 200, html);
}

const respondWithAboutPage = response => {
  let body = `<h1>Built by Wickett bro's</h1>`;
  let title = 'About - Movies Site';
  let html = generateHtml(body, title);
  respond(response, 200, html);
}

const respondWithMoviePage = (request, response) => {
  let movieId = request.url.split('/')[2];
  let movie = movies.filter(movie => movieId == movie.id)[0];

  let year = movie.release_date.split("-")[0];
  let genres = movie.genres.join('/');

  let body = `
    <h1>${movie.title} (${year})</h1>
    <h2 class='genre'>${genres}</h2>
    <p class='synopsis'>${movie.synopsis}</p>
    <img src='${movie.poster_url}'>
  `;
  
  let title = movie.title;
  let text = generateHtml(body, title);
  respond(response, 200, text);
}

const respondWithAppCss = response => {
  let css = loadFile('./assets/app.css');
  respond(response, 200, css);
}

const respondWith404Page = response => {
  let body = `<h1>404: Page unknown</h1>`;
  let title = '404 - Movies Site';
  let html = generateHtml(body, title);
  respond(response, 404, html);
}

const server = http.createServer((request, response) =>{
  console.log(`${request.method} "${request.url}"`);
  console.log('');
  if (request.url === '/') {
    respondWithHomepage(response);
  } else if (request.url === '/about') {
    respondWithAboutPage(response);
  } else if (!!request.url.match('/movies/')) {
    respondWithMoviePage(request, response);
  } else if (request.url === '/assets/app.css') {
    respondWithAppCss(response);
  } else {
    respondWith404Page(response);
  }
})

server.listen(3000, () =>{
  console.log('started the server on port 3000');
})
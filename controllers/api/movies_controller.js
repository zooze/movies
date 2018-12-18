class ApiMoviesController {

  constructor() {
    this.movies = require('../../data/movies_with_ids.json');
  }

  respond(response, statusCode, responseBody) {
    response.writeHead(statusCode);
    response.write(responseBody);
    response.end();
  }

  // GET /api/movies
  index(id, params, request, response) {

    let genre = params.genre;
    let json;

    if (genre) {
      // Filter movies for matching genre
      json = this.movies.filter(movie => {

        // Create new array of lowercase genres for comparison
        let _genres = movie.genres.map(genre => genre.toLowerCase());

        // Return true or false for whether genre matches.
        return (_genres.includes(genre));
      });
    } else {
      json = this.movies;
    }

    let stringifiedJson = JSON.stringify(json);
    this.respond(response, 200, stringifiedJson);
  }

  // GET /api/movies/:id
  show(id, params, request, response) {
    let newArray = this.movies.filter(movie =>{
      return (movie.id == id) 
    })
    let json = JSON.stringify(newArray[0]);
    this.respond(response, 200, json)
  }

};

export default new ApiMoviesController;
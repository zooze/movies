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
    let json = JSON.stringify(this.movies)
    this.respond(response, 200, json)
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
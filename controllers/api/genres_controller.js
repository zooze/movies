class ApiGenresController {

  constructor() {
    this.genres = require('../../data/genres.json');
  }

  respond(response, statusCode, responseBody) {
    response.writeHead(statusCode);
    response.write(responseBody);
    response.end();
  }

  // GET /api/genres
  index(id, params, request, response) {
    let json = this.genres;
    let stringifiedJson = JSON.stringify(json);
    this.respond(response, 200, stringifiedJson);
  }

  // // GET /api/genres/:id
  // show(id, params, request, response) {
  //   // ADD CODE HERE to filter for an individual movie!
  //   this.respond(response, 200, json)
  // }

};

export default new ApiGenresController;
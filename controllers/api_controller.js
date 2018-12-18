const Url = require('url');

import ApiMoviesController from "./api/movies_controller.js";


class ApiController {

  respond(response, statusCode, responseBody) {
    response.writeHead(statusCode);
    response.write(responseBody);
    response.end();
  }

  urlObject(url) {
    return Url.parse(url, true);
  }

  respondWithApi(request, response) {
    let urlObject = this.urlObject(request.url);
    let path =  urlObject.pathname;
    let resource = path.split("/")[2];
    let id = path.split("/")[3];
    let method = request.method;
    let params = urlObject.query;

    let action;
    if (method == "GET")          action = (id) ? "show" : "index";
    if (method == "POST" && !id)  action = "create";
    if (method == "PUT" && id)    action = "update";
    if (method == "DELETE" && id) action = "destroy";

    if (resource === "movies") {
      ApiMoviesController[action](id, params, request, response);
    } else {
      this.respond(response, 404, "Resource not found");
    }
  }

};

export default new ApiController;
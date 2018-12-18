const fs = require('fs');

require.extensions['.html'] = function (module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8');
};

class PagesController {

  respond(response, statusCode, responseBody) {
    response.writeHead(statusCode);
    response.write(responseBody);
    response.end();
  }

  homePage(response) {
    let html = require('../views/homepage.html');
    this.respond(response, 200, html);
  }
  
  aboutPage(response) {
    let html = require('../views/about.html');
    this.respond(response, 200, html);
  }
  
  notFoundPage(response) {
    let html = require('../views/404.html');
    this.respond(response, 404, html);
  }
}

export default new PagesController;
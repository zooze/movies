const fs = require('fs');

require.extensions['.css', '.js'] = function (module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8');
};

class AssetsController {

  respond(response, statusCode, responseBody) {
    response.writeHead(statusCode);
    response.write(responseBody);
    response.end();
  }

  respondWithAsset(request, response) {
    let assetPath = ".." + request.url;
    try {
      this.respond(response, 200, require(assetPath));
    } catch(error) {
      console.log(error);
      this.respond(response, 404, "Sorry, not found");
    }
  }

};


export default new AssetsController;
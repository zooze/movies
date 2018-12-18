const http = require('http');

import ApiController from "./controllers/api_controller.js";
import PagesController from "./controllers/pages_controller.js";
import AssetsController from "./controllers/assets_controller.js";

const server = http.createServer((request, response) =>{
  console.log(`${request.method} "${request.url}"`);

  if (request.url === '/') {
    PagesController.homePage(response);
  } else if (request.url === '/about') {
    PagesController.aboutPage(response);
  } else if (request.url.match('/api/')) {
    ApiController.respondWithApi(request, response);
  } else if (request.url.match('/assets/')) {
    AssetsController.respondWithAsset(request, response);
  } else {
    PagesController.notFoundPage(response);
  }
})

server.listen(3000, () =>{
  console.log('started the server on port 3000');
})
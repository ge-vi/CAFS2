const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const PUBLIC_PATH = './public';


// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on('request', (request, response) => {

  const reqResource = request.url === "/" ? "index.html" : request.url;

  if (request.method === "GET") {
    // Loose CORS policy
    response.setHeader("Access-Control-Allow-Origin", "*");
    processGetRequest(response, reqResource);
  } else {
    response.writeHead(404);
    return response.end();
  }
});

// internal function
function processGetRequest(response, resource) {
  resource = path.join(PUBLIC_PATH, path.normalize(resource));
  fs.readFile(resource, (err, data) => {
    if (err) {
      // file not found
      response.writeHead(404);
      console.log(`Not Found ${resource}`);
      return response.end();
    } else {
      if (resource.endsWith(".json")) {
        response.writeHead(200, {'Content-Type': 'application/json'});
      } else if (resource.endsWith(".txt")) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
      } else if (resource.endsWith(".html")) {
        response.writeHead(200, {'Content-Type': 'text/html'});
      } else {
        response.writeHead(200, {'Content-Type': 'application/octet-stream'});
      }
      return response.end(data);
    }
  });
}

server.listen(8080, () => {
  console.log(`Server running at port 8080`);
});

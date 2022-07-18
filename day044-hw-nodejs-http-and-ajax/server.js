const http = require('node:http');
const fs = require('node:fs');


// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on('request', (request, response) => {

  const reqResource = request.url;

  if (request.method === "GET") {
    // Loose CORS policy
    response.setHeader("Access-Control-Allow-Origin", "*");
    processGetRequest(response, reqResource);
  } else if (http.METHODS.includes(request.method)) {
    // https://www.rfc-editor.org/rfc/rfc9110.html#name-405-method-not-allowed
    response.writeHead(405, {'Content-Type': 'text/plain'});
    response.write(`Method Not Allowed ${request.method}`);
    response.end();
  }
});

// internal function
function processGetRequest(response, resource) {
  fs.readFile(`./data${resource}`, (err, data) => {
    if (!err) {
      if (resource.endsWith(".json")) {
        response.writeHead(200, {'Content-Type': 'application/json'});
      } else if (resource.endsWith(".txt")) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
      }
      response.end(data);
    } else {
      // file not found
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.write(`Not Found ${resource}`);
      response.end();
    }
  });
}

server.listen(8080, () => {
  console.log(`Server running at port 8080`);
});

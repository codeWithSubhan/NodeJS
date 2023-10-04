//  Include Modules
// To include a module, use the require() function with the name of the module:
// var http = require('http');
// Now your application has access to the HTTP module, and is able to create a server:

// The Built-in HTTP Module
// The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

// Use the createServer() method to create an HTTP server:

// let create own server
const http = require("http");
function NodeJS(req, res) {
  res.write("Hello NodeJS, I'm leaning NodeJS.");
  res.end();
}
http.createServer(NodeJS).listen(5500);
console.log(2 + 2);
// If the response from the HTTP server is supposed to be displayed as HTML,
// you should include an HTTP header with the correct content type:

// The first argument of the res.writeHead() method is the status code,
// 200 means that all is OK, the second argument is an object containing the response headers.

// req argument that represents the request from the client, as an object (http.IncomingMessage object).

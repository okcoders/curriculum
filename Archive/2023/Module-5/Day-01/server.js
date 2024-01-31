const http = require("http");

const hostname = "127.0.0.1";
const port = 5000;

// Create HTTP server
const server = http.createServer(function (req, res) {
  // Set the response HTTP header with HTTP status and Content type

  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });

    // Send the response body "Hello World"
    res.end("Hello World\n");
  } else if (req.method === "POST") {
    res.writeHead(200, { "Content-Type": "text/plain" });

    // Send the response body "Hello World"
    res.end("Hello World Post\n");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });

    // Send the response body "Hello World"
    res.end("Not found!");
  }
});

// Prints a log once the server starts listening
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});

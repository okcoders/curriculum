const http = require("http");

const hostname = "127.0.0.1";
const port = 5000;

const server = http.createServer(function (req, res) {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });

    res.end("Hello World\n");
  } else if (req.method === "POST") {
    res.writeHead(200, { "Content-Type": "text/plain" });

    res.end("Hello World Post\n");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });

    res.end("Not found!");
  }
});

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});

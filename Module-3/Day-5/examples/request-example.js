const request = require("request")

request('https://jsonplaceholder.typicode.com/posts', function (error, response, body) {
  const parsed = JSON.parse(body)
  console.log(parsed[0])
});

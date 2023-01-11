const http = require("http");

const port = process.env.PORT || 9000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>This is CodeWithBoard</h1><p>Hey welcome to this community</p>");
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

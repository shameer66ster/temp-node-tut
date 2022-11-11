const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home page");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
    return;
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't see to find the page you were looking for</p>
  <a href="/">Back Home</a>`);
});
server.listen(5000);

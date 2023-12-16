var http = require("http");
fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url === "/admin") {
      fs.readFile("admin.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("Error 404:Page Not Found");
    }
  })
  .listen(7000, () => console.log("Server running on port 7000"));

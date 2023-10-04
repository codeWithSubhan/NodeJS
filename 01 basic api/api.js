const http = require("http");
const data = require("./data");
function Data(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(data));
  res.end();
}
http.createServer(Data).listen(5500);

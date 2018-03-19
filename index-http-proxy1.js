var http = require("http");

var options = {
  host: "prx.edc.ngcs.net",
  port: 8080,
  path: "http://www.google.com",
  headers: {
    Host: "www.google.com"
  }
};
http.get(options, function(res) {
  console.log(res);
  res.pipe(process.stdout);
});

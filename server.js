var express = require("express");
var history = require("connect-history-api-fallback");
var app = express();

// Middleware for serving '/dist' directory
const staticFileMiddleware = express.static("build/");

// 1st call for unredirected requests
app.use(staticFileMiddleware);

// Support history api
app.use(
  history({
    index: "/build/index.html"
  })
);

// 2nd call for redirected requests
app.use(staticFileMiddleware);

// Handle a get request to an api route
app.get("*", function(req, res) {
  // You can retrieve the :id parameter via 'req.params.id's
  res.sendFile(`${__dirname}/build/index.html`);
});

app.listen(5001, function() {
  console.log("Server listening on port 5001");
});

// Load express
const express = require("express");
const path = require("path");
const mustacheExpress = require('mustache-express');

// Configure express
const app = express();

// Register '.mst' extension with Mustache-Express
app.engine('mst', mustacheExpress(__dirname + '/views/partials', '.mst')); // partials must go in /views/partials
app.set('view engine', 'mst');
app.set('views', __dirname + '/views');

// Include static files
app.use(express.static(path.join(__dirname, 'public')));

// Homepage
app.get("/", (request, response) => {
  response.render("index", {});
});

// Experiment
app.get("/experiment", (request, response) => {
  response.render("experiment", {
    "title": "Experiment"
  })
});

// Listen for requests :)
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("App listening on port " + listener.address().port + "...");
});
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

// Set port.
var PORT = process.env.PORT || 8080;

// Sets up Express app to handle data parsing.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route Files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

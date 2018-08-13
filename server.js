/// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");

// Set Express
const app = express();
const PORT = process.env.PORT || 8080;

// Set Handlebars.
const exphbs = require("express-handlebars");

//Initiate Handlebars refernce to main.handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//Middleware
//
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());



// Import routes and give the server access to them.
const apiRoutes = require("./controllers/burgers_controller.js");

// require('./controllers/burgers_controller.js')(app); 

app.use(apiRoutes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

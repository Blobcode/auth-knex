//! Dependencies

// Express
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.json());

// Route Imports
const userRoute = require("./routes/user.route");
const mainRoute = require("./routes/main.route");

//? Routes
//use users route for /users
app.use("/users", userRoute);
// Main Routes
app.use("/", mainRoute);

//? Start server
app.listen(port, () => {
  console.log(`Auth server listening at http://localhost:${port}`);
});

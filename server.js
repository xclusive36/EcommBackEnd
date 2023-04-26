const express = require("express"); // import express
const routes = require("./routes"); // import routes
const sequelize = require("./config/connection"); // import sequelize connection

const app = express(); // initialize express app
const PORT = process.env.PORT || 3001; // set port

app.use(express.json()); // parse incoming JSON data
app.use(express.urlencoded({ extended: true })); // parse incoming requests with urlencoded payloads

app.use(routes); // turn on routes

sequelize.sync({ force: true }).then(() => { // force: true will drop all tables and recreate them
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`)); // start listening
});

// const dataMovies = require("./data/movies.json");
// const dataUsers = require("./data/users.json");

const express = require("express");
const cors = require("cors");
require("dotenv").config();

//BBDD

const Database = require("better-sqlite3");

// create and config server
const app = express();
app.use(cors());
app.use(express.json());

// init express aplication
const serverPort = process.env.PORT || 4000;
console.log("puerto", serverPort);
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//BBDD

const db = new Database("./db/nerdflix.db", {
  verbose: console.log, //muestra por consola todas las consultas que ejecutamos
});

//end-point get /movies
app.get("/movies", (req, res) => {
  //preparamos la query
  const query = db.prepare("SELECT * FROM titulos");

  const movies = query.all();

  res.json({
    succes: true,
    movies,
  });
});

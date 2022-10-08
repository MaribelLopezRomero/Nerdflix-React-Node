import React, { useEffect, useState } from "react";
// import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import apiMovies from "../services/api-movies.js";

function App() {
  //ESTADOS

  const [movies, setMovies] = useState([]);

  //UseEffects

  useEffect(() => {
    apiMovies.getMoviesApi().then((response) => {
      setMovies(response);
    });
  }, []);

  return (
    <>
      <Home movies={movies} />
    </>
  );
}

export default App;

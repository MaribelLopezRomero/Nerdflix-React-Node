import React, { useEffect, useState } from "react";
// import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import apiMovies from "../services/api-movies.js";

function App() {
  //ESTADOS
  const [shows, setShows] = useState([]);
  const [searchShow, setSearchShow] = useState("");

  //Eventos. Lifting

  const handleCarousel = (ev) => {
    //ArrayGender da el numero de carousel
    for (let i = 0; i < arrayGender.length; i++) {
      //Pasamos i a string para poder nombrar a los elementos carousel, content, next y prev y que funcionen todos los caruseles.
      const s_1 = i.toString();

      console.log(s_1);

      const gap = 16;

      const carousel = document.getElementById("carousel" + s_1),
        content = document.getElementById("content" + s_1),
        next = document.getElementById("next" + s_1),
        prev = document.getElementById("prev" + s_1);

      next.addEventListener("click", (e) => {
        carousel.scrollBy(width + gap, 0);
        if (carousel.scrollWidth !== 0) {
          prev.style.display = "flex";
        }
        if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
          next.style.display = "none";
        }
      });
      prev.addEventListener("click", (e) => {
        carousel.scrollBy(-(width + gap), 0);
        if (carousel.scrollLeft - width - gap <= 0) {
          prev.style.display = "none";
        }
        if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
          next.style.display = "flex";
        }
      });

      let width = carousel.offsetWidth;
      window.addEventListener("resize", (e) => (width = carousel.offsetWidth));
    }
  };

  //busqueda

  const handleSearch = (value) => {
    setSearchShow(value);
  };

  //UseEffects

  useEffect(() => {
    apiMovies.getMoviesApi().then((response) => {
      setShows(response);
    });
  }, []);

  //COMUN A HOME, PELICULAS Y SERIES

  //1.GENEROS

  //Generos de todos los titulos
  const genders = shows.map((movie) => {
    return movie.genero;
  });

  // Filtramos los generos para obtener el genero no repetido
  const arrayGender = genders.sort().filter((gender, index) => {
    return genders.indexOf(gender) === index;
  });

  return (
    <>
      <Home
        shows={shows}
        handleCarousel={handleCarousel}
        gender={arrayGender}
        searchShow={searchShow}
        handleSearch={handleSearch}
      />
    </>
  );
}

export default App;

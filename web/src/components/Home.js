import "../styles/home.css";
import Header from "./Header";
import Footer from "./Footer";
const Home = (props) => {
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

  //Generos de todos los titulos
  const genders = props.movies.map((movie) => {
    return movie.genero;
  });

  // Filtramos los generos para obtener el genero no repetido

  const arrayGender = genders.sort().filter((gender, index) => {
    return genders.indexOf(gender) === index;
  });

  //Renderizar los titulos por genero

  //1. Necesitamos la imagen, que a su vez necesitara el genero, que renderiza renderShows

  const renderTitle = (gender) => {
    return props.movies.map((show) => {
      if (show.genero === gender)
        return <img class="item" src={show.imagen} alt="portada pelicula" />;
    });
  };

  //2. Renderizamos los titulos en funcion del genero, y renderizamos el titulo por cada genero llamando a renderTitle

  const renderShows = (arrayGender) => {
    console.log(arrayGender);

    return arrayGender.map((gender, i) => {
      return (
        <>
          <p class="text-white ms-5 mt-5">{gender}</p>

          <div id="wrapper">
            <div class="carousel" id={`carousel${i}`}>
              <div class="content" id={`content${i}`}>
                {renderTitle(gender)}
              </div>
            </div>
            <button class="prev" id={`prev${i}`} onClick={handleCarousel}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
              </svg>
            </button>
            <button class="next" id={`next${i}`} onClick={handleCarousel}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
              </svg>
            </button>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <Header />
      <body>
        <main>{renderShows(arrayGender)}</main>
        <Footer />
      </body>
    </>
  );
};

export default Home;

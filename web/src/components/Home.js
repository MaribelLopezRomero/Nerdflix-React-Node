import "../styles/home.css";
import Header from "./Header";
import Footer from "./Footer";
const Home = (props) => {
  //lifting carousel
  const handleCarousel = (ev) => {
    props.handleCarousel(ev);
  };

  //Renderizar los titulos por genero

  //1. Necesitamos la imagen, que a su vez necesitara el genero, que renderiza renderShows

  const renderTitle = (gender) => {
    return props.shows.map((show) => {
      if (show.genero === gender)
        return <img class="item" src={show.imagen} alt="portada pelicula" />;
    });
  };

  //2. Renderizamos los titulos en funcion del genero, y renderizamos el titulo por cada genero llamando a renderTitle

  const renderShows = (genders) => {
    return genders.map((gender, i) => {
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
      <body>
        <Header />
        <main>{renderShows(props.gender)}</main>
        <Footer />
      </body>
    </>
  );
};

export default Home;

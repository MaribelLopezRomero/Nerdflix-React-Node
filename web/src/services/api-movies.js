//Despliegue en produccion
const serverUrl =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:4000";

const getMoviesApi = () => {
  return fetch(`${serverUrl}/movies`)
    .then((response) => response.json())
    .then((data) => {
      return data.movies;
    });
};

const objToExport = {
  getMoviesApi: getMoviesApi,
};

export default objToExport;

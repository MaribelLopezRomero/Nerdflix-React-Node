import "../styles/login.css";
import Header from "./Header";

const Login = () => {
  return (
    <>
      <Header />
      <main>
        <div className="row">
          <div className="col-lg-4 col-md-3 col-md-3"></div>

          <form
            className="form col-lg-4 col-md-6 col-sm-12 bg-white"
            action="Home.html"
            method="get"
          >
            <h2 className="titulo">Iniciar sesión</h2>

            <div className="mb-3 mt-3">
              <label for="nombre" className="form-label">
                Usuario
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Introduzca usuario"
                required
                pattern="[a-zA-Z]{5,20}"
              />
            </div>

            <div className="mb-3 mt-3">
              <label for="contraseña" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="contraseña"
                placeholder="Introduzca contraseña"
                required
                pattern="[a-zA-Z0-9]{8,20}"
              />
            </div>
            <p>
              Al continuar, aceptas nuestras
              <span>
                <a href="." class="text-success">
                  condiciones de servicio.
                </a>
              </span>
            </p>
            <button type="submit" className="btn bg-success">
              Entrar
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;

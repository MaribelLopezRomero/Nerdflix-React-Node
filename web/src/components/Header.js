import logo from "../images/logo.png";
import perfil from "../images/PerfilSF.png";
import Search from "./Search";

const Header = (props) => {
  return (
    <header>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark d-flex justify-content-between">
        <div class="ps-5">
          <img src={logo} alt="logo nerdflix" width="200" />
        </div>

        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="." class="nav-link active">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="Peliculas.html" class="nav-link">
              Peliculas
            </a>
          </li>
          <li class="nav-item">
            <a href="Series.html" class="nav-link">
              Series
            </a>
          </li>
          <li class="nav-item">
            <a href=".">
              <i class="fas fa-search sub-nav-logo"></i>
            </a>
          </li>
          <div class="dropdown">
            <button
              class="btn btn-dark"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favoritos
            </button>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <a class="dropdown-item" href=".">
                  Series
                </a>
              </li>
              <li>
                <a class="dropdown-item" href=".">
                  Películas
                </a>
              </li>
            </ul>
          </div>

          <div class="dropdown">
            <button
              class="btn btn-dark"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              En reproducción
            </button>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <a class="dropdown-item" href=".">
                  Series
                </a>
              </li>
              <li>
                <a class="dropdown-item" href=".">
                  Películas
                </a>
              </li>
            </ul>
          </div>
          <Search
            searchShow={props.searchShow}
            handleSearch={props.handleSearch}
          />
        </ul>

        <div>
          <a href="Perfil.html">
            <img
              class="nav-link btn btn-outline-light btn-floating m-1"
              src={perfil}
              alt=""
              width="60"
              height=""
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

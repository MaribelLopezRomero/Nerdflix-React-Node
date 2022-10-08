import instagram from "../images/Instagram.png";
import linkedIn from "../images/LinkedIn.png";
import gitHub from "../images/GitHub.png";
import facebook from "../images/Facebook.png";
import twitter from "../images/Twitter.png";

const Footer = () => {
  return (
    <footer class="bg-dark text-center text-white">
      <div class="container p-4">
        <section class="mb-4">
          <img
            class="btn btn-outline-light btn-floating m-1"
            src={facebook}
            width="60"
            role="button"
            alt="icono facebook"
          ></img>

          <img
            class="btn btn-outline-light btn-floating m-1"
            src={twitter}
            width="60"
            role="button"
            alt="icono twitter"
          ></img>

          <img
            class="btn btn-outline-light btn-floating m-1"
            src={instagram}
            width="60"
            role="button"
            alt="icono instagra,"
          ></img>

          <img
            class="btn btn-outline-light btn-floating m-1"
            src={linkedIn}
            width="60"
            role="button"
            alt="icono linkedin"
          ></img>

          <img
            class="btn btn-outline-light btn-floating m-1"
            src={gitHub}
            width="60"
            role="button"
            alt="icono gitHub"
          ></img>
        </section>

        <section class="mb-4">
          <p>
            Por si quieres saber algo más de nosotros o informarte sobre los
            términos de uso o de privacidad
          </p>
        </section>

        <section class="">
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">
                    Acerca nuestra
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Links</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">
                    Privacidad
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">
                    Contáctanos
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">
                    Términos de Uso
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div class=" copyright text-center p-3">© 2022: Maribel López</div>
    </footer>
  );
};

export default Footer;

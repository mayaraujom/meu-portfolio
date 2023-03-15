import { Link } from "react-scroll";

import Contato from "../views/contato";
import Experiencia from "../views/experiencia";
import Projetos from "../views/projetos";
import SobreMim from "../views/sobre";

import './style.css'

const ScrollRouter = () => {
  return (
    <>
      <div className="scrollRouter">
        <header className="nav">
          <nav className="nav__container__actions">
            <ul>
              <li>
                <Link spy to="home">
                  Home
                </Link>
              </li>
              <li>
                <Link spy to="experiencia">
                  Experiencia
                </Link>
              </li>
              <li>
                <Link spy to="projetos">
                  Projetos
                </Link>
              </li>
              <li>
                <Link spy to="contact">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div>
        <section id="home">
          <SobreMim />
        </section>
        <section id="experiencia">
          <Experiencia />
        </section>
        <section id="projetos">
          <Projetos />
        </section>
        <section id="contact">
          <Contato />
        </section>
      </div>
    </>
  );
}

export default ScrollRouter;
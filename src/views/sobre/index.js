import NavBar from "../../components/nav";
import SideBar from "../../components/sidebar";

import './style.css'
import codeGirl from '../../assets/images/developer.png'
import Experiencia from "../experiencia";

const SobreMim = () => {
  return (
    <>
      <SideBar />
      <NavBar />
      <section className="sobre-mim__section">
        <div className="text__content">
          <div className="title__section">
            <span className="title__section-intro">Olá, sou a Mayara 😊</span>
            <span className="title__section-subtitle">Desenvolvedora</span>
            <span className="title__section-title">FullStack</span>
          </div>
          <div className="about__section">
            <div class="mobile__descript">
              <p>Sou graduada em Matemática e venho estudando e atuando na área de tecnologia há mais de um ano. Atualmente trabalho remotamente na @Icon Code.</p>
            </div>
            <div class="desktop__descript">
              <p>Sou graduada em Matemática e venho estudando </p>
              <p>e atuando na área de tecnologia há mais de um ano.</p>
              <p>Atualmente trabalho remotamente na @Icon Code.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SobreMim;
import SideBar from "../../components/sidebar";

import './style.css'

const Experiencia = () => {
  return (
    <>
      <SideBar />
      <section className="experiencia__section">
        <div className="text__content_experiencia">
          <div className="title__section_experiencia">
            <span className="title__section-subtitle_experiencia">o que venho</span>
            <span className="title__section-title_experiencia">aprendendo</span>
          </div>
          <div className="description__experiencia">
            <p>Iniciei meus estudos na área da tecnologia em 2022 quando comecei o curso de desenvolvedora Web FullStack na escola Trybe. Desde então, aprendi e aprimorei habilidades em{" "}
              <span className="tec_highlighter">JavaScript, TypeScript, React, Node.js</span> e outras tecnologias.
            </p>
            <p>Comecei a adquirir experiência profissional na @IconCode desde novembro de 2022, onde faço correções de bugs, integrações com API Rest e desenvolvo novas funcionalidades em sistemas voltados para a área da saúde e do transporte.</p>
            <p>Tecnologias usadas no meu dia a dia profissional:{" "}<span className="tec_highlighter">React, Angular e .NET</span>.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Experiencia;
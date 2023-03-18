import { projects } from "../../assets/projetos-lista/projectList";

import './style.css'
import ProjectCard from "../../components/project-card";

const Projetos = () => {


  return (
    <>
      <section className="d-flex flex-column justify-content-center align-items-center projects__section">
        <div className="projects__section-header mb-5">
          <span className="projects__section-header-title">projetos</span><span className="projects__section-header-title-zip">.zip</span>
        </div>
        <div className="cards__container">
          <ProjectCard projectList={projects} />
        </div>
      </section>
    </>
  )
}

export default Projetos;
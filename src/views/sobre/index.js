import { UncontrolledTooltip } from 'reactstrap';

import CodingWoman from '../../assets/images/3d-business-young-woman-talking-online.png'
import './style.css'


const SobreMim = () => {
  return (
    <>
      <section className="sobre-mim__section">
        <div className="containers">
          <div className='first_container'>
            <div className="title__section">
              <span className="title__section-intro">Olá, sou a Mayara 😊</span>
              <span className="title__section-subtitle">Desenvolvedora</span>
              <span className="title__section-title">FullStack</span>
            </div>
            <div className="about__section">
              <div className="mobile__descript">
                <p>Sou graduada em Matemática e venho estudando e atuando na área de tecnologia há mais de um ano. Atualmente trabalho remotamente na @Icon Code.</p>
              </div>
              <div className="desktop__descript">
                <p>Sou graduada em Matemática e venho estudando </p>
                <p>e atuando na área de tecnologia há mais de um ano.</p>
                <p>Atualmente trabalho remotamente na @Icon Code.</p>
              </div>
            </div>
          </div>
          <div className='second_container'>
            <img src={CodingWoman} alt='Mulher codando' id='mulherCodando' />
            <UncontrolledTooltip placement="right" target="mulherCodando">
              Illustration by Icons 8 from Ouch!
            </UncontrolledTooltip>
          </div>
        </div>
      </section>
    </>
  )
}

export default SobreMim;
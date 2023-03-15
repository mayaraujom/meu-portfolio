import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SobreMim from '../views/sobre';
import NotFound from '../views/not-found'
import Experiencia from '../views/experiencia';
import Projetos from '../views/projetos';
import Contato from '../views/contato';

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SobreMim />} />
        <Route exact path="/experiencia" element={<Experiencia />} />
        <Route exact path="/projetos" element={<Projetos />} />
        <Route exact path="/contato" element={<Contato />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default MainRouter
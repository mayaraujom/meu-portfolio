import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import SobreMim from '../views/sobre';
import NotFound from '../views/not-found'

const MainRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<SobreMim />} />
                {/* <Route exact path="/tecnologias" element={<Tecnologias />} />
                <Route exact path="/projetos" element={<Projetos />} />
                <Route exact path="/contato" element={<Contato />} /> */}
                <Route exact path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default MainRouter
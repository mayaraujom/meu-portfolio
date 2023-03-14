import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from '../views/home'
import NotFound from '../views/not-found'

const MainRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default MainRouter
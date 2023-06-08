import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SobreNos from './Pages/SobreNos/SobreNos';
import Blog from './Pages/Blog/Blog';
import FaleConosco from './Pages/FaleConosco/FaleConosco';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Login' element={<Login/>} />
                <Route path='/SobreNos' element={<SobreNos/>} />
                <Route path='/Blog' element={<Blog/>} />
                <Route path='/FaleConosco' element={<FaleConosco/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
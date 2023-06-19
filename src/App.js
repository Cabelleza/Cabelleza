import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SobreNos from './Pages/SobreNos/SobreNos';
import Blog from './Pages/Blog/Blog';
import FaleConosco from './Pages/FaleConosco/FaleConosco';
import Saloes from './Pages/Saloes/Saloes';
import Cadastro from './Pages/Cadastro/Cadastro';
import Assinatura from './Pages/Assinatura/Assinatura';
import TermosECondicoes from './Pages/TermosECondicoes/TermosECondicoes';
import PoliticaPrivacidade from './Pages/PoliticaPrivacidade/PoliticaPrivacidade';

function App() {

  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Login' element={<Login/>} />
                <Route path='/SobreNos' element={<SobreNos/>} />
                <Route path='/Saloes' element={<Saloes/>} />
                <Route path='/Blog' element={<Blog/>} />
                <Route path='/FaleConosco' element={<FaleConosco/>} />
                <Route path='/Cadastro' element={<Cadastro/>} />
                <Route path='/Assinatura' element={<Assinatura/>}/>
                <Route path='/TermosECondicoes' element={<TermosECondicoes/>}/>
                <Route path='/PoliticaPrivacidade' element={<PoliticaPrivacidade/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
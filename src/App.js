import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SobreNos from './Pages/SobreNos/SobreNos';
import Blog from './Pages/Blog/Blog';
import FaleConosco from './Pages/FaleConosco/FaleConosco';
import Saloes from './Pages/Saloes/Saloes';
import CadastroSalao from './Pages/Cadastro/CadastroSalao';
import Assinatura from './Pages/Assinatura/Assinatura';
import PagePlanos from './Pages/Planos/PagePlanos';
import PageConclusaoCadastro from './Pages/PageConclusaoCadastro/PageConclusaoCadastro';
// import PageDados from './Pages/Dados/PageDado';
import TermosECondicoes from './Pages/TermosECondicoes/TermosECondicoes';
import PoliticaPrivacidade from './Pages/PoliticaPrivacidade/PoliticaPrivacidade';
import ScrollToTop from './hooks/ScrollToTop';
import Perfil from './Components/PerfilUsuario/Perfil';
import CadastroTeste from './Pages/Cadastro/CadastroTeste';

function App() {

  return (
    <div className="App">
        <Router>
          <ScrollToTop/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Login' element={<Login/>} />
                <Route path='/SobreNos' element={<SobreNos/>} />
                <Route path='/Saloes' element={<Saloes/>} />
                <Route path='/Blog' element={<Blog/>} />
                <Route path='/FaleConosco' element={<FaleConosco/>} />
                <Route path='/Planos' element={<PagePlanos/>} />
                {/* <Route path='/Dados' element={<PageDados/>} /> */}
                {/* <Route path='/cadastrosalao' element={<CadastroSalao/>} /> */}
                <Route path='/CadastroTeste' element={<CadastroTeste/>} />
                <Route path='/PageConclusaoCadastro' element={<PageConclusaoCadastro/>} />
                <Route path='/Assinatura' element={<Assinatura/>}/>
                <Route path='/TermosECondicoes' element={<TermosECondicoes/>}/>
                <Route path='/PoliticaPrivacidade' element={<PoliticaPrivacidade/>}/>
                <Route path='/Usuario' element={<Perfil/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SobreNos from './Pages/SobreNos/SobreNos';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Login' element={<Login/>} />
                <Route path='/SobreNos' element={<SobreNos/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
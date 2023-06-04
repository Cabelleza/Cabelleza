import style from './SobreNos.module.css';
import {Link} from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Sessao1 from '../../Components/SobreNos1/SobreNos1';
import HistoriaMarcaFlor from '../../Components/HistoriaMarcaFlor/HistoriaMarcaFlor';
import FiosPontasRaizes from '../../Components/FiosPontasRaizes/FiosPontasRaizes';
import Onu from '../../Components/Onu/Onu';


function SobreNos() {
    return(
        <div className={style.PageSobreNos}>
            <Header/>
            <Sessao1/>
            <HistoriaMarcaFlor/>
            <FiosPontasRaizes/>
            <Onu/>
            
            <Footer/>
        </div>
    )
}

export default SobreNos;
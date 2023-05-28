import style from './Home.module.css';
import {Link} from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Slide from '../../Components/Slide/Slide';
import Container from '../../Components/Container/Container';
import Devolva from '../../Components/Devolva_sorrisos/Devolva';
import SaloesDevolvem from '../../Components/Saloes_devolvem/SaloesDevolvem';

function Home() {
    return(
        <>
            <Header/>
            <Slide/>
            <Devolva />
            <SaloesDevolvem />
            <Container/>
            <Footer/>
        </>
    )
}

export default Home;
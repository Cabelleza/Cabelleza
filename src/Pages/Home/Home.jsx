import style from './Home.module.css';
import {Link} from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Slide from '../../Components/Home/Slide/Slide';
import Container from '../../Components/Home/Container/Container';
import Devolva from '../../Components/Home/Devolva_sorrisos/Devolva';
import SaloesDevolvem from '../../Components/Home/Saloes_devolvem/SaloesDevolvem';
import Apoiadores from '../../Components/Home/Apoiadores/Apoiadores';
import Slogan from '../../Components/Home/Slogan/Slogan';

function Home() {
    return(
        <>
            <Header/>
            <Slide/>
            <Devolva />
            <SaloesDevolvem />
            <Container />
            <Apoiadores />
            <Slogan />
            <Footer/>
        </>
    )
}

export default Home;
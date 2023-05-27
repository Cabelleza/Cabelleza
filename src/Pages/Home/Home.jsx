import style from './Home.module.css';
import {Link} from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Slide from '../../Components/Slide/Slide';
import Transformar from '../../Components/Transformar_vidas/Transformar_vidas';

function Home(){
    return(
        <>
            <Header/>
            <Slide/>
            <Transformar/>
            <Footer/>
        </>
    )
}

export default Home;
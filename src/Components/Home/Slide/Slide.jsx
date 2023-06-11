import style from './Slide.module.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../../imagens/slide1-corte.png';
import slide2 from '../../../imagens/slide2-corte.png';
import slide3 from '../../../imagens/slide3.png';

export default function Slide() {
    return (
        <>
            <Carousel className={style.Carousel}>
                <Carousel.Item interval={5000} className={style.Carousel_item}>
                    <img
                        className="d-block w-500"
                        src={slide1}
                        alt="Primeiro slide"
                    />
                    <Carousel.Caption className={style.Carousel_caption}>
                        <h3>Cada corte de <span>cabelo</span> tem um propósito: <br /> <span>ajude</span> quem mais precisa e transforme vidas!</h3>
                        <div><Link to='/Saloes'><button>Procurar</button></Link></div>
                        
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000} className={style.Carousel_item}>
                    <img
                        className="d-block w-500"
                        src={slide2}
                        alt="Segundo slide"
                    />
                    <Carousel.Caption className={style.Carousel_caption}>
                        <h3>Faça o bem e <span>doe</span> seu <span>amor</span> em fios.</h3>
                        <div><Link to='/Saloes'><button>Quero ajudar</button></Link></div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000} className={style.Carousel_item}>
                    <Carousel.Caption className={style.Carousel_caption}>
                        <div>
                            <h3>“Marcante é saber viver.”</h3>
                            <Link to='/SobreNos'><button>Saiba mais</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
};
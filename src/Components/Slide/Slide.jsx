import style from './Slide.module.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

export default function Slide() {
    return (
        <>
            <Carousel className={style.Carousel}>
                <Carousel.Item interval={5000} className={style.Carousel_item}>
                    
                    <Carousel.Caption className={style.Carousel_caption}>
                        <h3>Cada corte de <span>cabelo</span> tem um propósito: <br /> <span>ajude</span> quem mais precisa e transforme vidas!</h3>
                        <Link to='/Saloes'><button>Procurar</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000} className={style.Carousel_item}>
                    
                    <Carousel.Caption className={style.Carousel_caption}>
                        <h3>Faça o bem e <span>doe</span> seu <span>amor</span> em fios.</h3>
                        <Link to='/Saloes'><button>Quero ajudar</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000} className={style.Carousel_item}>
                    
                    <Carousel.Caption className={style.Carousel_caption}>
                        <div>
                            <h3>“Marcante é saber viver.”</h3>
                            <Link to='/Sobre'><button>Saiba mais</button></Link>
                        </div>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
};
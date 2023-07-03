import style from './Artigos.module.css';
import linhaCompleta from '../../../imagens/meia-linha.png';
import { Link } from 'react-router-dom';

function Artigos() {
    return (
        <div id='Artigos'>
            <section className={style.dicasSection}>
                <div className={style.titleDicas}>
                    <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
                    <h1 className={style.dicasText}>Artigos</h1>
                    <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
                </div>

                <div className={style.containerBox}>
                    <Link to='/Artigo1'>
                        <div className={style.boxDicas}>
                            <div className={style.fundo1}></div>
                            <p className={style.descBoxDicas}>Como deixar o cabelo bonito e com brilho.</p>
                        </div>
                    </Link>

                    <Link to="/Artigo2">
                        <div className={style.boxDicas}>
                            <div className={style.fundo2}></div>
                            <p className={style.descBoxDicas}>Resgatando a autoestima de pacientes.</p>
                        </div>
                    </Link>

                    <Link to="/Artigo3">
                        <div className={style.boxDicas}>
                            <div className={style.fundo3}></div>
                            <p className={style.descBoxDicas}>Entenda como usar bem um condicionador.</p>
                        </div>
                    </Link>

                    <Link to="/Artigo4">
                        <div className={style.boxDicas}>
                            <div className={style.fundo4}></div>
                            <p className={style.descBoxDicas}>Autoestima durante o tratamento.</p>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Artigos;
import style from './Dicas.module.css';
import linhaCompleta from '../../../imagens/meia-linha.png';
import cabeloHidratado from '../../../imagens/cabelo-hidrato.png';
import perucaReal from '../../../imagens/peruca-real.png';
import soltarCabelo from '../../../imagens/soltar-cabelo.png';
import penteadoPeruca from '../../../imagens/penteado-na-peruca.svg';

function Dicas() {
    return (
        <div id='Dicas'>
            <section className={style.dicasSection}>
                <div className={style.titleDicas}>
                    <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
                    <h1 className={style.dicasText}>Dicas</h1>
                    <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
                </div>

                <div className={style.containerBox}>
                    <div className={style.boxDicas}>
                        <img src={cabeloHidratado} alt="" />
                        <p className={style.descBoxDicas}>6 dicas para manter o cabelo hidratado.</p>
                    </div>
                    <div className={style.boxDicas}>
                        <img src={perucaReal} alt="" />
                        <p className={style.descBoxDicas}>Peruca real. Conhecendo um pouco.</p>
                    </div>
                    <div className={style.boxDicas}>
                        <img src={soltarCabelo} alt="" />
                        <p className={style.descBoxDicas}>Truque para soltar o cabelo cacheado e dar volume.</p>
                    </div>
                    <div className={style.boxDicas}>
                        <img src={penteadoPeruca} alt="" />
                        <p className={style.descBoxDicas}>Penteado na peruca.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dicas;
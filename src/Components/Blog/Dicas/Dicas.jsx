import style from './Dicas.module.css';
import linhaCompleta from '../../../imagens/meia-linha.png';
import cabeloHidratado from '../../../imagens/cabelo-hidrato.png';
import perucaReal from '../../../imagens/peruca-real.png';
import soltarCabelo from '../../../imagens/soltar-cabelo.png';

function Dicas() {
    return(
        <section className={style.dicasScetion}>
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
            </div>
        </section>
    );
}

export default Dicas;
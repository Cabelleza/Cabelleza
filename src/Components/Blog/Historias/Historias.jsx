import style from './Historias.module.css';
import linhaCompleta from '../../../imagens/meia-linha.png';
import Vania from '../../../imagens/vania.png';
import Sezete from '../../../imagens/sezete.png';
import Lais from '../../../imagens/lais.png';

export default function Historias() {
    return (
        <section className={style.historiasSection}>
        <div className={style.titleHistorias}>
            <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
            <h1 className={style.relatos}>Histórias</h1>
            <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
        </div>

        <div className={style.containerBox}>
            <div className={style.boxDicas}>
                <img src={Lais} alt="" />
                <p className={style.descBoxDicas}>Laís Santos, 32 anos.</p>
            </div>            
            <div className={style.boxDicas}>
                <img src={Sezete} alt="" />
                <p className={style.descBoxDicas}>Sezete Pereira, 37 anos.</p>
            </div>            
            <div className={style.boxDicas}>
                <img src={Vania} alt="" />
                <p className={style.descBoxDicas}>Vânia Helena, 60 anos.</p>
            </div>            
        </div>
    </section>
    );
}
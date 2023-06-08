import style from './Relatos.module.css';
import linhaCompleta from '../../../imagens/meia-linha.png';
import luanAraujo from '../../../imagens/luan-araujo.png';
import marcelaThais from '../../../imagens/marcela-thais.png';
import marianaAlmeida from '../../../imagens/mariana-almeida.png';

export default function Relatos() {
    return (
        <section className={style.relatosSection}>
        <div className={style.titleRelatos}>
            <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
            <h1 className={style.relatos}>Relatos</h1>
            <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
        </div>

        <div className={style.containerBox}>
            <div className={style.boxDicas}>
                <img src={marcelaThais} alt="" />
                <p className={style.descBoxDicas}>Marcela Thais</p>
            </div>            
            <div className={style.boxDicas}>
                <img src={marianaAlmeida} alt="" />
                <p className={style.descBoxDicas}>Mariana Almeida</p>
            </div>            
            <div className={style.boxDicas}>
                <img src={luanAraujo} alt="" />
                <p className={style.descBoxDicas}>Luan de Araújo</p>
            </div>            
        </div>
    </section>
    );
}
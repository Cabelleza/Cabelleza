import style from './Parceiros.module.css';
import linhaCompleta from '../../../imagens/linha-completa.png';
import parceiros1 from '../../../imagens/parceiros1.png';
import parceiros2 from '../../../imagens/parceiros2.png';
import parceiros3 from '../../../imagens/parceiros3.png';
import parceiros4 from '../../../imagens/parceiros4.png';
import parceiros5 from '../../../imagens/parceiros5.png';

export default function Parceiros() {
    return (
        <section className={style.parceirosSection}>
        <div className={style.titleParceiros}>
            <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
            <h1 className={style.relatos}>Parceiros</h1>
            <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
        </div>

        <div className={style.containerBox}>
            <img src={parceiros1} alt="" />
            <img src={parceiros2} alt="" />
            <img src={parceiros3} alt="" />
            <img src={parceiros4} alt="" />
            <img src={parceiros5} alt="" />
        </div>
    </section>
    );
}
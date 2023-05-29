import style from './Slogan.module.css';
import flor from '../../imagens/flor.png';
import flor2 from '../../imagens/flor2.png';

export default function Slogan() {
    return (
        <section className={style.sectionSlogan}>
            <h1 className={style.sloganH1}>Porque fazer o bem, faz bem.</h1>

            <img src={flor} className={style.flor1}/>
            <img src={flor2} className={style.flor2}/>
            <img src={flor} className={style.flor3}/>
            <img src={flor2} className={style.flor4}/>
        </section>
    );
}
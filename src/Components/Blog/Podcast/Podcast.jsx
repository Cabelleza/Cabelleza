import style from './Podcast.module.css';
import linhaCompleta from '../../../imagens/linha-completa.png';
import podcast1 from '../../../imagens/podcast1.png';
import podcast2 from '../../../imagens/podcast2.png';
import podcast3 from '../../../imagens/podcast3.png';
import podcast4 from '../../../imagens/podcast4.png';

export default function Podcast() {
    return (
        <section className={style.sectionPodcast}>
            <div className={style.titlePodcast}>
                <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
                <h1 className={style.dicasText}>Podcast</h1>
                <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
            </div>

            <div className={style.containerPodcast}>
                <img src={podcast1} alt="" />
                <img src={podcast2} alt="" />
                <img src={podcast3} alt="" />
                <img src={podcast4} alt="" />
            </div>
        </section>
    );
}


import style from './Podcast.module.css';
import linhaCompleta from '../../../imagens/meia-linha.png';


export default function Podcast() {
    return (
        <div id='Podcast'>
            <section className={style.sectionPodcast}>
                <div className={style.titlePodcast}>
                    <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
                    <h1 className={style.dicasText}>Podcast</h1>
                    <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
                </div>

                <div className={style.containerPodcast}>
                    <iframe  src="https://open.spotify.com/embed/episode/4b4UkjRBoZYofAosH6e2L9?utm_source=generator&t=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <iframe  src="https://open.spotify.com/embed/episode/1k9PytSoO3MRjVi2YUN3Em?utm_source=generator&t=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <iframe  src="https://open.spotify.com/embed/episode/0ZYx5GKXHRZ0HFNHNU77zv?utm_source=generator&t=5263" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <iframe  src="https://open.spotify.com/embed/episode/3X06rcNeHAUksVxMfR1JgT?utm_source=generator&t=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <iframe  src="https://open.spotify.com/embed/episode/1LvwEDgg73iPE1Iz3Kya66?utm_source=generator&t=101590" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <iframe  src="https://open.spotify.com/embed/episode/2AWvtHWA967Nt2YAG8ZWd9?utm_source=generator&t=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                   
                </div>
            </section>
        </div>
    );
}


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
                    <iframe  src="https://open.spotify.com/embed/track/0ups9FIuseHpBqYaEyizBS?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <iframe  src="https://open.spotify.com/embed/track/0ups9FIuseHpBqYaEyizBS?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <iframe  src="https://open.spotify.com/embed/track/0ups9FIuseHpBqYaEyizBS?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <iframe  src="https://open.spotify.com/embed/track/0ups9FIuseHpBqYaEyizBS?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <iframe  src="https://open.spotify.com/embed/track/0ups9FIuseHpBqYaEyizBS?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <iframe  src="https://open.spotify.com/embed/track/0RnhLM38Bvg07TmQ8rCpIS?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                   
                </div>
            </section>
        </div>
    );
}


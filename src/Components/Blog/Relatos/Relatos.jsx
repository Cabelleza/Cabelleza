import { useState } from 'react';
import style from './Relatos.module.css';
import linhaCompleta from '../../../imagens/meia-linha.png';

function Relatos() {
    const [videoGrande, setvideoGrande] = useState();

    const exibirVideo = (videoId) => {
        setvideoGrande(videoId);
    };

    const fecharVideo = () => {
        setvideoGrande();
    };

    return (
        <div id='Relatos'>
            <section className={style.relatosSection}>
                <div className={style.titleRelatos}>
                    <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
                    <h1 className={style.relatosText}>Relatos</h1>
                    <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
                </div>

                <div className={style.containerBox}>
                    {videoGrande ? (
                        <div className={style.videoMaior}>
                            <iframe
                                width="700"
                                height="400"
                                src={`https://www.youtube.com/embed/${videoGrande}`}
                                title="Vídeo em tela cheia"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            ></iframe>
                            <button onClick={fecharVideo}>Fechar Vídeo</button>
                        </div>
                    ) : (
                        <>
                            <div className={style.boxDicas}>
                                <iframe
                                    width="280"
                                    height="200"
                                    src="https://www.youtube.com/embed/0t8HOE9Ta0M"
                                    title="Doação de cabelo: relato da Ketelyn Brito."
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                                <p className={style.descBoxDicas}>Doação de cabelo: relato da Ketelyn Brito.</p>
                                <button onClick={() => exibirVideo('0t8HOE9Ta0M')}>Assistir em tela cheia</button>
                            </div>

                            <div className={style.boxDicas}>
                                <iframe
                                    width="280"
                                    height="200"
                                    src="https://www.youtube.com/embed/8E_hCGkjKlM"
                                    title="Doação de cabelo: relato da Amanda Barsottini."
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                                <p className={style.descBoxDicas}>Doação de cabelo: relato da Amanda Barsottini.</p>
                                <button onClick={() => exibirVideo('8E_hCGkjKlM')}>Assistir em tela cheia</button>
                            </div>

                            <div className={style.boxDicas}>
                                <iframe
                                    width="280"
                                    height="200"
                                    src="https://www.youtube.com/embed/31o7-PQ3bew"
                                    title="Doação de cabelo: relato da Isabela Barsottini."
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                                <p className={style.descBoxDicas}>Doação de cabelo: relato da Isabela Barsottini.</p>
                                <button onClick={() => exibirVideo('WWRjmZk_j0c')}>Assistir em tela cheia</button>
                            </div>

                            <div className={style.boxDicas}>
                                <iframe
                                    width="280"
                                    height="200"
                                    src="https://www.youtube.com/embed/0EqEa9d9qbo"
                                    title="Doação de cabelo: relato da Marta Teles."
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                                <p className={style.descBoxDicas}>Doação de cabelo: relato da Marta Teles.</p><br />
                                <button onClick={() => exibirVideo('b2zhAtc8HMM')}>Assistir em tela cheia</button>
                            </div>

                        </>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Relatos;
import { useState } from 'react';
import style from './Dicas.module.css';
import linhaCompleta from '../../../imagens/meia-linha.png';

function Dicas() {
    const [videoGrande, setvideoGrande] = useState();

    const exibirVideo = (videoId) => {
        setvideoGrande(videoId);
    };

    const fecharVideo = () => {
        setvideoGrande();
    };

    return (
        <div id='Dicas'>
            <section className={style.dicasSection}>
                <div className={style.titleDicas}>
                    <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
                    <h1 className={style.dicasText}>Dicas</h1>
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
                                    src="https://www.youtube.com/embed/PKdO_JSCh0w"
                                    title="6 DICAS PARA MANTER O CABELO HIDRATADO"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                                <p className={style.descBoxDicas}>6 dicas para manter o cabelo hidratado.</p>
                                <button onClick={() => exibirVideo('PKdO_JSCh0w')}>Assistir em tela cheia</button>
                            </div>

                            <div className={style.boxDicas}>
                                <iframe
                                    width="280"
                                    height="200"
                                    src="https://www.youtube.com/embed/EjD8RZrSNL8"
                                    title="Peruca REAL | Cabelos Humanos | CROWN WIGS"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                                <p className={style.descBoxDicas}>Peruca real. Conhecendo um pouco.</p>
                                <button onClick={() => exibirVideo('EjD8RZrSNL8')}>Assistir em tela cheia</button>
                            </div>

                            <div className={style.boxDicas}>
                                <iframe
                                    width="280"
                                    height="200"
                                    src="https://www.youtube.com/embed/WWRjmZk_j0c"
                                    title="Truque para soltar o cabelo cacheado e dar um volume MARAVILHOSO"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                                <p className={style.descBoxDicas}>Truque para soltar o cabelo cacheado e dar volume.</p>
                                <button onClick={() => exibirVideo('WWRjmZk_j0c')}>Assistir em tela cheia</button>
                            </div>

                            <div className={style.boxDicas}>
                                <iframe
                                    width="280"
                                    height="200"
                                    src="https://www.youtube.com/embed/b2zhAtc8HMM?list=RDCMUC7Dl16WqigakVQfqwZgC3vg"
                                    title="Penteado na PERUCA: Mecha Lateral Presa"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                                <p className={style.descBoxDicas}>Penteado na peruca.</p><br />
                                <button onClick={() => exibirVideo('b2zhAtc8HMM')}>Assistir em tela cheia</button>
                            </div>

                        </>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Dicas;
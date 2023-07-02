import { useState } from 'react';
import style from './Historias.module.css';
import linhaCompleta from '../../../imagens/meia-linha.png';

export default function Historias() {
  const [videoGrande, setvideoGrande] = useState();

  const exibirVideo = (videoId) => {
    setvideoGrande(videoId);
  };

  const fecharVideo = () => {
    setvideoGrande();
  };

  return (
    <div id="Historias">
      <section className={style.historiasSection}>
        <div className={style.titleHistorias}>
          <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
          <h1 className={style.relatos}>Histórias</h1>
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
                  src="https://www.youtube.com/embed/xtMSsqnioxk"
                  title="Câncer de Mama: Conheça a história da Laís - #OutubroRosa"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <p className={style.descBoxDicas}>Laís Santos, 32 anos.</p>
                <button onClick={() => exibirVideo('xtMSsqnioxk')}>Assistir em tela cheia</button>
              </div>

              <div className={style.boxDicas}>
                <iframe
                  width="280"
                  height="200"
                  src="https://www.youtube.com/embed/WdyIMPgofhA"
                  title="Câncer de Mama: Emocione-se com a história de Suzete - #OutubroRosa"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <p className={style.descBoxDicas}>Sezete Pereira, 37 anos.</p>
                <button onClick={() => exibirVideo('WdyIMPgofhA')}>Assistir em tela cheia</button>
              </div>

              <div className={style.boxDicas}>
                <iframe
                  width="280"
                  height="200"
                  src="https://www.youtube.com/embed/74gyLB4b3sk"
                  title="Câncer de Mama: Vania venceu o câncer 2 vezes - #OutubroRosa"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <p className={style.descBoxDicas}>Vânia Helena, 60 anos.</p>
                <button onClick={() => exibirVideo('74gyLB4b3sk')}>Assistir em tela cheia</button>
              </div>

              <div className={style.boxDicas}>
                <iframe
                  width="280"
                  height="200"
                  src="https://www.youtube.com/embed/XkzRmFHx-9A?list=PLse7VeiUu3DEPoxTcyD1sSDIE_koZR8n1"
                  title="Câncer de Mama: Conheça a história de Edilene - #OutubroRosa"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <p className={style.descBoxDicas}>Edilene, 49 anos.</p>
                <button onClick={() => exibirVideo('XkzRmFHx-9A')}>Assistir em tela cheia</button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

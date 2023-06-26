import style from './Dicas.module.css';
import linhaCompleta from '../../../imagens/meia-linha.png';


function Dicas() {
    return (
        <div id='Dicas'>
            <section className={style.dicasSection}>
                <div className={style.titleDicas}>
                    <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
                    <h1 className={style.dicasText}>Dicas</h1>
                    <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
                </div>

                <div className={style.containerBox}>
                    <div className={style.boxDicas}>
                        <iframe width="280" height="200" src="https://www.youtube.com/embed/PKdO_JSCh0w" title="6 DICAS PARA MANTER O CABELO HIDRATADO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p className={style.descBoxDicas}>6 dicas para manter o cabelo hidratado.</p>
                    </div>
                    <div className={style.boxDicas}>
                        <iframe width="280" height="200" src="https://www.youtube.com/embed/EjD8RZrSNL8" title="Peruca REAL | Cabelos Humanos | CROWN WIGS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p className={style.descBoxDicas}>Peruca real. Conhecendo um pouco.</p>
                    </div>
                    <div className={style.boxDicas}>
                        <iframe width="280" height="200" src="https://www.youtube.com/embed/WWRjmZk_j0c" title="Truque para soltar o cabelo cacheado e dar um volume MARAVILHOSO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p className={style.descBoxDicas}>Truque para soltar o cabelo cacheado e dar volume.</p>
                    </div>
                    <div className={style.boxDicas}>
                        <iframe width="280" height="200" src="https://www.youtube.com/embed/b2zhAtc8HMM?list=RDCMUC7Dl16WqigakVQfqwZgC3vg" title="Penteado na PERUCA: Mecha Lateral Presa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p className={style.descBoxDicas}>Penteado na peruca.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dicas;
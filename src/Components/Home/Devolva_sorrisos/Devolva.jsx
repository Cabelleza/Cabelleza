import style from './Devolva.module.css';
import mulherSegurandoPeruca from '../../../imagens/imagemArredondadaMulherCareca.png';

function Devolva() {
    return (
        <>
        <div className={style.container}>
            <section className={style.sectionDevolva}>
                <div className={style.devolvaText}>
                    <h1 className={style.devolvaH1Text}>Devolva sorrisos!</h1>
                    <p className={style.devolvaPText}>Recebemos doações de cabelos, os transformamos <br /> em perucas e entregamos para instituições de <br /> combate ao câncer. </p>
                </div>

                <img src={mulherSegurandoPeruca} alt="Imagem arredondada de uma mulher branca careca, segurando uma peruca loira enquanto se olha no espelho." className={style.devolvaImagemMulher} />
            </section>

            <div className={style.ocean}>
                <div className={style.wave}></div>
                <div className={style.wave}></div>
                <div className={style.wave}></div>
            </div>
        </div>
        </>
    );
}

export default Devolva;
import style from './Devolva.module.css';
import mulherSegurandoPeruca from '../../imagens/imagemArredondadaMulherCareca.png';

function Devolva() {
    return (
        <section className={style.sectionDevolva}>
            <div className={style.devolvaText}>
                <h1 className={style.devolvaH1Text}>Devolva sorrisos!</h1>
                <p className={style.devolvaPText}>Recebemos doações de cabelos e transformamos em perucas e entregamos para instituições de combate ao câncer.</p>
            </div>

            <img src={mulherSegurandoPeruca} alt="Imagem arredondada de uma mulher branca careca, segurando uma peruca loira enquanto se olha no espelho." className={style.devolvaImagemMulher} />
        </section>
    );
}

export default Devolva;
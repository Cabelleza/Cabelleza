import style from './Apoiadores.module.css';

function Apoiadores() {
    return (
        <section className={style.sectionApoiadores}>
            <div className={style.apoiadoresLinhaCompleta}></div>

            <h1 className={style.apoiadoresH1}>Apoiadores</h1>
            <p className={style.apoiadoresP}>Apenas com apoio e participação dessas instituições, será possível realizar nossa missão e devolver a autoestima de crianças e mulheres com câncer.</p>

            <div className={style.containerApoiadores}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
}

export default Apoiadores;
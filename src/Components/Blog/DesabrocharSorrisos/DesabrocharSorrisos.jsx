import style from './DesabrocharSorrisos.module.css';
import menina from '../../../imagens/Menina.png'

function DesabrocharSorrisos() {
    return (
        <>
            <section className={style.desabrocharSorrisos}>
                <div>
                    <h1>Doar é desabrochar <span>Sorrisos</span></h1>
                </div>
                <img src={menina} alt="Cabeleireira realizando corte para doação" />
            </section>
        </>
    )
}

export default DesabrocharSorrisos;
import style from './DesabrocharSorrisos.module.css';
import menina from '../../../imagens/Menina.png';
import ReactRotatingText from "react-rotating-text";

function DesabrocharSorrisos() {
    return (
        <>
            <section className={style.desabrocharSorrisos}>
                <div>
                    <h1>
                        Doar é desabrochar{' '}
                        <span>
                            <ReactRotatingText items={['Sorrisos', 'Gratidão', 'Felicidade', 'Autoestima', 'Alegria']} 
                            cursor={false}
                            pause={3000}
                            emptyPause={1000}
                            />
                            <span className={style.reactRotatingTextCursor}>|</span>
                        </span>
                    </h1>
                </div>
                <img src={menina} alt="Mascote Cabelleza" />
            </section>
        </>
    )
}

export default DesabrocharSorrisos;
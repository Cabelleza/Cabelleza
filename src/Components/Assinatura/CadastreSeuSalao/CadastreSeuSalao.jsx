import style from './CadastreSeuSalao.module.css';
import { Link } from "react-router-dom";
import cabeleireira_corte from '../../../imagens/cabeleireira-corte.svg'

function CadastreSeuSalao() {
    return (
        <>
            <section className={style.cadastreSeuSalao}>
                <div>
                    <h1>Porque fazer o bem, faz bem!!!</h1>
                    <Link to='/Cadastro'><button>Cadastre seu salão</button></Link>
                </div>
                <img src={cabeleireira_corte} alt="Cabeleireira realizando corte para doação" />
            </section>
        </>
    )
}

export default CadastreSeuSalao;
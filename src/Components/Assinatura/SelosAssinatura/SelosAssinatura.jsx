import style from './SelosAssinatura.module.css';
import { Link } from "react-router-dom";
import selo_bronze from '../../../imagens/selo-bronze.png';
import selo_prata from '../../../imagens/selo-prata.png';
import selo_ouro from '../../../imagens/selo-ouro.png';

function SelosAssinatura() {
    return (
        <>
            <section className={style.selosAssinatura}>
                <h1>Selos Cabelleza</h1>
                <p>Venha entender sobre cada selo de acordo com a sua assinatura!</p>
                <div className={style.selosAssinaturaContainer}>
                    <div>
                        <img src={selo_bronze} alt="Selo bronze" />
                        <h3>Selo <span className={style.bronze}>Bronze</span></h3>
                        <p>Seu salão adquire esse selo quando assina o plano mensal. Além dele, você ainda tem todas as vantagens do plano.</p>
                    </div>
                    <div>
                        <img src={selo_prata} alt="Selo bronze" />
                        <h3>Selo <span className={style.prata}>Prata</span></h3>
                        <p>É o selo adquirido quando o salão adquire a assinatura do plano semestral. Com esse selo é nítido o maior compromisso com a Cabelleza!</p>
                    </div>
                    <div>
                        <img src={selo_ouro} alt="Selo bronze" />
                        <h3>Selo <span className={style.ouro}>Ouro</span></h3>
                        <p>Seu salão com mais visibilidade e destaque não só na plataforma mas também em todas as mídias socias do Cabelleza.</p>
                    </div>
                </div>
                <Link to='/Cadastro'><button>Cadastre seu salão</button></Link>
            </section>
        </>
    )
}

export default SelosAssinatura;
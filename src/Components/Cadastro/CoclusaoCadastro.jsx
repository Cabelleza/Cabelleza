
import style from './CoclusaoCadastro.module.css';
import { Link } from "react-router-dom";
import Logo from '../../imagens/logo.svg';

function ConclusaoCadastro() {
    return(
        <>
            <main className={style.MainConclusaoCadastro}>
                <div className={style.headerConclusaoCadastro} >
                    <div className={style.AreaImagemLogo}>
                        <img src={Logo} alt="Logo Cabelleza" />
                    </div>
                </div>

                <div className={style.AreaElementos}>
                <div className={style.CorpoElementos}>
                    <div className={style.AreaImagemCheck}></div>
                    <div className={style.AreaTextoConclusao}>
                        <p className={style.TextoRosaConclusao}>
                            Conta criada com sucesso!
                        </p>
                        <p className={style.TextoConclusao}>
                            Agora é preciso fazer o login na página inicial.
                        </p>
                    </div>
                    <Link to='/Login'><button className={style.buttonConclusao}>Login</button></Link>
                </div>
                </div>

                

                
            </main>
        </>
    )
}

export default ConclusaoCadastro;
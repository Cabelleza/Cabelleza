import { Link } from "react-router-dom";
import style from "./Boxlogin.module.css";
import seta from "../../imagens/seta.png";
function Boxlogin() {
  return (
    <div className={style.ye}>
    
      <main className={style.boxfunologin}>
        <section className={style.boxlogin}>
          <div className={style.boxdados}>
          <Link to='/'>  <button className={style.botaovoltar}><i class="fa-solid fa-arrow-left"></i></button></Link>
            <h3>Área de login</h3>
            <div className={style.boxemailSenha}>
              <input
                className={style.input1}
                type="email"
                placeholder="E-mail"
              />
              <input
                className={style.input2}
                type="password"
                placeholder="Senha"
              />
            </div>
            <div className={style.boxcheck}>
              <input className={style.input3} type="checkbox" />
              <p>Lembre de mim?</p>
            </div>
            <div className={style.botaoentrar}>
              <button className={style.entrar}>Entrar</button>
              <Link>
                {" "}
                <p>Esqueceu senha?</p>
              </Link>
              <hr />
            </div>
            <div className={style.botaocadastro}>
              <p>Ainda nao tem login?</p>
              <Link to="/assinatura" className={style.link}>
                Cadastre-se aqui
              </Link>
            </div>
          </div>
          <div className={style.rodameio}></div>
          <div className={style.boximglogin}></div>
        </section>
      </main>
    </div>
  );
}

export default Boxlogin;

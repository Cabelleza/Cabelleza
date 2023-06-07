import React, { useState } from "react";
import { Link } from "react-router-dom";
import {BsArrowLeft} from "react-icons/bs";
import style from "./Boxlogin.module.css";

function Boxlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se email e senha estão cadastrados no banco de dados
    if (email === "exemplo@dominio.com" && password === "senha123") {
      // Login realizado, levar para a página de configurações
    } else {
      // Login falhou, exibir mensagem de erro
      setErrorMessage("E-mail ou senha inválidos!");
    }
  };

  return (
    <div className={style.ye}>
      <main className={style.boxfunologin}>
        <section className={style.boxlogin}>
          <div className={style.boxdados}>
            <Link to="/">
              <button className={style.botaovoltar}>
                <BsArrowLeft/>
              </button>
            </Link>
            <h3>Área de login</h3>
            <form onSubmit={handleSubmit}>
              <div className={style.boxemailSenha}>
                <input
                  className={style.input1}
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <input
                  className={style.input2}
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className={style.boxcheck}>
                <input
                  className={style.input3}
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <p>Lembre de mim?</p>
              </div>
              <div className={style.botaoentrar}>
                <input className={style.entrar} type="submit" value="Entrar" />
                <Link>
                  <p>Esqueceu a senha?</p>
                </Link>
                {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}
                <hr />
              </div>
            </form>
            <div className={style.botaocadastro}>
              <p>Ainda não tem login?</p>
              <Link to="/Assinatura" className={style.link}>
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
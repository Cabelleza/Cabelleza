// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { BsArrowLeft } from "react-icons/bs";
// import style from "./Boxlogin.module.css";
// import toastr from 'toastr';//importando biblioteca de alerts
// import 'toastr/build/toastr.min.css';

// function Boxlogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleRememberMeChange = (e) => {
//     setRememberMe(e.target.checked);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Verificar se email e senha estão cadastrados no banco de dados
//     if (email === "exemplo@dominio.com" && password === "senha123") {
//       // Login realizado, levar para a página de perfil
//     } else {
//       // Login falhou, exibir mensagem de erro
//       toastr.error('E-mail ou senha inválidos!');
//     }
//   };

//   return (
//     <div className={style.ye}>
//       <main className={style.boxfunologin}>
//         <section className={style.boxlogin}>
//           <div className={style.boxdados}>
//             <Link to="/">
//               <button className={style.botaovoltar}>
//                 <BsArrowLeft />
//               </button>
//             </Link>
//             <h3>Área de login</h3>
//             <form onSubmit={handleSubmit}>
//               <div className={style.boxemailSenha}>
//                 <input
//                   className={style.input1}
//                   type="email"
//                   placeholder="E-mail"
//                   value={email}
//                   onChange={handleEmailChange}
//                   required
//                 />
//                 <input
//                   className={style.input2}
//                   type="password"
//                   placeholder="Senha"
//                   value={password}
//                   onChange={handlePasswordChange}
//                   required
//                 />
//               </div>
//               <div className={style.boxcheck}>
//                 <input
//                   className={style.input3}
//                   type="checkbox"
//                   checked={rememberMe}
//                   onChange={handleRememberMeChange}
//                 />
//                 <p>Lembre de mim?</p>
//               </div>
//               <div className={style.botaoentrar}>
//                 <input className={style.entrar} type="submit" value="Entrar" />
//                 <Link to="">
//                   <p>Esqueceu a senha?</p>
//                 </Link>
//                 <hr />
//               </div>
//             </form>
//             <div className={style.botaocadastro}>
//               <p>Ainda não tem login?</p>
//               <Link to="/Assinatura" className={style.link}>
//                 Cadastre-se aqui
//               </Link>
//             </div>
//           </div>
//           <div className={style.rodameio}></div>
//           <div className={style.boximglogin}></div>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default Boxlogin;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Boxlogin.module.css";
import toastr from 'toastr';

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
      // Login realizado, levar para a página de perfil
    } else {
      // Login falhou, exibir mensagem de erro
      toastr.error('E-mail ou senha inválidos!');
    }
  };
  return (
    <div className={style.ye}>
      <main className={style.boxfunologin}>
        <section className={style.boxlogin}>
          <div className={style.boxdados}>
            <Link to="/">
              <button className={style.botaovoltar}>

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
                <Link to="/Usuario">
                  <p>Esqueceu a senha?</p>
                </Link>
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

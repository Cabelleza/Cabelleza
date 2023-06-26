import Header from "../Header/Header";
import style from "./Perfil.module.css";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsGeoAltFill } from "react-icons/bs";
import { BsFillPenFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Logo from "../../imagens/logo.svg";

function Perfil() {
  return (
    <div className={style.pao}>
      <div className={style.main}>
        <div className={style.HeaderUser}>
          <div className={style.logoUser}>
            <img src={Logo} alt="Logo" />
          </div>
          <div className={style.boxSairConta}>
            <button>
              {" "}
              Sair Conta <BsArrowRightCircleFill />
            </button>
          </div>
        </div>

        <div className={style.BoxPerfil}>
          <div className={style.dadosSalao}>
            <div className={style.fotoNome}>
              <div className={style.boxalluserf}>
                <div className={style.boxBranco}>
                  <div className={style.boxRosa}>
                    <BsPersonFill />
                  </div>
                </div>
              </div>

              <div className={style.NomeSalao}>
                <p className={style.nome1}>Ophicina do Cabelo</p>
                <p className={style.nome2}>Ophicina@gmail.com</p>
              </div>
            </div>

            <div className={style.boxdadosPrincipais}>
              {/* _______________________1 dados______________________________ */}
              <details className={style.details1}>
                <summary className={style.summmary1}>
                  <div className={style.icon1}>
                    <BsFillPersonLinesFill />
                  </div>
                  <div className={style.textdados}>
                    <h6>Meus dados</h6>
                    <p>Valide seus dados</p>
                  </div>
                  <div className={style.setabaixo1}>
                    <BsFillCaretDownFill />
                  </div>
                </summary>
                <div className={style.miniBoxDados}>
                  <h5>Nome salão</h5>
                  <div className={style.boxNomeExibido}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.name}>Nome salão</p>
                      <p className={style.minidetalhe}>empresa...</p>
                    </div>
                  </div>
                  <div className={style.boxNomeUsuario}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.nameUsuario}>Nome contratante</p>
                      <p className={style.minidetalhe}>empresa...</p>
                    </div>
                  </div>
                  <div className={style.boxEmail}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.emailDados}>E-mail</p>
                      <p className={style.minidetalhe}>empresa...</p>
                    </div>
                  </div>
                  <div className={style.boxsenhaInf}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.senhaD}>Senha</p>
                      <p className={style.minidetalhe}>empresa...</p>
                    </div>
                  </div>
                  <div className={style.boxsenhaInf}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.senhaD}>Meio de contato</p>
                      <p className={style.minidetalhe}>
                        Telefone:(11)*******76
                      </p>
                    </div>
                  </div>

                  <div className={style.buttonATVDTV}>
                    <button className={style.Desativar}>Desativar conta</button>
                    <button className={style.Excluir}>Excluir conta</button>
                  </div>
                </div>
              </details>

              {/* _______________________2 Endereço______________________________ */}
              <details className={style.details1}>
                <summary className={style.summmary1}>
                  <div className={style.icon1}>
                    <BsGeoAltFill />
                  </div>
                  <div className={style.textdados}>
                    <h6>Endereço</h6>
                    <p> Endereço que foi salvo em sua conta</p>
                  </div>
                  <div className={style.setabaixo2}>
                    <BsFillCaretDownFill />
                  </div>
                </summary>
                <div className={style.miniBoxDados}>
                  <h5>Nome salão</h5>
                  <div className={style.boxendereco1}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.name}>Endereço 1</p>
                      <p className={style.minidetalhe}>
                        R. Tito, 54 - Vila Romana, São Paulo - SP, 05051-000
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              {/* _______________________3 Assinatura______________________________ */}
              <details className={style.details1}>
                <summary className={style.summmary1}>
                  <div className={style.icon1}>
                    <BsFillPenFill />
                  </div>
                  <div className={style.textdados}>
                    <h6>Plano de assinatura</h6>
                    <p>Gerencia suas assinaturas</p>
                  </div>
                  <div className={style.setabaixo3}>
                    <BsFillCaretDownFill />
                  </div>
                </summary>
                <div className={style.miniBoxDados}>
                  <h5>Nome salão</h5>
                  <div className={style.boxplanoBronza}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.PlanoBronze}>Plano bronze</p>
                      <p className={style.minidetalhe}>
                        Você ainda não possui o plano broze
                      </p>
                    </div>
                  </div>
                  <div className={style.boxplanoPrata}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.PlanoPrata}>Plano prata</p>
                      <p className={style.minidetalhe}>
                        Você ainda não possui o plano prata
                      </p>
                    </div>
                  </div>
                  <div className={style.boxplanoOuro}>
                    <div className={style.boxTextoinfo}>
                      <p className={style.PlanoOuro}>Plano ouro</p>
                      <p className={style.minidetalhe}>
                        Parabéns você possui o plano ouro
                      </p>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Perfil;

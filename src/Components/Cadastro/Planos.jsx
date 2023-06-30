import { Link } from "react-router-dom";
import style from "./Planos.module.css";
import flor from "../../imagens/Flor-plano.png";
function Planos() {
  return (
    <>
      <div className={style.main}>
        <div className={style.linhaTempo}>
          <span className={style.active}>Planos</span>
          <hr />
          <span className={style.white}>Dados</span>
        
        </div>
        <div className={style.planos}>
           {/* ______________________1 Plano_______________________________ */}
          <div className={style.boxplano}>
            <div className={style.boxh4}>
              <h4 className={style.tipo}> Plano Gratuito</h4>
            </div>
            <div className={style.boxpreco}>
              <p className={style.conta}>
                Crie sua conta <br />
                gratuitamente
              </p>
            </div>
            <div className={style.boxvantagens}>
              <div className={style.divVantagem1}>
                <img src={flor} alt="" />
                <span>
                  Cadastre-se gratuitamente em nossa plataforma e ajude no atos
                  de devolvere sorrisos.
                </span>
              </div>
              <div className={style.divVantagem2}>
                <img src={flor} alt="" />
                <span className={style.span2}>
                  Teste gratuito por um mês, estando sujeito a escolhas dos
                  nossos planos dispostos.
                </span>
              </div>
            </div>
            <div className={style.btnassinar}>
            <Link to='/cadastrosalao'><button className={style.button1}>Cadastre-se já</button></Link> 
              {/* <button className={style.button1}>Cadastre-se já</button> */}
            </div>
          </div>
           {/* ____________________ 2 Plano________________________________ */}
          <div className={style.boxplano}>
            <div className={style.boxh4}>
              <h4 className={style.tipo}> Plano mensal</h4>
            </div>
            <div className={style.boxpreco}>
              <p className={style.preco}>
                $49,99/Mês
              </p>
            </div>
               <h5 className={style.Tvantagens}>Vantagens:</h5>
            <div className={style.boxvantagens}>
              <div className={style.divVantagem3}>
                <img src={flor} alt="" />
                <span>
                Conteúdos do salãos dispostos no blog 1 vez a cada 2 semanas

                </span>
              </div>

              <div className={style.divVantagem3}>
                <img src={flor} alt="" />
                <span className={style.span2}>
                Anúncio  uma vez na semana na página salões durante 4h
                </span>
              </div>

              <div className={style.divVantagem3}>
                <img src={flor} alt="" />
                <span className={style.span2}>
                  Selo  <span className={style.bronze}>Broze</span>

                </span>
              </div>

            </div>

            <div className={style.btnassinar}>
            <Link to='/cadastrosalao'><button className={style.button2}>Cadastre-se já</button></Link> 
              {/* <button className={style.button2}>Assinar agora</button> */}
            </div>
          </div>
 {/* _______________________3 Plano______________________________ */}
          <div className={style.boxplano}>


          <div className={style.boxh4}>
              <h4 className={style.tipo}> Plano semestral</h4>
            </div>
            <div className={style.boxpreco}>
              <p className={style.preco2}>
                $269,99/Semestre
              </p>
            </div>
               <h5 className={style.Tvantagens}>Vantagens:</h5>
            <div className={style.boxvantagens}>
              <div className={style.divVantagem4}>
                <img src={flor} alt="" />
                <span>
                Anúncio na página principal uma vez por semana
                </span>
              </div>

              <div className={style.divVantagem4}>
                <img src={flor} alt="" />
                <span className={style.span2}>
                Visibilidade no nosso blog 1 vez na semana..
                </span>
              </div>

              <div className={style.divVantagem4}>
                <img src={flor} alt="" />
                <span className={style.span2}>
                Destaque no nosso painel da home por 1 semana.
                </span>
              </div>

              <div className={style.divVantagem4}>
                <img src={flor} alt="" />
                <span className={style.span2}>
                  Selo  <span className={style.Prata}>Prata</span>

                </span>
              </div>

            </div>

            <div className={style.btnassinar}>
            <Link to='/cadastrosalao'><button className={style.button3}>Cadastre-se já</button></Link> 
              {/* <button className={style.button3}>Assinar agora</button> */}
            </div>
          </div>
{/* _______________________4 Plano______________________________ */}
          <div className={style.boxplano}>

          <div className={style.boxh4}>
              <h4 className={style.tipo}> Plano anual</h4>
            </div>
            <div className={style.boxpreco}>
              <p className={style.preco2}>
                $479,99/ano
              </p>
            </div>
               <h5 className={style.Tvantagens}>Vantagens:</h5>
            <div className={style.boxvantagens}>
              <div className={style.divVantagem5}>
                <img src={flor} alt="" />
                <span>
                Anúncio na página principal 2 vez por semana
                </span>
              </div>

              <div className={style.divVantagem5}>
                <img src={flor} alt="" />
                <span className={style.span2}>
                Visibilidade no nosso blog 2 vez na semana.
                </span>
              </div>

              <div className={style.divVantagem5}>
                <img src={flor} alt="" />
                <span className={style.span2}>
                Destaque no nosso painel da home por 3 dias por semana.
                </span>
              </div>

              <div className={style.divVantagem5}>
                <img src={flor} alt="" />
                <span className={style.span2}>
                Posts em nossas redes socias 1 vez por semana

                </span>
              </div>

              <div className={style.divVantagem5}>
                <img src={flor} alt="" />
                <span className={style.span2}>
                  Selo  <span className={style.Ouro}>Ouro</span>

                </span>
              </div>

            </div>

            <div className={style.btnassinar}>
            <Link to='/cadastrosalao'><button className={style.button4}>Cadastre-se já</button></Link> 
              {/* <button className={style.button4}>Assinar agora</button> */}
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default Planos;

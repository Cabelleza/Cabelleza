import style from './FaleConosco.module.css';
import meiaLinha from '../../imagens/meia-linha.png';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Formulario from '../../Components/FaleConosco/Formulario/Formulario';
import {BsFillTelephoneFill, BsEnvelopeFill} from "react-icons/bs";

function FaleConosco() {
    return (
        <>
            <Header />
            <div className={style.FaleConosco}>
                <p>Fale Conosco</p>
            </div>
            <section id={style.Atendimento}>
                <div className={style.txtAtendimento}>
                    <div className={style.transformar}>
                        <img src={meiaLinha} alt="" className={style.linha}/>
                        <h2>Atendimento Cabelleza</h2>
                        <img src={meiaLinha} alt="" className={style.linha}/>
                    </div>
                    <p>Nos envie um e-mail com a sua dúvida ou sugestão e logo te responderemos.</p>
                </div>

                <Formulario />

                <div className={style.txtAtendimento}>
                    <div className={style.transformar}>
                        <img src={meiaLinha} alt="" className={style.linha}/>
                        <h2>Entre em contato</h2>
                        <img src={meiaLinha} alt="" className={style.linha}/>
                    </div>
                    <p>Não conseguiu resolver seu problema? Entre em contato por meio de nosso telefone, nossa equipe de atendimento está disponível das 08h ás 20h, exceto feriados.</p>
                </div>
                <div className={style.meiosAtendimento}>
                    <a href="mailto:cabelleeza@gmail.com?subject=Informações sobre o projeto Cabelleza" className={style.divMeios}>
                        <BsEnvelopeFill className={style.divMeiosIcon}/>
                        <div>
                            <span>Envie-nos um e-mail</span>
                            <p>Faça sua solicitação com nossa equipe</p>
                        </div>
                    </a>
                    <a href="tel:+5511000000000" className={style.divMeios}>
                        <BsFillTelephoneFill className={style.divMeiosIcon}/>
                        <div>
                            <span>(11) 94987-9357</span>
                            <p>Nossos atendentes estão prontos para te atender</p>
                        </div>
                    </a>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default FaleConosco;
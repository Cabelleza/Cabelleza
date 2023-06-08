import style from './Container.module.css';
import {Link} from 'react-router-dom';
import corte from '../../../imagens/corte.png';
import meiaLinha from '../../../imagens/meia-linha.png';
import mechaDoada from '../../../imagens/mecha-doada.png';
import mulherGuerreira from '../../../imagens/mulher-guerreira.png';

export default function Container(){
    return(
        <>
            {/* container englobando todas as partes que estão com aquele fundo ondulado */}
            <section className={style.container}>
                {/* Junte-se ao Cabelleza */}
                <section className={style.sectionJunte}>
                    <h1 className={style.junteH1}>Junte-se a nós! Os salões de beleza mais <br /> diversos já estão no <span>Cabelleza</span>.</h1>
                    <Link to=''><button className={style.beneficiosButton}>Iniciar teste gratuito</button></Link> 
                </section>

                {/* Transformar vidas */}
                <section id={style.transformar_vidas}>
                    <div className={style.transformar}>
                       <img src={meiaLinha} alt="" />
                       <h2>Ajude a transformar vidas</h2>
                       <img src={meiaLinha} alt="" />
                    </div>

                    <div className={style.transformar_vidas_div2}>
                        <div>
                            <h3>A importância da sua ajuda</h3>
                            <p>Quem está em tratamento contra o câncer convive diariamente com a queda dos fios. 
                            Esse momento delicado do tratamento pode ser aliviado com um simples gesto de doação de cabelo.</p>
                        </div>
                        <img src={corte} alt="Mulher realizada cortando o cabelo"/>
                    </div>

                    <div className={style.transformar_vidas_div2}>
                        <img src={mechaDoada} alt="Mulher realizada cortando o cabelo" className={style.mecha}/>
                        <div>
                            <h3>Salões parceiros</h3>
                            <p>Aceitamos todos os tipos de cabelos, lisos, cacheados, crespos, ondulados, com química, 
                            a única exigência é que eles tenham no mínimo 15cm de comprimento.</p>
                        </div>
                    </div>

                    <div className={style.transformar_vidas_div2}>
                        <div>
                            <h3>Conteúdos informativos sobre doação e autocuidado</h3>
                            <p>Oferecemos um feed com podcasts, artigos, notícias e vídeos sobre o mundo da doação de cabelos e seu impacto, 
                                assim nossos usuários poderão se manter informados sobre o assunto e encontrar o apoio que precisam.</p>
                        </div>
                        <img src={mulherGuerreira} alt="Mulher guerreira"/>
                    </div>
                </section>
            </section>
        </>
    )
}
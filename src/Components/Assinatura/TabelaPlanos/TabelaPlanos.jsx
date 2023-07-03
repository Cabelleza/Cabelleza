import style from './TabelaPlanos.module.css';
import { BsCheckLg, BsXLg } from "react-icons/bs";
import Carousel from 'react-bootstrap/Carousel';
import flor_lotus from '../../../imagens/flor_lotus.svg'

function TabelaPlanos() {
    return (
        <>
            <section className={style.tabelaPlanos}>
                <h2>Conheça mais sobre os nossos benefícios</h2>
                <h1>Nossos planos</h1>
                <p>Explore os nossos planos. Escolha aquele que melhor atende às suas necessidades!</p>

                <table>
                    <tr>
                        <th><img src={flor_lotus} alt="Flor de lótus" /></th>
                        <th>Período Teste</th>
                        <th>Selo <span className={style.bronze}>Bronze</span> </th>
                        <th>Selo <span className={style.prata}>Prata</span> </th>
                        <th>Selo <span className={style.ouro}>Ouro</span> </th>
                    </tr>
                    <tr>
                        <td>Cadastro na plataforma</td>
                        <td><BsCheckLg className={style.tableIconCheck} /></td>
                        <td><BsCheckLg className={style.tableIconCheck} /></td>
                        <td><BsCheckLg className={style.tableIconCheck} /></td>
                        <td><BsCheckLg className={style.tableIconCheck} /></td>
                    </tr>
                    <tr>
                        <td>Anúncio páginas salões durante 4hrs</td>
                        <td><BsXLg className={style.tableIcon} /></td>
                        <td><BsCheckLg className={style.tableIconCheck} /></td>
                        <td><BsCheckLg className={style.tableIconCheck} /></td>
                        <td><BsCheckLg className={style.tableIconCheck} /></td>
                    </tr>
                    <tr>
                        <td>Anúncio página principal uma vez por semana</td>
                        <td><BsXLg className={style.tableIcon} /></td>
                        <td><BsXLg className={style.tableIcon} /></td>
                        <td><BsCheckLg className={style.tableIconCheck} /></td>
                        <td><BsCheckLg className={style.tableIconCheck} /></td>
                    </tr>
                    <tr>
                        <td>Visibilidade no nosso blog </td>
                        <td><BsXLg className={style.tableIcon} /></td>
                        <td><BsXLg className={style.tableIcon} /></td>
                        <td><BsCheckLg className={style.tableIconCheck} /></td>
                        <td><BsCheckLg className={style.tableIconCheck} /></td>
                    </tr>
                    <tr>
                        <td>Anúncio página principal três vezes por semana</td>
                        <td><BsXLg className={style.tableIcon} /></td>
                        <td><BsXLg className={style.tableIcon} /></td>
                        <td><BsXLg className={style.tableIcon} /></td>
                        <td><BsCheckLg className={style.tableIconCheck} /></td>
                    </tr>
                    <tr>
                        <td>Postagem nas nossas redes sociais </td>
                        <td><BsXLg className={style.tableIcon} /></td>
                        <td><BsXLg className={style.tableIcon} /></td>
                        <td><BsXLg className={style.tableIcon} /></td>
                        <td><BsCheckLg className={style.tableIconCheck} /></td>
                    </tr>
                </table>

                {/*SLIDE PLANOS RESPONSIVO*/}
                <Carousel className={style.carouselTabela}>
                    <Carousel.Item interval={3000} className={style.carouselItem}>
                        <div className={style.carouselItemContainer}>
                            <div className={style.carouselItemContainerColuna}>
                                <h2>Período Teste</h2>
                                <div><BsCheckLg className={style.tableIconCheck} /><span>Cadastro na plataforma</span></div>
                                <div><BsXLg className={style.tableIcon} /><span>Anúncio páginas salões durante 4hrs</span></div>
                                <div><BsXLg className={style.tableIcon} /><span>Anúncio página principal uma vez por semana</span></div>
                                <div><BsXLg className={style.tableIcon} /><span>Visibilidade no nosso blog</span></div>
                                <div><BsXLg className={style.tableIcon} /><span>Anúncio página principal três vezes por semana</span></div>
                                <div><BsXLg className={style.tableIcon} /><span>Postagem nas nossas redes sociais</span></div>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item interval={3000} className={style.carouselItem}>
                        <div className={style.carouselItemContainer}>
                            <div className={style.carouselItemContainerColuna}>
                                <h2>Selo <span className={style.bronze}>Bronze</span></h2>
                                <div><BsCheckLg className={style.tableIconCheck} /><span>Cadastro na plataforma</span></div>
                                <div><BsCheckLg className={style.tableIconCheck} /><span>Anúncio páginas salões durante 4hrs</span></div>
                                <div><BsXLg className={style.tableIcon} /><span>Anúncio página principal uma vez por semana</span></div>
                                <div><BsXLg className={style.tableIcon} /><span>Visibilidade no nosso blog</span></div>
                                <div><BsXLg className={style.tableIcon} /><span>Anúncio página principal três vezes por semana</span></div>
                                <div><BsXLg className={style.tableIcon} /><span>Postagem nas nossas redes sociais</span></div>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item interval={3000} className={style.carouselItem}>
                        <div className={style.carouselItemContainer}>
                            <div className={style.carouselItemContainerColuna}>
                                <h2>Selo <span className={style.prata}>Prata</span></h2>
                                <div><BsCheckLg className={style.tableIconCheck} /><span>Cadastro na plataforma</span></div>
                                <div><BsCheckLg className={style.tableIconCheck} /><span>Anúncio páginas salões durante 4hrs</span></div>
                                <div><BsCheckLg className={style.tableIconCheck} /><span>Anúncio página principal uma vez por semana</span></div>
                                <div><BsCheckLg className={style.tableIconCheck} /><span>Visibilidade no nosso blog</span></div>
                                <div><BsXLg className={style.tableIcon} /><span>Anúncio página principal três vezes por semana</span></div>
                                <div><BsXLg className={style.tableIcon} /><span>Postagem nas nossas redes sociais</span></div>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item interval={3000} className={style.carouselItem}>
                        <div className={style.carouselItemContainer}>
                            <div className={style.carouselItemContainerColuna}>
                                <h2>Selo <span className={style.ouro}>Ouro</span></h2>
                                <div><BsCheckLg className={style.tableIconCheck} /><span>Cadastro na plataforma</span></div>
                                <div><BsCheckLg className={style.tableIconCheck} /><span>Anúncio páginas salões durante 4hrs</span></div>
                                <div><BsCheckLg className={style.tableIconCheck} /><span>Anúncio página principal uma vez por semana</span></div>
                                <div><BsCheckLg className={style.tableIconCheck} /><span>Visibilidade no nosso blog</span></div>
                                <div><BsCheckLg className={style.tableIconCheck} /><span>Anúncio página principal três vezes por semana</span></div>
                                <div><BsCheckLg className={style.tableIconCheck} /><span>Postagem nas nossas redes sociais</span></div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>
        </>
    )
}

export default TabelaPlanos;
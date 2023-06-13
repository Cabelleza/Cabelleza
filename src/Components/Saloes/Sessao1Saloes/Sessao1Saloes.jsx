import style from './Sessao1Saloes.module.css';
import lupa from '../../../imagens/lupe.svg';

function Sessao1Saloes() {
    return (
        <div className={style.SectionSessao1Saloes}>
            <div className={style.sectionElementosSessaoSaloes}>
                <div className={style.SessaoTextoSessao1Saloes}>
                    <div className={style.AreaTituloSessao1Saloes}>
                        <h1 className={style.TituloSessao1Saloes}>Salões de beleza</h1>
                    </div>
                    <div className={style.AreaTextoSessao1Saloes}>
                        <h1 className={style.TextoSessao1Saloes}>Serviços  completos para a valorização da beleza de nossos clientes com os melhores profissionais do mercado.</h1>
                    </div>
                </div>

                <div className={style.areaSearchBar}>
                    <div className={style.search_box}>
                        <input type="text" className={style.search_txt} placeholder="Pesquisar"/>
                        <a href="#" className={style.search_btn}>
                            <img src={lupa} alt="Lupa de pesquisa" height={20} width={20} />
                        </a>
                    </div>

                    <div className={style.areaImagemFlorLotus}></div>

                </div>              

            </div>

        </div>
    );
}

export default Sessao1Saloes;
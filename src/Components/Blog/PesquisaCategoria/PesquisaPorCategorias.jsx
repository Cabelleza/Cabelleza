import style from './PesquisaPorCategoria.module.css';
import dicas from '../../../imagens/iconedicas.png';
import podcast from '../../../imagens/iconepodcast.png';
import relatos from '../../../imagens/iconerelatos.png';
import historia from '../../../imagens/iconehistoria.png';
import parceiros from '../../../imagens/iconeparceiros.png';
import flor from '../../../imagens/flordivisaoblog.png';


function Categoria() {
    return (
        <section className={style.PesquisasCategoria}>
            <h1>Pesquisa por categorias:</h1>

            <div className={style.Todoconteudo}>
                <a href="#Dicas" className={style.Conteudosdoblog}>
                    <div>
                        <p>Dicas</p>
                        <img src={dicas} alt="Pesquisa por dicas" />
                    </div>
                </a>

                <a href="#Podcast" className={style.Conteudosdoblog}>
                    <div>
                        <p>Podcast</p>
                        <img src={podcast} alt="Pesquisa por podcast" />
                    </div>
                </a>

                <a href="#Relatos" className={style.Conteudosdoblog}>
                    <div>
                        <p>Relatos</p>
                        <img src={relatos} alt="Pesquisa por relatos" />
                    </div>
                </a>

                <a href="#Historias" className={style.Conteudosdoblog}>
                    <div>
                        <p>Histórias</p>
                        <img src={historia} alt="Pesquisa por historia" />
                    </div>
                </a>

                <a href="#Parceiros" className={style.Conteudosdoblog}>
                    <div className={style.Ajusteparceiro}>
                        <p>Parceiros</p>
                        <img src={parceiros} alt="Pesquisa por parceiros" />
                    </div>
                </a>
            </div>
            <div className={style.Florlotusblog}>
                <img src={flor} className={style.Fotolotusblog} />
            </div>
        </section>
    )
}

export default Categoria;
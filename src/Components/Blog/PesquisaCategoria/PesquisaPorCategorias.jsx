import style from './PesquisaPorCategoria.module.css';
import artigo from '../../../imagens/iconeartigo.png';
import dicas from '../../../imagens/iconedicas.png';
import podcast from '../../../imagens/iconepodcast.png';
import relatos from '../../../imagens/iconerelatos.png';
import historia from '../../../imagens/iconehistoria.png';
import parceiros from '../../../imagens/iconeparceiros.png';



function Categoria(){
    return(
        <section className={style.PesquisasCategoria}>
            <h1>Pesquisa por categorias:</h1>
           
            <div className={style.Todoconteudo}>
                <a href="#" className={style.Conteudosdoblog}>
                    <div>
                        <p>Artigos</p>
                        <img src={artigo} alt="Pesquisa por artigos"/>
                    </div>
                </a>
                
                <a href="#Dicas" className={style.Conteudosdoblog}>
                    <div>
                         <p>Dicas</p>    
                        <img src={dicas} alt="Pesquisa por dicas"/>
                    </div>
                </a>

                <a href="#Podcast" className={style.Conteudosdoblog}>
                    <div>
                        <p>Podcast</p>
                        <img src={podcast} alt="Pesquisa por podcast"/>
                    </div>
                </a>

                <a href="#Relatos" className={style.Conteudosdoblog}>
                    <div>
                        <p>Relatos</p>
                        <img src={relatos} alt="Pesquisa por relatos"/>
                    </div>
                </a>

                <a href="#Historias" className={style.Conteudosdoblog}>
                    <div>
                        <p>Histórias</p>
                        <img src={historia} alt="Pesquisa por historia"/>
                    </div>
                </a>

                <a href="#Parceiros" className={style.Conteudosdoblog}>
                    <div className={style.Ajusteparceiro}>
                        <p>Parceiros</p>
                        <img src={parceiros} alt="Pesquisa por parceiros"/>
                    </div>
                </a>
            </div>
            <div className={style.Florlotusblog}>
                <div className={style.Linha}></div>
                <div className={style.Fotolotusblog}></div>
            </div>
        </section>
    )
}

export default Categoria;
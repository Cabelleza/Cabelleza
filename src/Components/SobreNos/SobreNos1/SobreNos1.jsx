import style from './SobreNos1.module.css';

function Sessao1() {
    return (
        <>
            <section className={style.Sessao1}>
                <div className={style.SessaoTextoSessao1}>
                    <div className={style.AreaTextoSessao1}>
                        <p className={style.TextoSessao1}>Levando a Beleza para mulheres por meio dos cabelos.</p>
                    </div>
                </div>

                <div className={style.SessaoImagem}>
                    <div className={style.AreaImagem}>
                        <div className={style.Imagem}></div>
                    </div>
                </div>




            </section>
        
        </>
    );
}

export default Sessao1;
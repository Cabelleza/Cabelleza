import style from './HistoriaMarcaFlor.module.css';

function HistoriaMarcaFlor() {
    return (
        <>
            <section className={style.SectionHistoriaMarcaFlor}>

                {/* Sessão de Nossa História */}
                <div className={style.SessaoNossaHistoria}>
                    <div className={style.SessaoTextoNossaHistoria}>
                        <div className={style.AreaTextoNossaHistoria}>

                            <p className={style.TituloRosa_NossaHistoriaMarcaFlor}>
                                Nossa História
                            </p>
                            <p className={style.Texto_NossaHistoriaMarcaFlor}>
                            Tudo começa em 2023 quando um grupo de amigos se reúne para desenvolver um projeto que realmente possa impactar vida de milhares de mulheres, a <span className={style.TextoRosa_NossaHistoriaMarcaFlor}>Cabelleza</span>!<br></br><br></br>
                            Nossa proposta é conciliar pessoas que querem um bom corte de cabelo em salões especializados e incentivar a doação de suas mechas para mulheres que realmente precisam dessa fonte de força para superar as lutas e desafios trazidos pelo câncer.
                            </p>
                        </div>
                    </div>

                    <div className={style.SessaoImagemNossaHistoriaMarcaFlor}>
                        <div className={style.AreaImagemNossaHistoria}></div>
                    </div>
                </div>

                {/* Sessão de Nossa Marca */}
                <div className={style.SessaoNossaMarca}>

                    <div className={style.SessaoImagemNossaHistoriaMarcaFlor}>
                        <div className={style.AreaImagemMarca}></div>
                    </div>

                    <div className={style.SessaoTextoNossaMarca}>
                        <div className={style.AreaTextoNossaMarca}>

                            <p className={style.TituloVerdeNossaHistoria}>
                                Nossa Marca
                            </p>
                            <p className={style.Texto_NossaHistoriaMarcaFlor}>
                            Nosso nome vem da junção de duas palavras que possuem um alto significado para a marca: <span className={style.TextoRosa_NossaHistoriaMarcaFlor}>Cabelo</span> e <span className={style.TextoRosa_NossaHistoriaMarcaFlor}>Beleza</span>. Sabemos que o <span className={style.TextoRosa_NossaHistoriaMarcaFlor}>Cabelo</span> é uma das características mais marcantes de uma pessoa, principalmente para mulheres, por isso cabelo não é somente uma parte do nosso corpo, mas possui a função de falar sobre quem somos. E <span className={style.TextoRosa_NossaHistoriaMarcaFlor}>Beleza</span> por ser algo intrínseco de cada mulher. Por isso nosso objetivo é ressaltar ainda mais a <span className={style.TextoRosa_NossaHistoriaMarcaFlor}>Beleza</span> de cada mulher.
                            </p>
                        </div>
                    </div>

                    <div className={style.SessaoImagemNossaMarcaResponsiva}>
                        <div className={style.AreaImagemMarcaResponsiva}></div>
                    </div>

                </div>

                {/* Sessão Flor de Lótus */}
                <div className={style.SessaoNossaHistoria}>
                    <div className={style.SessaoTextoNossaHistoria}>
                        <div className={style.AreaTextoNossaHistoria}>

                            <p className={style.TituloRosa_NossaHistoriaMarcaFlor}>
                                Flor de Lótus
                            </p>
                            <p className={style.Texto_NossaHistoriaMarcaFlor}>
                            Para nosso logo escolhemos a flor de <span className={style.TextoRosa_NossaHistoriaMarcaFlor}>Lótus</span>. Ela é um tipo de lírio d'água, cujas raízes estão firmadas na lama e no lodo de lagoas e lagos. Durante a noite suas pétalas são submersas nas águas, porém ao decorrer do dia ela floresce sobre a água. Devido a sua natureza alguns símbolos são atrelados a ela e o principal, e motivo para termos a escolhido, é especialmente nesta capacidade de <span className={style.TextoRosa_NossaHistoriaMarcaFlor}>enfrentar a escuridão</span> e <span className={style.TextoVerde_NossaHistoriaMarcaFlor}>florescer</span>  tão limpa, tão cheia de <span className={style.TextoRosa_NossaHistoriaMarcaFlor}>beleza</span> e delicadeza.                           
                                                 
                            </p>
                        </div>
                    </div>

                    <div className={style.SessaoImagemNossaHistoriaMarcaFlor}>
                        <div className={style.AreaImagemFlorLotus}></div>
                    </div>
                </div>




            </section>
        
        </>
    );
}

export default HistoriaMarcaFlor;
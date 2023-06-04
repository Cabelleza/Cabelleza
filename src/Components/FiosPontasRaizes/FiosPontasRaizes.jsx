import style from './FiosPontasRaizes.module.css';

function FiosPontasRaizes() {
    return (
        <>
            <section className={style.SectionFiosPontasRaizes}>
                <div className={style.SessaoTextosFiosPontasRaizes}>
                    {/* Texto Nossos Fios */}
                    <div className={style.AreaTextoFiosPontasRaizes}>
                        <div className={style.TituloFiosPontasRaizes}>Nossos fios</div>
                        <div className={style.TextoFiosPontasRaizes}>
                            <br></br>
                            Em conjunto a salões de beleza, <span className={style.TextoRosa_NossosFios}>desabrochar</span> a autoestima de pacientes que estão passando pelo tratamento do câncer e sofrem com a perda capilar.
                        </div>
                    </div>
                    
                    {/* Texto Nossas Pontas */}
                    <div className={style.AreaTextoFiosPontasRaizes}>
                        <div className={style.TituloFiosPontasRaizes}>Nossas pontas</div>
                        <div className={style.TextoFiosPontasRaizes}>
                            <br></br>
                            Ser referência no incentivo à doação de cabelos junto a salões de beleza, tornando-a uma questão de maior visibilidade no atendimento a todos os públicos que sofrem com a perda capilar.
                        </div>
                    </div>
                    
                    {/* Texto Nossas Raízes */}
                    <div className={style.AreaTextoFiosPontasRaizes}>
                        <div className={style.TituloFiosPontasRaizes}>Nossas raízes</div>
                        <div className={style.TextoFiosPontasRaizes}>
                            <br></br>
                            <span className={style.TextoVerde_NossosFios}>Amor- </span>base para nossas ações.<br></br>
                            <span className={style.TextoVerde_NossosFios}>Cuidado- </span>com nosso público.<br></br>
                            <span className={style.TextoVerde_NossosFios}>Empatia- </span>para entender e ajudar quem mais precisa.<br></br>
                            <span className={style.TextoVerde_NossosFios}>Transparência- </span>em todas relações.
                        </div>
                    </div>

                </div>
            </section>
        
        </>
    );
}

export default FiosPontasRaizes;
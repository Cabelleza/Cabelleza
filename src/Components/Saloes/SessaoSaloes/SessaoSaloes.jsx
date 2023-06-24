import style from './SessaoSaloes.module.css';

function SessaoSaloes() {
    return (
        <div className={style.SessaoSaloes}>
            <div className={style.SessaoTituloSaloes}>
                <div className={style.ImagemDetalheSuperiorEsquerdo}>
                <div className={style.AreaTituloSessaoSaloes}>
                    <h1 className={style.TituloSessaoSaloes}>Salões que devolvem sorrisos</h1>
                </div>
                </div>
            </div>
            
            <div className={style.AreaCardsAside}>
                <div className={style.AreaCardsSaloes}>
                    <div className={style.AreaTresCards}>
                        <div className={style.CardSaloes}></div>
                        <div className={style.CardSaloes}></div>
                        <div className={style.CardSaloes}></div>
                    </div>
                    <div className={style.AreaTresCards}>
                        <div className={style.CardSaloes}></div>
                        <div className={style.CardSaloes}></div>
                        <div className={style.CardSaloes}></div>
                    </div>
                    <div className={style.AreaTresCards}>
                        <div className={style.CardSaloes}></div>
                        <div className={style.CardSaloes}></div>
                        <div className={style.CardSaloes}></div>
                    </div>
                    <div className={style.AreaTresCards}>
                        <div className={style.CardSaloes}></div>
                        <div className={style.CardSaloes}></div>
                        <div className={style.CardSaloes}></div>
                    </div>
                </div>
                
                <aside className={style.AreaAsideSaloes}>
                    <div className={style.AsidePropaganda1}></div>
                    <div className={style.AsidePropaganda2}></div>
                </aside>
            </div>

        </div>
    );
}

export default SessaoSaloes;
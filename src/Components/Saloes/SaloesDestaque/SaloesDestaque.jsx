import style from './SaloesDestaque.module.css';

function SaloesDestaque() {
    return (
        <div className={style.SessaoSaloesDestaque}>
           <div className={style.areaTextoSaloesDestaque}>
                <h1 className={style.TituloSaloesDestaque}>Recomendados para você</h1>
           </div>
           <div className={style.SessaoCardsSalaoesDestaque}>
                <div className={style.areaCardsSaloesDestaque}>
                    <div className={style.cardSalaoDestaque}></div>
                    <div className={style.cardSalaoDestaque}></div>
                    <div className={style.cardSalaoDestaque}></div>
                    <div className={style.cardSalaoDestaque}></div>
                </div>
                
           </div>

           <div className={style.imagemDetalhesDireito}></div>
        </div>
    );
}

export default SaloesDestaque;
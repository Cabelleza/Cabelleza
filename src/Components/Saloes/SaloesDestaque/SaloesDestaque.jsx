import style from './SaloesDestaque.module.css';
import ModalTeste from '../Modal/ModalTeste';
import ImageSalao from '../../../imagens/SalaoComSelo.svg';

function SaloesDestaque() {
    return (
        <div className={style.SessaoSaloesDestaque}>
            <div className={style.ImagemDetalheSuperiorEsquerdo}></div>
            <div className={style.BodySaloesDestaque}>
                <div className={style.areaTextoSaloesDestaque}>
                    <h1 className={style.TituloSaloesDestaque}>Recomendamos para você</h1>
                </div>
                <div className={style.SessaoCardsSalaoesDestaque}>
                    <div className={style.AreaQuatroCards}>
                        <ModalTeste imgCard={ImageSalao} NomeSalao="Laces" EndSalao="R. Amauri, 282, Itaim Bibi" ModalTitle="Laces" ImageSalaoModal={ImageSalao} TelSalao="11 97552-2252"/>
                        <ModalTeste imgCard={ImageSalao} NomeSalao="Laces" EndSalao="R. Amauri, 282, Itaim Bibi" ModalTitle="Laces" ImageSalaoModal={ImageSalao} TelSalao="11 97552-2252"/>
                        <ModalTeste imgCard={ImageSalao} NomeSalao="Laces" EndSalao="R. Amauri, 282, Itaim Bibi" ModalTitle="Laces" ImageSalaoModal={ImageSalao} TelSalao="11 97552-2252"/>
                        <ModalTeste imgCard={ImageSalao} NomeSalao="Laces" EndSalao="R. Amauri, 282, Itaim Bibi" ModalTitle="Laces" ImageSalaoModal={ImageSalao} TelSalao="11 97552-2252"/>
                    </div>
                        
                </div>
            </div>
           

          
        </div>
    );
}

export default SaloesDestaque;
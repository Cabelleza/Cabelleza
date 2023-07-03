import style from './SaloesDestaque.module.css';
import ModalTeste from '../Modal/ModalTeste';
import ImageSalaoEncanto from '../../../imagens/salao1.svg';
import ImgCabeloEstilo from '../../../imagens/salao2.svg';
import ImgCabeloDivino from '../../../imagens/salao3.svg';
import ImgEstudioElegancia from '../../../imagens/salao4.svg';

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
                        <ModalTeste imgCard={ImageSalaoEncanto} NomeSalao="Salão Encanto" EndSalao="Rua Augusta, 123 - Consolação" ModalTitle="Salão Encanto" ImageSalaoModal={ImageSalaoEncanto} TelSalao="(11) 91234-5678" />

                        <ModalTeste imgCard={ImgCabeloEstilo} NomeSalao="Cabelo e Estilo" EndSalao="Rua Oscar Freire, 456 - Jd Paulista" ModalTitle="Cabelo e Estilo" ImageSalaoModal={ImgCabeloEstilo} TelSalao="(11) 92345-6789" />

                        <ModalTeste imgCard={ImgCabeloDivino} NomeSalao="Salão Divino" EndSalao="Rua da Mooca, 789 - Mooca" ModalTitle="Salão Divino" ImageSalaoModal={ImgCabeloDivino} TelSalao="(11) 93456-7890" />

                        <ModalTeste imgCard={ImgEstudioElegancia} NomeSalao="Estúdio Elegância" EndSalao="Rua Capote Valente, 321 - Pinheiros" ModalTitle="Estúdio Elegância" ImageSalaoModal={ImgEstudioElegancia} TelSalao=" (11) 94567-8901" />
                    </div>

                </div>
            </div>



        </div>
    );
}

export default SaloesDestaque;
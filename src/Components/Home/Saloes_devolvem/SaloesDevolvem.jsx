import style from './SaloesDevolvem.module.css';
import ModalTeste from '../../Saloes/Modal/ModalTeste';
import ImageSalaoEncanto from '../../../imagens/salao1.svg';
import ImgCabeloEstilo from '../../../imagens/salao2.svg';
import ImgCabeloDivino from '../../../imagens/salao3.svg';
import ImgEstudioElegancia from '../../../imagens/salao4.svg';

function SaloesDevolvem() {

    return (
        <>
        <section className={style.sectionSaloesDevolvem}>
            <h1 className={style.h1SaloesDevolvem}>Salões que devolvem sorrisos!</h1>
            <div className={style.saloesContainer}>
                <div className={style.divCards}>
                    <ModalTeste imgCard={ImageSalaoEncanto} NomeSalao="Salão Encanto" EndSalao="Rua Augusta, 123 - Consolação" ModalTitle="Salão Encanto" ImageSalaoModal={ImageSalaoEncanto} TelSalao="(11) 91234-5678"/>    

                    <ModalTeste imgCard={ImgCabeloEstilo} NomeSalao="Cabelo e Estilo" EndSalao="Rua Oscar Freire, 456 - Jd Paulista" ModalTitle="Cabelo e Estilo" ImageSalaoModal={ImgCabeloEstilo} TelSalao="(11) 92345-6789"/>

                    <ModalTeste imgCard={ImgCabeloDivino} NomeSalao="Salão Divino" EndSalao="Rua da Mooca, 789 - Mooca" ModalTitle="Salão Divino" ImageSalaoModal={ImgCabeloDivino} TelSalao="(11) 93456-7890"/>

                    <ModalTeste imgCard={ImgEstudioElegancia} NomeSalao="Estúdio Elegância" EndSalao="Rua Capote Valente, 321 - Pinheiros" ModalTitle="Estúdio Elegância" ImageSalaoModal={ImgEstudioElegancia} TelSalao=" (11) 94567-8901"/>
                </div>
            </div>
        </section>
        </>
    );
}

export default SaloesDevolvem;
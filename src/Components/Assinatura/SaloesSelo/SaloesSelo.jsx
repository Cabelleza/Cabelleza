import style from './SaloesSelo.module.css';
import ModalTeste from '../../Saloes/Modal/ModalTeste'
import ImgCentroBeleza from '../../../imagens/salao1.svg';
import ImageSalaoEncanto from '../../../imagens/salao3.svg';
import ImgGlam from '../../../imagens/salao2.svg';


function SaloesSelo() {
    return(
        <>
            <section className={style.saloesSelo}>
                <h2>Impulsione o seu salão e faça parte do nosso propósito</h2>
                <div className={style.containerSaloesSelo}>
                    <div className={style.salaoSelo}>
                        <ModalTeste imgCard={ImgCentroBeleza} NomeSalao="Centro de Beleza" EndSalao="Rua Augusta, 321 - Consolação" ModalTitle="Centro de Beleza" ImageSalaoModal={ImgCentroBeleza} TelSalao="(11) 97890-1234"/>
                    </div>

                    <div className={style.salaoSelo}>
                        <ModalTeste imgCard={ImageSalaoEncanto} NomeSalao="Salão Encanto" EndSalao="Rua Augusta, 123 - Consolação" ModalTitle="Salão Encanto" ImageSalaoModal={ImageSalaoEncanto} TelSalao="(11) 91234-5678"/>
                    </div>

                    <div className={style.salaoSelo}>
                        <ModalTeste imgCard={ImgGlam} NomeSalao="Estúdio Glam" EndSalao="Av. Higienópolis, 789 - Higienópolis" ModalTitle="Estúdio Glam" ImageSalaoModal={ImgGlam} TelSalao=" (11) 90123-4567"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SaloesSelo;
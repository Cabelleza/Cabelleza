import style from './SessaoSaloes.module.css';
import ModalTeste from '../Modal/ModalTeste';
import ImageSalaoEncanto from '../../../imagens/salao1.svg';
import ImgCabeloEstilo from '../../../imagens/salao2.svg';
import ImgCabeloDivino from '../../../imagens/salao3.svg';
import ImgEstudioElegancia from '../../../imagens/salao4.svg';
import ImgEstiloGraca from '../../../imagens/salao5.svg';
import ImgBellaDiva from '../../../imagens/salao6.svg';
import ImgCentroBeleza from '../../../imagens/salao7.svg';
import ImgRefugioBeleza from '../../../imagens/salao8.svg';
import ImgGlam from '../../../imagens/salao9.svg';
import ImgSegredos from '../../../imagens/salao10.svg';
import ImgCharme from '../../../imagens/salao12.svg';
import ImgBellaHair from '../../../imagens/salao13.svg';


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
                        <ModalTeste imgCard={ImageSalaoEncanto} NomeSalao="Salão Encanto" EndSalao="Rua Augusta, 123 - Consolação" ModalTitle="Salão Encanto" ImageSalaoModal={ImageSalaoEncanto} TelSalao="(11) 91234-5678"/>

                        <ModalTeste imgCard={ImgCabeloEstilo} NomeSalao="Cabelo e Estilo" EndSalao="Rua Oscar Freire, 456 - Jd Paulista" ModalTitle="Cabelo e Estilo" ImageSalaoModal={ImgCabeloEstilo} TelSalao="(11) 92345-6789"/>

                        <ModalTeste imgCard={ImgCabeloDivino} NomeSalao="Salão Divino" EndSalao="Rua da Mooca, 789 - Mooca" ModalTitle="Salão Divino" ImageSalaoModal={ImgCabeloDivino} TelSalao="(11) 93456-7890"/>
                    </div>

                    <div className={style.AreaTresCards}>
                        <ModalTeste imgCard={ImgEstudioElegancia} NomeSalao="Estúdio Elegância" EndSalao="Rua Capote Valente, 321 - Pinheiros" ModalTitle="Estúdio Elegância" ImageSalaoModal={ImgEstudioElegancia} TelSalao=" (11) 94567-8901"/>
                        <ModalTeste imgCard={ImgEstiloGraca} NomeSalao="Estilo & Graça" EndSalao="Av. Faria Lima, 987 - Itaim Bibi" ModalTitle="Estilo & Graça" ImageSalaoModal={ImgEstiloGraca} TelSalao="(11) 95678-9012"/>
                        <ModalTeste imgCard={ImgBellaDiva} NomeSalao="Bella Diva" EndSalao="R. Teodoro Sampaio, 654 - Pinheiros" ModalTitle="Bella Diva" ImageSalaoModal={ImgBellaDiva} TelSalao="(11) 96789-0123"/>
                    </div>

                    <div className={style.AreaTresCards}>
                        <ModalTeste imgCard={ImgCentroBeleza} NomeSalao="Centro de Beleza" EndSalao="Rua Augusta, 321 - Consolação" ModalTitle="Centro de Beleza" ImageSalaoModal={ImgCentroBeleza} TelSalao="(11) 97890-1234"/>
                        <ModalTeste imgCard={ImgRefugioBeleza} NomeSalao="Refúgio da Beleza" EndSalao="Rua José Paulino, 456 - Bom Retiro" ModalTitle="Refúgio da Beleza" ImageSalaoModal={ImgRefugioBeleza} TelSalao=" (11) 99012-3456"/>
                        <ModalTeste imgCard={ImgGlam} NomeSalao="Estúdio Glam" EndSalao="Av. Higienópolis, 789 - Higienópolis" ModalTitle="Estúdio Glam" ImageSalaoModal={ImgGlam} TelSalao=" (11) 90123-4567"/>
                    
                    </div>

                    <div className={style.AreaTresCards}>
                        <ModalTeste imgCard={ImgSegredos} NomeSalao="Segredos beauty" EndSalao="R. da Consolação, 987 - Consolação" ModalTitle="Segredos beauty" ImageSalaoModal={ImgSegredos} TelSalao="(11) 92345-6789"/>
                        <ModalTeste imgCard={ImgCharme} NomeSalao="Salão Charme" EndSalao="R.Oscar Freire, 654 - Cerqueira César" ModalTitle="Salão Charme" ImageSalaoModal={ImgCharme} TelSalao="(11) 93456-7890"/>
                        <ModalTeste imgCard={ImgBellaHair} NomeSalao="Bella Hair Studio" EndSalao="Av. Nove de Julho, 321 - Jd Paulista" ModalTitle="Bella Hair Studio" ImageSalaoModal={ImgBellaHair} TelSalao="(11) 98901-2345"/>
                    </div>

                    <div className={style.AreaQuatroCards}>
                        <ModalTeste imgCard={ImageSalaoEncanto} NomeSalao="Salão Encanto" EndSalao="Rua Augusta, 123 - Consolação" ModalTitle="Salão Encanto" ImageSalaoModal={ImageSalaoEncanto} TelSalao="(11) 91234-5678"/>    

                        <ModalTeste imgCard={ImgCabeloEstilo} NomeSalao="Cabelo e Estilo" EndSalao="Rua Oscar Freire, 456 - Jd Paulista" ModalTitle="Cabelo e Estilo" ImageSalaoModal={ImgCabeloEstilo} TelSalao="(11) 92345-6789"/>

                        <ModalTeste imgCard={ImgCabeloDivino} NomeSalao="Salão Divino" EndSalao="Rua da Mooca, 789 - Mooca" ModalTitle="Salão Divino" ImageSalaoModal={ImgCabeloDivino} TelSalao="(11) 93456-7890"/>

                        <ModalTeste imgCard={ImgEstudioElegancia} NomeSalao="Estúdio Elegância" EndSalao="Rua Capote Valente, 321 - Pinheiros" ModalTitle="Estúdio Elegância" ImageSalaoModal={ImgEstudioElegancia} TelSalao=" (11) 94567-8901"/>
                    </div>

                    <div className={style.AreaQuatroCards}>
                        <ModalTeste imgCard={ImgEstiloGraca} NomeSalao="Estilo & Graça" EndSalao="Av. Faria Lima, 987 - Itaim Bibi" ModalTitle="Estilo & Graça" ImageSalaoModal={ImgEstiloGraca} TelSalao="(11) 95678-9012"/>
                        <ModalTeste imgCard={ImgBellaDiva} NomeSalao="Bella Diva" EndSalao="R Teodoro Sampaio, 654 - Pinheiros" ModalTitle="Bella Diva" ImageSalaoModal={ImgBellaDiva} TelSalao="(11) 96789-0123"/>
                        <ModalTeste imgCard={ImgCentroBeleza} NomeSalao="Centro de Beleza" EndSalao="Rua Augusta, 321 - Consolação" ModalTitle="Centro de Beleza" ImageSalaoModal={ImgCentroBeleza} TelSalao="(11) 97890-1234"/>
                        <ModalTeste imgCard={ImgRefugioBeleza} NomeSalao="Refúgio da Beleza" EndSalao="Rua José Paulino, 456 - Bom Retiro" ModalTitle="Refúgio da Beleza" ImageSalaoModal={ImgRefugioBeleza} TelSalao=" (11) 99012-3456"/>
                    </div>

                    <div className={style.AreaQuatroCards}>
                        <ModalTeste imgCard={ImgCharme} NomeSalao="Estúdio Glam" EndSalao="Av. Higienópolis, 789 - Higienópolis" ModalTitle="Estúdio Glam" ImageSalaoModal={ImgCharme} TelSalao=" (11) 90123-4567"/>
                        <ModalTeste imgCard={ImgSegredos} NomeSalao="Segredos beauty" EndSalao="R. da Consolação, 987 - Consolação" ModalTitle="Segredos beauty" ImageSalaoModal={ImgSegredos} TelSalao="(11) 92345-6789"/>
                        <ModalTeste imgCard={ImgCharme} NomeSalao="Salão Charme" EndSalao="R Oscar Freire, 654 - Cerqueira César" ModalTitle="Salão Charme" ImageSalaoModal={ImgCharme} TelSalao="(11) 93456-7890"/>
                        <ModalTeste imgCard={ImgBellaHair} NomeSalao="Bella Hair Studio" EndSalao="Av. Nove de Julho, 321 - Jd Paulista" ModalTitle="Bella Hair Studio" ImageSalaoModal={ImgBellaHair} TelSalao="(11) 98901-2345"/>
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
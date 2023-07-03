import React, { useState, useEffect } from 'react';
import style from './Parceiros.module.css';
import linhaCompleta from '../../../imagens/meia-linha.png';
import parceiros1 from '../../../imagens/parceiros1.png';
import parceiros2 from '../../../imagens/parceiros2.png';
import parceiros3 from '../../../imagens/parceiros3.png';
import parceiros4 from '../../../imagens/parceiros4.png';
import parceiros5 from '../../../imagens/parceiros5.png';
import parceiros6 from '../../../imagens/parceira-MariaGoreti.png';

export default function Parceiros() {
    const [modalAberto, setModalAberto] = useState(false);
    const [imgParceiro, setImgParceiro] = useState();
    const [nomeProprietario, setNomeProprietario] = useState('');
    const [nomeSalao, setSalao] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [experiencia, setExperiencia] = useState('');

    useEffect(() => {
        document.body.style.overflow = modalAberto ? 'hidden' : 'auto';
    }, [modalAberto]);

    const abrirModal = (image, nomeProprietario, nomeSalao, endereco, telefone, experiencia) => {
        setImgParceiro(image);
        setNomeProprietario(nomeProprietario);
        setSalao(nomeSalao);
        setEndereco(endereco);
        setTelefone(telefone);
        setExperiencia(experiencia);
        setModalAberto(true);
    };

    const fecharModal = () => {
        setImgParceiro();
        setNomeProprietario('');
        setSalao('');
        setEndereco('');
        setTelefone('');
        setExperiencia('');
        setModalAberto(false);
    };

    return (
        <div id='Parceiros'>
            <section className={style.parceirosSection}>
                <div className={style.titleParceiros}>
                    <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
                    <h1 className={style.relatos}>Parceiros</h1>
                    <img src={linhaCompleta} alt="" className={style.linhaCompleta} />
                </div>

                <div className={style.containerBox}>
                <img src={parceiros1} alt="Parceiro 1" onClick={() => abrirModal(parceiros1, 'Kelly Santos', "Beauty Angel's", "Rua Tito Temporim, 1422", "(11) 96358-7870", "7 anos de experiência em cabelos afro.")} />
                    <img src={parceiros2} alt="Parceiro 2" onClick={() => abrirModal(parceiros2, 'Rodrigo Vieira', "Saint's Rô", "Rua Amazonas, 427", "(11) 98623-9758", "10 anos de experiência em cortes masculinos.")} />
                    <img src={parceiros3} alt="Parceiro 3" onClick={() => abrirModal(parceiros3, 'Alberto Dantas', "Lounge Fashion", "Avenida Rio de Janeiro, 654", "(11) 96358-7870", "8 anos de experiência em penteados de noivas.")} />
                    <img src={parceiros6} alt="Parceiro 4" onClick={() => abrirModal(parceiros6, 'Maria Goreti', "Alra Hair Studio", "Rua Luiz Batista da Silva, 40", "(11) 96416-0080", "20 anos de experiência em cabelos femininos.")} />
                    <img src={parceiros4} alt="Parceiro 5" onClick={() => abrirModal(parceiros4, 'Graça Ramos', "Grace's Hair", "Avenida Pires do Rio", "(11) 2841-5681", "10 anos de experiência em cortes variados.")} />
                    <img src={parceiros5} alt="Parceiro 6" className={style.lastChild} onClick={() => abrirModal(parceiros5, 'Quézia Amaro', "Studio Glamour", "Rua Jardins, 1599", "(11) 98573-4391", "3 anos de experiência em tranças afro.")} />
                </div>
            </section>

            {modalAberto && (
                <div className={style.modalFundo} onClick={fecharModal}>
                    <div className={style.modalContainer}>
                        <img src={imgParceiro} alt="Imagem do Parceiro" />
                        <div>
                            <p>
                                <h3>{nomeProprietario}</h3> <h5>{nomeSalao}</h5> 
                                Endereço: {endereco} <br />
                                Telefone: {telefone} <br />
                                {nomeProprietario} possui {experiencia}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

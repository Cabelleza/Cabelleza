// import style from './Modal.module.css';
// import Modal from 'react-modal';
// import React, { useState } from "react";

// Modal.setAppElement('#root');

// function ModalSalao() {
//     // Hook que demonstra se a modal está aberta ou não
//     const [modalIsOpen, setIsOpen] = React.useState(false);

//     // Função que abre a modal
//     function abrirModal() {
//         setIsOpen(true);
//     }

//     // Função que fecha a modal
//     function fecharModal() {
//         setIsOpen(false);
//     }

//     return (
//         <div>
//         <button onClick={abrirModal} className={style.CardModal}>Abrir modal</button>
//         <Modal
//             backdrop="static"
//             keyboard={false}
    
//           isOpen={modalIsOpen}
//           onRequestClose={fecharModal}
//         //   contentLabel="Modal de exemplo"
//         >
//           <h2>Olá</h2>
//           <button onClick={fecharModal}>Fechar</button>
//           <div>Eu sou uma modal</div>
//         </Modal>
//       </div>
//     );
// }

// export default ModalSalao;
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from './ModalTeste.module.css';

function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button 
      variant="primary" 
      onClick={handleShow}
      className={style.EspacamentoButton}
      style={
        {width: "270px",
        height: "350px",
        backgroundImage: `url(${props.imgCard})`,
        backgroundSize: "cover",
        borderRadius: "15px",
        border:"solid 1px",
        alignItems:"end",
        padding: "0",
        margin: "20px"}}
      >
        <div className={style.AreaNomeSalao}>
            <p className={style.textNomeSalao}>{props.NomeSalao}</p>
            <p className={style.textEnderecoSaloes}> {props.EndSalao}</p>
        </div>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        // keyboard={false}
        centered
        style={
            {background: "rgba(250, 250, 186, 0.40)",
            width: "100%",
            height: "100%",}}
        size='lg'
        height='800px'
      >
        <Modal.Header
        closeButton
        className={style.customHeader}
        style={{
            height:"109px",
            width:"100%"
          }}
        >
          <Modal.Title className={style.customTitle}>
            {props.ModalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={style.BodyModal}>
            <div className={style.AreaImagem}>
              <img src={props.ImageSalaoModal} alt="" />
            </div>
            <div className={style.AreaText}>
              <div className={style.ContainerText}>
                <div className={style.AreaTextEndereco}>
                    <p className={style.TextEndereco}><span className={style.TitleTextModal}>Endereço:<br></br></span> {props.EndSalao}</p>
                  </div>
                  <div className={style.AreaTextTelefone}>
                    <p className={style.TitleTextModal}>Telefone:</p>
                    <div className={style.AreaIconWhatsApp}></div>
                    <div className={style.EspacoTextoTelefone}>
                      <p className={style.TextTelefone}> {props.TelSalao}</p>

                    </div>
                  </div>
              </div>
                
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
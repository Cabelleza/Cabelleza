import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../imagens/logo.svg";
import style from "./Cadastro.module.css";
import Planos from "../../Components/Cadastro/Planos";
import Dados from "../../Components/Cadastro/Dados";
import { BsArrowLeft } from "react-icons/bs";

function Cadastro() {
  const [currentStep, setCurrentStep] = useState(0);
  const formComponents = [
    <Planos />,
    <Dados />,
   
  ];
  const currentComponent = formComponents[currentStep];

  const changeStep = (step) => {
    setCurrentStep(step);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep < formComponents.length - 1) {
      // Adicione aqui a validação do componente atual antes de avançar para o próximo passo
      if (validateCurrentComponent()) {
        changeStep(currentStep + 1);
      } else {
        console.log("Preencha corretamente os campos antes de continuar.");
      }
    } else {
      // Realizar alguma ação final, como enviar os dados do formulário para o banco de dados.
      console.log("Enviar dados para o banco de dados.");
    }
  };

  const handleBack = () => {
    changeStep(currentStep - 1);
  };

  // Função de validação para o componente atual
  const validateCurrentComponent = () => {
    // Implemente aqui a lógica de validação para o componente atual
    // Retorne true se a validação passar, caso contrário, retorne false
    return true;
  };

  return (
    <>
      <div className={style.fundocadastro}>
        <div className={style.header}>
          <Link to="/Login">
            <button className={style.botaovoltar}>
              <BsArrowLeft />
            </button>
          </Link>
          <div className={style.boxlogo}>
            <img className={style.logo} src={Logo} alt="" />
          </div>
        </div>
        <div className={style.form_container}>
          <form onSubmit={handleSubmit}>
            
            <div className={style.inputs_container}>{currentComponent}</div>
            <div className={style.action}>
              {currentStep > 0 && ( 
                <button className={style.btnvolta} type="button" onClick={handleBack} >
                  Voltar
                </button>
              )}
              {currentStep < formComponents.length - 1 && currentStep > 0 && (
                <button className={style.btncontinuar} type="submit">Continuar</button>
              )}
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cadastro;

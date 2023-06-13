import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../imagens/logo.svg";
import style from "./Cadastro.module.css";
import Planos from "../../Components/Cadastro/Planos";
import Dados from "../../Components/Cadastro/Dados";
import Validacao from "../../Components/Cadastro/Validação";
import Endereco from "../../Components/Cadastro/Endereco";
import Pagamento from "../../Components/Cadastro/Pagamento";

function Cadastro() {
  const [currentStep, setCurrentStep] = useState(0);
  const formComponents = [
    <Planos />,
    <Dados />,
    <Validacao />,
    <Endereco />,
    <Pagamento />,
  ];
  const currentComponent = formComponents[currentStep];

  const changeStep = (step) => {
    setCurrentStep(step);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep < formComponents.length - 1) {
      changeStep(currentStep + 1);
    } else {
      // Aqui você pode realizar alguma ação final, como enviar os dados do formulário.
      console.log("Formulário enviado!");
    }
  };

  const handleBack = () => {
    changeStep(currentStep - 1);
  };

  return (
    <>
      <div className={style.fundocadastro}>
        <div className={style.header}>
          <button>seta</button>
          <div className={style.boxlogo}>
            <img className={style.logo} src={Logo} alt="" />
          </div>
        </div>
        <div className={style.form_container}>
          <p>etapas</p>
          <form onSubmit={handleSubmit}>
            <div className={style.inputs_container}>{currentComponent}</div>
            <div className={style.action}>
              {currentStep > 0 && (
                <button type="button" onClick={handleBack}>
                  Voltar
                </button>
              )}
              {currentStep < formComponents.length - 1 ? (
                <button type="submit">Continuar</button>
              ) : (
                <button type="submit">Enviar</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
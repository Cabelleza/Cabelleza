// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../../imagens/logo.svg";
// import style from "./CadastroSalao.module.css";
// // import Planos from "../../Components/Cadastro/Planos";
// // import Dados from "../../Components/Cadastro/Dados";
// import { BsArrowLeft } from "react-icons/bs";

// import axios from "axios";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";


// // import "./App.css";

// const validationPost = yup.object().shape({
//   nomeProprietario: yup.string().required(),
//   email: yup.string().required(),
//   senha: yup.string().required(),
// });



// function Cadastro() {
//   const {
//     register,
//     handleSubmit,
//   } = useForm({
//     resolver: yupResolver(validationPost),
//   });

//   const addPost = (data) =>
//     axios
//       .post("http://localhost:8080/usuario", data)
//       .then(() => {
//         console.log("DEU CERTO!");
//       })
//       .catch(() => {
//         console.log("DEU ERRADO!");
//       });

//    const [currentStep, setCurrentStep] = useState(0);
//    const formComponents = [
//     //  <Planos />,
//     //  <Dados />,
  
//    ];
//    const currentComponent = formComponents[currentStep];

//   const changeStep = (step) => {
//      setCurrentStep(step);
//    };

//   const handleSubmitValidation = (e) => {
//     e.preventDefault();
//     if (currentStep < formComponents.length - 1) {
//       // Adicione aqui a validação do componente atual antes de avançar para o próximo passo
//       if (validateCurrentComponent()) {
//         changeStep(currentStep + 1);
//       } else {
//         console.log("Preencha corretamente os campos antes de continuar.");
//       }
//     } else {
//       // Realizar alguma ação final, como enviar os dados do formulário para o banco de dados.
//       console.log("Enviar dados para o banco de dados.");
//     }
//   };

//   const handleBack = () => {
//     changeStep(currentStep - 1);
//   };

//   // Função de validação para o componente atual
//   const validateCurrentComponent = () => {
//     // Implemente aqui a lógica de validação para o componente atual
//     // Retorne true se a validação passar, caso contrário, retorne false
//     return true;
//   };

//   return (
//     <>
//       <div className={style.fundocadastro}>
//         <div className={style.header}>
//           <Link to="/Login">
//             <button className={style.botaovoltar}>
//               <BsArrowLeft />
//             </button>
//           </Link>
//           <div className={style.boxlogo}>
//             <img className={style.logo} src={Logo} alt="" />
//           </div>
//         </div>
//         <div className={style.form_container}>
//           <form onSubmit={handleSubmitValidation}>
            
//             <div className={style.inputs_container}>{currentComponent}</div>
//             <div className={style.action}>
//               {currentStep > 0 && ( 
//                 <button className={style.btnvolta} type="button" onClick={handleBack} >
//                   Voltar
//                 </button>
//               )}
//               {currentStep < formComponents.length - 1 && currentStep > 0 && (
//                 <button className={style.btncontinuar} type="submit">Continuar</button>
//               )}
              
//             </div>
//           </form>
//           <form onSubmit={handleSubmit(addPost)}>
//               <div>
//                 <label>NOME:</label>
//                 <input
//                   type="text"
//                   name="nomeProprietario"
//                   placeholder="Ex: Pedro"
//                   {...register("nomeProprietario")}
//                 />
//               </div>

//               <div>
//                 <label>EMAIL:</label>
//                 <input
//                   type="text"
//                   name="email"
//                   placeholder="Ex: example@domain.com"
//                   {...register("email")}
//                 />
//               </div>

//               <div>
//                 <label>SENHA:</label>
//                 <input 
//                   type="text" 
//                   name="senha" 
//                   placeholder="Ex: @Aa12345"
//                   {...register("senha")}
//                   />
//               </div>

//               <div>
//                 <button className={style.finalizar} type="submit">Finalizar</button>
//               </div>
//             </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cadastro;

import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom' 
import style from "./CadastroSalao.module.css";
import { IMaskInput } from "react-imask";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const validationPost = yup.object().shape({
  nomeProprietario: yup.string().required(),
  email: yup.string().required(),
  senha: yup.string().required(),
  // nomeSalao: yup.string().required(),
  // ruaSalao: yup.string().required(),
  // numeroSalao: yup.string().required(),
});


function CadastroSalao() {

  const [image, setImage] = useState("");
  const [endImg] = useState("./ImgiconU.png");

  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validationPost),
  });

  const addPost = (data) =>
    axios
      .post("http://localhost:8080/usuario", data)
      .then(() => {
        console.log("DEU CERTO!");
        navigate('/')
      })
      .catch(() => {
        console.log("DEU ERRADO!");
      });

  return (
    // <div>
    <main className={style.Mdados}>
             <div>
               <div className={style.linhaTempo}>
                 <span className={style.active}>Planos</span>
                 <hr />
                 <span className={style.active}>Dados</span>
               </div>
             </div>
            <section className={style.boxCaixaDados}>
              <div className={style.caixaDados}>
                
                  
                  <form onSubmit={handleSubmit(addPost)}>
                    <h5 className={style.TpessoaF}>Dados cadastrais</h5>
                    <div className={style.PrimeiroInputs}>
                      <div className={style.divcpf}>
                        <div className={style.nomef}>
                          <label className={style.label1} htmlFor="nomefantasia">
                            Nome fantasia *
                          </label>
                          <input
                            type="text"
                            name="nomeSalao"
                            placeholder="Escreva aqui..."
                            {...register("nomeSalao")}
                          />
                        </div>

                        <div className={style.cnpjdiv}>
                          <label htmlFor="cnpj">CNPJ *</label>
                          <input
                            mask="00.000.000/0000-00"
                            placeholder="Digite o seu CNPJ"
                            // required
                            // Precisa criar a entidade CNPJ no Banco 
                            // name=""
                          />
                        </div>

                        <div className={style.tele}>
                         {/* Precisa criar a entidade telefone no Banco  */}
                          <label htmlFor="telefone">Telefone Salão*</label>
                          <IMaskInput
                            mask="(00) 00000-0000"
                            placeholder="Digite o Número"
                          />
                        </div>
                      </div>
                    </div>

                    <div className={style.SegundosInpust}>
                      <div className={style.divnomecrontato}>
                        <label htmlFor="name">Nome contratante *</label>
                        <input
                        type="text"
                        name="nomeProprietario"
                        placeholder="Escreva aqui..."
                        {...register("nomeProprietario")}
                        />
                      </div>

                      <div className={style.divemail}>
                        <label htmlFor="e-mail">E-mail salão*</label>
                        <input
                          type="text"
                          name="email"
                          placeholder="Ex: example@domain.com"
                          {...register("email")}
                          />
                      </div>
                    </div>

                    <div className={style.TerceiroInpust}>
                      <div className={style.divsenha}>
                        <label htmlFor="password">Senha*</label>
                        <input
                          type="password"
                          name="senha"
                          placeholder="Escreva aqui..."
                          {...register("senha")}
                          />
                      </div>

                      <div className={style.divconfirmasenha}>
                        <label htmlFor="confirma password">Confirma senha *</label>
                        <input
                          type="password"
                          // Verificar a necessidade de criar a entidade confirmaSenha no Banco
                          // value="confirmaSenha"
                          placeholder="Escreva aqui..."
                          // {...register("confirmaSenha")}
                        />
                      </div>

                      <div className={style.AreaPlanos}>
                        <label htmlFor="plano">Plano*</label>
                        <select name="planoSalao">
                            <option value="" selected="selected" disabled >Escolha plano</option>
                            <option value="planoBronze">Bronze</option>
                            <option value="planoPrata">Prata</option>
                            <option value="planoOuro">Ouro</option>
                         </select>
                      </div>
                      
                    </div>

                    <h5 className={style.Tpessoa}>Insira a imagem do seu salão</h5>
                    <div className={style.boximgsalao}>
                      <div className={style.imgdiv}>
                        {/* <label>Imagem</label> <br /> */}
                        <input
                          type="file"
                          name="image"
                          onChange={(e) => setImage(e.target.files[0])}
                          required
                        />{" "}
                        <br /> <br />
                        {image ? (
                          <img
                            src={URL.createObjectURL(image)}
                            alt="Imagem"
                            width="150"
                            height="150"
                          />
                        ) : (
                          <img src={endImg} alt="Imagem" width="150" height="150" />
                        )}{" "}
                        <br />
                      </div>
                    </div>

                    <h5 className={style.enderecoT}>Endereço salão *</h5>
                    <div>
                      <div className={style.boxprimeiroinputendereco}>
                        <div className={style.boxcep}>
                          <label htmlFor="cep">CEP *</label>
                          <IMaskInput
                           mask="00000-000"
                          //  Verificar a necessidade de criar uma endidade CEP 
                           placeholder="Digite o CEP"
                          />
                        </div>

                        <div className={style.boxcidade}>
                          <label htmlFor="cidade">Cidade *</label>
                          <input 
                            type="text" 
                            //  Verificar a necessidade de criar uma endidade cidade 
                            // name="cidade"
                            placeholder="Escreva aqui..."
                            // {...register("cidade")}
                          />
                        </div>

                        <div className={style.boxestado}>
                         <label htmlFor="estado">Estado*</label>
                         <select name="estado">
                            <option value="SP" selected="selected" disabled >SP</option>
                         </select>
                         {/* <IMaskInput
                            mask="***"
                            placeholder="Ex: SP"
                            //  Verificar a necessidade de criar uma endidade estado 
                            // name="estado"
                            // {...register("estado")}
                         /> */}
                       </div>

                       <div className={style.boxcheck}>
                         <p className={style.metodoT}>Metodo de pagamento</p>
                          <div className={style.divcheck}>
                            <input className={style.check1} type="checkbox" />
                            <input className={style.check2} type="checkbox" />
                          </div>
                       </div>
                      </div>
                    </div>

                    <div className={style.boxruaendereco}>
                      <div className={style.divRua}>
                        <label htmlFor="Rua">Endereço salão e para cobrança*</label>
                        <input 
                          type="text" 
                          placeholder="Ecreva aqui... " 
                          name="ruaSalao"
                          {...register("ruaSalao")}                          
                        />
                      </div>
                      
                      <div className={style.numerocasa}>
                       <label htmlFor="numero casa">Número*</label>
                       <IMaskInput
                         mask="0000*"
                         placeholder="Digite o Número"
                         name="numeroSalao"
                        {...register("numeroSalao")}                         
                       />
                     </div>

                     <div className={style.bairro}>
                       <label htmlFor="Bairro">Bairro *</label>
                       <input 
                        type="text" 
                        placeholder="Ecreva aqui... "
                       />
                     </div>
                     <div className={style.complemento}>
                       <label htmlFor="Complemento casa">Complemento *</label>
                       <input
                        type="text" 
                        placeholder="Ecreva aqui... "
                       />
                     </div>

                    </div>

                <div>
   
                <Link to='/PageConclusaoCadastro'><button className={style.finalizar} type="submit">Finalizar</button></Link> 
                
                </div>
              </form>
            </div>         
        </section>
      </main>
    
  );
}

export default CadastroSalao;

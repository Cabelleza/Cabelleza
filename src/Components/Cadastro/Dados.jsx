import style from "./Dados.module.css";
import React, { useState } from "react";
import { IMaskInput } from "react-imask";

function Dados() {
  const [cnpj, setCnpj] = useState("");
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmasenha, setConfrimaSenha] = useState("");
  const [errors, setErrors] = useState({});

  const [image, setImage] = useState("");
  const [endImg] = useState("./ImgiconU.png");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleName2Change = (event) => {
    setName2(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleConfirmarSenhaChange = (event) => {
    setConfrimaSenha(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};

    if (!cnpjIsValid(cnpj)) {
      validationErrors.cnpj = "Digite um CNPJ válido";
    }

    if (!nameIsValid(name)) {
      validationErrors.name = "Digite um nome válido";
    }

    if (!name2IsValid(name)) {
      validationErrors.name = "Digite um nome válido";
    }

    if (!emailIsValid(email)) {
      validationErrors.email = "Digite um e-mail válido";
    }

    if (!phoneIsValid(phone)) {
      validationErrors.phone = "Digite um telefone válido";
    }

    if (!senhaIsValid(senha)) {
      validationErrors.senha = "Digite uma senha válida";
    }

    if (!confirmasenhaIsValid(senha, confirmasenha)) {
      validationErrors.confirmasenha = "As senhas não coincidem";
    }

    if (Object.keys(validationErrors).length === 0) {
      console.log("Formulário válido!");
      // Lógica de envio do formulário ou navegação para a próxima etapa
    } else {
      setErrors(validationErrors);
    }
  };

  const cnpjIsValid = (cnpj) => {
    const cnpjRegex = /^\d{2}.\d{3}.\d{3}\d{4}-\d{2}$/;
    return cnpj.match(cnpjRegex);
  };

  const nameIsValid = (name) => {
    return name.trim() !== "";
  };
  const name2IsValid = (name) => {
    return name.trim() !== "";
  };

  const emailIsValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.match(emailRegex);
  };

  const phoneIsValid = (phone) => {
    const phoneRegex = /^\d{11}$/;
    return phone.match(phoneRegex);
  };

  const senhaIsValid = (senha) => {
    return senha.trim() !== "";
  };

  const confirmasenhaIsValid = (senha, confirmasenha) => {
    return senha === confirmasenha;
  };

  return (
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
          <div className={style.boxPessoaFisica}>
            <form onSubmit={handleSubmit}>
              <h5 className={style.TpessoaF}>Dados cadastrais</h5>
              <div className={style.PrimeiroInputs}>
                <div className={style.divcpf}>
                  <div className={style.nomef}>
                    <label className={style.label1} htmlFor="nomefantasia">
                      Nome fantasia *
                    </label>
                    <input
                      type="text"
                      id="fantasia"
                      value={name}
                      placeholder="Escreva aqui..."
                      onChange={handleNameChange}
                      required
                    />
                    {errors.name && (
                      <span className={style.error}>{errors.name}</span>
                    )}
                  </div>
                  <div className={style.cnpjdiv}>
                    <label htmlFor="cnpj">CNPJ *</label>
                    <IMaskInput
                      mask="00.000.000/0000-00"
                      placeholder="Digite o seu CNPJ"
                      required
                    />
                  </div>

                  <div className={style.tele}>
                    <label htmlFor="telefone">Telefone para contato *</label>
                    <IMaskInput
                      mask="(00) 00000-0000"
                      placeholder="Digite o seu Numero"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className={style.SegundosInpust}>
                <div className={style.divnomecrontato}>
                  <label htmlFor="name">Nome do contratante *</label>
                  <input
                    type="text"
                    id="name2"
                    value={name2}
                    placeholder="Escreva aqui..."
                    onChange={handleName2Change}
                    required
                  />
                  {errors.name && (
                    <span className={style.error}>{errors.name}</span>
                  )}
                </div>

                <div className={style.divemail}>
                  <label htmlFor="e-mail">E-mail do contratante *</label>
                  <input
                    type="email"
                    id="e-mail"
                    value={email}
                    placeholder="Escreva aqui..."
                    onChange={handleEmailChange}
                    required
                  />
                  {errors.email && (
                    <span className={style.error}>{errors.email}</span>
                  )}
                </div>
              </div>

              <div className={style.TerceiroInpust}>
                <div className={style.divsenha}>
                  <label htmlFor="password">Senha *</label>
                  <input
                    type="password"
                    id="senha"
                    value={senha}
                    placeholder="Escreva aqui..."
                    onChange={handleSenhaChange}
                    required
                  />
                  {errors.senha && (
                    <span className={style.error}>{errors.senha}</span>
                  )}
                </div>

                <div className={style.divconfirmasenha}>
                  <label htmlFor="confirma password">Confirma senha *</label>
                  <input
                    type="password"
                    id="confirma"
                    value={confirmasenha}
                    placeholder="Escreva aqui..."
                    onChange={handleConfirmarSenhaChange}
                    required
                  />
                  {errors.confirmasenha && (
                    <span className={style.error}>{errors.confirmasenha}</span>
                  )}
                </div>
              </div>

              <h5 className={style.Tpessoa}>Insira a imagem do seu salão</h5>
              <div className={style.boximgsalao}>
                <div className={style.imgdiv}>
                  <label>Imagem</label> <br />
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
              <h5 className={style.enderecoT}>Endereço de cobrança *</h5>
              <div>
                <div className={style.boxprimeiroinputendereco}>
                  <div className={style.boxcep}>
                    <label htmlFor="cep">CEP *</label>
                    <IMaskInput
                      mask="00000-000"
                      placeholder="Digite o seu Numero"
                      required
                    />
                  </div>

                  <div className={style.boxcidade}>
                    <label htmlFor="cidade">Cidade *</label>
                    <input type="text" placeholder="Escreva aqui..." required />
                  </div>

                  <div className={style.boxestado}>
                    <label htmlFor="estado">Estado *</label>
                    <IMaskInput
                      mask="***"
                      placeholder="Digite o seu Estado"
                      required
                    />
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
                  <label htmlFor="Rua">Endereço de cobrança *</label>
                  <input type="text" placeholder="Ecreva aqui... " required />
                </div>

                <div className={style.numerocasa}>
                  <label htmlFor="numero casa">Numero *</label>
                  <IMaskInput
                    mask="0000*"
                    placeholder="Digite o Numero"
                    required
                  />
                </div>

                <div className={style.bairro}>
                  <label htmlFor="Bairro">Bairro *</label>
                  <input type="text" placeholder="Ecreva aqui... " required />
                </div>
                <div className={style.complemento}>
                  <label htmlFor="Complemento casa">Complemento *</label>
                  <input type="text" placeholder="Ecreva aqui... " required />
                </div>
              </div>

              <button className={style.finalizar} type="submit">
                Finalizar
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dados;

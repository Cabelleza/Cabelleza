import style from './Formulario.module.css';
import { IMaskInput } from "react-imask";
import { useState } from 'react';

function FormularioTeste({eventoTeclado, cadastrar, obj}){

    const [image, setImage] = useState("");
    const [endImg] = useState("./ImgiconU.png");

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
                    
                      <form>
                        <h5 className={style.TpessoaF}>Dados cadastrais</h5>
                        <div className={style.PrimeiroInputs}>
                          <div className={style.divcpf}>
                            <div className={style.nomef}>
                            
                              <label className={style.label1} htmlFor="nomefantasia">
                                Nome do Salão *
                              </label>
                              <input
                                type="text"
                                name="nomeSalao"
                                value={obj.nomeSalao}
                                onChange={eventoTeclado}
                                placeholder="Digite aqui o nome do salão..."
                                required
                              />
                            </div>
    
                            <div className={style.cnpjdiv}>
                              <label htmlFor="cnpj">CNPJ *</label>
                              <IMaskInput
                                mask="00.000.000/0000-00"
                                placeholder="00.000.000/0000-00"
                                type="text"
                                value={obj.cnpj} 
                                name="cnpj" 
                                onChange={eventoTeclado}
                                required
                              />
                            </div>
    
                            <div className={style.tele}>
                              <label htmlFor="telefone">Telefone Salão*</label>
                              
                              <IMaskInput mask="(00) 00000-0000" type="text" value={obj.telefoneSalao} onChange={eventoTeclado} name='telefoneSalao' placeholder="Telefone salão" className='form-control'/>
                            </div>
                          </div>
                        </div>
    
                        <div className={style.SegundosInpust}>
                          <div className={style.divnomecrontato}>
                            <label htmlFor="name">Nome contratante *</label>
                            <input type="text" value={obj.proprietarioSalao} onChange={eventoTeclado} name='proprietarioSalao' placeholder="Digite o nome do contratante..." required />
                          </div>
    
                          <div className={style.divemail}>
                            <label htmlFor="e-mail">E-mail salão*</label>
                            <input
                              type="text"
                              name="email"
                              placeholder="Digite aqui seu e-mail..."
                              value={obj.email} 
                              onChange={eventoTeclado}
                              required
                              />
                          </div>
                        </div>
    
                        <div className={style.TerceiroInpust}>
                          <div className={style.divsenha}>
                            <label htmlFor="password">Senha*</label>
                            <input
                              type="password"
                              name="senha"
                              placeholder="Senha..."
                              value={obj.senha} 
                              onChange={eventoTeclado}
                              required
                              />
                          </div>
    
                          <div className={style.divconfirmasenha}>
                            <label htmlFor="confirma password">Confirma senha *</label>
                            <input
                              type="password"
                              placeholder="Confirme a senha aqui..."
                              required
                            />
                          </div>
    
                          <div className={style.AreaPlanos}>
                            <label htmlFor="plano">Plano*</label>

                            <input type="text" value={obj.seloSalao} onChange={eventoTeclado} name='seloSalao' placeholder="Digite: Ouro, Prata ou Bronze" required/>
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
                        
                          <div className={style.boxprimeiroinputendereco}>
                            <div className={style.boxcep}>
                              <label htmlFor="cep">CEP *</label>
                              <IMaskInput
                               mask="00000-000"
                               placeholder="Digite o CEP"
                               required
                              />
                            </div>
    
                            <div className={style.boxcidade}>
                              <label htmlFor="cidade">Cidade *</label>
                              <input 
                                type="text" 
                                placeholder="Escreva aqui..."
                                required
                              />
                            </div>
    
                            <div className={style.boxestado}>
                             <label htmlFor="estado">Estado*</label>
                             <select name="estado">
                                <option value="SP">SP</option>
                            </select>
                           </div>
    
                           <div className={style.boxcheck}>
                  <p className={style.metodoT}>Método de pagamento</p>
                  <div className={style.divcheck}>
                    <input type="radio" className={style.check1} id="radio1" name="radio-group" />
                    <label className={style.radioButtonLabel} for="radio1">
                      <span className={style.radioButtonCustom}></span>
                      Cartão
                    </label>

                    <input type="radio" className={style.check2} id="radio2" name="radio-group" />
                    <label className={style.radioButtonLabel} for="radio2">
                      <span className={style.radioButtonCustom}></span>
                      Boleto
                    </label>
                  </div>
                          </div>
                        </div>
    
                        <div className={style.boxruaendereco}>
                          <div className={style.divRua}>
                            <label htmlFor="Rua">Endereço do salão*</label>
                            
                            {/* <input type="text" value={obj.ruaSalao} onChange={eventoTeclado} name='ruaSalao' placeholder="Rua Salão" className='form-control'/> */}

                            <input 
                              type="text" 
                              placeholder="Escreva aqui... " 
                              name="ruaSalao"
                              value={obj.ruaSalao} 
                              onChange={eventoTeclado}          
                              required               
                            />
                          </div>
                          
                          <div className={style.numerocasa}>
                           <label htmlFor="numero casa">Número*</label>

                           {/* <input type="text" value={obj.numeroSalao} onChange={eventoTeclado} name='numeroSalao' placeholder="Número Salão" className='form-control'/> */}

                           <IMaskInput
                             mask="0000*"
                             placeholder="Digite o Número"
                             name="numeroSalao"
                             value={obj.numeroSalao} 
                             onChange={eventoTeclado}
                             required                    
                           />
                         </div>
    
                         <div className={style.bairro}>

                           <label htmlFor="Bairro">Bairro *</label>

                           <input 
                            type="text" 
                            placeholder="Escreva aqui... "
                            value={obj.bairroSalao} 
                            onChange={eventoTeclado} 
                            name="bairroSalao"
                            required
                           />
                         </div>

                         <div className={style.complemento}>
                           <label htmlFor="Complemento casa">Complemento</label>
                           <input
                            type="text" 
                            placeholder="Escreva aqui... "
                            required
                           />
                         </div>
    
                        </div>
    
                    <div>

                        <button className={style.finalizar} type="submit" onClick={cadastrar} >Finalizar</button>                   
                    
                    </div>
                  </form>
                </div>         
            </section>
          </main>
        
      );

}

export default FormularioTeste;
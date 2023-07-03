import style from './Formulario.module.css';
import { Link } from "react-router-dom";
import { IMaskInput } from "react-imask";
import { useState } from 'react';

function FormularioTeste({botao, eventoTeclado, cadastrar, obj}){

    // const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
    const [image, setImage] = useState("");
    const [endImg] = useState("./ImgiconU.png");

    const options = [
        { value: '', text: 'Escolha plano' },
        { value: 'bronze', text: 'Plano Bronze' },
        { value: 'prata', text: 'Plano Prata' },
        { value: 'ouro', text: 'Plano Ouro' },
      ];

    const [selected, setSelected] = useState(options[0].value);
    
    const [value, setValue] = useState('');

    const handleChange = event => {
        setSelected(event.target.value);
      };

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
                              />
                            </div>
    
                            <div className={style.cnpjdiv}>
                              <label htmlFor="cnpj">CNPJ *</label>
                              <input
                                mask="00.000.000/0000-00"
                                placeholder="00.000.000/0000-00"
                                type="text"
                                value={obj.cnpj} 
                                onChange={eventoTeclado} 
                                name="cnpj" 
                              />
                            </div>
    
                            <div className={style.tele}>
                              <label htmlFor="telefone">Telefone Salão*</label>
                              <input type="text" value={obj.telefoneSalao} onChange={eventoTeclado} name='telefoneSalao' placeholder="Telefone salão" className='form-control'/>
                              {/* <IMaskInput
                                mask="(00) 00000-0000"
                                placeholder="Digite o Número"
                                value={obj.telefoneSalao}
                                onChange={eventoTeclado} 
                              /> */}
                            </div>
                          </div>
                        </div>
    
                        <div className={style.SegundosInpust}>
                          <div className={style.divnomecrontato}>
                            <label htmlFor="name">Nome contratante *</label>
                            <input type="text" value={obj.proprietarioSalao} onChange={eventoTeclado} name='proprietarioSalao' placeholder="Propietário Salão" />
                            {/* <input
                            type="text"
                            name="nomeProprietario"
                            placeholder="Escreva aqui..."
                            value={obj.proprietarioSalao} 
                            onChange={eventoTeclado}
                            /> */}
                          </div>
    
                          <div className={style.divemail}>
                            <label htmlFor="e-mail">E-mail salão*</label>
                            {/* <input type="text" value={obj.email} onChange={eventoTeclado} name='email' placeholder="Email" className='form-control'/> */}
                            <input
                              type="text"
                              name="email"
                              placeholder="Digite aqui..."
                              value={obj.email} 
                              onChange={eventoTeclado}
                              />
                          </div>
                        </div>
    
                        <div className={style.TerceiroInpust}>
                          <div className={style.divsenha}>
                            <label htmlFor="password">Senha*</label>
                            {/* <input type="text" value={obj.senha} onChange={eventoTeclado} name='senha'  placeholder="Senha" className='form-control'/> */}
                            <input
                              type="current-password"
                              name="senha"
                              placeholder="Senha..."
                              value={obj.senha} 
                              onChange={eventoTeclado}
                              />
                          </div>
    
                          <div className={style.divconfirmasenha}>
                            <label htmlFor="confirma password">Confirma senha *</label>
                            <input
                              type="new-password"
                              placeholder="Escreva aqui..."
                            />
                          </div>
    
                          <div className={style.AreaPlanos}>
                            <label htmlFor="plano">Plano*</label>

                            {/* <input type="text" value={obj.seloSalao} onChange={eventoTeclado} name='seloSalao' placeholder="Selo" className='form-control'/>
                            
                            <select value={opcaoSelecionada} onChange={e => setOpcaoSelecionada(e.target.value)}>
                                <option value="" disabled>Escolha plano</option>
                                <option value="planoBronze">Bronze</option>
                                <option value="planoPrata">Prata</option>
                                <option value="planoOuro">Ouro</option>
                            </select> */}

                            {/* <select value={obj.seloSalao}>
                                <option value="" selected="selected" disabled >Escolha plano</option>
                                <option value="planoBronze">Bronze</option>
                                <option value="planoPrata">Prata</option>
                                <option value="planoOuro">Ouro</option>
                             </select> */}

                            <input type="text" value={obj.seloSalao} onChange={eventoTeclado} name='seloSalao' placeholder="Selo" className='form-control'/>
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
                               placeholder="Digite o CEP"
                              />
                            </div>
    
                            <div className={style.boxcidade}>
                              <label htmlFor="cidade">Cidade *</label>
                              <input 
                                type="text" 
                                placeholder="Escreva aqui..."
                              />
                            </div>
    
                            <div className={style.boxestado}>
                             <label htmlFor="estado">Estado*</label>
                             <select name="estado" value={value} onChange={handleChange}>
                                <option value="SP">SP</option>
                            </select>
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
                            <label htmlFor="Rua">Endereço do salão*</label>
                            
                            {/* <input type="text" value={obj.ruaSalao} onChange={eventoTeclado} name='ruaSalao' placeholder="Rua Salão" className='form-control'/> */}

                            <input 
                              type="text" 
                              placeholder="Ecreva aqui... " 
                              name="ruaSalao"
                              value={obj.ruaSalao} 
                              onChange={eventoTeclado}                         
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
                           />
                         </div>
    
                         <div className={style.bairro}>

                           <label htmlFor="Bairro">Bairro *</label>

                           {/* <input type="text" value={obj.bairroSalao} onChange={eventoTeclado} name='bairroSalao' placeholder="Bairro" className='form-control'/> */}

                           <input 
                            type="text" 
                            placeholder="Ecreva aqui... "
                            value={obj.bairroSalao} 
                            onChange={eventoTeclado} 
                            name="bairroSalao"
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
       
                    {/* <Link to='/PageConclusaoCadastro'><button className={style.finalizar} type="submit">Finalizar</button></Link>  */}
                    
                        

                        <button className={style.finalizar} type="submit" onClick={cadastrar} >Finalizar</button>
                    
                    
                    
                    </div>
                  </form>
                </div>         
            </section>
          </main>
        
      );

}

export default FormularioTeste;
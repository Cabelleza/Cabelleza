import style from './Formulario.module.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';//importando biblioteca de envio de email
import toastr from 'toastr';//importando biblioteca de alerts
import 'toastr/build/toastr.min.css';

function Formulario() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')

    function enviarEmail(e) {//função de envio de email
        e.preventDefault();

        if (email == '' || assunto == '' || mensagem == '') {//se os campos obrigatórios não forem preenchidos
            toastr.error('Preencha todos os campos');
            return
        }
        const templateParams = {//objeto que recebe o valor das variáveis nas propriedades
            email: email,
            from_name: name,
            subject: assunto,
            message: mensagem,
        }

        emailjs.send("service_z84p2nj", "template_e9xtjhc", templateParams, "185o3WcIv_yAumU1i")//id's para o envio de email
            .then((response) => {
                toastr.success('E-mail enviado com sucesso', response);//quando o email é enviado com sucesso limpa os campos preenchidos
                setEmail('')
                setName('')
                setAssunto('')
                setMensagem('')
            }, (err) => {
                toastr.error('Erro ao enviar, tente novamente!', err);
            })
    }

    return (
        <>
            <div id={style.formulario}>
                <form className={style.form} onSubmit={enviarEmail}>{/*ao enviar pelo botão submit chama a função enviarEmail*/}
                    <div>
                        <label htmlFor="inputEmail">Endereço de e-mail</label> <br />
                        <input
                            type='email'
                            className={style.input}
                            placeholder="Informe seu endereço de e-mail"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            name='inputEmail'
                            id='inputEmail'//passa valor para o label for
                        />
                    </div>

                    <div>
                        <label htmlFor="inputNome">Nome completo (opcional)</label> <br />
                        <input
                            type='text'
                            className={style.input}
                            placeholder="Digite seu nome"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            name='inputNome'
                            id='inputNome'
                        />
                    </div>

                    <div>
                        <label htmlFor="inputAssunto">Sobre qual assunto podemos te ajudar?</label> <br />
                        <input
                            type='text'
                            className={style.input}
                            placeholder='Informe o assunto'
                            onChange={(e) => setAssunto(e.target.value)}
                            value={assunto}
                            name='inputAssunto'
                            id='inputAssunto'
                        />
                    </div>

                    <div>
                        <label htmlFor="areaDescricao">Escreva detalhadamente o que deseja</label> <br />
                        <textarea name="areaDescricao" id="areaDescricao" cols="85" rows="10"
                            className={style.mensagem}
                            placeholder='Informe como podemos te ajudar'
                            onChange={(e) => setMensagem(e.target.value)}
                            value={mensagem}
                        />
                    </div>

                    <input type="submit" value="Enviar" className={style.btnEnviar} />
                </form>
            </div>
        </>
    )
}

export default Formulario;
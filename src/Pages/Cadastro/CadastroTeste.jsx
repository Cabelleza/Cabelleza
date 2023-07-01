import style from "./CadastroTeste.module.css";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import FormularioTeste from "./FormularioTeste";

function CadastroTeste() {

  const [image, setImage] = useState("");
  const [endImg] = useState("./ImgiconU.png");

  // Objeto Salao
  const salao = {
    id:0, 
    nomeSalao:'',
    proprietarioSalao:'',
    email:'',
    senha:'',
    ruaSalao:'',
    numeroSalao:'',
    bairroSalao:'',
    cnpj:'',
    telefoneSalao:'',
    seloSalao:''
  }

  //UseState
  const [btnFinalizar, setBtnFinalizar] = useState(true);
  const [saloes, setSaloes] = useState([]);
  const [objSalao, setObjSalao] = useState(salao);

  //UseEffect
  useEffect(()=>{
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setSaloes(retorno_convertido));
  }, []);

  //Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjSalao({...objSalao, [e.target.name]:e.target.value});
  }

  // Cadastrar salao
  const cadastrar = () =>{
    fetch('http://localhost:8080/cadastrar',{
      method:'post',
      body:JSON.stringify(objSalao),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }

    })
    .then(retorno => retorno.json())
    .then(retorno_convertido =>{
      
      if( retorno_convertido.mensagem !==undefined){
        alert(retorno_convertido.mensagem);
      }else{
        setSaloes([...saloes, retorno_convertido]);
        alert('Salão cadastrado com sucesso!');
        limparFormulario();
      }
      
    })
    
  }

  //Limpar formulario
  const limparFormulario = () =>{
    setObjSalao(salao);
    setBtnFinalizar(true);
  }


  return (
    <FormularioTeste botao={btnFinalizar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objSalao}/>
  );
}

export default CadastroTeste;
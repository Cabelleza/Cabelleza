import style from './Dados.module.css'

function Dados() {
    return (
      <>
        <div>
        <div className={style.linhaTempo}>
          <span className={style.active}>Planos</span>
          <hr />
          <span className={style.active}>Dados</span>
          <hr />
          <span className={style.white}>Validação</span>
          <hr />
          <span className={style.white}>Endereço</span>
          <hr />
          <span className={style.white}>Pagamento</span>
        </div>
        <button type="subimt">Continuar</button>
        </div>
      </>
    );
  }
  export default Dados;
  
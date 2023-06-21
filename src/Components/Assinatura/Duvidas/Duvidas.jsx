import style from './Duvidas.module.css';
import meiaLinha from '../../../imagens/meia-linha.png';

function Duvidas() {
    return (
        <>
            <section className={style.duvidas}>
                <div className={style.txtDuvidas}>
                    <img src={meiaLinha} alt="" />
                    <h2>Algumas dúvidas</h2>
                    <img src={meiaLinha} alt="" />
                </div>

                <div className={style.duvidasDetalhes}>
                    <div>
                        <details>
                            <summary>O que é o plano de assinatura da Cabelleza?</summary>
                            <p>É o plano que nós criamos para que seu salão de beleza tenha um destaque maior. Acreditamos que assim seu salão cresce ainda mais, assim como a Cabelleza.</p>
                        </details>
                        <details>
                            <summary>Posso mudar de plano?</summary>
                            <p>Pode sim. A qualquer momento que desejar seu salão pode mudar o plano, tanto para um com mais ou menos vantagens.</p>
                        </details>
                        <details>
                            <summary>Como funciona a parceria com a Cabelegria?</summary>
                            <p>Todos os salões que entram na plataforma da Cabelleza também firmam parceria com a Cabelegria. Ela que é uma ONG voltada para a arrecadação de mechas de cabelo. Em seu salão haverá uma urna, onde serão depositadas as mechas. Mediante a um combinado com a instituição ela recolherá as mechas inseridas na urna.</p>
                        </details>
                    </div>

                    <div>
                        <details>
                            <summary>Por que assinar?</summary>
                            <p>Diferente do plano gratuito, quando você assina o plano bronze, prata ou ouro você garante mais visibilidade para seu negócio.</p>
                        </details>
                        <details>
                            <summary>Qual o prazo para o teste grátis?</summary>
                            <p>Para fazer o cadastro na nossa plataforma não tem custo e é por tempo indeterminado, mas se deseja mais vantagens é necessário que assine um plano.</p>
                        </details>
                        <details>
                            <summary>Posso mudar de plano após quanto tempo?</summary>
                            <p>Quando desejar mudar de plano. Basta logar sua conta e alterar os planos na sua área de login.</p>
                        </details>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Duvidas;
import HeaderArtigos from './HeaderArtigos/HeaderArtigos';
import style from './Artigo3.module.css';

function Artigo3() {
    return (
        <>
            <HeaderArtigos />
            <div id={style.sectionArtigo3}>
                <section className={style.artigo3}>
                    <div>
                        Entenda como usar bem um condicionador
                    </div>
                    <section className={style.textoArtigo}>
                        <p>Muitas mulheres se perguntam ainda como usar condicionador corretamente. Será que condicionador causa queda de cabelo? Pode passar condicionador na raiz? Como usar condicionador para cabelos oleosos? Pensando em todas essas dúvidas, Pantene traz dicas valiosas para você. Confira abaixo e entenda mais sobre o tema.</p>
                        <h3>Como usar corretamente condicionador</h3>
                        <p>Antes de passar um bom condicionador, você deve lavar seu cabelo com um shampoo apropriado para seu tipo de cabelo e pele. Após lavar e enxaguar o cabelo com água corrente de morna a fria, você pode seguir os seguintes passos com o condicionador:</p>
                        <ul>
                            <li>Retire o excesso de água do cabelo antes de aplicar o condicionador Pantene.</li>
                            <li>Escolha a técnica mais adequada para seu tipo de cabelo. O condicionador para cabelos oleosos deve ser aplicado apenas da metade para baixo. Já para fios ressecados na parte de cima da cabeça, o certo é passar o condicionador na raiz do cabelo espalhando até as pontas.</li>
                            <li>Enxague muito bem. A água deve sair cristalina do seu cabelo para ter certeza de que retirou todo acúmulo de produtos, resíduos e oleosidade.</li>
                        </ul>
                        <h3>Condicionador deixa os cabelos oleosos?</h3>
                        <p>A primeira coisa que você deve saber é que condicionador não deixa o cabelo oleoso. O cabelo produz óleos naturais e são eles os responsáveis pela oleosidade dos seus fios. É necessário escolher o condicionador de cabelo adequado para você. Fazer a escolha errada pode deixar seus fios pesados.</p>
                        <h3>Posso passar condicionador na raiz do cabelo?</h3>
                        <p>Você sabe qual a função do condicionador? Ele hidrata o seu cabelo. Se teus fios estão danificados e ressecados na raiz, essa região também precisa de hidratação.</p>
                        <h3>Condicionador causa queda capilar?</h3>
                        <p>Pode te soar surpreendente, mas todos nós perdemos por volta de 100 fios de cabelo diariamente! Sim, isso é natural. E fique atenta: apesar de muitos boatos, não é o condicionador que causa a queda de cabelo. Pelo contrário! Quando o cabelo já está seco, os fios caem e ficam enrolados uns nos outros.</p>
                        <span className={style.artigoFonte}><span>Fonte: <a href="https://pantene.com.br/pt-br/dicas-de-cabelo/macio/conselhos-do-condicionador-pantene" target='_blank'>https://pantene.com.br/pt-br/dicas-de-cabelo/macio/conselhos-do-condicionador-pantene</a></span></span>
                    </section>
                </section>
            </div>
        </>
    );
}

export default Artigo3;
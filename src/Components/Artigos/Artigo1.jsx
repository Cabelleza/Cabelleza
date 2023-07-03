import HeaderArtigos from './HeaderArtigos/HeaderArtigos';
import style from './Artigo1.module.css';

function Artigo1() {
    return (
        <>
            <HeaderArtigos />
            <div id={style.sectionArtigo1}>
                <section className={style.artigo1}>
                    <div>
                        Como deixar o cabelo bonito e com brilho
                    </div>
                    <section className={style.textoArtigo}>
                        <p>A primeira coisa que você precisa saber é que cada tipo de cabelo exige um cuidado especial. Por isso separamos explicações para você entender como manter e deixar o cabelo bonito e hidratado.</p>
                        <h3>Primeiro: alimentação saudável</h3>
                        <p>Uma rotina diária de alimentação saudável irá te proporcionar cabelos mais sedosos, pois beleza e saúde são aliadas! Porém quais tipos de alimentos são importantes? Confira nossa lista de alimentos para te dar um norte sobre como deixar o cabelo saudável.</p>
                        <ul>
                            <li><b>As proteínas e vitaminas devem ser base da sua alimentação. </b> Consuma atum, salmão, sardinha, nozes, morangos, pepinos, frango, figos secos e feijões. Estes alimentos são ricos em nutrientes para que seu cabelo fique forte e bonito.</li>
                            <li><b>Verduras e legumes também são importantes.</b> Elas ajudam a oferecer mais nutrientes e minerais ao seu organismo, ajudam no sistema digestivo que, quando em dia, reflete na pele e no cabelo.</li>
                            <li><b>Carboidratos? Sim, também!</b> Uma vida saudável significa uma vida balanceada. Uma dieta baseada em 80/20 (80% comida saudável e 20% comida afetiva) é um balanço que pode ser adotado sem necessidade de restrição ou algo do tipo. Lembre-se a vida foi feita para ser desfrutada e a comida faz parte dela.</li>
                            <li><b>Água, água e mais água.</b> Comer bem é importante e, tão importante quanto é se hidratar! Nosso corpo é composto por mais de 70% de água e, quando estamos em déficit líquido, isso se nota em tudo! No cabelo, na pele, no corpo, na eficiência …. hidrata-se, tome bastante água.</li>
                        </ul>
                        <h3>Evite chapinha, secador, grampos e bob’s</h3>
                        <p>O calor em excesso resseca o fio e torna-o fraco e quebradiço, por isso evite chapinha e secador. Se você precisar usar secador, use um bocal para impedir o contato direto com a alta temperatura. Ao usar chapinha, lembre-se de aplicar antes um produto termo protetor para evitar qualquer tipo de dano térmico aos fios. Procure não usar chapinha e grampos nos cabelos molhados, só quando necessário.</p>
                        <h3>Lavar, secar e pentear os cabelos</h3>
                        <p>Ao lavar os cabelos, dê preferência à água fria. Ela fecha os folículos e é uma solução para você que se pergunta como deixar o cabelo com brilho. Durante a lavagem, use uma quantidade moderada e pertinente de produtos para o cabelo: o excesso é sempre prejudicial. Por fim, seque os cabelos com uma toalha, retirando o excesso de água suavemente para evitar o atrito que causa o frizz e deixe-os secar naturalmente.</p>
                        <h3>Corte o cabelo</h3>
                        <p>Se você estiver com pontas do cabelo muito danificadas, ressecadas e com pontas duplas, e não conseguir resolver de outra forma: mude o visual! Corte o cabelo e levante sua autoestima!</p>
                        <span className={style.artigoFonte}><span>Fonte: <a href="https://pantene.com.br/pt-br/dicas-de-cabelo/forte/como-te-lo-saudavel-e-bonito" target='_blank'>https://pantene.com.br/pt-br/dicas-de-cabelo/forte/como-te-lo-saudavel-e-bonito</a></span></span>
                    </section>
                </section>
            </div>
        </>
    );
}

export default Artigo1;
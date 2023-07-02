import HeaderArtigos from './HeaderArtigos/HeaderArtigos';
import style from './Artigo4.module.css';

function Artigo4() {
    return (
        <>
            <HeaderArtigos />
            <div id={style.sectionArtigo4}>
                <section className={style.artigo4}>
                    <div>
                        Autoestima durante o tratamento
                    </div>
                    <section className={style.textoArtigo}>
                        <p>A perda do cabelo pode afetar significativamente a autoestima de uma pessoa, mas existem maneiras de manter uma autoestima saudável durante esse processo. Aqui estão algumas dicas que podem ajudar.</p>
                        <h3>Aceite suas emoções</h3>
                        <p>É normal sentir tristeza, frustração ou até mesmo raiva em relação à perda de cabelo. Permita-se vivenciar essas emoções e lembre-se de que elas fazem parte do processso. Encontrar maneiras saudáveis de expressar e lidar com essas emoções pode ajudar a manter sua autoestima em equilíbrio.</p>
                        <h3>Encontre seu estilo único</h3>
                        <p>A perda de cabelo não significa que você precisa perder seu estilo pessoal. Explore diferentes opções de penteados, chapéus, lenços, perucas ou outros acessórios que possam complementar não sua aparência e refletir sua personalidade. Experimente diferentes looks e encontre o que faça você se sentir bem e confiante.</p>
                        <h3>Valorize outras características</h3>
                        <p>Lembre-se que a beleza e o valor de uma pessoa vão além da aparência externa. Foque em reconhecer suas outras qualidades, habilidades e características positivas. Valorize sua personalidade, inteligência, talentos e realizações. Cultivar uma atitude positiva em relação a si mesmo pode fortalecer sua autoestima.</p>
                        <h3>Cuide de si mesmo</h3>
                        <p>Dedique tempo para cuidar do seu bem-estar físico e emocional. Pratique exercícios físicos que você goste, alimente-se de forma saudável, durma bem e encontre atividades que tragam prazer e relaxamento. Ao cuidar de si mesmo de maneira abrangente, você estará fortalecendo sua autoestima e desenvolvendo uma relação positiva consigo mesmo.</p>
                        <span className={style.artigoFonte}><span>Fonte: <a href="https://boaforma.abril.com.br/especiais/como-manter-a-autoestima-em-alta-durante-o-tratamento-de-cancer/" target='_blank'>https://boaforma.abril.com.br/especiais/como-manter-a-autoestima-em-alta-durante-o-tratamento-de-cancer/</a></span></span>
                    </section>
                </section>
            </div>
        </>
    );
}

export default Artigo4;
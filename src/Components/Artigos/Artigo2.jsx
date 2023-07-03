import HeaderArtigos from './HeaderArtigos/HeaderArtigos';
import style from './Artigo2.module.css';

function Artigo2() {
    return (
        <>
            <HeaderArtigos />
            <div id={style.sectionArtigo2}>
                <section className={style.artigo2}>
                    <div>
                        Resgatando a autoestima de pacientes
                    </div>
                    <section className={style.textoArtigo}>
                        <p>Não tenha dúvidas que quando o paciente está satisfeito com sua
                            aparência há um impacto direto na tolerância e, quem
                            sabe, até no resultado do tratamento. Sabendo disso, quando a paciente recebe uma peruca feita com cabelos doados, elas têm a oportunidade de recuperar a aparência natural do cabelo e sentir-se mais confortáveis e confiantes com sua aparência física. Entenda mais sobre o tema:</p>
                        <h3>Restauração da Autoestima</h3>
                        <p>A perda do cabelo pode afetar significativamente a autoestima e a confiança de uma pessoa. Ao receber uma peruca feita a partir de cabelos doados, as pacientes podem recuperar sua aparência natural e sentir-se mais confiantes e confortáveis em sua própria pele.</p>
                        <h3>Sentimento de pertencimento:</h3>
                        <p>Ao receber uma peruca feita com cabelos doados, as pacientes podem sentir-se apoiadas e compreendidas. Saber que há pessoas dispostas a ajudar e contibuir com um pedaço de si mesmas pode trazer um senso de comunidade e solidariedade.</p>
                        <h3>Redução do impacto psicológico</h3>
                        <p>A perda de cabelo pode ter um impacto emocional significativo nas pessoas, levando a sentimentos de tristeza, ansiedade e depressão. A doação de cabelo e o recebimento de uma peruca podem ajudar a minimizar esse impacto, proporcionando às pacientes um recurso prático e estético para lidar com a perda capilar.</p>
                        <h3>Facilitação do processo de recuperação</h3>
                        <p>Durante o tratamento de condições de saúde, como o câncer, a alopecia ou outras doenças, a doação de cabelo e o uso de perucas podem ser uma maneira tangível de enfrentar e superar os desafios físicos e emocionais associados à perda de cabelo. Isso pode ajudar as pacientes a se concentrarem em sua recuperação e bem-estar geral.</p>
                        <span className={style.artigoFonte}><span>Fonte: <a href="https://www.inca.gov.br/sites/ufu.sti.inca.local/files/media/document/capa-rede-cancer-21.pdf" target='_blank'>https://www.inca.gov.br/sites/ufu.sti.inca.local/files/media/document/capa-rede-cancer-21.pdf</a></span></span>
                    </section>
                </section>
            </div>
        </>
    );
}

export default Artigo2;
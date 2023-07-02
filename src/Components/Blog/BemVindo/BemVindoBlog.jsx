import style from './BemVindoBlog.module.css';

function BemVindo() {
    return (
        <section className={style.BemVindo}>
            <h1>Olá, seja bem-vindo(a)!</h1>
            <div className={style.ConteudoBemVindo}>
                <p>Explore nosso blog repleto de conteúdos, desde cuidados e informações até reflexões, oferecendo uma ampla variedade de temas. Selecione uma categoria, clique na área de busca e mergulhe naquilo que mais lhe interessa.</p>
            </div>
        </section>
    )
}

export default BemVindo;
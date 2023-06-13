import style from './SaloesSelo.module.css';

function SaloesSelo() {
    return(
        <>
            <section className={style.saloesSelo}>
                <h2>Impulsione o seu salão e faça parte do nosso propósito</h2>
                <div className={style.containerSaloesSelo}>
                    <div className={style.salaoSelo}>
                        <div className={style.salaoSelotxt}>
                            <p>TP Beauty Lounge </p>
                            <span>Av. Ataulfo de Paiva, 355, Leblon.</span>
                        </div>
                    </div>

                    <div className={style.salaoSelo}>
                        <div className={style.salaoSelotxt}>
                            <p>Werner Coiffure</p>
                            <span>R. Visconde de Pirajá, 559, lj. B, Ipanema.</span>
                        </div>
                    </div>

                    <div className={style.salaoSelo}>
                        <div className={style.salaoSelotxt}>
                            <p>Care, Body & Soul </p>
                            <span>R. Barão de Jaguaripe, 289, Ipanema.</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SaloesSelo;
import style from './SaloesDevolvem.module.css';

function SaloesDevolvem() {

    return (
        <>
        {/*Adicionar modal com informações sobre cada salão, talvez seja necessário usar uma API para retornar os dados dos salões*/}
        <section className={style.sectionSaloesDevolvem}>
            <h1 className={style.h1SaloesDevolvem}>Salões que devolvem sorrisos!</h1>
            <div className={style.saloesContainer}>
                <div className={style.saloesBox}>
                    <div className={style.saloesTextBox}>
                        <h1 className={style.saloesH1Box}>Nome Salão</h1>
                        <p className={style.saloesPBox}>Endereço Salão</p>
                    </div>
                </div>
                <div className={style.saloesBox}>
                    <div className={style.saloesTextBox}>
                        <h1 className={style.saloesH1Box}>Nome Salão</h1>
                        <p className={style.saloesPBox}>Endereço Salão</p>
                    </div>
                </div>
                <div className={style.saloesBox}>
                    <div className={style.saloesTextBox}>
                        <h1 className={style.saloesH1Box}>Nome Salão</h1>
                        <p className={style.saloesPBox}>Endereço Salão</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default SaloesDevolvem;
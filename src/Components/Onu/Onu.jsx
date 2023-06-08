import style from './Onu.module.css';

function Onu() {
    return (
        <>
            <section className={style.SectionOnu}>
                <div className={style.SessaoImagemOnu}>
                    <div className={style.AreaImagemOnu}>

                    </div>
                </div>


                <div className={style.SessaoTextoOnu}>
                    <div className={style.AreaTextoOnu}>
                        <p className={style.tituloOnu}>Cabelleza e os ODS</p>
                        <p className={style.TextoOnu}>
                        A <span className={style.TextoRosa_Onu}>Cabelleza</span> está comprometida em respeitar e promover os Objetivos de Desenvolvimento Sustentável da ONU. Eles relacionam seus objetivos com os seguintes aspectos:<br></br><br></br>
                        <span className={style.TextoVerde_Onu}>Saúde e Bem-Estar</span>: Contribuem para o bem-estar das mulheres pacientes oncológicas por meio da doação de mechas de cabelo.<br></br><br></br>
                        <span className={style.TextoVerde_Onu}>Igualdade de Gênero</span>:
                        Empoderam as mulheres por meio da doação de cabelo, destacando a importância da solidariedade e apoio entre as mulheres.<br></br><br></br>
                        <span className={style.TextoVerde_Onu}>Trabalho Decente e Crescimento Econômico</span>: Incentivam parcerias com salões especializados, criando oportunidades de emprego e sustentabilidade para profissionais da área.<br></br><br></br>
                        <span className={style.TextoVerde_Onu}>Consumo e Produção Responsáveis</span>: Promovem uma abordagem consciente em relação ao consumo de produtos capilares, incentivando a valorização da própria aparência e a sustentabilidade na indústria de beleza.

                        
                        </p>
                    </div>
                </div>






            </section>
        
        </>
    );
}

export default Onu;
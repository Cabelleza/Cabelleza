import Header from '../../Components/Header/Header';
import CadastreSeuSalao from '../../Components/Assinatura/CadastreSeuSalao/CadastreSeuSalao';
import SaloesSelo from '../../Components/Assinatura/SaloesSelo/SaloesSelo';
import TabelaPlanos from '../../Components/Assinatura/TabelaPlanos/TabelaPlanos';
import SelosAssinatura from '../../Components/Assinatura/SelosAssinatura/SelosAssinatura';
import Duvidas from '../../Components/Assinatura/Duvidas/Duvidas';
import Footer from '../../Components/Footer/Footer';

function Assinatura() {
    return (
        <>
            <Header />

            <CadastreSeuSalao />
            <SaloesSelo />
            <TabelaPlanos />
            <SelosAssinatura />
            <Duvidas />

            <Footer />
        </>
    )
}

export default Assinatura;
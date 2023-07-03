import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Dicas from '../../Components/Blog/Dicas/Dicas';
import Podcast from '../../Components/Blog/Podcast/Podcast';
import Relatos from '../../Components/Blog/Relatos/Relatos';
import Historias from '../../Components/Blog/Historias/Historias';
import Parceiros from '../../Components/Blog/Parceiros/Parceiros';
import DesabrocharSorrisos from '../../Components/Blog/DesabrocharSorrisos/DesabrocharSorrisos';
import BemVindo from '../../Components/Blog/BemVindo/BemVindoBlog';
import PesquisaPorCategoria from '../../Components/Blog/PesquisaCategoria/PesquisaPorCategorias';
import Artigos from '../../Components/Blog/Artigos/Artigos';

function Blog() {
    return(
        <>
            <Header/>            
            <DesabrocharSorrisos/>
            <BemVindo/>
            <PesquisaPorCategoria/>
            <Artigos/>
            <Dicas/>
            <Podcast/>
            <Relatos/>
            <Historias/>
            <Parceiros/>
            <Footer/>
        </>
    )
}

export default Blog;
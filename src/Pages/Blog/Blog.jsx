import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Dicas from '../../Components/Blog/Dicas/Dicas';
import Podcast from '../../Components/Blog/Podcast/Podcast';
import Relatos from '../../Components/Blog/Relatos/Relatos';
import Historias from '../../Components/Blog/Historias/Historias';
import Parceiros from '../../Components/Blog/Parceiros/Parceiros';
import DesabrocharSorrisos from '../../Components/Blog/DesabrocharSorrisos/DesabrocharSorrisos';

function Blog() {
    return(
        <>
            <Header/>
            
            <DesabrocharSorrisos/>
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
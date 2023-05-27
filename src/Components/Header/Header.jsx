import style from './Header.module.css';
import {Link} from 'react-router-dom';
import Logo from '../../imagens/logo.svg';
import {FaBars} from "react-icons/fa";
import {BsXLg} from "react-icons/bs";

function Header(){
    return(
        <>
            <header>
                <Link to='/'>
                    <img src={Logo} alt="Logo Cabelleza" className={style.Logo}/>
                </Link>
                <nav className={style.nav_principal}>
                    <ul>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/Sobre'><li>Sobre Nós</li></Link>
                        <Link to='/Saloes'><li>Salões</li></Link>
                        <Link to='/Blog'><li>Blog</li></Link>
                        <Link to='/FaleConosco'><li>Fale Conosco</li></Link>
                    </ul>
                        <Link to='/Login'><button>Login</button></Link>
                </nav>

                {/*MENU RESPONSIVO*/}
                <input type='checkbox' id="menu" className={style.botao_menu} />
                <label for="menu" className={style.label_menu}>
                    <FaBars className={style.botao_open}/>
                </label>
                <nav className={style.nav_menu}>
                    <ul className={style.lista_menu}>
                    <label for="menu" className={style.label_menu}>
                        <BsXLg className={style.botao_close}/>
                    </label>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/Sobre'><li>Sobre Nós</li></Link>
                        <Link to='/Saloes'><li>Salões</li></Link>
                        <Link to='/Blog'><li>Blog</li></Link>
                        <Link to='/FaleConosco'><li>Fale Conosco</li></Link>
                        <Link to='/Login'><li>Login</li></Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;
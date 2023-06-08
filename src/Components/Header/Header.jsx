import React, { useState, useEffect } from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../imagens/logo.svg';
import { FaBars } from 'react-icons/fa';
import { BsXLg } from 'react-icons/bs';

function Header() {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setIsFixed(position > 80);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`${style.header} ${isFixed ? style.fixed : ''}`}>
                <Link to="/">
                    <img src={Logo} alt="Logo Cabelleza" className={style.Logo} />
                </Link>
                <nav className={style.nav_principal}>
                    <ul>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/SobreNos">
                            <li>Sobre Nós</li>
                        </Link>
                        <Link to="/Saloes">
                            <li>Salões</li>
                        </Link>
                        <Link to="/Blog">
                            <li>Blog</li>
                        </Link>
                        <Link to="/FaleConosco">
                            <li>Fale Conosco</li>
                        </Link>
                    </ul>
                    <Link to="/Login">
                        <button>Login</button>
                    </Link>
                </nav>

                {/* MENU RESPONSIVO */}
                <input type="checkbox" id="menu" className={style.botao_menu} />
                <label htmlFor="menu" className={style.label_menu}>
                    <FaBars className={style.botao_open} />
                </label>
                <nav className={style.nav_menu}>
                    <ul className={style.lista_menu}>
<<<<<<< HEAD
                    <label for="menu" className={style.label_menu}>
                        <BsXLg className={style.botao_close}/>
                    </label>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/SobreNos'><li>Sobre Nós</li></Link>
                        <Link to='/Saloes'><li>Salões</li></Link>
                        <Link to='/Blog'><li>Blog</li></Link>
                        <Link to='/FaleConosco'><li>Fale Conosco</li></Link>
                        <Link to='/Login'><li>Login</li></Link>
=======
                        <label htmlFor="menu" className={style.label_menu}>
                            <BsXLg className={style.botao_close} />
                        </label>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/Sobre">
                            <li>Sobre Nós</li>
                        </Link>
                        <Link to="/Saloes">
                            <li>Salões</li>
                        </Link>
                        <Link to="/Blog">
                            <li>Blog</li>
                        </Link>
                        <Link to="/FaleConosco">
                            <li>Fale Conosco</li>
                        </Link>
                        <Link to="/Login">
                            <li>Login</li>
                        </Link>
>>>>>>> 906954e0611b00c3c573618d588e413ca09a94ea
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
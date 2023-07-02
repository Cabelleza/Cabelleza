import React, { useState, useEffect } from 'react';
import style from './HeaderArtigos.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../../imagens/logo.svg';
import { FaBars } from 'react-icons/fa';
import { BsXLg, BsArrowLeft } from 'react-icons/bs';


function HeaderArtigos() {
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
                <nav className={style.nav_principal_blog}>
                        <Link to="/Blog" >
                            <li className={style.btnVoltar}><BsArrowLeft className={style.iconVoltar}/>Voltar</li>
                        </Link>
                    <ul>
                        <Link to="/Artigo1">
                            <li>Brilho</li>
                        </Link>
                        <Link to="/Artigo2">
                            <li>Ato de amor</li>
                        </Link>
                        <Link to="/Artigo3">
                            <li>Fios</li>
                        </Link>
                        <Link to="/Artigo4">
                            <li>Autoestima</li>
                        </Link>
                    </ul>
                </nav>

                {/* MENU RESPONSIVO */}
                <input type="checkbox" id="menu" className={style.botao_menu} />
                <label htmlFor="menu" className={style.label_menu}>
                    <FaBars className={style.botao_open} />
                </label>
                <nav className={style.nav_menu_blog}>
                    <ul className={style.lista_menu}>
                        <label htmlFor="menu" className={style.label_menu}>
                            <BsXLg className={style.botao_close} />
                        </label>
                        <Link to="/Blog" >
                            <li>Voltar</li>
                        </Link>
                        <Link to="/Artigo1">
                            <li>Brilho</li>
                        </Link>
                        <Link to="/Artigo2">
                            <li>Ato de amor</li>
                        </Link>
                        <Link to="/Artigo3">
                            <li>Fios</li>
                        </Link>
                        <Link to="/Artigo4">
                            <li>Autoestima</li>
                        </Link>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default HeaderArtigos;
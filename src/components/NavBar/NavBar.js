import React, { useState, useEffect } from 'react';
import CartWidget from "../CartWidget/CartWidget"
import './styles.css'
import SearchBar from "../SearchBar.js";
import searchImage from "../../api";
import ImageList from '../ImageList';

const NavBar = () => {
    const [arrImage, setArrImage] = useState([]);
    const handleSubmit = async (term) => {
        let resultado = await searchImage(term);
        setArrImage(resultado);
    }

    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    TIENDA ONLINE OFICIAL
                </a>
                <div>
                <SearchBar enSubmit={handleSubmit} />
                <ImageList images={arrImage} />
            </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/galeria">
                                Galeria
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/productos">
                                Productos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contacto">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <CartWidget />
                </div>
                
            </div>
        </nav>
    );
};

export default NavBar;

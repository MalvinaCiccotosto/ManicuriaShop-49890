import React from 'react'

import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">TIENDA ONLINE OFICIAL</a>
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
                            <a className="nav-link" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/servicios">Galeria</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/galeria">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
            <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;
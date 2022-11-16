import React from 'react'
import {Link} from 'react-router-dom'
import Imagem1 from "../imagem/logo-teste.png"
import Imagem2 from "../imagem/avatar.png"

export default function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-expand-md navbar-dark bg-black" />
            <nav className="navbar navbar-expand-md navbar-dark bg-black">
                <div className="container-fluid">
                    <a className="navbar-brand" >
                        <img width="30" height="30" src={Imagem1}
                            className="logo-teste d-inline-block align-text-top" />
                        Alfabetiza
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                                <Link className="nav-link" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">                                
                                <Link className="nav-link active" aria-current="page" to="/Squad">Squad</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Tutorial">Tutorial</Link>
                            </li>
                              <li className="nav-item">
                                <Link className="nav-link" to="/Jogo">Jogo</Link>
                            </li>
                        </ul>
                    
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <Link button type="button" className="btn btn-warning mx-2" to="/Cadastro"><img
                                    src={Imagem2} width="30" height="30" alt="" />
                                Cadastro
                            </Link>
                        </div>
                    </div>
                    </div>

            </nav>

        </div>
    )
};
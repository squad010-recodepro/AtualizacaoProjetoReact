import React from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Cadastro from '../Pages/Cadastro'
import Jogo from '../Pages/Jogo'
import Home from '../Pages/Home'
import Tutorial from '../Pages/Tutorial'
import Squad from '../Pages/Squad'
import Navbar from '../Componentes/Navbar'
import Footer from '../Componentes/Footer'



export default function Rotas() {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Tutorial" element={<Tutorial />} />
                <Route path="/Jogo" element={<Jogo />} />
                <Route path='/Squad' element={<Squad/>}/>
                <Route path="/Cadastro" element={<Cadastro />} />
            </Routes>
            <Footer />
        </Router>

    )
};
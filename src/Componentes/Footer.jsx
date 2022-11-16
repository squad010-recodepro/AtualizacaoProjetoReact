import React from 'react'
import Imagem1 from "../imagem/logo-teste.png"
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';


export default function Footer() {
    return (
        <div>
            <footer>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <i className="fab fa-slack"></i>
                            <span className="logo_name">Alfabetiza</span>
                            <img src={Imagem1} width="24" className="me-2" height="24" alt="" />
                        </div>
                        <div className="media-icons">
                            <a href="">
                                <BsFacebook name="BsFacebook"></BsFacebook>
                            </a>
                            <a href="">
                                <BsInstagram name="BsInstagram"></BsInstagram>
                            </a>
                            <a href="">
                                <BsWhatsapp name="BsWhatsapp"></BsWhatsapp>
                            </a>
                            <a href="">
                                <FiTwitter name="FiTwitter"></FiTwitter>
                            </a>
                            <a href="">
                                <FaTiktok name="FaTiktok"></FaTiktok>
                            </a>

                        </div>
                    </div>
                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Contato</li>
                            <li> <a href="">Home</a></li>
                            <li> <a href="">Contate-nos</a></li>
                            <li> <a href="">Sobre nos</a></li>

                        </ul>
                        <ul className="box">
                            <li className="link_name">Serviços</li>
                            <li> <a href="">Nosso App</a></li>
                            <li> <a href="">Nosso site</a></li>
                            <li> <a href="">Nosso jogo</a></li>

                        </ul>
                        <ul className="box">
                            <li className="link_name">Conta</li>
                            <li> <a href="">Perfil</a></li>
                            <li> <a href="">Minha conta</a></li>
                            <li> <a href="">Preferências</a></li>

                        </ul>
                        <ul className="box">
                            <li className="link_name">Parceiros</li>
                            <li> <a href="">Seja um parceiro</a></li>
                            <li> <a href="">Área do parceiro</a></li>
                            <li> <a href="">Divulgação</a></li>

                        </ul>
                        <ul className="box input-box">
                            <li className="link_name">Se inscreva</li>
                            <li> <input type="text" placeholder="Digite seu e-mail" /></li>
                            <li> <input type="button" value="Enviar" /></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">Copyright © 2022 <a href=""></a>Todos os direitos reservados</span>
                        <span className="policy_terms">
                            <a href="">Política de privacidade</a>
                            <a href="">Termos & condições</a>
                        </span>
                    </div>
                </div>
            </footer>

        </div>
    )
};
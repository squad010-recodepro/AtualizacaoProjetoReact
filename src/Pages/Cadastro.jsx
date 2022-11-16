import React, { useEfectt, useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'



export default function Cadastro() {


    /*const navigate = useNavigate ();
    const [Usuario, setUsuario] = useState([]);

    const listarUsuario = async () => {
        try {
            await axios.get("/")
                .then((response) => {
                    setUsuario(response.data)
                })
        } catch (erro) {
            alert(erro.message);

        }
    };

    useEfectt(() => {
        listarUsuario();
    }, [])

    //Adiconar Usuario//
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const salvar = async (e) => {
        e.preventDefault();
        console.log(nome,email, senha);
        await axios.post("", {
            Nome: nome,
            Email: email,
            Senha: senha
        }).then (( result )=> {
            alert ("Cadastrado com sucesso.")
            navigate ("/home")
        }).catch ((erro) => {
            console.log (erro);
        })
    }*/
    return (
        <div>
            <main>
                <p className="container mt-8 row text-start">
                    <h4 className="text-success"> -Paulo Freire </h4>
                    <p> "Enquanto eu luto, sou movido pela esperança; e seu lutar com esperança, posso esperar".</p>
                </p>
                <h5 className="display-6 row-cols-3 text-center"> Faça seu cadastro</h5>

                <div className="Container">
                    <div className="py-4">
                        <table className="table table-striped border shadow" >
                            <thead>
                                <tr>
                                    <th></th>
                                    <th scope="col"> Nome</th>
                                    <th scope="col"> Email</th>
                                    <th scope="col"> Senha</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                    <tr>
                                        <td> Nome</td>
                                        <td> Email</td>
                                        <td> Senha</td>

                                        <button className=" btn btn-warning mx-2">
                                            Salvar
                                        </button>
                                        <button className=" btn btn-warning mx-2">
                                            Editar
                                        </button>
                                        <button className=" btn btn-danger mx-2">
                                            Excluir
                                        </button>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
};
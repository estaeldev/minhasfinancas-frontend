import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import axios from "axios";

function Home() {
    const [saldo, setSaldo] = useState(0)
    const navigate = useNavigate()

    const cadastrar = () => {
        navigate("/cadastro-usuario")
    }
    
    useEffect(() => {
        const usuarioLogado = JSON.parse(localStorage.getItem("_usuarioLogado"))
        axios.get(`http://localhost:8080/api/usuarios/${usuarioLogado.id}/saldo`)
        .then(response => {
            setSaldo(response.data)
        }).catch(() => {
            setSaldo(0)
        })

    }, [])
    
    return (
        <>
            <div className="navbar navbar-expand-lg bg-light container-home">
                <div className="jumbotron">
                    <h1 className="display-3">Bem vindo!</h1>
                    <p className="lead">Esse é seu sistema de finanças.</p>
                    <p className="lead">Seu saldo para o mês atual é de R$ {saldo}</p>
                    <hr className="my-4"></hr>
                    <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                    <div className="button-group">
                        <Link onClick={cadastrar} className="btn btn-primary btn-lg" to={"/cadastro-usuario"}>Cadastrar Usuário</Link>
                        <Link className="btn btn-danger btn-lg" to={"/"}>Cadastrar Lançamento</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
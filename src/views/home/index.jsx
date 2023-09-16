import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonGroup from "../../components/button-group";
import LocalStorage from "../../service/localstorageService";
import UsuarioService from "../../service/usuarioService";
import "./style.scss";

function Home() {
    const [saldo, setSaldo] = useState(0)
    const usuarioService = UsuarioService()
    const localStorageService = LocalStorage()

    useEffect(() => {
        const usuarioLogado = localStorageService.getItem("_usuarioLogado")
        usuarioService.obterSaldoPorIdUsuario(`${usuarioLogado.id}`)
        .then(response => {
            setSaldo(response.data)
        }).catch(() => {
            setSaldo(0)
        })

    }, [usuarioService, localStorageService])
    
    return (
        <>
            <div className="navbar navbar-expand-lg bg-light container-home">
                <div className="jumbotron">
                    <h1 className="display-3">Bem vindo!</h1>
                    <p className="lead">Esse é seu sistema de finanças.</p>
                    <p className="lead">Seu saldo para o mês atual é de R$ {saldo}</p>
                    <hr className="my-4"></hr>
                    <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                    <ButtonGroup>
                        <Link className="btn btn-primary btn-lg" 
                              to={"/cadastro-usuario"}>
                              <i className="pi pi-users"></i> Cadastrar Usuário
                        </Link>
                        <Link className="btn btn-danger btn-lg"
                              to={"/cadastro-lancamentos"}>
                              <i className="pi pi-money-bill"></i> Cadastrar Lançamento
                        </Link>
                    </ButtonGroup>
                </div>
            </div>
        </>
    )
}

export default Home
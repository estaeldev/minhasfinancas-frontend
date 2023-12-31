import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonGroup from "../../components/button-group";
import * as mensagem from "../../components/toastr";
import useProvedorAutenticacaoContext from "../../hook/useProvedorAutenticacaoContext";
import UsuarioService from "../../service/usuarioService";
import "./style.scss";

function Home() {
    const [saldo, setSaldo] = useState(0)
    const usuarioService = UsuarioService()
    const {usuarioAutenticado, encerrarSessao} = useProvedorAutenticacaoContext()
    
    useEffect(() => {
        const usuario = usuarioAutenticado.usuario
        usuarioService.obterSaldoPorIdUsuario(`${usuario.id}`)
        .then(response => {
            setSaldo(response.data)
        }).catch(() => {
            encerrarSessao()
            mensagem.mensagemErro("Seu Token está invalido, por favor faça login novamente!")
        })
        
    }, [encerrarSessao, usuarioAutenticado.usuario, usuarioService])
    
    return (
        <>
            <div className="navbar navbar-expand-lg bg-light container-home">
                <div className="jumbotron">
                    <h1 className="display-3">Bem vindo!</h1>
                    <p style={{fontSize: "20px"}}> <strong>{usuarioAutenticado.usuario.nome}</strong>, Esse é seu sistema de finanças.</p>
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
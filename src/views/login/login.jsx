import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import ButtonGroup from "../../components/button-group"
import Card from "../../components/card"
import FormGroup from "../../components/form-group"
import { mensagemErro, mensagemSucesso } from "../../components/toastr"
import useProvedorAutenticacaoContext from "../../hook/useProvedorAutenticacaoContext"
import UsuarioService from "../../service/usuarioService"
import "./login.scss"

function Login() {
    const [email, setEmail] = useState("") 
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()
    const service = UsuarioService()
    const {iniciarSessao} = useProvedorAutenticacaoContext()
    
    const entrar = async () => {
        await service.autenticar({
            email: email,
            senha: senha
        }).then((response) => {
            iniciarSessao(response.data)
            mensagemSucesso("Usuario logado com sucesso!")
            navigate("/home")
        }).catch(error => {
            mensagemErro(error.response.data.message)
        })
    }
    
    const cadastrar = () => {
        navigate('/cadastro-usuario');
    }

    return (
        <>  
            <div className="container-login">

                <Card label="Login">

                    <FormGroup label="Email: *">
                        <input type="email" 
                                onChange={event => setEmail(event.target.value)}
                                className="form-control" 
                                placeholder="Enter email">
                        </input>
                    </FormGroup>
                    
                    <FormGroup label="Senha: *">
                        <input type="password" 
                                onChange={event => setSenha(event.target.value)}
                                className="form-control" 
                                placeholder="Password">
                        </input>
                    </FormGroup>
                    
                    <ButtonGroup>
                        <button onClick={entrar} 
                                type="button" 
                                className="btn btn-success">
                                <i className="pi pi-sign-in"></i> Entrar
                        </button>
                        <button onClick={cadastrar} 
                                type="button" 
                                className="btn btn-primary">
                                <i className="pi pi-plus"></i> Cadastrar
                        </button>
                    </ButtonGroup>
                    
                </Card>

            </div>

        </>
    )
}


export default Login


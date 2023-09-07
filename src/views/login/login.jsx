import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import FormGroup from "../../components/form-group"
import { mensagemErro, mensagemSucesso } from "../../components/toastr"
import LocalStorage from "../../service/localstorageService"
import UsuarioService from "../../service/usuarioService"
import "./login.scss"
import Card from "../../components/card"
import ButtonGroup from "../../components/button-group"

function Login() {
    const [email, setEmail] = useState("") 
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()
    const service = UsuarioService()
    const localStorageService = LocalStorage()
    
    const entrar = async () => {
        await service.autenticar({
            email: email,
            senha: senha
        }).then((response) => {
            localStorageService.addItem("_usuarioLogado", response.data)
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
                        <button onClick={entrar} type="button" className="btn btn-success">Entrar</button>
                        <button onClick={cadastrar} type="button" className="btn btn-danger">Cadastrar</button>
                    </ButtonGroup>
                    
                </Card>

            </div>

        </>
    )
}


export default Login


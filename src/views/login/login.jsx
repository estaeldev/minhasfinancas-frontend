import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import FormGroup from "../../components/form-group"
import { mensagemErro, mensagemSucesso } from "../../components/toastr"
import LocalStorage from "../../service/localstorageService"
import UsuarioService from "../../service/usuarioService"
import "./login.scss"

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

                <div className="card border-primary mb-3">

                    <div className="card-header">
                        <h2>Login</h2>
                    </div>
                    
                    <form className="card-body">
                        <div className="form-group">
                            <FormGroup label="Email: *">
                                <input type="email" 
                                        onChange={event => setEmail(event.target.value)}
                                        className="form-control" 
                                        placeholder="Enter email">
                                </input>
                            </FormGroup>
                        </div>
                        <div className="form-group">
                            <FormGroup label="Senha: *">
                                <input type="password" 
                                        onChange={event => setSenha(event.target.value)}
                                        className="form-control" 
                                        placeholder="Password">
                                </input>
                            </FormGroup>
                        </div>
                        <div className="button-group">
                            <button onClick={entrar} type="button" className="btn btn-success">Entrar</button>
                            <button onClick={cadastrar} type="button" className="btn btn-danger">Cadastrar</button>
                        </div>
                    </form>

                </div>

            </div>

        </>
    )
}


export default Login


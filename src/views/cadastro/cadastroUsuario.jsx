import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import ButtonGroup from "../../components/button-group"
import Card from "../../components/card"
import FormGroup from "../../components/form-group"
import { mensagemErro, mensagemSucesso } from "../../components/toastr"
import useProvedorAutenticacaoContext from "../../hook/useProvedorAutenticacaoContext"
import UsuarioService from "../../service/usuarioService"
import "./cadastro.scss"

function CadastroUsuario() {

    const {usuarioAutenticado} = useProvedorAutenticacaoContext()

    const [usuarioDto, setUsuarioDto] = useState({
        nome: "",
        email: "",
        senha: "",
    })
    const [senhaRepeticao, setSenhaRepeticao] = useState("")
    const navigate = useNavigate()
    const service = UsuarioService()
    
    const cadastrar = async () => {

        try {
            service.validar({...usuarioDto, senhaRepeticao: senhaRepeticao})
        } catch (error) {
            const mensagens = error.mensagens
            mensagens.forEach(msg => mensagemErro(msg))
            return
        }
        
        await service.salvar(usuarioDto)
            .then(() => {
                mensagemSucesso("Usuário cadastrado com sucesso! Faça login para acessar o sistema.")
                handleCancelarButton()
            }).catch(error => {
                mensagemErro(error.response.data.message)
            })
    }
    
    const handleCancelarButton = () => {
        if(usuarioAutenticado.isAutenticado) {
            navigate("/home")
        } else {
            navigate("/login")
        }
    }
    
    
    return (
        <>
            <div className="container-cadastro">

                <Card label="Cadastro de Usúario"> 

                    <FormGroup label="Nome: *">
                        <input type="text" 
                                onChange={event => setUsuarioDto({...usuarioDto, nome: event.target.value})}
                                className="form-control" 
                                placeholder="Digite o Nome">
                        </input>
                    </FormGroup>
                
                
                    <FormGroup label="Email: *">
                        <input type="email" 
                                onChange={event => setUsuarioDto({...usuarioDto, email: event.target.value})}
                                className="form-control" 
                                placeholder="Digite o Email">
                        </input>
                        <small className="form-text text-muted">Não divulgamos o seu email.</small>
                    </FormGroup>
                
                
                    <FormGroup label="Senha: *">
                        <input type="password" 
                                onChange={event => setUsuarioDto({...usuarioDto, senha: event.target.value})}
                                className="form-control" 
                                placeholder="Password">
                        </input>
                    </FormGroup>
                
                
                    <FormGroup label="Repita a Senha: *">
                        <input type="password" 
                                onChange={event => setSenhaRepeticao(event.target.value)}
                                className="form-control" 
                                placeholder="Password">
                        </input>
                    </FormGroup>
                    
                    <ButtonGroup>
                        <button onClick={cadastrar} 
                                type="button" 
                                className="btn btn-success">
                                <i className="pi pi-save"></i> Salvar
                        </button>
                        <button onClick={handleCancelarButton} 
                                type="button" 
                                className="btn btn-danger">
                                <i className="pi pi-times"></i> Cancelar
                        </button>
                    </ButtonGroup>

                </Card>

            </div>
        </>
    )

}


export default CadastroUsuario
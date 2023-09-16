import React from "react"
import { useNavigate } from "react-router-dom"
import Card from "../../components/card"
import FormGroup from "../../components/form-group"
import { mensagemErro, mensagemSucesso } from "../../components/toastr"
import UsuarioService from "../../service/usuarioService"
import "./cadastro.scss"
import ButtonGroup from "../../components/button-group"

class CadastroUsuario extends React.Component {

    constructor() {
        super()
        this.service = UsuarioService()
    }
    
    state = {
        nome: "",
        email: "",
        senha: "",
        senhaRepeticao: ""
    }

    cadastrar = () => {
        const usuario = {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
        }

        try {
            this.service.validar({...usuario, senhaRepeticao: this.state.senhaRepeticao})
        } catch (error) {
            const mensagens = error.mensagens
            mensagens.forEach(msg => mensagemErro(msg))
            return
        }
        
        this.service.salvar(usuario)
            .then(() => {
                mensagemSucesso("Usuário cadastrado com sucesso! Faça login para acessar o sistema.")
                this.props.navigate("/login")
            }).catch(error => {
                mensagemErro(error.response.data.message)
            })
    }
    
    render() {
        return (
            <>
                <div className="container-cadastro">

                    <Card label="Cadastro de Usúario"> 

                        <FormGroup label="Nome: *">
                            <input type="text" 
                                    onChange={event => this.setState({nome: event.target.value})}
                                    className="form-control" 
                                    placeholder="Digite o Nome">
                            </input>
                        </FormGroup>
                    
                    
                        <FormGroup label="Email: *">
                            <input type="email" 
                                    onChange={event => this.setState({email: event.target.value})}
                                    className="form-control" 
                                    placeholder="Digite o Email">
                            </input>
                            <small className="form-text text-muted">Não divulgamos o seu email.</small>
                        </FormGroup>
                    
                    
                        <FormGroup label="Senha: *">
                            <input type="password" 
                                    onChange={event => this.setState({senha: event.target.value})}
                                    className="form-control" 
                                    placeholder="Password">
                            </input>
                        </FormGroup>
                    
                    
                        <FormGroup label="Repita a Senha: *">
                            <input type="password" 
                                    onChange={event => this.setState({senhaRepeticao: event.target.value})}
                                    className="form-control" 
                                    placeholder="Password">
                            </input>
                        </FormGroup>
                        
                        <ButtonGroup>
                            <button onClick={this.cadastrar} 
                                    type="button" 
                                    className="btn btn-success">
                                    <i className="pi pi-save"></i> Salvar
                            </button>
                            <button onClick={() => this.props.navigate("/login")} 
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

}

const withNavigation = (Component) => {
    return props => <Component {...props} navigate={useNavigate()} />;
} 

export default withNavigation(CadastroUsuario)
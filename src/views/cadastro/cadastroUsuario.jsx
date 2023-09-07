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
        const msgs = this.validar()
        if(msgs && msgs.length > 0) {
            msgs.forEach(msg => {
                mensagemErro(msg)
            })
            return false
        }
        
        const usuario = {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
        }

        this.service.salvar(usuario)
            .then(() => {
                mensagemSucesso("Usuário cadastrado com sucesso! Faça login para acessar o sistema.")
                this.props.navigate("/login")
            }).catch(error => {
                mensagemErro(error.response.data.message)
            })
    }
    
    validar() {
        const msgs = []

        if(!this.state.nome) {
            msgs.push("O campo nome é obrigatório")
        }

        if(!this.state.email) {
            msgs.push("O campo Email é obrigatório")
        } else if(!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
            msgs.push("Informe um Email válido")
        }

        if(!this.state.senha || !this.state.senhaRepeticao) {
            msgs.push("Digite a senha 2 vezes!")
        } else if(this.state.senha !== this.state.senhaRepeticao) {
            msgs.push("As senhas são diferentes")
        }
        
        return msgs

    }

    voltar = () => {
        this.props.navigate("/login")
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
                            <button onClick={this.cadastrar} type="button" className="btn btn-success">Salvar</button>
                            <button onClick={this.voltar} type="button" className="btn btn-danger">Cancelar</button>
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
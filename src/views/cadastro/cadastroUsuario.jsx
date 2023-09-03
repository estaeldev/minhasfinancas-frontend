import React from "react"
import FormGroup from "../../components/form-group"
import "./cadastro.scss"
import { useNavigate } from "react-router-dom"

class CadastroUsuario extends React.Component {

    state = {
        nome: "",
        email: "",
        senha: "",
        senhaRepeticao: ""
    }

    cadastrar = () => {
        console.log(this.state)
    }

    voltar = () => {
        this.props.navigate("/login")
    }
    
    render() {
        return (
            <>
                <div className="container">

                    <div className="card border-primary mb-3">

                        <div className="card-header">
                            <h2>Cadastro de Usúario</h2> 
                        </div>
                        
                        <form className="card-body">
                            <div className="form-group">
                                <FormGroup label="Nome: *">
                                    <input type="text" 
                                            onChange={event => this.setState({nome: event.target.value})}
                                            className="form-control" 
                                            placeholder="Digite o Nome">
                                    </input>
                                </FormGroup>
                            </div>
                            <div className="form-group">
                                <FormGroup label="Email: *">
                                    <input type="email" 
                                            onChange={event => this.setState({email: event.target.value})}
                                            className="form-control" 
                                            placeholder="Digite o Email">
                                    </input>
                                    <small className="form-text text-muted">Não divulgamos o seu email.</small>
                                </FormGroup>
                            </div>
                            <div className="form-group">
                                <FormGroup label="Senha: *">
                                    <input type="password" 
                                            onChange={event => this.setState({senha: event.target.value})}
                                            className="form-control" 
                                            placeholder="Password">
                                    </input>
                                </FormGroup>
                            </div>
                            <div className="form-group">
                                <FormGroup label="Repita a Senha: *">
                                    <input type="password" 
                                            onChange={event => this.setState({senhaRepeticao: event.target.value})}
                                            className="form-control" 
                                            placeholder="Password">
                                    </input>
                                </FormGroup>
                            </div>
                            <div className="button-group">
                                <button onClick={this.cadastrar} type="button" className="btn btn-success">Salvar</button>
                                <button onClick={this.voltar} type="button" className="btn btn-danger">Voltar</button>
                            </div>
                        </form>

                    </div>

                </div>
            </>
        )
    }

}

const withNavigation = (Component) => {
    return props => <Component {...props} navigate={useNavigate()} />;
} 

export default withNavigation(CadastroUsuario)
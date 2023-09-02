import React from "react"
import FormGroup from "../../components/form-group"
import "./login.scss"

class Login extends React.Component {

    state = {
        email: "",
        senha: ""
    }

    entrar = () => {
        console.log("Email: ", this.state.email)
        console.log("Senha: ", this.state.senha)
    }

    render() {
        return (
            <>
                <div className="container">

                    <div className="card border-primary mb-3">

                        <div className="card-header">
                            <h2>Login</h2>
                        </div>
                        
                        <form className="card-body">
                            <div className="form-group">
                                <FormGroup label="Email: *">
                                    <input type="email" 
                                            onChange={event => this.setState({email: event.target.value})}
                                            className="form-control" 
                                            placeholder="Enter email">
                                    </input>
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
                            <div className="button-group">
                                <button onClick={this.entrar} type="button" className="btn btn-success">Entrar</button>
                                <button type="button" className="btn btn-danger">Cadastrar</button>
                            </div>
                        </form>

                    </div>

                </div>

            </>
        )
    }

}

export default Login
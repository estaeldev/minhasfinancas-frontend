import React, { useState } from "react"
import AuthService from "../service/AuthService"


export const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer

function ProvedorAutenticacao(props) {

    const [usuarioAutenticado, setUsuarioAutenticado] = useState({
        usuario: null,
        isAutenticado: false
    })

    const iniciarSessao = (usuario) => {
        AuthService().logar(usuario)
        setUsuarioAutenticado({usuario: usuario, isAutenticado: true})
    }   

    const encerrarSessao = () => {
        AuthService().removerUsuarioAutenticado()
        setUsuarioAutenticado({usuario: null, isAutenticado: false})
    }
    
    const context = {
        usuarioAutenticado: usuarioAutenticado,
        iniciarSessao,
        encerrarSessao
    }
    
    return (
        <>  
            <AuthContext.Provider value={context}>
                {props.children}
            </AuthContext.Provider>
        </>
    )
    
}

export default ProvedorAutenticacao
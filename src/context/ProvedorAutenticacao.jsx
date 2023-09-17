import React, { useEffect, useState } from "react"
import AuthService from "../service/AuthService"

export const AuthContext = React.createContext()

function ProvedorAutenticacao(props) {
    
    const AuthProvider = AuthContext.Provider
    
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
        usuarioAutenticado, setUsuarioAutenticado, iniciarSessao, encerrarSessao
    }

    useEffect(() => {
        if(AuthService().isUsuarioAutenticado()) {
            const usuario = AuthService().obterUsuarioAutenticado()
            setUsuarioAutenticado({usuario, isAutenticado: true})
        } else {
            encerrarSessao()
        }
        
    }, [])
    
    return (
        <>  
            <AuthProvider value={context}>
                {props.children}
            </AuthProvider>
        </>
    )
    
}

export default ProvedorAutenticacao
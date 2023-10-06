import jwtDecode from "jwt-decode"
import React, { useEffect, useState } from "react"
import AuthService from "../service/AuthService"

export const AuthContext = React.createContext()

function ProvedorAutenticacao(props) {
    
    const AuthProvider = AuthContext.Provider
    
    const [usuarioAutenticado, setUsuarioAutenticado] = useState({
        usuario: null,
        isAutenticado: false
    })

    const iniciarSessao = (token) => {
        const {id, nome} = jwtDecode(token)
        const usuario = {id, nome}
        AuthService().logar(usuario, token)
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
            const usuario = AuthService().atualizarSecao()
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
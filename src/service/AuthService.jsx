import jwtDecode from "jwt-decode"
import { registrarToken } from "../config/apiconfig"
import LocalStorageService from "./localstorageService"

function AuthService() {

    const USUARIO_LOGADO = "_usuarioLogado"
    const TOKEN = "acess_token"

    const isUsuarioAutenticado = () => {
        const token = LocalStorageService().getItem(TOKEN)
        if(token !== null || undefined) {
            const claims = jwtDecode(token)
            const expiration = claims.exp
            if(Date.now() <= (expiration * 1000)) {
                return true
            }
        }
        return false
    }
    
    const removerUsuarioAutenticado = () => {
        LocalStorageService().removerItem(USUARIO_LOGADO)
        LocalStorageService().removerItem(TOKEN)
    }

    const logar = (usuario, token) => {
        LocalStorageService().addItem(USUARIO_LOGADO, usuario)
        LocalStorageService().addItem(TOKEN, token)
        registrarToken(token)
    }
    
    const obterUsuarioAutenticado = () => {
       return LocalStorageService().getItem(USUARIO_LOGADO)
    }

    const atualizarSecao = () => {
        const token = LocalStorageService().getItem(TOKEN)
        const usuario = obterUsuarioAutenticado()
        logar(usuario, token)
        return usuario
    }

    return {isUsuarioAutenticado, removerUsuarioAutenticado, logar, obterUsuarioAutenticado, atualizarSecao}

}

export default AuthService
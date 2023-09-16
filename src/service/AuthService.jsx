import LocalStorageService from "./localstorageService"

function AuthService() {

    const USUARIO_LOGADO = "_usuarioLogado"

    const isUsuarioAutenticado = () => {
        const usuario = LocalStorageService().getItem(USUARIO_LOGADO)
        if(usuario !== null | undefined && usuario.id !== null | undefined) {
            return true
        }
        
    }

    const removerUsuarioAutenticado = () => {
        LocalStorageService().removerItem(USUARIO_LOGADO)
    }

    return {isUsuarioAutenticado, removerUsuarioAutenticado}

}

export default AuthService
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

    const logar = (usuario) => {
        LocalStorageService().addItem(USUARIO_LOGADO, usuario)
    }
    
    const obterUsuarioAutenticado = () => {
       return LocalStorageService().getItem(USUARIO_LOGADO)
    }

    return {isUsuarioAutenticado, removerUsuarioAutenticado, logar, obterUsuarioAutenticado}

}

export default AuthService
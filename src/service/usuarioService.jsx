import ApiService from "../config/apiconfig";

function UsuarioService() {

    const apiService = ApiService({apiUrl: "/api/usuarios"})

    const autenticar = (credenciais) => {
        return apiService.post("/auth", credenciais)
    }

    const obterSaldoPorIdUsuario = (usuarioId) => {
        return apiService.get(`/${usuarioId}/saldo`)
    }

    const salvar = (usuario) => {
        return apiService.post("", usuario)
    }
    
    return {
        autenticar, obterSaldoPorIdUsuario, salvar
    }

}

export default UsuarioService


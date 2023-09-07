import ApiService from "../config/apiconfig";

function UsuarioService() {

    const apiService = ApiService({apiUrl: "/api/usuarios"})

    const autenticar = (credenciais) => {
        return apiService.post("/auth", credenciais)
    }

    const obterSaldoPorIdUsuario = (usuarioId) => {
        return apiService.get(`/${usuarioId}/saldo`)
    }
        
    return {
        autenticar, obterSaldoPorIdUsuario
    }

}

export default UsuarioService


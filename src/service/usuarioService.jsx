import ApiService from "../config/apiconfig";

function UsuarioService() {

    const apiService = ApiService({apiUrl: "/api/usuarios"})

    const autenticar = (credenciais) => {
        return apiService.post("/auth", credenciais)
    }
    
    return {
        autenticar
    }

}

export default UsuarioService


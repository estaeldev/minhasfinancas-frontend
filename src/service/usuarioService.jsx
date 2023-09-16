import ApiService from "../config/apiconfig";
import ErroValidacao from "../exception/ErroValidacao";

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

    const validar = (usuario) => {
        const erros = []

        if(!usuario.nome) {
            erros.push("O campo nome é obrigatório")
        }

        if(!usuario.email) {
            erros.push("O campo Email é obrigatório")
        } else if(!usuario.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
            erros.push("Informe um Email válido")
        }
        
        if(!usuario.senha || !usuario.senhaRepeticao) {
            erros.push("Digite a senha 2 vezes!")
        } else if(usuario.senha !== usuario.senhaRepeticao) {
            erros.push("As senhas são diferentes")
        }
        
        if(erros.length > 0) {
            throw new ErroValidacao(erros)
        }

    }
    
    return {
        autenticar, obterSaldoPorIdUsuario, salvar, validar
    }

}

export default UsuarioService


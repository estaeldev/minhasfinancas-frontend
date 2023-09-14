import ApiService from "../config/apiconfig";

function LancamentoService() {
    
    const apiService = ApiService({apiUrl: "/api/lancamentos"})

    const obterListaMeses = [
        {label: "Selecione...", value: ""},
        {label: "Janeiro", value:1},
        {label: "Fevereiro", value:2},
        {label: "Março", value:3},
        {label: "Abril", value:4},
        {label: "Maio", value:5},
        {label: "Junho", value:6},
        {label: "Julho", value:7},
        {label: "Agosto", value:8},
        {label: "Setembro", value:9},
        {label: "Outubro", value:10},
        {label: "Novembro", value:11},
        {label: "Dezembro", value:12}
    ]
    
    const obterTiposLancamento = [
        {label: "Selecione...", value: ""},
        {label: "Despesa", value: "DESPESA"},
        {label: "Receita", value: "RECEITA"} 
    ]

    const buscar = (lancamentoFiltro) => {
        return apiService.get("", {
            params: {
                descricao: lancamentoFiltro.descricao,
                ano: lancamentoFiltro.ano,
                mes: lancamentoFiltro.mes,
                tipo: lancamentoFiltro.tipo,
                usuarioId: lancamentoFiltro.usuarioId
            }
        })
    }

    const buscarPorId = (id) => {
        return apiService.get(`/${id}`)
    }
    
    const deletar = (id) => {
        return apiService.remove(`/${id}`)
    }
    
    const salvar = (url, object, config) => {
        return apiService.post(url, object, config)
    }

    const atualizar = (url, object) => {
        return apiService.put(url, object)
    }
    
    return (
        {buscar, deletar, salvar, buscarPorId, atualizar,obterListaMeses, obterTiposLancamento}
    )
    
}

export default LancamentoService
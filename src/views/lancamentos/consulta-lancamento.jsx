import { useState } from "react"
import ButtonGroup from "../../components/button-group"
import Card from "../../components/card"
import FormGroup from "../../components/form-group"
import SelectMenu from "../../components/select-menu"
import { mensagemAlerta, mensagemErro, mensagemSucesso } from "../../components/toastr"
import LancamentoService from "../../service/LancamentoService"
import LocalStorage from "../../service/localstorageService"
import LancamentoTable from "./LancamentosTable"
import "./style.scss"

function ConsultaLancamento() {

    const [ano, setAno] = useState()
    const [mes, setMes] = useState()
    const [tipo, setTipo] = useState()
    const [descricao, setDescricao] = useState()
    const [lancamentos, setLancamentos] = useState([])
    
    const lancamentoService = LancamentoService()

    const buscar = async () => {
        if(!ano || String(ano).length !== 4) {
            mensagemErro("Informe um ano válido para filtrar.")
            return false
        }
        
        const {id} = LocalStorage().getItem("_usuarioLogado")

        const lancamentoFiltro = {
            descricao: descricao,
            ano: ano,
            mes: mes,
            tipo: tipo,
            usuarioId: id
        }
        
        await lancamentoService.buscar(lancamentoFiltro)
        .then(response => {
            if(response.data.length === 0) {
                setLancamentos([])
                mensagemAlerta("Nenhum lançamento encontrado!")
                return
            }
            setLancamentos(response.data)
        }).catch(error => {
            console.log(error.response)
        })
    }   

    const deletar = async (lancamento) => {
        await lancamentoService.deletar(lancamento.id)
        .then(() => {
            const index = lancamentos.indexOf(lancamento)
            lancamentos.splice(index, 1)
            setLancamentos([...lancamentos])
            mensagemSucesso("Lançamento deletado com sucesso!")
        }).catch(() => {
            mensagemErro("Ocorreu um erro ao tentar deletar um lançamento")
        })
        
    }

    const editar = (id) => {
        console.log("Editando o lancamento id: ", id);
    }

    return (
        <>
            <div className="container-consulta-lacamento">

                <Card label="Consulta Lancamento">

                    <FormGroup label="Ano: *">
                        <input type="number" 
                                onChange={event => setAno(event.target.value)}
                                className="form-control" 
                                placeholder="Digite o ano">
                        </input>
                        <small className="form-text text-muted">Ex. (yyyy)</small>
                    </FormGroup>

                    <FormGroup label="Descrição:">
                        <input type="text" 
                                onChange={event => setDescricao(event.target.value)}
                                className="form-control" 
                                placeholder="Digite o ano">
                        </input>
                    </FormGroup>
                    
                    <FormGroup label="Mês:">
                        <SelectMenu lista={lancamentoService.obterListaMeses} onChange={setMes} />
                    </FormGroup>

                    <FormGroup label="Tipo Lançamento:">
                        <SelectMenu lista={lancamentoService.obterTiposLancamento} onChange={setTipo} />
                    </FormGroup>
                    
                    <ButtonGroup>
                        <button onClick={buscar} type="button" className="btn btn-success">Buscar</button>
                        <button type="button" className="btn btn-danger">Cadastrar</button>
                    </ButtonGroup>
                    
                </Card>

                
                <LancamentoTable lancamentos={lancamentos} editarAction={editar} deletarAction={deletar} />
                
            </div>

        </>
    )
}

export default ConsultaLancamento
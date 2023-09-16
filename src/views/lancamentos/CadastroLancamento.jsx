import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ButtonGroup from "../../components/button-group"
import Card from "../../components/card"
import FormGroup from "../../components/form-group"
import SelectMenu from "../../components/select-menu"
import * as messages from "../../components/toastr"
import LancamentoService from "../../service/LancamentoService"
import LocalStorage from "../../service/localstorageService"

function CadastroLancamento() {

    const [lancamento, setLancamento] = useState({
        id: '',
        descricao: '',
        valor: '',
        mes: '',
        ano: '',
        tipo: '',
        status: '',
        usuarioId: ''
    })
    const [atualizando, setAtualizando] = useState(false)
    const {id} = useParams()
    
    const navigate = useNavigate()
    const lancamentoService = LancamentoService()
    const listaTipoLancamento = lancamentoService.obterTiposLancamento
    const listaMeses = lancamentoService.obterListaMeses
    
    const handleChange = (event) => {
        const value = event.target.value
        const nome = event.target.name
        setLancamento({...lancamento, [nome]: value})
    }
    
    const salvarLancamento = async () => {
        const {id} = LocalStorage().getItem("_usuarioLogado")
        const lancamentoRequest = {...lancamento, usuarioId: id}
        
        try {
            lancamentoService.validar(lancamentoRequest)
        } catch (error) {
            const mensagens = error.mensagens
            mensagens.forEach(msg => messages.mensagemErro(msg))
            return false
        }

        await lancamentoService.salvar("", lancamentoRequest, null)
        .then(() => {
            navigate("/lancamentos")
            messages.mensagemSucesso("Lançamento cadastrado com sucesso!")
        }).catch(() => {
            messages.mensagemErro("Error ao cadastrar um lançamento! Verifique os campos obrigatorios.")
        })
        
    }

    const atualizar = async () => {
        const {id, descricao, valor, mes, ano, tipo, status, usuarioId} = lancamento
        const lancamentoRequest = {id, descricao, valor, mes, ano, tipo, status, usuarioId}

        await lancamentoService.atualizar("", lancamentoRequest)
        .then(() => {
            navigate("/lancamentos")
            messages.mensagemSucesso("Lançamento atualizado com sucesso!")
        }).catch(() => {
            messages.mensagemErro("Error ao atualizar um lançamento! Verifique os campos obrigatorios.")
        })
    }

    useEffect(() => {
        if(id) {
            lancamentoService.buscarPorId(id)
            .then(response => {
                setLancamento({...response.data})
                setAtualizando(true)
            }).catch(error => {
                console.log(error.response.data)
            })
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
    
    return (
        <>
            <div className="containei-cadastro-lancamento">

                <Card label={atualizando? "Atualização de Lançamento" : "Cadastro de Lançamento"}>

                    <FormGroup label="Descrição: *">
                        <input type="text" 
                                name="descricao"
                                value={lancamento.descricao}
                                onChange={handleChange}
                                className="form-control" 
                                placeholder="Descrição...">
                        </input>
                    </FormGroup>

                    <div className="row">
                        <div className="col-md-6">
                            <FormGroup label="Ano: *">
                                <input type="number" 
                                        name="ano"
                                        value={lancamento.ano}
                                        onChange={handleChange}
                                        className="form-control" 
                                        placeholder="Ano...">
                                </input>
                            </FormGroup>
                        </div>
                        <div className="col-md-6">
                            <FormGroup label="Mês: *">
                                <SelectMenu lista={listaMeses} value={lancamento.mes} name="mes" onChange={handleChange} />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <FormGroup label="Valor: *">
                                <input type="number" 
                                        name="valor"
                                        value={lancamento.valor}
                                        onChange={handleChange}
                                        className="form-control" 
                                        placeholder="Valor...">
                                </input>
                            </FormGroup>
                        </div>

                        <div className="col-md-4">
                            <FormGroup label="Tipo: *">
                                <SelectMenu lista={listaTipoLancamento} value={lancamento.tipo} name="tipo" onChange={handleChange} />
                            </FormGroup>
                        </div>

                        <div className="col-md-4">
                            <FormGroup label="Status: *">
                                <input type="text" disabled className="form-control" value={lancamento.status} />
                            </FormGroup>
                        </div>
                    </div>

                    <ButtonGroup>
                        {atualizando? (
                            <button onClick={atualizar} 
                                    type="button" 
                                    className="btn btn-success">
                                    <i className="pi pi-refresh"></i> Atualizar
                            </button>
                        ) : (
                            <button onClick={salvarLancamento} 
                                    type="button" 
                                    className="btn btn-success">
                                    <i className="pi pi-save"></i> Salvar
                            </button>
                        )}
                        <button onClick={() => 
                                navigate("/lancamentos")} 
                                type="button" 
                                className="btn btn-danger">
                                <i className="pi pi-times"></i> Cancelar
                        </button>
                    </ButtonGroup>
                    
                </Card>

            </div>
        </>
    )

}

export default CadastroLancamento
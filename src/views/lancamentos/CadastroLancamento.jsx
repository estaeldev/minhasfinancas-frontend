import { useState } from "react"
import ButtonGroup from "../../components/button-group"
import Card from "../../components/card"
import FormGroup from "../../components/form-group"
import SelectMenu from "../../components/select-menu"
import LancamentoService from "../../service/LancamentoService"
import * as messages from "../../components/toastr"
import LocalStorage from "../../service/localstorageService"
import { useNavigate } from "react-router-dom"

function CadastroLancamento() {

    const [lancamento, setLancamento] = useState({
        id: null,
        descricao: null,
        valor: null,
        mes: null,
        ano: null,
        tipo: null,
        status: null
    })
    
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
        const {descricao, valor, mes, ano, tipo} = lancamento
        const lancamentoRequest = {descricao, valor, mes, ano, tipo, usuarioId: id}

        await lancamentoService.salvar("", lancamentoRequest, null)
        .then(() => {
            navigate("/lancamentos")
            messages.mensagemSucesso("Lançamento cadastrado com sucesso!")
        }).catch(() => {
            messages.mensagemErro("Error ao cadastrar um lançamento! Verifique os campos obrigatorios.")
        })
        
    }

    return (
        <>
            <div className="containei-cadastro-lancamento">

                <Card label="Cadastro Lancamento">

                    <FormGroup label="Descrição: *">
                        <input type="text" 
                                name="descricao"
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
                                        onChange={handleChange}
                                        className="form-control" 
                                        placeholder="Ano...">
                                </input>
                            </FormGroup>
                        </div>
                        <div className="col-md-6">
                            <FormGroup label="Mês: *">
                               <SelectMenu lista={listaMeses} name="mes" onChange={handleChange} />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <FormGroup label="Valor: *">
                                <input type="number" 
                                        name="valor"
                                        onChange={handleChange}
                                        className="form-control" 
                                        placeholder="Valor...">
                                </input>
                            </FormGroup>
                        </div>

                        <div className="col-md-4">
                            <FormGroup label="Tipo: *">
                                <SelectMenu lista={listaTipoLancamento} name="tipo" onChange={handleChange} />
                            </FormGroup>
                        </div>

                        <div className="col-md-4">
                            <FormGroup label="Status: *">
                                <input type="text" disabled className="form-control" />
                            </FormGroup>
                        </div>
                    </div>

                    <ButtonGroup>
                        <button onClick={salvarLancamento} type="button" className="btn btn-success">Salvar</button>
                        <button onClick={() => navigate("/lancamentos")} type="button" className="btn btn-danger">Cancelar</button>
                    </ButtonGroup>
                    
                </Card>

            </div>
        </>
    )

}

export default CadastroLancamento
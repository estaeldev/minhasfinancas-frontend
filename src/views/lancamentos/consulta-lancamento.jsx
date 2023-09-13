import { ConfirmDialog } from "primereact/confirmdialog"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
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

    const [lancamentoFiltro, setLancamentoFiltro] = useState({
        ano: null,
        mes: null,
        tipo: null,
        descricao: null,
        usuarioId: null
    })
    const [lancamentos, setLancamentos] = useState([])
    const [showDialogDelete, setDialogDelete] = useState({visible: false, lancamento: null})
    
    const lancamentoService = LancamentoService()
    const navigate = useNavigate()

    const buscar = async () => {
        const ano = lancamentoFiltro.ano
        if(!ano || String(ano).length !== 4) {
            mensagemErro("Informe um ano válido para filtrar.")
            return false
        }
        
        const {id} = LocalStorage().getItem("_usuarioLogado")

        await lancamentoService.buscar({...lancamentoFiltro, usuarioId: id})
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

    const cadastrar = () => {
        navigate("/cadastro-lancamentos")
    }
    
    const handleChange = (event) => {
        const value = event.target.value
        const nome = event.target.name
        setLancamentoFiltro({...lancamentoFiltro, [nome]: value})
    }

    return (
        <>
            <div className="container-consulta-lacamento">

                <Card label="Consulta Lancamento">

                    <FormGroup label="Ano: *">
                        <input type="number" 
                                name="ano"
                                onChange={handleChange}
                                className="form-control" 
                                placeholder="Digite o ano">
                        </input>
                        <small className="form-text text-muted">Ex. (yyyy)</small>
                    </FormGroup>

                    <FormGroup label="Descrição:">
                        <input type="text" 
                                name="descricao"
                                onChange={handleChange}
                                className="form-control" 
                                placeholder="Digite o ano">
                        </input>
                    </FormGroup>
                    
                    <FormGroup label="Mês:">
                        <SelectMenu lista={lancamentoService.obterListaMeses} name="mes" onChange={handleChange} />
                    </FormGroup>

                    <FormGroup label="Tipo Lançamento:">
                        <SelectMenu lista={lancamentoService.obterTiposLancamento} name="tipo" onChange={handleChange} />
                    </FormGroup>
                    
                    <ButtonGroup>
                        <button onClick={buscar} type="button" className="btn btn-success">Buscar</button>
                        <button onClick={cadastrar} type="button" className="btn btn-danger">Cadastrar</button>
                    </ButtonGroup>
                    
                </Card>

                <LancamentoTable lancamentos={lancamentos} editarAction={editar} deletarAction={setDialogDelete} />
                
                <ConfirmDialog  visible={showDialogDelete.visible} 
                                onHide={() => setDialogDelete({visible: false})} 
                                header="Confirmar Deleção ?" 
                                message="Você deseja realmente deletar o lançamento ?" 
                                icon="pi pi-exclamation-triangle"
                                accept={() => deletar(showDialogDelete.lancamento)}>
                </ConfirmDialog>

            </div>

        </>
    )
}

export default ConsultaLancamento
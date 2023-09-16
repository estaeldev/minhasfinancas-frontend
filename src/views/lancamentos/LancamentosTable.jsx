import currencyFormatter from "currency-formatter";
import ButtonGroup from "../../components/button-group";
import "./style.scss";

function LancamentoTable(props) {

    const lancamentos = props.lancamentos
    const editar = props.editarAction
    const setDialogDelete = props.deletarAction
    const alterarStatus = props.alterarStatus

    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Descrição</th> 
                        <th scope="col">Valor</th> 
                        <th scope="col">Mês</th> 
                        <th scope="col">Ano</th>
                        <th scope="col">Tipo</th> 
                        <th scope="col">Situação</th> 
                        <th scope="col">Ações</th> 
                    </tr>
                </thead>
                <tbody>
                    {lancamentos.map(lancamento => {
                        return (
                            <tr key={lancamento.id}>
                                <td>{lancamento.descricao}</td>
                                <td>{currencyFormatter.format(lancamento.valor, {locale: "pt-BR"})}</td>
                                <td>{lancamento.mes}</td>
                                <td>{lancamento.ano}</td>
                                <td>{lancamento.tipo}</td>
                                <td>{lancamento.status}</td>
                                <td>
                                    <ButtonGroup> 
                                        <button onClick={() => alterarStatus(lancamento, "EFETIVADO")}
                                                disabled={lancamento.status !== "PENDENTE"} 
                                                type="button" 
                                                className="btn btn-success" 
                                                title="Efetivar">
                                                <i className="pi pi-check"></i>
                                        </button>   
                                        <button onClick={() => alterarStatus(lancamento, "CANCELADO")} 
                                                disabled={lancamento.status !== "PENDENTE"} 
                                                type="button" 
                                                className="btn btn-warning" 
                                                title="Cancelar">
                                                <i className="pi pi-times"></i>
                                        </button>
                                        <button onClick={() => editar(lancamento.id)} 
                                                type="button" 
                                                className="btn btn-primary" 
                                                title="Editar">
                                                <i className="pi pi-pencil"></i>
                                        </button>
                                        <button onClick={() => setDialogDelete({visible: true, lancamento: lancamento})} 
                                                type="button" 
                                                className="btn btn-danger" 
                                                title="Excluir">
                                                <i className="pi pi-trash"></i>
                                        </button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )

}

export default LancamentoTable
import currencyFormatter from "currency-formatter"
import ButtonGroup from "../../components/button-group"
import "./style.scss"

function LancamentoTable(props) {

    const lancamentos = props.lancamentos
    const editar = props.editarAction
    const deletar = props.deletarAction

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
                                        <button onClick={() => editar(lancamento.id)} type="button" className="btn btn-primary">Editar</button>
                                        <button onClick={() => deletar(lancamento)} type="button" className="btn btn-danger">Deletar</button>
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
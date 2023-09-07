import ButtonGroup from "../../components/button-group"
import Card from "../../components/card"
import FormGroup from "../../components/form-group"
import SelectMenu from "../../components/select-menu"
import "./style.scss"

function ConsultaLancamento() {
    const mesesItens = [
        {label: "Selecione...", value:""},
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

    const tiposItens = [
        {label: "Selecione...", value: ""},
        {label: "Despesa", value: "DESPESA"},
        {label: "Receita", value: "RECEITA"} 
    ]



    return (
        <>
            <div className="container-consulta-lacamento">

                <Card label="Consulta Lancamento">

                    <FormGroup label="Ano: *">
                        <input type="number" 
                                className="form-control" 
                                placeholder="Digite o ano">
                        </input>
                    </FormGroup>
                    
                    <FormGroup label="Mês:">
                        <SelectMenu lista={mesesItens}/>
                    </FormGroup>

                    <FormGroup label="Tipo Lançamento:">
                        <SelectMenu lista={tiposItens}/>
                    </FormGroup>
                    
                    <ButtonGroup>
                        <button type="button" className="btn btn-success">Buscar</button>
                        <button type="button" className="btn btn-danger">Cadastrar</button>
                    </ButtonGroup>
                    
                </Card>

            </div>

        </>
    )
}

export default ConsultaLancamento
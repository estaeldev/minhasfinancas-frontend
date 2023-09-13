
function SelectMenu(props) {
    const lista = props.lista
    const onChange = props.onChange
    const name = props.name
    
    return (
        <>
            <select className="form-control" name={name} onChange={event => onChange(event)}>
                {lista.map(item => {
                    return <option key={item.value} value={item.value}>{item.label}</option>
                })}
            </select>
        </>
    )

}

export default SelectMenu
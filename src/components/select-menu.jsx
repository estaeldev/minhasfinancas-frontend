
function SelectMenu(props) {
    const lista = props.lista
    const onChange = props.onChange
    const name = props.name
    const value = props.value
    
    return (
        <>
            <select className="form-control" value={value} name={name} onChange={event => onChange(event)}>
                {lista.map(item => {
                    return <option key={item.value} value={item.value} >{item.label}</option>
                })}
            </select>
        </>
    )

}

export default SelectMenu
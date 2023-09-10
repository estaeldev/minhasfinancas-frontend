
function SelectMenu(props) {
    const lista = props.lista
    const onChange = props.onChange
    
    return (
        <>
            <select className="form-control" onChange={event => onChange(event.target.value)}>
                {lista.map(item => {
                    return <option key={item.value}>{item.label}</option>
                })}
            </select>
        </>
    )

}

export default SelectMenu
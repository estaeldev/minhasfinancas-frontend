
function SelectMenu(props) {
    const lista = props.lista

    return (
        <>
            <select className="form-control">
                {lista.map(item => {
                    return <option key={item.value}>{item.label}</option>
                })}
            </select>
        </>
    )

}

export default SelectMenu
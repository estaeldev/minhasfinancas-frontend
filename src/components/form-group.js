
function FormGroup(props) {
    return (
        <>
            <div>
                <label>{props.label}</label>
                {props.children}
            </div>
        </>
    )
}

export default FormGroup;
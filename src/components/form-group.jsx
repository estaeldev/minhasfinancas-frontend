
function FormGroup(props) {
    return (
        <>
            <div className="form-group">
                <label>{props.label}</label>
                {props.children}
            </div>
        </>
    )
}

export default FormGroup;

function Card(props) {
    const label = props.label

    return (
        <>
            <div className="card border-primary mb-3">
                    
                <div className="card-header">
                    <h2>{label}</h2>
                </div>
                
                <form className="card-body">
                    {props.children}
                </form>

            </div>
        </>
    )

}

export default Card
import "./itemListContainer.css"

function Greating (props){
    return(
        <div >
            <h1 className="saludoIncial ">{props.title}</h1>
            <p>{props.name}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Greating;
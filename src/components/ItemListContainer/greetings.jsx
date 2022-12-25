import "./greetings.css"

function Greetings (props){
    return(
        <div >
            <h1 className="saludoIncial ">{props.title}</h1>
            <p>{props.name}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Greetings;
import { useState } from "react";


function ItemCount(props){

    const [count, setCount] = useState(1)
    
    

    function handleAdd(){
        
        if(count < props.stock){setCount(count +1)} 
        else{console.log(`el numero de stock no puede ser mayor a ${props.stock}`)}
    }

    function handleSubstrac(){
        if(count > 1){setCount(count -1)}
        else{console.log(`el numero de stock no puede ser menor a 1`)};
    }

    return(
    <div style={{ display: "flex", border: "solid 1px black", padding: "15px"}}> 
        Agregar al Carrito 
        <button disabled={count === 1} onClick={handleSubstrac}>-</button>
        <p>{count}</p>
        <button disabled={count === props.stock} onClick={handleAdd}>+</button>
    </div>
)
}

export default ItemCount;
import { useState } from "react";
import Button from "../Button/Button";
import "./itemCount.css";


function ItemCount(props, onAddToCart){

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

        <div>
    <div style={{ display: "flex", border: "solid 1px black", padding: "15px"}}> 
        
        Agregar cantidad deseada al carrito 
        <Button disabled={count === 1} onClick={handleSubstrac}>-</Button>
        <p>{count}</p>
        <Button disabled={count === props.stock} onClick={handleAdd}>+</Button>
        
        
    </div>
       <br />
        <div>
        <Button onClick={() => onAddToCart(count)}>Agregar al carrito</Button>
        </div>
      </div>

)
}

export default ItemCount;



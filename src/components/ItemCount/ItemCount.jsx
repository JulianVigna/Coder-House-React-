

import { useState } from "react";
import Button from "../Button/Button";
import "./itemCount.css";

function ItemCount({ onAddToCart, stock }) {
  const [count, setCount] = useState(1);

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract() {
    if(count > 1){setCount(count -1)}
  }

  return (
    <div className="itemcount_container">
      <small>Agregá la cantidad deseada al carrito</small>
      <div className="itemcount_control">
        <Button onClick={handleSubstract}>-</Button>
        <span className="itemcount_count">{count}</span>
        <Button onClick={handleAdd}>+</Button>
      </div>

      <div className="itemcount_btns">
        <Button onClick={() => onAddToCart(count)}>Agregar al carrito</Button>
      </div>
    </div>
  );
}

export default ItemCount;
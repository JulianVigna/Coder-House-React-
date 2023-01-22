
import React, { createContext, useContext } from "react";
import { cartContext } from "../../storage/cartContext";


const CardWidget = () => {

  const contexto = useContext(cartContext)
    return (
      <>
      <button className="nav-item btn btn-outline-danger ">
        <img src="./assets/imagenes/cart4.svg" alt="Logo" />1
      </button>
      <span>{contexto.getTotalItemsInCart()}</span>
      </>
    );
  };
  
  export default CardWidget;
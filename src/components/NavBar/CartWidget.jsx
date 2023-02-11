

import React, { createContext, useContext } from "react";
import { cartContext } from "../../storage/cartContext";


const CardWidget = () => {

  const contexto = useContext(cartContext)
    return (
      <>
      {contexto.getTotalItemsInCart() >= 1 ? 
      
      <span className="nav-item btn btn-outline-danger ">
        <img src="../assets/imagenes/cart4.svg" alt="Logo" />
      <span>{contexto.getTotalItemsInCart()}</span> </span>
       :
      <span className="nav-item btn btn-outline-danger ">   <img src="../assets/imagenes/cart4.svg" alt="Logo" />
     </span>}
      </>
    );
  };
  
  export default CardWidget;



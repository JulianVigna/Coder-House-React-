
import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";


function ItemDetail({ title, price, img, category, stock, detail, onAddToCart }) {


    
  return (
    <div className="item-card">
      <div className="item-card_header">
        <h2>{title}</h2>
      </div>
      <div className="item-card_img">
        <img src={img} alt={title} />
      </div>
      <div className="item-card_detail">
        <h3 className="item-card_price">$ {price}</h3>
        <small>{category}</small>
      </div>
      <h4>{detail}</h4>
      <div>
      
    
        <ItemCount onAddToCart={onAddToCart} stock={stock} />
      <a href="/cart">
        <Button>Ir al cart</Button>
      </a>
      <br />
    </div>
    </div>
  );
}

export default ItemDetail;
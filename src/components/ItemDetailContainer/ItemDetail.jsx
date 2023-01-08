
import React from "react";
import ItemCount from "../ItemCount.jsx/ItemCount";
import Button from "../Button/Button";


function ItemDetail({ title, price, img, category, stock, detail }) {
    
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
      <br></br>
      <ItemCount stock={stock}></ItemCount>
      <br />
      <Button padding="10px" color="red">
        Comprar
      </Button>
    </div>
  );
}

export default ItemDetail;
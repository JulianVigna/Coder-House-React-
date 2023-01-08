
import { useState } from "react";
import Button from "../Button/Button";
import "./itemCard.css";
import ItemCount from "../ItemCount.jsx/ItemCount";

function ItemCard(props) {

  // destructuring
  const { title, price, img, category, stock } = props.item;

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
      <Button padding="10px" color="red">
        Ver más
      </Button>
      <br></br>
      <ItemCount stock={stock} ></ItemCount>
    </div>
  );
}

export default ItemCard;
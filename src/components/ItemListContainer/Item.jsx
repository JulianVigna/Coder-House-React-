
import Button from "../Button/Button";
import "./item.css";
import { Link } from "react-router-dom";


function Item(props) {

  // destructuring
  const { title, price, img, category, id, discount, stock } = props.item;

  return (
    <div className="item-card">
      <div className="item-card_header">
        <h2>{title}</h2>

        {stock <= 2 ? <h4>Ultimos disponibles!</h4> : <></>}
      </div>
      <div className="item-card_img">
        <img src={img} alt={title} />
      </div>
      <div className="item-card_detail">
        <h3 className="item-card_price">$ {price}</h3>
        {discount ? <h4>Descuento:{discount}%</h4> : ""}
        <small>{category}</small>
      </div>
      <Link to={`/detail/${id}`}>
        <Button padding="10px" color="red">
          Ver más
        </Button>
      </Link>
      <br></br>
    </div>
  );
}

export default Item;
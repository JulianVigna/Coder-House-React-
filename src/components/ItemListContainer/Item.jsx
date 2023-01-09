
import Button from "../Button/Button";
import "./item.css";
import { Link } from "react-router-dom";


function Item(props) {

  // destructuring
  const { title, price, img, category, id } = props.item;

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
      <Link to={`/detalle/${id}`}>
      <Button padding="10px" color="red">
        Ver más
      </Button>
      </Link>
      <br></br>
    </div>
  );
}

export default Item;
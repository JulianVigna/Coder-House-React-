import React, { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import { createOrder } from "../../services/firebase";
import Button from "../Button/Button";
import "./cartContainer.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";

import CardWidget from "../NavBar/CartWidget";

function CartContainer() {

  const [orderId, setOrderId] = useState();
  const { cart, removeItem, clear, getTotalPriceInCart, getTotalPriceUnit } = useContext(cartContext);

  function handleCheckout(evt, userData) {
    evt.preventDefault();

    const items = cart.map(({ id, price, title, count }) => ({
      id,
      price,
      title,
      count,
    }));

    const order = {
      buyer: userData,
      items: items,
      total: getTotalPriceInCart(),
      date: new Date(),
    };

    async function sendOrder() {
      let id = await createOrder(order);
      setOrderId(id);
    }
    sendOrder();
  }

  if (orderId)
    return (
      <div>
        <h1>Gracias por tu compra</h1>
        <p>El id de tu compra {orderId}</p>
        {clear()}
      </div>
    );

  return (

    <>
      {cart.length == 0 ?

        <div>
          <h1>Tu Carrito</h1>
          <br />
          <small>El carrito esta vacio</small>
          <br />
          <Link to="/">Volver al Inicio</Link>
        </div>
        :

        <div>
          <table className="cartList">
            <thead className="cartList_head">
              <tr className="cartList_row">
                <th>Miniatura</th>
                <th>Titulo</th>
                <th>Precio unitario</th>
                <th>Cantidad</th>
                <th>Remover</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="cartList_row">
                  <td>
                    <img height={50} src={item.img} alt={item.title} />
                  </td>
                  <td>{item.title}</td>
                  <td>$ {item.price}</td>
                  <td>{item.count}</td>
                  <td>
                    <Button color="#c63224" onClick={() => { removeItem(item.id) }} >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                      </svg>
                    </Button>
                  </td>
                  <th>$ {item.count * item.price}</th>
                </tr>
              ))}
            </tbody>
          </table>
          <Button onClick={clear}>Vaciar Carrito</Button>
          <div className="cartList_detail">
            <h4>El total de tu compra es de $ {getTotalPriceInCart()}</h4>

            <FormCheckout onCheckout={handleCheckout} />

          </div></div>}
    </>
  );
}

export default CartContainer;

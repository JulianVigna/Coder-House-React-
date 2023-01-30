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
    //const items = cart.map( item => ( { id: item.id, price: item.price, count: item.count, title: item.title} )
    const items = cart.map(({ id, price, title, count }) => ({
      id,
      price,
      title,
      count,
    }));

    const order = {
      buyer: userData,
      items: items, // id, title, price, count
      total: getTotalPriceInCart(),
      date: new Date(),
    };

    // 1. Sweet alert
    /*  createOrder(order).then((id) => {
      Swal.fire({
        title: "Gracias por tu compra!",
        text: `este es tu ticket id: ${id}`,
        icon: "success",
        confirmButtonText: "Ok!",
      });
    }); */

    //2. Redireccionar
    /*  createOrder(order).then((id) => {
      navigateTo(`/thank-you/${id}`);
    }); */
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    //3. Rendering condicional
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
      </div>
    );

  return (
    
    <>
    { cart.length == 0 ?

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
                <Button color="#c63224" onClick={removeItem}>
                  X
                </Button>
              </td>
              <th>$ {item.count*item.price}</th>
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

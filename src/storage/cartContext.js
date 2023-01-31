import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const cartContext = createContext({ cart: [] });


function CartProvider(props) {
  
  const [cart, setCart] = useState([]);

  const test = () => console.log("test");

  function addToCart(item) {
    let isInCart = cart.findIndex((itemInCart) => itemInCart.id === item.id);
    let newCart = cart.map((item) => item);

    if (isInCart !== -1) {
  
      alert("Cuidado! item ya agregado");
    } else {
      newCart.push(item);
      setCart(newCart);
    }

  }

  const removeItem = (id) => {
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
    setCart(cart.filter(product => product.id !== id));
}


  function clear() {
    return(
      setCart([]))
  }

  function getTotalItemsInCart() {

    return cart.reduce((total, product) => total + product.count, 0);
  }
  

  function getTotalPriceInCart() {
    return cart.reduce((total, product) => total + (product.price * product.count), 0);
  }

  return (
    
    <cartContext.Provider
      value={{ cart, test, addToCart, getTotalItemsInCart, getTotalPriceInCart, removeItem, clear }}
    >
     
      {props.children}
    </cartContext.Provider>
  );
}

export { CartProvider };


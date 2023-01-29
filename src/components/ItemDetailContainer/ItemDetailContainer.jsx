

import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { cartContext } from "../../storage/cartContext";
import { getProduct } from "../../services/firebase";




function ItemDetailContainer() {
    const [product, setProduct] = useState( {title:"loading...", price: "--.--"});
    const [isInCart, setIsInCart] = useState(false)
    let params = useParams()

    const { cart, addToCart } = useContext(cartContext);
   
    function handleAddToCart(count) {
        setIsInCart(true);
        const productAndCount = { ...product, count: count };
        addToCart(productAndCount);
      }
      function checkStock() {
        let itemInCart = cart.find((item) => item.id === product.id);
    
        let stockUpdated = product.stock;
    
        if (itemInCart) {
          stockUpdated = product.stock - itemInCart.count;
        }
        return stockUpdated;
      }
    useEffect(() => {
        getProduct(params.itemid)
            .then((respuesta) => {
                setProduct(respuesta);
            })
            .catch((error) => alert(error));
    }, []);

    return (
        <ItemDetail
            isInCart={isInCart}
            onAddToCart={handleAddToCart}
            title={product.title}
            img={product.img}
            category={product.category}
            price={product.price}
            stockUpdated={checkStock()}
            detail={product.detail}
        />
    );
}

export default ItemDetailContainer;
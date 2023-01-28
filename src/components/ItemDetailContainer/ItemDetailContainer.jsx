

import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { cartContext } from "../../storage/cartContext";
import { getProduct } from "../../services/firebase";




function ItemDetailContainer() {
    const [product, setProduct] = useState( {title:"loading...", price: "--.--"});
    const [isInCart, setIsInCart] = useState(false)
    let params = useParams()

    const { addToCart } = useContext(cartContext);
   
    function handleAddToCart(count) {
        setIsInCart(true);
        const productAndCount = { ...product, count: count };
        addToCart(productAndCount);
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
            stock={product.stock}
            detail={product.detail}
        />
    );
}

export default ItemDetailContainer;
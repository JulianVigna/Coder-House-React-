

import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/mockService";
import ItemDetail from "./ItemDetail";
import { cartContext } from "../../storage/cartContext";

function ItemDetailContainer() {
    const [product, setProduct] = useState( {title:"loading...", price: "--.--"});

    let params = useParams()

    const { addToCart } = useContext(cartContext);
   
    function handleAddToCart(count) {
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
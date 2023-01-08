

import React, { useState, useEffect } from "react";
import { getProduct } from "../../services/mockService";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProduct()
            .then((respuesta) => {
                setProduct(respuesta);
            })
            .catch((error) => alert(error));
    }, []);

    return (
        <ItemDetail
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
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import obtenerProductos, { getProductByCategory } from "../../services/mockService";
import Flex from "../Flex/Flex";
import Item from "./Item";


function ItemListContainer() {

    const [products, setProducts] = useState([]);

    let {categoryid} = useParams();

    console.log("%cRenderizando ItemListContainer", "background-color: blue");
  
    useEffect(() => {
        if(!categoryid){
      obtenerProductos()
        .then((respuesta) => {
          setProducts(respuesta);
        })
        .catch((error) => alert(error));
    }
    else {
        getProductByCategory(categoryid)
        .then((respuesta)=> {
        setProducts(respuesta);
    })
    .catch((error)=> alert(error))
    }
    }, [categoryid]);

    return (
        <Flex>
            {products.map((itemIterado) => {
                return (
                    <Item id={itemIterado.id} key={itemIterado.id} item={itemIterado} />
                );
            })}
        </Flex>
    );
}

export default ItemListContainer
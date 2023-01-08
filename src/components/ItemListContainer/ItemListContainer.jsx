import { useEffect, useState } from "react";
import obtenerProductos from "../../services/mockService";
import Flex from "../Flex/Flex";
import Item from "./Item";


function ItemListContainer() {

    const [products, setProducts] = useState([]);
  
    console.log("%cRenderizando ItemListContainer", "background-color: blue");
  
    useEffect(() => {
      obtenerProductos()
        .then((respuesta) => {
          setProducts(respuesta);
        })
        .catch((error) => alert(error));
    }, []);

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

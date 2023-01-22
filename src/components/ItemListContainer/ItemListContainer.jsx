import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import obtenerProductos, { getProductByCategory } from "../../services/mockService";
import Flex from "../Flex/Flex";
import Item from "./Item";
import "./alert.css";
import Loader from "../Loader/Loader";


function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [alertText, setAlertText] = useState();


    let {categoryid} = useParams();

    console.log("%cRenderizando ItemListContainer", "background-color: blue");
  

    useEffect(() => {
        if (!categoryid) {
          obtenerProductos()
            .then((respuesta) => {
                setProducts(respuesta);
              setAlertText({
                text: "Items Cargados Correctamente",
                type: "danger",
              });
            })
            .catch((error) => {
              setAlertText({ text: error, type: "danger" });
            })
            .finally(() => setIsLoading(false));
        } else {
            getProductByCategory(categoryid)
            .then((respuesta) => {
                setProducts(respuesta);
              setIsLoading(false);
            })
            .finally(() => setIsLoading(false));
        }
      }, [categoryid]);

    if (isLoading) {
        return <Loader size={120} color="orange" />;
      } else {
        return (
          <>
            <Flex>
              {alertText && (
                <div className="alert_container">
                  <span className={`alert alert_${alertText.type}`}>
                    {alertText.text}
                  </span>
                </div>
              )}
        <Flex>
            {products.map((itemIterado) => {
                return (
                    <Item id={itemIterado.id} key={itemIterado.id} item={itemIterado} />
                );
            })}
        </Flex>
            </Flex>
          </>
        );
      }
    }


export default ItemListContainer
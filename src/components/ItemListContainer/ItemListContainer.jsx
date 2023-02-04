import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByCategory} from "../../services/firebase"
import { obtenerProductos } from "../../services/firebase";
import Flex from "../Flex/Flex";
import "./alert.css";
import Loader from "../Loader/Loader";
import { ItemList } from "./ItemList";


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
        return <Loader size={120} color="red" />;
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
        <ItemList items={products} />
        </Flex>
        </Flex>
          </>
        );
      }
    }


export default ItemListContainer
import Item from "./Item";
import ItemListContainer from "./ItemListContainer";

function ItemList(props)  {
    
    props.products.map((itemIterado) => {
        return (
            <Item id={itemIterado.id} key={itemIterado.id} item={itemIterado} />
        );
    })}

    export default ItemList

import "./itemListContainer.css"
import Item from "./Item";


export function ItemList({items})   {
    return(

 items.map((producto) => {
        return (
            <Item id={producto.id} key={producto.id} item={producto} />
        );
    }))
}


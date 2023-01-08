import Flex from "../Flex/Flex";
import ItemCard from "./ItemCard";




function itemListContainer() {

    const misProductos = [
        { id: "1", title: "Ipone 14 pro", category: "Celulares", detail: "color silver de 128 GB", img: "", price: "400000", stock: "3" },

        { id: "2", title: "Samsung S22", category: "", detail: "color black de 250 GB", img: " ", price: "250000", stock: "2" },

        { id: "3", title: "MacBook pro 2022", category: "Computacion", detail: "color silver con disco de 1 tela con 16 GB de RAM", img: "", price: "500000", stock: "4" },

        { id: "4", title: "Auricular Logitech H390", category: "Accesorios", detail: "Auricular con micronofo Logtiech H-390", img: "", price: "6000", stock: "2" },
    ]

    return (
        <Flex>
            {misProductos.map((itemIterado) => {
                return (
                    <ItemCard id={itemIterado.id} key={itemIterado.id} item={itemIterado} />
                );
            })}
        </Flex>
    );
}

export default itemListContainer


const database = [
    {
        id: "1",
        title: "Ipone 14 pro",
        category: "Celulares",
        detail: "color silver de 128 GB",
        img: "https://larepublica.pe/resizer/3K9Yq2uiUe8lh1_R_xfFcDqkjAM=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/UG5PVIBA5BDX3PXR6TI4QWVG5M.jpg",
        price: "400000",
        stock: "3"
    },

    {
        id: "2",
        title: "Samsung S22",
        category: "Celulares",
        detail: "color black de 250 GB",
        img: "https://m.media-amazon.com/images/I/71HUnJvHsbL._SL1500_.jpg",
        price: "250000",
        stock: "2"
    },

    {
        id: "3",
        title: "MacBook pro 2022",
        category: "Computacion",
        detail: "color silver con disco de 1 tela con 16 GB de RAM",
        img: "https://www.macstation.com.ar/img/productos/2211-2212-2134-8.jpg",
        price: "500000",
        stock: "4"
    },

    {
        id: "4",
        title: "Logitech H390",
        category: "Accesorios",
        detail: "Auricular con micronofo Logtiech H-390",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_878789-MLA40161268975_122019-F.webp", price: "6000",
        stock: "2"
    },
];

const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(database);
        }, 3000);
    });
};

const getProduct = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(database[3]);
        }, 2000);
    });
};

export default obtenerProductos;

export { getProduct };
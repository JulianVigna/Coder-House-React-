
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import { CartProvider} from "./storage/cartContext"
import CartContainer from './components/CartContainer/CartContainer';
import app, {  obtenerProductos } from './services/firebase';
import { exportArray } from './services/firebase';

function App() {

 obtenerProductos()


  function logOutSession() {
    console.log("logout");
  }

  function logInSession(username) {
    alert(`Bienvenido el usuario: ${username}`);
  }

  return (
    <div >
      {/* <button onClick={exportArray}>exportar</button> */}
     
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detail/:itemid" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryid" element={<ItemListContainer />} />
          <Route path="/cart" element= {<CartContainer />}/>
          <Route path="*" element= {<PageNotFound/>}/>

        </Routes>
        </CartProvider>
      </BrowserRouter>
    

    </div>
    
  );
}

export default App;

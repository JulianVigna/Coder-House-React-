
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import { CartProvider} from "./storage/cartContext"

function App() {


  function logOutSession() {
    console.log("logout");
  }

  function logInSession(username) {
    alert(`Bienvenido el usuario: ${username}`);
  }

  return (
    <div >
      
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detalle/:itemid" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryid" element={<ItemListContainer />} />
          <Route path="*" element= {<PageNotFound/>}/>

        </Routes>
        </CartProvider>
      </BrowserRouter>
    

    </div>
    
  );
}

export default App;

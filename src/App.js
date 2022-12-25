import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Greetings from './components/ItemListContainer/Greetings';
import ItemCount from './components/ItemCount.jsx/ItemCount';

function App() {
  return (
    <div >
      <NavBar/> 
      
      <Greetings
      title="Bienvenido a Electro Mundo"
      name="Mi nombre es Julian Vigna"
      description="El proyecto se trata de un e-comerce de todos equipos electronicos."/>

      <ItemCount stock={8} />
      <ItemCount stock={3} />
    </div>
    
  );
}

export default App;

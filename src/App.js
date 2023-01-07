import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount.jsx/ItemCount';

function App() {
  return (
    <div >
      <NavBar/> 
      
      <ItemListContainer
      title="Bienvenido a Electro Mundo"
      name="Mi nombre es Julian Vigna"
      description="El proyecto se trata de un e-comerce de todos equipos electronicos."/>

      <ItemCount stock={8} />
      <ItemCount stock={3} />
    </div>
    
  );
}

export default App;

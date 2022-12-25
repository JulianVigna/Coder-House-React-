import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Greetings from './components/ItemListContainer/Greetings';

function App() {
  return (
    <div >
      <NavBar/> 
      
      <Greetings
      title="Bienvenido a Electro Mundo"
      name="Mi nombre es Julian Vigna"
      description="El proyecto se trata de un e-comerce de todos equipos electronicos."/>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount.jsx/ItemCount';

function App() {
  return (
    <div >
      <NavBar/> 
      
      <ItemListContainer/>
      
    </div>
    
  );
}

export default App;

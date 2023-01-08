import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount.jsx/ItemCount';

function App() {
  return (
    <div >
      <NavBar/> 
      
      
      <ItemCount stock={8} />
      <ItemCount stock={3} />
    </div>
    
  );
}

export default App;

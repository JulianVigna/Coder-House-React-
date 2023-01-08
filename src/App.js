import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div >
      <NavBar/> 
      
      <ItemListContainer/>
      <ItemDetailContainer/>

    </div>
    
  );
}

export default App;

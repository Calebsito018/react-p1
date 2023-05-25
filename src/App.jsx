import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
const App = () =>{

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer  greeting="Pre-entrega 1"/>
    </div>
  );
};

export default App;

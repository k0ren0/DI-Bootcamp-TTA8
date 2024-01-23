import './App.css';
import { Routes, Route} from "react-router-dom";
import Products from './components/Product';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

import './App.css';
import Car from './Components/Car';
import Events from './Components/Events';


function App() {
  const carInfo = { name: "Ford", model: "Mustang" };

  return (
    <div className="App">
      <header className="App-header">
        <Car carInfo={carInfo} />
        <Events />
      </header>
    </div>
  );
}

export default App;
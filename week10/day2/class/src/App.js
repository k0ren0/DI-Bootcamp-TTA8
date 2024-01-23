import './App.css';
import About from './components/About';
import Home from './components/Home';
import Shop from './components/Shop';
import ErrorPage from './components/ErrorPage';
import { Routes, Route } from 'react-router-dom';

/** Routering */

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/*" element={<ErrorPage />}/>
      </Routes>

    </div>
  );
}

export default App;

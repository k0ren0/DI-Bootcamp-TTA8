import './App.css';
import About from './components/About';
import Home from './components/Home';
import Shop from './components/Shop';
import ErrorPage from './components/ErrorPage';
import { Routes, Route, Link } from 'react-router-dom';

/** Routering */

function App() {
  return (
    <div className="App">
      <header> 
        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/about">About</Link>{" "}
          <Link to="/shop">Shop</Link>{" "}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/shop/:productid" element={<Shop />}/>
        <Route path="/shop/:productid/:shopid" element={<Shop />}/>
        <Route path="/*" element={<ErrorPage />}/>
      </Routes>

    </div>
  );
}

export default App;

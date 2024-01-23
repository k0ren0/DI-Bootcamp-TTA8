import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/ErrorBoundary';
import "./App.css";
import PostList from './components/PostList'; //ex2

// ADD ex2
const HomeScreen = () => (
  <div>
    <header>Home</header>
    <br/>
    <h2>Exercise 2</h2>
    <br/>
    <PostList />
  </div>
);

const ProfileScreen = () => <header>Profile Screen</header>;
const ShopScreen = () => {
  throw new Error('Shop error');
};

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link" activeClassName="active">
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/shop" className="nav-link" activeClassName="active">
              Shop
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/shop" element={
          <ErrorBoundary>
            <ShopScreen />
          </ErrorBoundary>
        } />
          
          {/* ADD EX2 */}
        <Route path="/posts" element={<PostList />} />  
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;

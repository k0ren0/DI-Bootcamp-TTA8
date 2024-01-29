import logo from './logo.svg';
import React from 'react';
import { useSelector } from 'react-redux';
import Login from './features/components/Login';
import Logout from './features/components/Logout';
import './App.css';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React-Redux User Authentication</h1>
        {isAuthenticated ? (
          <>
            <p>Welcome, User!</p>
            <Logout />
          </>
        ) : (
          <Login />
        )}
      </header>
    </div>
  );
}

export default App;

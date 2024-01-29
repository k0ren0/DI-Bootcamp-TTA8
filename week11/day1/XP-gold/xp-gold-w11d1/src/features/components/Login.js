import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../authSlice';
import './Logs.css';


const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = { username, password };
    dispatch(loginUser(user));
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button 
      onClick={handleLogin}
      className="loginButton" 
      >Login</button>
    </div>
  );
};

export default Login;

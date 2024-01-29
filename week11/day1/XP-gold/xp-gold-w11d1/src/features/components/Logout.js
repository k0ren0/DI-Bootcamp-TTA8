import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../authSlice';
import './Logs.css';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <h2>Logout</h2>
      <button 
      onClick={handleLogout}
      className="logoutButton" 
      >Logout</button>
    </div>
  );
};

export default Logout;
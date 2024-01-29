import React from 'react';
import logo from './logo.svg';
import './App.css';
import InventoryList from './features/product/InventoryList';
import AddProduct from './features/product/AddProduct';
import UpdateQuantity from './features/product/UpdateQuantity';
import RemoveProduct from './features/product/RemoveProduct';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Store Inventory Management</h1>
        <AddProduct />
        <UpdateQuantity />
        <RemoveProduct />
        <InventoryList />

      </header>
    </div>
  );
}

export default App;

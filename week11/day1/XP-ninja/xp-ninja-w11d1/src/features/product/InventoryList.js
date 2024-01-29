import React from 'react';
import { useSelector } from 'react-redux';
import '../css/InventoryList.css'; 

const InventoryList = () => {
    const products = useSelector(state => state.inventory.products);
  
    return (
      <div className="inventory-list-container">
        <h3 className='Inv'>Inventory List</h3>
        <div className="table-container">
          <table className="inventory-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default InventoryList;
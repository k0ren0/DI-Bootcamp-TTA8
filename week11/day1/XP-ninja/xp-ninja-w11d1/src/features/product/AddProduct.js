import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../inventorySlice';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName || !quantity) return;

    dispatch(addProduct({ name: productName, quantity: parseInt(quantity, 10), id: Date.now() }));
    setProductName('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Product</h3>
      <input type="text" value={productName} onChange={e => setProductName(e.target.value)} placeholder="Product Name" />
      <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="Quantity" />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;

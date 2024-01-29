import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../inventorySlice';

const UpdateQuantity = () => {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const idToUpdate = parseInt(productId, 10); // Convert to number if IDs are numbers
    dispatch(updateQuantity({ id: idToUpdate, quantity: parseInt(quantity, 10) }));
    setProductId('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Update Product Quantity</h3>
      <input type="text" value={productId} onChange={e => setProductId(e.target.value)} placeholder="Product ID" />
      <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="New Quantity" />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateQuantity;


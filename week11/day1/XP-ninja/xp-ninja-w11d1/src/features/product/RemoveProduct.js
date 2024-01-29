import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../inventorySlice';

const RemoveProduct = () => {
  const [productId, setProductId] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const idToRemove = parseInt(productId, 10); // Convert to number if IDs are numbers
    dispatch(removeProduct({ id: idToRemove }));
    setProductId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Remove Product</h3>
      <input type="text" value={productId} onChange={e => setProductId(e.target.value)} placeholder="Product ID" />
      <button type="submit">Remove</button>
    </form>
  );
};

export default RemoveProduct;

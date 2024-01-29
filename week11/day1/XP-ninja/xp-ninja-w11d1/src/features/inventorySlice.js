import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: []
};

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateQuantity: (state, action) => {
        const index = state.products.findIndex(product => product.id === action.payload.id);
        if (index !== -1) {
          state.products[index].quantity = action.payload.quantity;
        }
      },
      removeProduct: (state, action) => {
        state.products = state.products.filter(product => product.id !== action.payload.id);
      } 
  }
});

export const { addProduct, updateQuantity, removeProduct } = inventorySlice.actions;
export default inventorySlice.reducer;

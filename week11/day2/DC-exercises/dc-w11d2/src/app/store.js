import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import ageReducer from '../features/age/ageSlice';
import * as thunk from 'redux-thunk';


const store = configureStore({
  reducer: {
    age: ageReducer,
  },
  // middleware: [...getDefaultMiddleware(), thunk],
});

export default store;

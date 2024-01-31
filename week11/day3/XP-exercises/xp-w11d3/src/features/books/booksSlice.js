import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  categories: [],
  selectedCategory: 'All',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setBooks, setCategories, setSelectedCategory } = booksSlice.actions;

export const selectBooks = (state) => state.books.books;
export const selectCategories = (state) => state.books.categories;
export const selectSelectedCategory = (state) => state.books.selectedCategory;

export default booksSlice.reducer;

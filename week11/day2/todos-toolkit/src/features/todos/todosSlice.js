import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const { text } = action.payload;
      state.push({ id: nanoid(), text, completed: false });
    },
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    addPosts: (state, action) => {
      state = action.payload;
    },
  },
});

export const { addTask, toggleTask, removeTask,addPosts } = todoSlice.actions;
export default todoSlice.reducer;

import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

// Асинхронное действие для получения данных
export const fetchAsyncTasks = createAsyncThunk(
  'todos/fetchAsyncTasks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.slice(0, 5).map(post => post.title); 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk для отложенного добавления задачи
export const addThunkTask = createAsyncThunk(
  'todos/addThunkTask',
  async (text, { rejectWithValue }) => {
    try {
      // Имитация задержки
      await new Promise(resolve => setTimeout(resolve, 5000));
      return text;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const { text } = action.payload;
      state.push({ id: nanoid(), text, completed: false });
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncTasks.pending, (state) => {
        state.push({ id: nanoid(), text: "Loading...", completed: false });
      })
      .addCase(fetchAsyncTasks.fulfilled, (state, action) => {
        action.payload.forEach(text => {
          state.push({ id: nanoid(), text, completed: false });
        });
      })
      .addCase(fetchAsyncTasks.rejected, (state) => {
        state.push({ id: nanoid(), text: "Failed to load tasks", completed: false });
      })
      .addCase(addThunkTask.fulfilled, (state, action) => {
        state.push({ id: nanoid(), text: action.payload, completed: false });
      });
  }
});

export const { addTask, toggleTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;

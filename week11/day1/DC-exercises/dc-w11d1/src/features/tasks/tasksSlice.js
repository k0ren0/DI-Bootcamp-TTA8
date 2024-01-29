import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { day, task } = action.payload;
      state[day] = state[day] ? [...state[day], task] : [task];
    },
    editTask: (state, action) => {
      const { day, taskId, updatedTask } = action.payload;
      state[day] = state[day].map(task => 
        task.id === taskId ? { ...task, ...updatedTask } : task
      );
    },
    deleteTask: (state, action) => {
      const { day, taskId } = action.payload;
      state[day] = state[day].filter(task => task.id !== taskId);
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {};

// export const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState,
//   reducers: {
//     addTask: (state, action) => {
//       const { day, task } = action.payload;
//       state[day] = state[day] ? [...state[day], task] : [task];
//     },
//     editTask: (state, action) => {
//       const { day, taskId, updatedTask } = action.payload;
//       state[day] = state[day].map(task => task.id === taskId ? updatedTask : task);
//     },
//     deleteTask: (state, action) => {
//       const { day, taskId } = action.payload;
//       state[day] = state[day].filter(task => task.id !== taskId);
//     },
//   },
// });

// export const { addTask, editTask, deleteTask } = tasksSlice.actions;
// export default tasksSlice.reducer;

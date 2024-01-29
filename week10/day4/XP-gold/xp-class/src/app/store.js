import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "../features/tasks/tasksReducer";

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
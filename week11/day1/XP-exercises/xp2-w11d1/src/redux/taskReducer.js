// src/redux/tasksReducer.js
import { ADD_TASK, EDIT_TASK, DELETE_TASK } from './actions';

const initialState = {};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const { day, task } = action.payload;
      const existingTasks = state[day] || [];
      return {
        ...state,
        [day]: [...existingTasks, { ...task, id: Date.now() }]
      };
    }
    case EDIT_TASK: {
      const { day, taskId, updatedTask } = action.payload;
      return {
        ...state,
        [day]: state[day].map(task => 
          task.id === taskId ? { ...task, ...updatedTask } : task
        )
      };
    }
    case DELETE_TASK: {
      const { day, taskId } = action.payload;
      return {
        ...state,
        [day]: state[day].filter(task => task.id !== taskId)
      };
    }
    default:
      return state;
  }
};

export default tasksReducer;

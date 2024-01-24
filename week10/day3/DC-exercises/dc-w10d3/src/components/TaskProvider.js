import React, { createContext, useReducer } from 'react';

export const TaskContext = createContext();

const ADD_TASK = 'ADD_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const REMOVE_COMPLETED_TASKS = 'REMOVE_COMPLETED_TASKS';
const EDIT_TASK = 'EDIT_TASK';
const SET_FILTER = 'SET_FILTER';

const initialState = {
  tasks: [],
  filter: 'ALL'
};

function taskReducer(state, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), text: action.text, completed: false }],
      };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.id ? { ...task, completed: !task.completed } : task
        ),
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.id),
      };
    case REMOVE_COMPLETED_TASKS:
      return {
        ...state,
        tasks: state.tasks.filter(task => !task.completed),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.id ? { ...task, text: action.text } : task
        ),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
}

export default function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

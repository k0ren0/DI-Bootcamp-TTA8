// actions.js

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_TODO_TO_CATEGORY = 'ADD_TODO_TO_CATEGORY';
export const TOGGLE_TODO_IN_CATEGORY = 'TOGGLE_TODO_IN_CATEGORY';
export const REMOVE_TODO_FROM_CATEGORY = 'REMOVE_TODO_FROM_CATEGORY';

export const addCategory = (id, name) => ({
  type: ADD_CATEGORY,
  id,
  name,
});

export const addTodoToCategory = (id, text, category) => ({
  type: ADD_TODO_TO_CATEGORY,
  id,
  text,
  category,
});

export const toggleTodoInCategory = (category, index) => ({
  type: TOGGLE_TODO_IN_CATEGORY,
  category,
  index,
});

export const removeTodoFromCategory = (category, index) => ({
  type: REMOVE_TODO_FROM_CATEGORY,
  category,
  index,
});

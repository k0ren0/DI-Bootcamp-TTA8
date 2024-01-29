// taskActions.js

export const addTask = (text, category) => ({
    type: "ADD_TASK",
    payload: {
      text,
      category,
    },
  });
  
  export const removeTask = (id) => ({
    type: "REMOVE_TASK",
    payload: {
      id,
    },
  });
  
  export const editTask = (id, text) => ({
    type: "EDIT_TASK",
    payload: {
      id,
      text,
    },
  });
  
  export const completeTask = (id) => ({
    type: "COMPLETE_TASK",
    payload: {
      id,
    },
  });
  
  export const addCategory = (category) => ({
    type: "ADD_CATEGORY",
    payload: {
      category,
    },
  });
  
// tasksReducer.js

export const ADD_TASK = "ADD_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const ADD_CATEGORY = "ADD_CATEGORY";

const initialState = {
  tasks: [],
  categories: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
        category: action.payload.category,
      };
      return { ...state, tasks: [...state.tasks, newTask] };

    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, text: action.payload.text } : task
        ),
      };

    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, completed: !task.completed } : task
        ),
      };

    case ADD_CATEGORY:
      return { ...state, categories: [...state.categories, action.payload.category] };

    default:
      return state;
  }
};





// export const ADD_TASK = "ADD_TASK";
// export const COMPLITE_TASK = "COMPLITE_TASK";
// export const REMOVE_TASK = "REMOVE_TASK";
// export const EDIT_TASK = "EDIT_TASK";

// export const taskReducer = (state = [], action) => {
//     switch (action.type) {
//         case ADD_TASK:
//             const newTask = { id: Date.now(), text: action.payload.text, completed: false };
//             return [...state, newTask];
//         case COMPLITE_TASK:
//             return state.map(task => 
//                 task.id === action.payload.id ? { ...task, completed: !task.completed } : task
//             );
//         case REMOVE_TASK:
//             return state.filter(task => task.id !== action.payload.id);
//         case EDIT_TASK:
//             return state.map(task => 
//                 task.id === action.payload.id ? { ...task, text: action.payload.text } : task
//             );
//         default:
//             return state;
//     }
// };

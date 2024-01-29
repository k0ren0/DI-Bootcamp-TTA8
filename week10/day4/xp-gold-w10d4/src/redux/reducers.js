// reducers.js

import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, ADD_CATEGORY, ADD_TODO_TO_CATEGORY, TOGGLE_TODO_IN_CATEGORY, REMOVE_TODO_FROM_CATEGORY } from './actions';

const initialState = {
  categories: [
    {
      id: 1,
      name: "Work",
      todos: [
        { id: 1, text: "Complete project", completed: false },
        { id: 2, text: "Attend meeting", completed: true },
      ],
    },
    {
      id: 2,
      name: "Personal",
      todos: [
        { id: 3, text: "Go shopping", completed: false },
        { id: 4, text: "Exercise", completed: true },
      ],
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [
          ...state.categories,
          {
            id: action.id,
            name: action.name,
            todos: [],
          },
        ],
      };
    case ADD_TODO_TO_CATEGORY:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.category
            ? {
                ...category,
                todos: [
                  ...category.todos,
                  {
                    id: action.id,
                    text: action.text,
                    completed: false,
                  },
                ],
              }
            : category
        ),
      };
    case TOGGLE_TODO_IN_CATEGORY:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.category
            ? {
                ...category,
                todos: category.todos.map((todo, index) =>
                  index === action.index
                    ? {
                        ...todo,
                        completed: !todo.completed,
                      }
                    : todo
                ),
              }
            : category
        ),
      };
    case REMOVE_TODO_FROM_CATEGORY:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.category
            ? {
                ...category,
                todos: category.todos.filter((_, index) => index !== action.index),
              }
            : category
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;

import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions';

const initialState = {
    todos: []
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, { text: action.text, completed: false }] };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.index ? { ...todo, completed: !todo.completed } : todo
                )
            };
        case REMOVE_TODO:
            return { ...state, todos: state.todos.filter((_, index) => index !== action.index) };
        default:
            return state;
    }
};

export default todosReducer;

export const ADD_TASK = "ADD_TASK";
export const COMPLITE_TASK = "COMPLITE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const EDIT_TASK = "EDIT_TASK";

export const taskReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTask = { id: Date.now(), text: action.payload.text, completed: false };
            return [...state, newTask];
        case COMPLITE_TASK:
            return state.map(task => 
                task.id === action.payload.id ? { ...task, completed: !task.completed } : task
            );
        case REMOVE_TASK:
            return state.filter(task => task.id !== action.payload.id);
        case EDIT_TASK:
            return state.map(task => 
                task.id === action.payload.id ? { ...task, text: action.payload.text } : task
            );
        default:
            return state;
    }
};

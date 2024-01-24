import React, { createContext, useContext, useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Context for managing tasks
const TaskContext = createContext();

// Action Types
const ADD_TASK = 'ADD_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const REMOVE_COMPLETED_TASKS = 'REMOVE_COMPLETED_TASKS';

// Reducer function
function taskReducer(state, action) {
    switch (action.type) {
        case ADD_TASK:
            return [...state, { id: Date.now(), text: action.text, completed: false }];
        case COMPLETE_TASK:
            return state.map(task =>
                task.id === action.id ? { ...task, completed: true } : task
            );
        case REMOVE_TASK:
            return state.filter(task => task.id !== action.id);
        case REMOVE_COMPLETED_TASKS:
            return state.filter(task => !task.completed);
        default:
            return state;
    }
}

// Task Provider Component
function TaskProvider({ children }) {
    const [tasks, dispatch] = useReducer(taskReducer, []);
    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}

// Component for adding tasks
function TaskAdder() {
    const { dispatch } = useContext(TaskContext);
    const [taskText, setTaskText] = useState("");

    const handleAddTask = () => {
        if (!taskText.trim()) return;
        dispatch({ type: ADD_TASK, text: taskText });
        setTaskText("");
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Add a new task"
                value={taskText}
                onChange={e => setTaskText(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
}

// Component for displaying tasks
function TaskList() {
    const { tasks, dispatch } = useContext(TaskContext);

    const handleCompleteTask = id => {
        dispatch({ type: COMPLETE_TASK, id });
    };

    const handleRemoveTask = id => {
        dispatch({ type: REMOVE_TASK, id });
    };

    const handleRemoveCompletedTasks = () => {
        dispatch({ type: REMOVE_COMPLETED_TASKS });
    };

    return (
        <div>
            <button onClick={handleRemoveCompletedTasks}>Remove Completed Tasks</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleCompleteTask(task.id)}
                        />
                        {task.text}
                        <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// App Component
function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <TaskProvider>
          <h1>Task Manager</h1>
          <TaskAdder />
          <TaskList />
        </TaskProvider>
      </header>

    </>
  );
}



export default App;

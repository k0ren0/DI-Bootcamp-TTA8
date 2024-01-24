import React from 'react';
import './App.css';
import TaskProvider from './components/TaskProvider';
import TaskAdder from './components/TaskAdder';
import FilterButtons from './components/FilterButtons';
import TaskList from './components/TaskList';
import logo from './logo.svg';

function App() {
    return (
      <>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <TaskProvider>
                <h1>Task Manager</h1>
                <TaskAdder />
                <FilterButtons />
                <TaskList />
            </TaskProvider>
  
        </header>
      </>
    );
}

export default App;

// // // // // // // // version full


// import React, { createContext, useContext, useReducer, useState, useEffect, useRef } from 'react';
// import logo from './logo.svg';
// import './App.css';

// // Context for managing tasks
// const TaskContext = createContext();

// // Action Types
// const ADD_TASK = 'ADD_TASK';
// const COMPLETE_TASK = 'COMPLETE_TASK';
// const REMOVE_TASK = 'REMOVE_TASK';
// const REMOVE_COMPLETED_TASKS = 'REMOVE_COMPLETED_TASKS';
// const EDIT_TASK = 'EDIT_TASK';
// const SET_FILTER = 'SET_FILTER';

// // Initial state for the reducer
// const initialState = {
//   tasks: [],
//   filter: 'ALL' // 'ALL', 'COMPLETED', 'ACTIVE'
// };

// // Reducer function
// function taskReducer(state, action) {
//     switch (action.type) {
//         case ADD_TASK:
//             return {...state, tasks: [...state.tasks, { id: Date.now(), text: action.text, completed: false }]};
//         case COMPLETE_TASK:
//             return {...state, tasks: state.tasks.map(task =>
//                 task.id === action.id ? { ...task, completed: !task.completed } : task
//             )};
//         case REMOVE_TASK:
//             return {...state, tasks: state.tasks.filter(task => task.id !== action.id)};
//         case REMOVE_COMPLETED_TASKS:
//             return {...state, tasks: state.tasks.filter(task => !task.completed)};
//         case EDIT_TASK:
//             return {...state, tasks: state.tasks.map(task =>
//                 task.id === action.id ? { ...task, text: action.text } : task
//             )};
//         case SET_FILTER:
//             return {...state, filter: action.filter};
//         default:
//             return state;
//     }
// }

// // Task Provider Component
// function TaskProvider({ children }) {
//     const [state, dispatch] = useReducer(taskReducer, initialState);
//     return (
//         <TaskContext.Provider value={{ state, dispatch }}>
//             {children}
//         </TaskContext.Provider>
//     );
// }

// // Component for adding tasks
// function TaskAdder() {
//     const { dispatch } = useContext(TaskContext);
//     const [taskText, setTaskText] = useState("");

//     const handleAddTask = () => {
//         if (!taskText.trim()) return;
//         dispatch({ type: ADD_TASK, text: taskText });
//         setTaskText("");
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Add a new task"
//                 value={taskText}
//                 onChange={e => setTaskText(e.target.value)}
//             />
//             <button onClick={handleAddTask}>Add Task</button>
//         </div>
//     );
// }

// // Component for displaying and editing tasks
// function Task({ task }) {
//   const { dispatch } = useContext(TaskContext);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedText, setEditedText] = useState(task.text);
//   const editInputRef = useRef(null);

//   useEffect(() => {
//     if (isEditing) {
//       editInputRef.current.focus();
//     }
//   }, [isEditing]);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     dispatch({ type: EDIT_TASK, id: task.id, text: editedText });
//     setIsEditing(false);
//   };

//   const toggleComplete = () => {
//     dispatch({ type: COMPLETE_TASK, id: task.id });
//   };

//   return (
//     <li>
//       {isEditing ? (
//         <>
//           <input
//             ref={editInputRef}
//             value={editedText}
//             onChange={(e) => setEditedText(e.target.value)}
//           />
//           <button onClick={handleSave}>Save</button>
//         </>
//       ) : (
//         <>
//           <input
//             type="checkbox"
//             checked={task.completed}
//             onChange={toggleComplete}
//           />
//           {task.text}
//           <button onClick={() => dispatch({ type: REMOVE_TASK, id: task.id })}>Remove</button>
//           <button onClick={handleEdit}>Edit</button>
//         </>
//       )}
//     </li>
//   );
// }

// // Component for displaying tasks
// function TaskList() {
//     const { state: { tasks, filter }, dispatch } = useContext(TaskContext);

//     const filteredTasks = tasks.filter(task => {
//       if (filter === 'COMPLETED') return task.completed;
//       if (filter === 'ACTIVE') return !task.completed;
//       return true;
//     });

//     const handleRemoveCompletedTasks = () => {
//         dispatch({ type: REMOVE_COMPLETED_TASKS });
//     };

//     return (
//         <div>
//             <button onClick={handleRemoveCompletedTasks}>Remove Completed Tasks</button>
//             <ul>
//                 {filteredTasks.map(task => (
//                     <Task key={task.id} task={task} />
//                 ))}
//             </ul>
//         </div>
//     );
// }

// // Component for filtering tasks
// function FilterButtons() {
//   const { dispatch } = useContext(TaskContext);

//   const setFilter = (filter) => {
//     dispatch({ type: SET_FILTER, filter });
//   };

//   return (
//     <div>
//       <button onClick={() => setFilter('ALL')}>All</button>
//       <button onClick={() => setFilter('COMPLETED')}>Completed</button>
//       <button onClick={() => setFilter('ACTIVE')}>Active</button>
//     </div>
//   );
// }

// // App Component
// function App() {
//     return (
//       <>
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//          <TaskProvider>
//               <h1>Task Manager</h1>
//               <TaskAdder />
//               <FilterButtons />
//               <TaskList />
//           </TaskProvider>
  
//         </header>
//         <div className="App">
  
//         </div>
//       </>
//     );
//   }

// export default App;

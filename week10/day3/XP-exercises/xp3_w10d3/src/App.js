import React, { useReducer, useState } from "react";
import './App.css'; // Make sure your CSS file is imported

// Reducer function for managing tasks
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      // Add a new todo to the state
      return [...state, { id: Date.now(), text: action.text }];
    case "REMOVE_TODO":
      // Remove a todo by its id
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  return (
    <div className="App">
      <div className="App-header"> {/* Centered form */}
        <h1>Todo List</h1>
        <input
          className="input-field"
          type="text"
          placeholder="Add a new todo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={handleAddTodo} className="add-btn">
          Add Todo
        </button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button
                onClick={() => handleRemoveTodo(todo.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;

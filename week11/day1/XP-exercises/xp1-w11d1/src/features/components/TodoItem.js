import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../todoSlice';
import './TodoItem.css'; 

const TodoItem = ({ todo, index }) => {
    const dispatch = useDispatch();
  
    return (
      <li className="todo-item">
        <span className="todo-index">{index + 1}.</span> {/* Displaying ordinal number */}
        <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} />
        <span className="todo-text" style={{ textDecoration: todo.completed ? "line-through" : ""}} >{todo.text}</span>
        <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
      </li>
    );
};

export default TodoItem;

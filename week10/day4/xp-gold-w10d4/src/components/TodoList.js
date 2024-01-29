// TodoList.js

import React from 'react';
import { connect } from 'react-redux';
import { toggleTodoInCategory, removeTodoFromCategory } from '../redux/actions';

const TodoList = ({ todos, category, toggleTodo, removeTodo }) => {
  return (
    <div className="todo-list">
      <h3>{category.name}:</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span className="task-number">Task {index + 1}:</span>
            <span className="todo-text">{todo.text}</span>
            <button onClick={() => toggleTodo(category.id, index)} className="toggle-btn">
              Toggle
            </button>
            <button onClick={() => removeTodo(category.id, index)} className="remove-btn">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  todos: ownProps.category.todos,
  category: ownProps.category,
});

const mapDispatchToProps = {
  toggleTodo: toggleTodoInCategory,
  removeTodo: removeTodoFromCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

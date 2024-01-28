import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/actions';

const TodoList = ({ todos, dispatch }) => {
    return (
        <div className="todo-list">

            <ul>
                {todos.map((todo, index) => (
                    <li key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                        <span className="task-number">Task {index + 1}:</span>
                        <span className="todo-text">{todo.text}</span> 
                        <button onClick={() => dispatch(toggleTodo(index))} className="toggle-btn">
                            Toggle
                        </button>
                        <button onClick={() => dispatch(removeTodo(index))} className="remove-btn">
                            Remove
                        </button>
                        </li>

                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(TodoList);

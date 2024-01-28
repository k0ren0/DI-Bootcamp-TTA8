import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

const TodoForm = ({ dispatch }) => {
    const [inputText, setInputText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (inputText.trim()) {
            dispatch(addTodo(inputText));
            setInputText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                placeholder="Add a new todo"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                className="todo-input"
            />
            <button type="submit" className="add-btn">
                Add your task
            </button>
        </form>
    );
};

export default connect()(TodoForm);

import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList'; 
import TodoForm from './TodoForm'; 

const Todo = ({ dispatch }) => {
    return (
        <div className="todo-container">

            <TodoForm /> {/* New tasks */}
            <TodoList /> {/* Lists */}
        </div>
    );
};

export default connect()(Todo);

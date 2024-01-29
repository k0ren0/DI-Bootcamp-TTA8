import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem'; 

const TodoList = () => {
    const todos = useSelector(state => state.todo.todos);
  
    return (
      <ul style={{ paddingLeft: 0 }}> {/* Remove default padding */}
        {todos.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} index={index} />
        ))}
      </ul>
    );
  };
  
  export default TodoList;

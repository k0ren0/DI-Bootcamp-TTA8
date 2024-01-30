import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todoSlice';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div>
      <input placeholder='Add your task' type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
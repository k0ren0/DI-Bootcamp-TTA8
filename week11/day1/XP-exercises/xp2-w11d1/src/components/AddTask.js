// src/components/AddTask.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../redux/actions';

const AddTask = ({ selectedDay, addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(selectedDay, { text: taskText, id: Date.now() });
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
        placeholder="Enter new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

const mapDispatchToProps = {
  addTask
};

export default connect(null, mapDispatchToProps)(AddTask);

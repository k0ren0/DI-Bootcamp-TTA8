// src/components/TasksDisplay.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

const TasksDisplay = ({ tasks, selectedDay, deleteTask, editTask }) => {
  const [editState, setEditState] = useState({});

  const startEdit = (taskId, text) => {
    setEditState({ ...editState, [taskId]: text });
  };

  const handleEditChange = (taskId, text) => {
    setEditState({ ...editState, [taskId]: text });
  };

  const handleEditSubmit = (taskId) => {
    if (editState[taskId].trim()) {
      editTask(selectedDay, taskId, { text: editState[taskId] });
      setEditState({ ...editState, [taskId]: undefined });
    }
  };

  const dayTasks = tasks[selectedDay] || [];

  return (
    <div>
      {dayTasks.map((task, index) => (
        <div key={task.id}>
          <span>{index + 1}. ({selectedDay}): </span>
          {editState[task.id] !== undefined ? (
            <input 
              type="text" 
              value={editState[task.id]} 
              onChange={e => handleEditChange(task.id, e.target.value)}
            />
          ) : (
            <span>{task.text}</span>
          )}
          {editState[task.id] !== undefined ? (
            <button onClick={() => handleEditSubmit(task.id)}>Save</button>
          ) : (
            <button onClick={() => startEdit(task.id, task.text)}>Edit</button>
          )}
          <button onClick={() => deleteTask(selectedDay, task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = {
  deleteTask,
  editTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksDisplay);

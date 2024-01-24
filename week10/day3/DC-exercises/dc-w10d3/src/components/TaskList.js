import React, { useContext, useState } from 'react';
import { TaskContext } from './TaskProvider.js';

function TaskList() {
  const { state: { tasks, filter }, dispatch } = useContext(TaskContext);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'COMPLETED') return task.completed;
    if (filter === 'ACTIVE') return !task.completed;
    return true;
  });

  const handleRemoveCompletedTasks = () => {
    dispatch({ type: 'REMOVE_COMPLETED_TASKS' });
  };

  const handleEdit = (task) => {
    setEditingId(task.id);
    setEditingText(task.text);
  };

  const handleSave = (id) => {
    dispatch({ type: 'EDIT_TASK', id: id, text: editingText });
    setEditingId(null);
    setEditingText('');
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditingText('');
  };

  return (
    <div className="todo-container">
      <div className="remove-button-container">
        <button className="remove-button" onClick={handleRemoveCompletedTasks}>
          Remove Completed Tasks
        </button>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch({ type: 'COMPLETE_TASK', id: task.id })}
            />
            {editingId === task.id ? (
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <span>{task.text}</span>
            )}
            {editingId === task.id ? (
              <>
                <button onClick={() => handleSave(task.id)}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </>
            ) : (
              <button onClick={() => handleEdit(task)}>Edit</button>
            )}
            <button onClick={() => dispatch({ type: 'REMOVE_TASK', id: task.id })}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

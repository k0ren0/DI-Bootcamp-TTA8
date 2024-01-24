import React, { useContext } from 'react';
import { TaskContext } from './TaskProvider.js';

function TaskList() {
  const { state: { tasks, filter }, dispatch } = useContext(TaskContext);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'COMPLETED') return task.completed;
    if (filter === 'ACTIVE') return !task.completed;
    return true;
  });

  const handleRemoveCompletedTasks = () => {
    dispatch({ type: 'REMOVE_COMPLETED_TASKS' });
  };

  return (
    <div>
      <button onClick={handleRemoveCompletedTasks}>Remove Completed Tasks</button>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch({ type: 'COMPLETE_TASK', id: task.id })}
            />
            {task.text}
            <button onClick={() => dispatch({ type: 'REMOVE_TASK', id: task.id })}>Remove</button>
            <button onClick={() => dispatch({ type: 'EDIT_TASK', id: task.id, text: 'New Task Text' })}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

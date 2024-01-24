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
            {task.text}
            <button onClick={() => dispatch({ type: 'REMOVE_TASK', id: task.id })}>Remove</button>
            {/* Здесь можно добавить кнопку и логику для редактирования задачи, если требуется */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

const TasksDisplay = ({ tasks, filterStartDate, filterEndDate, deleteTask, editTask }) => {
  const [editState, setEditState] = useState({});

  const startEdit = (taskId, text) => {
    setEditState({ ...editState, [taskId]: text });
  };

  const handleEditChange = (taskId, text) => {
    setEditState({ ...editState, [taskId]: text });
  };

  const handleEditSubmit = (taskId) => {
    if (editState[taskId]?.trim()) {
      editTask(filterStartDate, taskId, { text: editState[taskId] });
      setEditState({ ...editState, [taskId]: undefined });
    }
  };

  const isWithinRange = (date) => {
    const taskDate = new Date(date);
    const start = filterStartDate ? new Date(filterStartDate) : new Date(-8640000000000000); // far past date
    const end = filterEndDate ? new Date(filterEndDate) : new Date(8640000000000000); // far future date
    return taskDate >= start && taskDate <= end;
  };

  const filteredTasks = Object.entries(tasks)
    .filter(([date, _]) => isWithinRange(date))
    .reduce((acc, [date, tasksForDate]) => {
      acc[date] = tasksForDate;
      return acc;
    }, {});

  return (
    <div>
      {Object.entries(filteredTasks).map(([date, tasksForDate]) => (
        <div key={date}>
          <h3>Tasks for {date}:</h3>
          {tasksForDate.map((task, index) => (
            <div key={task.id}>
              <span>{index + 1}.: </span> 
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
              <button onClick={() => deleteTask(date, task.id)}>Delete</button>
            </div>
          ))}
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

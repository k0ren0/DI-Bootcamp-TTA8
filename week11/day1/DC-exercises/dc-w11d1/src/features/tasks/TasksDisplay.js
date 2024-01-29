import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from './tasksSlice';
import './Tasks.css';

const TasksDisplay = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [editStates, setEditStates] = useState({});
  let taskCounter = 0;

  const handleEditStart = (date, taskId, text) => {
    setEditStates({ ...editStates, [taskId]: text });
  };

  const handleTextEdit = (taskId, text) => {
    setEditStates({ ...editStates, [taskId]: text });
  };

  const handleEditSave = (date, taskId) => {
    if (editStates[taskId]?.trim()) {
      dispatch(editTask({ day: date, taskId, updatedTask: { id: taskId, text: editStates[taskId] } }));
      setEditStates({ ...editStates, [taskId]: undefined });
    }
  };

  return (
    <div>
      {Object.entries(tasks).map(([date, tasksForDate]) => (
        <div key={date}>
          <h3>Tasks for {date}:</h3>
          {tasksForDate.map((task) => {
            taskCounter++;
            return (
              <div key={task.id} className="taskItem">
                <span className="taskCounter">{taskCounter}. </span>
                {editStates[task.id] !== undefined ? (
                  <>
                    <input 
                      type="text" 
                      value={editStates[task.id]} 
                      onChange={(e) => handleTextEdit(task.id, e.target.value)}
                      className="taskInput"
                    />
                    <button 
                      onClick={() => handleEditSave(date, task.id)}
                      className="taskButton saveButton"  // Added class for Edit button color
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <span className="taskText">{task.text}</span>
                    <button 
                      onClick={() => handleEditStart(date, task.id, task.text)}
                      className="taskButton editButton"  // Added class for Edit button color
                    >
                      Edit
                    </button>
                  </>
                )}
                <button 
                  onClick={() => dispatch(deleteTask({ day: date, taskId: task.id }))} 
                  className="taskButton deleteButton"  // Added class for Delete button color
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TasksDisplay;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from './tasksSlice';

const EditTask = ({ task, selectedDay }) => {
  const [taskText, setTaskText] = useState(task.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (taskText.trim()) {
      dispatch(editTask({ day: selectedDay, taskId: task.id, updatedTask: { ...task, text: taskText } }));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
      />
      <button onClick={handleEdit}>Save</button>
    </div>
  );
};

export default EditTask;

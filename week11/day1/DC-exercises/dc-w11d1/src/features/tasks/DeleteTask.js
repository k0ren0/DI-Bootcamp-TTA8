import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from './tasksSlice';

const DeleteTask = ({ taskId, selectedDay }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask({ day: selectedDay, taskId }));
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteTask;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask, removeTask, addThunkTask, fetchAsyncTasks } from './todosSlice';

const TodoList = () => {
  const [text, setText] = useState('');
  const tasks = useSelector(state => state.todos);
  const users = useSelector((state) => state.users);
  console.log("TodoList=>", users);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          placeholder="Add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => dispatch(addTask({ text }))}>Add Task</button>
        <button onClick={() => dispatch(addThunkTask(text))}>Add Delay Task</button>
        <button onClick={() => dispatch(fetchAsyncTasks())}>Fetch Async Tasks</button>
      </div>
      <div>
        {tasks.map(task => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTask(task.id))}
            />
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.text}
            </span>
            <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;

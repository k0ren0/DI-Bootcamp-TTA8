import React from 'react';
import { useSelector } from 'react-redux';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';
import './TaskList.css';


const TaskList = ({ selectedDay }) => {
  const tasks = useSelector(state => state.tasks[selectedDay] || []);

  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div key={task.id} className="taskItem">
            <div className="taskContent">
              <span className="taskNumber">{index + 1}.</span>
              <span className="taskText">{task.text}</span>
            </div>
            <div className="taskActions">
              <EditTask task={task} selectedDay={selectedDay} />
              <DeleteTask taskId={task.id} selectedDay={selectedDay} />
            </div>
          </div>
        ))
      ) : (
        <p>No tasks for this day.</p>
      )}
    </div>
  );
};

export default TaskList;

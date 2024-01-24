import React, { useContext } from 'react';
import { TaskContext } from './TaskProvider.js';

function FilterButtons() {
  const { dispatch } = useContext(TaskContext);

  const setFilter = (filter) => {
    dispatch({ type: 'SET_FILTER', filter });
  };

  return (
    <div>
      <button onClick={() => setFilter('ALL')}>All</button>
      <button onClick={() => setFilter('COMPLETED')}>Completed</button>
      <button onClick={() => setFilter('ACTIVE')}>Active</button>
    </div>
  );
}

export default FilterButtons;

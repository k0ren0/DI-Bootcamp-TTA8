import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from './components/DatePicker';
import TasksDisplay from './components/TasksDisplay';
import AddTask from './components/AddTask';

function App() {
  const [selectedDay, setSelectedDay] = useState(new Date().toISOString().split('T')[0]);
  const [filterStartDate, setFilterStartDate] = useState('');
  const [filterEndDate, setFilterEndDate] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Daily Planner</h1>
        <DatePicker onDateChange={setSelectedDay} />
        <div>
          <label>
            Filter Start Date:
            <input type="date" onChange={e => setFilterStartDate(e.target.value)} />
          </label>
          <label>
            Filter End Date:
            <input type="date" onChange={e => setFilterEndDate(e.target.value)} />
          </label>
        </div>
        <AddTask selectedDay={selectedDay} />
        <TasksDisplay 
          selectedDay={selectedDay} 
          filterStartDate={filterStartDate} 
          filterEndDate={filterEndDate} 
        />
      </header>
      <main>

      </main>
    </div>
  );
}

export default App;

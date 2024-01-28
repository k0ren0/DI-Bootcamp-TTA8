import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from './components/DatePicker';
import TasksDisplay from './components/TasksDisplay';
import AddTask from './components/AddTask';

function App() {
  const [selectedDay, setSelectedDay] = useState(new Date().toISOString().split('T')[0]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Daily Planner</h1>
        <DatePicker onDateChange={setSelectedDay} />
        <TasksDisplay selectedDay={selectedDay} />
        <AddTask selectedDay={selectedDay} />
      </header>
      <main>

      </main>
    </div>
  );
}

export default App;

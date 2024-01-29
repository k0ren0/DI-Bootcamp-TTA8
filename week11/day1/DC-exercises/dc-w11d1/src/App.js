import React, { useState } from 'react';
import { AddTask } from './features/tasks/AddTask';
import TasksDisplay from './features/tasks/TasksDisplay'; // Updated import path
import DatePicker from './features/tasks/DatePicker'; // Updated import path
import './App.css';
import logo from './logo.svg';


function App() {
  const [selectedDay, setSelectedDay] = useState(new Date().toISOString().split('T')[0]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Daily Planner</h1>
        <DatePicker onDateChange={setSelectedDay} />
        <AddTask selectedDay={selectedDay} />
        <TasksDisplay selectedDay={selectedDay} />
      </header>
      <main>
        {/* Additional content can go here */}
      </main>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import AddTask from './features/tasks/AddTask';
import TasksDisplay from './features/tasks/TasksDisplay'; 
import DatePicker from './features/tasks/DatePicker'; 
import logo from './logo.svg';
import './App.css';



function App() {
  const [selectedDay, setSelectedDay] = useState(new Date().toISOString().split('T')[0]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Planner Application</h1>
        <DatePicker onDateChange={setSelectedDay} />
        <AddTask selectedDay={selectedDay} />
        <TasksDisplay selectedDay={selectedDay} />
      </header>
      {/* <main>
        
      </main> */}
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import TasksList from './features/tasks/TaskList';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TasksList/>

      </header>
    </div>
  );
}

export default App;

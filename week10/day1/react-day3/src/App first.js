import { useState } from 'react';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    username: '',
    yesno: false,
    numbers: '-1', // Default value for select
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const handleInputs = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;

    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e) => handleSubmit(e)} >
          <div className="form-group">
            <label>Email:</label>
            <input
              name='email'
              type='text'
              onChange={(e) => handleInputs(e)}
              value={inputs.email}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              name='password'
              type='text'
              onChange={(e) => handleInputs(e)}
              value={inputs.password}
            />
          </div>

          <div className="form-group">
            <label>User:</label>
            <input
              name='username'
              type='text'
              onChange={(e) => handleInputs(e)}
              value={inputs.username}
            />
          </div>

          <div className="form-group">
            <label>Yes/No:</label>
            <input
              name='yesno'
              type='checkbox'
              onChange={(e) => handleInputs(e)}
              checked={inputs.yesno}
            />
          </div>

          <div className="form-group">
            <label>Choose a number:</label>
            <select
              name="numbers"
              onChange={(e) => handleInputs(e)}
              value={inputs.numbers}
            >
              <option value="-1">Choose a number</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="form-group">
            <input type='submit' value="Send" />
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;

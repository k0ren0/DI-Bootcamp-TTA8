import React from 'react';
import './App.css'; 

function App() {
  const fetchData = async () => {

    const url = '/511bce24-4fac-4e72-b074-79dbba28006d';
    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

 
      if (!response.ok) {
        throw new Error(`Network response was not ok, status: ${response.status}`);
      }

      let jsonResponse;
      if (response.headers.get('content-type').includes('application/json')) {
        jsonResponse = await response.json();
      } else {
        const textResponse = await response.text();
        console.error('Server response:', textResponse);
        throw new Error('Server did not return JSON');
      }

      console.log(jsonResponse);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchData}>Fetch Data</button>
      </header>
    </div>
  );
}

export default App;

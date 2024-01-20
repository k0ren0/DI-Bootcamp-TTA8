import React, { useState } from 'react';

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(event.target.value);
    }
  };

  const toggleState = () => {
    setIsToggleOn(!isToggleOn);
  };

  // Define colors for ON and OFF
  const onColor = 'green';
  const offColor = 'red';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button
        onClick={clickMe}
        style={{
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          color: 'blue',
          marginBottom: '16px', // Add margin to separate buttons
        }}
      >
        Click Me
      </button>
      <br />
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Press Enter key!"
        style={{
          width: '200px', 
          textAlign: 'center', 
        }}
      />
                <br />
      <button
        onClick={toggleState}
        style={{
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          color: isToggleOn ? onColor : offColor, 
          marginBottom: '16px', 
        }}
      >
        {isToggleOn ? 'ON' : 'OFF'}
      </button>




    </div>
  );
}

export default Events;

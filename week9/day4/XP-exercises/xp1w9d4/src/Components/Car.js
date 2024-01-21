import React, { useState } from 'react';
import Garage from './Garage';

function Car({ carInfo }) {
    const [color, setColor] = useState('');

    const updateColor = (newColor) => {
        setColor(newColor);
    };

    return (
    <div>
        <h1>This car is {color} {carInfo.model}</h1>
        <button onClick={() => updateColor('White')}>Change Color to White</button>
        <button onClick={() => updateColor('Blue')}>Change Color to Blue</button>
    
        <Garage size="small" />
    </div>
    );



}


export default Car;
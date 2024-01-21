import React, { useState } from "react";

function Phone() {
    const [phoneInfo, setPhoneInfo] = useState({
        brand: 'Samsung',
        model: 'Galaxy S20',
        color: 'black',
        year: 2020,
    });

    const changeColor = () => {
        setPhoneInfo({
            ...phoneInfo,
            color: "blue",
        });
    }

    return (
        <div> 
        <h1> Phone Information</h1>
        <p>Brand: {phoneInfo.brand}</p>
        <p>Model: {phoneInfo.model}</p>
        <p>Color: {phoneInfo.color}</p>
        <p>Year: {phoneInfo.year}</p>
        <button onClick={changeColor}> Change color to Blue </button>
        </div>
    );
}

export default Phone;
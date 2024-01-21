import React, {useEffect, useState} from "react";

function Color() {
    const [favoriteColor, setFavoriteColor] = useState("red");
    
     useEffect(() => {
        alert("useEffect reached");
     }, []);

     const changeColorToBlue = () => {
        setFavoriteColor("blue");
     };

    return (
        <div>
            <h1>My Favorite Color is {favoriteColor}</h1>
            <button onClick={changeColorToBlue}> Change color to Blue</button>
        </div>
    );
}

export default Color;
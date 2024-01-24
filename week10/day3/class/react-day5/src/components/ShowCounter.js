import React, { useContext } from 'react';
import { AppContext } from '../App';
import Name from './Name';


const ShowCounter = (props) => {
    const {count} = useContext(AppContext)
    return (
        <div>
            <h2>Counter: {count}</h2>
            <Name age={props.age}/>
        </div>
    );
};

export default ShowCounter;

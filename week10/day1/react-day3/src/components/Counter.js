import { useState } from "react";

const Counter = (props) => {
    const[count, setCount] = useState(0)

    return(
        <>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => setCount(count - 1)}>Del</button>
            <p>{count}</p>
        </>
    );
};

export default Counter;
import { useContext } from "react";
import { AppContext } from "../App";
const Increment = (props) => {
    const {count, setCount, name} = useContext(AppContext);
    return (

        <>
        <button
            onClick={() => {
                setCount(count +1);
            }}
        >
            {" "}
            +{" "}
        </button>
       <h2>{name}</h2>
        </>
    );
};

export default Increment;
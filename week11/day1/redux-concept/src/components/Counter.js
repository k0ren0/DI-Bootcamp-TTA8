import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../redux/actions";


const Counter = props => {
    const countA = useSelector((state) => state.counterReducer.count);
    const textA = useSelector((state) => state.counterReducer.text);
    const { count, text } = useSelector(state => state.counterReducer);
    
    
    const dispatch = useDispatch();
    // console.log(props);
    return (
        <>
        <div>Count: {count} <p>{text}</p></div>
        <div>Count: {countA} <p>{textA}</p></div>

        <button onClick={() => dispatch(increment(1, "by 1"))}> + </button>     
        <button onClick={() => dispatch({type: "decrement", payload: 1, text: "lalala" })}> - </button>     
        </>
    );
};

export default Counter;

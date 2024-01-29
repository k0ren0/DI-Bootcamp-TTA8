import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, rest, incrementByNumber, incrementWithPrepare } from "./counterSlice";

const Counter = (props) => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return (
        <>
     <h2>Count: {count}</h2>   
     <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(rest())}> Reset</button>
     </div>

     <div>
       Number: <input />
        <button onClick={() => dispatch(incrementByNumber({num1:5, num2:6}))}>
            {" "}
            Increment by Number
            {" "}
            </button>
     </div>
     <div>
       {/* Number: <input /> */}
        <button onClick={() => dispatch(incrementWithPrepare(15, 16))}>
            {" "}
            Increment by Number
            {" "}
            </button>
     </div>
        </>
    );
};

export default Counter;
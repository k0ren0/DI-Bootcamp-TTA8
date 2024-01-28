import { connect, useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../redux/actions";


const Counter = props => {
    console.log(props);
    return (
        <>
        <div>Count: {props.count} <p>{props.text}</p></div>
        <button onClick={() => props.setCount(10)}> + </button>     
        <button onClick={() => props.dec(1)}> - </button>     
        </>
    );
};

// const mapStateToProps = (state) => {
//     console.log("storeState=>", state);
//     return {
//         count: state.counterReducer.count,
//         text: state.counterReducer.text
//     };
// };

// const mapDispatchToProch = (dispatch) => {
//     return {
//         setCount: (value) => dispatch(increment(value, "increment by" + value)),
//         // type: "increment",
//         // payload: value,
//         // text: "Increment by" + value,
//         dec: (value) => dispatch(decrement(value, "Decrement by " + value))
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProch)(Counter);

export default Counter;
import { useSelector, useDispatch } from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../age/ageSlice'; 
import logo from './logo.svg'; 

const AgeControl = () => {
    const age = useSelector((state) => state.age.age);
    const loading = useSelector((state) => state.age.loading);
    const dispatch = useDispatch();

    return (
        <div> 
            {loading ? (
                <img src={logo} style = {{width: "200px"}} alt="Loading..." className="loading-img" />
            ) : (
                <>
                    <div>Age: {age}</div>
                    <button onClick={() => dispatch(ageUpAsync())}>Age Up</button>
                    <button onClick={() => dispatch(ageDownAsync())}>Age Down</button>
                </>
            )}
        </div>
    );
};

export default AgeControl;

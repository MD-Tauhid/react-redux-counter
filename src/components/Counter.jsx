import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCount, increaseCount, resetCount } from '../services/actions/counterAction';

const Counter = () => {
    const count = useSelector((state)=>state.count);
    const dispatch = useDispatch();

    const handleIncrease = () =>{
        dispatch(increaseCount());
    }
    const handleDecrease = () =>{
        dispatch(decreaseCount());
    }
    const handleReset = () =>{
        dispatch(resetCount());
    }


    return (
        <div>
            <h1>React redux counter</h1>
            <h3>Lets handle the state with redux</h3>
            <h4>Count: {count}</h4>
            <button style={{marginRight:"12px"}} onClick={handleIncrease}>Increase</button>
            <button style={{marginRight:"12px"}} onClick={handleDecrease}>Decrease</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;
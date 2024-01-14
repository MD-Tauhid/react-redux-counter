import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCount } from '../services/actions/counterAction';

const Counter = () => {
    const count = useSelector((state)=>state.count);
    const dispatch = useDispatch();

    const handleIncrease = () =>{
        dispatch(increaseCount);
    }


    return (
        <div>
            <h1>React redux counter</h1>
            <h3>Lets handle the state with redux</h3>
            <h4>Count: {count}</h4>
            <button style={{marginRight:"12px"}} onClick={handleIncrease}>Increase</button>
            <button>Decrease</button>
        </div>
    );
};

export default Counter;
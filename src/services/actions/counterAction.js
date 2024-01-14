import { DECREASE, INCREASE, RESET } from "../constants/counterConstant"

export const increaseCount = () =>{
    return {
        type: INCREASE,
    }
}
export const decreaseCount = () =>{
    return {
        type: DECREASE,
    }
}
export const resetCount = () =>{
    return {
        type: RESET,
    }
}

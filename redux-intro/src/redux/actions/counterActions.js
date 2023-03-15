import * as actionTypes from './actionTypes';

export const increaseCount=()=>({
    type: actionTypes.INCREASE,
    payload: 1
})

export const decreaseCount = ()=>({
    type: actionTypes.DECREASE,
    payload: 1
})

export const increaseBy2Count = ()=>({
    type: actionTypes.INCREASE_BY_2,
    payload: 2
})
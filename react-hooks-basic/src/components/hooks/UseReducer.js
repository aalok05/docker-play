import React,{useState, useReducer} from 'react';

const initialState = {
    count : 0
}

const reducer = (state,action) => {
    switch(action.type){
        case 'D':
            return {count : state.count - action.value}
        

        case 'I':
            return {count: state.count + action.value}
        

        default : 
            return {count : state}
    }
}

function UseReducer() {

    const [newCount, dispatch] = useReducer(reducer, initialState);
    // const [newCount2, dispatch2] = useReducer(reducer, initialState);  Using multipme useReducer

    console.log(newCount)

    return (

        <div>
            <p>Count : {newCount.count}</p>
            <div>
                <button onClick = {e => dispatch({type:'I', value:1})}>INCREASE</button>
                <button onClick = {e => dispatch({type:'D', value:1})}>DECREASE</button>
                <button onClick = {e => dispatch({})}>RESET</button>

            </div>

        </div>
    )
}

export default UseReducer

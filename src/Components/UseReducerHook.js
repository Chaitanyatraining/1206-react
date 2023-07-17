import React, { useReducer } from 'react'

 const UseReducerHook = () => {
    // reducer is used to update the state based on action
    // and return the updated state
    //INCREMENT
    //DECREMENT

    const reducer = (currentState, action) =>{
        console.log(currentState)
        console.log(action)
        switch (action.type){
            case  "INCREMENT":
                return currentState + action.payload;
            case  "DECREMENT":
                return currentState - action.payload; 
        }
        return currentState;
    }                           

    const [count, dispatch] = useReducer(reducer, 0)
  return (
    <>
        <h2>Count : {count}</h2>
        <button className='btn btn-primary me-2' 
        onClick={()=>{
            dispatch({type: "INCREMENT", payload: 5})
        }}
        >Increment</button>
        <button className='btn btn-danger me-2'
         onClick={()=>{
            dispatch({type: "DECREMENT", payload: 5})
        }}
        >Decrement</button>
    </>
  )
}
export default UseReducerHook

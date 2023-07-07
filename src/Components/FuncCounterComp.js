import React, {useState} from 'react'

const FuncCounterComp = () => {
   const [count, setCount] = useState(0)
   const [products, setProducts] = useState({})

  //  Rules 
// always declare the state at the top level
// don't call hooks in loops, nested function, nested conditions

const handleIncrement = () =>{
    setCount(count + 1)
}

  return (
    <div>
        <h2>FuncCounterComp</h2>
        <h3>Count : {count}</h3>
        <button className='btn btn-primary me-1'
        onClick={()=>{setCount(count + 1)}}
        >Increment</button>

        <button className='btn btn-danger'
        onClick={()=>{setCount(count + 1)}}
        >Decrement</button>
    </div>
  )
}

export default FuncCounterComp
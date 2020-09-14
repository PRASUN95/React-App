import React, { useState } from 'react'

function Hooks() {
    const [count, getCount] = useState(0);
    const [state,setState] = useState({name : 'prasun',age : 25})

    const name = state.name
    const age = state.age
    function decrement() {
        getCount(prevCount => prevCount - 1)
    }
    function increment() {
        getCount(prevCount => prevCount + 1)
    }
    function addup(){
        setState(prevState => {
            return {...prevState,age : prevState.age + 60}
        })
    }
    return (
        <>
            {/* <input type="text" onChange={(e) => getName(e.target.value)} /> */}
            <button onClick={decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>
            <button onClick={addup}>Add</button>
            {name} {age}
        </>
    )
}
export default Hooks

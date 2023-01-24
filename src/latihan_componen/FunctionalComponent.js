import React, { useState } from 'react'

export default function FunctionalComponent() {

    const [Count, setCount] = useState(0)

    const increment = () => {
        setCount(Count + 1)
    }

    const decrement = () =>{
        setCount(Count - 1)
    }

    return (
        <div>
            <h1>{Count}</h1>
            <br></br>
            <button type="button" onClick={decrement}>-</button>
            <button type="button" onClick={increment}>+</button>
        </div>
    )
}

import React, { useState } from 'react'

function Useofstate() {
    const [count, setCount] = useState(100)
    function Increment() {
        setCount(count + 4)
    }
    function Decrement() {
        setCount(count - 10)
    }

    return (
        <div>
            <div>
                <h2>{count}</h2>
            </div>
            <div>
                <button onClick={Increment}>Do Increment</button>
                <button onClick={Decrement}>Do Decrement</button>
            </div>
        </div>
    )
}

export default Useofstate
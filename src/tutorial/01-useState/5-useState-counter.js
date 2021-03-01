import React, { useState } from 'react'

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0)

  const complexIncrease = () => (
    // Functional approach to update our counter
    setTimeout(() => setCounter(prev => prev + 1), 2000)
  )

  return (
    <React.Fragment>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{counter}</h1>
        <button className='btn' onClick={() => setCounter(counter - 1)}>
          decrease
        </button>
        <button className='btn' onClick={() => setCounter(0)}>
          reset
        </button>
        <button className='btn' onClick={() => setCounter(counter + 1)}>
          increase
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>more complex counter</h2>
        <h1>{counter}</h1>
        <button className='btn' onClick={complexIncrease}>
          increase async
        </button>
      </section>
    </React.Fragment>
  )
}

export default UseStateCounter

import React, { useState } from 'react'

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <React.Fragment style={{ margin: '4rem 0' }}>
      <section>
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
    </React.Fragment>
  )
}

export default UseStateCounter

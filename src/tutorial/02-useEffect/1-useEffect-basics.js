import React, { useState, useEffect } from 'react'

// useEffect hook allows you to do side effect
// By default, it runs after every re-render
// It is used to do some work outside of the component
// That could be: changing document title, fetching data, etc.
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (value > 0)
      document.title = `New messages (${value})`
    else
      document.title = 'Not new messages'

    // We can pass a second argument to the use effect function, if we pass an
    // empty array, it will be executed at the initial render.
    // Instead, we can pass the values that our useEffect will listen to, whenever
    // one of them changes, this hook will be executed.
  }, [value])

  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </React.Fragment>
  )
}

export default UseEffectBasics

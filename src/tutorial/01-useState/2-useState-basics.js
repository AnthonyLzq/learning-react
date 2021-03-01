import React, { useState } from 'react'

// Rules for hooks
// All the hooks starts with "use"
// The component must be PascalCase
// Hooks must be in the component body
// Hooks can't be called conditionally

const UseStateBasics = () => {
  const [title, setTitle] = useState('random title')

  const handleClick = () => {
    if (title === 'random title')
      setTitle('hello world')
    else
      setTitle('random title')
  }

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics

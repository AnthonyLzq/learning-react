import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name   : 'Anthony',
    age    : 24,
    message: 'random message'
  })

  const changeMessage = () => {
    let message

    if (person.message === 'random message') message = 'hello world'
    else message = 'random message'

    setPerson({ ...person, message })
  }

  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </React.Fragment>
  )
}

export default UseStateObject

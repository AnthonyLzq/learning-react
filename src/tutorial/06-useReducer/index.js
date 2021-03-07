import React from 'react'

import Modal from './Modal'
import { reducer } from './reducer'

const defaultState = {
  modalContent: 'Hello World',
  people      : [],
  showModal   : false
}

const Index = () => {
  const [name, setName] = React.useState('')
  const [state, dispatch] = React.useReducer(reducer, defaultState)

  const handleSubmit = e => {
    e.preventDefault()

    if (name) {
      dispatch({
        type  : 'ADD_PERSON',
        person: {
          id: new Date().getTime().toString(),
          name
        }
      })
      setName('')
    } else dispatch({ type: 'EMPTY_PERSON' })
  }

  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' })

  return (
    <React.Fragment>
      {state.showModal && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add</button>
      </form>
      {state.people.map(person => (
        <div className='item' key={person.id}>
          <h4>{person.name}</h4>
          <button
            onClick={() => dispatch({ type: 'REMOVE_PERSON', id: person.id })}
          >
            Remove person
          </button>
        </div>
      ))}
    </React.Fragment>
  )
}

export default Index

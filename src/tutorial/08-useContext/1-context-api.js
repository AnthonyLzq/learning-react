import React from 'react'
import { data } from '../../data'

const PersonContext = React.createContext()
// two components - provides, consumer

const SinglePerson = ({ id, name }) => {
  const { removePerson } = React.useContext(PersonContext)

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

const List = () => {
  const { people } = React.useContext(PersonContext)

  return (
    <React.Fragment>
      {people.map(person => (
        <SinglePerson
          key={person.id}
          {...person}
        />
      ))}
    </React.Fragment>
  )
}

const ContextAPI = () => {
  const [people, setPeople] = React.useState(data)
  const removePerson = id => (
    setPeople(people.filter(person => person.id !== id))
  )

  return (
    <PersonContext.Provider value={{ people, removePerson }}>
      <h3>use context / useContext</h3>
      <List />
    </PersonContext.Provider>
  )
}

export default ContextAPI

import React from 'react'
import { data } from '../../data'

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

const List = ({ people, removePerson }) => {
  return (
    <React.Fragment>
      {people.map(person => (
        <SinglePerson
          key={person.id}
          {...person}
          removePerson={removePerson}
        />
      ))}
    </React.Fragment>
  )
}

const PropDrilling = () => {
  const [people, setPeople] = React.useState(data)
  const removePerson = id => (
    setPeople(people.filter(person => person.id !== id))
  )

  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  )
}

export default PropDrilling

import React from 'react'
import { Link } from 'react-router-dom'

import { data } from '../../data'

const People = () => {
  const [people] = React.useState(data)

  return (
    <div>
      <h1>People Page</h1>
      {people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <Link to={`/person/${person.id}`}>Learn more</Link>
          </div>
        );
      })}
    </div>
  )
}

export default People

import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { data } from '../../data'

const Person = () => {
  const [name, setName] = React.useState('default name')
  const { id } = useParams()

  React.useEffect(() => {
    const person = data.find(person => person.id === parseInt(id))

    setName(person.name)
  }, [id])

  return (
    <div>
      <h1>{name}</h1>
      <Link className='btn' to='/people'>
        back to people
      </Link>
    </div>
  )
}

export default Person

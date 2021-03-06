import React, { useEffect, useState } from 'react'

const url = 'https://api.github.com/users/AnthonyLzq'

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [user, setUser] = useState('default user')

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (res.status === 200)
          return res.json()

        setIsLoading(false)
        setIsError(true)
        setErrorMessage(res.statusText)

        throw new Error(res.statusText)
      })
      .then(user => {
        const { login } = user

        setIsLoading(false)
        setUser(login)
      })
      .catch(error => {
        console.error(error)
        setIsError(true)
      })
  }, [])

  return (
    <div>
      {
        isLoading ? (
          <h1>Loading...</h1>
        ) : isError ? (
          <React.Fragment>
            <h1>Error...</h1>
            <h2>{errorMessage}</h2>
          </React.Fragment>
        ) : <h1>{user}</h1>
      }
    </div>
  )
}

export default MultipleReturns

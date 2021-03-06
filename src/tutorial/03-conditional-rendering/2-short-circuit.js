import React from 'react'

const ShortCircuit = () => {
  const [text] = React.useState('')
  const [isError, setIsError] = React.useState(false)

  return (
    <React.Fragment>
      {/* If the first one is false (falsy), returns the second one */}
      <h1>{text || 'John Doe'}</h1>
      {/* If the first one is true (truthy), returns the second one */}
      <h1>{text && 'Hello World'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        Show Error
      </button>
      {isError ? (
        <React.Fragment>
          <h1>Error</h1>
          <p>There is an error...</p>
        </React.Fragment>
      ) : (
        <h1>There is no error</h1>
      )}
    </React.Fragment>
  )
}

export default ShortCircuit

import React from 'react'

// Preserves value
// Does not trigger re-render
// Target DOM nodes/elements

const UseRefBasics = () => {
  const [value, setValue] = React.useState('')
  const refContainer = React.useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    setValue(refContainer.current.value)
    refContainer.current.value = ''
  }

  React.useEffect(() => refContainer.current.focus(), [value])

  return (
    <React.Fragment>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
          <button type='submit'>submit</button>
        </div>
      </form>
      {value !== '' && <div className='item'>{value}</div>}
    </React.Fragment>
  )
}

export default UseRefBasics

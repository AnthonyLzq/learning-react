import React from 'react'

const Item = () => {
  const [size, setSize] = React.useState(window.innerWidth)

  const checkSize = () => setSize(size)

  React.useEffect(() => {
    window.addEventListener('resize', checkSize)

    return () => window.removeEventListener('resize', checkSize)
  })

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>Window</h1>
      <h2>Size: {size}px</h2>
    </div>
  )
}

const ShowHide = () => {
  const [show, setShow] = React.useState(false)

  return (
    <React.Fragment>
      <button className='btn' onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </React.Fragment>
  )
}

export default ShowHide

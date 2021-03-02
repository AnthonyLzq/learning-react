import React, { useEffect, useState } from 'react'

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => setSize(window.innerWidth)

  // One possible approach may be adding the event listener in the first render
  // useEffect(() => window.addEventListener('resize', checkSize), [])

  // Another possible approach may be using a cleanup function
  useEffect(() => {
    window.addEventListener('resize', checkSize)

    // We can return a function to clean up a side effect
    return () => window.removeEventListener('resize', checkSize)
  })

  return (
    <React.Fragment>
      <h1>window</h1>
      <h2>{size}px</h2>
    </React.Fragment>
  )
}

export default UseEffectCleanup

import React from 'react'
import ReactDOM from 'react-dom'

// Stateless functional component
// Always return JSX - single element
// Use camelCase for HTML attributes
// className instead of class
// Close every element
const Greeting = () => (
  <h4>This is Anthony, and this is my first component</h4>
)

ReactDOM.render(<Greeting />, document.getElementById('root'))

import { useState } from 'react'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi velit minima cum quas odio, quisquam voluptates vitae aliquam, mollitia vero illo ullam quae repudiandae quam incidunt sapiente quod! Recusandae, sed.
      </p>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value)
  }

  return (
    <>
      <section>
        <input type="text" value={name} onChange={handleChange}/>
        <h1>Hola Mundo, yo soy {name}</h1>
      </section>
    </>
  )
}

export default App

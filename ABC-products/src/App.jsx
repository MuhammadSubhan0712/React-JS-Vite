import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <br /><br />
    <Cards/>
    </>
  )
}

export default App

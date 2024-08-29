import { useState } from 'react'
import Button from './components/button'
import Navbar from './components/navbar'
import Cards from './components/cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h1>Components</h1>
<Button/>
<Navbar/>
<Cards/>
</>
  )
}


export default App

import { useState } from 'react'
import Button from './components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h1>Components</h1>
<Button/>
<Button/>

<Button/>
<Button/>
<Button/>

</>
  )
}


export default App

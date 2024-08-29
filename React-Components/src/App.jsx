// import { useState } from 'react'
import React from 'react'
import Navbar from './navbar'
import Cards from './cards'
import Footer from './footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <nav>
    <Navbar/>
    </nav>
<br /><br />
    <div>
     <Cards/>
    </div>


<footer>
<Footer/>
</footer>
</>
  )
}



export default App

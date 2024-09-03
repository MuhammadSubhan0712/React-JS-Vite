import React from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Cards from './components/Cards'

function App() {
  const items = {}

  return (
    <>
   
    <div>
    <Navigation/>
    </div>
  
  <div className='card-container'>
    <div >
    <Cards image="https://mobiletrade.pk/wp-content/uploads/2024/05/3-10.png.webp" title="Vivo Y93" price="30000" location="Karachi" contact="012313144151"/>
    <Cards image="https://mobiletrade.pk/wp-content/uploads/2024/05/3-10.png.webp" title="Vivo Y93" price="30000" location="Karachi" contact="012313144151"/>
    <Cards image="https://mobiletrade.pk/wp-content/uploads/2024/05/3-10.png.webp" title="Vivo Y93" price="30000" location="Lahore" contact="012313144151"/>
    <Cards image="https://mobiletrade.pk/wp-content/uploads/2024/05/3-10.png.webp" title="Vivo Y93" price="30000" location="Islamabad" contact="012313144151"/>
    <Cards image="https://mobiletrade.pk/wp-content/uploads/2024/05/3-10.png.webp" title="Vivo Y93" price="30000" location="Quetta" contact="012313144151"/>
    <Cards image="https://mobiletrade.pk/wp-content/uploads/2024/05/3-10.png.webp" title="Vivo Y93" price="30000" location="Karachi" contact="012313144151"/>
    <Cards image="https://mobiletrade.pk/wp-content/uploads/2024/05/3-10.png.webp" title="Vivo Y93" price="30000" location="Lahore" contact="012313144151"/>
    <Cards image="https://mobiletrade.pk/wp-content/uploads/2024/05/3-10.png.webp" title="Vivo Y93" price="30000" location="Sukkur" contact="012313144151"/>
    <Cards image="https://mobiletrade.pk/wp-content/uploads/2024/05/3-10.png.webp" title="Vivo Y93" price="30000" location="Islamabad" contact="012313144151"/>
  </div>
  </div>

    </>
  )
}

export default App

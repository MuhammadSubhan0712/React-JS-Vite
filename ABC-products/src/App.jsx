import React from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Cards from './components/Cards'
import Footer from './components/footer'

function App() {
  const items = {}

  return (
    <>
   
    <div>
    <Navigation/>
    </div>
  
  <div className='card-container'>
    <Cards image="https://images.olx.com.pk/thumbnails/466774088-240x180.jpeg" title="Realme Note-50" price="35000" location="Karachi" contact="012313144151"/>
    <Cards image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ08nMkQVS3uoqukvYh14m4gjoVqmn6RricAQ&s" title="Civic 2022" price="4500000" location="Karachi" contact="012313144151"/>
    <Cards image="https://cache2.pakwheels.com/ad_pictures/8028/honda-cd-70-3-2022-80288052.webp" title="Honda CD-70 2022" price="90000" location="Lahore" contact="012313144151"/>
    <Cards image="https://cache3.pakwheels.com/ad_pictures/1042/suzuki-mehran-1993-104283912.webp" title="Suzuki Mehran 1993" price="400000" location="Islamabad" contact="012313144151"/>
    <Cards image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp9usGN54xbvsszfcuizDEmpS6_VRtO9hNmw&s" title="All Brands" price="20000 - 50000" location="Quetta" contact="012313144151"/>
    <Cards image="https://orient.com.pk/cdn/shop/articles/season_end_sale.jpg?v=1597754442" title="Orient Full Package" price="250000" location="Karachi" contact="012313144151"/>
    <Cards image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe21GumL9nwjZ8Ct_Uj1B5IMqA_czoKWFxIQ&s" title="Asia Washing Machine" price="150000" location="Lahore" contact="012313144151"/>
    <Cards image="https://images.olx.com.pk/thumbnails/459246106-240x180.jpeg" title="inverex Solar Inverter " price="60000" location="Sargodha" contact="012313144151"/>
    <Cards image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEzsYx4kbf259hLe-MivaPIyFBjysF0yasg&s" title="Haier DC Inverter" price="160000" location="Islamabad" contact="012313144151"/>
    <Cards image="https://images.olx.com.pk/thumbnails/204336742-240x180.jpeg" title="Samson Digital Stablizer" price="20000" location="Sukkur" contact="06423144151"/>
    <Cards image="https://images.olx.com.pk/thumbnails/480794840-240x180.jpeg" title="Ceiling Fan " price="15000" location="Karachi" contact="012314151"/>
    <Cards image="https://images.olx.com.pk/thumbnails/381547091-240x180.jpeg" title="Outdoor Lights" price="50000" location="Islamabad" contact="01234151"/>
  </div>
  <br /><br />
<div>

<Footer/>
</div>
    </>
  )
}


export default App

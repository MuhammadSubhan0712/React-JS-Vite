import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [Weatherdata, setWeatherdata] = useState([])
  const Uinput = useRef()

  useEffect(()=>{
  
} , [status])


function status(event) {
  event.preventDefault();
  
  (Uinput.current.value === " ") ? 
  alert("Let's have something Please Enter City") :
  
  axios(`https://api.weatherapi.com/v1/current.json?key=569c0fa5727f4e9387350542241406 &q=${Uinput.current.value}&aqi=no`)
.then(res =>{
  console.log(res.data);
  Weatherdata.unshift(res.data)
  setWeatherdata([...Weatherdata]) 
  console.log(Weatherdata);
  }
  )
.catch(err =>{
  console.log("Error==>", err);
  alert("!There is an Error Please try Again!")
})

Uinput.current.value = ""
}


  return (
    <>
    <h1 className='h1'>Weather App</h1>


    <form onSubmit={status}>
     
     <input type="text" placeholder='Enter City to check Weather' ref={Uinput} />

     <button>Search</button>

    </form>


    <div className='Card-container'>
  {(
    Weatherdata.map((item , index)=>
  (<div key={index}>
   <h2>{item.location.name}</h2>
   <h3>{item.location.country}</h3>
   <h3>{item.current.temp_c}°C</h3>
   <h3>{item.current.condition.text}</h3>
   <p>{item.current.humidity}%</p>
   <p>{item.current.wind_kph}kph</p>
    </div>
  ))
  )}
    </div>
    </>
  )
}
export default App

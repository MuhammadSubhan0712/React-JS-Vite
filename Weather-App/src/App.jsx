import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [Weatherdata, setWeatherdata] = useState([])
  const Uinput = useRef()

  useEffect(()=>{
  
} , [status])

// Function status 
function status(event) {
  event.preventDefault();
  
  (Uinput.current.value === "") ? 
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
  alert("!Please Enter correct City Name")
})

Uinput.current.value = ""
}


  return (
    <>
    <h1 className='h1'>Weather App <i className="fas fa-cloud-sun"></i></h1>


    <form className='form' onSubmit={status}>
     
     <input type="text" placeholder='Enter City to check Weather' ref={Uinput} />
     <button><i className="fas fa-search"></i></button>

    </form>


    <div className='Card-container'>
  {(
    Weatherdata.map((item , index)=>
  (<div key={index}>
   <h3><span>{item.location.name} , "{item.location.country}"</span></h3>
   <h4>Region: <span>{item.location.region}</span></h4>
   <h4>Temp: <span>{item.current.temp_c}°C</span></h4>
   <h4>LocalTime: <span>{item.location.localtime}</span></h4>
   <h4>Humidity: <span>{item.current.humidity}%</span></h4>
   <h4>Wind: <span>{item.current.wind_kph} kph</span></h4>
   <img src={item.current.condition.icon} alt="Icon" />

  </div>
  ))
  )}
    </div>
    </>
  )
}
export default App

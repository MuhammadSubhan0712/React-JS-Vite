import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setdata] = useState([])
  const card = useRef()

  useEffect(()=>{
    
  // axios(
  //   `https://api.weatherapi.com/v1/current.json?key=569c0fa5727f4e9387350542241406 &q=${input.value}&aqi=no`
  // )
    
axios("https://api.weatherapi.com/v1/current.json?key=569c0fa5727f4e9387350542241406 &q=&aqi=no")
.then((res) =>{
   console.log(res.data)})

.catch((err) =>{
  console.log("Error==>", err)})
}
)






  return (
    <>
      <div>
        <h1 style={{textAlign:"center",
          color:"wheat",
          backgroundColor:"gray"
        }}>W E A T H E R || A P P </h1>

        <form >
          <input type="text" placeholder='Enter City to Check Weather' ref={data}/>
        </form>

        </div>
    </>
  )
}

export default App

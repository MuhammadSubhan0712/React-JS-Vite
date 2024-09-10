import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [data, setdata] = useState(0)


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))
    setdata(response)
    .catch(err => console.log("Error ==>",console.err));
  }, [])
 
  return (
    <>
    </>
  )
}

export default App

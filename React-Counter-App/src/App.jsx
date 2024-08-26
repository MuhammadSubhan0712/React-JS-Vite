import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
const Add = ()=>{
console.log("Addition" , count  +  1);
setCount(count + 1);

}
const Sub = ()=>{
console.log("Subtraction" , count  -  1);
setCount(count - 1);

}
const Reset = ()=>{
console.log("Reset" , count * 0);
setCount(count * 0);
}

  return (
    <>
    <div className='d-flex mt-5 justify-content-center'>
      <div className='text-center '>
    <h1 className='bg-dark bg-gradient text-white p-2 border'>Counter</h1>
    </div>
    <div className='text-center bg-light bg-gradient'>
    <h3 className=' p-2 bg-white text-grey'>{count}</h3>
    <button className='btn btn-primary bg-primary bg-gradient text-size' onClick={Add}>+</button>
    <button className='btn btn-warning bg-warning bg-gradient' onClick={Reset}>Reset</button>
    <button className='btn btn-danger bg-danger bg-gradient' onClick={Sub}>-</button>

    </div>
    </div>
    </>
  )
}
export default App

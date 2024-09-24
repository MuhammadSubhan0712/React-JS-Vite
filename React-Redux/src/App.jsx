import { useRef } from 'react'
import Navbar from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { addtodo, removetodo } from './config/reducer/todoSlice';

function App() {
  
  const todoVal = useRef();


  const dispatch  = useDispatch();


  const selector = useSelector(state => state.todos.todo);
  console.log(selector);

  const addtodoInRedux = (event)  => {
    event.preventDefault()
    console.log("Todo added" , todoVal.current.value);
    dispatch(addtodo({
      title: todoVal.current.value
    }))
  }

  const deletetodoitemInRedux = (index) => {
         console.log("Item has deleted at index#:" , index);
         dispatch(removetodo({index}))
  }

  // const updatetodoInRedux = (index) => {
  //   const updVal = prompt("Enter Upated Value");

  // }

  
  



  return (
    <>
     <Navbar/>
    
    <h2>
      Todo
    </h2>
  <input
  className="input is-link"
  type="text"
  placeholder="Link input"
  ref={todoVal}
/>
<button onClick={addtodoInRedux}>
  Add todo
</button>


<ul>
  {selector.length > 0 ? selector.map((item , index) => {
  return <li key={item.id}>{item.title}
  <button onClick={() => deletetodoitemInRedux(index)}>Delete</button></li>
  }): <h2> No Item found</h2>}
</ul>


    </>
  )
}

export default App

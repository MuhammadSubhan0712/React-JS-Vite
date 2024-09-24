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
     <section className="section">
        <div className="container">
          <h2 className="title is-2 has-text-centered">Todo</h2>

          <form onSubmit={addtodoInRedux}>
            <div className="field">
              <label className="label">Add a Todo</label>
              <div className="control has-icons-left">
                <input
                  className="input is-link"
                  type="text"
                  placeholder="Enter todo"
                  ref={todoVal}
                />
                <span className="icon is-left">
                  
                  {/* Font awesome */}
                  <i className="fas fa-pencil-alt"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button className="button is-primary is-fullwidth">Add Todo</button>
              </div>
            </div>
          </form>

          <div className="box mt-4">
            {selector && selector.length > 0 ? (
              selector.map((todo, index) => (
                <div key={index} className="level is-mobile mb-3">
                  <div className="level-left">
                    <div className="level-item">
                      <p>{todo.title}</p>
                    </div>
                  </div>
                  <div className="level-right">
                    <div className="level-item">
                      <button className="button is-warning is-small mr-2">
                        <span className="icon is-small">
                          <i className="fas fa-edit"></i>
                        </span>
                        <span>Edit</span>
                      </button>
                      <button className="button is-danger is-small">
                        <span className="icon is-small">
                          <i className="fas fa-trash"></i>
                        </span>
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No todos added yet.</p>
            )}
          </div>
        </div>
      </section>

    </>
  )
}

export default App

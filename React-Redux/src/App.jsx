import { useRef } from "react";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, removetodo, updatetodo } from "./config/reducer/todoSlice";

function App() {
  const todoVal = useRef();

  const dispatch = useDispatch();

  const selector = useSelector((state) => state.todos.todo);
  console.log(selector);

  const addtodoInRedux = (event) => {
    event.preventDefault();
    if (!todoVal.current.value) {
      alert("Please Enter a Item in todo");
    } else {
      console.log("Todo added", todoVal.current.value);
      dispatch(
        addtodo({
          title: todoVal.current.value,
        })
      );
    }
    todoVal.current.value = "";
  };
  // To Update the item in todo
  const updatetodoInRedux = (index) => {
    const updVal = prompt("Enter Upated Value");
    console.log("Item has updated at index # :", index);
    dispatch(updatetodo({ index, updVal }));
  };

  // To Delete the item in todo

  const deletetodoitemInRedux = (index) => {
    console.log("Item has deleted at index # :", index);
    dispatch(removetodo({ index }));
  };

  return (
    <>
      <div>
        <Navbar />
        <section className="section">
          <div className="container">
            <h2 className="title is-1 has-text-centered">Todo</h2>

            <form onSubmit={addtodoInRedux}>
              <div className="field">
                <label className="label is-size-5">Add a Todo</label>
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
                  <button
                    onClick={addtodoInRedux}
                    className="is-size-5 button is-primary is-fullwidth">
                    Add Todo
                  </button>
                </div>
              </div>
            </form>

            <div className="m-3 box is-size-5 p-2 has-text-centered has-background-info-dark has-text-white">
              {selector.length > 0 ? (
                selector.map((item, index) => (
                  <div key={item.id} className="level is-mobile mb-3">
                    <div className="level-left">
                      <div className="level-item">
                        <p>{item.title}</p>
                      </div>
                    </div>
                    <div className="level-right">
                      <div className="level-item">
                        <button
                          onClick={() => updatetodoInRedux(index)}
                          className="is-size-6 button is-warning is-small mr-2">
                          <span className="icon is-small">
                            <i className="fas fa-edit"></i>
                          </span>
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => deletetodoitemInRedux(index)}
                          className="is-size-6 button is-danger is-small">
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
                <p className="">!!No todos added yet!!</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

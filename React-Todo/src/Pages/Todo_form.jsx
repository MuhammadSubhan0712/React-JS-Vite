import { useState, useRef } from "react";
import './index.css'

function Todo() {
  const [todo, setTodo] = useState([]);
  const todoVal = useRef();

  // To add todo
  const addTodo = (event) => {
    event.preventDefault();
    if (todoVal.current.value === "") {
      alert("Please Enter todo");
    } else {
      todo.push(todoVal.current.value);
      setTodo([...todo]);
      todoVal.current.value = "";
    }
  };

  // To Edit Todo
  const EditTodo = (index) => {
    const editVal = prompt("Enter Updated Value");
    if (editVal) {
      todo.splice(index, 1, editVal);
      setTodo([...todo]);
    }
  };

  // To Delete Todo
  const DeleteTodo = (index) => {
    todo.splice(index, 1);
    setTodo([...todo]);
  };

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Todo Todo</h2>

        {/* Todo form */}
        <form className="flex space-x-4" onSubmit={addTodo}>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
            placeholder="Enter a todo"
            ref={todoVal}
          />
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg shadow hover:from-blue-500 hover:to-green-400 transition-all duration-300"
            type="submit"
          >
            Add Todo
          </button>
        </form>

        {/* Todo List */}
        <ul className="mt-6 space-y-4">
          {todo.length > 0 ? (
            todo.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-lg"
              >
                <span className="text-gray-800">{item}</span>
                <div className="space-x-2">
                  <button
                    onClick={() => EditTodo(index)}
                    className="px-3 py-1 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition-all duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => DeleteTodo(index)}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">!No todo entered yet!</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Todo;

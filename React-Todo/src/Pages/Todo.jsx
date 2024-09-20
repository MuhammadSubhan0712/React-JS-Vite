import { useState, useRef, useEffect } from "react";
import {
  query,
  collection,
  addDoc, 
  getDocs, 
  deleteDoc,
  doc,
  updateDoc,
  Timestamp,
  orderBy,
} from "firebase/firestore";

import { db } from "../Config/Firebase/firebaseconfig";


const Todo = () => {

  async function getData() {
    const q = query(collection(db , "todos" ) , orderBy ("time" , "desc"));
    const querySnapshot = await getDocs(q);
    const todos = [];
    querySnapshot.forEach((doc) => {
      todos.push({ id: doc.id, ...doc.data() });  
    });
    setTodo(todos);  
  }


  const [todo, setTodo] = useState([]);
  const todoVal = useRef();

  useEffect(() => {
    getData();
  },[])

  // To add todo
  const addTodo = async(event) => {
    event.preventDefault();
    let todoValue = todoVal.current.value;
    if (todoValue === "") {
      alert("Please Enter todo");
      return;
    } 
    else {
      todo.push(todoValue);
      setTodo([...todo]);
      todoValue = "";
    }

    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todo: todoValue,
        time: Timestamp.fromDate(new Date()),
      });
      console.log("Document written with ID: ", docRef.id);
      setTodo([...todo, 
      { id: docRef.id, 
      todo: todoValue,
      time: Timestamp.fromDate(new Date()), }]);
      todoValue = "";



    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };



  // To Edit Todo
  const EditTodo = async(i) => {
    const editVal = prompt("Enter Updated Value");
    if (editVal) {
      todo.splice(i, 1, editVal);
      setTodo([...todo]);
      const toUpdate = doc(db, "todos", todo[i].id);

      await updateDoc(toUpdate, {
        todo: editVal,
      });
      console.log("Values has been Updated");
    }

  };

  // To Delete Todo
  const DeleteTodo = async(i) => {
    todo.splice(i, 1);
    setTodo([...todo]);

    // To delete todo in the firebase
    await deleteDoc(doc(db, "todos", todo[i].id));
    console.log("Todo Deleted Successfully");
    
  };


  return (
    <>
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Todo</h2>

        {/* Todo form */}
        <form className="flex space-x-4" onSubmit={addTodo}>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
            placeholder="Enter a todo"
            ref={todoVal}
          />
          <button
            className="bg-gradient-to-r from-blue-900 to-blue-800 border-t-violet-950 text-white px-4 py-2 rounded-lg shadow hover:text-blue-300 transition-all duration-300"
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
                <span className="text-gray-800">{item.todo}</span>
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
    </>
  );
}

export default Todo;
